// Define types for job data
interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
  requirements: string[];
}

// Define the structure of the job openings data
interface JobOpeningsDataType {
  overview: string;
  recruitmentProcess: string[];
  jobs: JobOpening[];
}

export const jobOpeningsData: JobOpeningsDataType = {
  overview:
    "At Naval Dockyard, we offer rewarding careers in the maritime industry. Join our team of skilled professionals working on challenging projects for naval and commercial clients. We value innovation, expertise, and commitment to excellence.",

  recruitmentProcess: [
    "Application review by our HR team",
    "Initial phone or video screening interview",
    "Technical assessment or skills test (for technical positions)",
    "In-person interviews with the hiring manager and team",
    "Reference and background checks",
    "Job offer and onboarding",
  ],

  // Empty jobs array - all previous job data is commented out below
  jobs: [],
  /* Original job data preserved for future use
  jobs: [
    {
      id: "eng-001",
      title: "Senior Marine Engineer",
      department: "Engineering",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "2 weeks ago",
      description:
        "We are seeking an experienced Senior Marine Engineer to lead complex repair and maintenance projects for naval and commercial vessels. The ideal candidate will have extensive experience with marine propulsion systems and a strong background in project management.",
      requirements: [
        "Bachelor's degree in Marine Engineering or related field",
        "10+ years of experience in marine engineering",
        "Experience with naval vessel systems",
        "Strong project management skills",
        "Professional Engineer (PE) certification preferred",
        "Knowledge of classification society requirements",
      ],
    },
    {
      id: "fab-002",
      title: "Structural Welder",
      department: "Fabrication",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "1 week ago",
      description:
        "Experienced structural welder needed for ship repair and fabrication work. Must be proficient in various welding techniques and able to work in challenging environments. Certification in marine welding required.",
      requirements: [
        "5+ years of welding experience in shipbuilding or repair",
        "Certified in multiple welding processes (SMAW, GMAW, FCAW)",
        "Ability to read and interpret technical drawings",
        "Experience with steel and aluminum welding",
        "Knowledge of marine welding standards",
        "Physical ability to work in confined spaces",
      ],
    },
    {
      id: "ops-003",
      title: "Dry Dock Supervisor",
      department: "Operations",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "3 days ago",
      description:
        "Supervise dry dock operations including vessel docking and undocking procedures, ensuring safety protocols and schedules are maintained. Coordinate with project managers and technical teams to ensure efficient workflow.",
      requirements: [
        "7+ years of experience in shipyard operations",
        "Previous supervisory experience in dry dock operations",
        "Strong knowledge of safety procedures and regulations",
        "Excellent communication and leadership skills",
        "Ability to work under pressure and solve problems quickly",
        "Experience with scheduling and resource allocation",
      ],
    },
    {
      id: "tech-004",
      title: "Marine Electrician",
      department: "Technical Services",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "5 days ago",
      description:
        "Skilled marine electrician needed to install, maintain, and repair electrical systems on various vessel types. Work includes power distribution systems, lighting, navigation equipment, and control systems.",
      requirements: [
        "Journeyman Electrician certification",
        "5+ years of experience in marine electrical systems",
        "Knowledge of marine electrical standards and regulations",
        "Experience with troubleshooting complex electrical issues",
        "Ability to read and interpret electrical schematics",
        "Familiarity with automation and control systems",
      ],
    },
    {
      id: "eng-005",
      title: "Naval Architect",
      department: "Engineering",
      location: "Design Office",
      type: "Full-time",
      postedDate: "1 week ago",
      description:
        "Naval Architect needed to provide design and engineering support for vessel modifications, repairs, and structural assessments. Responsibilities include creating technical drawings, performing calculations, and ensuring compliance with regulations.",
      requirements: [
        "Bachelor's degree in Ship Design & Construction or Marine Engineering",
        "5+ years of experience in Ship Design & Construction",
        "Proficiency in CAD software and Ship Design & Construction software",
        "Knowledge of classification society rules and regulations",
        "Experience with structural analysis and stability calculations",
        "Strong problem-solving and analytical skills",
      ],
    },
    {
      id: "admin-006",
      title: "Procurement Specialist",
      department: "Administration",
      location: "Corporate Office",
      type: "Full-time",
      postedDate: "2 weeks ago",
      description:
        "Responsible for sourcing and purchasing materials, equipment, and services for shipyard operations. Develop relationships with suppliers, negotiate contracts, and ensure timely delivery of critical components.",
      requirements: [
        "Bachelor's degree in Supply Chain Management or related field",
        "3+ years of experience in procurement, preferably in maritime or industrial settings",
        "Knowledge of marine equipment and materials",
        "Experience with ERP systems and procurement software",
        "Strong negotiation and communication skills",
        "Understanding of international shipping and logistics",
      ],
    },
    {
      id: "tech-007",
      title: "NDT Technician",
      department: "Technical Services",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "3 days ago",
      description:
        "Non-Destructive Testing Technician needed to perform various NDT methods on vessel components and structures. Responsible for documenting and reporting test results and ensuring compliance with quality standards.",
      requirements: [
        "ASNT Level II certification in multiple NDT methods",
        "3+ years of experience in industrial NDT applications",
        "Experience with ultrasonic, magnetic particle, and dye penetrant testing",
        "Knowledge of welding and metallurgy principles",
        "Attention to detail and strong documentation skills",
        "Ability to work in various environmental conditions",
      ],
    },
    {
      id: "hr-008",
      title: "Safety Officer",
      department: "Human Resources",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "1 week ago",
      description:
        "Develop and implement safety programs to ensure compliance with regulations and promote a safe working environment. Conduct safety inspections, investigate incidents, and provide safety training to employees.",
      requirements: [
        "Bachelor's degree in Occupational Safety or related field",
        "5+ years of experience in industrial safety, preferably in shipyards",
        "OSHA certification and knowledge of maritime safety regulations",
        "Experience developing and implementing safety programs",
        "Strong communication and training skills",
        "Ability to influence and promote safety culture",
      ],
    },
    {
      id: "eng-009",
      title: "Mechanical Engineer",
      department: "Engineering",
      location: "Design Office",
      type: "Full-time",
      postedDate: "4 days ago",
      description:
        "Mechanical Engineer needed to design, analyze, and troubleshoot mechanical systems for vessel repairs and modifications. Focus on propulsion systems, hydraulics, and auxiliary machinery.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "3+ years of experience in marine mechanical systems",
        "Proficiency in CAD software and FEA analysis",
        "Knowledge of marine propulsion and auxiliary systems",
        "Experience with technical specification development",
        "Strong problem-solving and analytical skills",
      ],
    },
    {
      id: "ops-010",
      title: "Project Coordinator",
      department: "Operations",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "2 weeks ago",
      description:
        "Coordinate activities for ship repair and maintenance projects, including scheduling, resource allocation, and progress tracking. Serve as a liaison between technical teams, management, and clients.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "2+ years of experience in project coordination, preferably in maritime industry",
        "Strong organizational and time management skills",
        "Proficiency in project management software",
        "Excellent communication and interpersonal skills",
        "Ability to work in a fast-paced environment",
      ],
    },
    {
      id: "tech-011",
      title: "Pipefitter",
      department: "Technical Services",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "1 week ago",
      description:
        "Skilled pipefitter needed to install, repair, and maintain piping systems on various vessel types. Work includes fuel, ballast, cooling, and hydraulic systems.",
      requirements: [
        "Journeyman Pipefitter certification",
        "5+ years of experience in industrial or marine pipefitting",
        "Ability to read and interpret piping diagrams and isometrics",
        "Experience with various piping materials and joining methods",
        "Knowledge of marine piping standards and regulations",
        "Physical ability to work in confined spaces",
      ],
    },
    {
      id: "admin-012",
      title: "Quality Assurance Inspector",
      department: "Administration",
      location: "Main Shipyard",
      type: "Full-time",
      postedDate: "3 days ago",
      description:
        "Ensure all work meets quality standards and specifications through inspections and documentation review. Verify compliance with client requirements, classification society rules, and company standards.",
      requirements: [
        "5+ years of experience in quality control, preferably in maritime industry",
        "Knowledge of ISO 9001 and marine industry standards",
        "Experience with inspection techniques and quality documentation",
        "Attention to detail and strong analytical skills",
        "Excellent written and verbal communication",
        "Ability to read and interpret technical drawings and specifications",
      ],
    },
  ],
  */
};



