import { FileText, BarChart, Bell, Clock, DollarSign, FileCheck } from "lucide-react"

export const portalData = {
  overview:
    "The Naval Dockyard Vendor Portal provides registered suppliers with secure access to manage their account, view and respond to tender opportunities, submit invoices, and track payment status. This centralized platform streamlines communication and enhances collaboration between our procurement team and our valued suppliers.",

  features: [
    {
      title: "Tender Management",
      description:
        "View current tender opportunities, download tender documents, submit bids, and track the status of your submissions.",
      icon: FileText,
    },
    {
      title: "Performance Metrics",
      description:
        "Access your vendor performance metrics including delivery compliance, quality ratings, and overall performance score.",
      icon: BarChart,
    },
    {
      title: "Notifications",
      description:
        "Receive alerts for new tender opportunities, bid status updates, and important announcements from our procurement team.",
      icon: Bell,
    },
    {
      title: "Order Tracking",
      description: "View and manage purchase orders, delivery schedules, and order status updates in real-time.",
      icon: Clock,
    },
    {
      title: "Invoice Management",
      description:
        "Submit invoices electronically, check payment status, and access payment history for improved financial visibility.",
      icon: DollarSign,
    },
    {
      title: "Document Repository",
      description:
        "Access and manage all your vendor documentation including certifications, contracts, and compliance records.",
      icon: FileCheck,
    },
  ],

  faqs: [
    {
      question: "How do I reset my portal password?",
      answer:
        "Click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password. If you don't receive the email, please check your spam folder or contact our support team.",
    },
    {
      question: "Can multiple users from my company access the portal?",
      answer:
        "Yes, you can set up multiple user accounts for your company with different permission levels. The primary account administrator can manage user access through the 'User Management' section of the portal.",
    },
    {
      question: "How do I update my company information?",
      answer:
        "Log in to the portal and navigate to the 'Company Profile' section. Here you can update your contact information, certifications, and other company details. Some changes may require verification by our procurement team.",
    },
    {
      question: "How will I know when new tender opportunities are available?",
      answer:
        "You will receive email notifications for new tenders that match your product or service categories. You can also customize your notification preferences in the portal settings.",
    },
  ],
}

