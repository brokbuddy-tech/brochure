"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, BarChart3, ShieldCheck, ChevronRight } from 'lucide-react';

const FEATURES = [
  {
    id: 'ai',
    title: 'AI & Automated Workflows',
    icon: Sparkles,
    color: 'text-primary',
    items: [
      'AI-summarized communications',
      'Generative listing descriptions',
      'Automated follow-ups',
      'Lead Quality Scoring (LQS)'
    ]
  },
  {
    id: 'deal',
    title: 'Deal & Pipeline Mastery',
    icon: BarChart3,
    color: 'text-secondary',
    items: [
      'Real-time revenue tracking',
      'Advanced pipeline management',
      'Business intelligence dashboards',
      'Performance forecasting'
    ]
  },
  {
    id: 'agency',
    title: 'Total Agency Oversight',
    icon: ShieldCheck,
    color: 'text-foreground/60',
    items: [
      'Team management & permissions',
      'Automated portal syndication',
      'Domain & REA Group integration',
      'Enterprise-grade data security'
    ]
  }
];

export function FeatureAccordion() {
  const [activeTab, setActiveTab] = useState<string | null>('ai');

  return (
    <div className="flex-1 flex flex-col space-y-4">
      {FEATURES.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <div
            key={tab.id}
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-700 cursor-default",
              isActive ? "flex-1 bg-white/60 border-primary/20 p-8" : "h-20 bg-transparent border-transparent px-6 flex items-center"
            )}
            onMouseEnter={() => setActiveTab(tab.id)}
          >
            <div className={cn(
              "flex items-start w-full",
              !isActive && "items-center"
            )}>
              <div className={cn(
                "p-3 rounded-xl transition-all duration-500",
                isActive ? "bg-primary/10 mr-6" : "bg-foreground/5 mr-4"
              )}>
                <Icon className={cn("w-6 h-6", isActive ? "text-primary" : "text-foreground/40")} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "font-headline transition-all duration-500",
                    isActive ? "text-2xl mb-4" : "text-lg text-foreground/60"
                  )}>
                    {tab.title}
                  </h4>
                  {!isActive && <ChevronRight className="w-4 h-4 text-foreground/20 group-hover:translate-x-1 transition-transform" />}
                </div>
                
                {isActive && (
                  <ul className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-700">
                    {tab.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm font-body text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Visual accent for active tab */}
            {isActive && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            )}
          </div>
        );
      })}
    </div>
  );
}
