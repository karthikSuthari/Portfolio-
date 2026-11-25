export const personalInfo = {
  name: "Karthik Suthari",
  role: "Student Founder & Computer Science Engineer",
  subRole: "Full-Stack Developer · Applied AI & Android Systems Builder",
  college: "CMR Engineering College, Hyderabad",
  degree: "B.E. Computer Science Engineering",
  cgpa: "8.36 / 10",
  intermediate: {
    institution: "Alphores Junior College, Telangana",
    percentage: "97.4%"
  },
  location: "Medchal, Hyderabad, Telangana, India",
  email: "248r1a05aq.karthik@gmail.com",
  phone: "+91 9703693086",
  github: "https://github.com/karthikSuthari",
  githubUsername: "karthikSuthari",
  linkedin: "https://www.linkedin.com/in/karthik-suthari-251270379",
  leetcode: "https://leetcode.com/u/Suthari_Karthik/",
  leetcodeUsername: "Suthari_Karthik",
  startupUrl: "https://www.eventbridge.tech",
  resumePath: "./Karthik_Suthari_Resume.pdf",
  portrait: "./assets/karthik-portrait.jpg",
  status: "Shortlisted: Workday Student Ambassador · Founder @ EventBridge",
  headline: "Engineering student-focused networks, mobile systems, and applied AI workflows.",
  summary: "Computer Science undergraduate (CGPA: 8.36/10) at CMR Engineering College and founder of EventBridge.Tech. Shortlisted as a Workday Student Ambassador. I leverage AI as an execution multiplier to rapidly prototype and build systems, while taking full ownership of database schemas, vector pipelines (pgvector), and native mobile architectures."
};

export const metrics = [
  { label: "B.E. CSE CGPA", value: "8.36", detail: "CMR Engineering College" },
  { label: "Class XII Score", value: "97.4%", detail: "Alphores Junior College" },
  { label: "Ambassador", value: "Workday", detail: "Shortlisted Student Ambassador" },
  { label: "Founder", value: "EventBridge", detail: "Student Opportunity Platform" },
  { label: "Hackathons", value: "10+", detail: "Competed & Shipped" },
  { label: "Innovation Entry", value: "YUKTI NIR", detail: "National Innovation Repo" }
];

export const founderInitiative = {
  name: "EventBridge.Tech",
  role: "Founder & Full-Stack Architect",
  tagline: "Student networking and cross-college opportunity ecosystem",
  stage: "Live & Active Development",
  liveUrl: "https://www.eventbridge.tech",
  overview: "EventBridge was born out of a real friction I experienced: college students operate in isolated silos, missing high-impact hackathons, struggling to assemble complementary cross-college teams, and facing logistical hurdles attending inter-college events. Secured a 12-month platform partnership with 1% School for student hackathons and workshops.",
  problem: "University technology ecosystems in India are fragmented. Crucial hackathons, developer fests, and workshops are scattered across individual college circulars and WhatsApp groups. Students have no credible way to discover teammates with verified skillsets or organize shared transit to off-campus events.",
  targetAudience: "Engineering students, student developers, hackathon organizers, and inter-college student communities.",
  ownership: "Conceived the product vision, designed system architecture, built frontend in React 18, developed Python/FastAPI microservices, configured Supabase PostgreSQL (pgvector, RLS), and orchestrated cloud deployment.",
  stack: [
    "React 18",
    "Node.js",
    "Express.js",
    "Python / FastAPI",
    "Supabase",
    "PostgreSQL (pgvector, RLS)",
    "Gemini 2.5 Flash",
    "PM2 & Sentry",
    "Winston Logging"
  ],
  architecturalHighlights: [
    {
      title: "Cross-College Discovery & 1% School Partnership",
      description: "Built QR-verifiable student passports, custom registrations, and ride-sharing for inter-college events, securing a 12-month platform partnership with 1% School for student hackathons and workshops.",
      tags: ["QR Passports", "1% School Partner", "Ride-Sharing", "React 18"]
    },
    {
      title: "Semantic Resume-Based Teammate Matching",
      description: "Implemented an automated PDF parser that extracts student technical profiles and passes them to Gemini embedding models. Vectors are indexed in PostgreSQL using pgvector with cosine similarity distance operators, delivering high-precision teammate compatibility recommendations based on complementary skills.",
      tags: ["pgvector", "Gemini Embeddings", "Cosine Similarity", "FastAPI"]
    },
    {
      title: "Profile-Based Skill-Gap & Career Roadmaps",
      description: "Engineered an AI-assisted roadmap engine leveraging Gemini 2.5 Flash alongside a lightweight Python FastAPI recommendation service using TF-IDF and cosine similarity to benchmark student skills against target roles and generate actionable milestone paths.",
      tags: ["Gemini 2.5 Flash", "TF-IDF", "Python", "Skill Analysis"]
    },
    {
      title: "Firestore Compatibility Layer & PostgreSQL RLS",
      description: "Engineered a client-side Firestore-to-Supabase compatibility layer for document-style array operations and enforced PostgreSQL Row-Level Security (RLS) policies, webhooks, and paginated queries across production data flows.",
      tags: ["Supabase", "PostgreSQL RLS", "Webhooks", "Migration"]
    }
  ],
  featureStatus: {
    launched: [
      "Cross-College Event Discovery Feed & QR Passports",
      "12-Month Platform Partnership with 1% School",
      "Semantic Teammate Recommendations (pgvector)",
      "Automated Career Roadmap Generator",
      "PostgreSQL RLS Auth & Custom Registrations"
    ],
    inDevelopment: [
      "Inter-College Hackathon Ride-Sharing Coordination",
      "Team Collaboration Workspaces",
      "Automated College Verification Pipeline"
    ],
    planned: [
      "Campus Chapter Administration Dashboards",
      "Sponsor & Talent Scout Discovery Hub"
    ]
  }
};

