import React from 'react';

export function Header() {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-12 border-b border-border/50 bg-background/80 backdrop-blur-md z-50">
      <div className="flex items-center space-x-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
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
        <span className="text-2xl font-headline tracking-widest uppercase">BrokBuddy</span>
      </div>
      
      <div className="hidden md:block">
        <p className="text-muted-foreground font-body italic text-sm tracking-wide">
          "Powered by Broker. Evolved by AI."
        </p>
      </div>
      
      <div className="flex flex-col items-end space-y-0.5 text-xs tracking-tighter sm:tracking-normal sm:text-sm font-body">
        <a href="mailto:info@brokbuddy.com" className="hover:text-primary transition-colors">info@brokbuddy.com</a>
        <a href="tel:+919311899430" className="hover:text-primary transition-colors">+91 9311899430</a>
      </div>
    </nav>
  );
}
