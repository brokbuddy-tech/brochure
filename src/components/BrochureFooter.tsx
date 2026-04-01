"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export function BrochureFooter() {
  return (
    <footer className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 reveal">
        <h2 className="text-4xl md:text-6xl font-headline tracking-tight">
          Stop managing chaos. <br />
          <span className="text-indigo-400">Start scaling with structure.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-16 px-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 text-xl font-semibold">
            Book Demo
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-white/20 text-white hover:bg-white/5 text-xl font-semibold">
            Get Started
          </Button>
        </div>
        
        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-3">
             <div className="p-2 bg-white/10 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <span className="text-2xl font-headline tracking-widest uppercase">BrokBuddy</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-body text-white/40">
            <a href="mailto:info@brokbuddy.com" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" /> info@brokbuddy.com
            </a>
            <a href="tel:+919311899430" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" /> +91 9311899430
            </a>
          </div>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 pt-10">
          © 2024 BrokBuddy PropTech. Designed for the Elite Australian Broker.
        </p>
      </div>
      
      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[150px] -z-10" />
    </footer>
  );
}
