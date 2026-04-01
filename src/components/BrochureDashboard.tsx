"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function BrochureDashboard() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-headline mb-6">Total Agency Oversight</h2>
          <p className="text-lg text-white/50 font-body max-w-2xl mx-auto mb-8">Every decision backed by real data. Monitor your growth with surgical precision.</p>
        </div>

        <div className="reveal">
          <Card className="bg-white/5 border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <CardContent className="p-0">
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-slate-800 to-slate-950 p-6 md:p-12 relative overflow-hidden">
                {/* Mock Dashboard UI */}
                <div className="grid grid-cols-12 gap-6 h-full">
                  <div className="col-span-3 space-y-6 hidden lg:block">
                    <div className="h-12 w-full bg-white/10 rounded-xl" />
                    <div className="space-y-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="h-4 w-full bg-white/5 rounded" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-12 lg:col-span-9 space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-6 w-48 bg-white/20 rounded-lg" />
                        <div className="h-4 w-32 bg-white/10 rounded-lg" />
                      </div>
                      <Badge variant="outline" className="text-indigo-400 border-indigo-400/30">Live Analytics</Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div className="h-32 bg-white/10 rounded-3xl p-6">
                        <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                      </div>
                      <div className="h-32 bg-white/10 rounded-3xl p-6">
                        <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                      </div>
                      <div className="h-32 bg-white/10 rounded-3xl p-6">
                        <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-white/5 rounded-[2rem] p-8 min-h-[200px] border border-white/5">
                      <div className="flex justify-between items-center mb-10">
                        <div className="h-6 w-40 bg-white/10 rounded" />
                        <div className="flex space-x-2">
                          <div className="w-8 h-4 bg-indigo-500 rounded" />
                          <div className="w-8 h-4 bg-purple-500 rounded" />
                        </div>
                      </div>
                      <div className="flex items-end space-x-4 h-32">
                        {[40, 60, 45, 90, 70, 100, 80, 55].map((h, i) => (
                          <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating tags */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 pointer-events-none">
                   <div className="px-6 py-3 bg-indigo-600 rounded-full text-xs font-bold shadow-2xl animate-bounce">Revenue Tracking</div>
                   <div className="px-6 py-3 bg-purple-600 rounded-full text-xs font-bold shadow-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>Growth Monitoring</div>
                   <div className="px-6 py-3 bg-slate-800 rounded-full text-xs font-bold shadow-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>Agent KPIs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
