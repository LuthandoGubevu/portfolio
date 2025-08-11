import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold">ApexDev Studios</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label={link.name}>
                {link.icon ? (
                    <link.icon className="h-6 w-6" />
                ) : (
                    <span dangerouslySetInnerHTML={{ __html: link.svg! }} />
                )}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ApexDev Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
