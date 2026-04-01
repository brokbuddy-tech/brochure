"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { LeadInsightPanel } from '@/components/LeadInsightPanel';
import { Slider } from '@/components/ui/slider';
import { FeatureAccordion } from '@/components/FeatureAccordion';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [agents, setAgents] = useState([10]);
  const reclaimedHours = agents[0] * 12;

  return (
    <div className="relative h-screen w-full bg-background overflow-hidden p-6 lg:p-10 flex flex-col space-y-6">
      <Header />
      
      <main className="flex-1 grid grid-cols-12 grid-rows-6 gap-6 pt-20">
        
        {/* Compartment 1: Hero & Branding */}
        <div className="col-span-8 row-span-3 frosted-bento rounded-[2.5rem] p-12 flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-headline leading-[1.1] tracking-tight text-foreground">
              The Unfair Advantage for <br />
              <span className="italic text-primary">Australia's Top Agents.</span>
            </h1>
            <p className="text-xl font-body text-foreground/70 max-w-2xl leading-relaxed font-light">
              An elite, AI-driven ecosystem designed to eliminate administrative friction and scale your agency's revenue.
            </p>
          </div>
          <div className="pt-4">
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-primary/20 text-primary bg-primary/5 rounded-full">
              Enterprise solutions from AUD 199/mo <span className="mx-2 opacity-30">•</span> Includes 2 broker seats
            </Badge>
          </div>
        </div>

        {/* Compartment 4: Feature Accordion (Right Side, Full Height) */}
        <div className="col-span-4 row-span-6 frosted-bento rounded-[2.5rem] p-8 flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.2em] font-body font-bold text-foreground/40 mb-8">
            Capabilities Ecosystem
          </h3>
          <FeatureAccordion />
        </div>

        {/* Compartment 2: Conversion Engine (Center Left) */}
        <div className="col-span-4 row-span-3 frosted-bento rounded-[2.5rem] p-10 flex flex-col items-center justify-center space-y-6 animate-glow border-primary/20">
          <LeadInsightPanel />
          <p className="text-center text-sm font-body text-foreground/50 max-w-[200px] leading-relaxed">
            See how we can transform your workflow in a 15-minute personalized demo.
          </p>
        </div>

        {/* Compartment 3: Dynamic ROI Calculator (Bottom Left) */}
        <div className="col-span-4 row-span-3 frosted-bento rounded-[2.5rem] p-10 flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h4 className="text-lg font-headline text-foreground">Calculate Your Reclaimed Time</h4>
            <p className="text-xs font-body text-foreground/40 uppercase tracking-widest">Select Team Size</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-headline text-primary">{agents[0]} Agents</span>
              <Slider 
                defaultValue={[10]} 
                max={50} 
                min={1} 
                step={1} 
                className="w-1/2"
                onValueChange={setAgents}
              />
            </div>
            
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-lg font-body leading-relaxed">
                Brokbuddy's automation will save your agency an estimated <span className="font-bold text-primary underline decoration-primary/30 underline-offset-4">{reclaimedHours} hours</span> per week.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Subtle background branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[40rem] font-headline">BB</span>
      </div>
    </div>
  );
}
