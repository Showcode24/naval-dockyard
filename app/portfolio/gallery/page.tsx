"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { galleryData } from "@/data/portfolio/gallery"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ZoomIn, X, Filter, Ship, Shield } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filteredImages, setFilteredImages] = useState(galleryData.images)
  const [activeFilter, setActiveFilter] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
    setCurrentIndex(newIndex)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, filteredImages])

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(galleryData.images)
    } else if (activeFilter === "before-after") {
      setFilteredImages(galleryData.images.filter((image) => image.type === "before-after"))
    } else if (activeFilter === "military") {
      setFilteredImages(galleryData.images.filter((image) => image.category === "military"))
    } else if (activeFilter === "commercial") {
      setFilteredImages(galleryData.images.filter((image) => image.category === "commercial"))
    }
  }, [activeFilter])

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-gray-300">
              Before and after transformations of vessel repairs and maintenance projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Work in Pictures</h2>
            <p className="text-lg text-muted-foreground">{galleryData.overview}</p>
          </div>

          <div className="mb-12">
            <Tabs defaultValue="all" onValueChange={setActiveFilter} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-4 w-full max-w-xl">
                  <TabsTrigger value="all" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>All Projects</span>
                  </TabsTrigger>
                  <TabsTrigger value="before-after" className="flex items-center gap-2">
                    <span>Before & After</span>
                  </TabsTrigger>
                  <TabsTrigger value="military" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Military</span>
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    <span>Commercial</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GalleryItem image={image} index={index} openLightbox={openLightbox} />
              </div>
            ))}
          </div>

          {selectedImage && (
            <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
              <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-sm">
                <div className="relative">
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="p-6">
                    <div className="relative h-[60vh] w-full">
                      <Image
                        src={selectedImage.image || "/placeholder.svg"}
                        alt={selectedImage.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={goToPrevious}
                        className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>

                      <div className="text-center max-w-xl">
                        <div className="flex items-center justify-center mb-2">
                          <Badge className="mr-2">{selectedImage.category}</Badge>
                          {selectedImage.type === "before-after" && <Badge variant="outline">Before & After</Badge>}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                        <p className="text-muted-foreground">{selectedImage.description}</p>
                      </div>

                      <button
                        onClick={goToNext}
                        className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="text-center mt-4 text-sm text-muted-foreground">
                      Image {currentIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <div className="bg-muted p-8 rounded-lg mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need More Project Examples?</h2>
                <p className="text-muted-foreground mb-6">
                  Our portfolio extends beyond what's shown in this gallery. Contact us to discuss specific vessel types
                  or repair scenarios relevant to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">Request Project Examples</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/portfolio">View All Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/gallery/collage.jpg"
                  alt="Project Collage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white mx-auto container rounded-2xl mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vessel?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you with your next repair, maintenance, or modernization project.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Get a Quote Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function GalleryItem({ image, index, openLightbox }) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md border border-border h-72"
      onClick={() => openLightbox(image, index)}
    >
      <div className="relative h-full w-full">
        <Image
          src={image.image || "/placeholder.svg"}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center mb-2">
            <Badge className="mr-2">{image.category}</Badge>
            {image.type === "before-after" && <Badge variant="outline">Before & After</Badge>}
          </div>
          <h3 className="text-white font-bold text-lg">{image.title}</h3>
          <p className="text-white/90 text-sm mt-1 line-clamp-2">{image.description}</p>
        </div>
        <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  )
}

