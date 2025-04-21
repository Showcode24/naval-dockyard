"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
  title: string
  className?: string
}

export default function ImageGallery({ images, title, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Reset loaded state when images change
    setIsLoaded(false)

    // Preload images
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new globalThis.Image()
        img.src = src
        img.onload = () => setIsLoaded(true)
      })
    }

    preloadImages()
  }, [images])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-lg border border-border bg-background shadow-md">
        {/* Main gallery view */}
        <div className="relative aspect-video w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Fullscreen button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
          >
            <Expand className="h-4 w-4" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex overflow-x-auto p-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "relative mr-2 h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border transition-all",
                currentIndex === index
                  ? "border-primary ring-2 ring-primary ring-offset-2"
                  : "border-border opacity-70 hover:opacity-100",
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={toggleFullscreen}
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex h-10 items-center rounded-full bg-background/80 px-4 text-sm backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
