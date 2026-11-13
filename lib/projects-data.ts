export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
 {
  id: "1",
  title: "HireCraft",
  slug: "hirecraft",
  description: "Full-stack GenAI job preparation platform for ATS optimization, skill gap detection, and AI interview practice",
  detailedDescription:
    "A full-stack GenAI job preparation web application built with React, Node.js, JWT, Gemini AI, Puppeteer, and SCSS. HireCraft analyzes resumes against job descriptions, detects skill gaps, optimizes ATS match scores, generates tailored PDFs via Puppeteer, and provides interactive AI mock interview practice.",
  image: "/HireCraft.png",
  tags: ["GenAI", "Full-Stack", "React", "Node.js", "Gemini AI"],
  status: "active",
  techStack: ["React", "Node.js", "Express", "Gemini AI", "JWT", "Puppeteer", "SCSS"],
  features: [
    "AI-powered resume analysis and ATS match scoring",
    "Automated skill gap detection against target job descriptions",
    "Interactive AI mock interview practice with real-time feedback",
    "Automated PDF resume generation and export using Puppeteer",
    "Secure JWT-based authentication and user session management",
    "Custom responsive dark-mode UI built with modular SCSS",
  ],
  learningOutcomes: [
    "End-to-end GenAI integration using Gemini AI for structured evaluations",
    "Headless browser automation and PDF rendering with Puppeteer",
    "Secure stateless authentication using JWT and Node.js",
    "Prompt engineering for reliable ATS scoring and interview simulations",
    "Scalable frontend state and custom SCSS theme architecture",
  ],
  links: {
    github: "https://github.com/haseebjaved4212",
  },
  author: "Haseeb Javed",
  authorAvatar: "/avatar.png",
},
  {
  id: "2",
  title: "RAAHI",
  slug: "raahi",
  description: "Safety-aware navigation web app built for Karachi that optimizes walking routes for safety rather than just speed",
  detailedDescription:
    "RAAHI is a safety-aware navigation web app built for Karachi, Pakistan. It compares walking route options and recommends the route with the stronger relative safety profile for the current time of day, rather than simply the fastest path. Maps optimize for time. RAAHI optimizes for safety.",
  image: "/Raahi.png",
  tags: ["Geospatial", "Safety AI", "React", "Karachi", "Navigation"],
  status: "active",
  techStack: ["React.js", "TanStack", "TomTom Routing API", "MapTiler API", "Tailwind CSS"],
  features: [
    "Time-of-day aware relative safety route scoring for Karachi streets",
    "Side-by-side comparison of Recommended Safe Route vs. Fastest Route",
    "Evaluation of street lighting, crowd activity, and community incident reports",
    "Interactive dark-mode vector map powered by MapTiler and TomTom Routing APIs",
    "Dynamic condition assessments tailored to walking and commuting hours",
    "Responsive mobile-first navigation interface",
  ],
  learningOutcomes: [
    "Geospatial routing and custom weight scoring with TomTom and MapTiler APIs",
    "Resilient multi-provider map architecture and real-time route rendering",
    "Translating real-world urban safety factors into a quantitative scoring engine",
    "State management and asynchronous data fetching with React and TanStack",
  ],
  links: {
    visit: "https://raahi-pied.vercel.app/",
    github: "https://github.com/haseebjaved4212",
  },
  author: "Haseeb Javed",
  authorAvatar: "/avatar.png",
},
  {
    id: "3",
    title: "Resume Builder",
    slug: "resume-builder",
    description: "AI-powered resume creation platform with professional templates",
    detailedDescription:
      "A production-ready Resume Builder SaaS application built with the MERN Stack. This platform allows users to create, customize, and export professional resumes with AI-powered suggestions and multiple template options.",
    image: "/resume.jpg",
    tags: ["AI", "SaaS", "MERN", "Productivity"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "PDF Generation"],
    features: [
      "Multiple professional resume templates",
      "AI-powered content suggestions",
      "Real-time preview and editing",
      "PDF export functionality",
      "Resume tracking and versioning",
      "Mobile-optimized responsive design",
    ],
    learningOutcomes: [
      "End-to-end MERN stack development workflow",
      "PDF generation and export functionality",
      "Complex form handling and validation",
      "Responsive UI design with Tailwind CSS",
      "Database modeling for user data",
      "File handling and storage strategies",
    ],
    links: {
      visit: "https://resumexpert-frontend.onrender.com",
      github: "https://github.com/HexagonDigitalServices/BUILDRESUMEWEB",
      howIBuilt: "https://youtu.be/gWHgPP5ay7Q?si=FhtnDh4O7jm9rsEY",
    },
    author: "Resume Builder",
    authorAvatar: "/avatar.png",
  },
  {
    id: "4",
    title: "Task Manager",
    slug: "task-manager",
    description: "Productivity application for task management with team collaboration",
    detailedDescription:
      "A fully functional Task Manager application built with the MERN Stack. This productivity tool helps individuals and teams manage tasks, set priorities, track progress, and collaborate effectively with real-time updates.",
    image: "/task.jpg",
    tags: ["Productivity", "MERN", "Full-Stack", "Collaboration"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    features: [
      "Task creation with priority levels and deadlines",
      "Drag-and-drop task organization",
      "Team collaboration and assignment",
      "Progress tracking and analytics",
      "Real-time updates with WebSockets",
      "Calendar integration and reminders",
    ],
    learningOutcomes: [
      "Real-time application development with Socket.io",
      "CRUD operations implementation",
      "User authentication and authorization",
      "Database design for task management",
      "Frontend-backend integration",
      "Deployment and hosting strategies",
    ],
    links: {
      visit: "https://taskflow-frontend-6swl.onrender.com",
      github: "https://github.com/HexagonDigitalServices/FlowTask",
      howIBuilt: "https://youtu.be/VAKDr1lsix0?si=FZvPZSo2qIOTjiJD",
    },
    author: "Task Manager",
    authorAvatar: "/avatar.png",
  },
  {
    id: "5",
    title: "Food Delivery App",
    slug: "food-delivery-app",
    description: "Full-stack food ordering platform with restaurant management",
    detailedDescription:
      "A complete Food Delivery Web Application built with the MERN Stack. This platform connects restaurants with customers, featuring menu management, order processing, payment integration, and real-time order tracking.",
    image: "/food.jpg",
    tags: ["E-commerce", "MERN", "Full-Stack", "Payments"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe", "WhatsApp API"],
    features: [
      "Restaurant and menu management",
      "Shopping cart and checkout system",
      "Stripe payment integration",
      "Real-time order tracking",
      "WhatsApp order notifications",
      "Admin dashboard for order management",
    ],
    learningOutcomes: [
      "Payment gateway integration (Stripe)",
      "Third-party API integration (WhatsApp)",
      "E-commerce platform development",
      "Real-time data synchronization",
      "Geolocation and mapping services",
      "Multi-vendor platform architecture",
    ],
    links: {
      visit: "https://frenzyfood-frontend.onrender.com",
      github: "https://github.com/HexagonDigitalServices/Foodie-frenzy",
      howIBuilt: "https://youtu.be/6CL4f8fPk9w?si=eo8gxXCjMmd1xRUz",
    },
    author: "Food Delivery App",
    authorAvatar: "/avatar.png",
  },
  {
    id: "6",
    title: "Movie Ticket Booking",
    slug: "movie-ticket-booking",
    description: "Complete movie booking system with seat selection and payments",
    detailedDescription:
      "A professional Movie Ticket Booking Website built with the MERN Stack, similar to BookMyShow. This full-stack application features movie listings, seat selection, booking management, and payment processing with a modern user interface.",
    image: "/movie.jpg",
    tags: ["Booking", "MERN", "Full-Stack", "Entertainment"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay", "JWT"],
    features: [
      "Movie listings with showtimes",
      "Interactive seat selection layout",
      "Secure booking and payment system",
      "User authentication and booking history",
      "Admin panel for theater management",
      "Responsive design for all devices",
    ],
    learningOutcomes: [
      "Complex booking system logic",
      "Payment integration (Razorpay/Stripe)",
      "JWT authentication implementation",
      "Role-based access control",
      "Database design for booking systems",
      "Frontend animations and UX design",
    ],
    links: {
      visit: "https://moviebooking-frontend-rrwx.onrender.com",
      github: "https://github.com/HexagonDigitalServices/BOOKMOVIE",
      howIBuilt: "https://youtu.be/KQ7srsb8cfc?si=3m4Uk4mvYGF25Ykf",
    },
    author: "Movie Ticket Booking",
    authorAvatar: "/avatar.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}