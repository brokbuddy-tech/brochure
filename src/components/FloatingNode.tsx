"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface FloatingNodeProps {
  title: string;
  features: string[];
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function FloatingNode({ title, features, position }: FloatingNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = {
    'top-left': 'top-28 left-12 origin-top-left',
    'top-right': 'top-28 right-12 origin-top-right',
    'bottom-left': 'bottom-32 left-12 origin-bottom-left',
    'bottom-right': 'bottom-32 right-12 origin-bottom-right',
  };

  return (
    <>
      {/* Backdrop blur when any node is hovered */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/20 backdrop-blur-[2px] transition-opacity duration-700 pointer-events-none z-30",
          isHovered ? "opacity-100" : "opacity-0"
        )} 
      />
      
      <div 
        className={cn(
          "fixed z-40 transition-all duration-700 ease-in-out",
          positionClasses[position],
          isHovered ? "scale-110" : "scale-100"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "frosted-pill px-6 py-3 rounded-full flex items-center space-x-3 cursor-default group overflow-hidden",
          isHovered ? "max-h-[400px] max-w-[320px] rounded-2xl py-6 px-8 flex-col items-start space-x-0 space-y-4" : "max-h-12 max-w-[240px]"
        )}>
          <div className="flex items-center space-x-3 w-full">
            <Sparkles className={cn("w-4 h-4 text-primary transition-transform duration-500", isHovered && "rotate-45")} />
            <span className="text-xs font-body tracking-[0.1em] uppercase font-semibold whitespace-nowrap">{title}</span>
          </div>
          
          <div className={cn(
            "w-full transition-all duration-500 overflow-hidden",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 h-0"
          )}>
            <div className="h-px w-full bg-primary/20 mb-4" />
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="text-[13px] text-foreground/70 font-body flex items-center">
                  <div className="w-1 h-1 rounded-full bg-primary mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
