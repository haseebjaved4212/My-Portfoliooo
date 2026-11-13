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
 * Main projects array — Haseeb Javed's Featured Projects.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "HireCraft",
    slug: "hirecraft",
    description:
      "Full-stack GenAI job preparation platform for ATS optimization, skill gap detection, and AI interview practice",
    detailedDescription:
      "A full-stack GenAI job preparation web application built with React, Node.js, JWT, Gemini AI, Puppeteer, and SCSS. HireCraft analyzes resumes against target job descriptions, detects skill gaps, calculates ATS match scores, generates tailored PDFs via Puppeteer, and provides interactive AI mock interview practice.",
    image: "/HireCraft.png",
    tags: ["GenAI", "Full-Stack", "React", "Node.js", "Gemini AI"],
    status: "active",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Gemini AI",
      "JWT",
      "Puppeteer",
      "SCSS",
    ],
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
      github: "https://github.com/haseebjaved4212/HireCraft",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
  {
    id: "2",
    title: "RAAHI",
    slug: "raahi",
    description:
      "Safety-aware navigation web app built for Karachi that optimizes walking routes for safety rather than just speed",
    detailedDescription:
      "RAAHI is a safety-aware navigation web app built for Karachi, Pakistan. It compares walking route options and recommends the route with the stronger relative safety profile for the current time of day, rather than simply the fastest path. Maps optimize for time. RAAHI optimizes for safety.",
    image: "/Raahi.png",
    tags: ["Geospatial", "Safety AI", "React", "Karachi", "Navigation"],
    status: "active",
    techStack: [
      "React.js",
      "TanStack",
      "TomTom Routing API",
      "MapTiler API",
      "Tailwind CSS",
    ],
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
      github: "https://github.com/haseebjaved4212",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
  {
    id: "3",
    title: "CoolBraze-Ai",
    slug: "coolbraze-ai",
    description:
      "Autonomous multi-agent AI customer support system built with Django, Claude API, and Retrieval-Augmented Generation (RAG)",
    detailedDescription:
      "A complete AI-powered customer support platform built with Python, Django, Claude API, and Retrieval-Augmented Generation (RAG) vector search. Three autonomous AI agents collaborate end to end to triage incoming customer queries, verify policy rules, detect potential fraud, and execute automated refund and resolution workflows.",
    image: "/CoolBraze.png",
    tags: ["Agentic AI", "RAG", "Django", "Claude API", "Python"],
    status: "active",
    techStack: [
      "Python",
      "Django",
      "Claude API",
      "RAG Vector Search",
      "PostgreSQL",
      "JavaScript",
      "REST APIs",
    ],
    features: [
      "Three autonomous AI agents collaborating across triage, analysis, and resolution",
      "Retrieval-Augmented Generation (RAG) for grounded knowledge base answers",
      "Automated refund approval workflow with policy and fraud checks",
      "Real-time ticket resolution chat and confidence scoring",
      "PostgreSQL database persistence for audit logs and ticket history",
      "Modular RESTful API architecture for seamless CRM integration",
    ],
    learningOutcomes: [
      "Multi-agent orchestration and handoff design using the Claude API",
      "Building low-latency RAG pipelines with vector embeddings and grounded retrieval",
      "Designing deterministic guardrails for autonomous financial/refund actions",
      "Full-stack backend architecture with Django and PostgreSQL",
    ],
    links: {
      github: "https://github.com/haseebjaved4212/CoolBraze-Ai",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
  {
    id: "4",
    title: "AirPods Control",
    slug: "airpods-control",
    description:
      "Full-featured native Android app bridging Apple AirPods and Android via Kotlin, Jetpack Compose, and BLE APIs",
    detailedDescription:
      "AirPods Control is a full-featured, open-source Android application designed to bridge the gap between Apple AirPods and Android devices. Built natively using Kotlin, Jetpack Compose, and Android Bluetooth Low Energy (BLE) APIs, it provides accurate real-time battery monitoring, Active Noise Cancellation (ANC) toggles, In-Ear Detection, a custom 5-band Graphic Equalizer, and raw BLE packet diagnostics.",
    image: "/AirPods.png",
    tags: ["Android", "Kotlin", "Jetpack Compose", "BLE", "Open Source"],
    status: "active",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Android BLE APIs",
      "Room SQLite",
      "Custom 5-Band DSP",
      "Coroutines & StateFlow",
    ],
    features: [
      "Real-time independent battery percentage tracking for Left, Right, and Case",
      "Active Noise Cancellation (ANC), Transparency Mode, and Off mode switching",
      "Live optical In-Ear Detection sensor status and auto-pause controls",
      "5-Band Graphic Equalizer with Bass Boost and 3D Spatial Virtualizer",
      "Custom stem squeeze and double-tap gesture remapping",
      "Raw Apple Continuity BLE beacon (0x004C) packet scanner with Room SQLite logs",
    ],
    learningOutcomes: [
      "Low-level Bluetooth Low Energy (BLE) GATT and manufacturer payload parsing",
      "Real-time audio DSP equalization and spatial audio virtualization on Android",
      "Persistent Android Foreground Services and reactive UI with Jetpack Compose",
      "Local telemetry storage and log exporting using Room SQLite",
    ],
    links: {
      github: "https://github.com/haseebjaved4212/AirPods-Clone-Controle",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
  {
    id: "5",
    title: "AniTrack",
    slug: "anitrack",
    description:
      "Full-stack real-time anime tracking and analytics web platform built with TypeScript, FastAPI, Django, and Redis",
    detailedDescription:
      "AniTrack is a full-stack web application designed for tracking your anime journey end to end. It enables users to search anime catalogs, manage personalized watchlists, synchronize real-time episode progress across sessions, rate titles, and explore interactive visual analytics dashboards powered by FastAPI, Django, and Redis caching.",
    image: "/AniTrack.png",
    tags: ["Full-Stack", "TypeScript", "FastAPI", "Django", "Redis"],
    status: "active",
    techStack: [
      "TypeScript",
      "React",
      "FastAPI",
      "Django",
      "Redis",
      "PostgreSQL",
      "JWT Auth",
    ],
    features: [
      "Fast anime search and filtering with detailed show metadata",
      "Personalized watchlist management (Watching, Completed, Plan to Watch)",
      "Real-time episode progress tracking and 5-star rating system",
      "Interactive visual analytics dashboard for genre distribution and watch streaks",
      "High-throughput REST APIs backed by Redis caching to prevent state conflicts",
      "Secure JWT authentication and cross-session state synchronization",
    ],
    learningOutcomes: [
      "Designing high-concurrency REST APIs with FastAPI and Django",
      "Implementing Redis caching layers to accelerate watchlist and analytics queries",
      "End-to-end type safety across TypeScript frontend and Python backend contracts",
      "Building interactive data visualization charts for user watch telemetry",
    ],
    links: {
      github: "https://github.com/haseebjaved4212/AniTrack",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
  {
    id: "6",
    title: "LinguaApp",
    slug: "linguaapp",
    description:
      "Interactive AI-powered mobile language learning application built with React Native, Expo, and TypeScript",
    detailedDescription:
      "LinguaApp (Language-Lessons) is an interactive, AI-powered cross-platform mobile language learning application built with React Native, Expo, and TypeScript. Inspired by modern language platforms, LinguaApp delivers bite-sized conversational lessons, interactive vocabulary quizzes, AI speech practice, daily streak tracking, and gamified XP progression.",
    image: "/LinguaApp.png",
    tags: ["Mobile App", "React Native", "Expo", "TypeScript", "AI"],
    status: "active",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "AI Speech & Chat",
      "Tailwind / NativeWind",
      "REST APIs",
    ],
    features: [
      "Bite-sized interactive language lessons and conversational AI practice",
      "Gamified vocabulary matching and multiple-choice quiz modules",
      "Daily learning streak counter and XP progression rewards",
      "Real-time pronunciation and fluency feedback loops",
      "Smooth native animations and cross-platform iOS/Android support via Expo",
      "Offline-friendly lesson progress persistence",
    ],
    learningOutcomes: [
      "Cross-platform mobile architecture using React Native, Expo, and TypeScript",
      "Designing engaging gamified learning loops (XP, streaks, interactive cards)",
      "Integrating AI conversational prompts into mobile user flows",
      "Optimizing mobile gesture handling and screen transition performance",
    ],
    links: {
      github: "https://github.com/haseebjaved4212/Language-Lessons",
    },
    author: "Haseeb Javed",
    authorAvatar: "/avatar.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null
): Project | null {
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