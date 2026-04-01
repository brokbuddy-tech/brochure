
"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { FloatingNode } from '@/components/FloatingNode';
import { ROISlider } from '@/components/ROISlider';
import { Button } from '@/components/ui/button';
import { LeadInsightPanel } from '@/components/LeadInsightPanel';

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center">
      {/* Breathing background gradients */}
      <div className="absolute inset-0 bg-gradient-breathing pointer-events-none opacity-50" />
      
      <Header />
      
      {/* Floating Nodes */}
      <FloatingNode 
        title="AI & Automation"
        position="top-left"
        features={[
          "AI-Powered Insights",
          "Follow-up Automation",
          "Workflow Automation",
          "Smart Notifications",
          "Lead Quality Scoring (LQS)"
        ]}
      />
      
      <FloatingNode 
        title="Deal & Client Mastery"
        position="top-right"
        features={[
          "Deal Tracking System",
          "Pipeline Management",
          "Client Management",
          "Communication Tracking"
        ]}
      />
      
      <FloatingNode 
        title="Agency Operations"
        position="bottom-left"
        features={[
          "Brokerage Management",
          "Property Management",
          "Document Management",
          "Team Management",
          "Role-Based Access Control"
        ]}
      />
      
      <FloatingNode 
        title="Intelligence & Security"
        position="bottom-right"
        features={[
          "Performance Dashboard",
          "Analytics & Insights",
          "Revenue Tracking",
          "Business Intelligence",
          "Growth Monitoring",
          "Data Security",
          "Cloud Access"
        ]}
      />

      {/* Center Stage */}
      <main className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center space-y-8 animate-in fade-in zoom-in-95 duration-1000">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-headline leading-[1.1] tracking-tight text-foreground">
            A Structured System for <br />
            the <span className="italic text-primary">Elite</span> Australian Agency.
          </h1>
          <p className="text-lg lg:text-xl font-body text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light">
            Powered by Broker. Evolved by AI. Eliminate administrative friction, reclaim your time, and track every deal flawlessly.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 w-full max-w-md">
          <LeadInsightPanel />
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold">
            Enterprise solutions from AUD 199/mo <span className="text-primary/50 ml-2">•</span> Includes 2 broker seats
          </p>
        </div>
      </main>

      <ROISlider />

      {/* Subtle branding element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30rem] font-headline">BB</span>
      </div>
    </div>
  );
}
