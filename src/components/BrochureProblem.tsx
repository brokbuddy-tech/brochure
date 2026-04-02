"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutGrid, 
  EyeOff, 
  MessageSquareOff, 
  BarChart,
  ArrowRight
} from 'lucide-react';

const PROBLEMS = [
  {
    icon: LayoutGrid,
    title: "Listings scattered across platforms",
    desc: "You’re managing the same property in multiple places."
  },
  {
    icon: EyeOff,
    title: "No clear deal visibility",
    desc: "You don’t know which deals are moving and which are stuck."
  },
  {
    icon: MessageSquareOff,
    title: "Follow-ups slip through the cracks",
    desc: "Missed calls, missed messages, missed opportunities."
  },
  {
    icon: BarChart,
    title: "Decisions without real data",
    desc: "You’re guessing performance instead of tracking it."
  }
];

export function BrochureProblem() {
  return (
    <section className="py-24 px-6 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-20 text-center mx-auto reveal">
          <h2 className="text-4xl md:text-6xl font-headline mb-6 text-[#111827] tracking-tight">
            Your brokerage is running on <br />
            <span className="text-slate-400">disconnected systems.</span>
          </h2>
          <p className="text-xl text-slate-500 font-body">
            Multiple tools. No visibility. Slower deals.
          </p>
        </div>

        {/* Clean Pain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto mb-20">
          {PROBLEMS.map((prob, idx) => (
            <div 
              key={idx} 
              className="p-7 bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 group flex flex-col min-h-[220px]"
            >
              <div className="mb-6 flex items-center justify-start">
                <prob.icon className="w-6 h-6 text-[#374151]" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-headline text-[#111827]">{prob.title}</h3>
                <p className="text-slate-500 font-body leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center space-y-8 reveal">
          <p className="text-2xl font-headline italic text-primary">
            This is exactly what BrokBuddy fixes.
          </p>
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-semibold group shadow-lg">
            See How It Works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
