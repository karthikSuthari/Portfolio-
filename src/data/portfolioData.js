export const personalInfo = {
  name: "Karthik Suthari",
  role: "Student Founder & Computer Science Engineer",
  subRole: "Full-Stack Developer · Applied AI & Vector Search Builder",
  college: "CMR Engineering College, Hyderabad",
  degree: "B.E. Computer Science Engineering (2024 – 2028)",
  cgpa: "8.36 / 10",
  intermediate: {
    institution: "Alphores Junior College, Telangana",
    percentage: "97.4%",
    years: "2022 – 2024"
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
  resumePath: "/Karthik_Suthari_Resume.pdf",
  portrait: "/assets/karthik-portrait.jpg",
  status: "Open for Fellowships, High-Growth Startup Roles & Collaborations",
  headline: "Engineering student-focused networks and applied AI workflows.",
  summary: "Computer Science undergraduate (CGPA: 8.36/10) and founder of EventBridge.Tech. I combine modern full-stack systems, semantic vector retrieval (pgvector, Gemini embeddings), and automated pipelines to build resilient products that bridge students to real-world opportunities."
};

export const metrics = [
  { label: "B.E. CSE CGPA", value: "8.36", detail: "CMR Engineering College" },
  { label: "Class XII Score", value: "97.4%", detail: "Alphores Junior College" },
  { label: "Hackathons", value: "10+", detail: "Competed & Built" },
  { label: "Founder", value: "EventBridge", detail: "Student Opportunity Platform" },
  { label: "Innovation Entry", value: "YUKTI NIR", detail: "National Innovation Repo" },
  { label: "Leadership", value: "Campus Mantri", detail: "GeeksforGeeks Community" }
];

export const founderInitiative = {
  name: "EventBridge.Tech",
  role: "Founder & Full-Stack Architect",
  tagline: "Student networking and cross-college opportunity ecosystem",
  stage: "Live & Active Development",
  liveUrl: "https://www.eventbridge.tech",
  overview: "EventBridge was born out of a real friction I experienced: college students operate in isolated silos, missing high-impact hackathons, struggling to assemble complementary cross-college teams, and facing logistical hurdles attending inter-college events.",
  problem: "University technology ecosystems in India are fragmented. Crucial hackathons, developer fests, and workshops are scattered across individual college circulars and WhatsApp groups. Students have no credible way to discover teammates with verified skillsets or organize shared transit to off-campus events.",
  targetAudience: "Engineering students, student developers, hackathon organizers, and inter-college student communities.",
  ownership: "Conceived the product vision, designed system architecture, built frontend in React 18, developed Python/FastAPI microservices, configured Supabase PostgreSQL with pgvector, and orchestrated cloud deployment.",
  stack: [
    "React 18",
    "Node.js",
    "Express.js",
    "Python / FastAPI",
    "Supabase",
    "PostgreSQL / pgvector",
    "Gemini 2.5 Flash",
    "PM2 & Sentry",
    "Winston Logging"
  ],
  architecturalHighlights: [
    {
      title: "Semantic Resume-Based Teammate Matching",
      description: "Implemented an automated PDF parser that extracts student technical profiles and passes them to Gemini embedding models. Vectors are indexed in PostgreSQL using pgvector with cosine similarity distance operators, delivering high-precision teammate compatibility recommendations based on complementary skills.",
      tags: ["pgvector", "Gemini Embeddings", "Cosine Similarity", "FastAPI"]
    },
    {
      title: "Profile-Based Skill-Gap & Career Roadmaps",
      description: "Engineered an AI-assisted roadmap engine leveraging Gemini 2.5 Flash alongside a lightweight Python recommendation service using TF-IDF and cosine similarity to benchmark student skills against target roles and generate actionable milestone paths.",
      tags: ["Gemini 2.5 Flash", "TF-IDF", "Python", "Skill Analysis"]
    },
    {
      title: "Client-Side Firestore-to-Supabase Adapter",
      description: "Engineered a custom compatibility layer that emulated document-style array operations when transitioning database backends from Firestore to Supabase. This eliminated the need for an invasive client-side rewrite and preserved rapid iteration velocity.",
      tags: ["Architecture", "Supabase", "PostgreSQL", "Migration"]
    },
    {
      title: "Production-Grade Resiliency & Telemetry",
      description: "Wired authentication flows, payment & webhook pipelines for event registrations, gamified achievement badges, and integrated Sentry telemetry with Winston structured logging to monitor exceptions and runtime performance.",
      tags: ["Webhooks", "Sentry", "Winston", "Gamification"]
    }
  ],
  featureStatus: {
    launched: [
      "Cross-College Event Discovery Feed",
      "Student Developer Profiles & Badges",
      "Semantic Teammate Recommendations (pgvector)",
      "Automated Career Roadmap Generator",
      "Secure Auth & Event Registration Flows"
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
    id: "oppflux",
    name: "OppFlux: AI Opportunity Discovery Engine",
    badge: "Automated Data Pipeline & GenAI",
    role: "Lead Developer & Systems Architect",
    github: "https://github.com/karthikSuthari/OppFlux",
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
      "PM2",
      "Winston",
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
    id: "health-insurance-rag",
    name: "Health Insurance Policy RAG Assistant",
    badge: "Hackathon Project · Applied AI / RAG",
    role: "AI & Backend Developer",
    github: "https://github.com/karthikSuthari/Health-Insurance-Policy-Simplifier",
    summary: "A document-question-answering assistant that retrieves precise policy terms to answer customer queries regarding health insurance coverage, exclusions, waiting periods, and claim eligibility with strict factual grounding.",
    problem: "Health insurance policies are dense, 50+ page legal documents. Policyholders struggle to verify whether specific medical treatments or room rents are covered, leading to unexpected claim rejections.",
    solution: "A retrieval-augmented generation (RAG) system utilizing PDF parsing, semantic chunking, dense vector embeddings, and contextual prompting to constrain the LLM strictly to provided policy clauses.",
    stack: [
      "Python",
      "LangChain",
      "Vector Search",
      "Dense Embeddings",
      "PDF Plumber / PyPDF",
      "LLM API",
      "Streamlit / REST"
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
  }
];

export const leadershipAndCommunity = [
  {
    id: "google-gemini",
    category: "Developer Summit",
    title: "Google Cloud Build with Gemini",
    role: "Invited Builder & Participant",
    location: "Hyderabad, India",
    image: "/assets/google-build-with-gemini.jpg",
    description: "Attended Google Cloud's in-person Build with Gemini developer summit. Explored enterprise multimodal architectures, advanced prompt engineering, Vertex AI toolsets, and connected with regional Google Cloud developer leaders.",
    badge: "Google Cloud Event"
  },
  {
    id: "workday-deloitte",
    category: "Enterprise Tech Meetup",
    title: "Workday Developers First Offline Meetup",
    role: "Community Developer Attendee",
    location: "Deloitte University, Hyderabad",
    image: "/assets/workday-meetup-deloitte.jpg",
    description: "Participated in Workday's inaugural offline developer meetup hosted at the Deloitte University Hyderabad campus. Interacted with enterprise software architects, cloud platform engineers, and engineering leadership on high-scale systems.",
    badge: "Deloitte University"
  },
  {
    id: "iqoo-quester",
    category: "Technology Launch & Contest",
    title: "iQOO 15 Mobile Launch & Quester Contest",
    role: "Exclusive Access Quester",
    location: "Hyderabad, India",
    image: "/assets/iqoo-quester-badge.jpg",
    description: "Secured exclusive access pass to the iQOO 15 mobile flagship launch event and participated in the afternoon competitive technical Quester contest, testing mobile hardware architecture and gaming performance capabilities.",
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
    title: "10+ Hackathons Competitor & Builder",
    role: "Full-Stack & Applied AI Engineer",
    location: "National & Regional Hackathons",
    image: null,
    description: "Competed in over 10 national and regional hackathons, shipping prototypes within 24 to 36-hour sprint windows. Built document RAG systems, student networking tools, and AI automation engines under intense operational pressure.",
    badge: "10+ Hackathons"
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
    skills: ["React 18", "Node.js", "Express.js", "Python / FastAPI", "REST APIs", "Webhooks", "HTML5 & CSS3", "Tailwind CSS"]
  },
  {
    category: "Applied AI & Vector Retrieval",
    description: "Grounded semantic retrieval and GenAI integration",
    skills: ["RAG Systems", "PostgreSQL pgvector", "Gemini 2.5 Flash", "Gemini API", "Groq / Llama 3.3", "Dense Embeddings", "TF-IDF & Cosine Similarity", "LangChain", "Prompt Engineering"]
  },
  {
    category: "Databases & Cloud Infrastructure",
    description: "Data persistence, cloud hosting, and process orchestration",
    skills: ["Supabase", "PostgreSQL", "MySQL", "Oracle Cloud VM", "PM2 Process Manager", "GitHub Actions", "Sentry Telemetry", "Winston Logging"]
  },
  {
    category: "Automation, Mobile & Tooling",
    description: "Web scraping, Android development, and collaboration tools",
    skills: ["Puppeteer Headless", "Discord.js Bot SDK", "Google Sheets & Drive APIs", "Android Studio", "Jetpack Compose", "Git & GitHub"]
  },
  {
    category: "Core Foundations",
    description: "Algorithmic thinking and engineering practices",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Schema Design", "System Architecture & Modular Design"]
  }
];

export const workingPhilosophy = [
  {
    number: "01",
    title: "Execution Over Theoretical Hype",
    description: "Ideas are abundant; working code and running deployments define true capability. When building EventBridge and OppFlux, I prioritized spinning up working databases, writing tests, and deploying to Oracle Cloud VMs over endless planning."
  },
  {
    number: "02",
    title: "Factual Grounding Over Unconstrained AI",
    description: "Generative AI is only as useful as its constraints. In both EventBridge's resume matcher and the Health Insurance Assistant, I rely on pgvector similarity searches, chunking, and strict context injection to eliminate hallucinations."
  },
  {
    number: "03",
    title: "Pragmatic Architecture & Velocity",
    description: "When migrating from Firestore to Supabase, instead of stalling development to rewrite hundreds of client queries, I authored a client-side document compatibility layer. Pragmatic compromises preserve momentum."
  },
  {
    number: "04",
    title: "Ground-Level Community Understanding",
    description: "The best product insights come from sitting in the audience and working in the trenches. Attending 10+ hackathons, Google Cloud summits, and Workday meetups showed me firsthand how student developers collaborate."
  }
];

export const timelineMilestones = [
  {
    year: "2024 – Present",
    period: "Undergraduate",
    title: "B.E. Computer Science Engineering",
    organization: "CMR Engineering College, Hyderabad",
    description: "Maintaining an 8.36/10 CGPA while leading development on EventBridge, contributing to community initiatives, and building applied AI tools.",
    type: "education"
  },
  {
    year: "2024",
    period: "Founder",
    title: "Founded & Architected EventBridge.Tech",
    organization: "EventBridge",
    description: "Conceived and shipped the student networking platform with semantic pgvector teammate matching, Gemini 2.5 Flash roadmap engines, and Supabase integration.",
    type: "startup"
  },
  {
    year: "2024",
    period: "Engineering",
    title: "Engineered OppFlux Automation Pipeline",
    organization: "Open Source Initiative",
    description: "Built automated Puppeteer crawling pipeline, integrated Gemini/Groq JSON extraction, and deployed a human-in-the-loop Discord moderation bot on Oracle Cloud.",
    type: "project"
  },
  {
    year: "2024",
    period: "Competitive",
    title: "10+ Hackathons & Health Insurance RAG",
    organization: "Hackathon Competitions",
    description: "Shipped the Health Insurance Policy RAG Assistant with LangChain and vector retrieval; reached a milestone of 10+ hackathon sprint builds.",
    type: "hackathon"
  },
  {
    year: "2024",
    period: "Ecosystem",
    title: "Ecosystem Immersion: Google, Workday & iQOO",
    organization: "Hyderabad Tech Ecosystem",
    description: "Participated in Google Cloud Build with Gemini, Workday's first offline meetup at Deloitte University, and iQOO 15 Quester contest.",
    type: "leadership"
  },
  {
    year: "2024",
    period: "Leadership",
    title: "GeeksforGeeks Campus Mantri & YUKTI NIR",
    organization: "Campus & National Innovation Cell",
    description: "Appointed GfG Campus Mantri for peer developer enablement; submitted student startup blueprints to the YUKTI National Innovation Repository.",
    type: "leadership"
  },
  {
    year: "2022 – 2024",
    period: "Academics",
    title: "Class XII Intermediate (97.4%)",
    organization: "Alphores Junior College, Telangana",
    description: "Graduated with 97.4% aggregate, developing deep mathematical and analytical foundations.",
    type: "education"
  }
];
