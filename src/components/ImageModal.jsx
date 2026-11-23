import React from 'react';
import { X, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

export default function ImageModal({ image, title, category, description, location, badge, onClose }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/60">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-200/70 text-zinc-700 font-medium">
              {category || 'Community Evidence'}
            </span>
            {badge && (
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                {badge}
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview */}
        <div className="relative bg-zinc-950 flex items-center justify-center overflow-hidden max-h-[60vh]">
          <img 
            src={image} 
            alt={title} 
            className="max-h-[60vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Content Details */}
        <div className="p-6 bg-white overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
              {title}
            </h3>
            {location && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
