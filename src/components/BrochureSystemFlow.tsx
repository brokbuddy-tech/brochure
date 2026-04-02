"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  FileText, 
  Share2, 
  Target, 
  MoveUpRight, 
  BarChart 
} from 'lucide-react';

const STEPS = [
  {
    icon: PlusCircle,
    title: "Add Property Once",
    desc: "Single-entry data input."
  },
  {
    icon: FileText,
    title: "Instant Listing Creation",
    desc: "AI writes high-converting listings in seconds."
  },
  {
    icon: Share2,
    title: "Push to Portals",
    desc: "Domain & REA Group sync."
  },
  {
    icon: Target,
    title: "Leads Tracked",
    desc: "Centralized enquiry pool."
  },
  {
    icon: MoveUpRight,
    title: "Pipeline Updated",
    desc: "Visual deal stage progression."
  },
  {
    icon: BarChart,
    title: "Insights Generated",
    desc: "Automated performance report."
  }
];

const premiumEasing = [0.22, 1, 0.36, 1];

export function BrochureSystemFlow() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEasing }}
            className="text-4xl md:text-6xl font-headline mb-6 text-black tracking-tight"
          >
            How your business runs on <span className="text-indigo-600">BrokBuddy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: premiumEasing }}
            className="text-lg md:text-xl text-black/50 font-body max-w-2xl mx-auto"
          >
            A seamless, automated engine from first listing to final settlement.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[2px] bg-slate-100 -z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15, 
                  ease: premiumEasing 
                }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Card Container */}
                <div className="flex flex-col items-center w-full">
                  <div className="relative mb-8">
                    {/* Circle Node */}
                    <div className="w-24 h-24 rounded-[20px] bg-[#f8f9fc] border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_rgba(33,100,50,0.15)] group-hover:border-transparent">
                      <step.icon className="w-8 h-8 text-indigo-600 transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-[5deg]" />
                      
                      {/* Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-accent border border-transparent group-hover:border-slate-100">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 transition-colors duration-500">
                    <h4 className="font-headline text-xl text-black group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm font-body text-black/40 leading-relaxed max-w-[180px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Vertical Line for Mobile/Tablet */}
                {idx < STEPS.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-slate-100 my-4" />
                )}
                
                {/* Animated Line Sweep (Desktop Only) */}
                {idx < STEPS.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: (idx * 0.15) + 0.4, 
                      ease: "easeInOut" 
                    }}
                    className="hidden lg:block absolute top-[48px] left-[calc(50%+48px)] w-[calc(100%-96px)] h-[2px] bg-gradient-to-right from-indigo-500 to-transparent origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
    </section>
  );
}
