import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Download } from "lucide-react"

export default function MediaGuidelinesPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <Link href="/news/media-resources" className="flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Media Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Usage Guidelines</h1>
            <p className="text-xl text-gray-300">Guidelines for proper use of Naval Dockyard Limited media assets</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Brand Guidelines</h2>
              <Button variant="outline" className="flex items-center" asChild>
                <a href="#download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Guidelines
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-1">
                <div className="bg-background p-6 rounded-lg shadow-md border border-border sticky top-32">
                  <h3 className="text-xl font-bold mb-4">Contents</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#logo-usage" className="text-primary hover:underline">
                        Logo Usage
                      </a>
                    </li>
                    <li>
                      <a href="#color-palette" className="text-primary hover:underline">
                        Color Palette
                      </a>
                    </li>
                    <li>
                      <a href="#typography" className="text-primary hover:underline">
                        Typography
                      </a>
                    </li>
                    <li>
                      <a href="#imagery" className="text-primary hover:underline">
                        Imagery Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="#video" className="text-primary hover:underline">
                        Video Usage
                      </a>
                    </li>
                    <li>
                      <a href="#naming" className="text-primary hover:underline">
                        Naming Conventions
                      </a>
                    </li>
                    <li>
                      <a href="#legal" className="text-primary hover:underline">
                        Legal Requirements
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div id="logo-usage" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Logo Usage</h3>
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                        <div className="relative h-32 w-full">
                          <Image
                            src="https://placehold.co/400x200/navy/white?text=Naval+Dockyard+Logo"
                            alt="Primary Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg flex items-center justify-center">
                        <div className="relative h-32 w-full">
                          <Image
                            src="https://placehold.co/400x200/white/navy?text=Naval+Dockyard+Logo"
                            alt="Reversed Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      The primary logo should be used whenever possible. The reversed logo should only be used on dark
                      backgrounds.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-4">Logo Clear Space</h4>
                  <p className="text-muted-foreground mb-4">
                    Always maintain a minimum clear space around the logo. This space should be equal to the height of
                    the "N" in the logo.
                  </p>

                  <h4 className="text-xl font-bold mb-4">Logo Don'ts</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Don't alter the colors of the logo</li>
                    <li>• Don't stretch or distort the logo</li>
                    <li>• Don't rotate the logo</li>
                    <li>• Don't add effects such as shadows or outlines</li>
                    <li>• Don't place the logo on busy backgrounds without sufficient contrast</li>
                  </ul>
                </div>

                <div id="color-palette" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Color Palette</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="h-24 bg-primary rounded-lg mb-2"></div>
                      <p className="font-medium">Primary Blue</p>
                      <p className="text-sm text-muted-foreground">HEX: #0066CC</p>
                    </div>
                    <div>
                      <div className="h-24 bg-secondary rounded-lg mb-2"></div>
                      <p className="font-medium">Navy Blue</p>
                      <p className="text-sm text-muted-foreground">HEX: #003366</p>
                    </div>
                    <div>
                      <div className="h-24 bg-accent rounded-lg mb-2"></div>
                      <p className="font-medium">Accent</p>
                      <p className="text-sm text-muted-foreground">HEX: #FF9900</p>
                    </div>
                    <div>
                      <div className="h-24 bg-muted rounded-lg mb-2"></div>
                      <p className="font-medium">Light Gray</p>
                      <p className="text-sm text-muted-foreground">HEX: #F5F5F5</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Always use the official color values when reproducing the Naval Dockyard Limited brand. CMYK values
                    for print are provided in the downloadable guidelines.
                  </p>
                </div>

                <div id="typography" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Typography</h3>
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold mb-4">Primary Font: Inter</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-2xl">Inter Bold</p>
                        <p className="text-muted-foreground">Used for headlines and titles</p>
                      </div>
                      <div>
                        <p className="font-medium text-xl">Inter Medium</p>
                        <p className="text-muted-foreground">Used for subheadings and emphasis</p>
                      </div>
                      <div>
                        <p className="font-normal text-lg">Inter Regular</p>
                        <p className="text-muted-foreground">Used for body text and general content</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    When Inter is not available, Arial or Helvetica may be used as substitutes.
                  </p>
                </div>

                <div id="imagery" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Imagery Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Approved imagery style"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                        alt="Approved imagery style"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    When using Naval Dockyard Limited imagery, please adhere to these guidelines:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Always credit Naval Dockyard Limited as the source</li>
                    <li>• Do not crop images in a way that alters their meaning or context</li>
                    <li>• Do not apply filters or effects that significantly alter the appearance</li>
                    <li>• Ensure images are used in appropriate contexts that align with our brand values</li>
                    <li>• High-resolution images should be used for print media (300 dpi minimum)</li>
                  </ul>
                </div>

                <div id="video" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Video Usage</h3>
                  <p className="text-muted-foreground mb-4">
                    When using Naval Dockyard Limited video content, please follow these guidelines:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Do not edit videos in a way that alters their meaning or context</li>
                    <li>• Always include attribution to Naval Dockyard Limited</li>
                    <li>• Do not add overlays or graphics that obscure key content</li>
                    <li>• Maintain the original aspect ratio when displaying videos</li>
                    <li>• B-roll footage should only be used as background material, not as primary content</li>
                  </ul>
                </div>

                <div id="naming" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Naming Conventions</h3>
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold mb-4">Correct Usage</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Naval Dockyard Limited (full name, preferred for first mention)</li>
                      <li>• Naval Dockyard Ltd (abbreviated form for subsequent mentions)</li>
                      <li>• NDL (acronym, only after full name has been established)</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Incorrect usages include "Navy Dockyard," "Naval Shipyard," or any variations that do not match our
                    official name.
                  </p>
                </div>

                <div id="legal" className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Legal Requirements</h3>
                  <p className="text-muted-foreground mb-4">
                    All Naval Dockyard Limited media assets are protected by copyright and trademark laws. When using
                    our assets, please include the following:
                  </p>
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <p className="text-sm">
                      © [Current Year] Naval Dockyard Limited. All rights reserved. The Naval Dockyard Limited name and
                      logo are registered trademarks of Naval Dockyard Limited.
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    For questions regarding legal usage of our media assets, please contact our legal department at
                    legal@navaldockyard.com.
                  </p>
                </div>

                <div id="download" className="bg-primary text-white p-8 rounded-lg">
                  <div className="flex items-start">
                    <FileText className="h-8 w-8 mr-6 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Download Complete Guidelines</h2>
                      <p className="mb-6">
                        For comprehensive brand guidelines including detailed specifications, additional examples, and
                        high-resolution assets, download our complete brand guidelines package.
                      </p>
                      <Button variant="secondary" className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        Download Brand Guidelines (PDF, 8.5 MB)
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

