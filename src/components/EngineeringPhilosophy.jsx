import React from 'react';
import { workingPhilosophy } from '../data/portfolioData';
import { Terminal, Shield, Zap, Users } from 'lucide-react';

export default function EngineeringPhilosophy() {
  const icons = [Zap, Shield, Terminal, Users];

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            How I Think & Build
          </h2>
          <p className="text-base text-zinc-600">
            Pragmatic mental models derived from building EventBridge, automating data pipelines, 
            and competing across 10+ sprint hackathons.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingPhilosophy.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={item.number}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200/90 shadow-card space-y-4 hover:border-zinc-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    TENET {item.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
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
