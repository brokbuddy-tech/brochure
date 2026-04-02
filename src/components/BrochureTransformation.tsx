"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  AlertCircle, 
  CheckCircle2, 
  Layout, 
  Users, 
  Target, 
  Zap,
  Layers,
  Search,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function BrochureTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to the slider position (0% to 100%)
  const sliderPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);
  const rightOpacity = useTransform(scrollYProgress, [0.2, 1], [0.3, 1]);
  const leftBlur = useTransform(scrollYProgress, [0, 0.8], ["0px", "8px"]);
  const rightScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Content */}
        <div className="pt-24 px-6 text-center z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-headline text-slate-900 mb-4 tracking-tight"
          >
            From scattered operations to a <span className="text-indigo-600">structured system</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-body"
          >
            See the difference BrokBuddy makes to your daily workflow.
          </motion.p>
        </div>

        {/* Comparison Slider Container */}
        <div className="flex-1 relative mt-12 mb-12 mx-6 lg:mx-24 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden bg-slate-50">
          
          {/* BEFORE SIDE (CHAOS) */}
          <motion.div 
            style={{ opacity: leftOpacity, filter: `blur(${leftBlur.get()})` }}
            className="absolute inset-0 bg-slate-100/50 p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-12"
          >
            <div className="max-w-md space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
                <AlertCircle className="w-3 h-3 mr-2" /> Current Workflow
              </div>
              <h3 className="text-3xl font-headline text-slate-800">The Chaos of Fragmentation</h3>
              <ul className="space-y-4">
                {[
                  "Listings across multiple portals",
                  "Manual follow-ups & spreadsheets",
                  "No clear deal or pipeline visibility",
                  "Scattered data and missed opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-500 font-body text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock Messy UI */}
            <div className="relative w-full lg:w-[450px] aspect-square bg-white rounded-3xl border border-slate-200 shadow-sm p-6 opacity-60">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col justify-between">
                  <MoreHorizontal className="text-slate-300" />
                  <div className="h-2 w-full bg-slate-200 rounded" />
                </div>
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 space-y-2">
                  <div className="h-2 w-3/4 bg-slate-200 rounded" />
                  <div className="h-2 w-1/2 bg-slate-200 rounded" />
                </div>
                <div className="col-span-2 bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-full bg-slate-200 rounded" />
                    <div className="h-2 w-1/2 bg-slate-200 rounded" />
                  </div>
                </div>
                <div className="col-span-2 flex justify-center py-4">
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">Fragmented Systems</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AFTER SIDE (BROKBUDDY) - REVEAL LAYER */}
          <motion.div 
            style={{ 
              clipPath: useTransform(sliderPos, (v) => `inset(0 0 0 ${100 - v}%)`),
              opacity: rightOpacity,
              scale: rightScale
            }}
            className="absolute inset-0 bg-white p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-12 z-10"
          >
            {/* Mock Structured UI */}
            <div className="relative w-full lg:w-[450px] aspect-square bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 overflow-hidden group">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                     <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">BrokBuddy OS</span>
                  </div>
                  <Target className="w-4 h-4 text-indigo-400" />
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Deals', val: '24', icon: Zap },
                    { label: 'Leads', val: '186', icon: Users },
                    { label: 'Revenue', val: '$1.2M', icon: Target },
                    { label: 'Growth', val: '+18%', icon: Layout }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <stat.icon className="w-4 h-4 text-indigo-400 mb-2" />
                      <div className="text-xl font-headline text-white">{stat.val}</div>
                      <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold">{stat.label}</div>
                    </div>
                  ))}
               </div>
               
               <div className="mt-8 p-4 bg-indigo-600 rounded-2xl flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[8px] text-white/60 uppercase font-bold">Current Status</div>
                    <div className="text-xs text-white font-semibold">Listing Optimized</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white" />
               </div>
               
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full" />
            </div>

            <div className="max-w-md space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 mr-2" /> BrokBuddy Standard
              </div>
              <h3 className="text-3xl font-headline text-slate-900">The Power of Structure</h3>
              <ul className="space-y-4">
                {[
                  "Centralized listing management",
                  "Automated workflows & follow-ups",
                  "Real-time deal and pipeline tracking",
                  "AI-powered insights for every property"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 font-body text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* DIVIDER LINE */}
          <motion.div 
            style={{ left: `${sliderPos.get()}%` }}
            className="absolute top-0 bottom-0 w-px bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-3 bg-white rounded-full" />
                <div className="w-0.5 h-3 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Sub-CTA */}
        <div className="pb-12 text-center reveal">
          <p className="text-xs font-body text-slate-400 uppercase tracking-widest">This is what BrokBuddy does.</p>
        </div>

      </div>
    </section>
  );
}
