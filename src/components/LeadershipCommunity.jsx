import React from 'react';
import { leadershipAndCommunity } from '../data/portfolioData';
import { 
  Camera, 
  MapPin, 
  Users, 
  Award, 
  Building2, 
  Terminal, 
  Sparkles,
  Maximize2,
  CheckCircle2
} from 'lucide-react';

export default function LeadershipCommunity({ onSelectImage }) {
  return (
    <section id="community" className="py-20 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Ecosystem Immersion & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Leadership, Community & Ground Truth
          </h2>
          <p className="text-base text-zinc-600">
            Active leadership as a GeeksforGeeks Campus Mantri, innovation submissions to the Government of India's YUKTI repository, 
            10+ hackathons, and verified presence across major developer summits.
          </p>
        </div>

        {/* Visual Proof Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipAndCommunity.map((item) => (
            <div 
              key={item.id}
              className="bg-zinc-50/70 rounded-2xl border border-zinc-200/90 shadow-card overflow-hidden flex flex-col justify-between group hover:border-zinc-300 transition-all"
            >
              <div>
                {/* Photo or Header Banner */}
                {item.image ? (
                  <div 
                    className="relative aspect-[16/10] bg-zinc-900 cursor-pointer overflow-hidden"
                    onClick={() => onSelectImage(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-950/80 text-white backdrop-blur-md border border-white/10 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-zinc-950/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-200/80 text-zinc-800 font-semibold">
                      {item.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                )}

                {/* Content Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-bold text-zinc-950 text-base group-hover:text-zinc-700 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-zinc-800 font-mono">
                    Role: {item.role}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 border-t border-zinc-200/60 bg-white/60 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>{item.category}</span>
                {item.image && (
                  <button 
                    onClick={() => onSelectImage(item)}
                    className="inline-flex items-center gap-1 text-zinc-900 font-semibold hover:underline"
                  >
                    <span>View Photo</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
