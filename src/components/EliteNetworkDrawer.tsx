
"use client";

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ELITE_LEADS } from '@/app/lib/lead-list';
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

export function EliteNetworkDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-[11px] uppercase tracking-[0.15em] font-body text-primary hover:text-primary/80 transition-colors font-bold border-b border-primary/30 pb-0.5">
          Elite Network Insights
        </button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[540px] bg-background border-l border-primary/20 p-0">
        <div className="h-full flex flex-col">
          <SheetHeader className="p-8 border-b border-primary/10">
            <SheetTitle className="font-headline text-3xl text-foreground flex items-center">
              <ShieldCheck className="w-6 h-6 mr-3 text-primary" />
              Elite Market Intelligence
            </SheetTitle>
            <p className="text-sm font-body text-muted-foreground mt-2 italic">
              Benchmark analysis for the top 1% of Australian independent agencies.
            </p>
          </SheetHeader>
          
          <ScrollArea className="flex-1 px-8 py-6">
            <div className="space-y-8 pb-12">
              {ELITE_LEADS.map((lead) => (
                <div key={lead.id} className="group relative bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-headline text-foreground">{lead.name}</h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {lead.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-[10px] uppercase tracking-widest px-3">
                      {lead.category}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <div className="flex items-center text-[10px] uppercase tracking-tighter text-primary/60 font-bold mb-1">
                        <TrendingUp className="w-3 h-3 mr-1" /> Performance
                      </div>
                      <div className="text-sm font-semibold text-foreground/80 leading-tight">
                        {lead.performance}
                      </div>
                    </div>
                    <div className="bg-secondary/5 p-3 rounded-lg border border-secondary/10">
                      <div className="flex items-center text-[10px] uppercase tracking-tighter text-secondary/60 font-bold mb-1">
                        <Users className="w-3 h-3 mr-1" /> Personnel
                      </div>
                      <div className="text-sm font-semibold text-foreground/80">
                        {lead.personnel.join(', ')}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                      <Target className="w-3 h-3 mr-1" /> BrokBuddy Insight
                    </div>
                    <p className="text-sm font-body text-foreground/70 leading-relaxed bg-white/30 p-4 rounded-lg italic">
                      "{lead.insight}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
