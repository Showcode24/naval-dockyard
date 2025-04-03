import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProcurementFAQPage() {
  const faqCategories = [
    {
      title: "Vendor Registration",
      faqs: [
        {
          question: "How do I register as a vendor?",
          answer:
            "To register as a vendor, visit our Vendor Registration page and complete the online registration form. You'll need to provide company information, product/service categories, and upload required documents.",
        },
        {
          question: "What documents are required for vendor registration?",
          answer:
            "Required documents typically include business registration/license, tax registration certificate, insurance certificates, quality management certification (if applicable), and recent financial statements.",
        },
        {
          question: "How long does the vendor registration process take?",
          answer:
            "The initial review of your registration typically takes 5-7 business days. If additional information is required, the process may take longer.",
        },
        {
          question: "Is there a fee for vendor registration?",
          answer: "No, there is no fee to register as a vendor with Naval Dockyard Limited.",
        },
      ],
    },
    {
      title: "Tender Process",
      faqs: [
        {
          question: "How are vendors notified of new tender opportunities?",
          answer:
            "Approved vendors receive email notifications for tender opportunities that match their product or service categories. All current tenders are also listed on our procurement portal.",
        },
        {
          question: "What is the typical timeline for the tender process?",
          answer:
            "The tender process typically runs for 2-4 weeks from publication to closing date, depending on the complexity of the requirements. Evaluation may take an additional 1-3 weeks before award notification.",
        },
        {
          question: "Can I submit a bid after the closing date?",
          answer:
            "No, bids submitted after the closing date and time will not be accepted. Please ensure your submission is completed before the deadline.",
        },
        {
          question: "How are bids evaluated?",
          answer:
            "Bids are evaluated based on technical compliance with specifications, price competitiveness, delivery timeline, vendor experience and capability, and other criteria specified in the tender documents.",
        },
      ],
    },
    {
      title: "Vendor Portal",
      faqs: [
        {
          question: "How do I access the vendor portal?",
          answer:
            "Once registered and approved, you will receive login credentials for the vendor portal. You can access the portal through the Procurement section of our website.",
        },
        {
          question: "I forgot my portal password. How can I reset it?",
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
      ],
    },
    {
      title: "Payment & Contracts",
      faqs: [
        {
          question: "What are your payment terms?",
          answer:
            "Standard payment terms are net 30 days from receipt of a correct invoice after acceptance of goods or services. Specific payment terms may vary by contract and will be clearly stated in the purchase order or contract.",
        },
        {
          question: "How do I submit an invoice?",
          answer:
            "Invoices should be submitted through the vendor portal. Ensure your invoice references the purchase order number and includes all required information as specified in your contract.",
        },
        {
          question: "How can I check the status of my payment?",
          answer:
            "You can check payment status through the vendor portal under the 'Invoices & Payments' section. This shows submitted invoices, approval status, and payment information.",
        },
        {
          question: "What is your policy on advance payments?",
          answer:
            "Advance payments are generally not provided except in specific circumstances where they are necessary for contract performance. Any advance payment terms will be clearly specified in the contract.",
        },
      ],
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Procurement FAQs</h1>
            <p className="text-xl text-gray-300">Answers to commonly asked questions about our procurement process</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted p-6 rounded-lg mb-12">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Need Additional Help?</h2>
                  <p className="text-muted-foreground mb-4">
                    If you can't find the answer to your question here, please contact our procurement team for
                    assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Contact Procurement Team</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/procurement">Return to Procurement</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-primary text-white p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold mb-4 text-center">Ready to Become a Vendor?</h2>
              <p className="text-center mb-6">
                Join our network of trusted suppliers and contractors to support our shipyard operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" asChild>
                  <Link href="/procurement/vendor-registration">Register as a Vendor</Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/procurement/tenders">View Current Tenders</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

