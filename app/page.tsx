import Image from 'next/image';
import JobListingContainer from './components/JobListingContainer';

export default function Home() {
  return (
    <div className="min-h-screen bg-light-cyan-bg dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-primary dark:bg-gray-800 h-36 relative" role="banner">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-header-desktop.svg"
            alt=""
            fill
            className="object-cover hidden md:block opacity-90 dark:opacity-30"
            priority
            aria-hidden="true"
          />
          <Image
            src="/images/bg-header-mobile.svg"
            alt=""
            fill
            className="object-cover md:hidden opacity-90 dark:opacity-30"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="sr-only">Job Listings</h1>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="container mx-auto px-6 pb-10 relative -mt-8" tabIndex={-1}>
        <JobListingContainer />
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-dark-cyan dark:text-gray-400" role="contentinfo">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-light font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Frontend Mentor website"
          >
            Frontend Mentor
          </a>
          . Coded with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </footer>
    </div>
  );
}
