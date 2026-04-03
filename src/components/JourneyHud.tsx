
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigation } from '@/context/NavigationContext';
import { gsap } from 'gsap';

const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500/20">
        <motion.div
            className="h-full bg-orange-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
        />
    </div>
);
import { usePathname } from 'next/navigation';

export const JourneyHud: React.FC = () => {
    const pathname = usePathname();
    const isExcludedPath = ['/terms', '/privacy', '/refund-policy'].includes(pathname);
    
    const { isActive, flightPhase, targetId, dismiss } = useNavigation();
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const dismissTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!isActive || flightPhase !== 'transit' || !targetId || isExcludedPath) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) {
            dismiss();
            return;
        }

        const scrollTimeline = gsap.timeline({
            onComplete: () => {
                // This is handled by the IntersectionObserver now
            }
        });

        scrollTimeline.to(window, {
            scrollTo: { y: targetId, offsetY: window.innerHeight / 4 },
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
                const startY = 0;
                const elementRect = targetElement.getBoundingClientRect();
                const targetY = elementRect.top + window.scrollY - window.innerHeight / 2;
                const currentScroll = window.scrollY;

                let scrollFraction = (currentScroll - startY) / (targetY - startY);
                scrollFraction = Math.max(0, Math.min(1, scrollFraction));

                setProgress(scrollFraction * 100);
            }
        });

        return () => {
            scrollTimeline.kill();
        };
    }, [isActive, flightPhase, targetId, dismiss]);

    useEffect(() => {
        if (flightPhase === 'arrived' && !isHovered) {
            dismissTimeoutRef.current = setTimeout(dismiss, 4000);
        } else if (dismissTimeoutRef.current) {
            clearTimeout(dismissTimeoutRef.current);
        }
    }, [flightPhase, isHovered, dismiss]);

    const getPositionClasses = () => {
        if (isMobile) {
            return "bottom-4 left-1/2 -translate-x-1/2";
        }
        return "bottom-24 right-8";
    };

    const hudVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.3 } }
    };

    if (isExcludedPath) return null;

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    layout
                    variants={hudVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={cn(
                        "fixed z-[100] rounded-full p-px",
                        "bg-slate-900/80 backdrop-blur-xl border border-orange-500/30",
                        "shadow-2xl shadow-black/50",
                        getPositionClasses()
                    )}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        layout="position"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full px-4 py-2"
                    >
                        <div className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                            flightPhase === 'arrived' ? "bg-green-400" : "bg-orange-500 animate-pulse"
                        )} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={flightPhase}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0 }}
                                className="flex items-center text-white text-sm font-medium whitespace-nowrap"
                            >
                                {(flightPhase === 'calibrating' || flightPhase === 'transit') && "Jump to Pricing..."}
                                {flightPhase === 'arrived' && (
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span>
                                            <span className="font-bold">1. Select Plan</span> → <span className="opacity-70">2. Book Call</span>
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {flightPhase === 'transit' && <ProgressBar progress={progress} />}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
