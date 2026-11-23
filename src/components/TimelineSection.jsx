import React from 'react';
import { timelineMilestones } from '../data/portfolioData';
import { GraduationCap, Rocket, Trophy, Calendar, Award, GitBranch } from 'lucide-react';

export default function TimelineSection() {
  const getIcon = (type) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'startup': return Rocket;
      case 'hackathon': return Trophy;
      case 'leadership': return Award;
      default: return GitBranch;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Trajectory & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Milestones & Key Initiatives
          </h2>
          <p className="text-base text-zinc-600">
            A record of startup execution, competitive hackathons, academic excellence, and ecosystem participation.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-200 ml-4 sm:ml-6 space-y-10">
          {timelineMilestones.map((item, index) => {
            const Icon = getIcon(item.type);
            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                
                {/* Dot / Icon Node */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Milestone Card */}
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-subtle space-y-2 group-hover:border-zinc-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-xs font-bold text-zinc-900 px-2.5 py-0.5 rounded bg-zinc-200/70 inline-block w-fit">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
