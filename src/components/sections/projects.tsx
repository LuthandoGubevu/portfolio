import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { webProjects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center font-headline mb-4">My Work</h2>
        <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">Here are some of the web projects I've built, showcasing my skills in design and development.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
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
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => <Badge key={tool} variant="outline">{tool}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full" variant="outline">
                    View Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline mb-4">Creative & Video Work</h3>
            <p className="max-w-2xl mx-auto text-foreground/70 mb-8">For my multimedia design, animation, and video editing work, please check out my Behance portfolio where I showcase a wider range of creative projects.</p>
            <div className="flex justify-center items-center gap-4">
              <Link href="https://www.behance.net/lutandogubevu" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M15.22 8.44a2.28 2.28 0 0 0-2.3-2.33H8.44v11.78h4.48a2.28 2.28 0 0 0 2.3-2.33v-1.78a2.28 2.28 0 0 0-2.3-2.33v0a2.28 2.28 0 0 0 2.3-2.33Z"/><path d="M8.44 11.11h2.3a1.14 1.14 0 0 1 1.14 1.14v0a1.14 1.14 0 0 1-1.14 1.14h-2.3Z"/><line x1="14.07" x2="16.56" y1="5.11" y2="5.11"/></svg>
                    View on Behance
                </Button>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
