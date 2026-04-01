"use client";

import React from 'react';
import { PlusCircle, FileText, Share2, Target, MoveUpRight, BarChart } from 'lucide-react';

const STEPS = [
  {
    icon: PlusCircle,
    title: "Add Property",
    desc: "Single-entry data input."
  },
  {
    icon: FileText,
    title: "Auto Listing",
    desc: "AI generates compelling copy."
  },
  {
    icon: Share2,
    title: "Push to Portals",
    desc: "Domain & REA Group sync."
  },
  {
    icon: Target,
    title: "Leads Tracked",
    desc: "Centralized enquiry pool."
  },
  {
    icon: MoveUpRight,
    title: "Pipeline Updated",
    desc: "Visual deal stage progression."
  },
  {
    icon: BarChart,
    title: "Insights Generated",
    desc: "Automated performance report."
  }
];

export function BrochureSystemFlow() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-black">How your business runs on <span className="text-indigo-600">BrokBuddy</span></h2>
          <p className="text-lg text-black/50 font-body max-w-2xl mx-auto">A seamless, automated engine from first listing to final settlement.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 -z-10" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center relative group">
                  <div className="absolute inset-0 rounded-full bg-indigo-600 scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
                  <step.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-headline text-lg mb-2 text-black">{step.title}</h4>
                  <p className="text-xs font-body text-black/40 uppercase tracking-widest">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
