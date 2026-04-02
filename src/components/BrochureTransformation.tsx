
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  PlusCircle, 
  Sparkles, 
  Target, 
  TrendingUp,
  Layout,
  CheckCircle2,
  Users,
  DollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STATES = [
  {
    id: 1,
    title: "Start with a property",
    subtext: "Enter details once. Everything else is handled automatically.",
    visual: "input"
  },
  {
    id: 2,
    title: "Listings created instantly",
    subtext: "AI generates descriptions and ready-to-publish listings in seconds.",
    visual: "listing"
  },
  {
    id: 3,
    title: "Everything tracked in one place",
    subtext: "Leads, enquiries, and activity — all centralized and scored.",
    visual: "dashboard"
  },
  {
    id: 4,
    title: "Close faster. Scale smarter.",
    subtext: "Track deals, monitor revenue, and grow your business with precision.",
    visual: "pipeline"
  }
];

export function BrochureTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which state we are in based on scroll progress (0 to 1)
  const stateIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3]);
  
  // Create motion values for opacity and Y-translation of text content
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [20, 0, 0, -20]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [20, 0, 0, -20]);

  const opacity4 = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.85, 1], [20, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white border-y border-slate-100">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Content Panel */}
          <div className="relative h-[300px] flex flex-col justify-center">
            {/* State 1 Text */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Step 01</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-slate-900 leading-tight">
                Start with a <br /> <span className="text-indigo-600">property</span>
              </h2>
              <p className="text-lg text-slate-500 font-body max-w-md leading-relaxed">
                Enter details once. Everything else is handled automatically by the BrokBuddy engine.
              </p>
            </motion.div>

            {/* State 2 Text */}
            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Step 02</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-slate-900 leading-tight">
                Listings created <br /> <span className="text-indigo-600">instantly</span>
              </h2>
              <p className="text-lg text-slate-500 font-body max-w-md leading-relaxed">
                AI generates descriptions, catchy titles, and ready-to-publish content optimized for Domain and REA.
              </p>
            </motion.div>

            {/* State 3 Text */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Step 03</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-slate-900 leading-tight">
                Everything tracked <br /> <span className="text-indigo-600">in one place</span>
              </h2>
              <p className="text-lg text-slate-500 font-body max-w-md leading-relaxed">
                Leads, enquiries, and activity — all centralized. Know exactly who is ready to transact right now.
              </p>
            </motion.div>

            {/* State 4 Text */}
            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Step 04</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline text-slate-900 leading-tight">
                Close faster. <br /> <span className="text-indigo-600">Scale smarter.</span>
              </h2>
              <p className="text-lg text-slate-500 font-body max-w-md leading-relaxed">
                Track deals, monitor revenue, and grow your business. Structured control over every transaction.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Visual Control Panel */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
             <div className="relative w-full aspect-square max-w-[450px] bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden group">
                
                {/* Visual Morphing Content */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  
                  {/* Visual Header / App Bar */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/50">
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded-full bg-red-400" />
                       <div className="w-2 h-2 rounded-full bg-amber-400" />
                       <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                      BrokBuddy OS
                    </div>
                  </div>

                  {/* Dynamic UI Content based on scroll progress */}
                  <div className="flex-1 relative">
                    <AnimatePresence mode="wait">
                      {/* State 1: Input Form */}
                      <motion.div 
                        key="state1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0"
                      >
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-4"
                        >
                          <div className="h-4 w-24 bg-slate-200 rounded" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-10 bg-white border border-slate-200 rounded-lg" />
                            <div className="h-10 bg-white border border-slate-200 rounded-lg" />
                          </div>
                          <div className="h-4 w-32 bg-slate-200 rounded pt-4" />
                          <div className="h-24 bg-white border border-slate-200 rounded-lg p-3">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "80%" }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="h-2 bg-indigo-100 rounded"
                            />
                          </div>
                          <div className="h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                            Submit Property
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* State 2: Listing Card (Morphed) */}
                      <motion.div 
                        key="state2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="absolute inset-0 pt-10"
                      >
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                          <div className="h-40 bg-slate-100 relative overflow-hidden">
                            <img 
                              src="https://picsum.photos/seed/re/600/400" 
                              alt="Property" 
                              className="object-cover w-full h-full opacity-60"
                              data-ai-hint="modern house"
                            />
                            <div className="absolute top-3 left-3 px-2 py-1 bg-indigo-600 text-[8px] text-white font-bold rounded uppercase">AI Enhanced</div>
                          </div>
                          <div className="p-4 space-y-2">
                             <div className="h-4 w-3/4 bg-slate-100 rounded" />
                             <div className="h-2 w-1/2 bg-slate-100 rounded" />
                             <div className="flex gap-2 pt-2">
                               <div className="h-4 w-8 bg-slate-50 rounded" />
                               <div className="h-4 w-8 bg-slate-50 rounded" />
                               <div className="h-4 w-8 bg-slate-50 rounded" />
                             </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* State 3: Dashboard Metrics */}
                      <motion.div 
                        key="state3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="absolute inset-0"
                      >
                        <div className="grid grid-cols-2 gap-4">
                           {[
                             { label: 'Leads', val: '128', icon: Users, color: 'text-indigo-600' },
                             { label: 'Views', val: '4.2k', icon: Layout, color: 'text-blue-600' },
                             { label: 'Conversion', val: '14%', icon: Target, color: 'text-emerald-600' },
                             { label: 'Value', val: '$2.1M', icon: DollarSign, color: 'text-amber-600' }
                           ].map((stat, i) => (
                             <motion.div 
                               key={i}
                               initial={{ scale: 0.9, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               transition={{ delay: i * 0.1 }}
                               className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-24"
                             >
                               <stat.icon className={cn("w-4 h-4", stat.color)} />
                               <div>
                                 <div className="text-[10px] text-slate-400 uppercase font-bold">{stat.label}</div>
                                 <div className="text-lg font-headline text-slate-900">{stat.val}</div>
                               </div>
                             </motion.div>
                           ))}
                        </div>
                        <div className="mt-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                           <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                className="h-full bg-indigo-600"
                              />
                           </div>
                           <div className="mt-2 text-[10px] font-bold text-indigo-600 uppercase">Growth Performance</div>
                        </div>
                      </motion.div>

                      {/* State 4: Pipeline / Close */}
                      <motion.div 
                        key="state4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="absolute inset-0 flex flex-col"
                      >
                        <div className="flex-1 space-y-3">
                           {['Proposal', 'Under Contract', 'Settlement'].map((stage, i) => (
                             <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                                <div className="text-xs font-bold text-slate-700">{stage}</div>
                                {i === 2 ? (
                                  <motion.div 
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: [0.8, 1.2, 1] }}
                                    className="px-2 py-1 bg-emerald-100 text-[8px] font-bold text-emerald-700 rounded-full uppercase"
                                  >
                                    Sold
                                  </motion.div>
                                ) : (
                                  <div className="w-16 h-1 bg-slate-100 rounded-full" />
                                )}
                             </div>
                           ))}
                        </div>
                        <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-center space-y-4 shadow-2xl">
                           <div className="flex justify-center">
                              <CheckCircle2 className="w-10 h-10 text-indigo-400" />
                           </div>
                           <div className="text-sm font-headline text-white italic">"This is what BrokBuddy does."</div>
                           <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Commission Settled</div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Glassy Overlay / Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/5 blur-[100px] pointer-events-none" />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
