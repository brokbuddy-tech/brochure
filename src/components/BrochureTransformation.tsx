
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Sparkles, 
  Target, 
  TrendingUp,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const premiumEasing = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    id: '01',
    icon: PlusCircle,
    title: "Add Property",
    desc: "Enter property details once"
  },
  {
    id: '02',
    icon: Sparkles,
    title: "Auto Listing",
    desc: "AI creates ready-to-publish listings"
  },
  {
    id: '03',
    icon: Target,
    title: "Track Leads",
    desc: "All enquiries in one place"
  },
  {
    id: '04',
    icon: TrendingUp,
    title: "Close Deals",
    desc: "Monitor pipeline & revenue in real time"
  }
];

export function BrochureTransformation() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline Section */}
        <div className="text-center mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEasing }}
            className="text-4xl md:text-6xl font-headline text-slate-900 tracking-tight leading-tight"
          >
            What if your entire business ran on <br className="hidden md:block" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-indigo-600 inline-block"
            >
              ONE
            </motion.span> system?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.4em] text-slate-400 font-bold"
          >
            Progressive System Experience
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[2px] bg-slate-200 -z-0" />
          
          {/* Progress Fill Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute top-[48px] left-0 w-full h-[2px] bg-indigo-600 origin-left z-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 relative z-20">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.3, ease: premiumEasing }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left relative"
              >
                {/* Step Circle Container */}
                <div className="relative mb-8 flex justify-center w-full lg:justify-start">
                  <motion.div 
                    initial={{ backgroundColor: "#e5e7eb", borderColor: "#d1d5db" }}
                    whileInView={{ backgroundColor: "#5b5bd6", borderColor: "#5b5bd6" }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.5) + 0.5, duration: 0.4 }}
                    whileHover={{ y: -4, boxShadow: "0 0 0 6px rgba(91,91,214,0.1)" }}
                    className="w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative z-30 group-hover:shadow-2xl cursor-default"
                  >
                    <step.icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                    
                    {/* Active Step Indicator Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-50">
                      <span className="text-[10px] font-bold text-white">{step.id}</span>
                    </div>
                  </motion.div>

                  {/* Vertical Progress Line (Mobile) */}
                  {idx < STEPS.length - 1 && (
                    <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-slate-200">
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: (idx * 0.5) + 0.8, duration: 0.5 }}
                        className="w-full h-full bg-indigo-600 origin-top"
                      />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (idx * 0.5) + 0.7, duration: 0.5 }}
                  className="space-y-2 lg:pr-8"
                >
                  <h4 className="text-xl font-headline text-slate-900 flex items-center justify-center lg:justify-start">
                    {step.title}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (idx * 0.5) + 0.9 }}
                      className="ml-2"
                    >
                      <Check className="w-4 h-4 text-indigo-600" />
                    </motion.div>
                  </h4>
                  <p className="text-sm font-body text-slate-500 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Final Snap Settle Effect */}
                {idx === STEPS.length - 1 && (
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ delay: 2.5, duration: 0.4 }}
                    className="absolute inset-0 pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subconscious Push */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-32 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
             <span className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">The BrokBuddy Standard</span>
             <p className="text-lg font-headline italic text-slate-500">
               "This is what BrokBuddy does."
             </p>
             <div className="w-12 h-px bg-slate-200" />
          </div>
        </motion.div>

      </div>

      {/* Background Soft Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/[0.02] blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}
