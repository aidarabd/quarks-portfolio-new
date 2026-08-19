export const company = {
  name: "Quarks Code",
  short: "Quarks",
  tagline: "Custom software for businesses & government",
  description:
    "Quarks Code develops custom software solutions that automate processes, integrate systems, and build digital platforms for businesses and government agencies. Based in Bishkek, Kyrgyzstan.",
  email: "info@quarks.com",
  phones: ["+996 770 000 833", "+996 559 033 375"],
  address: ["Asanbai 40", "Bishkek, Kyrgyzstan"],
  hours: ["Mon – Fri: 9:00 – 18:00", "Weekend: by appointment"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "70–80%", label: "Avg. process time reduction" },
  { value: "8+", label: "Years of enterprise experience" },
  { value: "3+", label: "Government systems delivered" },
];

export const marqueeWords = [
  "Process Automation",
  "Government Systems",
  "Fintech",
  "System Integration",
  "Custom Web Platforms",
  "Data & Reporting",
];

export type Project = {
  slug: string;
  tag: string;
  title: string;
  year: string;
  cover: string;
  coverVideo?: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  results: { metric: string; label: string }[];
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "on-road-networks",
    tag: "Logistics · Fleet Management",
    title: "On Road Networks",
    year: "2023",
    cover: "/images/work/on-road-networks.webp",
    url: "https://onroadnetworks.com",
    overview:
      "All-in-one fleet management and FMCSA-compliant ELD platform for trucking companies — combining driver hours logging, GPS tracking, and a driver-first mobile app.",
    problem:
      "Trucking fleets managed compliance, tracking, and driver coordination across disconnected tools and paper logbooks with no real-time visibility and constant risk of FMCSA violations.",
    solution:
      "Built an integrated platform with a driver mobile app and fleet back office — automating hours-of-service logging, real-time GPS tracking, route optimization, and offline history restoration.",
    tech: ["React Native", "Node.js", "GPS / Telematics", "ELD / FMCSA Compliance"],
    results: [
      { metric: "FMCSA", label: "Compliant hours-of-service logging" },
      { metric: "Real-time", label: "GPS fleet tracking and telematics" },
      { metric: "Eliminated", label: "Manual paper logbooks" },
    ],
  },
  {
    slug: "diyar",
    tag: "Corporate · Web Platform",
    title: "Diyar",
    year: "2023",
    cover: "/images/work/diyar.jpg",
    url: "https://diyar.kg",
    overview:
      "Modern corporate web presence for Diyar, built for clarity, speed, and professional presentation.",
    problem: "No digital platform to represent the company and reach clients online.",
    solution: "Clean corporate website with structured content and fast performance.",
    tech: ["Next.js", "Tailwind CSS"],
    results: [{ metric: "Launched", label: "Modern digital presence" }],
  },
  {
    slug: "kit-forum",
    tag: "Events · Technology",
    title: "KIT Forum",
    year: "2022",
    cover: "/images/work/kit-forum.jpg",
    coverVideo: "/videos/kit-forum.mp4",
    url: "https://kit-forum.kg",
    overview:
      "Platform for Central Asia's largest digital technology and innovation forum — managing registrations, agenda, and attendee experience at scale.",
    problem:
      "Thousands of registrations, speakers, and sessions with no unified system created logistical chaos.",
    solution:
      "End-to-end event platform covering registrations, session scheduling, speaker profiles, and automated attendee communications.",
    tech: ["Next.js", "PostgreSQL", "Email Automation"],
    results: [{ metric: "Central Asia's", label: "Largest tech forum digitized" }],
  },
  {
    slug: "atria",
    tag: "Proptech · Blockchain",
    title: "Atria",
    year: "2022",
    cover: "/images/work/atria.jpg",
    url: "https://atria.kg",
    overview:
      "Blockchain platform enabling real estate tokenization and fractional property investment in Kyrgyzstan.",
    problem:
      "Real estate was illiquid and inaccessible — large capital requirements locked out most investors.",
    solution:
      "Tokenized property assets for fractional ownership and transparent digital trading on a blockchain ledger.",
    tech: ["Blockchain", "Next.js", "Smart Contracts"],
    results: [
      { metric: "First", label: "Real estate tokenization platform in Kyrgyzstan" },
    ],
  },
  {
    slug: "finipay",
    tag: "Fintech · Payments",
    title: "Finipay",
    year: "2021",
    cover: "/images/work/finipay.jpg",
    url: "https://finipay.kg",
    overview:
      "Corporate payment platform with digital wallets, analytics, and ML fraud prevention for Kyrgyz businesses.",
    problem:
      "SMEs juggling disconnected payment tools with no unified reporting or compliance.",
    solution:
      "Finipay CORE — payment acceptance, corporate wallets, ML fraud prevention, and real-time financial analytics.",
    tech: [".NET", "PostgreSQL", "Machine Learning", "Payment APIs"],
    results: [
      { metric: "Integrated", label: "With major banks and international payment systems" },
      { metric: "ML", label: "Fraud prevention built in" },
    ],
  },
  {
    slug: "booka",
    tag: "SaaS · Booking",
    title: "Booka",
    year: "2021",
    cover: "/images/work/booka.jpg",
    url: "https://booka.life",
    overview:
      "Multi-language SaaS letting service businesses automate client bookings 24/7 without phone calls.",
    problem:
      "Clients lost after hours, staff overwhelmed with manual scheduling and no-show management.",
    solution:
      "24/7 self-booking with WhatsApp/SMS reminders, staff calendars, client analytics, and mobile apps.",
    tech: ["React Native", "Node.js", "WhatsApp API", "SMS Gateway"],
    results: [
      { metric: "24/7", label: "Automated bookings, zero phone calls" },
      { metric: "Reduced", label: "No-shows via automated reminders" },
    ],
  },
];

