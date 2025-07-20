'use client';

import { socialLinks } from '@/lib/data';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Get in Touch</h2>
          <p className="text-foreground/70 mb-8">
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and collaborations. Feel free to connect with me through any of the platforms below.
          </p>
          <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                  <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors" aria-label={link.name}>
                      {link.icon ? (
                          <link.icon className="h-8 w-8" />
                      ) : (
                          <span dangerouslySetInnerHTML={{ __html: link.svg! }} />
                      )}
                      <span className="sr-only">{link.name}</span>
                  </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
