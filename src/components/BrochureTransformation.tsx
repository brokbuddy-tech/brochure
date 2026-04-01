"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { RefreshCw, FileText, Users, DollarSign, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const chaosItems = [
  { id: 1, icon: FileText, x: -20, y: -30, rotate: -12, delay: 0 },
  { id: 2, icon: Users, x: 25, y: -15, rotate: 10, delay: 0.1 },
  { id: 3, icon: DollarSign, x: -15, y: 25, rotate: -8, delay: 0.2 },
  { id: 4, icon: Home, x: 30, y: 20, rotate: 15, delay: 0.3 },
];

const structuredItems = [
  { id: 1, icon: FileText },
  { id: 2, icon: Users },
  { id: 3, icon: DollarSign },
  { id: 4, icon: Home },
];

export function BrochureTransformation() {
  const [animationStep, setAnimationStep] = useState(0); // 0: Chaos (Static), 1: Transforming (Compression/Engine), 2: Structured (Build)
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  const premiumEasing = [0.22, 1, 0.36, 1];

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // Step 1: Static Chaos
        setAnimationStep(0);
        await new Promise(r => setTimeout(r, 1200));
        
        // Step 2: Compression & Processing
        setAnimationStep(1);
        await new Promise(r => setTimeout(r, 2200));
        
        // Step 3: Structured Build
        setAnimationStep(2);
      };
      sequence();
    } else {
      setAnimationStep(0);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-white text-black text-center px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-headline tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEasing }}
        >
          What if your entire business ran on <br className="hidden md:block" />
          <motion.span 
            className="italic text-indigo-600 inline-block"
            animate={animationStep === 2 ? { opacity: 1, scale: 1.05 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ONE system?
          </motion.span>
        </motion.h2>
        
        <div className="relative py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24">
          
          {/* Phase 1: Chaos (Left) */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Background Dimming effect */}
            <motion.div 
              className="absolute inset-0 bg-red-600/[0.03] rounded-full blur-3xl"
              animate={{ opacity: animationStep === 0 ? 1 : 0 }}
            />
            
            <div className="relative z-10 w-full h-full">
              {chaosItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="absolute w-16 h-16 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center"
                  initial={{ x: item.x, y: item.y, rotate: item.rotate, opacity: 0.6, filter: 'blur(0.5px)' }}
                  animate={animationStep === 0 ? {
                    x: item.x,
                    y: item.y,
                    rotate: item.rotate,
                    opacity: 0.6,
                    filter: 'blur(0.5px)',
                  } : {
                    x: 150, // Move toward center
                    y: 0,
                    scale: 0.7,
                    rotate: 0,
                    opacity: 0,
                    filter: 'blur(2px)',
                    transition: { duration: 0.8, ease: premiumEasing }
                  }}
                  style={{ left: '50%', top: '50%', marginLeft: '-32px', marginTop: '-32px' }}
                >
                  <item.icon className="w-7 h-7 text-slate-400" />
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                animate={{ opacity: animationStep === 0 ? 1 : 0 }}
              >
                <div className="mt-40 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">Fragmented Data</div>
              </motion.div>
            </div>
          </div>

          {/* Phase 2: Processing Engine (Center) */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Radar/Rotating Rings */}
            <motion.div 
              className="absolute w-40 h-40 lg:w-48 lg:h-48 border-[1.5px] border-indigo-100 rounded-full"
              animate={animationStep >= 1 ? { rotate: 360, opacity: 0.4 } : { opacity: 0 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className={cn(
                "relative z-20 w-24 h-24 lg:w-32 lg:h-32 bg-indigo-600 rounded-3xl shadow-xl flex items-center justify-center transition-all duration-700",
                animationStep === 1 ? "scale-110 shadow-[0_20px_50px_rgba(99,102,241,0.4)]" : "scale-100"
              )}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
              <AnimatePresence mode="wait">
                {animationStep === 1 ? (
                  <motion.div
                    key="transforming"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    <RefreshCw className="w-10 h-10 lg:w-12 lg:h-12 text-white animate-spin" />
                    <span className="absolute -bottom-14 text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-600 whitespace-nowrap animate-pulse">Structuring Data...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white"
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Radar Sweep Effect */}
              {animationStep === 1 && (
                <motion.div 
                  className="absolute inset-0 rounded-3xl border border-white/30"
                  animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          </div>

          {/* Phase 3: Structured Build (Right) */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 bg-indigo-600/[0.05] rounded-full blur-3xl"
              animate={{ opacity: animationStep === 2 ? 1 : 0 }}
            />
            
            <div className="relative z-10 w-full h-full grid grid-cols-2 gap-4 p-8">
              {structuredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="w-full aspect-square bg-white border border-indigo-100 rounded-2xl flex items-center justify-center shadow-lg"
                  initial={{ x: -150, scale: 0.8, opacity: 0 }}
                  animate={animationStep === 2 ? {
                    x: 0,
                    scale: [0.9, 1.05, 1],
                    opacity: 1,
                  } : {
                    x: -150,
                    scale: 0.8,
                    opacity: 0,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: animationStep === 2 ? idx * 0.1 : 0,
                    ease: premiumEasing 
                  }}
                >
                  <item.icon className="w-8 h-8 text-indigo-600" />
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                animate={{ opacity: animationStep === 2 ? 1 : 0 }}
              >
                <div className="mt-44 text-[10px] uppercase tracking-[0.4em] font-bold text-indigo-600">Pure Structure</div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <motion.p 
            className="text-2xl md:text-3xl font-headline max-w-2xl mx-auto text-black/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            BrokBuddy replaces chaos with structure, giving you absolute control over your growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center space-y-3"
          >
            <p className="text-xs font-body text-slate-400 uppercase tracking-widest font-bold">
              This is what BrokBuddy does.
            </p>
            <div className="w-10 h-0.5 bg-indigo-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
