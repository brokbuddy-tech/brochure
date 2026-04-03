"use client";

import React, { useEffect, useRef } from 'react';
import { BrochureHero } from '@/components/BrochureHero';
import { BrochureProblem } from '@/components/BrochureProblem';
import { BrochureTransformation } from '@/components/BrochureTransformation';
import { BrochurePlatform } from '@/components/BrochurePlatform';
import { BrochureAI } from '@/components/BrochureAI';
import { BrochureSystemFlow } from '@/components/BrochureSystemFlow';
import { BrochureDashboard } from '@/components/BrochureDashboard';
import { BrochurePricing } from '@/components/BrochurePricing';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-left');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden">
      <BrochureHero />
      <BrochureProblem />
      <BrochureTransformation />
      <BrochurePlatform />
      <BrochureAI />
      <BrochureSystemFlow />
      <BrochureDashboard />
      <BrochurePricing />
    </div>
  );
}
