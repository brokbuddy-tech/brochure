"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { FeatureCard } from '@/components/FeatureCard';
import { LeadInsightPanel } from '@/components/LeadInsightPanel';
import { 
  Zap, 
  DollarSign, 
  Users, 
  ShieldCheck 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Header />
      
      <main className="flex-1 flex flex-col lg:flex-row px-6 lg:px-12 py-8 gap-8 items-stretch overflow-hidden">
        
        {/* Left Side: Static Hero Section */}
        <section className="lg:w-[40%] flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-headline leading-tight tracking-tight">
              Manage. <br />
              <span className="text-primary italic">Track.</span> <br />
              Grow.
            </h1>
            <h2 className="text-2xl font-headline text-muted-foreground">All from one place.</h2>
          </div>
          
          <p className="text-lg lg:text-xl font-body text-foreground/80 max-w-lg leading-relaxed">
            A structured, elite system for managing your entire real estate business. 
            Designed to eliminate administrative friction and help Australian agencies 
            utilize their time efficiently.
          </p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-3 text-secondary font-headline text-lg">
              <span className="w-8 h-[2px] bg-secondary" />
              <span>Enterprise solutions starting from AUD 199</span>
            </div>
            
            <div className="max-w-xs">
              <LeadInsightPanel />
            </div>
          </div>

          <div className="pt-8 opacity-30">
            <div className="flex space-x-8 text-xs font-headline uppercase tracking-[0.2em]">
              <span>Bondi</span>
              <span>Surfers Paradise</span>
              <span>South Yarra</span>
              <span>Perth</span>
            </div>
          </div>
        </section>

        {/* Right Side: Bento Grid Section */}
        <section className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 lg:pb-0 h-full overflow-y-auto lg:overflow-visible pr-2 animate-in fade-in slide-in-from-right-8 duration-700">
          
          <FeatureCard 
            title="AI & Workflow Automation"
            icon={Zap}
            features={[
              "AI-Powered Insights",
              "Workflow Automation",
              "Follow-up Automation",
              "Smart Notifications",
              "Lead Quality Scoring (LQS)"
            ]}
          />

          <FeatureCard 
            title="Deal & Revenue Mastery"
            icon={DollarSign}
            features={[
              "Deal Tracking System",
              "Pipeline Management",
              "Revenue Tracking",
              "Performance Dashboard",
              "Business Intelligence"
            ]}
          />

          <FeatureCard 
            title="Agency & Team Oversight"
            icon={Users}
            features={[
              "Brokerage Management",
              "Team Management",
              "Role-Based Access Control",
              "Reporting & Analytics",
              "Growth Monitoring"
            ]}
          />

          <FeatureCard 
            title="Client & Asset Security"
            icon={ShieldCheck}
            features={[
              "Client Management",
              "Property Management",
              "Document Management",
              "Communication Tracking",
              "Cloud Access",
              "Data Security"
            ]}
          />

        </section>
      </main>

      {/* Decorative footer element */}
      <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none select-none">
        <span className="text-[12rem] font-headline">BB</span>
      </div>
    </div>
  );
}
