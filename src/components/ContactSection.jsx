import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  Send, 
  Github, 
  Linkedin, 
  Code,
  ArrowRight
} from 'lucide-react';

export default function ContactSection({ onOpenConnect }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50/70 border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Let's Build Something Meaningful
          </h2>
          <p className="text-base text-zinc-600">
            Whether you are evaluating candidates for a prestigious fellowship, seeking a proactive product builder 
            for your startup team, or looking to collaborate on applied AI systems, my inbox is open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Outreach Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-card space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Direct Inquiries</div>
              <h3 className="text-xl font-bold text-zinc-900">
                Direct Contact Channel
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                I respond directly to professional emails regarding fellowships, engineering roles, and startup partnerships.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Primary Email Address</div>
                  <div className="text-sm font-bold text-zinc-900 font-mono truncate">{personalInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={copyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    copied 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                  title="Open mail client"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Direct Phone</div>
                <div className="text-sm font-bold text-zinc-900 font-mono">{personalInfo.phone}</div>
                <div className="text-[11px] text-zinc-500 font-mono">Available via Call & WhatsApp</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Geographic Hub</div>
                <div className="text-sm font-bold text-zinc-900 font-mono">{personalInfo.location}</div>
                <div className="text-[11px] text-zinc-500 font-mono">Open to In-Person & Remote</div>
              </div>
            </div>

            {/* Structured Inquiry CTA button */}
            <div className="pt-2">
              <button
                onClick={onOpenConnect}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-card hover:shadow-elevated transition-all"
              >
                <span>Compose Tailored Inquiry (Fellowship / Startup / Collab)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Resume & Quick Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Download Official Resume Card */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">Official Engineering Resume</h4>
                  <p className="text-[11px] text-zinc-500 font-mono">Format: Verified PDF (108 KB)</p>
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                Contains complete academic scores (CGPA: 8.36, Intermediate: 97.4%), verified project breakdowns, 
                and institutional leadership records.
              </p>

              <a
                href={personalInfo.resumePath}
                download="Karthik_Suthari_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-semibold shadow-subtle transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-600" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Verified Public Identity Handles */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-card space-y-3">
              <div className="text-xs font-mono uppercase text-zinc-400">Verified Profiles</div>
              
              <div className="space-y-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-zinc-700" />
                    <span className="text-xs font-mono font-medium text-zinc-800">GitHub: karthikSuthari</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-zinc-700" />
                    <span className="text-xs font-mono font-medium text-zinc-800">LinkedIn: Karthik Suthari</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Code className="w-4 h-4 text-zinc-700" />
                    <span className="text-xs font-mono font-medium text-zinc-800">LeetCode: Suthari_Karthik</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