// export const jobOpeningsData = {
//   overview:
//     "At Naval Dockyard, we offer rewarding careers in the maritime industry. Join our team of skilled professionals working on challenging projects for naval and commercial clients. We value innovation, expertise, and commitment to excellence.",

//   recruitmentProcess: [
//     "Application review by our HR team",
//     "Initial phone or video screening interview",
//     "Technical assessment or skills test (for technical positions)",
//     "In-person interviews with the hiring manager and team",
//     "Reference and background checks",
//     "Job offer and onboarding",
//   ],

//   jobs: [
//     {
//       id: "eng-001",
//       title: "Senior Marine Engineer",
//       department: "Engineering",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "2 weeks ago",
//       description:
//         "We are seeking an experienced Senior Marine Engineer to lead complex repair and maintenance projects for naval and commercial vessels. The ideal candidate will have extensive experience with marine propulsion systems and a strong background in project management.",
//       requirements: [
//         "Bachelor's degree in Marine Engineering or related field",
//         "10+ years of experience in marine engineering",
//         "Experience with naval vessel systems",
//         "Strong project management skills",
//         "Professional Engineer (PE) certification preferred",
//         "Knowledge of classification society requirements",
//       ],
//     },
//     {
//       id: "fab-002",
//       title: "Structural Welder",
//       department: "Fabrication",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "1 week ago",
//       description:
//         "Experienced structural welder needed for ship repair and fabrication work. Must be proficient in various welding techniques and able to work in challenging environments. Certification in marine welding required.",
//       requirements: [
//         "5+ years of welding experience in shipbuilding or repair",
//         "Certified in multiple welding processes (SMAW, GMAW, FCAW)",
//         "Ability to read and interpret technical drawings",
//         "Experience with steel and aluminum welding",
//         "Knowledge of marine welding standards",
//         "Physical ability to work in confined spaces",
//       ],
//     },
//     {
//       id: "ops-003",
//       title: "Dry Dock Supervisor",
//       department: "Operations",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "3 days ago",
//       description:
//         "Supervise dry dock operations including vessel docking and undocking procedures, ensuring safety protocols and schedules are maintained. Coordinate with project managers and technical teams to ensure efficient workflow.",
//       requirements: [
//         "7+ years of experience in shipyard operations",
//         "Previous supervisory experience in dry dock operations",
//         "Strong knowledge of safety procedures and regulations",
//         "Excellent communication and leadership skills",
//         "Ability to work under pressure and solve problems quickly",
//         "Experience with scheduling and resource allocation",
//       ],
//     },
//     {
//       id: "tech-004",
//       title: "Marine Electrician",
//       department: "Technical Services",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "5 days ago",
//       description:
//         "Skilled marine electrician needed to install, maintain, and repair electrical systems on various vessel types. Work includes power distribution systems, lighting, navigation equipment, and control systems.",
//       requirements: [
//         "Journeyman Electrician certification",
//         "5+ years of experience in marine electrical systems",
//         "Knowledge of marine electrical standards and regulations",
//         "Experience with troubleshooting complex electrical issues",
//         "Ability to read and interpret electrical schematics",
//         "Familiarity with automation and control systems",
//       ],
//     },
//     {
//       id: "eng-005",
//       title: "Naval Architect",
//       department: "Engineering",
//       location: "Design Office",
//       type: "Full-time",
//       postedDate: "1 week ago",
//       description:
//         "Naval Architect needed to provide design and engineering support for vessel modifications, repairs, and structural assessments. Responsibilities include creating technical drawings, performing calculations, and ensuring compliance with regulations.",
//       requirements: [
//         "Bachelor's degree in Ship Design & Construction or Marine Engineering",
//         "5+ years of experience in Ship Design & Construction",
//         "Proficiency in CAD software and Ship Design & Construction software",
//         "Knowledge of classification society rules and regulations",
//         "Experience with structural analysis and stability calculations",
//         "Strong problem-solving and analytical skills",
//       ],
//     },
//     {
//       id: "admin-006",
//       title: "Procurement Specialist",
//       department: "Administration",
//       location: "Corporate Office",
//       type: "Full-time",
//       postedDate: "2 weeks ago",
//       description:
//         "Responsible for sourcing and purchasing materials, equipment, and services for shipyard operations. Develop relationships with suppliers, negotiate contracts, and ensure timely delivery of critical components.",
//       requirements: [
//         "Bachelor's degree in Supply Chain Management or related field",
//         "3+ years of experience in procurement, preferably in maritime or industrial settings",
//         "Knowledge of marine equipment and materials",
//         "Experience with ERP systems and procurement software",
//         "Strong negotiation and communication skills",
//         "Understanding of international shipping and logistics",
//       ],
//     },
//     {
//       id: "tech-007",
//       title: "NDT Technician",
//       department: "Technical Services",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "3 days ago",
//       description:
//         "Non-Destructive Testing Technician needed to perform various NDT methods on vessel components and structures. Responsible for documenting and reporting test results and ensuring compliance with quality standards.",
//       requirements: [
//         "ASNT Level II certification in multiple NDT methods",
//         "3+ years of experience in industrial NDT applications",
//         "Experience with ultrasonic, magnetic particle, and dye penetrant testing",
//         "Knowledge of welding and metallurgy principles",
//         "Attention to detail and strong documentation skills",
//         "Ability to work in various environmental conditions",
//       ],
//     },
//     {
//       id: "hr-008",
//       title: "Safety Officer",
//       department: "Human Resources",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "1 week ago",
//       description:
//         "Develop and implement safety programs to ensure compliance with regulations and promote a safe working environment. Conduct safety inspections, investigate incidents, and provide safety training to employees.",
//       requirements: [
//         "Bachelor's degree in Occupational Safety or related field",
//         "5+ years of experience in industrial safety, preferably in shipyards",
//         "OSHA certification and knowledge of maritime safety regulations",
//         "Experience developing and implementing safety programs",
//         "Strong communication and training skills",
//         "Ability to influence and promote safety culture",
//       ],
//     },
//     {
//       id: "eng-009",
//       title: "Mechanical Engineer",
//       department: "Engineering",
//       location: "Design Office",
//       type: "Full-time",
//       postedDate: "4 days ago",
//       description:
//         "Mechanical Engineer needed to design, analyze, and troubleshoot mechanical systems for vessel repairs and modifications. Focus on propulsion systems, hydraulics, and auxiliary machinery.",
//       requirements: [
//         "Bachelor's degree in Mechanical Engineering",
//         "3+ years of experience in marine mechanical systems",
//         "Proficiency in CAD software and FEA analysis",
//         "Knowledge of marine propulsion and auxiliary systems",
//         "Experience with technical specification development",
//         "Strong problem-solving and analytical skills",
//       ],
//     },
//     {
//       id: "ops-010",
//       title: "Project Coordinator",
//       department: "Operations",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "2 weeks ago",
//       description:
//         "Coordinate activities for ship repair and maintenance projects, including scheduling, resource allocation, and progress tracking. Serve as a liaison between technical teams, management, and clients.",
//       requirements: [
//         "Bachelor's degree in Business, Engineering, or related field",
//         "2+ years of experience in project coordination, preferably in maritime industry",
//         "Strong organizational and time management skills",
//         "Proficiency in project management software",
//         "Excellent communication and interpersonal skills",
//         "Ability to work in a fast-paced environment",
//       ],
//     },
//     {
//       id: "tech-011",
//       title: "Pipefitter",
//       department: "Technical Services",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "1 week ago",
//       description:
//         "Skilled pipefitter needed to install, repair, and maintain piping systems on various vessel types. Work includes fuel, ballast, cooling, and hydraulic systems.",
//       requirements: [
//         "Journeyman Pipefitter certification",
//         "5+ years of experience in industrial or marine pipefitting",
//         "Ability to read and interpret piping diagrams and isometrics",
//         "Experience with various piping materials and joining methods",
//         "Knowledge of marine piping standards and regulations",
//         "Physical ability to work in confined spaces",
//       ],
//     },
//     {
//       id: "admin-012",
//       title: "Quality Assurance Inspector",
//       department: "Administration",
//       location: "Main Shipyard",
//       type: "Full-time",
//       postedDate: "3 days ago",
//       description:
//         "Ensure all work meets quality standards and specifications through inspections and documentation review. Verify compliance with client requirements, classification society rules, and company standards.",
//       requirements: [
//         "5+ years of experience in quality control, preferably in maritime industry",
//         "Knowledge of ISO 9001 and marine industry standards",
//         "Experience with inspection techniques and quality documentation",
//         "Attention to detail and strong analytical skills",
//         "Excellent written and verbal communication",
//         "Ability to read and interpret technical drawings and specifications",
//       ],
//     },
//   ],
// }
