import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ConfirmationEmail from "@/app/email/confirmation-email";
import AdminNotificationEmail from "@/app/email/admin-notification-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL || "admin@navaldockyard.com";
const fromEmail = process.env.FROM_EMAIL || "contact@yourdomain.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      vesselType,
      projectTimeline,
      message,
      tabType,
    } = body;

    // Send confirmation email to the user
    const userEmailHtml = await render(
      ConfirmationEmail({
        name,
        tabType,
        serviceType: serviceType || "N/A",
        vesselType: vesselType || "N/A",
        projectTimeline: projectTimeline || "N/A",
      }),
    );

    const userEmailInfo = await resend.emails.send({
      from: `Naval Dockyard <${fromEmail}>`,
      to: email,
      subject: `Your ${
        tabType || "Contact"
      } Request Has Been Received - Naval Dockyard`,
      html: userEmailHtml,
    });

    if (userEmailInfo.error) {
      return NextResponse.json({ error: userEmailInfo.error });
    }

    console.log("User email sent successfully:", userEmailInfo.data?.id);

    // Send notification email to the admin
    const adminEmailHtml = await render(
      AdminNotificationEmail({
        name,
        email,
        phone,
        company,
        serviceType: serviceType || "N/A",
        vesselType: vesselType || "N/A",
        projectTimeline: projectTimeline || "N/A",
        message,
        tabType,
      }),
    );

    const adminEmailInfo = await resend.emails.send({
      from: `Naval Dockyard Contact Form <${fromEmail}>`,
      to: adminEmail,
      subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    if (adminEmailInfo.error) {
      return NextResponse.json({ error: adminEmailInfo.error });
    }

    console.log("Admin email sent successfully:", adminEmailInfo.data?.id);

    return NextResponse.json({
      message: "Emails sent successfully!",
      userEmailId: userEmailInfo.data?.id,
      adminEmailId: adminEmailInfo.data?.id,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { render } from "@react-email/render";
// import ConfirmationEmail from "@/app/email/confirmation-email";
// import AdminNotificationEmail from "@/app/email/admin-notification-email";

// // Email configuration from environment variables
// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@navaldockyard.com";
// const FROM_EMAIL = process.env.FROM_EMAIL || "contact@yourdomain.com";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   company?: string;
//   serviceType?: string;
//   vesselType?: string;
//   projectTimeline?: string;
//   message: string;
//   tabType: "quote" | "support" | "info";
// }

// // Create a transporter
// const createTransporter = () => {
//   if (!EMAIL_USER || !EMAIL_PASS) {
//     throw new Error("Email credentials not configured");
//   }

//   return nodemailer.createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: EMAIL_USER,
//       pass: EMAIL_PASS,
//     },
//   });
// };

// export async function POST(request: Request) {
//   try {
//     // Log the start of the email sending process
//     console.log("Starting email sending process...");

//     const formData: FormData = await request.json();
//     const {
//       name,
//       email,
//       phone,
//       company,
//       serviceType,
//       vesselType,
//       projectTimeline,
//       message,
//       tabType,
//     } = formData;

//     // Validate required fields
//     if (!name || !email || !message) {
//       console.error("Missing required fields:", { name, email, message });
//       return NextResponse.json({ error: "Required fields are missing" }, {
//         status: 400,
//       });
//     }

//     // Create transporter
//     const transporter = createTransporter();

//     // Prepare user email content
//     const userEmailHtml = await render(
//       ConfirmationEmail({
//         name,
//         tabType,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//       }),
//     );

//     // Send confirmation email to user with retry logic
//     let userEmailRetries = 0;
//     const maxRetries = 3;

//     while (userEmailRetries < maxRetries) {
//       try {
//         console.log(
//           `Attempting to send user email (attempt ${userEmailRetries + 1})...`,
//         );

//         const userEmailInfo = await transporter.sendMail({
//           from: `Naval Dockyard <${FROM_EMAIL}>`,
//           to: email,
//           subject: `Your ${
//             tabType || "Contact"
//           } Request Has Been Received - Naval Dockyard`,
//           html: userEmailHtml,
//         });

//         console.log("User email sent successfully:", userEmailInfo.messageId);
//         break;
//       } catch (error) {
//         console.error(
//           `Error on user email attempt ${userEmailRetries + 1}:`,
//           error,
//         );
//         userEmailRetries++;

//         if (userEmailRetries < maxRetries) {
//           // Wait before retrying (exponential backoff)
//           await new Promise((resolve) =>
//             setTimeout(resolve, 1000 * Math.pow(2, userEmailRetries))
//           );
//         }
//       }
//     }

//     if (userEmailRetries === maxRetries) {
//       console.error("Failed to send user email after maximum retries");
//       return NextResponse.json(
//         {
//           error:
//             "Failed to send confirmation email after multiple attempts. Please try again later.",
//         },
//         { status: 500 },
//       );
//     }

//     // Prepare admin email content
//     const adminEmailHtml = await render(
//       AdminNotificationEmail({
//         name,
//         email,
//         phone,
//         company,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//         message,
//         tabType,
//       }),
//     );

//     // Send notification email to admin with retry logic
//     let adminEmailRetries = 0;

//     while (adminEmailRetries < maxRetries) {
//       try {
//         console.log(
//           `Attempting to send admin email (attempt ${
//             adminEmailRetries + 1
//           })...`,
//         );

//         const adminEmailInfo = await transporter.sendMail({
//           from: `Naval Dockyard Contact Form <${FROM_EMAIL}>`,
//           to: ADMIN_EMAIL,
//           subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
//           html: adminEmailHtml,
//           replyTo: email,
//         });

//         console.log("Admin email sent successfully:", adminEmailInfo.messageId);
//         break;
//       } catch (error) {
//         console.error(
//           `Error on admin email attempt ${adminEmailRetries + 1}:`,
//           error,
//         );
//         adminEmailRetries++;

//         if (adminEmailRetries < maxRetries) {
//           // Wait before retrying (exponential backoff)
//           await new Promise((resolve) =>
//             setTimeout(resolve, 1000 * Math.pow(2, adminEmailRetries))
//           );
//         }
//       }
//     }

//     // If admin email failed but user email succeeded, return partial success
//     if (adminEmailRetries === maxRetries) {
//       console.warn(
//         "User email sent but admin notification failed after maximum retries",
//       );
//       return NextResponse.json({
//         success: true,
//         warning:
//           "Your request was received and confirmation email sent, but we couldn't notify our team. They will see your submission in the system.",
//       });
//     }

//     console.log("Email sending process completed successfully!");
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Unexpected error in email sending process:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to process email request. Please try again later.",
//       },
//       { status: 500 },
//     );
//   }
// }

// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"
// import { render } from "@react-email/render"
// import ConfirmationEmail from "@/app/email/confirmation-email"
// import AdminNotificationEmail from "@/app/email/admin-notification-email"

// // Email configuration from environment variables
// const EMAIL_USER = process.env.EMAIL_USER
// const EMAIL_PASS = process.env.EMAIL_PASS
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@navaldockyard.com"
// const FROM_EMAIL = process.env.FROM_EMAIL || "contact@yourdomain.com"

// interface FormData {
//   name: string
//   email: string
//   phone: string
//   company?: string
//   serviceType?: string
//   vesselType?: string
//   projectTimeline?: string
//   message: string
//   tabType: "quote" | "support" | "info"
// }

// // Create a transporter
// const createTransporter = () => {
//   if (!EMAIL_USER || !EMAIL_PASS) {
//     throw new Error("Email credentials not configured")
//   }

//   return nodemailer.createTransport({
//     service: "gmail", // Or your preferred email service
//     auth: {
//       user: EMAIL_USER,
//       pass: EMAIL_PASS,
//     },
//   })
// }

// export async function POST(request: Request) {
//   try {
//     // Log the start of the email sending process
//     console.log("Starting email sending process...")

//     const formData: FormData = await request.json()
//     const { name, email, phone, company, serviceType, vesselType, projectTimeline, message, tabType } = formData

//     // Validate required fields
//     if (!name || !email || !message) {
//       console.error("Missing required fields:", { name, email, message })
//       return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
//     }

//     // Create transporter
//     const transporter = createTransporter()

//     // Prepare user email content
//     const userEmailHtml = await render(
//       ConfirmationEmail({
//         name,
//         tabType,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//       }),
//     )

//     // Send confirmation email to user with retry logic
//     let userEmailRetries = 0
//     const maxRetries = 3

//     while (userEmailRetries < maxRetries) {
//       try {
//         console.log(`Attempting to send user email (attempt ${userEmailRetries + 1})...`)

//         const userEmailInfo = await transporter.sendMail({
//           from: `Naval Dockyard <${FROM_EMAIL}>`,
//           to: email,
//           subject: `Your ${tabType || "Contact"} Request Has Been Received - Naval Dockyard`,
//           html: userEmailHtml,
//         })

//         console.log("User email sent successfully:", userEmailInfo.messageId)
//         break
//       } catch (error) {
//         console.error(`Error on user email attempt ${userEmailRetries + 1}:`, error)
//         userEmailRetries++

//         if (userEmailRetries < maxRetries) {
//           // Wait before retrying (exponential backoff)
//           await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, userEmailRetries)))
//         }
//       }
//     }

//     if (userEmailRetries === maxRetries) {
//       console.error("Failed to send user email after maximum retries")
//       return NextResponse.json(
//         {
//           error: "Failed to send confirmation email after multiple attempts. Please try again later.",
//         },
//         { status: 500 },
//       )
//     }

//     // Prepare admin email content
//     const adminEmailHtml = await render(
//       AdminNotificationEmail({
//         name,
//         email,
//         phone,
//         company,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//         message,
//         tabType,
//       }),
//     )

//     // Send notification email to admin with retry logic
//     let adminEmailRetries = 0

//     while (adminEmailRetries < maxRetries) {
//       try {
//         console.log(`Attempting to send admin email (attempt ${adminEmailRetries + 1})...`)

//         const adminEmailInfo = await transporter.sendMail({
//           from: `Naval Dockyard Contact Form <${FROM_EMAIL}>`,
//           to: ADMIN_EMAIL,
//           subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
//           html: adminEmailHtml,
//           replyTo: email,
//         })

//         console.log("Admin email sent successfully:", adminEmailInfo.messageId)
//         break
//       } catch (error) {
//         console.error(`Error on admin email attempt ${adminEmailRetries + 1}:`, error)
//         adminEmailRetries++

//         if (adminEmailRetries < maxRetries) {
//           // Wait before retrying (exponential backoff)
//           await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, adminEmailRetries)))
//         }
//       }
//     }

//     // If admin email failed but user email succeeded, return partial success
//     if (adminEmailRetries === maxRetries) {
//       console.warn("User email sent but admin notification failed after maximum retries")
//       return NextResponse.json({
//         success: true,
//         warning:
//           "Your request was received and confirmation email sent, but we couldn't notify our team. They will see your submission in the system.",
//       })
//     }

//     console.log("Email sending process completed successfully!")
//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Unexpected error in email sending process:", error)
//     return NextResponse.json(
//       {
//         error: "Failed to process email request. Please try again later.",
//       },
//       { status: 500 },
//     )
//   }
// }
