import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-background text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#6699cc33,transparent)]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Luthando "Lu" Gubevu
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
                Creative Strategist | Web Designer & Developer | Video Editor
            </p>
            <p className="mt-4 max-w-xl mx-auto text-foreground/70">
                A multidisciplinary creative transforming ideas into engaging digital experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#projects">
                    <Button size="lg" className="w-full sm:w-auto">View My Work</Button>
                </Link>
                <Link href="/cv">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        View CV
                        <Eye className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    </section>
  );
}
