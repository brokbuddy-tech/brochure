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
    <section className="py-24 px-6 bg-background text-foreground relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>AI Differentiation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline leading-tight text-primary">
            Powered by Brokers. <br />
            <span className="text-secondary italic">Evolved by AI.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
            We haven't just added a chatbot. We've built an intelligent engine that understands the nuances of the Australian real estate market.
          </p>
          
          <ul className="space-y-4">
            {AI_CAPS.map((cap, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-foreground/80 font-body">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <div className="aspect-square bg-muted rounded-[3rem] border border-border/10 p-8 flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Standard Workflow</span>
              <div className="p-4 bg-background rounded-xl border border-border/10 text-xs text-muted-foreground italic shadow-sm">
                "Hi, checking in on the property at 25 Bondi. Any interest?"
              </div>
            </div>

            <div className="flex justify-center py-2">
              <Button 
                onClick={() => setIsAiActive(!isAiActive)}
                className="rounded-full bg-accent hover:bg-accent/90 px-8 h-12 shadow-xl shadow-accent/20"
              >
                {isAiActive ? "Reset" : "Transform with AI"}
              </Button>
            </div>

            <div className={`space-y-2 transition-all duration-700 ${isAiActive ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-bold flex items-center">
                <Sparkles className="w-3 h-3 mr-2" /> BrokBuddy AI Output
              </span>
              <div className="p-6 bg-background rounded-xl border border-secondary/20 text-xs text-foreground/80 leading-relaxed shadow-lg animate-in fade-in slide-in-from-bottom-2">
                "Our analysis shows this lead is an <b className="text-secondary">'Elite'</b> match based on their budget (AUD 1.5M) and urgency. <br/><br/>
                <b className="text-primary">Suggested Reply:</b> 'Hi John, the median price in Bondi just rose 4% this quarter. Given your interest in the beachside pocket, would you like a breakdown of recent off-market sales in that block?'"
              </div>
            </div>
            
            {/* Background glow */}
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 blur-[100px] transition-opacity duration-700 ${isAiActive ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
    </section>
  );
}