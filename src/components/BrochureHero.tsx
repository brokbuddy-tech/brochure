"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Sparkles, User, Building2, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { id: 'add', label: 'Adding Property' },
  { id: 'list', label: 'AI Listing' },
  { id: 'leads', label: 'Lead Capture' },
  { id: 'pipeline', label: 'Deal Update' },
];

export function BrochureHero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col pt-32 pb-20 overflow-hidden bg-white text-[#111827] px-6">
      <Header />
      
      {/* Background - Very minimal light theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-headline leading-tight tracking-tight text-[#111827]">
            Run your entire brokerage <br className="hidden md:block" />
            <span className="text-primary italic">from one system.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
            <Button size="lg" className="h-14 px-10 rounded-full bg-[#111827] text-white hover:bg-slate-800 text-lg font-semibold group shadow-xl">
              Book Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm font-body text-slate-400 font-medium">
            Used by modern real estate teams to manage listings, leads, and deals.
          </p>
        </motion.div>

        {/* Live Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          <div className="relative bg-white rounded-[2rem] border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Browser Header */}
            <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-6 space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="flex-1 max-w-xs mx-auto h-6 bg-white rounded-md border border-slate-200 text-[10px] flex items-center justify-center text-slate-400">
                app.brokbuddy.com
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="aspect-[16/9] md:aspect-[21/9] p-8 flex bg-white">
              {/* Sidebar Mock */}
              <div className="w-1/5 border-r border-slate-50 space-y-6 pr-6 hidden md:block">
                <div className="h-4 w-2/3 bg-slate-100 rounded" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-8 rounded-lg flex items-center px-3 ${i - 1 === activeStep ? 'bg-primary/5 text-primary' : 'text-slate-400'}`}>
                      <div className="w-3 h-3 rounded-full bg-current opacity-20 mr-2" />
                      <div className="h-2 w-full bg-current opacity-10 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Canvas */}
              <div className="flex-1 pl-0 md:pl-8 space-y-8 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Agency Overview</h3>
                    <div className="h-2 w-24 bg-slate-100 rounded" />
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-24 bg-slate-50 border border-slate-100 rounded-lg" />
                  </div>
                </div>

                {/* Animated State Container */}
                <div className="h-full">
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && (
                      <motion.div
                        key="step-add"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="p-8 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 h-64"
                      >
                        <div className="p-4 bg-slate-50 rounded-full">
                          <Building2 className="w-8 h-8 text-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-slate-400">Add New Property</p>
                          <div className="flex items-center space-x-2 text-primary">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                              className="text-lg font-bold"
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
                        className="grid grid-cols-2 gap-8 h-64"
                      >
                        <div className="p-6 bg-slate-50 rounded-3xl space-y-4">
                          <div className="h-4 w-1/2 bg-slate-200 rounded" />
                          <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => (
                              <motion.div 
                                key={i}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="h-2 bg-slate-200 rounded" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl space-y-4">
                          <div className="flex items-center space-x-2 text-primary">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">AI Listing Agent</span>
                          </div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-sm font-headline italic text-primary leading-relaxed"
                          >
                            "Experience unparalleled luxury at this coastal masterpiece. Featuring panoramic Pacific views and master-crafted interiors..."
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
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between px-2">
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Incoming Enquiries</p>
                          <div className="h-4 w-4 bg-primary rounded-full animate-ping" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
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
                              className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                            >
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                  <User className="w-4 h-4 text-slate-400" />
                                </div>
                                <div className="text-left">
                                  <p className="text-[10px] font-bold">{lead.name}</p>
                                  <p className="text-[8px] text-slate-400">{lead.type}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                                <span className="text-[8px] font-bold text-primary">LQS</span>
                                <span className="text-[10px] font-headline text-primary">{lead.score}</span>
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
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-4 gap-4">
                          {["Appraisal", "Listing", "Negotiation", "Settlement"].map((stage, i) => (
                            <div key={i} className="space-y-3">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{stage}</p>
                              <div className="h-[2px] w-full bg-slate-50" />
                              {i === 2 && (
                                <motion.div
                                  initial={{ x: -100, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  className="p-4 bg-white border border-primary/20 rounded-xl shadow-lg shadow-primary/5"
                                >
                                  <p className="text-[10px] font-bold">25 Bondi Beach</p>
                                  <div className="mt-2 flex items-center justify-between">
                                    <div className="h-1.5 w-12 bg-slate-100 rounded" />
                                    <TrendingUp className="w-3 h-3 text-primary" />
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
            <div className="h-16 border-t border-slate-100 bg-slate-50/50 flex items-center justify-center space-x-12">
              {STEPS.map((step, idx) => (
                <div 
                  key={step.id} 
                  className={`flex items-center space-x-3 transition-opacity duration-500 ${idx === activeStep ? 'opacity-100' : 'opacity-30'}`}
                >
                  <div className={`w-2 h-2 rounded-full ${idx === activeStep ? 'bg-primary' : 'bg-slate-300'}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
