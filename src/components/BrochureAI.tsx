"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const AI_CAPS = [
  "Listing description generation",
  "Email summarization & smart replies",
  "Lead Quality Scoring (LQS)",
  "Automated insight generation",
  "Market trend prediction"
];

export function BrochureAI() {
  const [isAiActive, setIsAiActive] = useState(false);

  return (
    <section className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>AI Differentiation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline leading-tight">
            Powered by Brokers. <br />
            <span className="text-indigo-400 italic">Evolved by AI.</span>
          </h2>
          <p className="text-lg text-white/50 font-body leading-relaxed max-w-xl">
            We haven't just added a chatbot. We've built an intelligent engine that understands the nuances of the Australian real estate market.
          </p>
          
          <ul className="space-y-4">
            {AI_CAPS.map((cap, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-white/70 font-body">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <div className="aspect-square bg-white/[0.03] rounded-[3rem] border border-white/10 p-8 flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Standard Workflow</span>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-white/40 italic">
                "Hi, checking in on the property at 25 Bondi. Any interest?"
              </div>
            </div>

            <div className="flex justify-center py-2">
              <Button 
                onClick={() => setIsAiActive(!isAiActive)}
                className="rounded-full bg-indigo-600 hover:bg-indigo-500 px-8 h-12 shadow-2xl shadow-indigo-500/20"
              >
                {isAiActive ? "Reset" : "Transform with AI"}
              </Button>
            </div>

            <div className={`space-y-2 transition-all duration-700 ${isAiActive ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold flex items-center">
                <Sparkles className="w-3 h-3 mr-2" /> BrokBuddy AI Output
              </span>
              <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/30 text-xs text-white/80 leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                "Our analysis shows this lead is an 'Elite' match based on their budget (AUD 1.5M) and urgency. <br/><br/>
                <b>Suggested Reply:</b> 'Hi John, the median price in Bondi just rose 4% this quarter. Given your interest in the beachside pocket, would you like a breakdown of recent off-market sales in that block?'"
              </div>
            </div>
            
            {/* Background glow */}
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/20 blur-[100px] transition-opacity duration-700 ${isAiActive ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
