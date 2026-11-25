import React from 'react';
import { personalInfo, metrics } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Code, 
  Mail, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Layers,
  CheckCircle2,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Hero({ onOpenConnect }) {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 border-b border-zinc-200/80 overflow-hidden subtle-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Proof Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-subtle mb-6 text-xs text-zinc-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-zinc-500">CMR Engineering College · CSE</span>
          <span className="text-zinc-300">|</span>
          <span className="font-medium text-zinc-900">Founder of EventBridge.Tech</span>
          <span className="text-zinc-300">|</span>
          <span className="font-semibold text-emerald-700 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Workday Ambassador Shortlist
          </span>
        </div>

        {/* Main Grid: Copy on Left, Portrait & Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Headline */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Personal Engineering Dossier
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
                Engineering student networks, mobile systems, and applied AI workflows.
              </h1>
            </div>

            {/* Sub-Headline / Supporting copy */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
              I am a Computer Science Engineering student and product builder in Hyderabad. 
              As the founder of <span className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4">EventBridge</span> and 
              shortlisted <span className="font-semibold text-zinc-900">Workday Student Ambassador</span>, 
              I leverage AI as a 10x velocity multiplier while owning the architecture—building full-stack web platforms, 
              native Android apps (Jetpack Compose), and semantic vector engines (<span className="font-mono text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800">pgvector</span> + embeddings).
            </p>

            {/* Key Differentiators / Value Proposition Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Workday Ambassador Shortlist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                1× Hackathon Winner (10+ Competed)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                YUKTI NIR Nominee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                GeeksforGeeks Campus Mantri
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                B.E. CSE CGPA: 8.36 / 10
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#eventbridge"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-sm font-semibold transition-all shadow-card hover:shadow-elevated hover:-translate-y-0.5"
              >
                <span>Explore EventBridge</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Karthik_Suthari_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-all shadow-subtle hover:border-zinc-400"
              >
                <FileText className="w-4 h-4 text-zinc-600" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenConnect}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 text-sm font-medium transition-colors"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-4 border-t border-zinc-200/70 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="uppercase tracking-wider text-[11px] text-zinc-400">Profiles:</span>
              
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-950 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github/{personalInfo.githubUsername}</span>
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-950 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin/karthik-suthari</span>
              </a>

              <a 
                href={personalInfo.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-950 hover:underline"
              >
                <Code className="w-3.5 h-3.5" />
                <span>leetcode/{personalInfo.leetcodeUsername}</span>
              </a>

              <span className="inline-flex items-center gap-1 text-zinc-600">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Hyderabad, India</span>
              </span>
            </div>

          </div>

          {/* Right Column: Portrait Card & Verified Proof Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              
              {/* Background ambient card border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-zinc-200 via-zinc-100 to-transparent opacity-80 -z-10"></div>
              
              <div className="bg-white rounded-2xl p-4 shadow-card border border-zinc-200 space-y-4">
                
                {/* Photo container */}
                <div className="relative aspect-[4/4.6] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100">
                  <img 
                    src={personalInfo.portrait} 
                    alt="Karthik Suthari — Student Founder & Computer Science Engineer" 
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/85 backdrop-blur-md rounded-lg p-2.5 text-white border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-tight">Karthik Suthari</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">Hyderabad · CSE</span>
                    </div>
                    <div className="text-[11px] text-zinc-300 font-mono mt-0.5 truncate">
                      Founder · EventBridge.Tech
                    </div>
                  </div>
                </div>

                {/* Evidence Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-center">
                    <div className="text-base font-bold text-zinc-900 font-mono">8.36</div>
                    <div className="text-[10px] text-zinc-500 font-mono">B.E. CGPA</div>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-center">
                    <div className="text-base font-bold text-zinc-900 font-mono">97.4%</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Class XII</div>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-center">
                    <div className="text-base font-bold text-zinc-900 font-mono">10+</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Hackathons</div>
                  </div>
                </div>

                {/* Micro tech banner */}
                <div className="px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-between text-[11px] text-zinc-600 font-mono">
                  <span>Stack Focus:</span>
                  <span className="font-semibold text-zinc-900">React · Kotlin · Python · pgvector</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
