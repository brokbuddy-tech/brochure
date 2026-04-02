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
    <section className="py-24 px-6 bg-[#F4F7F9] text-[#263238] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-[#003366]">Your workflow is <span className="text-[#FF8A00]">fragmented.</span></h2>
          <p className="text-lg text-slate-600 font-body">The modern brokerage is more complex than ever, yet most agents are still using tools from the last decade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="reveal aspect-square p-10 rounded-full bg-white border border-slate-200 hover:border-[#FF8A00]/30 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                <prob.icon className="w-6 h-6 text-[#FF8A00]" />
              </div>
              <h3 className="text-lg md:text-xl font-headline mb-3 text-[#003366] px-4">{prob.title}</h3>
              <p className="text-xs md:text-sm font-body text-slate-600 leading-relaxed px-6">{prob.desc}</p>
            </div>
          ))}
          
          <div className="aspect-square p-10 rounded-full bg-white border border-slate-200 flex flex-col items-center justify-center text-center reveal shadow-sm">
            <p className="text-xl md:text-2xl font-headline italic mb-4 text-[#4A90E2] px-6">Does this sound like your agency?</p>
            <div className="w-12 h-[1px] bg-slate-200" />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A00]/5 blur-[150px] -z-10" />
    </section>
  );
}