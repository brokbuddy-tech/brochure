"use client";

import React from 'react';

export function BrochureTransformation() {
  return (
    <section className="py-40 bg-white text-black text-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 reveal">
        <h2 className="text-4xl md:text-6xl font-headline tracking-tight">
          What if everything was in <span className="italic text-indigo-600">ONE system?</span>
        </h2>
        
        <div className="relative py-20 flex justify-center items-center">
          {/* Chaos to Order animation concept */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-indigo-100 animate-pulse" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-indigo-50/50" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex flex-col items-center space-y-4 opacity-30 grayscale blur-[1px]">
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded bg-black/10 flex items-center justify-center">
                    <div className="w-4 h-1 bg-black/20" />
                  </div>
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest font-body">Chaos</span>
            </div>
            
            <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-6 bg-indigo-600 rounded-2xl shadow-2xl shadow-indigo-200 scale-125">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
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
              </div>
              <span className="text-xs uppercase tracking-widest font-body font-bold text-indigo-600 pt-6">Structure</span>
            </div>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl font-headline max-w-2xl mx-auto text-black/80">
          BrokBuddy replaces chaos with structure, giving you absolute control over your growth.
        </p>
      </div>
    </section>
  );
}
