"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "@/supabaseClient"

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
  projectId?: string
  issueType?: string
  issueDetails?: string
}

export async function submitContactForm(formData: FormData) {
  try {
    console.log("Starting form submission process...")
    const { name, email, phone, company, serviceType, vesselType, projectTimeline, message, tabType } = formData

    // 1. Store data in Supabase first
    console.log("Storing data in Supabase...")
    const { data, error } = await supabase.from("quote_requests").insert([
      {
        name,
        email,
        phone,
        company,
        service_type: serviceType,
        vessel_type: vesselType,
        project_timeline: projectTimeline,
        message,
        form_type: tabType,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to store your request. Please try again.",
      }
    }

    console.log("Data successfully stored in Supabase")

    // 2. Send email notifications with timeout
    console.log("Attempting to send email notifications...")
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const url = new URL("/api/send-email", baseUrl).toString()

    console.log("Sending request to:", url)

    // Set a timeout for the fetch request
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      // Clear the timeout
      clearTimeout(timeoutId)

      console.log("Email API response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Email API Error Response:", errorText)

        // Return partial success since data was stored but email failed
        return {
          success: true,
          warning:
            "Your request was saved, but we could not send confirmation emails due to network issues. Our team will contact you shortly.",
        }
      }

      const emailData = await response.json()
      console.log("Email API response data:", emailData)

      if (emailData.warning) {
        return {
          success: true,
          warning: emailData.warning,
        }
      }

      console.log("Form submission process completed successfully")
      revalidatePath("/contact")
      return { success: true }
    } catch (fetchError) {
      // Clear the timeout if there was an error
      clearTimeout(timeoutId)

      console.error("Error sending emails:", fetchError)

      // If it's a timeout or network error, return partial success
      if (fetchError.name === "AbortError") {
        console.warn("Email request timed out")
        return {
          success: true,
          warning: "Your request was saved, but the email notification timed out. Our team will contact you shortly.",
        }
      }

      return {
        success: true,
        warning:
          "Your request was saved, but we could not send confirmation emails. Our team will contact you shortly.",
      }
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

















// 'use server'

// import { revalidatePath } from 'next/cache';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   company?: string;
//   serviceType?: string;
//   vesselType?: string;
//   projectTimeline?: string;
//   message: string;
//   tabType: 'quote' | 'support' | 'info';
// }

// export async function submitContactForm(formData: FormData) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
//     const url = new URL('/api/send-email', baseUrl).toString();
    
//     console.log("Submitting to URL:", url);
    
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
    
//     // Check if response is OK before trying to parse JSON
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API Error Response:", errorText);
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }
    
//     const data = await response.json();
    
//     revalidatePath('/contact');
//     return { success: true };
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'An unknown error occurred' 
//     };
//   }
// }