import { Phone, Mail, MapPin, Github, Link as LinkIcon, Briefcase, School, Star, Settings, Award, Languages, Car, PersonStanding } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CVPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-body">
      <div className="container mx-auto p-4 sm:p-8 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4 md:mb-0">Luthando Gubevu</h1>
          <div className="text-sm text-foreground/80 space-y-1 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>0793258818</span>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:lgubevu@gmail.com" className="hover:underline">lgubevu@gmail.com</a>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>East London, South Africa</span>
            </div>
          </div>
        </header>

        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">About Me</h2>
          <p className="text-foreground/80 leading-relaxed">
            I am an experienced multimedia designer, web designer, digital marketer & video editor. I recently upskilled to front end development, acquiring skills such as HTML, CSS, Javascript, React & React Native. I am very versatile & resourceful. I have prior experience in setting up & managing an online store, creating marketing campaigns & SEO strategies. Post graduation I started a non-profit initiative that introduced underprivileged schools to coding & animation.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
              <Link href="https://www.facebook.com/fundanii" target="_blank" rel="noopener noreferrer"><Button variant="link" className="p-0 h-auto">Fundanii Coding Project</Button></Link>
              <Link href="https://bit.ly/3IGSma7" target="_blank" rel="noopener noreferrer"><Button variant="link" className="p-0 h-auto">Fundanii Stories</Button></Link>
              <Link href="https://bit.ly/439Hols" target="_blank" rel="noopener noreferrer"><Button variant="link" className="p-0 h-auto">Daily Dispatch Article</Button></Link>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section id="experience" className="mb-8">
              <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Digital Product Strategist</h3>
                  <p className="text-md font-medium text-foreground/80">Baobab Brands, Beacon bay, East London (Hybrid)</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 - Present</p>
                  <p className="mt-2 text-foreground/80">
                    Drive product strategy and execution, leveraging my design expertise to create seamless and engaging user experiences across digital platforms. I lead the end-to-end digital customer journey, ensuring alignment with business objectives and brand identity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Creative Strategist</h3>
                  <p className="text-md font-medium text-foreground/80">Winedrops (Remote – London, UK)</p>
                  <p className="text-sm text-muted-foreground">Aug 2024 - Jan 2025</p>
                  <p className="mt-2 text-foreground/80">
                    Drove performance-focused creative strategy across paid (Meta & Google Ads) and organic channels, directly contributing to 5x year-on-year growth. I used tools like Foreplay to analyze trends and translate insights into high-converting content.
                  </p>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold">E-Commerce Specialist | Graphic Designer</h3>
                  <p className="text-md font-medium text-foreground/80">Allied Business Solutions, East London</p>
                  <p className="text-sm text-muted-foreground">Nov 2022 - Aug 2024</p>
                  <p className="mt-2 text-foreground/80">
                    Successfully built and managed the online store, created engaging content, and executed marketing strategies to drive sales. Managed SEO, Google Ads, and the Takealot Seller Portal.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Graphic Designer & DTP Artist</h3>
                  <p className="text-md font-medium text-foreground/80">Sondlo & Knopp Advertising Agency, East London</p>
                  <p className="text-sm text-muted-foreground">Oct 2021 - Oct 2022</p>
                  <p className="mt-2 text-foreground/80">
                    Responsible for creating classified ads, formatting documents, and designing marketing materials. Utilized InDesign for desktop publishing and prepared documents for print.
                  </p>
                </div>
              </div>
            </section>

            <section id="education" className="mb-8">
              <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">Education</h2>
              <div className="space-y-3">
                  <p><strong>Full Stack Developer</strong> - HyperionDev Institution (2023)</p>
                  <p><strong>Graphic Design</strong> - East London Management Institute (2016)</p>
                  <p><strong>Matric</strong> - Queen's College Boys High School (2009)</p>
              </div>
            </section>
             <section id="brands">
              <h2 className="text-2xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">Brands I've Worked With</h2>
              <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary">KFC</Badge>
                  <Badge variant="secondary">Winedrops</Badge>
                  <Badge variant="secondary">Baobab Brands</Badge>
                  <Badge variant="secondary">Takealot</Badge>
              </div>
            </section>
          </div>

          <aside>
            <section id="skills" className="mb-6">
              <h2 className="text-xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Graphic Design', 'Web Design', 'Web Development', 'Video Editing', 'Marketing', 'Creative Strategy', 'UI/UX Design', 'SEO Management',
                  'HTML', 'CSS', 'JavaScript', 'React', 'Motion Design', 'Figma', 'Canva', 'WordPress', 'Adobe Creative Suite', 'Microsoft Office',
                  'Direct Response Copywriting', 'Storyboarding', 'A/B Testing', 'Meta Ads Manager', 'Google Ads'
                ].map(skill => <Badge key={skill}>{skill}</Badge>)}
              </div>
            </section>
            <Separator className="my-6" />
            <section id="portfolios" className="mb-6">
                <h2 className="text-xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">Portfolios</h2>
                <div className="space-y-2">
                    <Link href="https://github.com/LuthandoGubevu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><Github className="h-4 w-4" /> GitHub Portfolio</Link>
                    <Link href="https://linktr.ee/luthandosocial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><LinkIcon className="h-4 w-4" /> Linktree</Link>
                </div>
            </section>
             <Separator className="my-6" />
            <section id="references">
              <h2 className="text-xl font-bold font-headline border-b-2 border-accent pb-2 mb-4">References</h2>
              <div className="space-y-4">
                <div>
                    <p className="font-semibold">Lisa Van Wyk</p>
                    <p className="text-sm text-foreground/80">Creative Director: Current Consulting</p>
                    <p className="text-sm text-muted-foreground">072 697 0604</p>
                </div>
                <div>
                    <p className="font-semibold">Shayna Elcott</p>
                    <p className="text-sm text-foreground/80">Creative Strategist & Coach</p>
                    <p className="text-sm text-muted-foreground">083 546 8542 | shayna@beautifullife.co.za</p>
                </div>
              </div>
            </section>
            <Separator className="my-6" />
            <section id="additional-info">
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-accent" /> Languages: English</div>
                  <div className="flex items-center gap-2"><Car className="h-4 w-4 text-accent" /> Own Transport & Drivers License</div>
                </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