export const engineeringProjects = [
  {
    id: "hexnil",
    name: "Hexnil: Mobile Automated Diagnostic Assistant",
    badge: "Native Android · Diagnostic & OS Telemetry",
    category: "mobile",
    role: "Android & Systems Developer",
    github: "https://github.com/karthikSuthari/HexNil",
    summary: "A native Android diagnostic app built in Kotlin and Jetpack Compose (Material 3) that monitors real-time battery health, RAM usage, storage fragmentation, and OS metrics to compute a 0–100% device health score.",
    problem: "After Android OS updates, users and developers lack clear visibility into battery degradation, memory pressure, storage fragmentation, and subtle performance regressions.",
    solution: "Implemented real-time telemetry collection alongside pre- and post-update system snapshot comparisons and rule-based bug risk detection using Room (SQLite) persistence and background WorkManager scheduling.",
    stack: [
      "Kotlin",
      "Jetpack Compose (Material 3)",
      "Android Studio",
      "MVVM",
      "Room (SQLite)",
      "Coroutines / Flow",
      "WorkManager"
    ],
    workflowSteps: [
      { step: "01", title: "Telemetry Monitor", desc: "Tracks real-time battery health, RAM utilization, storage fragmentation, and OS metrics." },
      { step: "02", title: "Health Scoring", desc: "Computes an actionable 0–100% device health score across core hardware/OS signals." },
      { step: "03", title: "Snapshot Persist", desc: "Stores pre- and post-update system snapshots locally using Room (SQLite)." },
      { step: "04", title: "Risk Detection", desc: "Runs rule-based bug risk detection scheduled reliably in the background via WorkManager." }
    ],
    engineeringLearnings: [
      "Architected reactive UI updates with Kotlin Coroutines/Flow and MVVM separation.",
      "Scheduled resilient background diagnostic snapshots using Android WorkManager and Room persistence."
    ]
  },
  {
    id: "insure-iq",
    name: "InsureIQ: Health Insurance Policy RAG Assistant",
    badge: "Hackathon Project · Applied AI / RAG",
    category: "ai",
    role: "AI & Backend Systems Developer",
    github: "https://github.com/karthikSuthari/Health-Insurance-Policy-Simplifier",
    summary: "A production-ready RAG system answering complex health insurance coverage questions with precise clause-level citations (page, section, clause) directly grounded in dense policy PDFs.",
    problem: "Health insurance policies are dense, 50+ page legal documents. Policyholders struggle to verify whether specific medical treatments or room rents are covered, leading to unexpected claim rejections.",
    solution: "A retrieval-augmented generation (RAG) system utilizing PDF parsing, semantic chunking, dense vector embeddings, and contextual prompting to constrain the LLM strictly to provided policy clauses.",
    stack: [
      "Python",
      "LangChain",
      "Dense Embeddings",
      "Vector Retrieval",
      "PDF Parser",
      "LLM API",
      "Streamlit & FastAPI"
    ],
    workflowSteps: [
      { step: "01", title: "Document Chunking", desc: "Splits complex legal insurance policies using recursive character splitting preserving header hierarchy." },
      { step: "02", title: "Embedding Indexing", desc: "Converts policy clauses into semantic vector embeddings for nearest-neighbor similarity search." },
      { step: "03", title: "Contextual Retrieval", desc: "Fetches top-k relevant clauses matching user queries on exclusions, copays, or treatments." },
      { step: "04", title: "Grounded Synthesis", desc: "Applies defensive prompt templates requiring citation of clause numbers and prohibiting speculative medical advice." }
    ],
    engineeringLearnings: [
      "Standard token chunking fails on legal tables; semantic boundary chunking preserved policy exclusions context.",
      "Prompt grounding constraints eliminated hallucinations in 95%+ of ambiguous claim queries."
    ]
  },
  {
    id: "oppflux",
    name: "OppFlux: AI Opportunity Discovery Engine",
    badge: "Automated Data Pipeline & GenAI",
    category: "cloud",
    role: "Lead Developer & Systems Architect",
    liveUrl: "https://www.eventbridge.tech/oppflux",
    summary: "An automated web intelligence pipeline that crawls the web for student tech events, synthesizes structured metadata with Gemini & Groq, and moderates content through a Discord human-in-the-loop workflow before distribution.",
    problem: "Student opportunities and hackathons are announced across dozens of disparate sites, portals, and social channels with inconsistent formats, making manual tracking time-prohibitive and error-prone.",
    solution: "A self-healing automation pipeline that aggregates RSS feeds and executes headless Puppeteer crawlers to discover announcements, runs LLM extraction for normalized JSON schema generation, and presents interactive Discord cards for human review.",
    stack: [
      "Node.js",
      "TypeScript",
      "Gemini API",
      "Groq / Llama 3.3",
      "Puppeteer",
      "Discord.js",
      "Oracle Cloud VM",
      "PM2 & Winston",
      "Google Sheets & Drive APIs"
    ],
    workflowSteps: [
      { step: "01", title: "Ingestion", desc: "Crawls RSS feeds & web sources via Puppeteer on scheduled cron intervals." },
      { step: "02", title: "Deduplication", desc: "Runs three-layer deduplication (URL hash, title normalization, entity matching)." },
      { step: "03", title: "LLM Extraction", desc: "Gemini & Groq (Llama 3.3) parse unstructured text into typed metadata schemas & social blurbs." },
      { step: "04", title: "HITL Moderation", desc: "Dispatches actionable Discord embeds with Approve, Edit, or Reject buttons for human verification." },
      { step: "05", title: "Distribution", desc: "Syncs approved records to Google Sheets/Drive and prepares multi-platform dissemination." }
    ],
    engineeringLearnings: [
      "Tuned fallback models between Gemini and Groq to guarantee zero downtime during provider rate limits.",
      "Engineered three-layer duplicate detection to eliminate multi-source spam.",
      "Maintained 99.8% process uptime on an Oracle Cloud VM utilizing PM2 process clustering and Winston rotation logs."
    ]
  },
  {
    id: "team-nexus",
    name: "TeamNexus: Native Mobile Platform",
    badge: "Native Android · Jetpack Compose",
    category: "mobile",
    role: "Mobile Co-Founder & Android Engineer",
    github: "https://github.com/karthikSuthari/TeamNexus",
    summary: "A modern native Android application built with Kotlin and Jetpack Compose (Material 3 Dark Theme), bringing EventBridge's AI Team Match and OppFlux live feed directly to students' smartphones.",
    problem: "Students attending hackathons and campus events need rapid, on-the-go notifications, instant teammate discovery, and low-latency access to event schedules without relying on mobile web browsers.",
    solution: "Architected a high-performance native Android application featuring MVVM architecture, StateFlow reactive state management, and direct integration with EventBridge and OppFlux backends.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3 (Dark)",
      "MVVM Architecture",
      "StateFlow & Coroutines",
      "OkHttp & kotlinx.serialization"
    ],
    workflowSteps: [
      { step: "01", title: "Mobile Ingestion", desc: "Fetches live event and teammate candidate feeds over SSL-encrypted REST endpoints." },
      { step: "02", title: "Reactive UI State", desc: "Uses Kotlin StateFlow and Coroutines for unblocked UI rendering at 60/120 FPS." },
      { step: "03", title: "AI Team Match", desc: "Surfaces complementary student matches based on required project skills and domains." },
      { step: "04", title: "OppFlux Stream", desc: "Streams real-time updates for live hackathons, registrations, and tech competitions." }
    ],
    engineeringLearnings: [
      "Co-developed in Hyderabad with Team Nexus (Karthik, Surya, Diamond), fostering agile teamwork and code review rigor.",
      "Engineered memory-efficient Compose lists and state hoisting to prevent recomposition bottlenecks."
    ]
  },
  {
    id: "gigpoint",
    name: "GiGPoint: Commerce Platform & Blueprint",
    badge: "Full-Stack Web & Product Design",
    category: "fullstack",
    role: "Product Architect & Full-Stack Engineer",
    github: "https://github.com/karthikSuthari/GiGPoint",
    summary: "A comprehensive customer-centric mobile commerce platform blueprint and implementation (Next.js, TypeScript, Supabase) designed with full product requirements, user journey maps, and database schemas.",
    problem: "Specialized service commerce platforms suffer from fragmented order tracking, unclear user flows, and poorly structured relational databases for order fulfillment.",
    solution: "Delivered a complete product engineering blueprint: competitor analysis, Google Stitch high-fidelity wireframes, comprehensive Supabase relational schemas, and Next.js frontend architecture.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase / PostgreSQL",
      "Tailwind CSS",
      "System Architecture",
      "Stitch Wireframing"
    ],
    workflowSteps: [
      { step: "01", title: "Research & Journey", desc: "Mapped end-to-end user journeys and competitor capabilities across industrial commerce platforms." },
      { step: "02", title: "Schema Design", desc: "Authored relational SQL schemas in Supabase for inventory, customer orders, and tracking." },
      { step: "03", title: "High-Fi Blueprint", desc: "Created interactive wireframe prototypes using Google Stitch and documented milestones in Notion." }
    ],
    engineeringLearnings: [
      "Wrote production-ready Supabase SQL migrations with relational integrity and seed scripts.",
      "Bridged UX product thinking with rigorous backend schema design."
    ]
  }
];

