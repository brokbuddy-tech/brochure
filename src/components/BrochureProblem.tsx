
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  EyeOff, 
  MessageSquareOff, 
  Database,
  BarChart
} from 'lucide-react';

const PROBLEMS = [
  {
    icon: LayoutGrid,
    title: "Listings scattered",
    desc: "Managing listings across multiple portals slows everything down.",
    x: -300, y: -140
  },
  {
    icon: EyeOff,
    title: "No deal visibility",
    desc: "You don’t know which deals are progressing or stuck.",
    x: 300, y: -160
  },
  {
    icon: MessageSquareOff,
    title: "Manual follow-ups",
    desc: "Important conversations get missed or delayed.",
    x: -340, y: 120
  },
  {
    icon: Database,
    title: "No centralized data",
    desc: "Your business data is spread across tools.",
    x: 340, y: 140
  },
  {
    icon: BarChart,
    title: "Decisions based on guesswork",
    desc: "You lack real insights to scale confidently.",
    x: 0, y: 260
  }
];

const premiumEasing = [0.22, 1, 0.36, 1];

export function BrochureProblem() {
  return (
    <section className="relative py-32 px-6 bg-[radial-gradient(circle_at_center,_#f9fafb,_#eef2f7)] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="max-w-3xl mb-32 text-center mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEasing }}
            className="text-4xl md:text-6xl font-headline mb-6 text-[#111827] tracking-tight leading-tight"
          >
            Your brokerage is running on <br />
            <span className="text-slate-400">disconnected systems.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: premiumEasing }}
            className="text-xl text-slate-500 font-body"
          >
            Multiple tools. No visibility. Slower deals.
          </motion.p>
        </div>

        {/* Controlled Cluster (Desktop Only) */}
        <div className="relative w-full h-[600px] flex items-center justify-center hidden md:flex">
          
          {/* Faint Connectors (Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]">
            {PROBLEMS.map((p, i) => (
              <motion.line 
                key={i}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: premiumEasing }}
                x1="50%" y1="50%" 
                x2={`calc(50% + ${p.x}px)`} y2={`calc(50% + ${p.y}px)`}
                stroke="#6b7280" strokeWidth="1"
              />
            ))}
          </svg>

          {/* Central Anchor */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative z-20 w-80 h-80 rounded-full bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center p-12 border border-slate-100"
          >
            <h3 className="text-3xl font-headline text-[#111827] leading-tight mb-3">
              Your workflow is <br /> <span className="text-primary italic">fragmented</span>
            </h3>
            <p className="text-xs text-slate-400 font-body uppercase tracking-widest font-bold">
              The root of inefficiency
            </p>
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full -z-10" />
          </motion.div>

          {/* Surrounding Problem Circles */}
          {PROBLEMS.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                x: prob.x, 
                y: prob.y, 
                scale: 1 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.4 + (idx * 0.15), 
                duration: 0.8, 
                ease: premiumEasing 
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ffffff",
                borderColor: "#d1d5db",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                zIndex: 30
              }}
              className="absolute z-10 w-[280px] h-[280px] p-8 bg-white/40 backdrop-blur-sm border border-slate-200 rounded-full transition-all duration-500 group cursor-default flex flex-col items-center justify-center text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 transition-colors group-hover:bg-primary group-hover:text-white">
                  <prob.icon className="w-5 h-5 text-[#6b7280] group-hover:text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-headline font-bold text-[#111827] leading-tight transition-colors group-hover:text-primary">
                    {prob.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-body leading-relaxed opacity-80 group-hover:opacity-100">
                    {prob.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Vertical Stack */}
        <div className="md:hidden flex flex-col gap-6 w-full mt-12">
          {PROBLEMS.map((prob, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 bg-white border border-slate-200 rounded-[1.5rem] flex items-start gap-5 shadow-sm"
            >
              <div className="p-3 bg-slate-50 rounded-xl shrink-0">
                <prob.icon className="w-5 h-5 text-[#6b7280]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-[#111827] text-lg">{prob.title}</h4>
                <p className="text-sm text-slate-500 font-body leading-relaxed">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center mt-40 space-y-8 relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl font-headline italic text-[#111827]"
          >
            This is where most brokerages struggle.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
