import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, FileImage, FileText, Video, Mail } from "lucide-react"

export default function MediaResourcesPage() {
  const resources = [
    {
      title: "Company Logos",
      description: "Official Naval Dockyard Limited logos in various formats",
      icon: FileImage,
      items: [
        { name: "Primary Logo - PNG", size: "2.4 MB", format: "PNG" },
        { name: "Primary Logo - SVG", size: "156 KB", format: "SVG" },
        { name: "Secondary Logo - PNG", size: "1.8 MB", format: "PNG" },
        { name: "Logo Guidelines", size: "3.2 MB", format: "PDF" },
      ],
    },
    {
      title: "Press Kits",
      description: "Comprehensive information packages for media professionals",
      icon: FileText,
      items: [
        { name: "Company Overview", size: "4.2 MB", format: "PDF" },
        { name: "Executive Biographies", size: "2.8 MB", format: "PDF" },
        { name: "Facility Fact Sheet", size: "3.5 MB", format: "PDF" },
        { name: "Historical Timeline", size: "1.9 MB", format: "PDF" },
      ],
    },
    {
      title: "Image Gallery",
      description: "High-resolution images of our facilities and projects",
      icon: FileImage,
      items: [
        { name: "Facility Aerial Views", size: "15.6 MB", format: "ZIP" },
        { name: "Dry Dock Operations", size: "12.8 MB", format: "ZIP" },
        { name: "Engineering Workshop", size: "10.2 MB", format: "ZIP" },
        { name: "Project Highlights", size: "18.4 MB", format: "ZIP" },
      ],
    },
    {
      title: "Video Resources",
      description: "B-roll footage and promotional videos",
      icon: Video,
      items: [
        { name: "Corporate Overview", size: "45.6 MB", format: "MP4" },
        { name: "Facility Tour", size: "78.2 MB", format: "MP4" },
        { name: "Project Timelapse", size: "62.8 MB", format: "MP4" },
        { name: "B-Roll Package", size: "124.5 MB", format: "ZIP" },
      ],
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Resources</h1>
            <p className="text-xl text-gray-300">
              Download official logos, images, and media kits for Naval Dockyard Limited
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Resources for Media Professionals</h2>
            <p className="text-lg text-muted-foreground">
              We provide these resources to help media professionals accurately represent Naval Dockyard Limited in
              their coverage. All materials are available for download and use in accordance with our usage guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.size} • {item.format}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
                <p className="text-muted-foreground mb-6">
                  When using Naval Dockyard Limited media resources, please adhere to the following guidelines:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Do not alter or modify our logos in any way</li>
                  <li>• Maintain proper spacing around logos as specified in the guidelines</li>
                  <li>• Credit Naval Dockyard Limited when using our images or videos</li>
                  <li>• Do not use our materials to imply endorsement of your products or services</li>
                  <li>• Contact our media relations team if you have questions about proper usage</li>
                </ul>
                <Button asChild>
                  <Link href="/news/media-resources/guidelines">View Full Guidelines</Link>
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Media resources"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg">
            <div className="flex items-start">
              <Mail className="h-8 w-8 mr-6 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
                <p className="mb-6">
                  For additional resources, interview requests, or other media inquiries, please contact our
                  communications department:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-medium">Media Relations Contact:</p>
                    <p>Mrs. Amina Okonkwo</p>
                    <p>Head of Communications</p>
                  </div>
                  <div>
                    <p className="font-medium">Contact Information:</p>
                    <p>Email: media@navaldockyard.com</p>
                    <p>Phone: +234 913 9381 685</p>
                  </div>
                </div>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Contact Media Relations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

