import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-silver-950">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl md:text-9xl font-light text-gradient mb-4">
          404
        </h1>
        <p className="font-accent text-sm tracking-[0.3em] text-royal-400 uppercase mb-6">
          Page Not Found
        </p>
        <p className="font-body text-silver-400 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-royal-500 hover:bg-royal-600 text-white rounded-full font-body font-medium transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}