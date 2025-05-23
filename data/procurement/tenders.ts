// Define types for tender data
interface TenderDocument {
  name: string;
  size: string;
}

interface EvaluationCriterion {
  name: string;
  weight: number;
  description: string;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface Tender {
  id: string;
  title: string;
  description: string;
  category: string;
  referenceNumber: string;
  publishDate: string;
  closingDate: string;
  evaluationPeriod: string;
  awardDate: string;
  budget: string;
  status: "open" | "closing-soon" | "closed";
  requirements: string[];
  documents: TenderDocument[];
  requiredDocuments: string[];
  evaluationCriteria: EvaluationCriterion[];
  contact: ContactInfo;
}

// Define the structure of the tenders data
interface TendersDataType {
  overview: string;
  categories: string[];
  bidProcess: string[];
  tenders: Tender[];
}

export const tendersData: TendersDataType = {
  overview:
    "Naval Dockyard regularly issues tenders for various goods and services required for our shipyard operations. Registered vendors can view current opportunities and submit bids through our procurement portal.",

  categories: [
    "Marine Equipment",
    "Materials & Supplies",
    "Mechanical Components",
    "Electrical & Electronics",
    "Specialized Services",
    "Equipment Rental",
    "IT & Technology",
    "Facility Supplies",
  ],

  bidProcess: [
    "Review tender documents and requirements carefully",
    "Submit questions for clarification during the Q&A period",
    "Prepare and submit bid according to specified format and deadline",
    "Bids are evaluated based on technical compliance, price, and other criteria",
    "Shortlisted bidders may be invited for presentations or negotiations",
    "Contract is awarded to the successful bidder",
  ],

  // Empty tenders array - all previous tender data is commented out below
  tenders: [],
  /* Original tender data preserved for future use
  tenders: [
    {
      id: "T-2023-042",
      title: "Supply of Marine Diesel Engine Parts",
      description: "Supply of genuine spare parts for MAN B&W and Wärtsilä marine diesel engines for scheduled maintenance of various vessels.",
      category: "Marine Equipment",
      referenceNumber: "NDY/T/2023/042",
      publishDate: "June 10, 2023",
      closingDate: "July 5, 2023",
      evaluationPeriod: "2 weeks",
      awardDate: "July 20, 2023",
      budget: "NGN 60,000,000",
      status: "open",
      requirements: [
        "Minimum 5 years experience supplying marine engine parts",
        "Must be authorized distributor for MAN B&W and Wärtsilä",
        "Ability to meet delivery timelines",
      ],
      documents: [
        { name: "Technical Specifications.pdf", size: "2.4 MB" },
        { name: "Bid Submission Form.docx", size: "1.2 MB" },
      ],
      requiredDocuments: [
        "Company registration certificate",
        "Tax compliance certificate",
        "Technical qualifications",
        "Financial statements",
      ],
      evaluationCriteria: [
        { name: "Technical Compliance", weight: 40, description: "Meeting technical specifications" },
        { name: "Price Competitiveness", weight: 30, description: "Competitive pricing" },
        { name: "Delivery Timeline", weight: 20, description: "Ability to meet deadlines" },
        { name: "Past Performance", weight: 10, description: "Previous similar contracts" },
      ],
      contact: {
        name: "Procurement Officer",
        email: "procurement@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-041",
      title: "Dry Dock Gate Maintenance Services",
      description: "Specialized maintenance services for dry dock gates, including seal replacement, structural inspection, and hydraulic system servicing.",
      category: "Specialized Services",
      referenceNumber: "NDY/T/2023/041",
      publishDate: "June 5, 2023",
      closingDate: "June 25, 2023",
      evaluationPeriod: "3 weeks",
      awardDate: "July 10, 2023",
      budget: "NGN 2,000,000",
      status: "closing-soon",
      requirements: [
        "Minimum 3 years experience in dry dock maintenance",
        "Certified structural and hydraulic engineers",
        "Compliance with maritime safety standards",
      ],
      documents: [
        { name: "Scope of Work.pdf", size: "1.8 MB" },
        { name: "Bid Template.docx", size: "900 KB" },
      ],
      requiredDocuments: [
        "Business license",
        "Safety compliance certificates",
        "Proof of past similar projects",
      ],
      evaluationCriteria: [
        { name: "Technical Proposal", weight: 35, description: "Detail and feasibility of maintenance plan" },
        { name: "Experience", weight: 30, description: "Relevance and quality of past projects" },
        { name: "Pricing", weight: 25, description: "Cost-effectiveness" },
        { name: "Timeline", weight: 10, description: "Ability to complete work within the timeframe" },
      ],
      contact: {
        name: "Maintenance Coordinator",
        email: "maintenance@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-040",
      title: "Supply of Welding Consumables",
      description: "Supply of high-quality welding electrodes, wires, and fluxes for various applications including specialized marine-grade materials.",
      category: "Materials & Supplies",
      referenceNumber: "NDY/T/2023/040",
      publishDate: "June 1, 2023",
      closingDate: "June 22, 2023",
      evaluationPeriod: "2 weeks",
      awardDate: "July 6, 2023",
      budget: "NGN 20,000,000",
      status: "closing-soon",
      requirements: [
        "Authorized dealer of marine-grade welding materials",
        "Delivery capacity within 10 business days",
      ],
      documents: [
        { name: "Product List.pdf", size: "1.5 MB" },
        { name: "Pricing Template.xlsx", size: "300 KB" },
      ],
      requiredDocuments: [
        "Manufacturer's authorization",
        "Product datasheets",
        "Company profile",
      ],
      evaluationCriteria: [
        { name: "Product Quality", weight: 40, description: "Marine-grade compliance" },
        { name: "Price", weight: 30, description: "Best value offer" },
        { name: "Delivery Time", weight: 20, description: "Prompt fulfillment capacity" },
        { name: "References", weight: 10, description: "Past client feedback" },
      ],
      contact: {
        name: "Materials Officer",
        email: "materials@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-039",
      title: "Mobile Crane Rental Services",
      description: "Rental of mobile cranes with operators for shipyard operations, including various capacity requirements from 50 to 300 tons.",
      category: "Equipment Rental",
      referenceNumber: "NDY/T/2023/039",
      publishDate: "May 25, 2023",
      closingDate: "June 15, 2023",
      evaluationPeriod: "1 week",
      awardDate: "June 22, 2023",
      budget: "NGN 6,000,000",
      status: "closed",
      requirements: [
        "Certified crane operators",
        "Availability of cranes in required capacities",
        "Compliance with HSE regulations",
      ],
      documents: [
        { name: "Rental Requirements.pdf", size: "1.1 MB" },
        { name: "Operator Certifications.docx", size: "850 KB" },
      ],
      requiredDocuments: [
        "Insurance documents",
        "HSE compliance certificate",
        "Equipment list",
      ],
      evaluationCriteria: [
        { name: "Equipment Condition", weight: 35, description: "Modern and functional equipment" },
        { name: "Cost", weight: 30, description: "Rental pricing" },
        { name: "Availability", weight: 20, description: "Capacity to provide on demand" },
        { name: "Compliance", weight: 15, description: "HSE and regulatory compliance" },
      ],
      contact: {
        name: "Operations Manager",
        email: "ops@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-038",
      title: "Procurement of Electrical Switchboards",
      description: "Supply and installation of marine-grade electrical switchboards and distribution panels for new vessel construction.",
      category: "Electrical & Electronics",
      referenceNumber: "NDY/T/2023/038",
      publishDate: "May 20, 2023",
      closingDate: "June 10, 2023",
      evaluationPeriod: "2 weeks",
      awardDate: "June 24, 2023",
      budget: "NGN 3,000,000",
      status: "closed",
      requirements: [
        "Manufacturer certification for marine-grade electrical systems",
        "Compliance with ABS or DNV standards",
        "Installation supervision and testing support",
      ],
      documents: [
        { name: "Electrical Layout.pdf", size: "2.2 MB" },
        { name: "Bid Quotation Form.xlsx", size: "400 KB" },
      ],
      requiredDocuments: [
        "Certificate of compliance",
        "Installation methodology",
        "References from similar contracts",
      ],
      evaluationCriteria: [
        { name: "Compliance", weight: 40, description: "Meets all marine electrical standards" },
        { name: "Pricing", weight: 30, description: "Cost breakdown and competitiveness" },
        { name: "Installation Support", weight: 20, description: "Ability to offer onsite technical support" },
        { name: "Experience", weight: 10, description: "Past projects of similar scope" },
      ],
      contact: {
        name: "Electrical Systems Lead",
        email: "electrical@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-037",
      title: "IT Infrastructure Upgrade",
      description: "Upgrade of network switches, routers, firewalls, and server storage for naval dockyard's administrative and operations buildings.",
      category: "IT & Technology",
      referenceNumber: "NDY/T/2023/037",
      publishDate: "May 15, 2023",
      closingDate: "June 5, 2023",
      evaluationPeriod: "3 weeks",
      awardDate: "June 26, 2023",
      budget: "NGN 6,500,000",
      status: "closed",
      requirements: [
        "OEM partnership certification (Cisco, Fortinet, etc.)",
        "5+ years experience in IT infrastructure deployment",
        "Onsite deployment and 1-year support",
      ],
      documents: [
        { name: "Network Design Requirements.pdf", size: "2.5 MB" },
        { name: "Solution Proposal Template.docx", size: "950 KB" },
      ],
      requiredDocuments: [
        "Technical proposal",
        "OEM partner certificates",
        "Warranty details",
      ],
      evaluationCriteria: [
        { name: "Solution Design", weight: 35, description: "Scalability, security, performance" },
        { name: "Cost", weight: 30, description: "Hardware/software breakdown and total cost" },
        { name: "Experience", weight: 20, description: "Track record with government or marine institutions" },
        { name: "Support Plan", weight: 15, description: "After-sales and tech support offering" },
      ],
      contact: {
        name: "IT Procurement Officer",
        email: "itprocurement@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-036",
      title: "Supply of Workshop Tools and Machinery",
      description: "Procurement of industrial-grade cutting, drilling, grinding, and lathe machines for the mechanical workshop.",
      category: "Mechanical Components",
      referenceNumber: "NDY/T/2023/036",
      publishDate: "May 10, 2023",
      closingDate: "May 31, 2023",
      evaluationPeriod: "2 weeks",
      awardDate: "June 14, 2023",
      budget: "NGN 120,000,000",
      status: "closed",
      requirements: [
        "Authorized dealership for workshop machinery",
        "Warranty and post-sales service availability",
        "Compliance with safety and energy standards",
      ],
      documents: [
        { name: "Machine Specs.pdf", size: "2.0 MB" },
        { name: "Bid Form.docx", size: "1.0 MB" },
      ],
      requiredDocuments: [
        "Product catalogue",
        "Warranty certificates",
        "Company profile",
      ],
      evaluationCriteria: [
        { name: "Machine Quality", weight: 40, description: "Durability and technical features" },
        { name: "Cost", weight: 30, description: "Unit and bulk pricing" },
        { name: "Delivery Time", weight: 20, description: "Lead time and logistics capability" },
        { name: "Support Services", weight: 10, description: "After-sales and spare part availability" },
      ],
      contact: {
        name: "Workshop Manager",
        email: "tools@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-035",
      title: "Cleaning & Facility Maintenance Supplies",
      description: "Annual supply of janitorial and sanitation products including eco-friendly detergents, cleaning tools, and equipment.",
      category: "Facility Supplies",
      referenceNumber: "NDY/T/2023/035",
      publishDate: "May 1, 2023",
      closingDate: "May 21, 2023",
      evaluationPeriod: "1 week",
      awardDate: "May 28, 2023",
      budget: "NGN 10,000,000",
      status: "closed",
      requirements: [
        "Proven supply of facility maintenance goods",
        "Delivery in quarterly batches",
        "MSDS for all chemicals",
      ],
      documents: [
        { name: "Supply List.pdf", size: "1.3 MB" },
        { name: "Delivery Schedule.xlsx", size: "220 KB" },
      ],
      requiredDocuments: [
        "Environmental compliance certification",
        "Supplier registration form",
        "Client references",
      ],
      evaluationCriteria: [
        { name: "Product Safety", weight: 35, description: "Eco-friendliness and MSDS compliance" },
        { name: "Price", weight: 35, description: "Total cost and unit cost efficiency" },
        { name: "Delivery Schedule", weight: 20, description: "Ability to deliver quarterly" },
        { name: "Past Performance", weight: 10, description: "Track record of reliability" },
      ],
      contact: {
        name: "Facility Admin",
        email: "facility@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-034",
      title: "Supply of Ship Paint and Coatings",
      description: "Provision of anti-fouling, corrosion-resistant paints, and coatings suitable for naval and marine vessels.",
      category: "Marine Equipment",
      referenceNumber: "NDY/T/2023/034",
      publishDate: "April 25, 2023",
      closingDate: "May 15, 2023",
      evaluationPeriod: "1 week",
      awardDate: "May 22, 2023",
      budget: "NGN 40,000,000",
      status: "closed",
      requirements: [
        "Marine-certified coatings supplier",
        "Test results of product durability",
        "Color variants and technical datasheets",
      ],
      documents: [
        { name: "Paint Specs.pdf", size: "1.9 MB" },
        { name: "Tender Form.docx", size: "850 KB" },
      ],
      requiredDocuments: [
        "Material Safety Data Sheets",
        "Marine certification",
        "Test samples (upon request)",
      ],
      evaluationCriteria: [
        { name: "Durability", weight: 40, description: "Salt and corrosion resistance" },
        { name: "Pricing", weight: 30, description: "Cost per litre and packaging options" },
        { name: "Lead Time", weight: 20, description: "Stock readiness and delivery plan" },
        { name: "Variety", weight: 10, description: "Color and texture options" },
      ],
      contact: {
        name: "Coatings Officer",
        email: "coatings@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
    {
      id: "T-2023-033",
      title: "Technical Training Services for Dockyard Staff",
      description: "Provision of hands-on training programs for engineers and technicians on modern ship repair techniques and safety compliance.",
      category: "Specialized Services",
      referenceNumber: "NDY/T/2023/033",
      publishDate: "April 20, 2023",
      closingDate: "May 10, 2023",
      evaluationPeriod: "2 weeks",
      awardDate: "May 24, 2023",
      budget: "NGN 7,000,000",
      status: "closed",
      requirements: [
        "Registered training provider with ISO certification",
        "Ability to provide both theoretical and practical sessions",
        "Marine industry training experience",
      ],
      documents: [
        { name: "Training Modules.pdf", size: "1.7 MB" },
        { name: "Proposal Form.docx", size: "780 KB" },
      ],
      requiredDocuments: [
        "Training accreditation",
        "Trainer profiles",
        "Course outline and schedule",
      ],
      evaluationCriteria: [
        { name: "Training Quality", weight: 45, description: "Relevance and effectiveness" },
        { name: "Cost", weight: 25, description: "Per participant pricing and inclusions" },
        { name: "Trainer Experience", weight: 20, description: "Industry relevance" },
        { name: "Course Flexibility", weight: 10, description: "Customization options" },
      ],
      contact: {
        name: "HR Training Coordinator",
        email: "training@navaldockyard.com",
        phone: "+234 812 345 6789",
      },
    },
  ],
  */
};

// export const tendersData = {
//   overview:
//     "Naval Dockyard regularly issues tenders for various goods and services required for our shipyard operations. Registered vendors can view current opportunities and submit bids through our procurement portal.",

//   categories: [
//     "Marine Equipment",
//     "Materials & Supplies",
//     "Mechanical Components",
//     "Electrical & Electronics",
//     "Specialized Services",
//     "Equipment Rental",
//     "IT & Technology",
//     "Facility Supplies",
//   ],

//   bidProcess: [
//     "Review tender documents and requirements carefully",
//     "Submit questions for clarification during the Q&A period",
//     "Prepare and submit bid according to specified format and deadline",
//     "Bids are evaluated based on technical compliance, price, and other criteria",
//     "Shortlisted bidders may be invited for presentations or negotiations",
//     "Contract is awarded to the successful bidder",
//   ],

//   tenders: [
//     {
//       id: "T-2023-042",
//       title: "Supply of Marine Diesel Engine Parts",
//       description: "Supply of genuine spare parts for MAN B&W and Wärtsilä marine diesel engines for scheduled maintenance of various vessels.",
//       category: "Marine Equipment",
//       referenceNumber: "NDY/T/2023/042",
//       publishDate: "June 10, 2023",
//       closingDate: "July 5, 2023",
//       evaluationPeriod: "2 weeks",
//       awardDate: "July 20, 2023",
//       budget: "NGN 60,000,000",
//       status: "open",
//       requirements: [
//         "Minimum 5 years experience supplying marine engine parts",
//         "Must be authorized distributor for MAN B&W and Wärtsilä",
//         "Ability to meet delivery timelines",
//       ],
//       documents: [
//         { name: "Technical Specifications.pdf", size: "2.4 MB" },
//         { name: "Bid Submission Form.docx", size: "1.2 MB" },
//       ],
//       requiredDocuments: [
//         "Company registration certificate",
//         "Tax compliance certificate",
//         "Technical qualifications",
//         "Financial statements",
//       ],
//       evaluationCriteria: [
//         { name: "Technical Compliance", weight: 40, description: "Meeting technical specifications" },
//         { name: "Price Competitiveness", weight: 30, description: "Competitive pricing" },
//         { name: "Delivery Timeline", weight: 20, description: "Ability to meet deadlines" },
//         { name: "Past Performance", weight: 10, description: "Previous similar contracts" },
//       ],
//       contact: {
//         name: "Procurement Officer",
//         email: "procurement@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-041",
//       title: "Dry Dock Gate Maintenance Services",
//       description: "Specialized maintenance services for dry dock gates, including seal replacement, structural inspection, and hydraulic system servicing.",
//       category: "Specialized Services",
//       referenceNumber: "NDY/T/2023/041",
//       publishDate: "June 5, 2023",
//       closingDate: "June 25, 2023",
//       evaluationPeriod: "3 weeks",
//       awardDate: "July 10, 2023",
//       budget: "NGN 2,000,000",
//       status: "closing-soon",
//       requirements: [
//         "Minimum 3 years experience in dry dock maintenance",
//         "Certified structural and hydraulic engineers",
//         "Compliance with maritime safety standards",
//       ],
//       documents: [
//         { name: "Scope of Work.pdf", size: "1.8 MB" },
//         { name: "Bid Template.docx", size: "900 KB" },
//       ],
//       requiredDocuments: [
//         "Business license",
//         "Safety compliance certificates",
//         "Proof of past similar projects",
//       ],
//       evaluationCriteria: [
//         { name: "Technical Proposal", weight: 35, description: "Detail and feasibility of maintenance plan" },
//         { name: "Experience", weight: 30, description: "Relevance and quality of past projects" },
//         { name: "Pricing", weight: 25, description: "Cost-effectiveness" },
//         { name: "Timeline", weight: 10, description: "Ability to complete work within the timeframe" },
//       ],
//       contact: {
//         name: "Maintenance Coordinator",
//         email: "maintenance@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-040",
//       title: "Supply of Welding Consumables",
//       description: "Supply of high-quality welding electrodes, wires, and fluxes for various applications including specialized marine-grade materials.",
//       category: "Materials & Supplies",
//       referenceNumber: "NDY/T/2023/040",
//       publishDate: "June 1, 2023",
//       closingDate: "June 22, 2023",
//       evaluationPeriod: "2 weeks",
//       awardDate: "July 6, 2023",
//       budget: "NGN 20,000,000",
//       status: "closing-soon",
//       requirements: [
//         "Authorized dealer of marine-grade welding materials",
//         "Delivery capacity within 10 business days",
//       ],
//       documents: [
//         { name: "Product List.pdf", size: "1.5 MB" },
//         { name: "Pricing Template.xlsx", size: "300 KB" },
//       ],
//       requiredDocuments: [
//         "Manufacturer's authorization",
//         "Product datasheets",
//         "Company profile",
//       ],
//       evaluationCriteria: [
//         { name: "Product Quality", weight: 40, description: "Marine-grade compliance" },
//         { name: "Price", weight: 30, description: "Best value offer" },
//         { name: "Delivery Time", weight: 20, description: "Prompt fulfillment capacity" },
//         { name: "References", weight: 10, description: "Past client feedback" },
//       ],
//       contact: {
//         name: "Materials Officer",
//         email: "materials@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-039",
//       title: "Mobile Crane Rental Services",
//       description: "Rental of mobile cranes with operators for shipyard operations, including various capacity requirements from 50 to 300 tons.",
//       category: "Equipment Rental",
//       referenceNumber: "NDY/T/2023/039",
//       publishDate: "May 25, 2023",
//       closingDate: "June 15, 2023",
//       evaluationPeriod: "1 week",
//       awardDate: "June 22, 2023",
//       budget: "NGN 6,000,000",
//       status: "closed",
//       requirements: [
//         "Certified crane operators",
//         "Availability of cranes in required capacities",
//         "Compliance with HSE regulations",
//       ],
//       documents: [
//         { name: "Rental Requirements.pdf", size: "1.1 MB" },
//         { name: "Operator Certifications.docx", size: "850 KB" },
//       ],
//       requiredDocuments: [
//         "Insurance documents",
//         "HSE compliance certificate",
//         "Equipment list",
//       ],
//       evaluationCriteria: [
//         { name: "Equipment Condition", weight: 35, description: "Modern and functional equipment" },
//         { name: "Cost", weight: 30, description: "Rental pricing" },
//         { name: "Availability", weight: 20, description: "Capacity to provide on demand" },
//         { name: "Compliance", weight: 15, description: "HSE and regulatory compliance" },
//       ],
//       contact: {
//         name: "Operations Manager",
//         email: "ops@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-038",
//       title: "Procurement of Electrical Switchboards",
//       description: "Supply and installation of marine-grade electrical switchboards and distribution panels for new vessel construction.",
//       category: "Electrical & Electronics",
//       referenceNumber: "NDY/T/2023/038",
//       publishDate: "May 20, 2023",
//       closingDate: "June 10, 2023",
//       evaluationPeriod: "2 weeks",
//       awardDate: "June 24, 2023",
//       budget: "NGN 3,000,000",
//       status: "closed",
//       requirements: [
//         "Manufacturer certification for marine-grade electrical systems",
//         "Compliance with ABS or DNV standards",
//         "Installation supervision and testing support",
//       ],
//       documents: [
//         { name: "Electrical Layout.pdf", size: "2.2 MB" },
//         { name: "Bid Quotation Form.xlsx", size: "400 KB" },
//       ],
//       requiredDocuments: [
//         "Certificate of compliance",
//         "Installation methodology",
//         "References from similar contracts",
//       ],
//       evaluationCriteria: [
//         { name: "Compliance", weight: 40, description: "Meets all marine electrical standards" },
//         { name: "Pricing", weight: 30, description: "Cost breakdown and competitiveness" },
//         { name: "Installation Support", weight: 20, description: "Ability to offer onsite technical support" },
//         { name: "Experience", weight: 10, description: "Past projects of similar scope" },
//       ],
//       contact: {
//         name: "Electrical Systems Lead",
//         email: "electrical@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-037",
//       title: "IT Infrastructure Upgrade",
//       description: "Upgrade of network switches, routers, firewalls, and server storage for naval dockyard’s administrative and operations buildings.",
//       category: "IT & Technology",
//       referenceNumber: "NDY/T/2023/037",
//       publishDate: "May 15, 2023",
//       closingDate: "June 5, 2023",
//       evaluationPeriod: "3 weeks",
//       awardDate: "June 26, 2023",
//       budget: "NGN 6,500,000",
//       status: "closed",
//       requirements: [
//         "OEM partnership certification (Cisco, Fortinet, etc.)",
//         "5+ years experience in IT infrastructure deployment",
//         "Onsite deployment and 1-year support",
//       ],
//       documents: [
//         { name: "Network Design Requirements.pdf", size: "2.5 MB" },
//         { name: "Solution Proposal Template.docx", size: "950 KB" },
//       ],
//       requiredDocuments: [
//         "Technical proposal",
//         "OEM partner certificates",
//         "Warranty details",
//       ],
//       evaluationCriteria: [
//         { name: "Solution Design", weight: 35, description: "Scalability, security, performance" },
//         { name: "Cost", weight: 30, description: "Hardware/software breakdown and total cost" },
//         { name: "Experience", weight: 20, description: "Track record with government or marine institutions" },
//         { name: "Support Plan", weight: 15, description: "After-sales and tech support offering" },
//       ],
//       contact: {
//         name: "IT Procurement Officer",
//         email: "itprocurement@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-036",
//       title: "Supply of Workshop Tools and Machinery",
//       description: "Procurement of industrial-grade cutting, drilling, grinding, and lathe machines for the mechanical workshop.",
//       category: "Mechanical Components",
//       referenceNumber: "NDY/T/2023/036",
//       publishDate: "May 10, 2023",
//       closingDate: "May 31, 2023",
//       evaluationPeriod: "2 weeks",
//       awardDate: "June 14, 2023",
//       budget: "NGN 120,000,000",
//       status: "closed",
//       requirements: [
//         "Authorized dealership for workshop machinery",
//         "Warranty and post-sales service availability",
//         "Compliance with safety and energy standards",
//       ],
//       documents: [
//         { name: "Machine Specs.pdf", size: "2.0 MB" },
//         { name: "Bid Form.docx", size: "1.0 MB" },
//       ],
//       requiredDocuments: [
//         "Product catalogue",
//         "Warranty certificates",
//         "Company profile",
//       ],
//       evaluationCriteria: [
//         { name: "Machine Quality", weight: 40, description: "Durability and technical features" },
//         { name: "Cost", weight: 30, description: "Unit and bulk pricing" },
//         { name: "Delivery Time", weight: 20, description: "Lead time and logistics capability" },
//         { name: "Support Services", weight: 10, description: "After-sales and spare part availability" },
//       ],
//       contact: {
//         name: "Workshop Manager",
//         email: "tools@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-035",
//       title: "Cleaning & Facility Maintenance Supplies",
//       description: "Annual supply of janitorial and sanitation products including eco-friendly detergents, cleaning tools, and equipment.",
//       category: "Facility Supplies",
//       referenceNumber: "NDY/T/2023/035",
//       publishDate: "May 1, 2023",
//       closingDate: "May 21, 2023",
//       evaluationPeriod: "1 week",
//       awardDate: "May 28, 2023",
//       budget: "NGN 10,000,000",
//       status: "closed",
//       requirements: [
//         "Proven supply of facility maintenance goods",
//         "Delivery in quarterly batches",
//         "MSDS for all chemicals",
//       ],
//       documents: [
//         { name: "Supply List.pdf", size: "1.3 MB" },
//         { name: "Delivery Schedule.xlsx", size: "220 KB" },
//       ],
//       requiredDocuments: [
//         "Environmental compliance certification",
//         "Supplier registration form",
//         "Client references",
//       ],
//       evaluationCriteria: [
//         { name: "Product Safety", weight: 35, description: "Eco-friendliness and MSDS compliance" },
//         { name: "Price", weight: 35, description: "Total cost and unit cost efficiency" },
//         { name: "Delivery Schedule", weight: 20, description: "Ability to deliver quarterly" },
//         { name: "Past Performance", weight: 10, description: "Track record of reliability" },
//       ],
//       contact: {
//         name: "Facility Admin",
//         email: "facility@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-034",
//       title: "Supply of Ship Paint and Coatings",
//       description: "Provision of anti-fouling, corrosion-resistant paints, and coatings suitable for naval and marine vessels.",
//       category: "Marine Equipment",
//       referenceNumber: "NDY/T/2023/034",
//       publishDate: "April 25, 2023",
//       closingDate: "May 15, 2023",
//       evaluationPeriod: "1 week",
//       awardDate: "May 22, 2023",
//       budget: "NGN 40,000,000",
//       status: "closed",
//       requirements: [
//         "Marine-certified coatings supplier",
//         "Test results of product durability",
//         "Color variants and technical datasheets",
//       ],
//       documents: [
//         { name: "Paint Specs.pdf", size: "1.9 MB" },
//         { name: "Tender Form.docx", size: "850 KB" },
//       ],
//       requiredDocuments: [
//         "Material Safety Data Sheets",
//         "Marine certification",
//         "Test samples (upon request)",
//       ],
//       evaluationCriteria: [
//         { name: "Durability", weight: 40, description: "Salt and corrosion resistance" },
//         { name: "Pricing", weight: 30, description: "Cost per litre and packaging options" },
//         { name: "Lead Time", weight: 20, description: "Stock readiness and delivery plan" },
//         { name: "Variety", weight: 10, description: "Color and texture options" },
//       ],
//       contact: {
//         name: "Coatings Officer",
//         email: "coatings@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//     {
//       id: "T-2023-033",
//       title: "Technical Training Services for Dockyard Staff",
//       description: "Provision of hands-on training programs for engineers and technicians on modern ship repair techniques and safety compliance.",
//       category: "Specialized Services",
//       referenceNumber: "NDY/T/2023/033",
//       publishDate: "April 20, 2023",
//       closingDate: "May 10, 2023",
//       evaluationPeriod: "2 weeks",
//       awardDate: "May 24, 2023",
//       budget: "NGN 7,000,000",
//       status: "closed",
//       requirements: [
//         "Registered training provider with ISO certification",
//         "Ability to provide both theoretical and practical sessions",
//         "Marine industry training experience",
//       ],
//       documents: [
//         { name: "Training Modules.pdf", size: "1.7 MB" },
//         { name: "Proposal Form.docx", size: "780 KB" },
//       ],
//       requiredDocuments: [
//         "Training accreditation",
//         "Trainer profiles",
//         "Course outline and schedule",
//       ],
//       evaluationCriteria: [
//         { name: "Training Quality", weight: 45, description: "Relevance and effectiveness" },
//         { name: "Cost", weight: 25, description: "Per participant pricing and inclusions" },
//         { name: "Trainer Experience", weight: 20, description: "Industry relevance" },
//         { name: "Course Flexibility", weight: 10, description: "Customization options" },
//       ],
//       contact: {
//         name: "HR Training Coordinator",
//         email: "training@navaldockyard.com",
//         phone: "+234 812 345 6789",
//       },
//     },
//   ],
// };
