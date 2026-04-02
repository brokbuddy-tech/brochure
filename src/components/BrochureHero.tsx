"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';

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
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground px-6">
      <Header />
      
      {/* Background with blurred elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-secondary/10 rounded-3xl blur-[120px] transition-transform duration-75 ease-out"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[140px] transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        />
        
        {/* Mock floating UI elements */}
        <div 
          className="absolute top-1/2 left-10 w-64 h-32 bg-white/80 backdrop-blur-md border border-border/10 rounded-xl p-4 shadow-xl hidden lg:block"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        >
          <div className="w-full h-2 bg-muted rounded mb-2" />
          <div className="w-2/3 h-2 bg-muted/50 rounded mb-4" />
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-primary/5" />
            <div className="flex-1 ml-3 space-y-2">
              <div className="w-full h-2 bg-muted/30 rounded" />
              <div className="w-full h-2 bg-muted/30 rounded" />
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-1/3 right-10 w-72 h-48 bg-white/80 backdrop-blur-md border border-border/10 rounded-xl p-6 shadow-xl hidden lg:block"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-20 h-2 bg-muted rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-full h-3 bg-muted/20 rounded" />
            <div className="w-full h-3 bg-muted/20 rounded" />
            <div className="w-3/4 h-3 bg-muted/20 rounded" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8 reveal">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline leading-tight tracking-tight text-primary">
          A Structured System for Managing Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Entire Real Estate Business</span>
        </h1>
        <p className="text-lg md:text-xl font-body text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Manage listings, track deals, monitor performance, and scale your brokerage — all from one intelligent platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="h-14 px-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-semibold group shadow-lg shadow-accent/20">
            Book Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-foreground/50 hover:text-primary hover:bg-muted group">
            Explore Platform <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-muted-foreground animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}