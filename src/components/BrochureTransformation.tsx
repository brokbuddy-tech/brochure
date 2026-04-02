
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

  // Fade and Y transforms for Problem State
  const problemOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const problemY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);
  const problemScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

  // Fade and Y transforms for Solution State
  const solutionOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1]);
  const solutionY = useTransform(scrollYProgress, [0.45, 0.8], [40, 0]);
  const solutionScale = useTransform(scrollYProgress, [0.45, 0.8], [1.02, 1]);

  // Ensure pointer events switch so buttons/links are clickable when visible
  const problemPointerEvents = useTransform(scrollYProgress, (v) => v > 0.48 ? "none" : "auto");
  const solutionPointerEvents = useTransform(scrollYProgress, (v) => v < 0.52 ? "none" : "auto");

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Step 1: Problem State */}
        <motion.div 
          style={{ 
            opacity: problemOpacity, 
            y: problemY, 
            scale: problemScale,
            pointerEvents: problemPointerEvents,
            zIndex: 20
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl space-y-10">
            <h2 className="text-4xl md:text-6xl font-headline text-primary tracking-tight leading-tight">
              Managing real estate <br />
              <span className="text-accent italic font-bold">shouldn't</span> feel like this.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {PROBLEMS.map((problem, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 bg-muted border border-border/10 rounded-2xl shadow-sm text-base font-body text-foreground/60 whitespace-nowrap"
                >
                  {problem}
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex flex-col items-center space-y-2 text-foreground/20">
              <p className="text-xs font-body uppercase tracking-[0.3em] animate-pulse">
                Scroll to resolve
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Solution State */}
        <motion.div 
          style={{ 
            opacity: solutionOpacity, 
            y: solutionY, 
            scale: solutionScale,
            pointerEvents: solutionPointerEvents,
            zIndex: 10
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="max-w-5xl w-full space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline text-primary tracking-tight">
                This is how <span className="text-secondary font-bold">BrokBuddy</span> works.
              </h2>
              <p className="text-xl text-muted-foreground font-body">One unified system. Zero friction.</p>
            </div>

            {/* Unified System Block */}
            <div className="relative p-2 bg-white rounded-[2.5rem] border border-secondary/20 shadow-xl overflow-hidden">
              <div className="bg-muted rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                {SOLUTION_STEPS.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center space-y-3 group/step transition-transform duration-500 hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-headline font-bold text-primary whitespace-nowrap">{step}</span>
                    </div>
                    {idx < SOLUTION_STEPS.length - 1 && (
                      <div className="hidden md:block opacity-20">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
            </div>

            <p className="text-[10px] font-body text-foreground/30 uppercase tracking-[0.5em]">
              The BrokBuddy Standard
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
