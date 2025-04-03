import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { newsData } from "@/data/news"
import { User, ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewsArchivePage() {
  // Combine all articles for the archive
  const allArticles = [
    ...newsData.featuredArticles,
    ...newsData.recentArticles,
    ...newsData.pressReleases.map((release) => ({
      ...release,
      category: "Press Release",
    })),
  ]

  // Sort by date (newest first)
  const sortedArticles = [...allArticles].sort((a, b) => {
    const dateA = new Date(a.date.split(",")[0])
    const dateB = new Date(b.date.split(",")[0])
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <Link href="/news" className="flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News Archive</h1>
            <p className="text-xl text-gray-300">Browse our complete archive of news, updates, and press releases</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted p-6 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {newsData.categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="press-release">Press Releases</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-8">
              {sortedArticles.map((article, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {"image" in article && article.image ? (
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-muted flex items-center justify-center">
                        <div className="text-6xl text-muted-foreground opacity-20">NDL</div>
                      </div>
                    )}
                    <div className="p-6 md:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {"category" in article && article.category && (
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {article.category}
                          </span>
                        )}
                        <span className="bg-muted px-2 py-1 rounded-full text-xs">{article.date}</span>
                      </div>

                      <h2 className="text-2xl font-bold mb-2">
                        <Link href={`/news/${article.slug}`} className="hover:text-primary">
                          {article.title}
                        </Link>
                      </h2>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        {"author" in article && article.author && (
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                        )}
                      </div>

                      {"excerpt" in article && article.excerpt ? (
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      ) : (
                        <p className="text-muted-foreground mb-4">
                          Official announcement from Naval Dockyard Limited. Click to read the full press release.
                        </p>
                      )}

                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${article.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="px-4">
                  1
                </Button>
                <Button variant="outline" size="sm" className="px-4">
                  2
                </Button>
                <Button variant="outline" size="sm" className="px-4">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowLeft className="h-4 w-4 transform rotate-180" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

