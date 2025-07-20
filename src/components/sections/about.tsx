import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-accent">
              <Image
                src="/Luthando.jpeg"
                alt="Luthando Gubevu"
                fill
                className="object-cover"
                data-ai-hint="man headshot"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">About Me</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I am a passionate and versatile creative professional with a deep-rooted love for technology and storytelling. My journey has taken me through multimedia design, web development, UI/UX, and creative strategy, allowing me to build a unique skillset that bridges the gap between creative vision and technical execution.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              I thrive on solving complex problems and creating beautiful, intuitive, and impactful digital experiences. Whether I'm crafting a pixel-perfect design, developing a robust web application, or editing a compelling video, my goal is always to deliver work that resonates and inspires.
            </p>
            <Link href="/cv" passHref>
              <Button>
                <Eye className="mr-2 h-4 w-4" />
                View CV
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 font-headline">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <Card key={category} className="bg-background shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
