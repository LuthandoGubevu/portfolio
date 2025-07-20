import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center font-headline mb-12">Professional Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-px"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-12">
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-[7px]"></div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{exp.duration}</p>
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-md font-semibold text-accent mb-3">{exp.role}</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map(tool => <Badge key={tool} variant="secondary">{tool}</Badge>)}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
