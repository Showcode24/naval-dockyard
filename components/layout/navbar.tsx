"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ModeToggle } from "../mode-toggle"
import Image from "next/image"
import { navData } from "@/data/navigation"
import { Menu, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Custom style to override NavigationMenuTrigger hover background
const customTriggerStyle = cn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  "hover:text-blue-500 data-[state=open]:text-blue-500",
  "hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent",
  "data-[active]:bg-transparent data-[active]:text-foreground",
)

// Custom style for navigation menu link
const customLinkStyle = cn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  "hover:text-blue-500 focus:text-blue-500",
  "hover:bg-transparent focus:bg-transparent active:bg-transparent",
  "data-[active]:bg-transparent data-[active]:text-foreground",
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeSheet = () => {
    setIsSheetOpen(false)
  }

  // Desktop navigation using NavigationMenu from shadcn/ui
  const DesktopNavigation = () => (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {navData.map((item) => (
          <NavigationMenuItem key={item.key}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger
                  className={customTriggerStyle}
                  style={
                    {
                      backgroundColor: "transparent",
                      "--tw-bg-opacity": "0 !important",
                      color: "var(--foreground)",
                    } as React.CSSProperties
                  }
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className="grid gap-3 p-4 w-[400px] md:w-[800px] lg:w-[1000px]"
                    style={{
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      maxWidth: "1000px",
                    }}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.key}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-blue-500 focus:text-blue-500 hover:bg-transparent"
                          >
                            <div className="text-sm font-medium leading-none">{subItem.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={customLinkStyle}>{item.title}</NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

  // Mobile navigation using Sheet and Accordion from shadcn/ui
  const MobileNavigation = () => (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        {/* Screen reader only title and description */}
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Browse our site sections and services.</SheetDescription>

        <div className="flex flex-col gap-6 py-4 mt-4">
          <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
            <div className="relative h-10 w-10">
              <Image src="/images/logo/dockyard-logo-2.png" alt="Nigerian Navy" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg">Naval Dockyard Ltd</span>
          </Link>

          <Accordion type="single" collapsible className="w-full">
            {navData.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                {item.subItems ? (
                  <>
                    <AccordionTrigger className="py-3 text-base font-medium">{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            href={subItem.href}
                            className="py-2 text-sm flex items-center gap-2 hover:text-blue-500 transition-colors"
                            onClick={closeSheet}
                          >
                            <ChevronRight className="h-4 w-4" />
                            <div>
                              <div className="font-medium">{subItem.title}</div>
                              <div className="text-xs text-muted-foreground">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </>
                ) : (
                  <div className="py-3">
                    <Link
                      href={item.href}
                      className="flex items-center text-base font-medium hover:text-blue-500 transition-colors"
                      onClick={closeSheet}
                    >
                      {item.title}
                    </Link>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <Button className="w-full" asChild>
            <Link href="/contact" onClick={closeSheet}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-background/95 backdrop-blur-sm",
          isScrolled ? "shadow-sm py-2" : "py-4",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileNavigation />

            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/images/logo/dockyard-logo-2.png" alt="Nigerian Navy" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg text-foreground whitespace-nowrap">Naval Dockyard Ltd</span>
            </Link>
          </div>

          <DesktopNavigation />

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Spacer to account for fixed navbar height */}
      <div className={cn("transition-all duration-300", isScrolled ? "h-16" : "h-20")}></div>
    </>
  )
}
