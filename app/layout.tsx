import type { Metadata } from 'next';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Job Listings',
  description: 'A job listings page built with Next.js, Tailwind CSS, and TypeScript'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className="antialiased">
      <body className="font-spartan">{children}</body>
    </html>
  );
}