export const leadershipAndCommunity = [
  {
    id: "workday-ambassador",
    category: "Corporate Leadership Program",
    title: "Workday Student Ambassador (Shortlisted)",
    role: "Candidate & Hyderabad Meetup Attendee",
    location: "Deloitte University, Hyderabad",
    image: "./assets/workday-meetup-deloitte.jpg",
    description: "Participated in Workday's inaugural offline developer meetup at Deloitte University Hyderabad, engaging directly with cloud platform architects and engineering executives. Following the engagement, successfully shortlisted for the competitive Workday Student Ambassador program with upcoming selection rounds.",
    badge: "Workday Ambassador Shortlist"
  },
  {
    id: "google-gemini",
    category: "Developer Summit",
    title: "Google Cloud Build with Gemini",
    role: "Invited Builder & Participant",
    location: "Hyderabad, India",
    image: "./assets/google-build-with-gemini.jpg",
    description: "Attended Google Cloud's in-person Build with Gemini developer summit. Explored enterprise multimodal architectures, advanced prompt engineering, Vertex AI toolsets, and connected with regional Google Cloud developer leaders.",
    badge: "Google Cloud Event"
  },
  {
    id: "iqoo-quester",
    category: "Technology Launch & Contest",
    title: "iQOO 15 Launch & Quester Contest",
    role: "Exclusive Access Quester & Project Builder",
    location: "Hyderabad, India",
    image: "./assets/iqoo-quester-badge.jpg",
    description: "Secured an exclusive access pass to the iQOO 15 flagship launch event and participated in the afternoon competitive technical Quester contest. Built HEXNIL (AI Mobile OS Update Impact Analyzer) to study mobile OS regressions.",
    badge: "Official Community Quester"
  },
  {
    id: "geeksforgeeks-campus",
    category: "Campus Leadership",
    title: "GeeksforGeeks Campus Mantri",
    role: "Campus Ambassador & Developer Lead",
    location: "CMR Engineering College",
    image: null,
    description: "Appointed as the official GeeksforGeeks Campus Mantri representing CMR Engineering College. Organized coding challenges, technical peer learning groups, DSA problem-solving sessions, and bridge workshops between students and industrial platforms.",
    badge: "Campus Leadership"
  },
  {
    id: "yukti-nir",
    category: "National Innovation",
    title: "YUKTI National Innovation Repository (NIR)",
    role: "Student Innovator & Submitter",
    location: "Ministry of Education Innovation Cell",
    image: null,
    description: "Submitted student startup concepts and working technical prototypes to the Government of India's YUKTI National Innovation Repository through the institutional innovation ecosystem, validating technical feasibility and societal impact.",
    badge: "Government Innovation Cell"
  },
  {
    id: "hackathons-streak",
    category: "Competitive Building",
    title: "1× Hackathon Winner & ArtisansHub",
    role: "Full-Stack & Applied AI Engineer",
    location: "Google Cloud Gen AI Exchange & Regional",
    image: null,
    description: "1× Hackathon Winner with 10+ sprint builds. Built ArtisansHub (voice-first artisan marketplace using Vertex AI) for the Google Cloud Gen AI Exchange Hackathon, plus RAG and automation prototypes.",
    badge: "1× Hackathon Winner"
  },
  {
    id: "certifications-ecosystem",
    category: "Certifications & Developer Chapters",
    title: "Google Cloud Gen AI, Microsoft Secure AI & ISOC",
    role: "Certified Builder & Chapter Participant",
    location: "Hyderabad Tech Ecosystem",
    image: null,
    description: "Earned Google Cloud Gen AI Academy 2.0 skill badges and completed the Adobe Digital Tooling Track; active participant in Microsoft Hyderabad Secure AI and the Internet Society (ISOC) Hyderabad Chapter.",
    badge: "Cloud & AI Community"
  }
];

