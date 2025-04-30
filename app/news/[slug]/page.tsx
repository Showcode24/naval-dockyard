import { newsData } from "@/data/news"
import NewsDetailPageClient from "./NewsDetailPage"

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
  return <NewsDetailPageClient params={params} />
}