"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const PROBLEMS = [
  "Listings everywhere",
  "Manual follow-ups",
  "No deal visibility",
  "Scattered data"
];

const SOLUTION_STEPS = [
  "Add Property",
  "Auto Listing",
  "Track Leads",
  "Close Deals"
];

export function BrochureTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation mapping
  const problemOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
  const problemScale = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0.8]);
  const problemY = useTransform(scrollYProgress, [0, 0.35, 0.45], [0, 0, -50]);
  
  const solutionOpacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);
  const solutionScale = useTransform(scrollYProgress, [0.55, 0.65, 1], [0.95, 1, 1]);
  const solutionY = useTransform(scrollYProgress, [0.55, 0.65, 1], [30, 0, 0]);

  // Chip convergence
  const chip1X = useTransform(scrollYProgress, [0.35, 0.45], [-40, 0]);
  const chip2X = useTransform(scrollYProgress, [0.35, 0.45], [40, 0]);
  const chip3X = useTransform(scrollYProgress, [0.35, 0.45], [-20, 0]);
  const chip4X = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Step 1: Problem State */}
        <motion.div 
          style={{ opacity: problemOpacity, scale: problemScale, y: problemY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        >
          <div className="max-w-3xl space-y-12">
            <h2 className="text-4xl md:text-6xl font-headline text-slate-900 tracking-tight leading-tight">
              Managing real estate <br />
              <span className="text-red-500 italic">shouldn't</span> feel like this.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {PROBLEMS.map((problem, idx) => {
                const xPos = idx === 0 ? chip1X : idx === 1 ? chip2X : idx === 2 ? chip3X : chip4X;
                return (
                  <motion.div 
                    key={idx}
                    style={{ x: xPos }}
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: idx * 0.5,
                      ease: "easeInOut" 
                    }}
                    className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full shadow-sm text-sm font-body text-slate-500 whitespace-nowrap"
                  >
                    {problem}
                  </motion.div>
                );
              })}
            </div>
            
            <p className="text-sm font-body text-slate-400 uppercase tracking-widest pt-8 animate-pulse">
              Scroll to resolve
            </p>
          </div>
        </motion.div>

        {/* Step 3: Solution Snap */}
        <motion.div 
          style={{ opacity: solutionOpacity, scale: solutionScale, y: solutionY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
        >
          <div className="max-w-5xl w-full space-y-16 px-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline text-slate-900 tracking-tight">
                This is how <span className="text-indigo-600">BrokBuddy</span> works.
              </h2>
              <p className="text-lg text-slate-500 font-body">One unified system. Zero friction.</p>
            </div>

            {/* Unified System Block */}
            <div className="relative p-2 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                {SOLUTION_STEPS.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center space-y-4 group/step">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center transition-all duration-500 group-hover/step:bg-indigo-600 group-hover/step:scale-110">
                        <CheckCircle2 className="w-7 h-7 text-indigo-600 group-hover/step:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-headline font-bold text-slate-900">{step}</span>
                    </div>
                    {idx < SOLUTION_STEPS.length - 1 && (
                      <div className="hidden md:block">
                        <ArrowRight className="w-5 h-5 text-slate-200" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Subtle Glow Pulse */}
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            <p className="text-xs font-body text-slate-400 uppercase tracking-[0.3em] pt-8">
              This is the BrokBuddy standard.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
