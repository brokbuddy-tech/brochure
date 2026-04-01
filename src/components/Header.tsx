"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 lg:px-12 z-[100] transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 h-16" : "bg-transparent py-6 h-24"
    )}>
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className={cn(
          "p-2 rounded-xl transition-colors",
          isScrolled ? "bg-slate-100" : "bg-white/10"
        )}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-transform duration-500 group-hover:rotate-12",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            <path
              d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className={cn(
          "text-xl font-headline tracking-widest uppercase transition-colors",
          isScrolled ? "text-slate-900" : "text-white"
        )}>
          BrokBuddy
        </span>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className={cn(
          "hidden md:flex items-center space-x-6 text-[11px] uppercase tracking-widest font-body font-bold transition-colors",
          isScrolled ? "text-slate-500" : "text-white/40"
        )}>
          <a href="mailto:info@brokbuddy.com" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button 
          size="sm" 
          className={cn(
            "rounded-full px-6 h-10 font-bold transition-all duration-300",
            isScrolled 
              ? "bg-indigo-600 text-white hover:bg-indigo-700" 
              : "bg-white text-black hover:bg-white/90"
          )}
        >
          Book Demo
        </Button>
      </div>
    </nav>
  );
}
