import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Copy, Check, Mail, Phone, MapPin, Send, ExternalLink, ArrowRight } from 'lucide-react';

export default function ConnectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('fellowship');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const templates = {
    fellowship: "Hi Karthik, I'm reaching out from [Fellowship/Program Name]. We reviewed your work on EventBridge and your technical background, and we'd like to discuss an opportunity...",
    startup: "Hi Karthik, I run/recruit for [Startup/Company Name]. We have an opening in backend / applied AI / product engineering and were impressed by your project execution...",
    collab: "Hi Karthik, I'm building a project in [Domain] and would love to collaborate or invite you to compete together at an upcoming hackathon...",
    mentorship: "Hi Karthik, great to connect. I'd love to chat about your experience scaling EventBridge and exploring applied AI architectures..."
  };

  const handleSelectTemplate = (type) => {
    setInquiryType(type);
    setMessage(templates[type]);
  };

  const handleSubmitMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType.toUpperCase()}] Opportunity / Connect with Karthik Suthari`);
    const bodyText = encodeURIComponent(
      `Name: ${senderName || 'Not specified'}\nOrganization: ${senderOrg || 'Not specified'}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message || templates[inquiryType]}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${bodyText}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/80">
          <div>
            <h3 className="font-semibold text-zinc-900 text-base">Let's Connect & Collaborate</h3>
            <p className="text-xs text-zinc-500 font-mono">Direct Channel to Karthik Suthari</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Copy Card */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 truncate">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-xs text-zinc-500 font-mono">DIRECT INBOX</div>
                <div className="text-sm font-semibold text-zinc-900 font-mono truncate">{personalInfo.email}</div>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Inquiry Type Selector */}
          <div>
            <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Select Discussion Context
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'fellowship', label: 'Fellowship' },
                { id: 'startup', label: 'Startup / Role' },
                { id: 'collab', label: 'Collaborate' },
                { id: 'mentorship', label: 'Chat / Mentor' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectTemplate(opt.id)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center transition-all border ${
                    inquiryType === opt.id
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmitMailto} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-zinc-500 mb-1">YOUR NAME</label>
                <input 
                  type="text" 
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sarah Chen"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-zinc-500 mb-1">ORGANIZATION / PROGRAM</label>
                <input 
                  type="text" 
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  placeholder="e.g. Neo / Sequoia / Acme Corp"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-500 mb-1">MESSAGE DRAFT</label>
              <textarea 
                rows="4"
                value={message || templates[inquiryType]}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 font-sans"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 font-mono">
                Opens your default email client
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold shadow-sm transition-all"
              >
                <span>Send via Email</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Direct channels info */}
          <div className="pt-4 border-t border-zinc-100 grid grid-cols-2 gap-3 text-xs text-zinc-600 font-mono">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Medchal, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
