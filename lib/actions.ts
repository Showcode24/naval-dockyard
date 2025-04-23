'use server'

import { revalidatePath } from 'next/cache';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType?: string;
  vesselType?: string;
  projectTimeline?: string;
  message: string;
  tabType: 'quote' | 'support' | 'info';
}

export async function submitContactForm(formData: FormData) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const url = new URL('/api/send-email', baseUrl).toString();
    
    console.log("Submitting to URL:", url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    // Check if response is OK before trying to parse JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    revalidatePath('/contact');
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}