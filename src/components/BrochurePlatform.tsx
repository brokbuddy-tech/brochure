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
  DollarSign 
} from 'lucide-react';

const MODULES = [
  {
    icon: Building2,
    title: "Brokerage Management",
    benefit: "Manage your entire team from a single, high-performance cockpit.",
    features: ["Role-based access", "Commission automation", "Team KPIs", "Compliance tracking"]
  },
  {
    icon: Zap,
    title: "Deal Tracking System",
    benefit: "See exactly where every deal stands — in real time.",
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
    benefit: "Predictive intelligence that finds your next listing.",
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
    <section className="py-24 px-6 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6 text-primary">The Anatomy of a High-Performance Agency</h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">Explore the core architecture of BrokBuddy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, idx) => (
            <div 
              key={idx}
              className={cn(
                "relative p-8 rounded-3xl bg-background border border-border/10 transition-all duration-500 cursor-default group",
                hoveredIdx === idx ? "shadow-2xl -translate-y-2 border-secondary/30" : "shadow-sm"
              )}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                <mod.icon className={cn("w-6 h-6 transition-colors", hoveredIdx === idx ? "text-secondary" : "text-muted-foreground")} />
              </div>
              <h3 className="text-xl font-headline mb-4 text-primary">{mod.title}</h3>
              <p className="text-sm font-body text-muted-foreground mb-6 leading-relaxed">{mod.benefit}</p>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500",
                hoveredIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}>
                <ul className="space-y-2 pt-2 border-t border-border/10">
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
      </div>
    </section>
  );
}