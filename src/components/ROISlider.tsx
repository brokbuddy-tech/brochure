"use client";

import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { ChevronRight } from 'lucide-react';

export function ROISlider() {
  const [agents, setAgents] = useState([12]);
  
  const savedHours = agents[0] * 12; // Estimate: 12 hours saved per agent per week

  return (
    <div className="fixed bottom-0 left-0 w-full h-24 bg-background/50 backdrop-blur-sm border-t border-border/30 flex items-center justify-between px-12 z-50">
      <div className="flex flex-col space-y-2 w-1/4">
        <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-semibold">
          Drag to calculate reclaimed hours:
        </label>
        <div className="flex items-center space-x-4">
          <Slider 
            defaultValue={[12]} 
            max={50} 
            min={1} 
            step={1} 
            className="w-48"
            onValueChange={setAgents}
          />
          <span className="text-sm font-body font-bold text-foreground/80">{agents[0]} {agents[0] === 1 ? 'Agent' : 'Agents'}</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <p className="text-lg font-headline italic text-foreground/80">
          With <span className="text-primary font-bold">{agents[0]} agents</span>, Brokbuddy saves you an estimated <span className="text-primary font-bold underline underline-offset-8 decoration-primary/30">{savedHours} hours</span> a week.
        </p>
      </div>

      <div className="w-1/4 flex justify-end">
        <button className="flex items-center text-xs uppercase tracking-[0.2em] font-body font-bold text-foreground hover:text-primary transition-colors group">
          See how on a Discovery Call <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
