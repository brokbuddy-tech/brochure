"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function BrochurePricing() {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-8">Scale Without the Friction</h2>
          <div className="inline-block p-12 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-200 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600" />
             
             <p className="text-sm font-body text-slate-400 uppercase tracking-widest mb-4">Enterprise Foundation</p>
             <div className="flex items-center justify-center space-x-2 mb-8">
               <span className="text-xl md:text-2xl font-body text-slate-400">from</span>
               <span className="text-5xl md:text-7xl font-headline text-black">AUD 199</span>
               <span className="text-lg font-body text-slate-400">/mo</span>
             </div>
             
             <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
               <li className="flex items-center space-x-3 text-slate-600 font-body">
                 <Check className="w-5 h-5 text-indigo-600" />
                 <span>2 Premium Broker Seats Included</span>
               </li>
               <li className="flex items-center space-x-3 text-slate-600 font-body">
                 <Check className="w-5 h-5 text-indigo-600" />
                 <span>All Platform Modules</span>
               </li>
               <li className="flex items-center space-x-3 text-slate-600 font-body">
                 <Check className="w-5 h-5 text-indigo-600" />
                 <span>AI Feature Set</span>
               </li>
             </ul>
             
             <Button className="w-full h-14 rounded-2xl bg-black text-white hover:bg-black/90 text-lg font-semibold group">
               Get Started Now <Check className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
