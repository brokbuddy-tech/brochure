
'use client';
import React, {
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
    useEffect,
} from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useNavigation } from '@/context/NavigationContext';
const AnimatedIconButton = ({
    href,
    label,
    bgColor,
    textColor,
    children,
}: {
    href: string;
    label: string;
    bgColor: string;
    textColor: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-11 w-11 cursor-pointer items-center justify-start overflow-hidden rounded-full shadow-lg transition-all duration-300 ease-in-out hover:w-36"
        style={{ backgroundColor: bgColor }}
        aria-label={`View ${label} Profile`}
    >
        <div className="absolute flex h-full w-11 shrink-0 items-center justify-center transition-all duration-300">
            {children}
        </div>
        <div
            className="absolute right-0 w-0 opacity-0 transition-all duration-300 group-hover:w-[70%] group-hover:pr-[10px] group-hover:opacity-100"
            style={{ color: textColor }}
        >
            <span className="text-sm font-semibold">{label}</span>
        </div>
    </a>
);
export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}
export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}
export interface StaggeredMenuProps {
    position?: 'left' | 'right';
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoComponent?: React.ReactNode;
    accentColor?: string;
    isFixed?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

const AnimatedDemoButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, ...props }) => {
    const text = "Book a Demo Call";
    const letters = text.split('');

    return (
        <>
            <style>{`
        .animated-demo-button {
          --primary: #F78F2E;
          --neutral-1: #F78F2E;
          --neutral-2: #ff9f4d;
          --radius: 16px;
        }
        .animated-demo-button:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2), 0 12px 24px rgba(247, 143, 46, 0.3);
        }
        .animated-demo-button:active {
          transform: scale(0.98);
        }
        .animated-demo-button:after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: var(--radius);
          background: linear-gradient(to bottom, var(--neutral-1), var(--neutral-2));
          z-index: 0;
          transition: all 0.4s ease;
        }
        .state-text-container p span {
          display: block;
          opacity: 0;
          animation: slideDown 0.6s ease forwards calc(var(--i) * 0.03s);
        }
        .animated-demo-button:hover:not(:disabled) .state-text-container p span {
          animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
        }
        @keyframes wave {
          0% { opacity: 1; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(3px); }
          50% { opacity: 1; transform: translateY(-3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            <button
                className="animated-demo-button relative flex items-center justify-center w-full h-[64px] min-w-[220px] rounded-[var(--radius)] border-none text-white text-[20px] font-bold tracking-[0.5px] leading-none shadow-[0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                onClick={onClick}
                {...props}
            >
                <div className="state-text-container z-[2] flex items-center justify-center relative w-full h-full">
                    <p className="flex items-center justify-center m-0">
                        {letters.map((char, i) => (
                            <span key={i} style={{ "--i": i } as React.CSSProperties}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </p>
                </div>
            </button>
        </>
    );
};



export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    position = 'right',
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoComponent,
    isFixed = false,
    onMenuOpen,
    onMenuClose,
}: StaggeredMenuProps) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);

    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const { launchMission } = useNavigation();

    const [accentColor, setAccentColor] = useState('hsl(var(--accent))');
    const [colors, setColors] = useState(['#1e1e22', '#35353c']);
    const [panelBackgroundColor, setPanelBackgroundColor] = useState('hsl(var(--background))');
    const [panelTextColor, setPanelTextColor] = useState('hsl(var(--foreground))');

    const handleScrollClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
        e.preventDefault();
        launchMission(targetId);
        if (open) {
            toggleMenu();
        }
    };

    useEffect(() => {
        setIsMounted(true);
        const getCssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

        if (theme === 'light') {
            setPanelBackgroundColor('hsl(0 0% 100%)'); // White panel
            setPanelTextColor('hsl(222.2 84% 4.9%)'); // Black text
            setColors(['#e5e7eb', '#d1d5db']); // Lighter gray prelayers
        } else {
            setPanelBackgroundColor('hsl(224 71% 4%)'); // Black panel
            setPanelTextColor('hsl(213 31% 91%)'); // White text
            setColors(['#1f2937', '#374151']); // Darker gray prelayers
        }

        setAccentColor(`hsl(${getCssVar('--accent')})`);
    }, [theme]);


    const panelRef = useRef<HTMLDivElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLElement[]>([]);

    const plusHRef = useRef<HTMLSpanElement | null>(null);
    const plusVRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const textWrapRef = useRef<HTMLSpanElement | null>(null);
    const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);

    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const busyRef = useRef(false);

    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    useLayoutEffect(() => {
        if (!isMounted) return;

        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;

            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;

            if (!panel || !plusH || !plusV || !icon || !textInner) return;

            let preLayers: HTMLElement[] = [];
            if (preContainer) {
                preLayers = Array.from(
                    preContainer.querySelectorAll('.sm-prelayer')
                ) as HTMLElement[];
            }
            preLayerElsRef.current = preLayers;

            const offscreen = position === 'left' ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen });

            gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
            gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

            gsap.set(textInner, { yPercent: 0 });
        });
        return () => ctx.revert();
    }, [isMounted, position]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(
            panel.querySelectorAll('.sm-panel-itemLabel')
        ) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        const socialTitle = panel.querySelector(
            '.sm-socials-title'
        ) as HTMLElement | null;
        const socialLinks = Array.from(
            panel.querySelectorAll('.sm-socials-link-container')
        ) as HTMLElement[];
        const ctaButton = panel.querySelector('.sm-panel-cta') as HTMLElement | null;


        const allAnimatedItems = [...itemEls, ctaButton].filter(Boolean) as HTMLElement[];

        if (allAnimatedItems.length) gsap.set(allAnimatedItems, { yPercent: 140, rotate: 10 });
        if (numberEls.length)
            gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        const layerStates = layers.map((el) => ({
            el,
            start: Number(gsap.getProperty(el, 'xPercent')),
        }));
        const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

        const tl = gsap.timeline({ paused: true });

        layerStates.forEach((ls, i) => {
            tl.fromTo(
                ls.el,
                { xPercent: ls.start },
                { xPercent: 0, duration: 0.5, ease: 'power4.out' },
                i * 0.07
            );
        });

        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;

        tl.fromTo(
            panel,
            { xPercent: panelStart },
            { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
            panelInsertTime
        );

        if (allAnimatedItems.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

            tl.to(
                allAnimatedItems,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: { each: 0.1, from: 'start' },
                },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    {
                        duration: 0.6,
                        ease: 'power2.out',
                        ['--sm-num-opacity' as any]: 1,
                        stagger: { each: 0.08, from: 'start' },
                    },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;

            if (socialTitle)
                tl.to(
                    socialTitle,
                    { opacity: 1, duration: 0.5, ease: 'power2.out' },
                    socialsStart
                );
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: 'power3.out',
                        stagger: { each: 0.08, from: 'start' },
                        onComplete: () => {
                            gsap.set(socialLinks, { clearProps: 'opacity' });
                        },
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, []);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback('onComplete', () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;

        const all: HTMLElement[] = [...layers, panel];
        closeTweenRef.current?.kill();

        const offscreen = position === 'left' ? -100 : 100;

        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: () => {
                const itemEls = Array.from(
                    panel.querySelectorAll('.sm-panel-itemLabel, .sm-panel-cta')
                ) as HTMLElement[];
                if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

                const numberEls = Array.from(
                    panel.querySelectorAll(
                        '.sm-panel-list[data-numbering] .sm-panel-item'
                    )
                ) as HTMLElement[];
                if (numberEls.length)
                    gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });

                const socialTitle = panel.querySelector(
                    '.sm-socials-title'
                ) as HTMLElement | null;
                const socialLinks = Array.from(
                    panel.querySelectorAll('.sm-socials-link-container')
                ) as HTMLElement[];
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

                busyRef.current = false;
            },
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        const btn = toggleBtnRef.current;
        const logo = logoRef.current;

        if (!icon || !h || !v || !btn || !logo) return;

        spinTweenRef.current?.kill();

        const getCssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

        if (opening) {
            gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power4.out' } })
                .to(h, { rotate: 45, duration: 0.5 }, 0)
                .to(v, { rotate: -45, duration: 0.5 }, 0);
        } else {
            spinTweenRef.current = gsap
                .timeline({ defaults: { ease: 'power3.inOut' } })
                .to(h, { rotate: 0, duration: 0.35 }, 0)
                .to(v, { rotate: 90, duration: 0.35 }, 0)
                .to(icon, { rotate: 0, duration: 0.001 }, 0);
        }
    }, [theme]);

    const animateText = useCallback((opening: boolean) => {
        const inner = textInnerRef.current;
        if (!inner) return;

        textCycleAnimRef.current?.kill();

        const currentLabel = opening ? 'Menu' : 'Close';
        const targetLabel = opening ? 'Close' : 'Menu';
        const cycles = 3;

        const seq: string[] = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === 'Menu' ? 'Close' : 'Menu';
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);

        setTextLines(seq);
        gsap.set(inner, { yPercent: 0 });

        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;

        textCycleAnimRef.current = gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: 'power4.out',
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        if (target) {
            document.body.style.overflow = 'hidden';
            onMenuOpen?.();
            playOpen();
        } else {
            document.body.style.overflow = '';
            onMenuClose?.();
            playClose();
        }

        animateIcon(target);
        animateText(target);
    }, [
        playOpen,
        playClose,
        animateIcon,
        animateText,
        onMenuOpen,
        onMenuClose,
    ]);

    if (!isMounted) {
        return null;
    }

    const getCssVar = (name: string) => {
        if (typeof window === 'undefined') return '';
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    };


    return (
        <div
            className={cn('sm-scope z-[100] overflow-x-clip',
                isFixed ? `${open ? 'fixed' : 'absolute'} top-0 left-0 w-full h-screen` : 'w-full h-full',
                open ? 'pointer-events-auto' : 'pointer-events-none'
            )}
        >
            <div
                className={cn(
                    'staggered-menu-wrapper relative w-full h-full z-40 overflow-hidden',
                    className
                )}
                style={
                    accentColor
                        ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties)
                        : undefined
                }
                data-position={position}
                data-open={open || undefined}
            >
                <div
                    ref={preLayersRef}
                    className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
                    aria-hidden="true"
                >
                    {(() => {
                        const raw =
                            colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
                        let arr = [...raw];
                        if (arr.length >= 3) {
                            const mid = Math.floor(arr.length / 2);
                            arr.splice(mid, 1);
                        }
                        return arr.map((c, i) => (
                            <div
                                key={i}
                                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                                style={{ background: c }}
                            />
                        ));
                    })()}
                </div>

                <header
                    className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between py-4 pr-4 bg-transparent pointer-events-none z-20"
                    aria-label="Main navigation header"
                >
                    <div
                        ref={logoRef}
                        className="sm-logo flex items-center select-none pointer-events-auto"
                        style={{ color: panelTextColor }}
                        aria-label="Logo"
                    >
                        {logoComponent ? (
                            logoComponent
                        ) : (
                            <span className="font-bold text-xl sm-logo-text">LOGO</span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
                        <button
                            ref={toggleBtnRef}
                            className={`sm-toggle relative inline-flex items-center gap-[0.3rem] cursor-pointer font-medium leading-none overflow-visible`}
                            style={{ color: panelTextColor }}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="staggered-menu-panel"
                            onClick={toggleMenu}
                            type="button"
                        >
                            <span
                                ref={textWrapRef}
                                className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
                                aria-hidden="true"
                            >
                                <span
                                    ref={textInnerRef}
                                    className="sm-toggle-textInner flex flex-col leading-none"
                                >
                                    {textLines.map((l, i) => (
                                        <span
                                            className="sm-toggle-line block h-[1em] leading-none"
                                            key={i}
                                        >
                                            {l}
                                        </span>
                                    ))}
                                </span>
                            </span>

                            <span
                                ref={iconRef}
                                className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
                                aria-hidden="true"
                            >
                                <span
                                    ref={plusHRef}
                                    className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                />
                                <span
                                    ref={plusVRef}
                                    className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
                                />
                            </span>
                        </button>
                    </div>
                </header>

                <aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className={cn(
                        "absolute top-0 right-0 h-screen w-screen md:w-[500px] flex flex-col p-[6em_1.5em_1.5em_1.5em] overflow-y-auto z-10",
                        !open && "pointer-events-none"
                    )}
                    style={{
                        backgroundColor: panelBackgroundColor,
                        WebkitBackdropFilter: 'blur(12px)',
                        backdropFilter: 'blur(12px)',
                    }}
                    aria-hidden={!open}
                >
                    <div className="sm-panel-inner flex-1 flex flex-col gap-5">
                        <ul
                            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                            role="list"
                            data-numbering={displayItemNumbering || undefined}
                        >
                            {items && items.length ? (
                                items.map((it, idx) => (
                                    <li
                                        className="sm-panel-itemWrap relative overflow-hidden leading-none"
                                        key={it.label + idx}
                                    >
                                        <Link
                                            className="sm-panel-item group relative font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-colors duration-150 ease-linear inline-flex items-center gap-6 no-underline"
                                            href={it.link}
                                            aria-label={it.ariaLabel}
                                            data-index={idx + 1}
                                            style={{ color: panelTextColor }}
                                            onClick={(e) => it.link.includes('#') ? handleScrollClick(e, it.link) : toggleMenu()}
                                        >
                                            <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-current after:transition-transform after:duration-300 after:ease-out after:origin-left after:scale-x-0 group-hover:after:scale-x-100">
                                                {it.label}
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-12 h-12 opacity-0 -translate-x-8 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-current"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li
                                    className="sm-panel-itemWrap relative overflow-hidden leading-none"
                                    aria-hidden="true"
                                >
                                    <span className="sm-panel-item relative font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]" style={{ color: panelTextColor }}>
                                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                                            No items
                                        </span>
                                    </span>
                                </li>
                            )}
                        </ul>
                        <div className="sm-panel-itemWrap relative overflow-hidden leading-none mt-4">
                            <div className="sm-panel-cta [transform-origin:50%_100%] will-change-transform">
                                <AnimatedDemoButton onClick={(e) => handleScrollClick(e, 'https://brokbuddy.com/#pricing')} />
                            </div>
                        </div>


                        {displaySocials && (
                            <div
                                className="sm-socials flex flex-col gap-4"
                                aria-label="Social links"
                            >
                                <div className="dotted-bg-orange rounded-lg p-4 flex items-center gap-3 mt-4">
                                    <AnimatedIconButton
                                        href="https://www.linkedin.com/company/brokbuddy-llp/"
                                        label="LinkedIn"
                                        bgColor="#0077b5"
                                        textColor="#FFFFFF"
                                    >
                                        <svg
                                            fill="currentColor"
                                            className="h-[25px] w-[25px] text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                        </svg>
                                    </AnimatedIconButton>
                                    <AnimatedIconButton
                                        href="https://wellfound.com/company/brokbuddy/"
                                        label="Wellfound"
                                        bgColor="#FFFFFF"
                                        textColor="#000000"
                                    >
                                        <span className="font-bold text-lg">
                                            <span className="text-black">W</span>
                                            <span className="text-red-600">:</span>
                                        </span>
                                    </AnimatedIconButton>
                                    <AnimatedIconButton
                                        href="https://www.crunchbase.com/organization/brokbuddy/"
                                        label="Crunchbase"
                                        bgColor="#2292a7"
                                        textColor="#FFFFFF"
                                    >
                                        <span className="font-bold text-lg text-white">cb</span>
                                    </AnimatedIconButton>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo {
  display: flex;
  align-items: center;
  user-select: none;
  transition: color 0.4s ease;
}


.sm-scope .sm-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 500;
  line-height: 1;
  overflow: visible;
  padding: 12px 24px;
  border-radius: 99px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
}

.sm-scope .sm-toggle[aria-expanded="true"] {
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.dark .sm-scope .sm-toggle[aria-expanded="true"] {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}


.sm-scope .sm-toggle:focus-visible { outline: 2px solid var(--sm-accent); outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-w: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 1/2; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: 35%; pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-itemLabel, .sm-scope .sm-panel-cta { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 0; font-size: 18px; font-weight: 400; color: var(--sm-accent); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }

@media (max-width: 1024px) { 
    .sm-scope .staggered-menu-panel { width: 100vw; height: 100vh; left: 0; right: 0; top: 0; position: fixed; } 
    .sm-scope .sm-prelayers { width: 100vw; height: 100vh; position: fixed; }    .sm-scope .staggered-menu-wrapper[data-open] .sm-logo { 
        color: var(--logo-open-color);
    }
}
@media (max-width: 640px) { 
    .sm-scope .staggered-menu-panel { padding: 5em 1.5em 1.5em; }
    .sm-scope .staggered-menu-header { padding: 1em 0em; }
    .sm-scope .sm-panel-item { font-size: 3rem; }
}
      `}</style>
        </div>
    );
};
export default StaggeredMenu;

