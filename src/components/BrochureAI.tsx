
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle2, Loader2, ArrowRight, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AI_OUTCOMES = [
  "Generate high-converting listings instantly",
  "Summarize and reply to client emails",
  "Score leads based on real intent",
  "Surface insights automatically",
  "Predict local market movement"
];

export function BrochureAI() {
  const [isAiActive, setIsAiActive] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  const handleTransform = () => {
    setIsTransforming(true);
    // Simulate AI processing time
    setTimeout(() => {
      setIsTransforming(false);
      setIsAiActive(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsAiActive(false);
    setIsTransforming(false);
  };

  return (
    <section className="py-24 px-6 bg-white text-foreground relative border-t border-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Outcome-Driven Copy */}
        <div className="space-y-8 reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>AI Differentiation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline leading-tight text-primary tracking-tight">
            Powered by brokers. <br />
            <span className="text-secondary italic">Evolved by AI.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
            Built specifically for real estate workflows — not generic AI tools. We've built an intelligent engine that understands the nuances of the Australian market.
          </p>
          
          <ul className="grid grid-cols-1 gap-5">
            {AI_OUTCOMES.map((outcome, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-foreground/80 font-body text-base">
                <div className="p-1 rounded-full bg-secondary/10 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-semibold">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Real Transformation Demo */}
        <div className="reveal relative">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="space-y-10 relative z-10">
              {/* Demo Navigation - Gives product context */}
              <div className="flex items-center space-x-8 border-b border-slate-100 pb-4 overflow-x-auto no-scrollbar">
                <button className="text-[10px] uppercase tracking-widest font-bold text-secondary border-b-2 border-secondary pb-4 -mb-[18px] whitespace-nowrap transition-colors">Smart Reply</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-slate-400 pb-4 -mb-[18px] opacity-40 whitespace-nowrap hover:opacity-60 transition-opacity">Listing Gen</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-slate-400 pb-4 -mb-[18px] opacity-40 whitespace-nowrap hover:opacity-60 transition-opacity">Lead Score</button>
              </div>

              {/* Transformation Canvas */}
              <div className="min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isAiActive ? (
                    <motion.div 
                      key="before"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Standard Agent Workflow</span>
                         <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                      </div>
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm text-slate-500 italic leading-relaxed shadow-inner">
                        "Hi, checking in on the property at 25 Bondi Road. Any interest?"
                      </div>
                      <p className="text-[10px] text-slate-300 font-body uppercase tracking-widest text-center">Raw Input</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="after"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-secondary font-bold flex items-center">
                          <Sparkles className="w-3 h-3 mr-2" /> BrokBuddy AI Output
                        </span>
                        <div className="flex gap-2">
                           <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[8px] rounded uppercase font-bold tracking-tighter">Tone optimized</span>
                           <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] rounded uppercase font-bold tracking-tighter">Market Insight</span>
                        </div>
                      </div>
                      <div className="p-8 bg-white rounded-2xl border border-secondary/20 text-sm text-foreground leading-relaxed shadow-lg shadow-secondary/5 relative overflow-hidden">
                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                           className="relative z-10"
                         >
                          <p className="font-semibold text-primary mb-3">Hi John,</p>
                          <p className="mb-4">
                            I noticed your interest in <span className="text-secondary font-bold">25 Bondi Road</span>. Properties in this pocket are currently averaging 14 days on market — significantly faster than the Sydney metropolitan median.
                          </p>
                          <p>
                            Would you like a curated breakdown of recent comparable sales and pricing trends for this block to help you move forward?
                          </p>
                         </motion.div>
                         
                         {/* Subtle typing accent line */}
                         <div className="absolute top-0 right-0 w-1 h-full bg-secondary/10" />
                      </div>
                      <p className="text-[10px] text-secondary/60 font-body uppercase tracking-widest text-center flex items-center justify-center font-bold">
                         <CheckCircle2 className="w-3 h-3 mr-2 text-secondary" /> Context-Aware Outcome
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Trigger */}
              <div className="flex justify-center pt-2">
                {!isAiActive ? (
                  <Button 
                    onClick={handleTransform}
                    disabled={isTransforming}
                    className="rounded-full bg-accent hover:bg-accent/90 px-12 h-16 text-lg font-bold shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-95 group relative overflow-hidden"
                  >
                    {isTransforming ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Transform with AI <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                ) : (
                  <Button 
                    variant="outline"
                    onClick={handleReset}
                    className="rounded-full px-12 h-16 text-slate-400 border-slate-200 hover:bg-slate-50 group hover:text-primary hover:border-primary/20 transition-all"
                  >
                    <RefreshCcw className="mr-3 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" /> Reset Transformation
                  </Button>
                )}
              </div>
            </div>
            
            {/* Background Ambient Glows */}
            <div className={`absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 blur-[100px] transition-opacity duration-1000 ${isAiActive ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute -top-20 -left-20 w-80 h-80 bg-primary/5 blur-[100px] transition-opacity duration-1000 ${isAiActive ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
