import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Github, 
  Linkedin,
  Sparkles,
  Send
} from 'lucide-react';

export default function Navbar({ onOpenConnect }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EventBridge', href: '#eventbridge' },
    { name: 'Projects', href: '#projects' },
    { name: 'Founder Story', href: '#story' },
    { name: 'Leadership & Proof', href: '#community' },
    { name: 'Technical Stack', href: '#skills' },
    { name: 'Milestones', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-zinc-900 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-zinc-400">STATUS:</span>
            <span className="font-medium text-zinc-200 truncate">{personalInfo.status}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-400 font-mono text-[11px]">
            <span>MEDCHAL, HYDERABAD</span>
            <span>•</span>
            <span>B.E. CSE (CGPA: 8.36)</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-subtle py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-sm group-hover:bg-zinc-800 transition-colors">
              KS
            </div>
            <div>
              <div className="font-semibold text-zinc-900 tracking-tight text-sm group-hover:text-zinc-600 transition-colors">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono flex items-center gap-1">
                <span>Founder @ EventBridge</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.resumePath}
              download="Karthik_Suthari_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 text-xs font-medium transition-all shadow-subtle hover:border-zinc-300"
              title="Download official resume PDF (108 KB)"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-500" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={onOpenConnect}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-medium transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-zinc-950/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-elevated p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-xs">
                    KS
                  </div>
                  <span className="font-semibold text-sm text-zinc-900">Navigation</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex flex-col gap-2">
              <a
                href={personalInfo.resumePath}
                download="Karthik_Suthari_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-zinc-200 text-zinc-800 text-xs font-medium hover:bg-zinc-50"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConnect();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800"
              >
                <Send className="w-4 h-4" />
                <span>Contact Karthik</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
