# Karthik Suthari — Personal Founder & Engineering Portfolio

An editorial-grade personal portfolio engineered for **Karthik Suthari** — Computer Science Engineering Student at CMR Engineering College, Founder of **EventBridge.Tech**, and Applied AI / Full-Stack Builder.

Built with **React 18, Vite, Tailwind CSS, Lucide Icons, and PostCSS**.

---

## 🚀 Live Preview & Development

### 1. Development Server
```bash
npm install
npm run dev
```
Runs the live development server on `http://localhost:3000`.

### 2. Production Build & Local Preview
```bash
npm run build
npm run preview
```
Serves the optimized production distribution on `http://localhost:4173`.

---

## 📂 Architecture & Key Sections

1. **Top Status Bar & Sticky Header**: Real-time status badge ("Founder @ EventBridge · Open for Fellowships & Roles"), navigation shortcuts, and direct PDF download button.
2. **Hero Dossier**: Grounded positioning, real portrait, verified academic proof chips (B.E. CSE CGPA: 8.36, Class XII: 97.4%, 10+ Hackathons), and verified links (GitHub, LinkedIn, LeetCode).
3. **EventBridge.Tech Flagship Case Study**:
   - The Problem & Cross-College Mission
   - Interactive Architecture Tabs:
     - *Semantic Teammate Matching Engine* (`pgvector` + Gemini embeddings + Cosine similarity)
     - *Profile-based Skill-Gap & Roadmaps* (Gemini 2.5 Flash + TF-IDF microservice)
     - *Firestore-to-Supabase Compatibility Layer* (Client-side document array emulation)
     - *Production Reliability Stack* (React 18, FastAPI, Node.js, PM2, Sentry telemetry, Winston logs)
     - *Status & Roadmap* (Launched vs In-Development vs Planned)
4. **Selected Engineering Projects**:
   - **OppFlux**: AI Opportunity Discovery Engine (RSS + Puppeteer -> Gemini & Groq/Llama 3.3 -> Discord HITL moderation -> Oracle Cloud VM + Google Sheets/Drive).
   - **Health Insurance Policy RAG Assistant**: Document QA with LangChain, semantic PDF chunking, and grounded prompt constraints.
5. **Founder Story ("Why I Build")**: Deep narrative highlighting campus friction, the shift from scripting to systems architecture, and community-driven building.
6. **Leadership & Photographic Proof**: Real photo gallery featuring:
   - *Google Cloud Build with Gemini* (developer summit)
   - *Workday Developers First Offline Meetup at Deloitte University*
   - *iQOO 15 Launch & Quester Contest*
   - *GeeksforGeeks Campus Mantri*
   - *YUKTI National Innovation Repository (Ministry of Education)*
   - *10+ Hackathons Competitor*
7. **Engineering Principles**: 4 core tenets (Execution over hype, Factual grounding over unconstrained AI, Pragmatic architecture & velocity, Ground-level community understanding).
8. **Technical Arsenal**: Categorized matrix of languages, backend APIs, applied AI, databases, and developer tooling (no arbitrary percentage bars).
9. **Milestones & Trajectory**: Chronological timeline from Class XII to B.E. CSE and startup milestones.
10. **Initiate Collaboration Hub**: One-click email copy with visual feedback, tailored inquiry composer, and downloadable resume.

---

## 📦 Deployment (One-Click)

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```
