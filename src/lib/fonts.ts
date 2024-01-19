import { Inter, JetBrains_Mono } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fonts = [fontSans.variable, fontMono.variable];
