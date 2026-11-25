import React, { useState } from 'react';
import { engineeringProjects } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Terminal, 
  Cpu,
  Smartphone,
  Server,
  Sparkles
} from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems (5)' },
    { id: 'ai', label: 'Applied AI & RAG' },
    { id: 'mobile', label: 'Android & Mobile OS' },
    { id: 'cloud', label: 'Cloud Automation' },
    { id: 'fullstack', label: 'Full-Stack & Product' },
  ];

  const filteredProjects = filter === 'all' 
    ? engineeringProjects 
    : engineeringProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-zinc-50/70 border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Selected Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Engineered Systems & Applied AI
            </h2>
            <p className="text-base text-zinc-600">
              Production systems, contest prototypes, and open-source architectures spanning 
              autonomous data pipelines, Android OS update intelligence, and RAG retrieval.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-zinc-200 shadow-subtle">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl border border-zinc-200/90 shadow-card overflow-hidden transition-all hover:border-zinc-300"
            >
              
              {/* Project Card Header */}
              <div className="p-6 md:p-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-50/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-zinc-200/80 text-zinc-700 font-semibold">
                      PROJECT 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                    {project.name}
                  </h3>
                  <div className="text-xs text-zinc-500 font-mono">
                    Role: <span className="text-zinc-800 font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Repository / Live link buttons */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold shadow-subtle transition-all"
                    >
                      <Github className="w-4 h-4 text-zinc-700" />
                      <span>View Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-subtle transition-all"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 md:p-8 space-y-7">
                
                {/* Summary */}
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1.5">
                    <div className="text-xs font-mono uppercase text-zinc-500">Problem Statement</div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1.5">
                    <div className="text-xs font-mono uppercase text-zinc-500">Engineered Solution</div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Workflow Pipeline Visualization */}
                {project.workflowSteps && project.workflowSteps.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Pipeline Architecture & Execution Flow</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                      {project.workflowSteps.map((step) => (
                        <div 
                          key={step.step}
                          className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between space-y-2 relative"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs font-bold text-zinc-400">{step.step}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                            </div>
                            <div className="text-xs font-bold text-zinc-900 mt-1">{step.title}</div>
                          </div>
                          <div className="text-[11px] text-zinc-600 leading-relaxed">{step.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Decisions & Learnings */}
                {project.engineeringLearnings && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                      Engineering Decisions & Takeaways
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.engineeringLearnings.map((learning, idx) => (
                        <div 
                          key={idx}
                          className="p-3.5 rounded-lg bg-zinc-50/80 border border-zinc-200/70 text-xs text-zinc-700 leading-relaxed flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 mr-2 uppercase">Stack:</span>
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-800 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
