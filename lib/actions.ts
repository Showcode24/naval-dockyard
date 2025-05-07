"use server";

import { revalidatePath } from "next/cache";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType?: string;
  vesselType?: string;
  projectTimeline?: string;
  message: string;
  tabType: "quote" | "support" | "info";
  projectId?: string;
  issueType?: string;
  issueDetails?: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    console.log("Starting form submission process...");

    // Log the form data for debugging (remove sensitive data in production)
    console.log("Form data received:", {
      name: formData.name,
      email: formData.email,
      tabType: formData.tabType,
      // Don't log full message for privacy
      messageLength: formData.message?.length || 0,
    });

    // Send email notifications
    console.log("Attempting to send email notifications...");
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const url = new URL("/api/send-email", baseUrl).toString();

    console.log("Sending request to:", url);

    // Set a timeout for the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      // Clear the timeout
      clearTimeout(timeoutId);

      console.log("Email API response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Email API Error Response:", errorText);

        return {
          success: false,
          error: "Failed to send email notifications. Please try again later.",
        };
      }

      const emailData = await response.json();
      console.log("Email API response data:", emailData);

      if (emailData.warning) {
        return {
          success: true,
          warning: emailData.warning,
        };
      }

      console.log("Form submission process completed successfully");
      revalidatePath("/contact");
      return { success: true };
    } catch (fetchError) {
      // Clear the timeout if there was an error
      clearTimeout(timeoutId);

      console.error("Error sending emails:", fetchError);

      // If it's a timeout or network error
      if (fetchError.name === "AbortError") {
        console.warn("Email request timed out");
        return {
          success: false,
          error: "Request timed out. Please try again.",
        };
      }

      return {
        success: false,
        error: "Failed to process your request. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      error: error instanceof Error
        ? error.message
        : "An unknown error occurred",
    };
  }
}
