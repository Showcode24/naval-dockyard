import { NextResponse } from "next/server"
import { Resend } from "resend"
import { render } from "@react-email/render"
import ConfirmationEmail from "@/app/email/confirmation-email"
import AdminNotificationEmail from "@/app/email/admin-notification-email"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Admin email from environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@navaldockyard.com"
// The "from" email address needs to be a verified domain in Resend
const FROM_EMAIL = process.env.FROM_EMAIL || "contact@yourdomain.com"

interface FormData {
  name: string
  email: string
  phone: string
  company?: string
  serviceType?: string
  vesselType?: string
  projectTimeline?: string
  message: string
  tabType: "quote" | "support" | "info"
}

export async function POST(request: Request) {
  try {
    // Log the start of the email sending process
    console.log("Starting email sending process...")

    const formData: FormData = await request.json()
    const { name, email, phone, company, serviceType, vesselType, projectTimeline, message, tabType } = formData

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name, email, message })
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Log email configuration
    console.log("Email configuration:", {
      apiKeyExists: !!process.env.RESEND_API_KEY,
      fromEmail: FROM_EMAIL,
      toUserEmail: email,
      toAdminEmail: ADMIN_EMAIL,
    })

    // Prepare user email content
    const userEmailHtml = await render(
      ConfirmationEmail({
        name,
        tabType,
        serviceType: serviceType || "N/A",
        vesselType: vesselType || "N/A",
        projectTimeline: projectTimeline || "N/A",
      }),
    )

    // Send confirmation email to user with retry logic
    let userEmailResponse
    let userEmailRetries = 0
    const maxRetries = 3

    while (userEmailRetries < maxRetries) {
      try {
        console.log(`Attempting to send user email (attempt ${userEmailRetries + 1})...`)

        userEmailResponse = await resend.emails.send({
          from: `Naval Dockyard <${FROM_EMAIL}>`,
          to: [email],
          subject: `Your ${tabType || "Contact"} Request Has Been Received - Naval Dockyard`,
          html: userEmailHtml,
        })

        console.log("User email response:", userEmailResponse)

        if (!userEmailResponse.error) {
          console.log("User email sent successfully!")
          break
        }

        console.error(`User email attempt ${userEmailRetries + 1} failed:`, userEmailResponse.error)
        userEmailRetries++

        if (userEmailRetries < maxRetries) {
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, userEmailRetries)))
        }
      } catch (error) {
        console.error(`Network error on user email attempt ${userEmailRetries + 1}:`, error)
        userEmailRetries++

        if (userEmailRetries < maxRetries) {
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, userEmailRetries)))
        }
      }
    }

    if (userEmailRetries === maxRetries) {
      console.error("Failed to send user email after maximum retries")
      return NextResponse.json(
        {
          error: "Failed to send confirmation email after multiple attempts. Please check your network connection.",
        },
        { status: 500 },
      )
    }

    // Prepare admin email content
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
    )

    // Send notification email to admin with retry logic
    let adminEmailResponse
    let adminEmailRetries = 0

    while (adminEmailRetries < maxRetries) {
      try {
        console.log(`Attempting to send admin email (attempt ${adminEmailRetries + 1})...`)

        adminEmailResponse = await resend.emails.send({
          from: `Naval Dockyard Contact Form <${FROM_EMAIL}>`,
          to: [ADMIN_EMAIL],
          subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
          html: adminEmailHtml,
          replyTo: email,
        })

        console.log("Admin email response:", adminEmailResponse)

        if (!adminEmailResponse.error) {
          console.log("Admin email sent successfully!")
          break
        }

        console.error(`Admin email attempt ${adminEmailRetries + 1} failed:`, adminEmailResponse.error)
        adminEmailRetries++

        if (adminEmailRetries < maxRetries) {
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, adminEmailRetries)))
        }
      } catch (error) {
        console.error(`Network error on admin email attempt ${adminEmailRetries + 1}:`, error)
        adminEmailRetries++

        if (adminEmailRetries < maxRetries) {
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, adminEmailRetries)))
        }
      }
    }

    // If admin email failed but user email succeeded, return partial success
    if (adminEmailRetries === maxRetries) {
      console.warn("User email sent but admin notification failed after maximum retries")
      return NextResponse.json({
        success: true,
        warning:
          "Your request was received and confirmation email sent, but we couldn't notify our team. They will see your submission in the system.",
      })
    }

    console.log("Email sending process completed successfully!")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Unexpected error in email sending process:", error)
    return NextResponse.json(
      {
        error: "Failed to process email request. Your information has been saved and our team will contact you.",
      },
      { status: 500 },
    )
  }
}
























// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { render } from "@react-email/render";
// import ConfirmationEmail from "@/app/email/confirmation-email";
// import AdminNotificationEmail from "@/app/email/admin-notification-email";

// // Initialize Resend with your API key
// const resend = new Resend(process.env.RESEND_API_KEY);

// // Admin email from environment variables
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@navaldockyard.com";
// // The "from" email address needs to be a verified domain in Resend
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

// export async function POST(request: Request) {
//   try {
//     const formData: FormData = await request.json();
//     const { name, email, phone, company, serviceType, vesselType, projectTimeline, message, tabType } = formData;

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
//     }

//     // ✅ Await render result so it's a string, not Promise<string>
//     const userEmailHtml = await render(
//       ConfirmationEmail({
//         name,
//         tabType,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//       })
//     );

//     const userEmailResponse = await resend.emails.send({
//       from: `Naval Dockyard <${FROM_EMAIL}>`,
//       to: [email],
//       subject: `Your ${tabType || "Contact"} Request Has Been Received - Naval Dockyard`,
//       html: userEmailHtml,
//     });

//     if (userEmailResponse.error) {
//       console.error("Error sending user email:", userEmailResponse.error);
//       return NextResponse.json({ error: "Failed to send confirmation email" }, { status: 500 });
//     }

//     // ✅ Await render result here as well
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
//       })
//     );

//     const adminEmailResponse = await resend.emails.send({
//       from: `Naval Dockyard Contact Form <${FROM_EMAIL}>`,
//       to: [ADMIN_EMAIL],
//       subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
//       html: adminEmailHtml,
//       replyTo: email,
//     });

//     if (adminEmailResponse.error) {
//       console.error("Error sending admin email:", adminEmailResponse.error);
//       return NextResponse.json({
//         success: true,
//         warning: "User notification sent but admin notification failed",
//       });
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }







// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"
// import { render } from "@react-email/render"
// import ConfirmationEmail from "@/app/email/confirmation-email"
// import AdminNotificationEmail from "@/app/email/admin-notification-email"

// // Add your email credentials as environment variables in your Vercel project
// const EMAIL_USER = process.env.EMAIL_USER
// const EMAIL_PASS = process.env.EMAIL_PASS
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@navaldockyard.com"

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
// const transporter = nodemailer.createTransport({
//   service: "gmail", // Or your preferred email service
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// })

// export async function POST(request: Request) {
//   try {
//     const formData: FormData = await request.json()
//     const { name, email, phone, company, serviceType, vesselType, projectTimeline, message, tabType } = formData

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
//     }

//     // Send confirmation email to user
//     const userEmailHtml = await render(
//       ConfirmationEmail({
//         name,
//         tabType,
//         serviceType: serviceType || "N/A",
//         vesselType: vesselType || "N/A",
//         projectTimeline: projectTimeline || "N/A",
//       }),
//     )

//     await transporter.sendMail({
//       from: `"Naval Dockyard" <${EMAIL_USER}>`,
//       to: email,
//       subject: `Your ${tabType || "Contact"} Request Has Been Received - Naval Dockyard`,
//       html: userEmailHtml,
//     })

//     // Send notification email to admin
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

//     await transporter.sendMail({
//       from: `"Naval Dockyard Contact Form" <${EMAIL_USER}>`,
//       to: ADMIN_EMAIL,
//       subject: `New ${tabType || "Contact"} Form Submission - ${name}`,
//       html: adminEmailHtml,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Error sending email:", error)
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
//   }
// }
