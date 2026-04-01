"use client";

import React from 'react';
import { AlertCircle, Layers, Clock, Database, HelpCircle } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Layers,
    title: "Listings scattered across portals",
    desc: "Managing multiple logins and fragmented data wastes hours of your prime selling time."
  },
  {
    icon: AlertCircle,
    title: "No clear deal visibility",
    desc: "Losing track of contract phases leads to missed deadlines and stressed clients."
  },
  {
    icon: Clock,
    title: "Manual follow-ups",
    desc: "Leads slip through the cracks when you rely on memory or sticky notes for outreach."
  },
  {
    icon: Database,
    title: "No centralized data",
    desc: "Your agency's intelligence is buried in separate spreadsheets and legacy software."
  },
  {
    icon: HelpCircle,
    title: "Decisions based on guesswork",
    desc: "Scaling without granular data is like navigating a high-stakes market without a map."
  }
];

export function BrochureProblem() {
  return (
    <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6">Real Estate Operations Are <span className="text-red-500">Broken</span></h2>
          <p className="text-lg text-white/50 font-body">The modern brokerage is more complex than ever, yet most agents are still using tools from the last decade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="reveal p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <prob.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-headline mb-4 text-white/90">{prob.title}</h3>
              <p className="text-sm font-body text-white/50 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
          
          <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex flex-col items-center justify-center text-center reveal">
            <p className="text-2xl font-headline italic mb-4">Does this sound like your agency?</p>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 blur-[150px] -z-10" />
    </section>
  );
}
