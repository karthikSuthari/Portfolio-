import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Terminal, Code, Cpu, Lightbulb, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FounderStory() {
  return (
    <section id="story" className="py-20 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            The Founder Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Why I Build: From Campus Friction to Scaled Systems
          </h2>
          <p className="text-base text-zinc-600">
            An authentic look at how my work as a student engineer evolved into founding EventBridge, 
            shortlisting as a Workday Student Ambassador, and mastering high-velocity, AI-augmented product building.
          </p>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-10 text-zinc-700 text-sm sm:text-base leading-relaxed">
          
          {/* Chapter 1: The Spark */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span>01. The Problem in Plain Sight</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-950">
              The Isolation of College Tech Ecosystems
            </h3>
            <p>
              When I entered engineering at CMR Engineering College in Hyderabad, I noticed an immediate paradox: 
              brilliant students were eager to build, participate in hackathons, and collaborate on cutting-edge software, 
              yet information was hopelessly fragmented. Hackathon notifications, workshops, and inter-college team calls 
              were scattered across ephemeral WhatsApp groups, departmental noticeboards, and random Telegram channels.
            </p>
            <p>
              Students with complementary strengths—someone great at backend systems and someone passionate about UI/UX or machine learning—could 
              be studying in adjacent colleges or different classrooms without ever discovering each other. 
              I realized that solving student discovery wasn't a social media problem; it was an information retrieval, matchmaking, and mobility problem.
            </p>
          </div>

          {/* Chapter 2: The Philosophy on AI & Velocity */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span>02. The Modern Builder Mindset</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-950">
              AI as an Execution Multiplier, Engineering as Architectural Intent
            </h3>
            <p>
              I am candid about how I build: I leverage modern AI tools to accelerate scaffolding, iterate on components, 
              and write boilerplate at 10x velocity. But velocity without architectural understanding creates unmaintainable software. 
              I take deep personal ownership of <strong>why each technology is chosen</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block font-mono">Atomic Database Vector Search</span>
                <span className="text-zinc-600">
                  Using Supabase <code className="font-mono">pgvector</code> instead of standalone vector DBs to maintain atomic user transactions and zero sync lag.
                </span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block font-mono">Custom Compatibility Layer</span>
                <span className="text-zinc-600">
                  Emulating Firestore document array operations client-side when migrating to Supabase to prevent disruptive UI refactors.
                </span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block font-mono">Multi-Layer Deduplication</span>
                <span className="text-zinc-600">
                  Engineering 3-layer URL hashing, title normalization, and entity matching in OppFlux to stop crawler spam.
                </span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block font-mono">Unblocked Native Mobile UI</span>
                <span className="text-zinc-600">
                  Using Kotlin StateFlow and Coroutines in TeamNexus to render 60/120 FPS Jetpack Compose lists without UI thread lock.
                </span>
              </div>
            </div>
          </div>

          {/* Chapter 3: Leadership & Ground Truth */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span>03. The Power of High-Cadence Execution</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-950">
              Workday Ambassador Shortlist, YUKTI NIR & 10+ Hackathons
            </h3>
            <p>
              Building software in isolation breeds complacency. I actively put my skills to the test by competing in 
              <strong> 10+ hackathons</strong>, where shipping working prototypes under 24- to 36-hour deadlines taught me how to triage technical debt, 
              write robust APIs, and design intuitive interfaces rapidly.
            </p>
            <p>
              Following my participation at Workday's first offline developer meetup at Deloitte University Hyderabad, 
              I was shortlisted for the prestigious <strong>Workday Student Ambassador</strong> program. 
              As a <strong>GeeksforGeeks Campus Mantri</strong> and submitter to the Government of India's 
              <strong> YUKTI National Innovation Repository (NIR)</strong>, I bridge peer developers to opportunities.
            </p>
          </div>

          {/* Chapter 4: What I'm Exploring Next */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-zinc-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>04. What I Am Exploring Next</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Deterministic AI Workflows, Microservices & Deep Vector Pipelines
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              I am currently advancing EventBridge's geospatial ride-sharing features for inter-college hackathons, 
              scaling TeamNexus's native Android integration, and exploring agentic workflows that autonomously curate campus events 
              while deepening my foundations in low-latency backend systems and high-precision RAG architectures.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
