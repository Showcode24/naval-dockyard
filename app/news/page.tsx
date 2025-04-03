import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { newsData } from "@/data/news"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[url('/contact-us.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto page-header-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-gray-300">Stay informed about the latest developments at Naval Dockyard</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>

              <div className="space-y-12">
                {newsData.featuredArticles.map((article, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2">{article.category}</Badge>
                      <h3 className="text-2xl font-bold mb-2">
                        <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <Button variant="outline" asChild>
                        <Link href={`/news/${article.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {newsData.recentArticles.map((article, index) => (
                  <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md border border-border">
                    <div className="relative h-48">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2">{article.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${article.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button asChild>
                  <Link href="/news/archive">View All News</Link>
                </Button>
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
                        <Badge variant="outline">{category.count}</Badge>
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
                      <Link href={`/news/${release.slug}`} className="hover:text-primary transition-colors">
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
                  <li>Email: media@oceanforcedockyard.com</li>
                  <li>Phone: +1 (234) 567-8910</li>
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

