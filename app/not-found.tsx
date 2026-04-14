import Link from 'next/link';
import { Home } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <ScrollReveal>
        <h1 className="text-8xl font-headline font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-headline font-bold mb-6">Page Not Found</h2>
        <p className="text-muted max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" /> Back to Home
        </Link>
      </ScrollReveal>
    </div>
  );
}
