// VDA Website Copy & Structure Constants
// Centralized copy for Vinay Desai Architects

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "25+", label: "Years of Experience" },
  { value: "450+", label: "Projects Delivered" },
  { value: "10L+", label: "Sq Ft Designed & Delivered" },
];

export interface Industry {
  name: string;
  iconName: string;
}

export const INDUSTRIES: Industry[] = [
  { name: "Corporate & Professional Services", iconName: "Briefcase" },
  { name: "Banking & Financial Institutions", iconName: "Building2" },
  { name: "MNCs & Global Capability Centers", iconName: "Globe2" },
  { name: "MSMEs & SMEs", iconName: "Store" },
  { name: "Government & Public Sector", iconName: "Building" },
  { name: "IT Services", iconName: "Laptop" },
  { name: "Manufacturing & Industrial Enterprises", iconName: "Factory" },
  { name: "Builders & Developers", iconName: "HardHat" },
  { name: "Pharma & Life Sciences", iconName: "Beaker" },
  { name: "Healthcare & Diagnostic Services", iconName: "HeartPulse" },
  { name: "Wellness & Fitness", iconName: "Activity" },
  { name: "Retail & Consumer Brands", iconName: "ShoppingBag" },
  { name: "Hospitality", iconName: "Utensils" },
];

export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Function-First Planning",
    description: "Efficient movement, circulation, and productivity-driven layouts designed for performance.",
  },
  {
    number: "02",
    title: "User-Centric & Brand-Aligned",
    description: "Spaces that authentically reflect how your people work, communicate, and engage with your brand.",
  },
  {
    number: "03",
    title: "Sustainable & Scalable",
    description: "Practical, long-term adaptability and green principles built into every workspace design decision.",
  },
];

export interface ProjectType {
  title: string;
  imageSearch: string;
  gridClass: string;
}

// 6 items for asymmetric mosaic layout
export const PROJECT_TYPES: ProjectType[] = [
  {
    title: "Corporate Offices",
    imageSearch: "modern corporate office interior",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "IT Workspaces",
    imageSearch: "technology workspace open plan",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Banking & Financial Institutions",
    imageSearch: "minimalist bank interior design",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Healthcare & Diagnostic Facilities",
    imageSearch: "healthcare modern clinic reception",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Retail & Showrooms",
    imageSearch: "minimalist retail showroom design",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Hospitality Spaces",
    imageSearch: "boutique hotel lounge interior",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export interface Service {
  number: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Workplace Strategy",
    description: "Aligning physical workspaces with organizational goals, brand culture, and growth requirements.",
  },
  {
    number: "02",
    title: "Space Planning",
    description: "Optimizing layout efficiency, department adjacencies, and circulation pathways to enhance productivity.",
  },
  {
    number: "03",
    title: "Interior Design",
    description: "Creating bespoke visual languages, material palettes, lighting schemes, and ergonomic furniture integrations.",
  },
  {
    number: "04",
    title: "Design Documentation",
    description: "Producing precise and highly detailed architectural blueprints, custom millwork, and construction details.",
  },
  {
    number: "05",
    title: "Design Coordination",
    description: "Aligning aesthetic intentions across all MEP, structural, HVAC, and low-voltage systems seamlessly.",
  },
  {
    number: "06",
    title: "Consultant Management",
    description: "Acting as the design custodian, orchestrating diverse technical consultants for synchronized execution.",
  },
  {
    number: "07",
    title: "Project Monitoring & Design Compliance",
    description: "Ensuring site execution adheres flawlessly to approved designs, specifications, and quality benchmarks.",
  },
];

export const WHY_CHOOSE_VDA_A = [
  "25+ Years of Industry Experience",
  "10L+ Sq Ft Designed & Delivered",
  "Strong Understanding of Workplace Design",
  "Focus on Function, Productivity & User Experience",
];

export const WHY_CHOOSE_VDA_B = [
  "450+ Successfully Delivered Projects",
  "Process-Driven Methodology",
  "Experience Across Diverse Sectors",
  "Long-Term Client Relationships",
];

export const ECOSYSTEM = [
  "Project Management Consultants",
  "MEP Consultants",
  "Electrical Consultants",
  "Structural Consultants",
  "Furniture & Workplace Solution Providers",
  "Interior Execution Partners",
  "HVAC Consultants",
  "Fire & Life Safety Consultants",
  "Technology & Automation Integrators",
  "Specialized Commercial Fit-Out Partners",
];

export const VISION_MISSION = {
  vision: {
    title: "Our Vision",
    text: "Designing spaces for belonging, productivity, and enhanced experiences while creating lasting value through integrity and innovation.",
  },
  mission: {
    title: "Our Mission",
    text: "Building a 100+ professional team, driven by strong values, to create 10,000+ jobs and empower communities through exceptional design.",
  },
};

export const CONTACT_DETAILS = {
  address: "CBD Belapur, Navi Mumbai, Maharashtra, India",
  email: "info@vdaarchitects.com",
  phone: "+91 83694 85704",
  whatsapp: "https://wa.me/918369485704",
  instagram: "https://www.instagram.com/wearevda/",
  linkedin: "https://www.linkedin.com/company/vdadesigns/",
  website: "www.vdaarchitects.com",
  hours: "Mon - Sat: 9:30 AM - 6:30 PM",
};

export interface TeamMember {
  name: string;
  role: string;
  imageSearch: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Ar. Vinay Desai",
    role: "Founder & Principal Architect",
    imageSearch: "/images/team/Principal Architect.png",
  },
  {
    name: "Ar. Mitalee Chavan",
    role: "Senior Design Executive",
    imageSearch: "/images/team/Design Executive(1).png",
  },
  {
    name: "Ar. Sayali Kurhekar",
    role: "Design Executive",
    imageSearch: "/images/team/Design Executive.png",
  },
  {
    name: "Id. Bhagyashree",
    role: "Design Executive",
    imageSearch: "/images/team/Design Executive(2).png",
  },
  {
    name: "Er. Sarvesh Pashte",
    role: "Site Coordinator",
    imageSearch: "/images/team/Site Coordinator.png",
  },
  {
    name: "Poonam Vikhare",
    role: "HR & Admin",
    imageSearch: "/images/team/HR & Admin.png",
  },
  {
    name: "Jayvant",
    role: "Office Assistant",
    imageSearch: "/images/team/Office Assistant.png",
  },
];

