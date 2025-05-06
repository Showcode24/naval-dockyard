// @deno-types="npm:@types/node"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @deno-types="npm:@resend/types"
import { Resend } from "https://esm.sh/resend@1.0.0";

// Add initial function trigger log
console.log("========== FUNCTION INITIALIZED ==========");
console.log("Initialization timestamp:", new Date().toISOString());

// Check environment variables during initialization
const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
console.log("RESEND_API_KEY exists:", Boolean(resendApiKey));
console.log(
  "RESEND_API_KEY first 5 chars:",
  resendApiKey ? resendApiKey.substring(0, 5) + "..." : "not set",
);

const resend = new Resend(resendApiKey);

serve(async (req: Request) => {
  // Add function trigger log
  console.log("========== FUNCTION TRIGGERED ==========");
  console.log("Timestamp:", new Date().toISOString());
  console.log("Request method:", req.method);
  console.log("Request headers:", Object.fromEntries(req.headers.entries()));

  try {
    const payload = await req.json();
    console.log("Received payload:", JSON.stringify(payload, null, 2));

    // Verify payload structure
    console.log("Payload structure check:");
    console.log("- Has 'table' property:", Boolean(payload.table));
    console.log("- Table value:", payload.table);
    console.log("- Has 'type' property:", Boolean(payload.type));
    console.log("- Type value:", payload.type);
    console.log("- Has 'record' property:", Boolean(payload.record));

    if (payload.table !== "procurement" || payload.type !== "INSERT") {
      console.log("Skipping non-insert or non-procurement payload.");
      return new Response(
        JSON.stringify({
          message: "Not a procurement insert",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const vendorData = payload.record;
    console.log("Vendor data:", vendorData);

    // Check vendor data structure
    console.log("Vendor data structure check:");
    console.log("- Has 'email' property:", Boolean(vendorData?.email));
    console.log("- Has 'company' property:", Boolean(vendorData?.company));
    console.log("- Has 'name' property:", Boolean(vendorData?.name));
    console.log("- Has 'type' property:", Boolean(vendorData?.type));
    console.log("- Has 'service' property:", Boolean(vendorData?.service));

    if (!vendorData || !vendorData.email || !vendorData.company) {
      console.error("Missing vendor data fields.");
      return new Response(
        JSON.stringify({
          error: "Invalid vendor data",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const adminEmail = Deno.env.get("ADMIN_EMAIL") ||
      "procurement@navaldockyard.com";
    console.log("ADMIN_EMAIL value:", adminEmail);

    const businessType = vendorData.type
      ? vendorData.type.replace(/-/g, " ")
      : "Not specified";
    const services = vendorData.service || "Not specified";

    // Log admin email details before sending
    console.log("Sending admin email to:", adminEmail);
    console.log("Admin email details:", {
      from: "Naval Dockyard <info@navaldockyardltd.com>",
      to: adminEmail,
      subject: `New Vendor Registration: ${vendorData.company}`,
    });

    const adminEmailResult = await resend.emails.send({
      from: "Naval Dockyard <info@navaldockyardltd.com>",
      to: adminEmail,
      subject: `New Vendor Registration: ${vendorData.company}`,
      html: getAdminEmailTemplate({
        company: vendorData.company,
        name: vendorData.name || "Not provided",
        email: vendorData.email,
        type: businessType,
        service: services,
      }),
    });

    // Log detailed admin email result
    console.log("Admin email raw result:", JSON.stringify(adminEmailResult));

    if (adminEmailResult.error) {
      console.error("Error sending admin email:", adminEmailResult.error);
      console.error("Error details:", JSON.stringify(adminEmailResult.error));
    } else {
      console.log("Admin email sent successfully.");
      console.log("Admin email ID:", adminEmailResult.data?.id);
    }

    // Log user email details before sending
    console.log("Sending confirmation email to user:", vendorData.email);
    console.log("User email details:", {
      from: "Naval Dockyard <notifications@navaldockyardltd.com>",
      to: vendorData.email,
      subject: "Your Vendor Registration Submission - Naval Dockyard",
    });

    const userEmailResult = await resend.emails.send({
      from: "Naval Dockyard <notifications@navaldockyardltd.com>",
      to: vendorData.email,
      subject: "Your Vendor Registration Submission - Naval Dockyard",
      html: getUserEmailTemplate({
        company: vendorData.company,
        name: vendorData.name || "Vendor",
        email: vendorData.email,
        type: businessType,
        service: services,
      }),
    });

    // Log detailed user email result
    console.log("User email raw result:", JSON.stringify(userEmailResult));

    if (userEmailResult.error) {
      console.error("Error sending user email:", userEmailResult.error);
      console.error("Error details:", JSON.stringify(userEmailResult.error));
    } else {
      console.log("User confirmation email sent successfully.");
      console.log("User email ID:", userEmailResult.data?.id);
    }

    // Log final response
    console.log("Function completed successfully. Returning response.");

    return new Response(
      JSON.stringify({
        success: true,
        adminEmailSent: !adminEmailResult.error,
        userEmailSent: !userEmailResult.error,
        adminEmailResult: adminEmailResult,
        userEmailResult: userEmailResult,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error processing webhook:", message);

    // Add more detailed error logging
    if (error instanceof Error) {
      console.error("Error stack:", error.stack);
      console.error("Error name:", error.name);
    }
    console.error(
      "Error stringified:",
      JSON.stringify(error, Object.getOwnPropertyNames(error)),
    );

    return new Response(
      JSON.stringify({
        error: message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
});

function getAdminEmailTemplate(
  data: {
    company: string;
    name: string;
    email: string;
    type: string;
    service: string;
  },
) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003366; color: white; padding: 15px; text-align: center; }
        .content { padding: 20px; border: 1px solid #ddd; }
        .footer { font-size: 12px; text-align: center; margin-top: 20px; color: #666; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; border-bottom: 1px solid #ddd; }
        td:first-child { font-weight: bold; width: 40%; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Vendor Registration</h2>
        </div>
        <div class="content">
          <p>A new vendor has submitted a registration form for Naval Dockyard.</p>
          <table>
            <tr><td>Company:</td><td>${data.company}</td></tr>
            <tr><td>Contact Name:</td><td>${data.name}</td></tr>
            <tr><td>Email:</td><td>${data.email}</td></tr>
            <tr><td>Business Type:</td><td>${data.type}</td></tr>
            <tr><td>Services:</td><td>${data.service}</td></tr>
          </table>
          <p>Please log in to the admin dashboard to review the complete submission.</p>
        </div>
        <div class="footer">
          <p>This is an automated message from the Naval Dockyard Vendor Management System.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getUserEmailTemplate(
  data: {
    company: string;
    name: string;
    email: string;
    type: string;
    service: string;
  },
) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003366; color: white; padding: 15px; text-align: center; }
        .content { padding: 20px; border: 1px solid #ddd; }
        .footer { font-size: 12px; text-align: center; margin-top: 20px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Vendor Registration Confirmation</h2>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          <p>Thank you for submitting your vendor registration for <strong>${data.company}</strong> to Naval Dockyard.</p>
          <p>Your registration has been received and is currently under review by our procurement team. You can expect to hear back from us within 5-7 business days regarding the status of your application.</p>
          <p>Registration Details:</p>
          <ul>
            <li>Company: ${data.company}</li>
            <li>Business Type: ${data.type}</li>
            <li>Services: ${data.service}</li>
          </ul>
          <p>If you have any questions or need to provide additional information, please contact our procurement team at procurement@navaldockyard.com or call (555) 123-4567.</p>
          <p>Thank you for your interest in working with Naval Dockyard.</p>
          <p>Best regards,<br>Naval Dockyard Procurement Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// // @deno-types="npm:@types/node"
// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// // @deno-types="npm:@resend/types"
// import { Resend } from "https://esm.sh/resend@1.0.0";

// // Add initial function trigger log
// console.log("========== FUNCTION INITIALIZED ==========");
// console.log("Initialization timestamp:", new Date().toISOString());

// // Check environment variables during initialization
// const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
// console.log("RESEND_API_KEY exists:", Boolean(resendApiKey));
// console.log(
//   "RESEND_API_KEY first 5 chars:",
//   resendApiKey ? resendApiKey.substring(0, 5) + "..." : "not set",
// );

// const resend = new Resend(resendApiKey);

// serve(async (req: Request) => {
//   // Add function trigger log
//   console.log("========== FUNCTION TRIGGERED ==========");
//   console.log("Timestamp:", new Date().toISOString());
//   console.log("Request method:", req.method);
//   console.log("Request headers:", Object.fromEntries(req.headers.entries()));

//   try {
//     const payload = await req.json();
//     console.log("Received payload:", JSON.stringify(payload, null, 2));

//     // Verify payload structure
//     console.log("Payload structure check:");
//     console.log("- Has 'table' property:", Boolean(payload.table));
//     console.log("- Table value:", payload.table);
//     console.log("- Has 'type' property:", Boolean(payload.type));
//     console.log("- Type value:", payload.type);
//     console.log("- Has 'record' property:", Boolean(payload.record));

//     if (payload.table !== "procurement" || payload.type !== "INSERT") {
//       console.log("Skipping non-insert or non-procurement payload.");
//       return new Response(
//         JSON.stringify({
//           message: "Not a procurement insert",
//         }),
//         {
//           status: 200,
//           headers: { "Content-Type": "application/json" },
//         },
//       );
//     }

//     const vendorData = payload.record;
//     console.log("Vendor data:", vendorData);

//     // Check vendor data structure
//     console.log("Vendor data structure check:");
//     console.log("- Has 'email' property:", Boolean(vendorData?.email));
//     console.log("- Has 'company' property:", Boolean(vendorData?.company));
//     console.log("- Has 'name' property:", Boolean(vendorData?.name));
//     console.log("- Has 'type' property:", Boolean(vendorData?.type));
//     console.log("- Has 'service' property:", Boolean(vendorData?.service));

//     if (!vendorData || !vendorData.email || !vendorData.company) {
//       console.error("Missing vendor data fields.");
//       return new Response(
//         JSON.stringify({
//           error: "Invalid vendor data",
//         }),
//         {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         },
//       );
//     }

//     const adminEmail = Deno.env.get("ADMIN_EMAIL") ||
//       "procurement@navaldockyard.com";
//     console.log("ADMIN_EMAIL value:", adminEmail);

//     const businessType = vendorData.type
//       ? vendorData.type.replace(/-/g, " ")
//       : "Not specified";
//     const services = vendorData.service || "Not specified";

//     // Log admin email details before sending
//     console.log("Sending admin email to:", adminEmail);
//     console.log("Admin email details:", {
//       from: "Naval Dockyard <info@navaldockyardltd.com>",
//       to: adminEmail,
//       subject: `New Vendor Registration: ${vendorData.company}`,
//     });

//     const adminEmailResult = await resend.emails.send({
//       from: "Naval Dockyard <info@navaldockyardltd.com>",
//       to: adminEmail,
//       subject: `New Vendor Registration: ${vendorData.company}`,
//       html: getAdminEmailTemplate({
//         company: vendorData.company,
//         name: vendorData.name || "Not provided",
//         email: vendorData.email,
//         type: businessType,
//         service: services,
//       }),
//     });

//     // Log detailed admin email result
//     console.log("Admin email raw result:", JSON.stringify(adminEmailResult));

//     if (adminEmailResult.error) {
//       console.error("Error sending admin email:", adminEmailResult.error);
//       console.error("Error details:", JSON.stringify(adminEmailResult.error));
//     } else {
//       console.log("Admin email sent successfully.");
//       console.log("Admin email ID:", adminEmailResult.data?.id);
//     }

//     // Log user email details before sending
//     console.log("Sending confirmation email to user:", vendorData.email);
//     console.log("User email details:", {
//       from: "Naval Dockyard <notifications@navaldockyardltd.com>",
//       to: vendorData.email,
//       subject: "Your Vendor Registration Submission - Naval Dockyard",
//     });

//     const userEmailResult = await resend.emails.send({
//       from: "Naval Dockyard <notifications@navaldockyardltd.com>",
//       to: vendorData.email,
//       subject: "Your Vendor Registration Submission - Naval Dockyard",
//       html: getUserEmailTemplate({
//         company: vendorData.company,
//         name: vendorData.name || "Vendor",
//         email: vendorData.email,
//         type: businessType,
//         service: services,
//       }),
//     });

//     // Log detailed user email result
//     console.log("User email raw result:", JSON.stringify(userEmailResult));

//     if (userEmailResult.error) {
//       console.error("Error sending user email:", userEmailResult.error);
//       console.error("Error details:", JSON.stringify(userEmailResult.error));
//     } else {
//       console.log("User confirmation email sent successfully.");
//       console.log("User email ID:", userEmailResult.data?.id);
//     }

//     // Log final response
//     console.log("Function completed successfully. Returning response.");

//     return new Response(
//       JSON.stringify({
//         success: true,
//         adminEmailSent: !adminEmailResult.error,
//         userEmailSent: !userEmailResult.error,
//         adminEmailResult: adminEmailResult,
//         userEmailResult: userEmailResult,
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       },
//     );
//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Unknown error";
//     console.error("Error processing webhook:", message);

//     // Add more detailed error logging
//     if (error instanceof Error) {
//       console.error("Error stack:", error.stack);
//       console.error("Error name:", error.name);
//     }
//     console.error(
//       "Error stringified:",
//       JSON.stringify(error, Object.getOwnPropertyNames(error)),
//     );

//     return new Response(
//       JSON.stringify({
//         error: message,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       },
//     );
//   }
// });

// function getAdminEmailTemplate(
//   data: {
//     company: string;
//     name: string;
//     email: string;
//     type: string;
//     service: string;
//   },
// ) {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//         .header { background-color: #003366; color: white; padding: 15px; text-align: center; }
//         .content { padding: 20px; border: 1px solid #ddd; }
//         .footer { font-size: 12px; text-align: center; margin-top: 20px; color: #666; }
//         table { width: 100%; border-collapse: collapse; }
//         td { padding: 8px; border-bottom: 1px solid #ddd; }
//         td:first-child { font-weight: bold; width: 40%; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>New Vendor Registration</h2>
//         </div>
//         <div class="content">
//           <p>A new vendor has submitted a registration form for Naval Dockyard.</p>
//           <table>
//             <tr><td>Company:</td><td>${data.company}</td></tr>
//             <tr><td>Contact Name:</td><td>${data.name}</td></tr>
//             <tr><td>Email:</td><td>${data.email}</td></tr>
//             <tr><td>Business Type:</td><td>${data.type}</td></tr>
//             <tr><td>Services:</td><td>${data.service}</td></tr>
//           </table>
//           <p>Please log in to the admin dashboard to review the complete submission.</p>
//         </div>
//         <div class="footer">
//           <p>This is an automated message from the Naval Dockyard Vendor Management System.</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;
// }

// function getUserEmailTemplate(
//   data: {
//     company: string;
//     name: string;
//     email: string;
//     type: string;
//     service: string;
//   },
// ) {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//         .header { background-color: #003366; color: white; padding: 15px; text-align: center; }
//         .content { padding: 20px; border: 1px solid #ddd; }
//         .footer { font-size: 12px; text-align: center; margin-top: 20px; color: #666; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>Vendor Registration Confirmation</h2>
//         </div>
//         <div class="content">
//           <p>Dear ${data.name},</p>
//           <p>Thank you for submitting your vendor registration for <strong>${data.company}</strong> to Naval Dockyard.</p>
//           <p>Your registration has been received and is currently under review by our procurement team. You can expect to hear back from us within 5-7 business days regarding the status of your application.</p>
//           <p>Registration Details:</p>
//           <ul>
//             <li>Company: ${data.company}</li>
//             <li>Business Type: ${data.type}</li>
//             <li>Services: ${data.service}</li>
//           </ul>
//           <p>If you have any questions or need to provide additional information, please contact our procurement team at procurement@navaldockyard.com or call (555) 123-4567.</p>
//           <p>Thank you for your interest in working with Naval Dockyard.</p>
//           <p>Best regards,<br>Naval Dockyard Procurement Team</p>
//         </div>
//         <div class="footer">
//           <p>This is an automated message, please do not reply directly to this email.</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;
// }
