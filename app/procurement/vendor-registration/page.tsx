"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { vendorRegistrationData } from "@/data/procurement/vendor-registration"
import { CheckCircle2, Upload, FileText, Info, AlertCircle, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

import { v4 as uuidv4 } from "uuid"
import { supabase } from "@/supabaseClient"

// Add these type definitions at the top of the file, after the imports
type FormData = {
  company: string
  businessNumber: string
  website: string
  year: string
  address: string
  city: string
  state: string
  postal: string
  country: string
  name: string
  title: string
  email: string
  phone: string
  type: string
  service: string
  description: string
  experience: string
  businessCert: string
  taxCert: string
  insurance: string
  quality: string
  financial: string
  additional: string
}

type UploadedFiles = {
  businessCert: File | null
  taxCert: File | null
  insurance: File | null
  quality: File | null
  financial: File | null
  [key: string]: File | null
}

type FileUploadStatus = {
  businessCert: boolean
  taxCert: boolean
  insurance: boolean
  quality: boolean
  financial: boolean
  [key: string]: boolean
}

type RequiredDocument = {
  name: string
  description: string
  id?: string
}

// Define a type for the bucket
type Bucket = {
  name: string
  id: string
  public: boolean
  created_at: string
  updated_at: string
  owner: string
}

const BUCKET_NAME = "procurement-documents"

export default function VendorRegistrationPage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()
  const [bucketExists, setBucketExists] = useState(false)

  // Check if the bucket exists when the component mounts
  useEffect(() => {
    const checkBucket = async () => {
      try {
        console.log("Checking if bucket exists:", BUCKET_NAME)

        // First try to list all buckets to see what's available
        const { data: allBuckets, error: listError } = await supabase.storage.listBuckets()

        if (listError) {
          console.error("Error listing buckets:", listError)
          toast({
            title: "Storage Setup Issue",
            description: `Unable to check storage buckets: ${listError.message}`,
            variant: "destructive",
          })
          return
        }

        console.log("Available buckets:", allBuckets)

        // Log each bucket name for debugging
        if (allBuckets && allBuckets.length > 0) {
          console.log("Bucket names found:")
          allBuckets.forEach((bucket: any) => {
            console.log(`- ${bucket.name} (id: ${bucket.id})`)
          })
        } else {
          console.log("No buckets found in the account")
        }

        // Check if our bucket is in the list (case insensitive comparison)
        const foundBucket = allBuckets?.find((bucket: any) => bucket.name.toLowerCase() === BUCKET_NAME.toLowerCase())

        if (foundBucket) {
          console.log(`Bucket found: ${foundBucket.name} (id: ${foundBucket.id})`)
          setBucketExists(true)
          return
        }

        // If we couldn't find it in the list, try to get it directly
        console.log(`Trying to get bucket directly: ${BUCKET_NAME}`)
        const { data, error } = await supabase.storage.getBucket(BUCKET_NAME)

        if (error) {
          console.error(`Error getting bucket "${BUCKET_NAME}":`, error)

          // Check if the error is due to permissions rather than non-existence
          if (error.message.includes("permission") || error.message.includes("not authorized")) {
            console.log(
              "Permission issue detected. The bucket might exist but your application lacks permission to view it.",
            )
            toast({
              title: "Storage Permission Issue",
              description:
                "Your application may not have permission to access the storage bucket. Check your Supabase RLS policies.",
              variant: "destructive",
            })
          } else {
            console.log(`Bucket "${BUCKET_NAME}" not found or not accessible`)
            toast({
              title: "Storage Setup Required",
              description: `Please verify the bucket named "${BUCKET_NAME}" exists in your Supabase dashboard and check permissions.`,
              variant: "destructive",
            })
          }
        } else {
          console.log("Bucket exists:", data)
          setBucketExists(true)
        }

        // As a final test, try to list files in the bucket
        console.log(`Trying to list files in bucket: ${BUCKET_NAME}`)
        const { data: fileList, error: fileListError } = await supabase.storage.from(BUCKET_NAME).list()

        if (fileListError) {
          console.error(`Error listing files in bucket "${BUCKET_NAME}":`, fileListError)
        } else {
          console.log(`Successfully listed files in bucket "${BUCKET_NAME}":`, fileList)
          // If we can list files, the bucket definitely exists
          setBucketExists(true)
        }
      } catch (err) {
        console.error("Error checking bucket:", err)
      }
    }

    checkBucket()
  }, [toast])

  // Track file upload status
  const [fileUploading, setFileUploading] = useState<FileUploadStatus>({
    businessCert: false,
    taxCert: false,
    insurance: false,
    quality: false,
    financial: false,
  })

  // Form state
  const [formData, setFormData] = useState<FormData>({
    // Company Information
    company: "",
    businessNumber: "",
    website: "",
    year: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",

    // Primary Contact
    name: "",
    title: "",
    email: "",
    phone: "",

    // Products & Services
    type: "",
    service: "",
    description: "",
    experience: "",

    // Documents
    businessCert: "",
    taxCert: "",
    insurance: "",
    quality: "",
    financial: "",
    additional: "",
  })

  // Selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Document upload states
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({
    businessCert: null,
    taxCert: null,
    insurance: null,
    quality: null,
    financial: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value })
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const createBucketIfNeeded = async () => {
    if (bucketExists) return true

    toast({
      title: "Storage Setup Required",
      description: `Please create a bucket named "${BUCKET_NAME}" in your Supabase dashboard before uploading files.`,
      variant: "destructive",
    })

    return false
  }

  const uploadFileToStorage = async (file: File, docType: string): Promise<string | null> => {
    if (!file) return null

    try {
      // Set uploading state for this file type
      setFileUploading((prev) => ({ ...prev, [docType]: true }))

      // Create a unique file name to prevent collisions
      const fileExt = file.name.split(".").pop()
      const fileName = `${uuidv4()}.${fileExt}`
      const filePath = `vendor-documents/${formData.company.replace(/\s+/g, "-").toLowerCase() || "unnamed"}/${docType}/${fileName}`

      console.log("Attempting to upload file:", filePath)

      // Always try to upload, even if bucketExists is false
      const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      })

      if (error) {
        console.error("Error uploading file:", error)

        // Provide detailed error message
        if (error.message.includes("bucket") || error.message.includes("not found")) {
          toast({
            title: "Upload Failed",
            description: `Failed to upload ${file.name}: The storage bucket "${BUCKET_NAME}" doesn't exist or isn't accessible.`,
            variant: "destructive",
          })
        } else if (error.message.includes("permission") || error.message.includes("not authorized")) {
          toast({
            title: "Upload Failed",
            description: `Failed to upload ${file.name}: Permission denied. Check your Supabase storage policies.`,
            variant: "destructive",
          })
        } else {
          toast({
            title: "Upload Failed",
            description: `Failed to upload ${file.name}: ${error.message}`,
            variant: "destructive",
          })
        }
        return null
      }

      console.log("File uploaded successfully:", data)

      // If upload succeeded, the bucket must exist
      if (!bucketExists) {
        setBucketExists(true)
      }

      // Get public URL for the uploaded file
      const {
        data: { publicUrl },
      } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath)

      console.log("File public URL:", publicUrl)

      // Show success toast
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      })

      return publicUrl
    } catch (err) {
      console.error("Error in file upload:", err)
      toast({
        title: "Upload Error",
        description: `An unexpected error occurred: ${err instanceof Error ? err.message : "Unknown error"}`,
        variant: "destructive",
      })
      return null
    } finally {
      // Reset uploading state for this file type
      setFileUploading((prev) => ({ ...prev, [docType]: false }))
    }
  }

  const handleFileChange = async (docType: string, file: File | null) => {
    setUploadedFiles({ ...uploadedFiles, [docType]: file })

    if (file) {
      // Upload file to Supabase Storage and get URL
      const fileUrl = await uploadFileToStorage(file, docType)

      // Update form data with the file URL
      if (fileUrl) {
        setFormData((prev) => ({ ...prev, [docType]: fileUrl }))
        console.log(`Updated form data for ${docType}:`, fileUrl)
      }
    } else {
      setFormData((prev) => ({ ...prev, [docType]: "" }))
    }
  }

  const nextStep = () => {
    // Basic validation for required fields
    if (step === 1) {
      if (
        !formData.company ||
        !formData.businessNumber ||
        !formData.year ||
        !formData.address ||
        !formData.city ||
        !formData.state ||
        !formData.postal ||
        !formData.country ||
        !formData.name ||
        !formData.title ||
        !formData.email ||
        !formData.phone
      ) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive",
        })
        return
      }
    } else if (step === 2) {
      if (!formData.type || selectedCategories.length === 0 || !formData.description || !formData.experience) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive",
        })
        return
      }
    }

    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Combine selected categories into a single string
      const serviceCategories = selectedCategories.join(", ")

      // Convert year to integer
      const yearInt = Number.parseInt(formData.year, 10)

      // Log the data being submitted
      console.log("Submitting form data:", {
        ...formData,
        year: yearInt,
        service: serviceCategories,
      })

      // Insert data into the procurement table
      const { data, error: insertError } = await supabase.from("procurement").insert({
        company: formData.company,
        businessnumber: formData.businessNumber, // lowercase
        website: formData.website,
        year: yearInt,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        postal: formData.postal,
        country: formData.country,
        name: formData.name,
        title: formData.title,
        email: formData.email,
        phone: formData.phone,
        type: formData.type,
        service: serviceCategories,
        description: formData.description,
        experience: formData.experience,
        // Document fields with lowercase names and URLs
        businesscert: formData.businessCert || null, // lowercase
        taxcert: formData.taxCert || null, // lowercase
        insurance: formData.insurance || null,
        quality: formData.quality || null,
        financial: formData.financial || null,
        additional: formData.additional || null,
      })

      if (insertError) {
        console.error("Supabase error details:", insertError)
        throw new Error(`Failed to submit: ${insertError.message} (Code: ${insertError.code})`)
      }

      console.log("Form submitted successfully:", data)
      setIsSubmitted(true)
      window.scrollTo(0, 0)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(
        `There was an error submitting your registration: ${err instanceof Error ? err.message : "Unknown error"}`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vendor Registration</h1>
            <p className="text-xl text-gray-300">Register as a supplier or contractor for Naval Dockyard</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {isSubmitted ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Registration Submitted</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in becoming a vendor for Naval Dockyard. Your registration has been
                submitted successfully. Our procurement team will review your information and contact you within 5-7
                business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/procurement">Return to Procurement</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Procurement Team</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-4xl mx-auto mb-12">
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {!bucketExists && (
                  <Alert className="mb-6 border-yellow-500 bg-yellow-50 text-yellow-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Storage bucket not found. File uploads may not work. Please create a bucket named "{BUCKET_NAME}"
                      in your Supabase dashboard.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${step === i
                            ? "bg-primary text-white"
                            : step > i
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {i}
                      </div>
                      <span className={`text-sm ${step === i ? "font-medium" : "text-muted-foreground"}`}>
                        {i === 1 ? "Company Information" : i === 2 ? "Products & Services" : "Documents & Submit"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Company Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name*</Label>
                          <Input
                            id="company"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessNumber">Tax ID / Registration Number*</Label>
                          <Input
                            id="businessNumber"
                            placeholder="Enter tax ID"
                            value={formData.businessNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="website">Company Website</Label>
                          <Input
                            id="website"
                            placeholder="https://www.example.com"
                            value={formData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Year Established*</Label>
                          <Input
                            id="year"
                            placeholder="YYYY"
                            type="number"
                            value={formData.year}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="address">Business Address*</Label>
                        <Textarea
                          id="address"
                          placeholder="Enter full address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City*</Label>
                          <Input id="city" value={formData.city} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province*</Label>
                          <Input id="state" value={formData.state} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postal">Zip/Postal Code*</Label>
                          <Input id="postal" value={formData.postal} onChange={handleInputChange} required />
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="country">Country*</Label>
                        <Select
                          required
                          value={formData.country}
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <h3 className="text-xl font-bold mb-4 mt-8">Primary Contact</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Contact Name*</Label>
                          <Input
                            id="name"
                            placeholder="Full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Job Title*</Label>
                          <Input
                            id="title"
                            placeholder="Job title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input
                            id="phone"
                            placeholder="+1 (123) 456-7890"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button type="button" onClick={nextStep}>
                          Next: Products & Services
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Products & Services</h2>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="type">Business Type*</Label>
                        <Select
                          required
                          value={formData.type}
                          onValueChange={(value) => handleSelectChange("type", value)}
                        >
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {vendorRegistrationData.businessTypes.map((type, index) => (
                              <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 mb-8">
                        <Label>Product/Service Categories*</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {vendorRegistrationData.categories.map((category, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Checkbox
                                id={`category-${index}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => handleCategoryToggle(category)}
                              />
                              <Label htmlFor={`category-${index}`} className="font-normal">
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="description">Company Description*</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide a brief description of your company and its capabilities"
                          className="min-h-[150px]"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2 mb-6">
                        <Label htmlFor="experience">Relevant Experience*</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe your experience in the maritime industry or with similar clients"
                          className="min-h-[150px]"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="button" onClick={nextStep}>
                          Next: Documents & Submit
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="bg-background p-8 rounded-lg shadow-md border border-border">
                      <h2 className="text-2xl font-bold mb-6">Documents & Submit</h2>

                      <div className="space-y-6 mb-8">
                        {vendorRegistrationData.requiredDocuments.map((doc: RequiredDocument, index: number) => {
                          const docKey = doc.id || doc.name.toLowerCase().replace(/\s+/g, "")
                          return (
                            <div key={index} className="border border-border rounded-lg p-4">
                              <div className="flex items-start">
                                <FileText className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">{doc.name}*</h4>
                                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                                  <div className="flex items-center space-x-2">
                                    <Button
                                      type="button"
                                      variant="outline"
                                      size="sm"
                                      className="flex items-center"
                                      onClick={() => {
                                        const fileInput = document.getElementById(`file-${docKey}`)
                                        if (fileInput) fileInput.click()
                                      }}
                                      disabled={fileUploading[docKey]}
                                    >
                                      {fileUploading[docKey] ? (
                                        <>
                                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                          Uploading...
                                        </>
                                      ) : (
                                        <>
                                          <Upload className="h-4 w-4 mr-2" />
                                          Upload File
                                        </>
                                      )}
                                    </Button>
                                    <input
                                      id={`file-${docKey}`}
                                      type="file"
                                      className="hidden"
                                      onChange={(e) => {
                                        const files = e.target.files
                                        handleFileChange(docKey, files && files.length > 0 ? files[0] : null)
                                      }}
                                      disabled={fileUploading[docKey]}
                                    />
                                    <span className="text-sm text-muted-foreground">
                                      {uploadedFiles[docKey] ? uploadedFiles[docKey].name : "No file selected"}
                                    </span>
                                  </div>
                                  {formData[docKey as keyof FormData] && (
                                    <div className="mt-2">
                                      <span className="text-xs text-green-600 flex items-center">
                                        <CheckCircle2 className="h-3 w-3 mr-1" />
                                        File uploaded successfully
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div className="bg-muted p-4 rounded-lg mb-8">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Additional Information</h4>
                            <p className="text-sm text-muted-foreground">
                              All documents must be in PDF format and no larger than 10MB each. If you have any issues
                              uploading documents, please contact our procurement team.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-8">
                        <Label htmlFor="additional">Additional Information (Optional)</Label>
                        <Textarea
                          id="additional"
                          placeholder="Any additional information you would like to provide"
                          className="min-h-[100px]"
                          value={formData.additional}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="flex items-start space-x-2 mb-8">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="font-normal">
                          I certify that the information provided is accurate and complete. I understand that submission
                          of this form does not guarantee approval as a vendor.*
                        </Label>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Registration"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
