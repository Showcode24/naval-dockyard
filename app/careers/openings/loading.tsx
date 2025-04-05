import { Skeleton } from "@/components/ui/skeleton"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Loading() {
  return (
    <>
      {/* Hero section skeleton */}
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <Skeleton className="h-12 w-3/4 bg-gray-700/50 mb-6" />
            <Skeleton className="h-6 w-full bg-gray-700/50" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Overview section skeleton */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mx-auto mb-2" />
            <Skeleton className="h-6 w-4/6 mx-auto" />
          </div>

          {/* Tabs skeleton */}
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="all" disabled>
                  All
                </TabsTrigger>
                <TabsTrigger value="tanker" disabled>
                  Tankers
                </TabsTrigger>
                <TabsTrigger value="cargo" disabled>
                  Cargo
                </TabsTrigger>
                <TabsTrigger value="passenger" disabled>
                  Passenger
                </TabsTrigger>
                <TabsTrigger value="offshore" disabled>
                  Offshore
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Project cards skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg overflow-hidden shadow-md border border-border h-full flex flex-col"
                  >
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6 flex-grow flex flex-col">
                      <Skeleton className="h-7 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <Skeleton className="h-9 w-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Featured case study skeleton */}
          <div className="mb-20">
            <Skeleton className="h-10 w-64 mx-auto mb-8" />
            <div className="bg-background rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <Skeleton className="h-96 lg:h-[500px] w-full" />
                <div className="p-8 flex flex-col justify-center">
                  <Skeleton className="h-6 w-24 mb-4" />
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />

                  <div className="space-y-2 mb-6">
                    {Array(3)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className="flex items-start">
                          <Skeleton className="h-5 w-5 mr-2 flex-shrink-0" />
                          <Skeleton className="h-5 w-full" />
                        </div>
                      ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-10 w-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info boxes skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md border border-border">
                  <Skeleton className="w-12 h-12 rounded-full mb-4" />
                  <Skeleton className="h-7 w-48 mb-3" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
          </div>

          {/* Testimonial skeleton */}
          <div className="bg-muted p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Skeleton className="order-2 lg:order-1 h-64 w-full rounded-lg" />
              <div className="order-1 lg:order-2">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-5/6 mb-6" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section skeleton */}
      <section className="py-16 bg-primary text-white mx-auto container mb-10 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-10 w-3/4 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2 bg-white/20" />
          <Skeleton className="h-6 w-5/6 max-w-xl mx-auto mb-8 bg-white/20" />
          <Skeleton className="h-12 w-48 mx-auto bg-white/30" />
        </div>
      </section>
    </>
  )
}

