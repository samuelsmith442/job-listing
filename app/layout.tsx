import type { Metadata } from 'next';
import DarkModeToggle from './components/DarkModeToggle';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Job Listings',
  description: 'A job listings page built with Next.js, Tailwind CSS, and TypeScript',
  applicationName: 'Job Listings',
  authors: [{ name: 'Frontend Mentor' }],
  keywords: ['jobs', 'listings', 'frontend', 'developer', 'react', 'nextjs', 'tailwindcss'],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'hsl(180, 29%, 50%)' }, { media: '(prefers-color-scheme: dark)', color: '#0f172a' }],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="antialiased scroll-smooth">
      <body className="font-spartan min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <DarkModeToggle />
        <div className="min-h-screen">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
          >
            Skip to main content
          </a>
          {children}
        </div>
      </body>
    </html>
  );
}
