
"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const premiumEasing = [0.22, 1, 0.36, 1];

export function BrochureTransformation() {
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

        {/* Part 2: The Solution Flow */}
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

            {/* Unified System Block */}
            <div className="relative p-2 bg-white rounded-[2.5rem] border border-secondary/20 shadow-xl overflow-hidden group">
              <div className="bg-muted rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                {SOLUTION_STEPS.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5, ease: premiumEasing }}
                      className="flex flex-col items-center space-y-3 group/step"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-headline font-bold text-primary whitespace-nowrap">{step}</span>
                    </motion.div>
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
          </motion.div>
        </div>

      </div>
    </section>
  );
}
