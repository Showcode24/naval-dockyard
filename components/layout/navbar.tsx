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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
              <Image src="/navy-logo.png" alt="Nigerian Navy" fill className="object-contain" />
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
                <Image src="/navy-logo.png" alt="Nigerian Navy" fill className="object-contain" />
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














// "use client"

// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import { ModeToggle } from "../mode-toggle"
// import Image from "next/image"
// import { navData } from "@/data/navigation"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
//   const menuRef = useRef<HTMLDivElement>(null)

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//     if (activeSubmenu) setActiveSubmenu(null)
//   }

//   const toggleSubmenu = (key: string) => {
//     setActiveSubmenu(activeSubmenu === key ? null : key)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setActiveSubmenu(null)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     document.addEventListener("mousedown", handleClickOutside)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 w-full z-40 transition-all duration-300",
//         isScrolled ? "bg-background/90 dark:bg-background/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
//       )}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <Link href="/" className="flex items-center space-x-4 z-50">
//           <div className="flex items-center">
//             <div className="relative w-10 h-10 mr-2">
//               <Image
//                 src="/navy-logo.png"
//                 alt="Nigerian Navy"
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             </div>
//             {/* <div className="relative w-10 h-10">
//               <Image
//                 src="/dockyard-logo .png"
//                 alt="Naval Dockyard Limited"
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             </div> */}
//           </div>
//           <span className={cn("font-bold text-lg transition-colors", isScrolled ? "text-foreground" : "text-white")}>
//             Naval Dockyard Ltd
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-8" ref={menuRef}>
//           {navData.map((item) => (
//             <div key={item.key} className="relative group">
//               {item.subItems ? (
//                 <button
//                   className={cn(
//                     "flex items-center space-x-1 px-2 py-2 rounded-md font-medium",
//                     isScrolled ? "text-foreground" : "text-white",
//                   )}
//                   onClick={() => toggleSubmenu(item.key)}
//                   aria-expanded={activeSubmenu === item.key}
//                   aria-controls={`submenu-${item.key}`}
//                 >
//                   <span>{item.title}</span>
//                   <ChevronDown
//                     className={cn(
//                       "w-4 h-4 transition-transform duration-200",
//                       activeSubmenu === item.key && "transform rotate-180",
//                     )}
//                   />
//                 </button>
//               ) : (
//                 <Link
//                   href={item.href}
//                   className={cn(
//                     "flex items-center space-x-1 px-2 py-2 rounded-md font-medium",
//                     isScrolled ? "text-foreground" : "text-white",
//                   )}
//                 >
//                   <span>{item.title}</span>
//                 </Link>
//               )}

//               {item.subItems && (
//                 <div
//                   id={`submenu-${item.key}`}
//                   className={cn(
//                     "absolute left-0 top-full mt-2 w-[280px] bg-background dark:bg-secondary/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-200 origin-top-left",
//                     activeSubmenu === item.key
//                       ? "opacity-100 scale-100 translate-y-0"
//                       : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
//                   )}
//                 >
//                   <div className="p-4 grid gap-3">
//                     {item.subItems.map((subItem) => (
//                       <Link
//                         key={subItem.key}
//                         href={subItem.href}
//                         className="block p-2 hover:bg-accent/10 rounded-md transition-colors"
//                         onClick={() => setActiveSubmenu(null)}
//                       >
//                         <div className="font-medium">{subItem.title}</div>
//                         <div className="text-sm text-muted-foreground">{subItem.description}</div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="flex items-center space-x-4">
//           <ModeToggle />
//           <Button className="hidden md:inline-flex">Get a Quote</Button>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex items-center"
//             onClick={toggleMobileMenu}
//             aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
//           >
//             {mobileMenuOpen ? (
//               <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
//             ) : (
//               <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={cn(
//           "fixed top-0 left-0 w-full h-full bg-background dark:bg-background transform transition-transform duration-300 ease-in-out z-30 overflow-auto",
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full",
//         )}
//       >
//         <div className="container mx-auto pt-20 pb-6 px-4">
//           <button className="absolute top-6 right-6 p-2" onClick={toggleMobileMenu} aria-label="Close Menu">
//             <X className="w-6 h-6" />
//           </button>
//           <div className="flex flex-col space-y-6">
//             {navData.map((item) => (
//               <div key={item.key} className="border-b border-border pb-4">
//                 {item.subItems ? (
//                   <>
//                     <button
//                       className="flex items-center justify-between w-full py-2 font-medium"
//                       onClick={() => toggleSubmenu(item.key)}
//                     >
//                       <span>{item.title}</span>
//                       <ChevronDown
//                         className={cn(
//                           "w-5 h-5 transition-transform",
//                           activeSubmenu === item.key && "transform rotate-180",
//                         )}
//                       />
//                     </button>

//                     {activeSubmenu === item.key && (
//                       <div className="mt-2 pl-4 flex flex-col space-y-4">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.key}
//                             href={subItem.href}
//                             className="py-2 text-muted-foreground hover:text-foreground transition-colors"
//                             onClick={() => {
//                               setActiveSubmenu(null)
//                               setMobileMenuOpen(false)
//                             }}
//                           >
//                             {subItem.title}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="flex items-center justify-between w-full py-2 font-medium"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <span>{item.title}</span>
//                   </Link>
//                 )}
//               </div>
//             ))}
//             <Button className="w-full" onClick={() => setMobileMenuOpen(false)} asChild>
//               <Link href="/contact">Get a Quote</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

