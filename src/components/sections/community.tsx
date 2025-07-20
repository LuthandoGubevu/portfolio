import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { communityProjects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center font-headline mb-4">Social Impact</h2>
        <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">I'm passionate about using my skills for good. Here are a few community projects I've been involved with.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityProjects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden relative">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.aiHint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full" variant="outline">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
