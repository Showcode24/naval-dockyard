import { tendersData } from "@/data/procurement/tenders"
import TenderDetailPageClient from "./TenderDetailPage"

// This function tells Next.js which paths to pre-generate at build time
export function generateStaticParams() {
  // Return an array of objects with the id parameter for each tender
  return tendersData.tenders.map((tender) => ({
    id: tender.id,
  }))
}

export default function TenderDetailPage({ params }: { params: { id: string } }) {
  return <TenderDetailPageClient params={params} />
}
