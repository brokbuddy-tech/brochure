import React from 'react';
import { EliteNetworkDrawer } from './EliteNetworkDrawer';

export function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="p-2 bg-foreground/5 rounded-xl group-hover:bg-primary/10 transition-colors">
          <svg
            width="28"
            height="28"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground transition-transform duration-500 group-hover:rotate-12"
          >
            <path
              d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <span className="text-lg font-headline tracking-[0.2em] uppercase text-foreground">BrokBuddy</span>
      </div>
      
      <div className="flex items-center space-x-12">
        <div className="hidden lg:block">
          <EliteNetworkDrawer />
        </div>
        <div className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-body font-bold text-foreground/40">
          <a href="mailto:info@brokbuddy.com" className="hover:text-primary transition-colors">info@brokbuddy.com</a>
          <span className="opacity-20">|</span>
          <a href="tel:+919311899430" className="hover:text-primary transition-colors">+91 9311899430</a>
        </div>
      </div>
    </nav>
  );
}
