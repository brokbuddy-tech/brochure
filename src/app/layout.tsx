import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import StaggeredMenu from '@/components/StaggeredMenu';
import { Footer } from '@/components/Footer';
import { AnimatedLogoSection } from '@/components/WhoWeAre';
import { BackToTopButton } from '@/components/BackToTopButton';
import { NavigationProvider } from '@/context/NavigationContext';
import { JourneyHud } from '@/components/JourneyHud';
import { SmoothScroll } from '@/components/SmoothScroll';
import { inter, sora } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'BrokBuddy | Evolved Real Estate Management',
  description: 'A structured, elite system for managing your entire real estate business. Designed for Australian agencies.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to homepage', link: 'https://brokbuddy.com' },
  { label: 'Services', ariaLabel: 'View our services', link: 'https://brokbuddy.com/#services' },
  { label: 'Plans', ariaLabel: 'See our plans', link: 'https://brokbuddy.com/#pricing' },
  { label: 'About', ariaLabel: 'Learn about us', link: 'https://brokbuddy.com/about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: 'https://brokbuddy.com/contact' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Email', link: 'mailto:info@brokbuddy.com' },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-body antialiased relative w-full overflow-x-hidden`}>
        <NavigationProvider>
          <SmoothScroll>
            <StaggeredMenu
              logoComponent={
                <div className="relative w-20 h-12">
                  <Image
                    src="/assets/brokbuddy_logo.png"
                    alt="BrokBuddy Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              }
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={false}
              isFixed={true}
            />
            {children}
            <AnimatedLogoSection />
            <Footer />
            <BackToTopButton />
            <Toaster />
            <JourneyHud />
          </SmoothScroll>
        </NavigationProvider>
      </body>
    </html>
  );
}
