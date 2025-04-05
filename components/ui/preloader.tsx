"use client"

import { useState, useEffect } from "react"
import { Ship } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"

export default function PreLoader() {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show loader on initial page load and when route changes
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [pathname, searchParams]) // Re-run effect when pathname or search params change

  if (!loading) return null

  return (
    <div className="preloader">
      <Ship className="preloader-ship text-primary" />
      <div className="preloader-wave"></div>
    </div>
  )
}

