type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  additionalImages?: string[];
  date: string;
  author?: string;
  category: string;
};

const sortByNewestDate = (a: Article, b: Article): number =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const newsData = {
  featuredArticles: [
    {
      title:
        "Unscheduled Visit of The Chief of the Naval Staff to Naval Dockyard Limited",
      slug: "unscheduled-visit-cns-ndl",
      excerpt:
        "Unscheduled Visit of The Chief of the Naval Staff Vice Admiral AZ Gambo to Naval Dockyard Limited on Sunday, 27th Feb 2022.",
      content:
        "On Sunday, February 27, 2022, the Chief of the Naval Staff (CNS), Vice Admiral AZ Gambo, paid an unscheduled but significant visit to Naval Dockyard Limited (NDL) in Lagos. The surprise inspection underscored the CNS's hands-on leadership approach and his commitment to ensuring operational readiness and efficiency within the Navy’s critical establishments.\n\nDuring the visit, Vice Admiral Gambo toured key areas of the dockyard, engaged with senior officers and personnel, and assessed ongoing operations and infrastructural developments. His presence provided a morale boost to the workforce and reinforced the importance of maintaining high standards in maintenance, logistics, and shipbuilding operations.\n\nThe visit also served as an opportunity for the CNS to evaluate the dockyard’s capacity to support the Navy’s strategic objectives, particularly in indigenizing ship maintenance and enhancing maritime security. In line with his vision for the Nigerian Navy, Vice Admiral Gambo emphasized the need for innovation, professionalism, and inter-agency collaboration as NDL continues to play a pivotal role in supporting national maritime defense and development goals.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0035.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "February 27, 2022",
      author: "Info",
      category: "Visits",
    },
    {
      title: "Visit of DG NIMASA to Naval Dockyard Limited",
      slug: "dg-nimasa-visit-ndl",
      excerpt:
        "Visit of DG NIMASA, Dr. Bashir Jamoh, to Naval Dockyard Limited on Thursday, 10 February 2022, aimed at strengthening maritime collaboration and exploring strategic synergies.",
      content:
        "On Thursday, February 10, 2022, the Director General of the Nigerian Maritime Administration and Safety Agency (NIMASA), Dr. Bashir Jamoh, paid a strategic visit to Naval Dockyard Limited (NDL) in Lagos. The high-level visit was part of ongoing efforts to strengthen collaboration between NIMASA and the Nigerian Navy, particularly in the areas of maritime safety, security, and local capacity development.\n\nDuring the visit, Dr. Jamoh was received by the management team of NDL and given a comprehensive tour of the facility, including the dry dock, fabrication workshops, and engineering units. The DG commended the Navy’s commitment to maritime defense and emphasized the need for enhanced synergy between NIMASA and NDL in tackling security threats in Nigeria’s waters, including piracy, illegal bunkering, and maritime pollution.\n\nThe visit highlighted shared objectives between both institutions, especially in leveraging local capabilities for shipbuilding and maintenance, while promoting Nigeria's blue economy agenda. Dr. Jamoh reiterated NIMASA’s readiness to partner more closely with NDL in driving maritime innovation, research, and the indigenization of critical maritime services.\n\nNaval Dockyard Limited, in its response, reaffirmed its dedication to supporting national maritime infrastructure through professionalism, technological excellence, and strategic partnerships that contribute to safer and more prosperous Nigerian waters.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0022.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0023.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0025.jpg",
      ],
      date: "February 10, 2022",
      author: "Info",
      category: "Visits",
    },
    {
      title:
        "Inspection of Naval Dockyard Limited by the Admiral Superintendent",
      slug: "inspection-ndl-admiral-superintendent",
      excerpt:
        "Inspection of Naval Dockyard Limited by the Admiral Superintendent, Rear Admiral Hamza Ibrahim, to assess operational readiness and ongoing projects.",
      content:
        "On Thursday, February 17, 2022, the Admiral Superintendent of Naval Dockyard Limited (NDL), Rear Admiral Hamza Ibrahim, conducted a comprehensive inspection of the facility to assess its operational efficiency, technical capabilities, and project progress. The visit was part of routine leadership oversight and strategic evaluation aimed at reinforcing NDL’s commitment to excellence in ship repair, maintenance, and support for Nigeria’s maritime defense architecture.\n\nRear Admiral Ibrahim, accompanied by senior officers and department heads, toured several key areas within the dockyard including the dry dock complex, fabrication and welding workshops, marine engineering departments, and logistics hubs. The inspection focused on the ongoing modernization efforts at the Dockyard and its preparedness to handle both Nigerian Navy and commercial projects.\n\nHe commended the workforce for their dedication and professionalism, and reiterated the Navy's resolve to continue enhancing local capacity through innovation, skill development, and resource optimization. Rear Admiral Ibrahim also emphasized the importance of adhering to global best practices in shipyard operations, while fostering collaboration with stakeholders in both public and private maritime sectors.\n\nThis inspection reflects the Navy's continuous efforts to ensure that NDL remains a hub of excellence and a strategic asset in Nigeria’s maritime domain, supporting national security, economic growth, and the blue economy initiative.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0034.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "February 17, 2022",
      author: "Info",
      category: "Visits",
    },
    {
      title: "Dearsan Shipyard Staff Turkey’s Visit To Naval Dockyard Limited",
      slug: "dearsan-shipyard-visit-ndl",
      excerpt:
        "Dearsan Shipyard staff from Turkey visited Naval Dockyard Limited to explore possibilities of partnership arrangements with mutual benefits.",
      content:
        "On February 17, 2022, a delegation from Dearsan Shipyard, a prominent Turkish shipbuilding company, paid a strategic visit to Naval Dockyard Limited (NDL) in Lagos, Nigeria. The visit was aimed at exploring areas of collaboration, particularly in naval shipbuilding, technology transfer, local capacity development, and joint ventures that would benefit both institutions.\n\nThe visiting team from Dearsan was warmly received by the management of NDL, led by the Admiral Superintendent, Rear Admiral Hamza Ibrahim. The engagement featured a facility tour of the Dockyard’s core operational areas including the dry dock, marine engineering division, and fabrication workshops. These visits offered the Turkish delegation firsthand insights into NDL’s technical capabilities, infrastructure, and operational excellence.\n\nDiscussions centered on the potential for long-term partnerships in ship construction, maintenance, and naval technology, especially in support of the Nigerian Navy’s fleet expansion and modernization goals. The interaction also emphasized opportunities for knowledge sharing and strengthening indigenous shipbuilding capacity in Nigeria.\n\nThis high-level engagement aligns with NDL’s strategic vision of expanding its international partnerships and enhancing local content in the maritime and defense sectors. Both parties expressed optimism about the prospects of future collaborations that would not only strengthen bilateral defense relations but also contribute to Nigeria’s blue economy and technological advancement.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2022/02/navaldockyardlimitednigeria-20022022-0004.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "February 17, 2022",
      author: "Info",
      category: "Visits",
    },
    {
      title:
        "Commissioning of Third Locally Built Nigerian Navy Ship at Naval Dockyard Limited",
      slug: "commissioning-third-locally-built-ship-ndl",
      excerpt:
        "The third indigenous Nigerian Navy ship was officially commissioned at Naval Dockyard Limited by President Muhammadu Buhari (GCFR), marking a major milestone in Nigeria’s shipbuilding capability.",
      content:
        "On Thursday, December 9, 2021, Naval Dockyard Limited (NDL) witnessed a historic moment with the commissioning of the third locally built Nigerian Navy ship, NNS OJI, by the President and Commander-in-Chief of the Armed Forces, Muhammadu Buhari (GCFR). The ceremony, held at the Dockyard’s premises in Lagos, marked a significant milestone in Nigeria’s quest for maritime self-reliance, local content development, and naval fleet modernization.\n\nThe event drew high-profile dignitaries including the Minister of Defence, Chief of Naval Staff (CNS), top military officials, diplomatic representatives, and key stakeholders from the maritime and defense sectors. President Buhari, in his address, lauded the Nigerian Navy’s sustained commitment to building indigenous platforms and emphasized the importance of homegrown technological solutions in addressing the nation’s security and economic challenges.\n\nNNS OJI, the newly commissioned Seaward Defence Boat (SDB III), is a testament to the evolving shipbuilding expertise within Naval Dockyard Limited. The vessel was designed and constructed by Nigerian engineers and technicians, showcasing the Dockyard’s growing technical capacity and alignment with the Federal Government’s local content and industrialization agenda.\n\nThe commissioning underscores the Nigerian Navy’s determination to enhance maritime security, combat piracy, and protect national assets in the Gulf of Guinea. It also positions NDL as a strategic player in indigenous ship construction, reinforcing its role in supporting the blue economy and driving technological advancement within Nigeria’s maritime domain.\n\nThis achievement adds to the legacy of innovation at Naval Dockyard Limited and reflects the Navy’s long-term vision of becoming self-sufficient in naval engineering and defense infrastructure development.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2021/12/IMG-20211210-WA0040.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2021/12/DSC_0566-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/12/IMG-20211210-WA0042.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/12/DSC_0546-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/12/DSC_0522-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/12/DSC_0519-1536x1024.jpg",
      ],
      date: "December 9, 2021",
      author: "Info",
      category: "Commissioning",
    },
    {
      title:
        "Visit of the Vice President Professor Yemi Osinbajo to Naval Dockyard Limited",
      slug: "vp-osinbajo-visit-ndl",
      excerpt:
        "Vice President Professor Yemi Osinbajo visited Naval Dockyard Limited to assess local content development and strategic maritime infrastructure in Lagos.",
      content:
        "On Thursday, December 9, 2021, the Vice President of the Federal Republic of Nigeria, Professor Yemi Osinbajo (SAN, GCON), paid an official visit to Naval Dockyard Limited (NDL) in Victoria Island, Lagos. The high-profile visit was part of the Federal Government’s ongoing efforts to encourage innovation, promote local content, and assess Nigeria’s capacity for indigenous shipbuilding and maritime defense infrastructure.\n\nVice President Osinbajo was received by senior naval officers and the management team of NDL, led by the Admiral Superintendent, Rear Admiral Hamza Ibrahim. He was given a comprehensive tour of the dockyard’s operational facilities, including the dry dock, marine engineering workshops, and fabrication areas.\n\nDuring his remarks, Professor Osinbajo commended the Nigerian Navy and NDL for their progress in indigenous ship construction and technical self-reliance. He emphasized the Federal Government’s commitment to supporting local industrial capacity and noted that such institutions play a pivotal role in Nigeria’s economic diversification, security, and the advancement of the blue economy.\n\nThe visit also provided an opportunity to discuss public-private partnerships, naval innovation, and the strategic role of Naval Dockyard Limited in maintaining maritime safety and supporting the Nigerian Navy’s fleet.\n\nProfessor Osinbajo’s engagement with NDL underscored the administration’s focus on industrialization, job creation, and technological advancement through institutions that drive homegrown solutions in defense and maritime development.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2022/02/navaldockyardlimitednigeria-20022022-0004.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0453-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0452-Copy-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0433-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0432-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0429-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0398-Copy-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0395-Copy-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0389-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0386-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0357-1536x1024.jpg",
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_0351-1536x1024.jpg",
      ],
      date: "December 9, 2021",
      author: "Info",
      category: "Visits",
    },
    {
      title:
        "Members of House of Rep Committee on Nigerian Navy Visit To Naval Dockyard Limited",
      slug: "vp-osinbajo-visit-ndl",
      excerpt:
        "Vice President Professor Yemi Osinbajo visited Naval Dockyard Limited to assess local content development and strategic maritime infrastructure in Lagos.",
      content:
        "On December 9, 2021, Members of the House of Representatives Committee on the Nigerian Navy, led by Chairman Rt. Hon. Yusuf Adamu Gagdi, paid an oversight visit to the Naval Dockyard Limited (NDL) in Lagos. This visit was in accordance with the National Assembly's constitutional mandate to ensure accountability and efficiency in public institutions. The committee inspected various units of the dockyard, commending the significant progress made in revitalizing key departments such as the electroplating, electrical, and mechanical workshops, which are now operating at over 90% capacity. The team also assessed the dockyard's contribution to local content development, particularly through the successful construction of indigenously built Seaward Defence Boats like NNS Oji. Rear Admiral Abolaji Orederu, Admiral Superintendent of NDL, attributed this success to the support of the Chief of Naval Staff, Vice Admiral Emmanuel Ikechukwu Ogalla, and the sustained funding provided by the National Assembly. The committee also inspected several infrastructure projects supported by the NNPCL and the World Bank, highlighting the dockyard’s vital role in strengthening Nigeria’s maritime security and self-reliance.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_2173-1536x1024.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "December 9, 2021",
      author: "Info",
      category: "Visits",
    },
    {
      title: "The Naval Dockyard Limited Receives The National Award",
      slug: "naval-dockyard-national-award-2021",
      excerpt:
        "Naval Dockyard Limited was honored with the National Award for Excellence as the Most Reliable Nigerian Marine Engineering Company of the Year 2021 during the National Quality Conference.",
      content:
        "On December 9, 2021, the Naval Dockyard Limited (NDL) was honored with the National Award for Excellence as the Most Reliable Nigerian Marine Engineering Company of the Year 2021. This prestigious recognition was conferred during the National Quality Conference, organized by Allied Integrated Promotion & Management Limited. The award underscores NDL's unwavering commitment to quality, innovation, and excellence in marine engineering. NDL's achievements include the indigenous construction of naval vessels such as the NNS Andoni, NNS Karaduwa, and NNS Oji, showcasing its capabilities in shipbuilding and maintenance. The dockyard's efforts in revitalizing key facilities, engaging in strategic partnerships, and contributing to regional maritime security have solidified its reputation as a strategic national asset.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2021/11/DSC_1591-1536x1024.jpg",
      additionalImages: [
        "https://candordev.com/wp-content/uploads/2021/11/DSC_1591-1536x1024.jpg",
        "https://candordev.com/wp-content/uploads/2021/11/DSC_1600-1536x1024.jpg",
        "https://candordev.com/wp-content/uploads/2021/11/DSC_1625-1536x1024.jpg",
      ],
      date: "December 9, 2021",
      author: "Info",
      category: "Awards",
    },
    {
      title: "Pictures Depicting Current Overall Status Of SDB III",
      slug: "pictures-status-sdb-iii",
      excerpt:
        "Visual documentation showcasing the construction progress of Seaward Defence Boat III (SDB III) at Naval Dockyard Limited, Lagos.",
      content:
        "The Naval Dockyard Limited (NDL) in Lagos has released a series of images illustrating the construction progress of the Seaward Defence Boat III (SDB III), named NNS Oji. These photographs provide a comprehensive view of the vessel's development stages, highlighting the Nigerian Navy's commitment to indigenous shipbuilding. The NNS Oji, a 43-meter steel-hulled vessel, represents the third iteration in the Seaward Defence Boat series, following the successful launches of NNS Andoni and NNS Karaduwa. The visual documentation underscores the meticulous craftsmanship and engineering expertise involved in assembling the hull and superstructure, reflecting NDL's role in enhancing Nigeria's maritime defense capabilities.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2021/06/IMG-20210609-WA0048.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "June 9, 2021",
      author: "Info",
      category: "Projects",
    },
    {
      title: "Steel Fabrication – A Reliable Solution for Shipbuilding",
      slug: "pictures-status-sdb-iii",
      excerpt:
        "Visual documentation showcasing the construction progress of Seaward Defence Boat III (SDB III) at Naval Dockyard Limited, Lagos.",
      content:
        "Steel fabrication involves transforming raw materials into desired shapes used in engineering constructions. At Naval Dockyard Limited, Lagos, steel has become the preferred material in constructing superstructures, particularly for shipbuilding. While other materials such as fiberglass, non-ferrous metals, and aluminum are also used, steel—a combination of carbon and iron—remains the most favored due to its versatility, corrosion and heat resistance, and cost-effectiveness. The most commonly used types in shipbuilding are mild and plain carbon steel, valued for their marine engineering suitability.<br /><br />Steel fabrication products are essential in manufacturing large machinery parts and structural components of ships. The fundamental fabrication methods include cutting, machining, drilling, welding, grinding, and other techniques. However, steel fabrication requires expertise and precision; it is not a task for just any welding company. Choosing the wrong fabricator can lead to catastrophic results, making it vital to work with highly skilled professionals.<br /><br />To meet this demand, Naval Dockyard Limited established a state-of-the-art steel fabrication workshop equipped with cutting-edge technology for tracking operations and maintaining process efficiency. Our capabilities include circular cutting of steel rods up to 30mm in diameter, cold bending and straightening of shafts up to 30mm, plasma flame cutting of steel plates, folding using power formers, and forging into various shapes. All steel grades used are certified and classified in line with the standards of relevant regulatory bodies.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2020/11/dockyard1.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "June 9, 2021",
      author: "Info",
      category: "Projects",
    },
    {
      title: "Landmark Naval Vessel Construction",
      slug: "pictures-status-sdb-iii",
      excerpt:
        "Visual documentation showcasing the construction progress of Seaward Defence Boat III (SDB III) at Naval Dockyard Limited, Lagos.",
      content:
        "Naval Dockyard Limited (NDL) has carved a niche in shipbuilding technology, driven by a dedicated community of Naval and civilian engineers using cutting-edge innovations to advance national capabilities. NDL remains the only shipyard in West Africa that specializes in constructing military vessels.<br /><br />Among its notable projects is the Seaward Defence Boat (SDB) series—a high-grade naval vessel capable of traveling up to 40 nautical miles beyond the 350-nautical-mile continental shelf, establishing vital connections with offshore petroleum vessels. These boats also interface with short fast attack crafts for rapid response missions.<br /><br />The journey began in 2007, when NDL made a strategic decision to build vessels locally to reduce procurement costs. The first attempt was not a military vessel but a cruise ship named ‘SOKALAFIA,’ conceived and constructed at the Naval Shipyard in Port Harcourt. It was designed to transport 90 personnel along the coast from their workplaces to Navy Town. This achievement proved that indigenous vessel construction was viable.<br /><br />Building on that success, NDL launched its first military vessel in 2009—a 30-meter Seaward Defence Boat, named NNS ANDONI (P-100), which was completed and commissioned in 2011. Seeking to expand its shipbuilding capacity, the Nigerian Navy initiated the construction of a larger vessel. This led to the development of NNS KARADUWA (P-102), a 38-meter vessel that marked a significant upgrade from its predecessor. Both vessels remain actively operational at sea.<br /><br />Currently, the Nigerian Navy is on the verge of launching yet another vessel—this time constructed from steel, reflecting continued advancements in the nation's shipbuilding technologies.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2020/09/NNS-ANDONI-AT-SEA.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "June 9, 2021",
      author: "Info",
      category: "Projects",
    },
    {
      title: "SDB 3 Building Underway In Naval Dockyard Limited",
      slug: "pictures-status-sdb-iii",
      excerpt:
        "Visual documentation showcasing the construction progress of Seaward Defence Boat III (SDB III) at Naval Dockyard Limited, Lagos.",
      content:
        "The Nigerian Navy over the decade develop expertise and embarked on design/building of ship and craft. With the present class of the Seaward Defence Boat (SDB3) which is a 43m steel vessel, a shift from aluminium to steel, therefore, the need for critical thinking in terms of Naval architectural design unlike what is common in this region of having ships made of Glass Reinforced Plastic and Aluminium. The research of being all steel vessel was particularly critical now because the SDB3 is the largest of the series and meant to be the best judging by what her roles are supposed to be. Most of her resources are steel, generated at NDL. The Hull is already completed and advancing into the outfitting stage with most of the outfitting equipment on ground. SDB3 is going to be quite appealing with sophisticated trappings.",
      image: "https://navaldockyard.com/wp-content/uploads/2020/09/SBD3.jpg",
      // additionalImages: [
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      // ],
      date: "June 9, 2021",
      author: "Info",
      category: "Projects",
    },
    {
      title:
        "Naval Dockyard Limited Constructs Two 500 TON SELF-PROPELLED BARGE for the Nigerian Navy",
      slug: "pictures-status-sdb-iii",
      excerpt:
        "Visual documentation showcasing the construction progress of Seaward Defence Boat III (SDB III) at Naval Dockyard Limited, Lagos.",
      content:
        "The Nigerian Navy over the decade develop expertise and embarked on design/building of ship and craft. With the present class of the Seaward Defence Boat (SDB3) which is a 43m steel vessel, a shift from aluminium to steel, therefore, the need for critical thinking in terms of Naval architectural design unlike what is common in this region of having ships made of Glass Reinforced Plastic and Aluminium. The research of being all steel vessel was particularly critical now because the SDB3 is the largest of the series and meant to be the best judging by what her roles are supposed to be. Most of her resources are steel, generated at NDL. The Hull is already completed and advancing into the outfitting stage with most of the outfitting equipment on ground. SDB3 is going to be quite appealing with sophisticated trappings.",
      image: "https://navaldockyard.com/wp-content/uploads/2020/09/SBD3.jpg",
      // additionalImages: [
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
      //   "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      // ],
      date: "June 9, 2021",
      author: "Info",
      category: "Projects",
    },
    {
      title: "Naval Dockyard Builds 25 Man House Boat for the Nigeria Navy",
      slug: "house-boat-construction-navy",
      excerpt:
        "Naval Dockyard Limited constructs a 25-man houseboat to support the Nigerian Navy's anti-crude oil theft operations in the Niger Delta.",
      content:
        "In line with the Nigerian Navy's ongoing efforts to combat crude oil theft and enhance maritime security in the Niger Delta, Naval Dockyard Limited (NDL) was commissioned to construct a 25-man houseboat. This floating operational base is intended to support naval personnel stationed at strategic choke points across the creeks, which have proven effective in deterring illegal activities.\n\nConstruction of the houseboat began in December 2018, and as of early 2019, the project had reached Day 72 of development. The vessel has been transferred from the primary construction yard to one of NDL's twin docks to commence the installation of modular cabins. These cabins, engineered to house 25 personnel, are being reinforced with steel to provide protection from potential hostile gunfire.\n\nThe project exemplifies NDL’s capacity in indigenous shipbuilding, underlining its vital role in supporting the Nigerian Navy's security operations and reducing reliance on foreign platforms. Completion was scheduled for the end of February 2019, after which the houseboat would be deployed to a location determined by naval command.",
      image:
        "https://navaldockyard.com/wp-content/uploads/2019/10/IMG_3130-1024x768.jpg",
      additionalImages: [
        "https://candordev.com/wp-content/uploads/2019/10/IMG_3139-1024x768-768x576.jpg",
        "https://candordev.com/wp-content/uploads/2019/10/205cb34e-482b-4515-9f00-005ecfea3835-768x576.jpg",
      ],
      date: "February 2019",
      author: "Info",
      category: "Projects",
    },

    {
      title:
        "MV Ajemisan & MV United Traders Successfully Docked at Naval Dockyard Limited",
      slug: "mv-ajemisan-united-traders-docking-ndl",
      excerpt:
        "Naval Dockyard Limited has successfully docked MV Ajemisan and MV United Traders, showcasing its expertise in ship maintenance and reinforcing its reputation in the maritime sector.",
      content:
        "In April 2025, Naval Dockyard Limited (NDL) demonstrated its exceptional capabilities in ship maintenance by successfully docking two significant vessels: MV Ajemisan and MV United Traders. This operation underscores NDL's commitment to excellence in the maritime industry.\n\nMV Ajemisan, an anchor handling vessel, and MV United Traders, a bulk carrier, underwent comprehensive maintenance procedures at NDL's state-of-the-art facilities. The docking process involved meticulous planning and execution, ensuring that both vessels received the necessary repairs and upgrades to meet international maritime standards.\n\nNDL's skilled workforce utilized advanced technologies and adhered to stringent safety protocols throughout the docking process. The successful completion of this operation not only highlights NDL's technical proficiency but also its role as a pivotal player in supporting both military and commercial maritime activities.\n\nThis achievement reinforces NDL's position as a trusted partner in the maritime sector, capable of handling diverse docking needs with efficiency and reliability. It also contributes to Nigeria's growing reputation in the global maritime industry, showcasing the nation's capacity for high-quality ship maintenance and repair services.",
      image: "/images/mva/mva-01.PNG",
      additionalImages: [
        "/images/mva/mva-02.PNG",
        "/images/mva/mva-03.PNG",
        "/images/mva/mva-04.PNG",
        "/images/mva/mva-05.PNG",
        "/images/mva/mva-06.PNG",
        "/images/mva/mva-07.PNG",
      ],
      date: "April 15, 2025",
      author: "Info",
      category: "Operations",
    },
    {
      title:
        "Naval Dockyard Limited Strengthens Military Collaboration with 81 Division Nigerian Army",
      slug: "ndl-goc-81-division-courtesy-call",
      excerpt:
        "Rear Admiral IE Shehu paid a courtesy visit to the GOC 81 Division, fostering stronger military collaboration and joint operational synergy.",
      content:
        "On 6 May 2025, Rear Admiral IE Shehu, Admiral Superintendent of Naval Dockyard Limited (NDL), paid a courtesy call to the Division Headquarters of the 81 Division Nigerian Army. He was received by the General Officer Commanding (GOC), Major General Farouk Mijinyawa. The meeting reaffirmed a mutual commitment to collaboration among security agencies in Lagos and Ogun states. Discussions centered on improving synergy in maintenance, logistics, and fleet support. Rear Admiral Shehu pledged NDL’s support in providing essential engineering services and technical maintenance. He also visited key partners such as NIMASA, NAVDOC, NAFRC, and HQWNC to reinforce institutional partnerships.",
      image: "/images/events/81division-visit.jpg",
      date: "May 6, 2025",
      author: "Info",
      category: "Partnerships",
    },
    {
      title:
        "Naval Dockyard Limited Visits Apapa Customs Command to Deepen Maritime Collaboration",
      slug: "ndl-apapa-customs-visit",
      excerpt:
        "Rear Admiral Ibrahim Shehu led a delegation to the Apapa Port Command to enhance cooperation for maritime security and port efficiency.",
      content:
        "On 8 May 2025, Rear Admiral Ibrahim Shehu, Admiral Superintendent of Naval Dockyard Limited (NDL), led a high-level delegation to the Apapa Port Command of the Nigeria Customs Service. Accompanied by senior officers including Cdre. AO Obisesan and Capt. MT Abdullahi, the team sought to reinforce collaboration for enhanced security and efficiency in riverine operations. The Customs Area Controller, Comptroller Babatunde Olomu, welcomed the team and reiterated support for continued partnership. Discussions focused on maintaining patrol boats and improving riverine security and trade facilitation.",
      image: "/images/news/apapa-customs-1.PNG",
      additionalImages: [
        "/images/news/apapa-customs-2.PNG",
        "/images/news/apapa-customs-3.PNG",
      ],
      date: "May 8, 2025",
      author: "Info",
      category: "Operations",
    },
    {
      "title": "DPIMED Visits Naval Dockyard Limited for Project Monitoring",
      "slug": "dpimed-courtesy-visit-ndl",
      "excerpt":
        "Rear Admiral JO Okosun of DPIMED visited NDL to inspect ongoing projects and ensure compliance with Navy standards.",
      "content":
        "On 5 May 2025, Rear Admiral JO Okosun, Director of Project Implementation Monitoring & Evaluation (DPIMED), visited Naval Dockyard Limited as part of a project inspection tour. The visit focused on reviewing the progress and quality of ongoing projects under the Nigerian Navy. Admiral Okosun commended the Dockyard’s work and urged the team to maintain diligence and adherence to timelines and standards.",
      "image": "/images/news/dpimed-visit-1.PNG",
      additionalImages: [
        "/images/news/dpimed-visit-2.PNG",
        "/images/news/dpimed-visit-3.PNG",
        "/images/news/dpimed-visit-4.PNG",
        "/images/news/dpimed-visit-5.PNG",
        "/images/news/dpimed-visit-6.PNG",
      ],
      "date": "May 5, 2025",
      "author": "Info",
      "category": "Project Monitoring",
    },
    {
      "title": "Cocktail Meet & Greet Hosted by Naval Dockyard Limited",
      "slug": "ndl-cocktail-meet-and-greet",
      "excerpt":
        "Naval Dockyard Limited hosted a networking cocktail event to strengthen business relations with stakeholders in the maritime industry.",
      "content":
        "On 30 April 2025, Rear Admiral Ibrahim E. Shehu hosted a cocktail meet and greet at Naval Dockyard Limited’s Conference Hall. The event brought together senior officers, contractors, captains of industry, and stakeholders for an evening of networking, fine dining, and strategic discussions. The gathering fostered deeper business ties and opened new opportunities for collaboration in maritime and industrial sectors.",
      "image": "/images/events/cocktail-event.jpg",
      "date": "April 30, 2025",
      "author": "Info",
      "category": "Networking",
    },
    {
      "title":
        "Naval Dockyard Limited Celebrates Promotion of Outstanding Officers",
      "slug": "ndl-stripes-ceremony-2025",
      "excerpt":
        "NDL celebrated the promotion of three distinguished officers, highlighting a culture of excellence and meritocracy.",
      "content":
        "Naval Dockyard Limited hosted a promotion ceremony honoring three officers: Cdr UL Gurama, Cdr A Ordu, and Cdr A Ukwueze, for their exceptional service. The Chief of Naval Staff, Vice Admiral EI Ogalla, approved their elevation, recognizing their professionalism and dedication. The event reaffirmed the Navy’s tradition of merit-based advancement and inspired others to strive for excellence in service.",
      "image": "/images/news/stripes-ceremony-1.PNG",
      additionalImages: [
        "/images/news/stripes-ceremony-2.PNG",
        "/images/news/stripes-ceremony-3.PNG",
        "/images/news/stripes-ceremony-4.PNG",
        "/images/news/stripes-ceremony-5.PNG",
        "/images/news/stripes-ceremony-6.PNG",
        "/images/news/stripes-ceremony-7.PNG",
        "/images/news/stripes-ceremony-8.PNG",
        "/images/news/stripes-ceremony-9.PNG",
        "/images/news/stripes-ceremony-10.PNG",
      ],
      "date": "April 28, 2025",
      "author": "Info",
      "category": "Personnel",
    },
    {
      "title":
        "Oniru of Iruland Visits Naval Dockyard Limited in Commemoration of the 5th Anniversary of his Coronation",
      "slug": "oniru-visit-ndl-5th-coronation-anniversary",
      "excerpt":
        "His Royal Majesty Oba Abdulwasiu Lawal visited NDL to commemorate his 5th coronation anniversary, reaffirming ties between Iruland and the Nigerian Navy.",
      "content":
        "On Tuesday, 13 May 2025, the Oniru of Iruland, His Royal Majesty Oba Abdulwasiu Omogbolahan Lawal, paid a courtesy visit to Naval Dockyard Limited (NDL) as part of activities marking his 5th anniversary on the throne. The revered monarch, accompanied by his royal entourage consisting of Chiefs holding the titles of baale and Olowu, was warmly received by the Admiral Superintendent, Rear Admiral IE Shehu, alongside senior officers of the Dockyard.\n\nRear Admiral Shehu commended His Majesty’s commitment to fostering community relations, better life for his subjects and maritime security. The visit highlighted some importance of roles the Yard plays in collaborating with traditional institutions in promoting national development. His royal majesty expressed appreciation for NDL’s contributions to the host community, Lagos State and Nigeria’s maritime sector, reaffirming his support for the Navy’s efforts. The visit further strengthened the existing cordial bond between Iruland, the Nigerian Navy and Naval Dockyard in particular.",
      "image": "/images/events/oniru-visit.jpg",
      "date": "May 13, 2025",
      "author": "Info",
      "category": "Community Relations",
    },
    {
      "title": "Successful Undocking of Jascon 3 at Naval Dockyard Limited",
      "slug": "jascon3-undocking-ndl",
      "excerpt":
        "NDL successfully undocked MV Jascon 3, showcasing precision, technical excellence, and safety in marine engineering.",
      "content":
        "Naval Dockyard Limited marked another milestone with the successful undocking of MV Jascon 3. The operation demonstrated the Dockyard’s precision, professionalism, and adherence to safety in vessel handling and marine engineering. This achievement reinforces NDL’s reputation for excellence in supporting Nigeria’s naval and maritime industry through high-quality maintenance and construction.",
      "image": "/images/events/jascon3-undocking.jpg",
      "date": "April 17, 2025",
      "author": "Info",
      "category": "Engineering",
    },
    {
      title:
        "FOC Logistics Command Rear Admiral Otitoloju Fadeyi Visits Naval Dockyard Limited",
      slug: "foc-logistics-visit-ndl",
      excerpt:
        "In April 2025, Rear Admiral Otitoloju Fadeyi, the newly appointed Flag Officer Commanding Logistics Command, visited Naval Dockyard Limited to assess operations and strengthen collaborative frameworks.",
      content:
        "In April 2025, Rear Admiral Otitoloju Fadeyi, the newly appointed Flag Officer Commanding (FOC) of the Nigerian Navy Logistics Command, undertook a strategic visit to Naval Dockyard Limited (NDL) in Lagos. This visit was part of his assumption of command activities, aimed at conducting an on-the-spot assessment of units under his jurisdiction and reinforcing existing collaborative frameworks with key maintenance and logistics establishments.\n\nDuring the visit, Rear Admiral Fadeyi expressed appreciation for the warm reception and commended NDL for its transformational strides in providing services to the Nigerian Navy and the broader maritime community. He emphasized the shared goals and interests between the Logistics Command and NDL in supporting the Navy's mandates, particularly in maritime defense, security, and diplomacy.\n\nRear Admiral Fadeyi highlighted the importance of synergy between logistics and maintenance units to achieve operational efficiency. He pledged to deepen the focus on staff welfare and the optimal performance of Navy equipment, aligning with his commitment to enhancing the Navy's capabilities.\n\nOn its part, Naval Dockyard Limited, under the new leadership of Rear Admiral Ibrahim Ele-Ojo Shehu, reaffirmed its dedication to charting sustainable paths and opening new frontiers to improve its contributions to maritime security, safety, indigenizing ship construction and maintenance, local content, and human capital development. This commitment aims to bolster Nigeria's blue economy and national development.",
      image: "/images/foc/FOC-01.PNG",
      additionalImages: [
        "/images/foc/FOC-02.PNG",
        "/images/foc/FOC-03.PNG",
        "/images/foc/FOC-04.PNG",
        "/images/foc/FOC-05.PNG",
        "/images/foc/FOC-06.PNG",
        "/images/foc/FOC-07.PNG",
        "/images/foc/FOC-08.PNG",
        "/images/foc/FOC-09.PNG",
        "/images/foc/FOC-10.PNG",
      ],
      date: "April 15, 2025",
      author: "Info",
      category: "Visits",
    },
    {
      title:
        "Chief of Air Staff Visits Naval Dockyard Limited En Route to Takwa Bay Commissioning",
      slug: "chief-of-air-staff-visit-ndl-takwa-bay",
      excerpt:
        "On March 1, 2025, Air Marshal Hassan Abubakar, Chief of Air Staff, visited Naval Dockyard Limited in Lagos, utilizing its facilities en route to Takwa Bay for commissioning vital Nigerian Air Force projects.",
      content:
        "On March 1, 2025, Air Marshal Hassan Abubakar, the Chief of Air Staff (CAS), made a strategic visit to Naval Dockyard Limited (NDL) in Lagos. The visit was part of his itinerary to commission key Nigerian Air Force (NAF) projects at Takwa Bay. Upon arrival at NDL, the CAS and his entourage were received by the Dockyard's leadership and provided with logistical support, including transportation via Nigerian Navy boats from the NDL jetty to Takwa Bay.\n\nThis visit underscores the collaborative efforts between the Nigerian Navy and the Nigerian Air Force, reflecting the commitment to inter-agency cooperation in line with the Chief of Naval Staff's strategic directives. The support rendered by NDL exemplifies its role in facilitating joint operations and enhancing the operational readiness of Nigeria's armed forces.",
      image: "/images/cas/cas-01.PNG",
      additionalImages: [
        "/images/cas/cas-02.PNG",
        "/images/cas/cas-03.PNG",
        "/images/cas/cas-04.PNG",
        "/images/cas/cas-05.PNG",
        "/images/cas/cas-06.PNG",
        "/images/cas/cas-07.PNG",
        "/images/cas/cas-08.PNG",
        "/images/cas/cas-09.PNG",
        "/images/cas/ca-10.PNG",
        "/images/cas/ca-11.PNG",
      ],
      date: "March 1, 2025",
      author: "Info",
      category: "Visits",
    },
    {
      title:
        "Naval Dockyard Limited Partners with Dateline Energy Services to Construct LPG Coastal Gas Transportation Barge",
      slug: "ndl-dateline-energy-lpg-barge",
      excerpt:
        "In September 2023, Naval Dockyard Limited entered into a partnership with Dateline Energy Services for the construction of a 4,000 metric ton Liquefied Petroleum Gas (LPG) Coastal Gas Transportation Barge, aiming to enhance Nigeria's maritime and energy sectors.",
      content: "",
      image: "https://cdn.businessday.ng/2023/09/Dateline-energy-1.png",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "September 2, 2023",
      author: "Info",
      category: "Projects",
    },
    {
      title: "NDL Successfully Undocks MV Stark and TMC Evolution",
      slug: "ndl-undocks-mv-stark-tmc-evolution",
      excerpt:
        "In October 2024, NDL demonstrated its capabilities by successfully docking and repairing MV Stark and TMC Evolution, vessels with a combined tonnage of about 8,600 tons, restoring them to optimal operational efficiency.",
      content: "",
      image: "/images/commercial/mv-stark/mc-stark-04.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "October 19, 2024",
      author: "Ngozi Okafor",
      category: "Projects",
    },
    {
      title:
        "NDL Participates in Defence Research and Development Bureau Seminar/Exhibition 2024",
      slug: "ndl-drdb-seminar-exhibition-2024",
      excerpt:
        "In October 2024, NDL showcased its contributions to ship design and development at the Defence Research and Development Bureau Seminar/Exhibition, highlighting advancements in maritime defense and vessel maintenance.",
      content: "",
      image:
        "https://defence.gov.ng/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-22.27.56-1024x458.jpeg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "October 15, 2024",
      author: "Chinelo Abah",
      category: "Events",
    },
    {
      title:
        "NDL Partners with Caverton Marine Limited to Revitalize GRP Boatbuilding Facilities",
      slug: "ndl-caverton-grp-boatbuilding",
      excerpt:
        "In December 2024, NDL signed a concession agreement with Caverton Marine Limited to manage, overhaul, and lease the Glass Reinforced Plastic (GRP) boatbuilding warehouse, aiming to enhance local production capabilities for various vessels.",
      content: "",
      image:
        "https://cdn.businessday.ng/wp-content/uploads/2024/12/ae55ff91-98cb-43e8-8fb4-a8e2cefb16b6-600x400.jpeg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "December 10, 2024",
      author: "Adebayo Johnson",
      category: "Facilities",
    },
    {
      title:
        "NDL Hosts 'Protocol Renaissance in Nigeria' Event in Collaboration with ACPPN",
      slug: "ndl-acppn-protocol-renaissance",
      excerpt:
        "In November 2024, NDL partnered with the Association of Certified Protocol Practitioners in Nigeria to host the 'Protocol Renaissance in Nigeria' event, fostering networking and collaboration among industry professionals.",
      content: "",
      image:
        "https://pmexpressng.com/wp-content/uploads/2024/11/IMG-20241130-WA0051.jpg",
      additionalImages: [
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0036.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0037.jpg",
        "https://navaldockyard.com/wp-content/uploads/2022/03/IMG-20220228-WA0038.jpg",
      ],
      date: "November 29, 2024",
      author: "Info",
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
      image:
        "https://peopleandpowermag.com/wp-content/uploads/2024/09/NAVAL-ENGINEERING-PIVOTAL-3.jpg",
      date: "September 12, 2024",
      category: "Events",
    },
  ].sort(sortByNewestDate),

  categories: [
    { name: "Projects", count: 6, slug: "projects" },
    { name: "Facilities", count: 1, slug: "facilities" },
    { name: "Events", count: 3, slug: "events" },
    { name: "Visits", count: 2, slug: "visits" },
    { name: "Operations", count: 2, slug: "operations" },
  ],

  pressReleases: [],
};