export const services = [
  {
    index: "01",
    title: "Process Automation",
    subtitle: "Eliminate manual work at scale",
    description:
      "Manual processes are a hidden tax on your organization — they slow delivery, introduce errors, and consume your team's most valuable hours. We analyze, map, and replace repetitive workflows with automated systems that operate faster, more accurately, and around the clock.",
    outcomes: [
      "Automated document processing and routing",
      "Trigger-based workflow execution",
      "Error reduction and full audit trails",
      "Integration with existing tools and databases",
    ],
  },
  {
    index: "02",
    title: "Custom Web Applications",
    subtitle: "Enterprise platforms built to last",
    description:
      "Off-the-shelf software is built for the average use case — your organization isn't average. We design and develop web applications precisely fitted to your requirements, built for reliability, security, and the scale of users you need to serve.",
    outcomes: [
      "Citizen-facing and back-office portals",
      "Multi-role access and permissions management",
      "Responsive design for all devices",
      "Scalable, cloud-ready architecture",
    ],
  },
  {
    index: "03",
    title: "System Integration",
    subtitle: "Connect your digital infrastructure",
    description:
      "Most organizations run multiple systems that don't communicate. The result is manual data transfer, duplicate entry, and broken workflows. We build integrations that connect your existing tools — from legacy databases to modern APIs — into a cohesive ecosystem.",
    outcomes: [
      "REST and SOAP API integrations",
      "Legacy system connectivity",
      "Real-time data synchronization",
      "Biometric and hardware device integration",
    ],
  },
  {
    index: "04",
    title: "Government Digital Solutions",
    subtitle: "Purpose-built for the public sector",
    description:
      "Government software demands absolute reliability, security, audit trails, and the ability to serve thousands of citizens simultaneously. Our team has delivered multiple national-level platforms — we know what high-stakes public software requires from day one.",
    outcomes: [
      "Citizen registration and application portals",
      "Document issuance and verification systems",
      "Biometric equipment integration",
      "Secure, role-based access control",
    ],
  },
  {
    index: "05",
    title: "Internal Enterprise Tools",
    subtitle: "Tools that fit how you actually work",
    description:
      "Generic SaaS products force your workflows into shapes they were never designed for. We build internal tools — dashboards, approval systems, case management, reporting — that match exactly how your team operates, not the other way around.",
    outcomes: [
      "Custom dashboards and management panels",
      "Workflow and multi-stage approval systems",
      "Case and queue management",
      "Role-based reporting and exports",
    ],
  },
  {
    index: "06",
    title: "Data & Reporting",
    subtitle: "Visibility into what matters",
    description:
      "Operational data is only valuable if you can read it. We build reporting layers, live dashboards, and analytics systems that give leadership and operational teams real-time visibility into performance, bottlenecks, and trends.",
    outcomes: [
      "Real-time operational dashboards",
      "Automated report generation and scheduling",
      "Data export and visualization",
      "KPI tracking and alerting",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your current processes, define requirements, and identify the highest-impact opportunities for improvement.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design the system architecture and user experience before writing a single line of code.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative development with regular demos. You see progress at every stage and can give feedback early.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We handle deployment and provide ongoing support to ensure the system performs exactly as designed.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Aidar Abakir",
    role: "CEO & Technical Lead",
    bio: "Software Engineer with 8+ years of experience across government, finance, and healthcare systems. Aidar builds scalable software that serves thousands of users and automates complex business processes.",
    specialties: ["System Architecture", "Government Systems", "Process Automation", "Technical Leadership"],
    photo: "/images/team/aidar.jpg",
  },
  {
    name: "Elmira Botobekova",
    role: "Project Manager",
    bio: "Project Manager with extensive experience leading large-scale government digital transformation projects across Kyrgyzstan, including national address registration and statistical systems.",
    specialties: ["Project Management", "Scrum & Agile", "Government Projects", "Cross-functional Teams"],
  },
  {
    name: "Arzybek Bekmuratov",
    role: "Frontend Developer",
    bio: "Frontend Developer with 6 years of experience building complex web applications across logistics systems for US truck operations, financial automation platforms, and government digital systems.",
    specialties: ["React", "Frontend Architecture", "Performance", "Complex UI Systems"],
    photo: "/images/team/arzybek.jpg",
  },
  {
    name: "Nuria Kenzhetaeva",
    role: "Business Analyst",
    bio: "Business Analyst with extensive experience in large-scale government digital transformation projects, turning complex business requirements into clear, actionable specifications.",
    specialties: ["Business Analysis", "Requirements Engineering", "Accounting", "Legal Compliance"],
  },
  {
    name: "Gulnur Botobekova",
    role: "UI/UX Designer",
    bio: "UI/UX Designer with 6 years of experience spanning web and mobile applications, brand identity, and design systems — with a frontend background that keeps every design implementation-ready.",
    specialties: ["UI/UX Design", "Figma & Prototyping", "Design Systems", "Brand Identity"],
    photo: "/images/team/gulnur.jpg",
  },
];

export const values = [
  {
    title: "Engineering Excellence",
    description:
      "We hold our work to the same standards as the largest enterprise systems — because the organizations we serve depend on it.",
  },
  {
    title: "Business Understanding",
    description:
      "We don't just implement requirements. We understand the business context behind them — so the software we deliver solves the right problem.",
  },
  {
    title: "Transparent Delivery",
    description:
      "No surprises. You see what we're building at every step. We communicate proactively about progress, blockers, and decisions.",
  },
  {
    title: "Long-term Thinking",
    description:
      "We build for the future, not just the deadline. Our systems are designed to scale, adapt, and remain maintainable for years.",
  },
];

export const contactTopics = [
  "Process Automation",
  "Custom Web Application",
  "System Integration",
  "Government Digital Solutions",
  "Other / Not Sure",
];
