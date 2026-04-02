
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

  // Problem state (Visible initially)
  // Stays fully visible until 40%, then fades out quickly
  const problemOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const problemY = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -30]);
  const problemScale = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0.95]);

  // Solution state (Hidden initially)
  // Starts appearing at 50%, fully visible by 65%
  const solutionOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [0, 1, 1]);
  const solutionY = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [30, 0, 0]);
  const solutionScale = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [1.05, 1, 1]);

  // Pointer events management to ensure interactivity
  const problemPointerEvents = useTransform(scrollYProgress, (v) => v > 0.48 ? "none" : "auto");
  const solutionPointerEvents = useTransform(scrollYProgress, (v) => v < 0.52 ? "none" : "auto");

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Step 1: Problem State (High Z-Index initially) */}
        <motion.div 
          style={{ 
            opacity: problemOpacity, 
            y: problemY, 
            scale: problemScale,
            pointerEvents: problemPointerEvents
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20"
        >
          <div className="max-w-4xl space-y-12">
            <h2 className="text-4xl md:text-6xl font-headline text-slate-900 tracking-tight leading-tight">
              Managing real estate <br />
              <span className="text-red-500 italic font-bold">shouldn't</span> feel like this.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {PROBLEMS.map((problem, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white border border-slate-200 rounded-2xl shadow-xl text-base md:text-lg font-body text-slate-500 whitespace-nowrap"
                >
                  {problem}
                </div>
              ))}
            </div>
            
            <div className="pt-12 flex flex-col items-center space-y-2 text-slate-400">
              <p className="text-sm font-body uppercase tracking-[0.3em] animate-pulse">
                Scroll to resolve
              </p>
              <div className="w-px h-12 bg-slate-200 animate-bounce mt-4" />
            </div>
          </div>
        </motion.div>

        {/* Step 2: Solution State */}
        <motion.div 
          style={{ 
            opacity: solutionOpacity, 
            y: solutionY, 
            scale: solutionScale,
            pointerEvents: solutionPointerEvents
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
        >
          <div className="max-w-5xl w-full space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-headline text-slate-900 tracking-tight">
                This is how <span className="text-indigo-600 font-bold">BrokBuddy</span> works.
              </h2>
              <p className="text-xl text-slate-500 font-body">One unified system. Zero friction.</p>
            </div>

            {/* Unified System Block */}
            <div className="relative p-3 bg-white rounded-[3rem] border border-indigo-100 shadow-[0_30px_60px_-15px_rgba(91,91,214,0.15)] overflow-hidden">
              <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
                {SOLUTION_STEPS.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center space-y-4 group/step transition-transform duration-500 hover:-translate-y-1">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-indigo-600 shadow-lg shadow-indigo-200 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <span className="text-sm md:text-base font-headline font-bold text-slate-900 whitespace-nowrap">{step}</span>
                    </div>
                    {idx < SOLUTION_STEPS.length - 1 && (
                      <div className="hidden md:block opacity-20">
                        <ArrowRight className="w-6 h-6 text-slate-400" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-10 bg-indigo-500/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
            </div>

            <p className="text-xs font-body text-slate-400 uppercase tracking-[0.5em] pt-12">
              The BrokBuddy Standard
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
