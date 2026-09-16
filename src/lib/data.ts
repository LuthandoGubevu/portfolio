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
  'https://myrewards.netlify.app/',
  'https://www.getx.co.za/',
  'https://ndamaseproperties.com/',
  'https://alliedbiz.co.za/'
];

export const webProjects = projectUrls.map(url => {
  const domain = new URL(url).hostname;
  const name = domain.replace('www.', '').replace('.netlify.app', '').replace('.co.za', '').replace('.mystrikingly.com','').replace('.com', '');
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
    'getx': "GetX Marketplace",
    'ndamaseproperties': "Ndamase Properties",
    'alliedbiz': "Allied Business Solutions",
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
  if (title === "Lweemee") {
    imageUrl = '/lweemee.jpg';
  }
  if (title === "MyRewards") {
    imageUrl = '/rewards.jpg';
  }
  if (title === "Allied Business Solutions") {
    imageUrl = '/Allied.jpg';
  }
  if (title === "Ndamase Properties") {
    imageUrl = '/Ndamase.jpg';
  }
   if (title === "GetX Marketplace") {
    imageUrl = '/get-x.jpg';
  }

  const projectData = {
    title: title,
    description: `A web project showcasing skills in modern web development and UI design.`,
    tools: ['Figma', 'Adobe Suite', 'React', 'Next.js', 'Tailwind CSS'],
    imageUrl: imageUrl,
    liveLink: url,
    aiHint: 'website interface'
  };

  if (title === 'Loyalty Leap') {
    projectData.description = 'A comprehensive project covering the full design and development lifecycle, from initial concept and UI/UX in Figma to final implementation.';
  }
  if (title === 'GetX Marketplace') {
    projectData.description = 'A dynamic e-commerce platform connecting buyers and sellers with a seamless shopping experience.';
    projectData.tools = ['Figma', 'Adobe Suite', 'WordPress', 'E-Commerce'];
    projectData.aiHint = 'ecommerce marketplace';
  }
  if (title === 'Ndamase Properties') {
    projectData.description = 'Elegant property portal showcasing listings with advanced search and virtual tour capabilities.';
    projectData.tools = ['Figma', 'Adobe Suite', 'Webflow', 'Real Estate'];
    projectData.aiHint = 'real estate website';
  }
  if (title === 'Allied Business Solutions') {
    projectData.description = 'Comprehensive business management software streamlining operations and enhancing productivity.';
    projectData.tools = ['Figma', 'Adobe Suite', 'Web Development', 'IT Solutions'];
    projectData.aiHint = 'business website';
  }


  return projectData;
});


export const communityProjects = [
  {
    title: 'Fundanii Coding Project',
    description: 'An initiative to bring coding education to underserved communities in South Africa.',
    link: 'https://www.facebook.com/fundanii',
  },
  {
    title: 'Fundanii Stories',
    description: 'A platform for sharing inspiring stories from the community to foster hope and connection.',
    link: 'https://fundaniistories.mystrikingly.com/',
  },
  {
    title: 'Dispatch Live Article',
    description: 'Featured in a news article for work on educational initiatives and community impact.',
    link: 'https://www.dispatchlive.co.za/news/2017-05-26-local-bofs-aim-to-improve-learning/',
  }
];

export const experiences = [
    {
        company: 'FollowupCRM (Remote - Florida, USA)',
        role: 'UI/UX Designer',
        duration: 'Aug 2025 - Present',
        responsibilities: [
            'Design and prototype intuitive, user-centered interfaces in Figma, translating product requirements into wireframes, mockups, and interactive prototypes.',
            'Conduct user research and usability testing to validate design decisions, iterating based on feedback and usage data.',
            'Collaborate closely with product managers and engineers to ensure accurate implementation, while maintaining and evolving a consistent design system.'
        ],
        tools: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'User Research']
    },
    {
        company: 'Baobab Brands',
        role: 'Digital Product Strategist',
        duration: 'Feb 2025 - Feb 2026',
        responsibilities: [
            'Drive product strategy and execution, leveraging design expertise to create seamless user experiences.',
            'Lead the end-to-end digital customer journey, ensuring alignment with business objectives.',
            'Collaborate with cross-functional teams to deliver innovative digital products.'
        ],
        tools: ['Figma', 'React', 'Next.js', 'Jira', 'Agile Methodologies']
    },
    {
        company: 'Winedrops (Remote - UK)',
        role: 'Creative Strategist',
        duration: 'Aug 2024 - Jan 2025',
        responsibilities: [
            'Drove performance-focused creative strategy across paid (Meta & Google Ads) and organic channels.',
            'Contributed to 5x year-on-year growth through data-driven content strategies.',
            'Utilized tools like Foreplay to analyze trends and create high-converting content.'
        ],
        tools: ['Meta Ads', 'Google Ads', 'Foreplay', 'Creative Strategy', 'A/B Testing']
    },
    {
        company: 'Allied Business Solutions',
        role: 'E-Commerce Specialist | Graphic Designer',
        duration: 'Nov 2022 - Aug 2024',
        responsibilities: [
            'Successfully built and managed the online store, from content creation to sales strategies.',
            'Managed SEO, Google Ads, and the Takealot Seller Portal to drive traffic and sales.',
            'Designed marketing materials and managed digital campaigns.'
        ],
        tools: ['Shopify', 'SEO', 'Google Ads', 'Takealot Seller Portal', 'Adobe Creative Suite']
    },
    {
        company: 'Sondlo & Knopp Advertising',
        role: 'Graphic Designer & DTP Artist',
        duration: 'Oct 2021 - Oct 2022',
        responsibilities: [
            'Created classified ads, formatted documents, and designed diverse marketing materials.',
            'Utilized InDesign for desktop publishing and prepared documents for professional printing.',
            'Worked in a fast-paced agency environment, meeting tight deadlines.'
        ],
        tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator', 'DTP']
    }
];

export const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:lgubevu@gmail.com' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/LuthandoGubevu' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/luthando-gubevu/' },
  { name: 'Behance', icon: null, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.22 8.44a2.28 2.28 0 0 0-2.3-2.33H8.44v11.78h4.48a2.28 2.28 0 0 0 2.3-2.33v-1.78a2.28 2.28 0 0 0-2.3-2.33v0a2.28 2.28 0 0 0 2.3-2.33Z"/><path d="M8.44 11.11h2.3a1.14 1.14 0 0 1 1.14 1.14v0a1.14 1.14 0 0 1-1.14 1.14h-2.3Z"/><line x1="14.07" x2="16.56" y1="5.11" y2="5.11"/></svg>`, url: 'https://www.behance.net/lutandogubevu' },
  { name: 'Linktree', icon: LinkIcon, url: 'https://linktr.ee/luthandosocial' }
];
