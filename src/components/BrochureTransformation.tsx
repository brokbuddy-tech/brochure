
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  PlusCircle, 
  Cpu, 
  Zap, 
  FileCheck, 
  Target, 
  LineChart, 
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const premiumEasing = [0.22, 1, 0.36, 1];

const OUTPUT_CARDS = [
  { id: 'listing', icon: FileCheck, title: "Listing Created", desc: "AI-optimized copy & photos" },
  { id: 'leads', icon: Target, title: "Leads Tracking", desc: "Active portal enquiry sync" },
  { id: 'pipeline', icon: LineChart, title: "Pipeline Updated", desc: "Deal stage progression" },
  { id: 'insights', icon: Zap, title: "Insights Ready", desc: "Market performance report" },
];

export function BrochureTransformation() {
  const [animationStep, setAnimationStep] = useState(0); // 0: Idle, 1: Compression, 2: Processing, 3: Flow, 4: Results
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      const runSequence = async () => {
        setAnimationStep(0);
        await new Promise(r => setTimeout(r, 800));
        setAnimationStep(1); // Compression
        await new Promise(r => setTimeout(r, 1000));
        setAnimationStep(2); // Processing
        await new Promise(r => setTimeout(r, 1500));
        setAnimationStep(3); // Flow
        await new Promise(r => setTimeout(r, 800));
        setAnimationStep(4); // Results
      };
      runSequence();
    } else {
      setAnimationStep(0);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-black text-white text-center px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto space-y-16 w-full">
        
        <div className="space-y-4 reveal">
          <motion.h2 
            className="text-4xl md:text-6xl font-headline tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEasing }}
          >
            What if your entire business ran on <br className="hidden md:block" />
            <span className="italic text-indigo-400">ONE system?</span>
          </motion.h2>
          <p className="text-sm uppercase tracking-[0.4em] text-white/30 font-bold">Live Data Flow Experience</p>
        </div>

        <div className="relative py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32 w-full">
          
          {/* PHASE 1: INPUT (LEFT) */}
          <div className="relative w-full lg:w-64 flex flex-col items-center">
            <AnimatePresence>
              {(animationStep === 0 || animationStep === 1) && (
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: animationStep === 1 ? 0 : 1, 
                    x: animationStep === 1 ? 200 : 0,
                    scale: animationStep === 1 ? 0.7 : 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: premiumEasing }}
                  className="w-64 bg-white/5 border border-white/10 p-6 rounded-2xl glass-card backdrop-blur-xl relative z-30"
                >
                  <div className="flex items-center space-x-3 mb-4 border-b border-white/10 pb-3">
                    <PlusCircle className="w-5 h-5 text-indigo-400" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Add New Property</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-6 bg-white/5 rounded-md border border-white/5" />
                      <div className="h-6 bg-white/5 rounded-md border border-white/5" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <span className="mt-6 text-[10px] uppercase tracking-widest text-white/20 font-bold">Input Data</span>
          </div>

          {/* PHASE 2: ENGINE CORE (CENTER) */}
          <div className="relative w-64 h-64 flex flex-col items-center justify-center">
            {/* Engine Rings */}
            <motion.div 
              className="absolute w-48 h-48 border border-indigo-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-64 h-64 border border-indigo-400/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Core */}
            <motion.div 
              className={cn(
                "relative z-20 w-32 h-32 bg-indigo-600 rounded-full shadow-2xl flex flex-col items-center justify-center transition-all duration-700",
                animationStep >= 2 ? "scale-110 shadow-[0_0_80px_rgba(99,102,241,0.6)]" : "scale-100"
              )}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <AnimatePresence mode="wait">
                {animationStep === 2 ? (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    <RefreshCw className="w-10 h-10 text-white animate-spin" />
                    <span className="absolute -bottom-16 text-[9px] uppercase tracking-[0.3em] font-bold text-indigo-400 whitespace-nowrap animate-pulse">Structuring Data...</span>
                  </motion.div>
                ) : (
                  <motion.div key="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Cpu className="w-10 h-10 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Data Packet Particle (Flow Line Effect) */}
              <AnimatePresence>
                {animationStep === 3 && (
                  <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 300, opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute h-0.5 w-32 bg-gradient-to-r from-indigo-500 to-transparent z-40"
                    style={{ left: '50%' }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
            
            <span className="mt-16 text-[10px] uppercase tracking-widest text-indigo-400/40 font-bold">BrokBuddy Core</span>
          </div>

          {/* PHASE 3: OUTPUT (RIGHT) */}
          <div className="relative w-full lg:w-72 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-4 w-full">
              {OUTPUT_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center space-x-4 backdrop-blur-md hover:bg-white/10 transition-all group"
                  initial={{ opacity: 0, x: 50, y: 10 }}
                  animate={animationStep === 4 ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  } : {
                    opacity: 0,
                    x: 50,
                    y: 10
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.15,
                    ease: premiumEasing 
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                    <card.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{card.title}</h4>
                    <p className="text-[10px] text-white/40">{card.desc}</p>
                  </div>
                  <CheckCircle2 className="w-3 h-3 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            <span className="mt-6 text-[10px] uppercase tracking-widest text-white/20 font-bold">Output Results</span>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <p className="text-xl md:text-2xl font-headline italic text-white/80">
            "BrokBuddy replaces chaos with structure, giving you absolute control over your growth."
          </p>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.5em]">This is what BrokBuddy does</span>
            <div className="w-12 h-px bg-indigo-500/30" />
          </div>
        </motion.div>
      </div>

      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] -z-10 pointer-events-none" />
      <div className={cn(
        "absolute inset-0 transition-opacity duration-1000 bg-indigo-900/10 pointer-events-none",
        animationStep === 2 ? "opacity-100" : "opacity-0"
      )} />
    </section>
  );
}
