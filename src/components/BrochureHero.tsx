
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, TrendingUp, Sparkles, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/context/NavigationContext';

const STEPS = [
  { id: 'add', label: 'Adding Property' },
  { id: 'list', label: 'AI Listing' },
  { id: 'leads', label: 'Lead Capture' },
  { id: 'pipeline', label: 'Deal Update' },
];

export function BrochureHero() {
  const [activeStep, setActiveStep] = useState(0);
  const { launchMission } = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-black via-[#020617] to-black text-white px-4 md:px-6">

      {/* Background - Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-headline leading-tight tracking-tight text-white">
            Run your entire brokerage <br className="hidden md:block" />
            <span className="text-secondary italic">from one system.</span>
          </h1>
          <p className="text-lg md:text-2xl font-body text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Listings, deals, and performance — all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-semibold group shadow-xl" onClick={() => launchMission('https://brokbuddy.com/#pricing')}>
              Book Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-xs md:text-sm font-body text-slate-500 font-medium px-4">
            Used by modern real estate teams to manage listings, leads, and deals.
          </p>
        </motion.div>

        {/* Live Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-12 md:mt-20 max-w-6xl mx-auto"
        >
          <div className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Browser Header */}
            <div className="h-10 md:h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 md:px-6 space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200" />
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="flex-1 max-w-[120px] sm:max-w-xs mx-auto h-5 md:h-6 bg-white rounded-md border border-slate-200 text-[8px] md:text-[10px] flex items-center justify-center text-slate-400">
                app.brokbuddy.com
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="aspect-auto md:aspect-[21/9] flex bg-white text-[#111827] overflow-hidden">
              {/* Sidebar Mock */}
              <div className="w-1/5 border-r border-slate-50 space-y-6 pr-6 hidden md:block p-8">
                <div className="h-4 w-2/3 bg-slate-100 rounded" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-8 rounded-lg flex items-center px-3 transition-colors ${i - 1 === activeStep ? 'bg-primary/5 text-primary' : 'text-slate-400'}`}>
                      <div className="w-3 h-3 rounded-full bg-current opacity-20 mr-2" />
                      <div className="h-2 w-full bg-current opacity-10 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Canvas */}
              <div className="flex-1 p-4 md:p-8 space-y-4 md:space-y-8 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-lg font-bold text-[#111827]">Agency Overview</h3>
                    <div className="h-1.5 md:h-2 w-16 md:w-24 bg-slate-100 rounded" />
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-6 md:h-8 w-16 md:w-24 bg-slate-50 border border-slate-100 rounded-lg" />
                  </div>
                </div>

                {/* Animated State Container */}
                <div className="relative min-h-[220px] md:min-h-[280px] md:h-64 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && (
                      <motion.div
                        key="step-add"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="p-4 md:p-8 border-2 border-dashed border-slate-100 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 h-full"
                      >
                        <div className="p-3 md:p-4 bg-slate-50 rounded-full">
                          <Building2 className="w-6 h-6 md:w-8 md:h-8 text-slate-300" />
                        </div>
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-xs md:text-sm font-bold text-slate-400">Add New Property</p>
                          <div className="flex items-center justify-center space-x-2 text-primary">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                              className="text-xs md:text-lg font-bold"
                            >
                              25 Bondi Beach Road, NSW
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div
                        key="step-list"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 h-full"
                      >
                        <div className="p-3 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl space-y-2 md:space-y-4 flex flex-col justify-center">
                          <div className="h-3 md:h-4 w-1/2 bg-slate-200 rounded" />
                          <div className="space-y-1.5 md:space-y-2">
                            {[1, 2, 3, 4].map(i => (
                              <motion.div
                                key={i}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="h-1 md:h-2 bg-slate-200 rounded"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="p-3 md:p-6 bg-primary/5 border border-primary/20 rounded-2xl md:rounded-3xl flex flex-col justify-center text-center">
                          <div className="flex items-center justify-center space-x-2 text-primary mb-1 md:mb-2">
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest">AI Listing Agent</span>
                          </div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-[10px] md:text-sm font-headline italic text-primary leading-tight md:leading-relaxed"
                          >
                            "AI generates listings instantly."
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        key="step-leads"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-2 md:space-y-4 h-full"
                      >
                        <div className="flex items-center justify-between px-2">
                          <p className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Incoming Enquiries</p>
                          <div className="h-2 w-2 md:h-4 md:w-4 bg-primary rounded-full animate-ping" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                          {[
                            { name: "John Smith", type: "Buyer", score: 94 },
                            { name: "Sarah Chen", type: "Investor", score: 88 },
                            { name: "David Miller", type: "Downsizer", score: 72 }
                          ].map((lead, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-2 md:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-sm h-[50px] md:h-[120px] flex flex-col justify-between"
                            >
                              <div className="flex items-center space-x-2 md:space-x-3">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                  <User className="w-2.5 h-2.5 md:w-4 md:h-4 text-slate-400" />
                                </div>
                                <div className="text-left overflow-hidden">
                                  <p className="text-[7px] md:text-[10px] font-bold truncate">{lead.name}</p>
                                  <p className="text-[5px] md:text-[8px] text-slate-400 truncate">{lead.type}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-slate-50 pt-1 md:pt-2">
                                <span className="text-[5px] md:text-[8px] font-bold text-primary">LQS</span>
                                <span className="text-[7px] md:text-[10px] font-headline text-primary">{lead.score}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 3 && (
                      <motion.div
                        key="step-pipeline"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-4 md:space-y-6 h-full"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-full">
                          {["Appraisal", "Listing", "Negotiation", "Settlement"].map((stage, i) => (
                            <div key={i} className="space-y-1.5 md:space-y-3">
                              <p className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 truncate">{stage}</p>
                              <div className="h-[1px] md:h-[2px] w-full bg-slate-50" />
                              {i === 2 && (
                                <motion.div
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  className="p-2 md:p-4 bg-white border border-primary/20 rounded-lg md:rounded-xl shadow-lg shadow-primary/5"
                                >
                                  <p className="text-[7px] md:text-[10px] font-bold truncate text-[#111827]">25 Bondi Beach</p>
                                  <div className="mt-1 md:mt-2 flex items-center justify-between">
                                    <div className="h-0.5 md:h-1.5 w-6 md:w-12 bg-slate-100 rounded" />
                                    <TrendingUp className="w-2 md:w-3 md:h-3 text-primary" />
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Step Indicators Footer */}
            <div className="min-h-[48px] md:min-h-[64px] py-3 md:py-4 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-12 px-4 text-[#111827]">
              {STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-1.5 md:space-x-3 transition-opacity duration-500 ${idx === activeStep ? 'opacity-100' : 'opacity-30'}`}
                >
                  <div className={`w-1 md:w-2 h-1 md:h-2 rounded-full ${idx === activeStep ? 'bg-primary' : 'bg-slate-300'}`} />
                  <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-48 md:w-64 h-48 md:h-64 bg-primary/20 blur-[80px] md:blur-[100px] -z-10" />
          <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-48 md:w-64 h-48 md:h-64 bg-secondary/20 blur-[80px] md:blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
