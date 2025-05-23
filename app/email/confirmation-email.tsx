import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Button,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ConfirmationEmailProps {
  name: string
  tabType?: string
  serviceType?: string
  vesselType?: string
  projectTimeline?: string
}

export default function ConfirmationEmail({
  name,
  tabType = "Quote",
  serviceType = "N/A",
  vesselType = "N/A",
  projectTimeline = "N/A",
}: ConfirmationEmailProps) {
  const getSubject = () => {
    switch (tabType) {
      case "quote":
        return "Quote Request"
      case "support":
        return "Support Request"
      case "info":
        return "Information Request"
      default:
        return "Contact Request"
    }
  }

  const getResponseTime = () => {
    switch (tabType) {
      case "quote":
        return "24-48 hours"
      case "support":
        return "12-24 hours"
      case "info":
        return "24 hours"
      default:
        return "24-48 hours"
    }
  }

  return (
    <Html>
      <Head />
      <Preview>Your {getSubject()} has been received - Naval Dockyard</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-[600px]">
            <Section className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Header with Logo */}
              <Section className="bg-blue-900 p-8 text-center">
                <Img
                  src="/images/logo/dockyard-logo-2.png"
                  alt="Naval Dockyard Logo"
                  width="200"
                  height="60"
                  className="mx-auto"
                />
              </Section>

              {/* Main content */}
              <Section className="px-8 py-10 bg-white">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">
                  Thank You for Contacting Us, {name}!
                </Heading>

                <Text className="text-gray-700 mb-6">
                  We have received your {getSubject().toLowerCase()} and our team is reviewing your submission. We
                  appreciate your interest in Naval Dockyard's services and will get back to you within{" "}
                  {getResponseTime()}.
                </Text>

                {tabType === "quote" && (
                  <Section className="bg-gray-50 rounded-lg p-6 mb-6">
                    <Heading className="text-lg font-semibold text-gray-800 mb-3">Request Summary</Heading>
                    <Section className="mb-4">
                      <Text className="text-sm text-gray-500 mb-1">Service Type:</Text>
                      <Text className="text-gray-700 font-medium">{serviceType}</Text>
                    </Section>
                    <Section className="mb-4">
                      <Text className="text-sm text-gray-500 mb-1">Vessel Type:</Text>
                      <Text className="text-gray-700 font-medium">{vesselType}</Text>
                    </Section>
                    <Section>
                      <Text className="text-sm text-gray-500 mb-1">Project Timeline:</Text>
                      <Text className="text-gray-700 font-medium">{projectTimeline}</Text>
                    </Section>
                  </Section>
                )}

                <Text className="text-gray-700 mb-6">
                  If you have any urgent questions or need to provide additional information, please don't hesitate to
                  contact us directly:
                </Text>

                <Section className="mb-6">
                  <Text className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +234 913 9381 685
                  </Text>
                  <Text className="text-gray-700">
                    <strong>Email:</strong> service@navaldockyard.com
                  </Text>
                </Section>

                <Hr className="border-gray-200 my-6" />

                <Section className="text-center">
                  <Button
                    href="https://www.navaldockyardltd.org/services"
                    className="bg-blue-700 text-white font-bold px-6 py-3 rounded-md"
                  >
                    Explore Our Services
                  </Button>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="px-8 py-6 bg-gray-50 text-center text-sm text-gray-600">
                <Text>© {new Date().getFullYear()} Naval Dockyard Limited. All rights reserved.</Text>
                <Text>Ahmadu Bello Way, Victoria Island, Lagos, Nigeria</Text>
                <Text className="mt-4">
                  <Link href="https://navaldockyard.com/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  {" • "}
                  <Link href="https://navaldockyard.com/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
