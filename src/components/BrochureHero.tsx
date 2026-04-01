"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function BrochureHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      {/* Background with blurred dashboard UI elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-primary/20 rounded-3xl blur-[100px] transition-transform duration-75 ease-out"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        />
        
        {/* Mock floating UI elements */}
        <div 
          className="absolute top-1/2 left-10 w-64 h-32 glass-card rounded-xl p-4 hidden lg:block"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        >
          <div className="w-full h-2 bg-white/20 rounded mb-2" />
          <div className="w-2/3 h-2 bg-white/10 rounded mb-4" />
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20" />
            <div className="flex-1 ml-3 space-y-2">
              <div className="w-full h-2 bg-white/10 rounded" />
              <div className="w-full h-2 bg-white/10 rounded" />
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-1/3 right-10 w-72 h-48 glass-card rounded-xl p-6 hidden lg:block"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="w-20 h-2 bg-white/20 rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-full h-3 bg-white/10 rounded" />
            <div className="w-full h-3 bg-white/10 rounded" />
            <div className="w-3/4 h-3 bg-white/10 rounded" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8 reveal">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-tight tracking-tight">
          A Structured System for Managing Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">Entire Real Estate Business</span>
        </h1>
        <p className="text-lg md:text-xl font-body text-white/70 max-w-3xl mx-auto leading-relaxed">
          Manage listings, track deals, monitor performance, and scale your brokerage — all from one intelligent platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 text-lg font-semibold group">
            Book Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-white/60 hover:text-white hover:bg-white/5 group">
            Explore Platform <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
