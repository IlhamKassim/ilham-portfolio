export type ServiceUnit = 'project' | 'hour' | 'session' | 'workshop'

export interface Service {
  code: string
  title: string
  description: string
  /** Starting price in USD. */
  price: number
  unit: ServiceUnit
}

export interface ServiceGroup {
  id: 'build' | 'teach'
  title: string
  blurb: string
  items: Service[]
}

export type ProjectCategory = 'web' | 'ai' | 'data' | 'systems'

export interface Project {
  title: string
  /** One line shown under the title on featured cards. */
  kicker?: string
  description: string
  link: string
  /** Secondary link, usually the source repo when `link` is the live site. */
  repo?: string
  tech: string[]
  category: ProjectCategory[]
  featured?: boolean
  live?: boolean
  image?: string
}

export interface Experience {
  role: string
  org: string
  dates: string
  bullets: string[]
  tech?: string[]
  /** Shown on the home page. Everything else sits behind "Show full history". */
  highlight?: boolean
}

export const profile = {
  name: 'Mohammad Ilham bin Kassim',
  shortName: 'Ilham Kassim',
  role: 'Freelance Developer',
  headline: 'Software that shows its work.',
  intro:
    "I'm Ilham, a Penn State Computer Engineering graduate freelancing from Sabah. I build websites, web apps, AI features and data dashboards for teams anywhere. You get working software, and you get the reasons behind it.",
  tagline:
    'Freelance web, AI and data developer from Sabah, Malaysia. Builder of SabahKu and ShariahTrading, part of the PolitikKu team.',
  location: 'Papar, Sabah, Malaysia',
  timezone: 'GMT+8',
  avatar: '/avatar.jpg',
  email: 'ilhamkassim2003@gmail.com',
  phone: '+60 17-528 4805',
  /** Digits only, for wa.me links. */
  whatsapp: '60175284805',
  linkedin: 'https://www.linkedin.com/in/ilhamkassim',
  github: 'https://github.com/IlhamKassim',
  graduation: 'May 2026',
  gpa: '3.33/4.0',
  languages: ['English (Native/Bilingual)', 'Malay (Native/Bilingual)'],
  openTo: ['Freelance projects', 'Tutoring', 'Full-time roles'],

  stats: [
    { value: '4', label: 'live products I built or help build' },
    { value: '20+', label: 'public repos on GitHub' },
    { value: '2,900+', label: 'LinkedIn followers reading my build notes' },
    { value: 'B.S.', label: 'Computer Engineering, Penn State' },
  ],

  services: [
    {
      id: 'build',
      title: 'Build',
      blurb:
        'Fixed-scope work. You get the code, a short write-up of the decisions, and a walkthrough.',
      items: [
        {
          code: 'B1',
          title: 'Landing page',
          description:
            'One fast, mobile-first page with a clear call to action and a WhatsApp or email button.',
          price: 300,
          unit: 'project',
        },
        {
          code: 'B2',
          title: 'Business or portfolio website',
          description:
            'A few pages, your own domain, deployed and easy to update. Like this one.',
          price: 700,
          unit: 'project',
        },
        {
          code: 'B3',
          title: 'Web app or internal dashboard',
          description:
            'Next.js with Postgres or Supabase. Logins, an admin console, the workflow your team does by hand today.',
          price: 1800,
          unit: 'project',
        },
        {
          code: 'B4',
          title: 'AI feature or assistant',
          description:
            'Add Claude or Gemini to your product: answer from your documents, sort messages, pull fields out of forms.',
          price: 600,
          unit: 'project',
        },
        {
          code: 'B5',
          title: 'Workflow automation',
          description:
            'Connect forms, sheets, email and WhatsApp so the copy-paste stops. Includes MyInvois e-invoicing.',
          price: 400,
          unit: 'project',
        },
        {
          code: 'B6',
          title: 'Data map or dashboard',
          description:
            'Turn public or internal data into maps, rankings and charts, with a source and a year on every number.',
          price: 1200,
          unit: 'project',
        },
        {
          code: 'B7',
          title: 'Quant and trading tools',
          description:
            'Stock screens, backtests and paper-trading bots on Alpaca, including Shariah-compliant universes.',
          price: 800,
          unit: 'project',
        },
        {
          code: 'B8',
          title: 'Fixes and small changes',
          description:
            'Bugs, updates and small features on a site or app you already have.',
          price: 25,
          unit: 'hour',
        },
      ],
    },
    {
      id: 'teach',
      title: 'Teach',
      blurb:
        'Online, 60 minutes a session unless we agree otherwise. Bring your own project if you have one.',
      items: [
        {
          code: 'T1',
          title: 'Programming tutoring',
          description:
            'Python, C++, Java or JavaScript, data structures, and Computer Engineering coursework.',
          price: 20,
          unit: 'session',
        },
        {
          code: 'T2',
          title: 'Build with AI coaching',
          description:
            'Use Claude Code, Cursor and agents on a real project without losing track of why the code works.',
          price: 30,
          unit: 'session',
        },
        {
          code: 'T3',
          title: 'Project and code review',
          description:
            'I read your repo before we meet, then we go through what to fix first. Written notes included.',
          price: 25,
          unit: 'session',
        },
        {
          code: 'T4',
          title: 'Workshop for your team or club',
          description:
            'Vibe-coding sessions, JEV and agent integration, or hackathon prep. The formats I run with KrackedDevs.',
          price: 250,
          unit: 'workshop',
        },
        {
          code: 'T5',
          title: 'Studying in the US',
          description:
            'The transfer route, applications and the first year as an international student, from someone who did it.',
          price: 15,
          unit: 'session',
        },
      ],
    },
  ] as ServiceGroup[],

  process: [
    {
      step: '01',
      title: 'Tell me the problem',
      body: 'Message me on WhatsApp or email. A rough idea is enough to start.',
    },
    {
      step: '02',
      title: 'Get a scope and a price',
      body: "I reply with what I'd build, what I'd leave out, and a fixed quote.",
    },
    {
      step: '03',
      title: 'Watch it take shape',
      body: 'You get a preview link early and see changes as they land.',
    },
    {
      step: '04',
      title: 'Take it with you',
      body: 'Code in your GitHub, notes on the decisions, and a walkthrough call.',
    },
  ],

  faq: [
    {
      q: 'What does "from" mean on the prices?',
      a: "It's where a small, clear version of that work starts. Your quote depends on scope, so I send a fixed number before anything begins.",
    },
    {
      q: 'Do you work with clients outside Malaysia?',
      a: "Yes. Everything happens remotely, and I'm on Malaysia time (GMT+8). Prices are in USD.",
    },
    {
      q: 'Do you use AI to write the code?',
      a: 'Yes, and I check its work. I can explain every decision in what I hand over, including where AI helped and how I verified it.',
    },
    {
      q: 'Can you work on a site or app I already have?',
      a: 'Usually. Send me the link or the repo and I will tell you honestly whether fixing it or starting over makes more sense.',
    },
  ],

  community: [
    {
      name: 'KrackedDevs',
      role: 'Ambassador, Borneo',
      body: "Malaysia's builder community. I help run the Borneo branch's events: JEV integration workshops, vibe-coding sessions and hackathons. I also co-ran CASE FILE 01, a free online lesson on JEV, with Wan from Sarawak.",
      link: 'https://krackeddevs.com',
    },
    {
      name: 'DeckerGUI Developers',
      role: 'Contributor',
      body: 'An independent guild from Sarawak building governance-first tooling for AI agents: clear roles, scoped permissions and human oversight.',
      link: 'https://portfolios.deckergui.my/home',
    },
    {
      name: 'The Borneo',
      role: 'Co-founder',
      body: 'A Penn State student organization for the heritage of Sabah, Sarawak and Kalimantan. I wrote its constitution and got it registered.',
      link: '',
    },
  ],

  notes: [
    {
      hook: 'If AI writes the code, what should a fresh graduate still know?',
      takeaway:
        'A working application is one outcome. Understanding why it works is another.',
      tag: 'AI',
    },
    {
      hook: 'My AI job search tool was finding real jobs. It was still wasting my time.',
      takeaway:
        'I did not change the model. I changed the definition of a useful result.',
      tag: 'AI engineering',
    },
    {
      hook: 'A friend sent me an AI model that cannot write a sentence, so I tested it on my inbox.',
      takeaway:
        'Jev named all 10 email types correctly. It still disagreed with me about what counts as "today".',
      tag: 'Experiment',
    },
    {
      hook: 'An election map can show the correct results in the wrong places.',
      takeaway:
        "Old results on today's 222 seat boundaries would look right and be wrong, so some seats stay blank on purpose.",
      tag: 'PolitikKu',
    },
    {
      hook: 'I spent a month comparing AI coding tools.',
      takeaway:
        'Choosing the right workflow matters as much as choosing the right model.',
      tag: 'Tools',
    },
    {
      hook: 'The uncomfortable part of building in public is deciding which work is worth posting.',
      takeaway:
        'I am learning to treat public building as documentation rather than a daily performance.',
      tag: 'Building in public',
    },
  ],

  skillCategories: [
    {
      category: 'Build',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Node.js & Express',
        'FastAPI',
        'Supabase',
        'PostgreSQL',
      ],
    },
    {
      category: 'AI & Data',
      items: [
        'Claude API',
        'Gemini API',
        'TypeSafe Jev',
        'Prompt Engineering',
        'Pandas',
        'Scikit-Learn',
        'LightGBM',
        'PostGIS',
      ],
    },
    {
      category: 'Systems',
      items: [
        'Python',
        'C++',
        'Java',
        'Multithreading',
        'Operating Systems',
        'Computer Architecture',
        'Data Structures & Algorithms',
      ],
    },
    {
      category: 'Shipping & People',
      items: [
        'Vitest & pytest',
        'Docker',
        'Vercel',
        'Workshops & Teaching',
        'Event Management',
        'Mentoring',
        'Stakeholder Engagement',
      ],
    },
  ],

  certifications: [
    {
      name: 'Customer Service Foundations',
      issuer: 'LinkedIn Learning',
      date: '2025-03',
    },
    {
      name: 'Idea TestLab',
      issuer: 'Canvas Credentials (Badgr)',
      date: '2025-05',
    },
    {
      name: 'Introduction to Prompt Engineering for Generative AI',
      issuer: 'LinkedIn Learning',
      date: '2025-06',
    },
    {
      name: 'Artificial Intelligence Foundations: Machine Learning',
      issuer: 'LinkedIn Learning',
      date: '2025-06',
    },
    {
      name: 'Entrepreneurship Foundations',
      issuer: 'LinkedIn Learning',
      date: '2025-06',
    },
    {
      name: 'Introduction to Web Design and Development',
      issuer: 'LinkedIn Learning',
      date: '2025-07',
    },
    {
      name: 'Business Analysis Foundations',
      issuer: 'LinkedIn Learning',
      date: '2025-07',
    },
    {
      name: 'Creating Your Personal Brand',
      issuer: 'LinkedIn Learning',
      date: '2025-07',
    },
    {
      name: 'Learning GitHub',
      issuer: 'LinkedIn Learning',
      date: '2025-08',
    },
    {
      name: 'Learning Factory Capstone Onboarding',
      issuer: 'Penn State College of Engineering',
      date: '2026-01',
    },
  ],

  education: [
    {
      school: 'Pennsylvania State University',
      credential: 'B.S. Computer Engineering',
      dates: 'Aug 2022 – May 2026',
      details: [
        'GPA: 3.33/4.0',
        'Relevant: Computer Organization, Systems Programming, Data Structures, Electronic Circuit Design',
        'MARA YTP Scholar',
      ],
    },
    {
      school: 'INTEC Education College',
      credential: 'American Degree Transfer Program (Engineering)',
      dates: 'Jun 2021 – Jun 2022',
      details: [],
    },
    {
      school: 'MARA Junior Science College (MRSM)',
      credential:
        'High School Diploma, Sijil Pelajaran Malaysia / Malaysia Certificate of Education',
      dates: 'Mar 2016 – Mar 2021',
      details: [],
    },
  ],

  experiences: [
    {
      role: 'Ambassador, Borneo',
      org: 'KrackedDevs',
      dates: '2026 – Present',
      bullets: [
        "Help run the Borneo branch's events: JEV integration workshops, vibe-coding sessions and hackathons.",
        'Co-ran CASE FILE 01, a free online lesson on JEV and dual-agent async workflows.',
      ],
      tech: ['Workshops', 'TypeSafe Jev', 'AI Agents', 'Community'],
      highlight: true,
    },
    {
      role: 'Contributor',
      org: 'DeckerGUI Developers',
      dates: '2026 – Present',
      bullets: [
        'Contribute to an open-source guild building governance-first tooling for agentic AI.',
      ],
      tech: ['Agentic AI', 'Open Source'],
      highlight: true,
    },
    {
      role: 'Board Transition Committee Member',
      org: 'Penn State University',
      dates: 'Jun 2025 – Jun 2025',
      bullets: [
        'Selected as a student representative to advise the incoming Board of Trustees/Executive Board on strategic planning and organizational continuity for the 2026–2027 term.',
      ],
      tech: ['Strategic Planning', 'Governance', 'Leadership'],
    },
    {
      role: 'DDAR Internship',
      org: 'Penn State University – Division of Development and Alumni Relations',
      dates: 'Apr 2025 – Jul 2026',
      bullets: [
        'AI Evaluation: Evaluated generative AI and predictive modeling tools to accelerate fundraising goals, delivering pilot-project roadmaps to Division leaders.',
        'Data Integrity: Audited AWA-to-Salesforce CRM migration, ensuring no high-value prospect records were lost during transition.',
        'Recruitment: Screened 100+ applicants and interviewed 15 candidates to select the 2026 intern cohort, managing the full recruitment lifecycle.',
      ],
      tech: [
        'Python',
        'Data Analysis',
        'Predictive Modeling',
        'Microsoft 365',
        'Database Management',
      ],
      highlight: true,
    },
    {
      role: 'NSO Frontline',
      org: 'Student Orientation & Transition Programs, Penn State',
      dates: 'Mar 2025 – Aug 2025',
      bullets: [
        'Served as primary point of contact for 8,000+ new students and families across phone/email/in-person channels',
        'Built quick-response scripts reducing call handling time by 40% and improving customer satisfaction scores',
        'Coordinated orientation logistics for 2,000+ incoming students, ensuring 99% successful program completion rate',
        'Mentored 5 student volunteers, improving team efficiency and reducing response time by 30%',
      ],
      tech: [
        'Customer Service',
        'Project Management',
        'Team Leadership',
        'Communication',
        'Problem Solving',
      ],
    },
    {
      role: 'Orientation Leader',
      org: 'Penn State University',
      dates: 'Mar 2025 – Apr 2025',
      bullets: [
        'Collaborated with fellow leaders to organize and execute large-scale events including campus tours and team-building exercises.',
        'Served as a peer mentor, helping new students navigate academic, social, and extracurricular opportunities.',
        'Promoted diversity, equity, inclusion, and school spirit while gathering feedback to improve future orientation programs.',
      ],
      tech: ['Event Planning', 'Mentorship', 'Communication', 'DEI'],
    },
    {
      role: 'Online Program Moderator / Technical Assistant',
      org: 'Penn State University – Smeal College of Business',
      dates: 'Feb 2025 – Jul 2026',
      bullets: [
        'Technical Operations: Managed technical delivery for 6+ live sessions per week, supporting 20 senior leaders per session across supply chain and business disciplines.',
        'Real-Time Support: Configured virtual breakout rooms and resolved software issues in real time using Zoom and Microsoft Teams to ensure uninterrupted delivery.',
      ],
      tech: [
        'Zoom',
        'Microsoft Teams',
        'Technical Support',
        'Virtual Learning',
        'Event Management',
      ],
      highlight: true,
    },
    {
      role: 'Smeal Business Core Proctor',
      org: 'Smeal College of Business, Penn State',
      dates: 'Feb 2025 – Apr 2025',
      bullets: [
        'Maintained the integrity of Smeal Business Core examinations by overseeing test administration and enforcing strict exam policies.',
        'Verified student identification and actively monitored exam rooms to ensure a secure testing environment and prevent academic dishonesty.',
        'Handled and securely transported confidential test materials, strictly adhering to established academic protocols.',
        'Communicated clear instructions to students and reported testing irregularities to uphold university academic standards.',
      ],
      tech: ['Academic Integrity', 'Communication', 'Attention to Detail'],
    },
    {
      role: 'Part-Time Research Support',
      org: 'Applied Poultry Research Lab, Penn State',
      dates: 'Nov 2024 – Aug 2025',
      bullets: [
        'Supported applied research in nutrition, management, and welfare, collecting and analyzing 1,000+ data samples',
        'Maintained 99% data accuracy rate through meticulous sample collection and documentation processes',
        "Assisted in research publication preparation for the lab's ongoing studies",
        'Optimized data collection workflows through improved methodologies',
      ],
      tech: [
        'Data Analysis',
        'Research Methods',
        'Statistical Analysis',
        'Laboratory Techniques',
        'Documentation',
      ],
    },
    {
      role: 'Common Desk Team Member',
      org: 'Penn State University',
      dates: 'May 2024 – Dec 2024',
      bullets: [
        'Provided front-desk support and customer service for the Penn State campus community.',
      ],
      tech: ['Customer Service', 'Communication'],
    },
    {
      role: 'EduSpark Bootcamp Participant',
      org: 'FutureLab.my',
      dates: 'Jun 2024 – Jul 2024',
      bullets: [
        'Participated in a rigorous social enterprise bootcamp featuring workshops and a two-week mentorship focused on startup development.',
        'Co-developed a marketplace platform concept to help local artisans from Borneo sell their products, placing 3rd out of 20 competing teams in the final pitch competition.',
        'Secured a paid mentorship opportunity with FutureLab based on the success of the startup pitch.',
      ],
      tech: [
        'Entrepreneurship',
        'Social Enterprise',
        'Startup Development',
        'Pitching',
      ],
      highlight: true,
    },
    {
      role: 'National Training Week Program',
      org: 'NTW Malaysia',
      dates: 'Jun 2024 – Jun 2024',
      bullets: [
        'Completed comprehensive coursework in "Artificial Intelligence From Scratch" and "Foundation in Artificial Intelligence".',
        'Gained foundational knowledge in machine learning, neural networks, deep learning (CNNs, RNNs), and Natural Language Processing (NLP).',
        'Learned to utilize AI tools to accelerate personal and professional learning processes for Small and Medium Enterprises (SMEs).',
      ],
      tech: ['Machine Learning', 'Neural Networks', 'NLP', 'Deep Learning'],
    },
    {
      role: 'Google Developer Student Club Member',
      org: 'Penn State GDSC',
      dates: 'Aug 2023 – Mar 2025',
      bullets: [
        'Participated in technical and professional development workshops focused on project management, resume building, and startup creation.',
        'Networked directly with Google representatives during exclusive club events to gain insights into the tech industry.',
        'Engaged with a community of computer science students to build foundational skills required for tech careers.',
      ],
      tech: ['Project Management', 'Networking', 'Professional Development'],
    },
    {
      role: 'Vice President, External Affairs',
      org: 'Penn State Malaysian Students Club',
      dates: 'Aug 2023 – Aug 2024',
      bullets: [
        'Co-led a team of 20+ members to ensure smooth operations and strong organizational structure for the 200+-member organization.',
        'Planned and coordinated major cultural events, including the Independence Day Celebration, Game Night, and Malaysian Cultural Night.',
        'Spearheaded external outreach, building strategic connections with other university clubs and organizations to facilitate collaborative activities.',
      ],
      tech: [
        'Leadership',
        'Event Planning',
        'External Relations',
        'Team Management',
      ],
      highlight: true,
    },
    {
      role: 'Founding Member & Operational Director',
      org: 'The Borneo, Penn State University',
      dates: 'Apr 2023 – Present',
      bullets: [
        'Co-founded The Borneo, a Penn State student organization promoting the cultural heritage of Sabah, Sarawak, and Kalimantan.',
        "Served as the organization's first Operational Director, leading negotiations with peer clubs and establishing efficient operational workflows.",
        'Authored the club constitution and led its official registration with Pennsylvania State University.',
      ],
      tech: ['Organizational Leadership', 'Governance', 'Cultural Programming'],
      highlight: true,
    },
    {
      role: 'Logistics Director, MCN Committee',
      org: 'Penn State University',
      dates: 'Jan 2023 – Jan 2024',
      bullets: [
        'Served as Logistics Director for the annual Malaysian Cultural Night, successfully organizing an event with over 200 attendees to promote cultural heritage.',
        'Established direct partnerships with the Malaysian Embassy in Washington D.C. to secure authentic cultural items and logistical support for the event.',
        'Coordinated end-to-end event logistics to ensure a seamless experience for performers, committee members, and guests.',
      ],
      tech: [
        'Event Management',
        'Logistics',
        'Partnership Development',
        'Cultural Programming',
      ],
    },
    {
      role: 'Dining Worker',
      org: 'Penn State University',
      dates: 'Nov 2022 – Jul 2023',
      bullets: [
        'Supported dining hall operations including food preparation, service, and maintaining a clean, safe environment.',
      ],
      tech: ['Customer Service', 'Food Service', 'Teamwork'],
    },
  ] as Experience[],

  projects: [
    {
      title: 'SabahKu',
      kicker: 'An economic atlas of Sabah, district by district',
      description:
        "I wanted to see Sabah's economy district by district, so I built the map. Pick an indicator and a year, and the map and rankings for all 27 districts update together: household income, poverty, jobs, GDP growth and night lights. Every number carries a source and a year, and modelled numbers come with an uncertainty range.",
      link: 'https://sabah-ku.com',
      repo: 'https://github.com/IlhamKassim/sabah-atlas',
      tech: ['Next.js', 'FastAPI', 'PostGIS', 'LightGBM', 'OpenDOSM'],
      category: ['data', 'web'],
      featured: true,
      live: true,
      image: '/projects/sabahku.jpg',
    },
    {
      title: 'PolitikKu',
      kicker: 'Find your parliamentary seat and your MP',
      description:
        "Part of the team behind a civic site covering all 222 Dewan Rakyat seats. We brought historical election results back to 1955 onto the seat map. Old results drawn on today's boundaries would look right and be wrong, so seats we can't place honestly stay blank, and the page explains why.",
      link: 'https://politikku.my',
      tech: ['Next.js', 'TypeScript', 'Maps', 'Open Data'],
      category: ['data', 'web'],
      featured: true,
      live: true,
      image: '/projects/politikku.jpg',
    },
    {
      title: 'ShariahTrading',
      kicker: 'A Shariah-screened quant engine, running on paper',
      description:
        'Screens US companies through Shariah ETF holdings, ranks them on momentum, quality, low volatility and value, and rebalances monthly on Alpaca paper accounts. On a $100K paper portfolio it beat the S&P 500 by 2.5% and the SPUS ETF by 5% in its first week. FastAPI backend, React dashboard, pytest suite.',
      link: 'https://shariahtrading.my',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Alpaca API'],
      category: ['data', 'web'],
      featured: true,
      live: true,
      image: '/projects/shariahtrading.jpg',
    },
    {
      title: 'Langkah',
      kicker: 'Which graduate programmes are open to you, and when',
      description:
        'Final-year students in Malaysia answer seven questions and see the graduate programmes they qualify for, with every window on one calendar. It only shows programmes checked against an employer page. Samples stay hidden unless you ask for them.',
      link: 'https://graduate-job-seeker.vercel.app',
      repo: 'https://github.com/IlhamKassim/graduate-job-seeker',
      tech: ['Next.js', 'TypeScript', 'Vercel'],
      category: ['web'],
      featured: true,
      live: true,
      image: '/projects/langkah.jpg',
    },
    {
      title: 'Reber Building Virtual Tour',
      kicker: 'Penn State capstone, lead developer',
      description:
        'A 360° virtual tour and showcase of the redesigned Mechanical Engineering hallway in the Reber Building, built for the Kinetic Engineering Collective capstone. Penn State-branded dashboard, a Pannellum multi-scene panorama viewer and an animated budget tracker.',
      link: 'https://ilhamkassim.github.io/showcase-website/',
      tech: ['JavaScript', 'Pannellum', 'WebGL', 'SPA'],
      category: ['web'],
    },
    {
      title: 'Aqildo Photo CRM',
      description:
        'A side project: a CRM for running a convocation photography agency, with photographer vetting, events, packages, time slots, the booking lifecycle and a two-stage payment split. The domain layer is framework-free and covered by 65 tests.',
      link: 'https://github.com/IlhamKassim/aqildophoto-agency',
      tech: ['Next.js', 'TypeScript', 'SQLite', 'Vitest'],
      category: ['web'],
    },
    {
      title: 'Inbox sort: Jev vs Cursor',
      description:
        'I labelled 10 of my own emails, then let TypeSafe Jev and Cursor sort them. Jev named every email type correctly for about $0.0003. Cursor matched my "do it now" pile better. A smell test, not a benchmark.',
      link: 'https://github.com/IlhamKassim/jev-sandbox',
      tech: ['TypeSafe Jev', 'TypeScript', 'Python'],
      category: ['ai'],
    },
    {
      title: 'AI Resume Builder',
      description:
        'Tailors a resume to a job description with the Claude API. Zod schemas keep the output structured and ATS-safe, and a Vitest suite covers prompt construction, validation and error handling.',
      link: 'https://github.com/IlhamKassim/resume-builder',
      tech: ['Next.js', 'TypeScript', 'Anthropic API', 'Zod', 'Vitest'],
      category: ['ai', 'web'],
    },
    {
      title: 'Social Nutrition Label',
      description:
        'A Chrome extension that uses the Gemini API to rate a social media post on credibility, factual alignment and visual integrity, so misinformation is easier to spot.',
      link: 'https://github.com/IlhamKassim/laila-coders',
      tech: ['Gemini API', 'Chrome Extension', 'JavaScript'],
      category: ['ai'],
    },
    {
      title: 'Qwen Shariah Autopilot',
      description:
        "Built on Qwen Cloud for the Global AI Hackathon Series. Adds an autonomous decision layer on top of ShariahTrading's signal engine.",
      link: 'https://github.com/IlhamKassim/qwen-shariah-autopilot',
      tech: ['Qwen', 'Python', 'Algorithmic Trading'],
      category: ['ai', 'data'],
    },
    {
      title: 'MyInvois Middleware',
      description:
        'Automates LHDN MyInvois e-invoicing for social-commerce sellers, so small merchants stay compliant without hand-entering every invoice.',
      link: 'https://github.com/IlhamKassim/myinvois',
      tech: ['Express', 'Prisma', 'BullMQ', 'Redis'],
      category: ['web'],
    },
    {
      title: 'Football Predictor',
      description:
        'Predicts exact scorelines for international matches with two LightGBM Poisson models trained on results back to 1872, then simulates whole knockout brackets. Outputs a self-contained HTML report.',
      link: 'https://github.com/IlhamKassim/football-predictor',
      tech: ['Python', 'LightGBM', 'Monte Carlo'],
      category: ['data'],
    },
    {
      title: 'Computer Architecture Design Space Explorer',
      description:
        'A C++ framework that searches an 18-dimensional processor and cache design space, evaluating up to 1,000 configurations per run and optimizing for execution time or energy delay product.',
      link: 'https://github.com/IlhamKassim/cpu-architecture-dse',
      tech: ['C++', 'Computer Architecture', 'Shell Scripting'],
      category: ['systems'],
    },
    {
      title: 'Thread Scheduler',
      description:
        'A multithreaded CPU scheduler in C++ with pthreads, supporting FCFS, SRTF and MLFQ, that replays CPU and I/O timing and draws a Gantt chart of the run.',
      link: '#',
      tech: ['C++', 'Pthreads', 'Operating Systems'],
      category: ['systems'],
    },
    {
      title: 'Skincare Storefront',
      description:
        'A routine builder and storefront that takes a shopper from picking products to checkout in one flow.',
      link: 'https://skincare-storefront-henna.vercel.app',
      repo: 'https://github.com/IlhamKassim/skincare-storefront',
      tech: ['Next.js', 'Supabase', 'Framer Motion'],
      category: ['web'],
    },
    {
      title: 'MLBB Predictive Analysis',
      description:
        'An analytics MVP for esports coaching: Python data pipelines and machine learning models that surface player performance insights.',
      link: 'https://github.com/IlhamKassim/mlbb-predictive-analysis-mvp',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      category: ['data', 'ai'],
    },
    {
      title: 'AI in Fundraising Briefs',
      description:
        "Evaluation of generative AI and predictive-modeling tools for higher-ed fundraising. The research behind the pilot-project roadmaps delivered to Penn State's Division of Development and Alumni Relations.",
      link: '#',
      tech: ['Research', 'AI/ML', 'Technical Writing'],
      category: ['ai'],
    },
    {
      title: 'EduSpark Marketplace (Bootcamp)',
      description:
        "Marketplace concept for Borneo artisans, built during FutureLab.my's social enterprise bootcamp. Placed 3rd out of 20 teams in the final pitch and earned a paid mentorship.",
      link: '#',
      tech: ['Product', 'Social Enterprise', 'Pitching'],
      category: ['web'],
    },
  ] as Project[],
}