export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming and systems foundations",
    skills: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "Kotlin", "C", "SQL"]
  },
  {
    category: "Full-Stack & Backend",
    description: "Production web applications and high-throughput APIs",
    skills: ["React 18", "Next.js", "Node.js", "Express.js", "Python / FastAPI", "REST APIs", "Webhooks", "HTML5 & CSS3", "Tailwind CSS"]
  },
  {
    category: "Applied AI & Vector Retrieval",
    description: "Grounded semantic retrieval and GenAI integration",
    skills: ["RAG Systems", "PostgreSQL pgvector", "Gemini 2.5 Flash", "Gemini API", "Groq / Llama 3.3", "Dense Embeddings", "TF-IDF & Cosine Similarity", "LangChain", "Prompt Engineering"]
  },
  {
    category: "Native Android & Mobile Systems",
    description: "Modern Android development & diagnostic telemetry",
    skills: ["Android Studio", "Kotlin", "Jetpack Compose", "Material 3", "Room (SQLite)", "WorkManager", "MVVM & StateFlow", "Coroutines", "OkHttp"]
  },
  {
    category: "Databases & Cloud Infrastructure",
    description: "Data persistence, security policies, and cloud hosting",
    skills: ["Supabase", "PostgreSQL (pgvector, RLS)", "MySQL", "Oracle Cloud Infrastructure (OCI)", "PM2 Process Manager", "GitHub Actions", "Sentry Telemetry", "Winston Logging"]
  },
  {
    category: "Automation, Tooling & Foundations",
    description: "Web scraping, API testing, bot SDKs, and algorithms",
    skills: ["Puppeteer Headless", "Discord.js Bot SDK", "Postman", "Git, GitHub & GitLab", "Google Sheets & Drive APIs", "Data Structures & Algorithms", "OOP & System Design"]
  }
];

