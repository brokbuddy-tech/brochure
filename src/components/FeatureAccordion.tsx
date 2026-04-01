"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, BarChart3, ShieldCheck, Zap, ChevronRight, Lock } from 'lucide-react';

const FEATURES = [
  {
    id: 'ai',
    title: 'AI & Workflow Automation',
    icon: Sparkles,
    color: 'text-primary',
    items: [
      'AI-Powered Insights',
      'Workflow Automation',
      'Follow-up Automation',
      'Smart Notifications',
      'Lead Quality Scoring (LQS)'
    ]
  },
  {
    id: 'deal',
    title: 'Deal & Client Mastery',
    icon: Zap,
    color: 'text-secondary',
    items: [
      'Deal Tracking System',
      'Pipeline Management',
      'Client Management',
      'Communication Tracking'
    ]
  },
  {
    id: 'agency',
    title: 'Complete Agency Operations',
    icon: ShieldCheck,
    color: 'text-foreground/60',
    items: [
      'Brokerage & Team Management',
      'Property Management',
      'Document Management',
      'Role-Based Access Control'
    ]
  },
  {
    id: 'intelligence',
    title: 'Intelligence & Security',
    icon: Lock,
    color: 'text-primary/60',
    items: [
      'Performance Dashboards',
      'Revenue Tracking',
      'Business Intelligence',
      'Cloud Access & Data Security'
    ]
  }
];

export function FeatureAccordion() {
  const [activeTab, setActiveTab] = useState<string | null>('ai');

  return (
    <div className="flex-1 flex flex-col space-y-2">
      {FEATURES.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <div
            key={tab.id}
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-700 cursor-default",
              isActive ? "flex-1 bg-white/60 border-primary/20 p-6" : "h-16 bg-transparent border-transparent px-4 flex items-center"
            )}
            onMouseEnter={() => setActiveTab(tab.id)}
          >
            <div className={cn(
              "flex items-start w-full",
              !isActive && "items-center"
            )}>
              <div className={cn(
                "p-2 rounded-xl transition-all duration-500",
                isActive ? "bg-primary/10 mr-4" : "bg-foreground/5 mr-3"
              )}>
                <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-foreground/40")} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "font-headline transition-all duration-500",
                    isActive ? "text-xl mb-4" : "text-base text-foreground/60"
                  )}>
                    {tab.title}
                  </h4>
                  {!isActive && <ChevronRight className="w-4 h-4 text-foreground/20 group-hover:translate-x-1 transition-transform" />}
                </div>
                
                {isActive && (
                  <ul className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700">
                    {tab.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm font-body text-foreground/70">
                        <div className="w-1 h-1 rounded-full bg-primary/40 mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {isActive && (
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            )}
          </div>
        );
      })}
    </div>
  );
}