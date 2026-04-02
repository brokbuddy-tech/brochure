
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  Zap, 
  Home, 
  Users, 
  Sparkles, 
  BarChart3, 
  GitPullRequest, 
  DollarSign,
  ArrowRight
} from 'lucide-react';

const MODULES = [
  {
    icon: Building2,
    title: "Brokerage Management",
    benefit: "Run your entire team from one unified cockpit.",
    features: ["Role-based access", "Commission automation", "Team KPIs", "Compliance tracking"]
  },
  {
    icon: Zap,
    title: "Deal Tracking System",
    benefit: "Know exactly where every deal stands — instantly.",
    features: ["Contract milestones", "Deadline alerts", "Settlement tracking", "Document sync"]
  },
  {
    icon: Home,
    title: "Property Management",
    benefit: "Scale your rent roll without the operational headache.",
    features: ["Lease tracking", "Landlord portal", "Inspection workflows", "Repair requests"]
  },
  {
    icon: Users,
    title: "Client Insights",
    benefit: "Know your prospects better than they know themselves.",
    features: ["360 client view", "Communication history", "Preference tracking", "Automated follow-ups"]
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    benefit: "Surface opportunities before they’re obvious.",
    features: ["Market scoring", "Lead potential scoring", "Insight automation", "Predictive churn"]
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    benefit: "Granular visibility into what is actually driving your success.",
    features: ["Agent ranking", "Conversion metrics", "Marketing ROI", "Trend analysis"]
  },
  {
    icon: GitPullRequest,
    title: "Pipeline Management",
    benefit: "Master your deal flow from appraisal to settlement.",
    features: ["Visual deal board", "Task automation", "Multi-stage pipeline", "Bulk updates"]
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking",
    benefit: "Forecast your commissions and monitor growth with precision.",
    features: ["Commission splits", "Cash flow forecast", "Revenue reports", "Payment tracking"]
  }
];

export function BrochurePlatform() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[#f9fafb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-primary tracking-tight">
            The Anatomy of a High-Performance Agency
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-12">
            Explore the core architecture of BrokBuddy. A system designed to scale.
          </p>

          {/* Progression Line */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Core Modules</span>
              <ArrowRight className="w-3 h-3 text-primary/20" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Intelligence</span>
              <ArrowRight className="w-3 h-3 text-secondary/40" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Growth</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, idx) => (
            <div 
              key={idx}
              className={cn(
                "relative p-8 rounded-3xl bg-white border border-border/10 transition-all duration-500 cursor-default group",
                hoveredIdx === null ? "opacity-60" : hoveredIdx === idx ? "opacity-100 scale-[1.02] -translate-y-2 shadow-2xl border-secondary/30 z-10" : "opacity-40"
              )}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
                hoveredIdx === idx ? "bg-secondary text-white scale-110" : "bg-muted text-muted-foreground"
              )}>
                <mod.icon className="w-6 h-6" />
              </div>
              <h3 className={cn(
                "text-xl font-headline mb-4 transition-colors",
                hoveredIdx === idx ? "text-primary" : "text-primary/70"
              )}>{mod.title}</h3>
              <p className="text-sm font-body text-muted-foreground mb-6 leading-relaxed">{mod.benefit}</p>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500",
                hoveredIdx === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              )}>
                <ul className="space-y-2 pt-4 border-t border-border/10">
                  {mod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs font-body text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-secondary mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-sm font-body text-muted-foreground/60 italic">
            "All of this works together — not in silos."
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
    </section>
  );
}
