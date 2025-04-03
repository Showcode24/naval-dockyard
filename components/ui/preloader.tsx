"use client"

import { useState, useEffect } from "react"
import { Ship } from "lucide-react"

export default function PreLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader on initial page load only
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <Ship className="preloader-ship text-primary" />
      <div className="preloader-wave"></div>
    </div>
  )
}

