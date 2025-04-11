type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author?: string;
  category: string;
};

const sortByNewestDate = (a: Article, b: Article): number => new Date(b.date).getTime() - new Date(a.date).getTime();

export const newsData = {
  featuredArticles: [
    {
      title: "Naval Dockyard Limited Partners with Dateline Energy Services to Construct LPG Coastal Gas Transportation Barge",
      slug: "ndl-dateline-energy-lpg-barge",
      excerpt:
        "In September 2023, Naval Dockyard Limited entered into a partnership with Dateline Energy Services for the construction of a 4,000 metric ton Liquefied Petroleum Gas (LPG) Coastal Gas Transportation Barge, aiming to enhance Nigeria's maritime and energy sectors.",
      content: "",
      image: "https://cdn.businessday.ng/2023/09/Dateline-energy-1.png",
      date: "September 2, 2023",
      author: "Ibrahim Musa",
      category: "Projects",
    },
    {
      title: "NDL Successfully Undocks MV Stark and TMC Evolution",
      slug: "ndl-undocks-mv-stark-tmc-evolution",
      excerpt:
        "In October 2024, NDL demonstrated its capabilities by successfully docking and repairing MV Stark and TMC Evolution, vessels with a combined tonnage of about 8,600 tons, restoring them to optimal operational efficiency.",
      content: "",
      image: "/images/commercial/mv-stark/mc-stark-04.jpg",
      date: "October 19, 2024",
      author: "Ngozi Okafor",
      category: "Projects",
    },
    {
      title: "NDL Participates in Defence Research and Development Bureau Seminar/Exhibition 2024",
      slug: "ndl-drdb-seminar-exhibition-2024",
      excerpt:
        "In October 2024, NDL showcased its contributions to ship design and development at the Defence Research and Development Bureau Seminar/Exhibition, highlighting advancements in maritime defense and vessel maintenance.",
      content: "",
      image: "https://defence.gov.ng/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-22.27.56-1024x458.jpeg",
      date: "October 15, 2024",
      author: "Chinelo Abah",
      category: "Events",
    },
    {
      title: "NDL Partners with Caverton Marine Limited to Revitalize GRP Boatbuilding Facilities",
      slug: "ndl-caverton-grp-boatbuilding",
      excerpt:
        "In December 2024, NDL signed a concession agreement with Caverton Marine Limited to manage, overhaul, and lease the Glass Reinforced Plastic (GRP) boatbuilding warehouse, aiming to enhance local production capabilities for various vessels.",
      content: "",
      image: "https://cdn.businessday.ng/wp-content/uploads/2024/12/ae55ff91-98cb-43e8-8fb4-a8e2cefb16b6-600x400.jpeg",
      date: "December 10, 2024",
      author: "Adebayo Johnson",
      category: "Facilities",
    },
    {
      title: "NDL Hosts 'Protocol Renaissance in Nigeria' Event in Collaboration with ACPPN",
      slug: "ndl-acppn-protocol-renaissance",
      excerpt:
        "In November 2024, NDL partnered with the Association of Certified Protocol Practitioners in Nigeria to host the 'Protocol Renaissance in Nigeria' event, fostering networking and collaboration among industry professionals.",
      content: "",
      image: "https://pmexpressng.com/wp-content/uploads/2024/11/IMG-20241130-WA0051.jpg",
      date: "November 29, 2024",
      author: "Ibrahim Musa",
      category: "Events",
    },
  ].sort(sortByNewestDate),

  recentArticles: [
    {
      title: "NDL Refurbishes Six Benin Republic Navy Warships",
      slug: "ndl-refurbishes-beninese-warships",
      excerpt:
        "In March 2024, NDL commenced refurbishment of six warships belonging to the Benin Republic Navy, enhancing security in the Gulf of Guinea.",
      image: "/images/commercial/benin-navy-ship/benin-ship-08.jpg",
      date: "March 4, 2024",
      category: "Projects",
    },
    {
      title: "NDL Hosts Workshop on Marketing Strategies for Nigerian Navy",
      slug: "ndl-workshop-marketing-strategies",
      excerpt:
        "In September 2024, NDL organized a workshop titled 'Navigating Commercial Water: Marketing Strategies for Nigerian Navy', aiming to develop effective marketing strategies for the Nigerian Navy.",
      image: "https://peopleandpowermag.com/wp-content/uploads/2024/09/NAVAL-ENGINEERING-PIVOTAL-3.jpg",
      date: "September 12, 2024",
      category: "Events",
    },
  ].sort(sortByNewestDate),

  categories: [
    { name: "Projects", count: 6, slug: "projects" },
    { name: "Facilities", count: 1, slug: "facilities" },
    { name: "Events", count: 3, slug: "events" },
  ],

  pressReleases: [],
};
