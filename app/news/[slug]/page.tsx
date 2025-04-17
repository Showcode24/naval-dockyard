"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { newsData } from "@/data/news"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"
import { notFound } from "next/navigation"

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Find the article with the matching slug
  const article = [...newsData.featuredArticles, ...newsData.recentArticles, ...newsData.pressReleases].find(
    (article) => article.slug === params.slug,
  )

  // If no article is found, return 404
  if (!article) {
    notFound()
  }

  // Animation states
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const relatedRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Parallax effect for header
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transform = `translateY(${scrollY * 0.2}px)`
    }
  }, [scrollY])

  // Sample content for the article (in a real app, this would come from a CMS or database)
  const articleContent = `
    <p>Naval Dockyard Limited continues to demonstrate its commitment to excellence in maritime engineering and vessel maintenance. This recent project showcases our team's technical expertise and dedication to meeting client needs efficiently.</p>
    
    <p>The comprehensive work involved multiple departments working in close coordination to ensure all aspects of the vessel were properly addressed. From propulsion systems to navigation equipment, our specialists applied their knowledge to deliver outstanding results.</p>
    
    <h3>Technical Challenges</h3>
    
    <p>The project presented several technical challenges that required innovative solutions. Our engineering team developed custom approaches to address these issues while maintaining the highest standards of quality and safety.</p>
    
    <p>Working closely with the client, we established clear priorities and milestones to track progress throughout the project. This collaborative approach ensured that all requirements were met and that the client remained informed at every stage.</p>
    
    <h3>Looking Forward</h3>
    
    <p>This successful project reinforces Naval Dockyard Limited's position as a leader in maritime engineering and vessel maintenance in West Africa. We continue to invest in our facilities, equipment, and personnel to enhance our capabilities and serve our clients even better in the future.</p>
    
    <p>For more information about our services or to discuss your vessel maintenance needs, please contact our team.</p>
  `

  // Animation for elements as they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    // Observe all elements with animation classes
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="pt-32 pb-16 page-header text-white relative overflow-hidden">
        {"image" in article && article.image && (
          <div className="absolute inset-0 z-0">
            <div ref={headerRef} className="relative w-full h-full scale-110">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/60 z-0" />
            </div>
          </div>
        )}
        <div className="container mx-auto page-header-content relative z-10">
          <div
            className="max-w-3xl animate-on-scroll opacity-0 transition-all duration-700 translate-y-8"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/news" className="flex items-center text-gray-300 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            {"category" in article && (
              <div className="inline-block bg-primary/20 text-white px-3 py-1 rounded-full text-sm">
                {article.category}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2" ref={contentRef}>
              <div className="bg-background rounded-lg overflow-hidden shadow-md border border-border animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
                {"image" in article && article.image && (
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div
                    className="flex flex-wrap items-center text-sm text-muted-foreground mb-6 animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="flex items-center mr-6 mb-2">
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

                  {"excerpt" in article && (
                    <p
                      className="text-lg font-medium mb-6 animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {article.excerpt}
                    </p>
                  )}


                  <div
                    className="prose max-w-none animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                    style={{ animationDelay: "0.5s" }}
                  // dangerouslySetInnerHTML={{ __html: articleContent }}
                  >
                    {"content" in article && (
                      <p
                        className="text-lg font-medium mb-6 animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                        style={{ animationDelay: "0.4s" }}
                      >
                        {article.content}
                      </p>
                    )}
                  </div>

                  {"category" in article && article.category && (
                    <div
                      className="flex items-center mt-8 pt-8 border-t border-border animate-on-scroll opacity-0 transition-all duration-700"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Category: </span>
                      <Link
                        href={`/news/category/${article.category.toLowerCase()}`}
                        className="text-sm text-primary ml-1 hover:underline"
                      >
                        {article.category}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-12" ref={relatedRef}>
                <h3
                  className="text-2xl font-bold mb-6 animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                  style={{ animationDelay: "0.7s" }}
                >
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsData.recentArticles.slice(0, 2).map((relatedArticle, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-lg overflow-hidden shadow-sm border border-border animate-on-scroll opacity-0 transition-all duration-700 translate-y-4"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {"image" in relatedArticle && relatedArticle.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedArticle.image || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="font-bold mb-2">
                          <Link href={`/news/${relatedArticle.slug}`} className="hover:text-primary">
                            {relatedArticle.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {relatedArticle.date}
                        </div>
                        {"excerpt" in relatedArticle && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.excerpt}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" ref={sidebarRef}>
              <div
                className="bg-muted p-6 rounded-lg mb-8 animate-on-scroll opacity-0 transition-all duration-700 translate-x-8"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {newsData.categories.map((category, index) => (
                    <li
                      key={index}
                      className="animate-on-scroll opacity-0 transition-all duration-500"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
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

              <div
                className="bg-muted p-6 rounded-lg mb-8 animate-on-scroll opacity-0 transition-all duration-700 translate-x-8"
                style={{ animationDelay: "0.5s" }}
              >
                <h3 className="text-xl font-bold mb-4">Recent News</h3>
                <ul className="space-y-4">
                  {newsData.recentArticles.slice(0, 4).map((recentArticle, index) => (
                    <li
                      key={index}
                      className="border-b border-border pb-4 last:border-0 last:pb-0 animate-on-scroll opacity-0 transition-all duration-500"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <Link href={`/news/${recentArticle.slug}`} className="hover:text-primary">
                        <h4 className="font-medium">{recentArticle.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{recentArticle.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-primary text-white p-6 rounded-lg animate-on-scroll opacity-0 transition-all duration-700 translate-x-8"
                style={{ animationDelay: "0.7s" }}
              >
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-4">
                  Subscribe to our newsletter to receive the latest news and updates from Naval Dockyard Limited.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md text-foreground transition-all duration-300 focus:ring-2 focus:ring-white/50"
                  />
                  <Button variant="secondary" className="w-full transition-transform duration-300 hover:scale-105">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating animated elements for visual interest */}
      <div className="fixed pointer-events-none z-0 top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-30px) translateX(-10px);
          }
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </>
  )
}
