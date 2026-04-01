import React from 'react';

export function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50">
      <div className="flex items-center space-x-2 group cursor-pointer">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground transition-transform duration-500 group-hover:rotate-12"
        >
          <path
            d="M20 5L5 15V35H15V25H25V35H35V15L20 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-xl font-headline tracking-[0.2em] uppercase text-foreground/90">BrokBuddy</span>
      </div>
      
      <div className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.15em] font-body text-foreground/60">
        <a href="mailto:info@brokbuddy.com" className="hover:text-foreground transition-colors">info@brokbuddy.com</a>
        <span className="opacity-30">|</span>
        <a href="tel:+919311899430" className="hover:text-foreground transition-colors">+91 9311899430</a>
      </div>
    </nav>
  );
}
