
"use client";

import React from 'react';
import { AlertCircle, Layers, Clock, Database, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  return (
    <section className="py-24 px-6 bg-[#F4F7F9] text-[#263238] relative overflow-hidden min-h-[900px] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl mb-20 text-center mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-[#003366]">
            Your workflow is <span className="text-[#FF8A00]">fragmented.</span>
          </h2>
          <p className="text-lg text-[#263238]/70 font-body">
            The modern brokerage is complex, yet most agents are still using tools from the last decade.
          </p>
        </div>

        {/* Desktop Orbital Layout */}
        <div className="hidden lg:block relative h-[700px] w-full max-w-[1000px] mx-auto">
          {/* Central Anchor Card - Compact Size */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-[220px] h-[220px] rounded-full bg-white border-2 border-[#4A90E2]/20 shadow-2xl flex flex-col items-center justify-center text-center p-8 transition-transform duration-700 hover:scale-105">
              <p className="text-xl md:text-2xl font-headline italic text-[#4A90E2] leading-tight">
                Does this sound like your agency?
              </p>
              <div className="w-10 h-[2px] bg-[#4A90E2]/20 mt-4" />
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
                    {/* Layer 2: Counter-rotate the static initial angle offset */}
                    <div 
                      style={{ transform: `rotate(-${angle}deg)` }}
                      className="w-[280px] h-[280px] p-8 rounded-full bg-white border border-[#263238]/10 hover:border-[#FF8A00]/40 shadow-xl transition-all duration-500 group flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <prob.icon className="w-7 h-7 text-[#FF8A00]" />
                      </div>
                      <h3 className="text-lg font-headline mb-3 text-[#003366] leading-tight px-2">{prob.title}</h3>
                      <p className="text-xs font-body text-[#263238]/60 leading-relaxed px-4">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-3xl bg-white border border-[#263238]/10 shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center mb-6">
                <prob.icon className="w-6 h-6 text-[#FF8A00]" />
              </div>
              <h3 className="text-xl font-headline mb-3 text-[#003366]">{prob.title}</h3>
              <p className="text-sm font-body text-[#263238]/60 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
          
          <div className="p-10 rounded-3xl bg-white border-2 border-[#4A90E2]/20 flex flex-col items-center justify-center text-center shadow-md md:col-span-2">
            <p className="text-2xl font-headline italic text-[#4A90E2]">Does this sound like your agency?</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A00]/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A90E2]/5 blur-[150px] -z-10" />

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
          animation: spin-slow 50s linear infinite;
        }
        .animate-counter-spin-slow {
          animation: counter-spin-slow 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
