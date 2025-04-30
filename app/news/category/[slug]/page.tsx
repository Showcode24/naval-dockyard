import { newsData } from "@/data/news"
import NewsCategoryPageClient from "./NewsCategoryPage"

// This function tells Next.js which paths to pre-generate at build time
export function generateStaticParams() {
  // Return an array of objects with the slug parameter for each category
  return newsData.categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function NewsCategoryPage({ params }: { params: { slug: string } }) {
  return <NewsCategoryPageClient params={params} />
}
