import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Terminal, Code, Cpu, Lightbulb, Compass, ArrowUpRight } from 'lucide-react';

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
            Why I Build: From Campus Friction to Scaled Code
          </h2>
          <p className="text-base text-zinc-600">
            An authentic look at how my work as a student engineer evolved into founding EventBridge, 
            building automated data infrastructure, and competing in 10+ hackathons.
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
              I realized that solving student discovery wasn't a social media problem; it was an information retrieval and networking problem.
            </p>
          </div>

          {/* Chapter 2: The Evolution */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span>02. Evolution from Scripting to Systems Architecture</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-950">
              Moving Beyond Superficial Clones
            </h3>
            <p>
              Early in my computer science journey, I chose to avoid building generic clones of existing apps. 
              Instead, I focused on foundational problem solving: writing web scrapers with Puppeteer to aggregate announcements, 
              deploying cron daemons on an Oracle Cloud VM with PM2, and integrating Discord bots for human-in-the-loop review.
            </p>
            <p>
              This evolved into <strong>OppFlux</strong>, which gave me hands-on experience in scheduling, multi-layer duplicate detection, 
              and schema extraction with LLMs (Gemini & Groq). When building <strong>EventBridge</strong>, 
              I tackled real engineering trade-offs: replacing Firestore with Supabase PostgreSQL to support relational integrity, 
              authoring a client-side document compatibility layer to avoid breaking the frontend during migration, 
              and implementing <code className="font-mono text-xs bg-zinc-200/80 px-1 py-0.5 rounded text-zinc-900">pgvector</code> for resume-based semantic matchmaking.
            </p>
          </div>

          {/* Chapter 3: Leadership & Ground Truth */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <span>03. The Power of High-Cadence Execution</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-950">
              10+ Hackathons, National Innovation Repository & Community
            </h3>
            <p>
              Building software in isolation breeds complacency. I actively put my skills to the test by competing in 
              <strong> 10+ hackathons</strong>, where shipping working prototypes under 24- to 36-hour deadlines taught me how to triage technical debt, 
              write robust APIs, and design intuitive interfaces rapidly.
            </p>
            <p>
              As a <strong>GeeksforGeeks Campus Mantri</strong> and submitter to the Government of India's 
              <strong> YUKTI National Innovation Repository (NIR)</strong>, I bridge peer developers to opportunities. 
              Whether attending Google Cloud's <em>Build with Gemini</em> summit, Workday's first offline developer meetup at Deloitte University, 
              or competing in technical quests, I constantly immerse myself in the software ecosystem to learn how enterprise systems scale.
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
              exploring agentic workflows that autonomously curate campus events, and deepening my foundations in 
              low-latency backend systems, distributed databases, and high-precision RAG architectures.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
