"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <button
                        onClick={scrollToTop}
                        className={cn(
                            "group relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-neutral-700 shadow-lg overflow-hidden",
                            "transition-all duration-300 ease-in-out",
                            "hover:w-40 hover:bg-orange-500 hover:border-orange-500"
                        )}
                        aria-label="Back to top"
                    >
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                            <ArrowUp className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                            <span className="text-white font-bold text-sm">Back to Top</span>
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