export const workingPhilosophy = [
  {
    number: "01",
    title: "AI-Augmented Building with Architectural Intent",
    description: "I openly leverage modern AI tools to accelerate prototyping, generate scaffolding, and build at 10x velocity. But velocity without comprehension is fragile: I deliberately understand every architectural decision, schema constraint, and data pipeline I ship—knowing why pgvector handles atomic vector search, why 3-layer deduplication prevents scraper spam, and how Kotlin StateFlow keeps mobile UIs responsive. AI is my execution multiplier; architectural ownership remains mine."
  },
  {
    number: "02",
    title: "Execution & Prototyping Over Theoretical Hype",
    description: "Ideas are abundant; working code and running deployments define true capability. When building EventBridge, HexNil, and OppFlux, I prioritized spinning up working databases, writing tests, and deploying to cloud VMs over endless planning."
  },
  {
    number: "03",
    title: "Factual Grounding Over Unconstrained AI",
    description: "Generative AI is only as useful as its constraints. In EventBridge's resume matcher, InsureIQ's RAG system, and HexNil's changelog analyzer, I rely on pgvector similarity searches, clause chunking, and strict context injection to eliminate hallucinations."
  },
  {
    number: "04",
    title: "Pragmatic Architecture & Velocity",
    description: "When migrating from Firestore to Supabase, instead of stalling development to rewrite hundreds of client queries, I authored a client-side document compatibility layer. Pragmatic compromises preserve momentum."
  }
];

