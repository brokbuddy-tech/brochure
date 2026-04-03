import { Inter, Sora } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['400', '500'],
});

export const sora = Sora({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sora',
    weight: ['600', '700', '800'],
});
