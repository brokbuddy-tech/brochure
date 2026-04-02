"use client";

import React from 'react';
import Image from 'next/image';
import { AlertCircle, Layers, Clock, Database, HelpCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PROBLEMS = [
  {
    icon: Layers,
    title: "Listings scattered across portals",
    desc: "Managing multiple logins and fragmented data wastes hours of selling time."
  },
  {
    icon: AlertCircle,
    title: "No clear deal visibility",
    desc: "Losing track of contract phases leads to missed deadlines and stressed clients."
  },
  {
    icon: Clock,
    title: "Manual follow-ups",
    desc: "Leads slip through the cracks when you rely on memory or sticky notes."
  },
  {
    icon: Database,
    title: "No centralized data",
    desc: "Your agency's intelligence is buried in spreadsheets and legacy software."
  },
  {
    icon: HelpCircle,
    title: "Decisions based on guesswork",
    desc: "Scaling without granular data is like navigating without a map."
  }
];

export function BrochureProblem() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'problem-bg');

  return (
    <section className="py-24 px-6 bg-white text-[#263238] relative overflow-hidden min-h-[900px] flex flex-col items-center justify-center">
      {/* Bright Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            priority
            className="object-cover opacity-90"
            data-ai-hint={bgImage.imageHint}
          />
          {/* Subtle vignette for edge transition only */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl mb-20 text-center mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-[#003366] drop-shadow-sm">
            Your workflow is <span className="text-[#FF8A00]">fragmented.</span>
          </h2>
          <p className="text-lg text-[#263238] font-body font-semibold drop-shadow-sm">
            The modern brokerage is complex, yet most agents are still using tools from the last decade.
          </p>
        </div>

        {/* Desktop Orbital Layout */}
        <div className="hidden lg:block relative h-[700px] w-full max-w-[1000px] mx-auto">
          {/* Central Anchor Card (Glass Morph) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-[200px] h-[200px] rounded-full bg-white/30 backdrop-blur-2xl border-2 border-white/40 shadow-2xl flex flex-col items-center justify-center text-center p-8 transition-transform duration-700 hover:scale-105">
              <p className="text-lg md:text-xl font-headline italic text-[#4A90E2] leading-tight drop-shadow-sm">
                Does this sound like your agency?
              </p>
              <div className="w-10 h-[2px] bg-[#4A90E2]/30 mt-4" />
            </div>
          </div>

          {/* Rotating Container */}
          <div className="absolute inset-0 animate-spin-slow">
            {PROBLEMS.map((prob, idx) => {
              const angle = (idx * 360) / PROBLEMS.length;
              return (
                <div 
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-340px)`
                  }}
                >
                  {/* Layer 1: Counter-rotate the global orbital spin */}
                  <div className="animate-counter-spin-slow">
                    {/* Layer 2: Counter-rotate the static initial angle offset to keep text upright */}
                    <div 
                      style={{ transform: `rotate(-${angle}deg)` }}
                      className="w-[280px] h-[280px] p-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-[#FF8A00]/60 shadow-2xl transition-all duration-500 group flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#FF8A00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <prob.icon className="w-8 h-8 text-[#FF8A00]" />
                      </div>
                      <h3 className="text-xl font-headline mb-4 text-[#003366] leading-tight px-2">{prob.title}</h3>
                      <p className="text-sm font-body text-[#263238] leading-relaxed px-4 font-medium">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout (Glass Morph) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center mb-6">
                <prob.icon className="w-7 h-7 text-[#FF8A00]" />
              </div>
              <h3 className="text-2xl font-headline mb-4 text-[#003366]">{prob.title}</h3>
              <p className="text-base font-body text-[#263238] leading-relaxed font-medium">{prob.desc}</p>
            </div>
          ))}
          
          <div className="p-10 rounded-3xl bg-white/30 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center text-center shadow-xl md:col-span-2">
            <p className="text-2xl font-headline italic text-[#4A90E2]">Does this sound like your agency?</p>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-counter-spin-slow {
          animation: counter-spin-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
}