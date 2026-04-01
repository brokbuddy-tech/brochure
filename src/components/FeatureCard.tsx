"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  features: string[];
  icon: LucideIcon;
  className?: string;
  delay?: string;
}

export function FeatureCard({ title, features, icon: Icon, className, delay }: FeatureCardProps) {
  return (
    <div className={cn("group perspective-1000 w-full h-full min-h-[220px]", className)}>
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-card rounded-xl border border-border shadow-lg">
          <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-headline text-center">{title}</h3>
          <div className="mt-4 flex items-center text-primary text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>

        {/* Back Face (Hover Reveal) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col p-8 bg-card rounded-xl border border-primary/30 shadow-2xl justify-center">
          <h4 className="text-primary font-headline text-lg mb-4 border-b border-primary/20 pb-2">{title}</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm font-body text-foreground/90 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
