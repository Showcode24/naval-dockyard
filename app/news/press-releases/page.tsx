import Link from "next/link"
import { Button } from "@/components/ui/button"
import { newsData } from "@/data/news"
import { Calendar, ArrowLeft, FileText } from "lucide-react"

export default function PressReleasesPage() {
  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <Link href="/news" className="flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press Releases</h1>
            <p className="text-xl text-gray-300">
              Official announcements and press releases from Naval Dockyard Limited
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {newsData.pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg overflow-hidden shadow-md border border-border p-6"
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-2">
                          <Link href={`/news/${release.slug}`} className="hover:text-primary">
                            {release.title}
                          </Link>
                        </h2>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {release.date}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/news/${release.slug}`}>Read Full Release</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {newsData.categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/news/category/${category.slug}`}
                        className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-background px-2 py-1 rounded-full text-xs">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Recent News</h3>
                <ul className="space-y-4">
                  {newsData.recentArticles.slice(0, 4).map((article, index) => (
                    <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <Link href={`/news/${article.slug}`} className="hover:text-primary">
                        <h4 className="font-medium">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{article.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Media Resources</h3>
                <p className="mb-4">Download official logos, images, and media kits for Naval Dockyard Limited.</p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/news/media-resources">Access Media Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

