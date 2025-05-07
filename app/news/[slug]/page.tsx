import { newsData } from "@/data/news"
import NewsDetailPageClient from "@/components/NewsDetailPage"
import { notFound } from "next/navigation"

// This function tells Next.js which paths to pre-generate at build time
export function generateStaticParams() {
  // Combine all articles from different sections
  const allArticles = [...newsData.featuredArticles, ...newsData.recentArticles, ...newsData.pressReleases]

  // Return an array of objects with the slug parameter
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Find the article with the matching slug
  const article = [...newsData.featuredArticles, ...newsData.recentArticles, ...newsData.pressReleases].find(
    (article) => article.slug === params.slug,
  )

  // If no article is found, return 404
  if (!article) {
    notFound()
  }

  return <NewsDetailPageClient article={article} />
}