export const timelineMilestones = [
  {
    badge: "ACTIVE RECOGNITION",
    title: "Shortlisted: Workday Student Ambassador",
    organization: "Workday University Program",
    description: "Shortlisted for the Workday Student Ambassador role following participation at the Deloitte University developer meetup; preparing for ambassador session.",
    type: "leadership"
  },
  {
    badge: "UNDERGRADUATE FOCUS",
    title: "B.E. Computer Science Engineering",
    organization: "CMR Engineering College, Hyderabad",
    description: "Maintaining an 8.36/10 CGPA while leading development on EventBridge, contributing to community initiatives, and building applied AI tools.",
    type: "education"
  },
  {
    badge: "FOUNDER VENTURE",
    title: "Founded & Architected EventBridge.Tech",
    organization: "EventBridge",
    description: "Conceived and shipped the student networking platform with semantic pgvector teammate matching, Gemini 2.5 Flash roadmap engines, and Supabase integration.",
    type: "startup"
  },
  {
    badge: "CONTEST SYSTEM",
    title: "Engineered HEXNIL for iQOO Mobile Contest",
    organization: "iQOO Quester Contest / Open Source",
    description: "Architected AI-powered Mobile OS Update Impact Analyzer with 5-stage Predict-Prioritize-Validate-Explain loop.",
    type: "project"
  },
  {
    badge: "NATIVE MOBILE",
    title: "Built TeamNexus Jetpack Compose Android Client",
    organization: "Team Nexus (Hyderabad)",
    description: "Co-engineered native Android Jetpack Compose app bringing EventBridge and OppFlux live feeds to mobile devices.",
    type: "project"
  },
  {
    badge: "COMPETITIVE BUILDING",
    title: "10+ Hackathons & InsureIQ RAG System",
    organization: "Hackathon Competitions",
    description: "Shipped InsureIQ with LangChain, semantic PDF chunking, and clause-level citation enforcement; reached 10+ hackathons milestone.",
    type: "hackathon"
  },
  {
    badge: "ECOSYSTEM IMMERSION",
    title: "Workday at Deloitte Univ & Google Build with Gemini",
    organization: "Hyderabad Tech Ecosystem",
    description: "Participated in Workday's first offline meetup at Deloitte University and Google Cloud Build with Gemini summit in Hyderabad.",
    type: "leadership"
  },
  {
    badge: "CAMPUS LEADERSHIP",
    title: "GeeksforGeeks Campus Mantri & YUKTI NIR",
    organization: "Campus & National Innovation Cell",
    description: "Appointed GfG Campus Mantri for peer developer enablement; submitted student startup blueprints to the YUKTI National Innovation Repository.",
    type: "leadership"
  },
  {
    badge: "ACADEMIC FOUNDATION",
    title: "Class XII Intermediate (97.4%)",
    organization: "Alphores Junior College, Telangana",
    description: "Graduated with 97.4% aggregate, developing deep mathematical and analytical foundations.",
    type: "education"
  }
];
