import React, { useState } from 'react';
import { founderInitiative } from '../data/portfolioData';
import { 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database, 
  Compass, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  Sparkles,
  GitBranch,
  ArrowRight,
  Workflow,
  Server
} from 'lucide-react';

export default function EventBridgeSpotlight() {
  const [activeTab, setActiveTab] = useState('matching');

  const tabs = [
    { id: 'matching', label: 'Semantic Teammate Engine', icon: Cpu },
    { id: 'roadmaps', label: 'AI Skill-Gap & Roadmaps', icon: Compass },
    { id: 'adapter', label: 'Database Compatibility Layer', icon: Database },
    { id: 'infra', label: 'Production Architecture', icon: Server },
    { id: 'roadmap', label: 'Status & Future Roadmap', icon: Workflow },
  ];

  return (
    <section id="eventbridge" className="py-20 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Pill & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-white text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Flagship Founder Initiative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              EventBridge.Tech
            </h2>
            <p className="text-base text-zinc-600 max-w-2xl">
              A comprehensive student networking and opportunity platform architected to eliminate campus silos, 
              automate teammate formation via semantic vector search, and streamline inter-college event participation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={founderInitiative.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold shadow-card transition-all"
            >
              <span>Visit EventBridge.Tech</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Founder Context Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/90 space-y-2">
            <div className="text-xs font-mono uppercase text-zinc-500">The Problem Solved</div>
            <h3 className="font-bold text-zinc-900 text-sm">Fragmented Campus Intelligence</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Engineering hackathons, workshops, and tech conferences in India are isolated inside disjointed college circulars and chat channels. 
              Students lack visibility into external opportunities and struggle to find cross-campus collaborators.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/90 space-y-2">
            <div className="text-xs font-mono uppercase text-zinc-500">My Ownership & Role</div>
            <h3 className="font-bold text-zinc-900 text-sm">Founder & Full-Stack Architect</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Spearheaded end-to-end product strategy, React 18 user interface, FastAPI microservice logic, 
              PostgreSQL schema with vector extensions, payment webhook pipelines, and monitoring infrastructure.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/90 space-y-2">
            <div className="text-xs font-mono uppercase text-zinc-500">The Core Proposition</div>
            <h3 className="font-bold text-zinc-900 text-sm">Semantic Matching + Mobility</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Moves beyond basic keyword search by embedding student technical resumes, enabling algorithmic teammate matchmaking based on complementary strengths, 
              and introducing coordinate-based inter-college ride-sharing.
            </p>
          </div>

        </div>

        {/* Interactive Architecture Case Study Container */}
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-card overflow-hidden">
          
          {/* Tab Selector */}
          <div className="flex border-b border-zinc-200 bg-white overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                    isActive 
                      ? 'border-zinc-900 text-zinc-950 bg-zinc-50/80' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Body */}
          <div className="p-6 md:p-8 bg-white">
            
            {/* TAB 1: Semantic Teammate Matching Engine */}
            {activeTab === 'matching' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Resume-Based Teammate Recommendation Pipeline
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      PDF Extraction → Gemini Embedding Vectors → PostgreSQL pgvector → Cosine Similarity Search
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 font-medium">
                      Python / FastAPI
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 font-medium">
                      pgvector Extension
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Hackathons require multidisciplinary teams (e.g., frontend + ML + backend + UI). 
                      Instead of relying on rigid keyword filters that miss synonyms or context, EventBridge parses student resumes (PDF), 
                      extracts project and technical experience, and translates text into high-dimensional embeddings via Gemini.
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Embeddings are indexed directly inside Supabase PostgreSQL using the <code className="text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono text-zinc-800">pgvector</code> extension. 
                      When a student searches for teammates for a specific track (e.g. Web3, HealthTech, AI Agents), 
                      a cosine similarity distance query runs across candidates, returning students whose demonstrated projects complement the team's missing skill vectors.
                    </p>

                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <div className="text-xs font-mono font-semibold text-zinc-800">Engineering Trade-off:</div>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Chose native PostgreSQL with <code className="font-mono">pgvector</code> over maintaining a standalone vector database (e.g., Pinecone or Milvus). 
                        This kept relational user profiles, event registrations, and vector embeddings in a single atomic database transaction with lower operational complexity and zero multi-service sync lag.
                      </p>
                    </div>
                  </div>

                  {/* Visual Architecture Box */}
                  <div className="lg:col-span-5 bg-zinc-950 text-zinc-200 p-5 rounded-xl font-mono text-xs space-y-4 shadow-inner">
                    <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-zinc-800">
                      <span>MATCHING PIPELINE</span>
                      <span className="text-emerald-400">STATUS: ACTIVE</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                        <div className="text-[11px] text-zinc-400">1. INPUT INGESTION</div>
                        <div className="text-zinc-100 font-semibold mt-0.5">Resume PDF Parsing</div>
                        <div className="text-[10px] text-zinc-500 mt-1">Extracts skills, project scopes & roles</div>
                      </div>

                      <div className="text-center text-zinc-600">↓</div>

                      <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                        <div className="text-[11px] text-zinc-400">2. VECTORIZATION</div>
                        <div className="text-zinc-100 font-semibold mt-0.5">Gemini Embedding API</div>
                        <div className="text-[10px] text-zinc-500 mt-1">Converts semantic profile into dense vector</div>
                      </div>

                      <div className="text-center text-zinc-600">↓</div>

                      <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                        <div className="text-[11px] text-zinc-400">3. RETRIEVAL & RANKING</div>
                        <div className="text-zinc-100 font-semibold mt-0.5">Supabase PostgreSQL + pgvector</div>
                        <div className="text-[10px] text-zinc-500 mt-1">ORDER BY embedding &lt;=&gt; query_vector LIMIT 10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AI Skill-Gap & Roadmaps */}
            {activeTab === 'roadmaps' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Profile-Based Skill-Gap Analysis & Career Roadmaps
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      Gemini 2.5 Flash + Python Recommendation Microservice (TF-IDF & Cosine Similarity)
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 font-medium">
                    Hybrid AI / Heuristic Engine
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Students often struggle to understand what specific technologies or conceptual skills they lack when preparing for targeted roles (such as AI Engineer, Backend Systems Developer, or Cloud Architect).
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      EventBridge deploys a two-tier evaluation engine:
                    </p>
                    <ul className="text-xs text-zinc-600 space-y-2 list-disc list-inside">
                      <li><strong className="text-zinc-900">Deterministic TF-IDF layer:</strong> Quickly maps student skill taxonomies against industry job specifications to highlight immediate keyword and tooling deficiencies.</li>
                      <li><strong className="text-zinc-900">Gemini 2.5 Flash synthesis:</strong> Analyzes the gaps and synthesizes a milestone-based, week-by-week learning roadmap with concrete project prompts instead of abstract suggestions.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                    <div className="text-xs font-mono font-semibold text-zinc-900 uppercase">Key Architecture Decisions</div>
                    <div className="space-y-2 text-xs text-zinc-600">
                      <div className="p-3 bg-white rounded-lg border border-zinc-200">
                        <strong className="text-zinc-900 block mb-0.5">Cost & Latency Optimization</strong>
                        Pairing TF-IDF heuristics with Gemini 2.5 Flash reduced API payload overhead and token costs while keeping response generation under 1.2 seconds.
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-zinc-200">
                        <strong className="text-zinc-900 block mb-0.5">Structured JSON Output</strong>
                        Enforced strict response schemas in Gemini 2.5 Flash to guarantee deterministic rendering of roadmap nodes and checkpoints directly in the React UI.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Database Compatibility Layer */}
            {activeTab === 'adapter' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Client-Side Firestore-to-Supabase Compatibility Layer
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      Emulating NoSQL Document Array Operations Over Relational PostgreSQL
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 font-medium">
                    Technical Refactoring Case
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Early prototypes of EventBridge used Firestore for rapid schema-less prototyping. 
                    However, as the platform required complex relational queries (event organizers, team rosters, multi-table joins) 
                    and vector embeddings (<code className="font-mono text-xs">pgvector</code>), migrating to Supabase PostgreSQL became essential.
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    To prevent a massive, risky rewrite of dozens of frontend components expecting Firestore-style document operations 
                    (such as <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded">arrayUnion</code>, <code className="font-mono text-xs bg-zinc-100 px-1 py-0.5 rounded">arrayRemove</code>, and nested JSON mutations), 
                    I authored a lightweight client-side abstraction layer.
                  </p>

                  <div className="p-4 rounded-xl bg-zinc-900 text-zinc-200 font-mono text-xs space-y-2">
                    <div className="text-zinc-400 text-[11px]">// Architectural outcome</div>
                    <div className="text-emerald-400">
                      ✓ Preserved UI velocity without stalling user feature development.<br/>
                      ✓ Transparently mapped document array operations to PostgreSQL array columns and join tables.<br/>
                      ✓ Facilitated progressive migration where critical endpoints were optimized in relational SQL over time.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Production Architecture */}
            {activeTab === 'infra' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Production Infrastructure & Reliability Stack
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      Full-Stack Service Topology & Error Telemetry
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                    Production Deployed
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-mono text-zinc-500 mb-1">CLIENT LAYER</div>
                    <div className="font-bold text-zinc-900 text-sm">React 18 SPA</div>
                    <div className="text-xs text-zinc-600 mt-2">
                      Component-driven state, responsive layouts, optimistic updates for bookmarking and team invites.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-mono text-zinc-500 mb-1">SERVICES</div>
                    <div className="font-bold text-zinc-900 text-sm">Node + FastAPI</div>
                    <div className="text-xs text-zinc-600 mt-2">
                      Node/Express for auth & event APIs; Python/FastAPI for async ML vector similarity computations.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-mono text-zinc-500 mb-1">PERSISTENCE</div>
                    <div className="font-bold text-zinc-900 text-sm">Supabase / PostgreSQL</div>
                    <div className="text-xs text-zinc-600 mt-2">
                      Row-level security, relational data schemas, and pgvector extension for sub-second similarity queries.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-xs font-mono text-zinc-500 mb-1">MONITORING</div>
                    <div className="font-bold text-zinc-900 text-sm">PM2, Sentry & Winston</div>
                    <div className="text-xs text-zinc-600 mt-2">
                      Structured log rotation with Winston, real-time error tracking with Sentry, and PM2 process clustering.
                    </div>
                  </div>
                </div>

                {/* Additional infrastructure details */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-1">
                  <span className="font-semibold text-zinc-900">Operational Integrations: </span>
                  Wired webhooks for event registration confirmation, automated email reminders, and payment gateway callbacks.
                </div>
              </div>
            )}

            {/* TAB 5: Status & Roadmap */}
            {activeTab === 'roadmap' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Transparent Feature Status & Development Horizon
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      Distinguishing Shipped Systems, In-Progress Modules, and Planned Capabilities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Launched */}
                  <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-200/70 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Live & Launched</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {founderInitiative.featureStatus.launched.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* In Development */}
                  <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 font-mono text-xs font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>In Active Development</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {founderInitiative.featureStatus.inDevelopment.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-[11px] text-amber-800/80 pt-1 border-t border-amber-200/50">
                      Currently engineering geospatial proximity matching for cross-college ride-sharing to hackathons.
                    </div>
                  </div>

                  {/* Planned */}
                  <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider">
                      <Workflow className="w-4 h-4 text-zinc-500" />
                      <span>Planned Horizon</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-600">
                      {founderInitiative.featureStatus.planned.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-zinc-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer note on the card */}
          <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="font-mono">
              Designed & Built by Karthik Suthari · Production Architecture
            </span>
            <a
              href={founderInitiative.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-900 font-semibold hover:underline"
            >
              <span>Explore live platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
