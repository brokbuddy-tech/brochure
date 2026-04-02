
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROBLEMS = [
  "Listings everywhere",
  "Manual follow-ups",
  "No deal visibility",
  "Scattered data"
];

const SOLUTION_STEPS = [
  { id: 0, title: "Add Property Once", icon: PlusCircle },
  { id: 1, title: "Listings Generated", icon: Sparkles },
  { id: 2, title: "Leads Tracked", icon: Target },
  { id: 3, title: "Deals Closed", icon: CheckCircle2 }
];

const premiumEasing = [0.22, 1, 0.36, 1];

export function BrochureTransformation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SOLUTION_STEPS.length);
    }, 1500); // Transitions through entire flow roughly every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-white border-t border-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Part 1: The Problem Context */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEasing }}
            className="max-w-4xl space-y-10"
          >
            <h2 className="text-4xl md:text-6xl font-headline text-primary tracking-tight leading-tight">
              Managing real estate <br />
              <span className="text-accent italic font-bold">shouldn't</span> feel like this.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {PROBLEMS.map((problem, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: premiumEasing }}
                  className="px-6 py-3 bg-muted border border-border/10 rounded-2xl shadow-sm text-base font-body text-foreground/60 whitespace-nowrap hover:bg-white hover:border-accent/30 transition-colors"
                >
                  {problem}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Part 2: The Solution Flow - CONNECTED FLOW BAR */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEasing }}
            className="max-w-5xl w-full space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline text-primary tracking-tight">
                This is how <span className="text-secondary font-bold">BrokBuddy</span> works.
              </h2>
              <p className="text-xl text-muted-foreground font-body">One unified system. Zero friction.</p>
            </div>

            {/* Unified System Block (Flow Bar) */}
            <div className="relative w-full py-16 px-8 md:px-16 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[92px] left-[15%] right-[15%] h-[1px] bg-slate-100 -z-0" />
              
              {/* Animated Glowing Dot (Desktop) */}
              <div className="hidden md:block absolute top-[92px] left-[15%] right-[15%] h-[1px] -z-0">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"
                  animate={{ 
                    left: `${(activeStep / (SOLUTION_STEPS.length - 1)) * 100}%`,
                    scale: [1, 1.4, 1],
                    boxShadow: [
                      "0 0 10px rgba(255,138,0,0.5)",
                      "0 0 25px rgba(255,138,0,0.8)",
                      "0 0 10px rgba(255,138,0,0.5)"
                    ]
                  }}
                  transition={{ 
                    left: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
                    boxShadow: { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
              </div>

              {/* Steps Container */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
                {/* Vertical Connector Line (Mobile) */}
                <div className="md:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-slate-100 -z-0" />
                
                {/* Mobile Glowing Dot */}
                <div className="md:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] -z-0">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"
                    animate={{ 
                      top: `${(activeStep / (SOLUTION_STEPS.length - 1)) * 100}%`,
                      scale: [1, 1.4, 1]
                    }}
                    transition={{ 
                      top: { duration: 0.8, ease: "easeInOut" },
                      scale: { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
                    }}
                  />
                </div>

                {SOLUTION_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const Icon = step.icon;

                  return (
                    <motion.div 
                      key={idx} 
                      className={cn(
                        "relative flex flex-col items-center transition-all duration-700 w-full md:w-auto",
                        isActive ? "opacity-100 scale-110" : "opacity-30 scale-100"
                      )}
                    >
                      <div className={cn(
                        "w-20 h-20 rounded-[28px] flex items-center justify-center transition-all duration-500 mb-6",
                        isActive ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-accent/20" : "bg-slate-50 border border-slate-100"
                      )}>
                        <Icon className={cn(
                          "w-8 h-8 transition-colors duration-500",
                          isActive ? "text-accent" : "text-slate-400"
                        )} />
                      </div>
                      
                      <div className="text-center md:max-w-[140px]">
                        <h4 className={cn(
                          "font-headline text-base font-bold transition-colors duration-500 leading-tight tracking-tight",
                          isActive ? "text-primary" : "text-slate-400"
                        )}>
                          {step.title}
                        </h4>
                      </div>

                      {/* Thin arrow indicator for flow (Desktop) */}
                      {idx < SOLUTION_STEPS.length - 1 && (
                        <div className={cn(
                          "hidden lg:flex absolute -right-8 top-8 items-center transition-opacity duration-500",
                          idx < activeStep ? "opacity-100" : "opacity-10"
                        )}>
                           <ArrowRight className="w-4 h-4 text-slate-300" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-30 pointer-events-none" />
            </div>

            <p className="text-[10px] font-body text-foreground/30 uppercase tracking-[0.5em]">
              The BrokBuddy Standard
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

