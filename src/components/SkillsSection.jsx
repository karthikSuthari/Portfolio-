import React from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Terminal, Database, Cpu, Globe, Server, Code } from 'lucide-react';

export default function SkillsSection() {
  const iconMap = [Code, Server, Cpu, Database, Terminal, Globe];

  return (
    <section id="skills" className="py-20 bg-zinc-50/70 border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Technical Profile & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Engineered Capabilities
          </h2>
          <p className="text-base text-zinc-600">
            Grounded technical skills supported by practical production deployments, 
            academic foundations, and competitive hackathon builds. No arbitrary percentage bars.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((group, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div 
                key={group.category}
                className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-card flex flex-col justify-between space-y-4 hover:border-zinc-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase">
                      Category 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-zinc-950 text-base">
                      {group.category}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="pt-2 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
