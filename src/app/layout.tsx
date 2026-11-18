import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets:['latin'] });

export const metadata: Metadata = {
  title: 'Ashutosh Verma | Full Stack Developer',
  description: 'Portfolio of Ashutosh Verma: Full Stack Developer (Python, TypeScript, React, AWS), former Software Developer Intern at Rubicon Food Products, Seneca Polytechnic BTech 2027.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body 
        className={`${inter.className} text-slate-100 antialiased relative selection:bg-blue-500/30`}
        suppressHydrationWarning
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}