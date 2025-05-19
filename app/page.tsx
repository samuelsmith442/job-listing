import Image from 'next/image';
import JobListingContainer from './components/JobListingContainer';

export default function Home() {
  return (
    <div className="min-h-screen bg-light-cyan-bg">
      {/* Header */}
      <header className="bg-primary h-36 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-header-desktop.svg"
            alt="Header background"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/images/bg-header-mobile.svg"
            alt="Header background"
            fill
            className="object-cover md:hidden"
            priority
          />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 pb-10 relative -mt-8">
        <JobListingContainer />
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-dark-cyan">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold"
        >
          Frontend Mentor
        </a>
        . Coded with Next.js, Tailwind CSS, and TypeScript.
      </footer>
    </div>
  );
}
