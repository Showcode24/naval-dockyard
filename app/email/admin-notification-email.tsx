import { Body, Container, Head, Heading, Html, Section, Text, Hr } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface AdminNotificationEmailProps {
  name: string
  email: string
  phone: string
  company?: string
  serviceType?: string
  vesselType?: string
  projectTimeline?: string
  message: string
  tabType?: string
}

export default function AdminNotificationEmail({
  name,
  email,
  phone,
  company = "N/A",
  serviceType = "N/A",
  vesselType = "N/A",
  projectTimeline = "N/A",
  message,
  tabType = "quote",
}: AdminNotificationEmailProps) {
  const getFormType = () => {
    switch (tabType) {
      case "quote":
        return "Quote Request"
      case "support":
        return "Support Request"
      case "info":
        return "Information Request"
      default:
        return "Contact Form"
    }
  }

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-[600px]">
            <Section className="bg-white rounded-lg overflow-hidden shadow-lg p-8">
              <Heading className="text-xl font-bold text-gray-800 mb-4">New {getFormType()} Submission</Heading>

              <Text className="text-gray-700 mb-6">
                You have received a new {getFormType().toLowerCase()} submission from {name}.
              </Text>

              <Section className="bg-gray-50 rounded-lg p-6 mb-6">
                <Heading className="text-lg font-semibold text-gray-800 mb-4">Contact Information</Heading>

                <Section className="mb-3">
                  <Text className="text-sm text-gray-500 mb-1">Name:</Text>
                  <Text className="text-gray-700 font-medium">{name}</Text>
                </Section>

                <Section className="mb-3">
                  <Text className="text-sm text-gray-500 mb-1">Email:</Text>
                  <Text className="text-gray-700 font-medium">{email}</Text>
                </Section>

                <Section className="mb-3">
                  <Text className="text-sm text-gray-500 mb-1">Phone:</Text>
                  <Text className="text-gray-700 font-medium">{phone}</Text>
                </Section>

                <Section className="mb-3">
                  <Text className="text-sm text-gray-500 mb-1">Company/Organization:</Text>
                  <Text className="text-gray-700 font-medium">{company}</Text>
                </Section>
              </Section>

              {tabType === "quote" && (
                <Section className="bg-gray-50 rounded-lg p-6 mb-6">
                  <Heading className="text-lg font-semibold text-gray-800 mb-4">Project Details</Heading>

                  <Section className="mb-3">
                    <Text className="text-sm text-gray-500 mb-1">Service Type:</Text>
                    <Text className="text-gray-700 font-medium">{serviceType}</Text>
                  </Section>

                  <Section className="mb-3">
                    <Text className="text-sm text-gray-500 mb-1">Vessel Type:</Text>
                    <Text className="text-gray-700 font-medium">{vesselType}</Text>
                  </Section>

                  <Section className="mb-3">
                    <Text className="text-sm text-gray-500 mb-1">Project Timeline:</Text>
                    <Text className="text-gray-700 font-medium">{projectTimeline}</Text>
                  </Section>
                </Section>
              )}

              <Section className="bg-gray-50 rounded-lg p-6">
                <Heading className="text-lg font-semibold text-gray-800 mb-3">Message</Heading>
                <Text className="text-gray-700 whitespace-pre-line">{message}</Text>
              </Section>

              <Hr className="border-gray-200 my-6" />

              <Text className="text-sm text-gray-500 italic">
                This is an automated notification from the Naval Dockyard website contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
