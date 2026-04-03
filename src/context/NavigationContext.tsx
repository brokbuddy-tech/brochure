
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollToPlugin);
}

type FlightPhase = 'idle' | 'calibrating' | 'transit' | 'arrived';

interface NavigationContextType {
    isActive: boolean;
    flightPhase: FlightPhase;
    targetId: string | null;
    launchMission: (targetId: string) => void;
    dismiss: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

interface NavigationProviderProps {
    children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [flightPhase, setFlightPhase] = useState<FlightPhase>('idle');
    const [targetId, setTargetId] = useState<string | null>(null);

    const launchMission = useCallback((target: string) => {
        try {
            const currentUrl = new URL(window.location.href);
            const targetUrl = new URL(target, window.location.origin);

            const isSamePage = targetUrl.origin === currentUrl.origin && 
                              (targetUrl.pathname === currentUrl.pathname || 
                               (targetUrl.pathname === '/' && currentUrl.pathname === ''));

            if (isSamePage && targetUrl.hash) {
                const selector = targetUrl.hash;
                const targetElement = document.querySelector(selector);
                
                if (targetElement) {
                    const targetRect = targetElement.getBoundingClientRect();
                    const isTargetVisible = targetRect.top >= 0 && targetRect.bottom <= window.innerHeight;

                    setTargetId(selector);
                    setIsActive(true);

                    if (isTargetVisible) {
                        setFlightPhase('arrived');
                    } else {
                        setFlightPhase('calibrating');
                        setTimeout(() => {
                            setFlightPhase('transit');
                        }, 500); 
                    }
                    return;
                }
            }
            
            // If not same page or element not found, navigate normally
            window.location.href = target;

        } catch (e) {
            // Fallback for simple selectors or malformed URLs
            const selector = target.includes('#') ? '#' + target.split('#').pop() : target;
            if (selector && selector !== '#') {
                try {
                    const targetElement = document.querySelector(selector);
                    if (targetElement) {
                        setTargetId(selector);
                        setIsActive(true);
                        setFlightPhase('calibrating');
                        setTimeout(() => setFlightPhase('transit'), 500);
                        return;
                    }
                } catch (err) {
                    console.error("Invalid selector", selector);
                }
            }
            window.location.href = target;
        }
    }, []);

    const dismiss = useCallback(() => {
        setIsActive(false);
        setTimeout(() => {
            setFlightPhase('idle');
            setTargetId(null);
        }, 500); // Allow for exit animation
    }, []);

    useEffect(() => {
        if (flightPhase !== 'transit' || !targetId) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setFlightPhase('arrived');
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the target is visible
        );

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => observer.disconnect();
    }, [flightPhase, targetId]);

    const value = {
        isActive,
        flightPhase,
        targetId,
        launchMission,
        dismiss,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
