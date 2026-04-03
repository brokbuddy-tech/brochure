
"use client";

import React, { useState, useEffect } from 'react';
import TextPressure from './TextPressure';

export function AnimatedLogoSection() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        setIsMounted(true);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div key={isMounted ? (isMobile ? 'mobile' : 'desktop') : 'server'} className="hidden md:flex w-full bg-background items-center justify-center overflow-hidden relative z-10 py-12 select-none">

            {/* Container Strategy:
        - h-[150px] to h-[350px]: Responsive height that grows with screen.
        - max-w-[98%]: Allows text to span almost the entire width.
        - gap-4: Adds space between the two text sections.
      */}
            <div className="relative w-full max-w-[98%] h-[150px] sm:h-[250px] md:h-[350px] flex items-center justify-center gap-4">

                {/* "BROK" 
           flex: 4 -> Takes up 4/9ths of width.
           justify-end -> Pushes text to the right to touch "BUDDY".
        */}
                <div className="h-full flex items-center justify-end" style={{ flex: 4 }}>
                    <div className="w-full h-full relative">
                        <TextPressure
                            text="BROK"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={!isMobile}
                            weight={!isMobile}
                            italic={false}
                            textColor="#0F4C81"
                            minFontSize={30}
                            className={isMobile ? 'font-bold' : 'font-normal'}
                        />
                    </div>
                </div>

                {/* "BUDDY"
           flex: 5 -> Takes up 5/9ths of width.
           justify-start -> Pushes text to the left to touch "BROK".
        */}
                <div className="h-full flex items-center justify-start" style={{ flex: 5 }}>
                    <div className="w-full h-full relative">
                        <TextPressure
                            text="BUDDY"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={!isMobile}
                            weight={!isMobile}
                            italic={false}
                            textColor="#F78F2E"
                            minFontSize={30}
                            className={isMobile ? 'font-bold' : 'font-normal'}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
