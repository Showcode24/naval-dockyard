import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { newsData } from "@/data/news"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default function NewsCategoryPage({ params }: { params: { slug: string } }) {
  // Find the category with the matching slug
  const category = newsData.categories.find((cat) => cat.slug === params.slug)

  // If no category is found, return 404
  if (!category) {
    notFound()
  }

  // Filter articles by category
  const articles = [...newsData.featuredArticles, ...newsData.recentArticles].filter(
    (article) =>
      "category" in article && article.category && article.category.toLowerCase() === category.name.toLowerCase(),
  )

  return (
    <>
      <section className="pt-32 pb-16 page-header text-white">
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <Link href="/news" className="flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl text-gray-300">
              Browse all news and updates in the {category.name.toLowerCase()} category
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {articles.length > 0 ? (
                <div className="space-y-8">
                  {articles.map((article, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {"image" in article && article.image && (
                          <div className="relative h-64 md:h-auto">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-2">
                            <Link href={`/news/${article.slug}`} className="hover:text-primary">
                              {article.title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4">
                            <div className="flex items-center mr-4 mb-2">
                              <Calendar className="h-4 w-4 mr-1" />
                              {article.date}
                            </div>
                            {"author" in article && article.author && (
                              <div className="flex items-center mb-2">
                                <User className="h-4 w-4 mr-1" />
                                {article.author}
                              </div>
                            )}
                          </div>
                          {"excerpt" in article && <p className="text-muted-foreground mb-4">{article.excerpt}</p>}
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/news/${article.slug}`}>Read More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-muted p-8 rounded-lg text-center">
                  <h2 className="text-2xl font-bold mb-4">No Articles Found</h2>
                  <p className="text-muted-foreground mb-6">
                    There are currently no articles in this category. Please check back later for updates.
                  </p>
                  <Button asChild>
                    <Link href="/news">View All News</Link>
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {newsData.categories.map((cat, index) => (
                    <li key={index}>
                      <Link
                        href={`/news/category/${cat.slug}`}
                        className={`flex items-center justify-between py-2 hover:text-primary transition-colors ${
                          cat.slug === params.slug ? "text-primary font-medium" : ""
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="bg-background px-2 py-1 rounded-full text-xs">{cat.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Press Releases</h3>
                <ul className="space-y-4">
                  {newsData.pressReleases.map((release, index) => (
                    <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <Link href={`/news/${release.slug}`} className="hover:text-primary">
                        <h4 className="font-medium">{release.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{release.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/news/press-releases">All Press Releases</Link>
                </Button>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Media Contact</h3>
                <p className="mb-4">For media inquiries, please contact our communications department:</p>
                <ul className="space-y-2 mb-6">
                  <li>Email: media@navaldockyard.com</li>
                  <li>Phone: +234 (0) 123 4567 890</li>
                </ul>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Contact Media Relations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

