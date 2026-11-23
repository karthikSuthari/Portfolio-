import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventBridgeSpotlight from './components/EventBridgeSpotlight';
import ProjectsSection from './components/ProjectsSection';
import FounderStory from './components/FounderStory';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import LeadershipCommunity from './components/LeadershipCommunity';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ConnectModal from './components/ConnectModal';

export default function App() {
  const [selectedImageItem, setSelectedImageItem] = useState(null);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenConnect={() => setConnectModalOpen(true)} />

        {/* 2. Flagship Founder Case Study: EventBridge */}
        <EventBridgeSpotlight />

        {/* 3. Selected Engineering Projects: OppFlux & Health Insurance RAG */}
        <ProjectsSection />

        {/* 4. Founder Story: Why I Build */}
        <FounderStory />

        {/* 5. Leadership, Community & Photographic Proof */}
        <LeadershipCommunity onSelectImage={(item) => setSelectedImageItem(item)} />

        {/* 6. Engineering Philosophy: How I Think & Build */}
        <EngineeringPhilosophy />

        {/* 7. Technical Skills & Systems Profile */}
        <SkillsSection />

        {/* 8. Trajectory & Milestones Timeline */}
        <TimelineSection />

        {/* 9. Contact & Collaboration Hub */}
        <ContactSection onOpenConnect={() => setConnectModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Image Modal */}
      {selectedImageItem && (
        <ImageModal 
          image={selectedImageItem.image}
          title={selectedImageItem.title}
          category={selectedImageItem.category}
          description={selectedImageItem.description}
          location={selectedImageItem.location}
          badge={selectedImageItem.badge}
          onClose={() => setSelectedImageItem(null)}
        />
      )}

      {/* Interactive Connect & Inquiries Modal */}
      <ConnectModal 
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </div>
  );
}
