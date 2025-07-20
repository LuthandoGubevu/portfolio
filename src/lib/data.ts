import { Github, Link as LinkIcon, Linkedin, Mail } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

export const skills = {
  Design: ['UI/UX Design', 'Multimedia Design', 'Wireframing', 'Prototyping', 'Figma'],
  Development: ['HTML/CSS/JS', 'React', 'Next.js', 'WordPress', 'Webflow', 'Node.js'],
  Strategy: ['Creative Strategy', 'Product Management', 'Agile Methodologies', 'Market Research'],
  'Video & Animation': ['Video Editing', 'Motion Graphics', 'Adobe Premiere Pro', 'Adobe After Effects'],
};

const projectUrls = [
  'https://loyaltyleap.netlify.app/',
  'https://www.fundees.co.za/',
  'https://tutorhubacademy.netlify.app/',
  'https://nightpulse.netlify.app/',
  'https://gymli.netlify.app/',
  'https://baobabgolfday.netlify.app/',
  'https://primalcutsgame.netlify.app/',
  'https://audee.netlify.app/',
  'https://primalcuts.netlify.app/',
  'https://languify.netlify.app/',
  'https://stokfund.netlify.app/',
  'https://kfcparkorder.netlify.app/',
  'https://lweemee.netlify.app/',
  'https://myrewards.netlify.app/'
];

export const webProjects = projectUrls.map(url => {
  const domain = new URL(url).hostname;
  const name = domain.replace('www.', '').replace('.netlify.app', '').replace('.co.za', '').replace('.mystrikingly.com','');
  let title = name.charAt(0).toUpperCase() + name.slice(1);
  
  const titleOverrides: {[key: string]: string} = {
    'loyaltyleap': "Loyalty Leap",
    'fundees': "Fundees",
    'tutorhubacademy': "Tutor Hub Academy",
    'nightpulse': "Nightpulse",
    'gymli': "Gymli",
    'baobabgolfday': "Baobab Golf Day",
    'primalcutsgame': "Primal Cuts Game",
    'audee': "Audee",
    'primalcuts': "Primal Cuts",
    'languify': "Languify",
    'stokfund': "Stokfund",
    'kfcparkorder': "KFC Park Order",
    'lweemee': "Lweemee",
    'myrewards': "MyRewards",
  };
  
  if (titleOverrides[name]) {
    title = titleOverrides[name];
  }

  let imageUrl = `https://placehold.co/600x400.png`;
  if (title === "Fundees") {
      imageUrl = '/Fundees.jpg';
  }
  if (title === "Stokfund") {
      imageUrl = '/Stokfund.jpg';
  }
  if (title === "Loyalty Leap") {
    imageUrl = '/Loyaltyleap.jpg';
  }
  if (title === "Tutor Hub Academy") {
    imageUrl = '/TutoHub.jpg';
  }
  if (title === "Nightpulse") {
    imageUrl = '/NightPulse.jpg';
  }
   if (title === "Gymli") {
    imageUrl = '/Gymli.jpg';
  }
   if (title === "Baobab Golf Day") {
    imageUrl = '/golfday.jpg';
  }
  if (title === "Primal Cuts Game") {
    imageUrl = '/cutsgame.jpg';
  }
  if (title === "Audee") {
    imageUrl = '/Audee.jpg';
  }
  if (title === "Primal Cuts") {
    imageUrl = '/PrimalCuts.jpg';
  }
  if (title === "Languify") {
    imageUrl = '/languify.jpg';
  }
  if (title === "KFC Park Order") {
    imageUrl = '/kfcparkandorder.jpg';
  }


  return {
    title: title,
    description: `A web project showcasing skills in modern web development and UI design.`,
    tools: ['React', 'Next.js', 'Tailwind CSS'],
    imageUrl: imageUrl,
    liveLink: url,
    aiHint: 'website interface'
  };
});


export const communityProjects = [
  {
    title: 'Fundanii Coding Project',
    description: 'An initiative to bring coding education to underserved communities in South Africa.',
    link: 'https://www.facebook.com/fundanii',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'children coding'
  },
  {
    title: 'Fundanii Stories',
    description: 'A platform for sharing inspiring stories from the community to foster hope and connection.',
    link: 'https://fundaniistories.mystrikingly.com/',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'storytelling community'
  },
  {
    title: 'Dispatch Live Article',
    description: 'Featured in a news article for work on educational initiatives and community impact.',
    link: 'https://www.dispatchlive.co.za/news/2017-05-26-local-bofs-aim-to-improve-learning/',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'newspaper article'
  }
];

export const experiences = [
    {
        company: 'Baobab Brands',
        role: 'Creative Strategist',
        duration: '2021 - Present',
        responsibilities: [
            'Led creative strategy for various client projects, from conception to execution.',
            'Managed product lifecycles using agile methodologies.',
            'Designed and developed user-centric web applications and marketing materials.'
        ],
        tools: ['Figma', 'React', 'Next.js', 'Jira']
    },
    {
        company: 'Winedrops',
        role: 'UI/UX Designer & Web Developer',
        duration: '2020 - 2021',
        responsibilities: [
            'Designed and developed the main e-commerce platform on WordPress.',
            'Conducted user research to improve site usability and conversion rates.',
            'Created marketing materials and video content for social campaigns.'
        ],
        tools: ['WordPress', 'WooCommerce', 'Adobe XD', 'Premiere Pro']
    },
    {
        company: 'GetX',
        role: 'Multimedia Designer',
        duration: '2019 - 2020',
        responsibilities: [
            'Produced high-quality video content and animations for social media marketing.',
            'Designed graphics for digital and print campaigns, ensuring brand consistency.',
            'Contributed to UI/UX design for new features on mobile applications.'
        ],
        tools: ['After Effects', 'Illustrator', 'Photoshop', 'Sketch']
    },
    {
        company: 'Sondlo & Knopp',
        role: 'Junior Web Designer',
        duration: '2018 - 2019',
        responsibilities: [
            'Assisted in building and maintaining client websites using HTML, CSS, and JavaScript.',
            'Created website layouts and user interfaces based on client specifications.',
            'Learned foundational principles of responsive web design and development.'
        ],
        tools: ['HTML', 'CSS', 'JavaScript', 'Photoshop']
    }
];

export const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:luthando.gubevu@gmail.com' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/LuthandoGubevu' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/luthando-gubevu/' },
  { name: 'Behance', icon: null, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.22 8.44a2.28 2.28 0 0 0-2.3-2.33H8.44v11.78h4.48a2.28 2.28 0 0 0 2.3-2.33v-1.78a2.28 2.28 0 0 0-2.3-2.33v0a2.28 2.28 0 0 0 2.3-2.33Z"/><path d="M8.44 11.11h2.3a1.14 1.14 0 0 1 1.14 1.14v0a1.14 1.14 0 0 1-1.14 1.14h-2.3Z"/><line x1="14.07" x2="16.56" y1="5.11" y2="5.11"/></svg>`, url: 'https://www.behance.net/lutandogubevu' },
  { name: 'Linktree', icon: LinkIcon, url: 'https://linktr.ee/luthandosocial' }
];
