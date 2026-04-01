"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { RefreshCw, FileText, Users, DollarSign, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const chaosItems = [
  { id: 1, icon: FileText, x: -90, y: -70, rotate: -18, delay: 0 },
  { id: 2, icon: Users, x: -110, y: 50, rotate: 15, delay: 0.1 },
  { id: 3, icon: DollarSign, x: -50, y: 90, rotate: -10, delay: 0.2 },
  { id: 4, icon: Home, x: -130, y: -20, rotate: 22, delay: 0.3 },
];

const structuredItems = [
  { id: 1, icon: FileText, x: 0, y: 0, rotate: 0 },
  { id: 2, icon: Users, x: 0, y: 0, rotate: 0 },
  { id: 3, icon: DollarSign, x: 0, y: 0, rotate: 0 },
  { id: 4, icon: Home, x: 0, y: 0, rotate: 0 },
];

export function BrochureTransformation() {
  const isMobile = useIsMobile();
  const [isChaosHovered, setIsChaosHovered] = useState(false);
  const [isStructureHovered, setIsStructureHovered] = useState(false);
  const [animationStep, setAnimationStep] = useState(0); // 0: Chaos, 1: Transforming, 2: Structured

  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const premiumEasing = [0.22, 1, 0.36, 1];

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // Step 1: Chaos fades in & drifts
        setAnimationStep(0);
        await new Promise(r => setTimeout(r, 1200));
        
        // Step 2: Pulled to center (Transformation start)
        setAnimationStep(1);
        await new Promise(r => setTimeout(r, 1600));
        
        // Step 3: Snap into structure
        setAnimationStep(2);
      };
      sequence();
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 1, duration: 0.6, ease: premiumEasing }}
          >
            ONE system?
          </motion.span>
        </motion.h2>
        
        <div className="relative py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24">
          
          {/* Chaos Side */}
          <div 
            className="relative w-64 h-64 flex items-center justify-center order-1 lg:order-none"
            onMouseEnter={() => setIsChaosHovered(true)}
            onMouseLeave={() => setIsChaosHovered(false)}
          >
            <div className="absolute inset-0 bg-red-600/[0.08] rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full h-full">
              {chaosItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute w-16 h-16 bg-red-100/90 border border-red-400/40 rounded-xl shadow-xl flex items-center justify-center",
                    animationStep === 0 ? "opacity-100" : "opacity-0 blur-lg scale-75"
                  )}
                  initial={{ x: item.x, y: item.y, rotate: item.rotate, opacity: 0 }}
                  animate={animationStep === 0 ? {
                    x: isChaosHovered ? item.x * 1.4 : [item.x, item.x + 12, item.x - 6, item.x],
                    y: isChaosHovered ? item.y * 1.4 : [item.y, item.y - 12, item.y + 6, item.y],
                    rotate: isChaosHovered ? item.rotate * 1.8 : item.rotate,
                    opacity: 1,
                    transition: isChaosHovered ? { duration: 0.5, ease: premiumEasing } : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  } : {
                    x: 100,
                    y: 0,
                    scale: 0.7,
                    rotate: 0,
                    opacity: 0,
                    transition: { duration: 0.9, delay: item.delay, ease: premiumEasing }
                  }}
                  style={{ left: '50%', top: '50%', marginLeft: '-32px', marginTop: '-32px' }}
                >
                  <item.icon className="w-7 h-7 text-red-600" />
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                animate={{ opacity: animationStep === 0 ? 1 : 0 }}
              >
                <div className="mt-36 text-[11px] uppercase tracking-[0.4em] font-bold text-red-600">Fragmented Data</div>
              </motion.div>
            </div>
          </div>

          {/* Transformation Engine (Center) */}
          <div className="relative flex flex-col items-center justify-center order-2 lg:order-none">
            {/* Outer Rotating Rings */}
            <motion.div 
              className="absolute w-40 h-40 lg:w-48 lg:h-48 border-[1.5px] border-indigo-200 rounded-full opacity-40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-40 h-40 lg:w-48 lg:h-48 border-t-2 border-indigo-500/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.div 
              className={cn(
                "relative z-20 w-24 h-24 lg:w-32 lg:h-32 bg-indigo-600 rounded-3xl shadow-[0_15px_40px_rgba(99,102,241,0.5)] flex items-center justify-center transition-all duration-700",
                animationStep === 1 ? "scale-115 shadow-[0_25px_60px_rgba(99,102,241,0.7)]" : "scale-100"
              )}
            >
              <div className="absolute inset-0 bg-indigo-400/30 rounded-3xl animate-ping" />
              
              <AnimatePresence mode="wait">
                {animationStep === 1 ? (
                  <motion.div
                    key="transforming"
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ duration: 0.4, ease: premiumEasing }}
                    className="flex flex-col items-center"
                  >
                    <RefreshCw className="w-10 h-10 lg:w-12 lg:h-12 text-white animate-spin" />
                    <span className="absolute -bottom-12 text-[10px] uppercase tracking-widest font-bold text-indigo-600 whitespace-nowrap animate-pulse">Organizing...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: premiumEasing }}
                  >
                    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Light Sweep */}
              <motion.div 
                className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
                animate={animationStep === 1 ? { opacity: 1 } : { opacity: 0 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Structured Side */}
          <div 
            className="relative w-64 h-64 flex items-center justify-center order-3 lg:order-none"
            onMouseEnter={() => setIsStructureHovered(true)}
            onMouseLeave={() => setIsStructureHovered(false)}
          >
            <div className="absolute inset-0 bg-indigo-600/[0.08] rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full h-full grid grid-cols-2 gap-4 p-8">
              {structuredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className={cn(
                    "w-full aspect-square bg-white border rounded-2xl flex items-center justify-center transition-all duration-700 shadow-xl",
                    animationStep === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                    isStructureHovered ? "border-indigo-500 shadow-[0_25px_50px_rgba(99,102,241,0.3)] -translate-y-2 scale-[1.08]" : "border-slate-100"
                  )}
                  style={{ transitionDelay: animationStep === 2 ? `${idx * 120}ms` : '0ms' }}
                  animate={animationStep === 2 ? {
                    scale: [0.92, 1.1, 1],
                    transition: { duration: 0.7, delay: idx * 0.12, ease: premiumEasing }
                  } : {}}
                >
                  <item.icon className={cn(
                    "w-8 h-8 transition-colors duration-500",
                    animationStep === 2 ? "text-indigo-600" : "text-slate-200"
                  )} />
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                animate={{ opacity: animationStep === 2 ? 1 : 0 }}
              >
                <div className="mt-48 text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-600">Pure Structure</div>
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
            <p className="text-xs font-body text-slate-500 uppercase tracking-widest font-bold">
              This is what BrokBuddy does.
            </p>
            <div className="w-10 h-0.5 bg-indigo-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
