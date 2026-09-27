export interface ProjectItem {
  name: string
  cat: 'AI' | 'Systems' | 'Web'
  line: string
  stack: string
  url: string
}

export interface GanttSegment {
  left: string
  width: string
}

export interface GanttPolicy {
  resp: string
  wait: string
  note: string
  segs: Record<'T1' | 'T2' | 'T3' | 'T4', [number, number][]>
}

export interface ExperienceItem {
  role: string
  org: string
  when: string
  points: string[]
  tags: string[]
}

export const GANTT_POLICIES: Record<'FCFS' | 'SRTF' | 'MLFQ', GanttPolicy> = {
  FCFS: {
    segs: {
      T1: [[0, 8]],
      T2: [[8, 12]],
      T3: [[12, 21]],
      T4: [[21, 26]],
    },
    resp: '8.75',
    wait: '8.75',
    note: 'First-Come, First-Served: Simple with no scheduling overhead, but shorter threads wait a long time behind heavy CPU bursts (the convoy effect).',
  },
  SRTF: {
    segs: {
      T1: [[0, 1], [10, 17]],
      T2: [[1, 5]],
      T3: [[17, 26]],
      T4: [[5, 10]],
    },
    resp: '4.25',
    wait: '6.50',
    note: 'Shortest Remaining Time First: Preempts running tasks when shorter jobs arrive. Keeps average wait time low, but longer jobs like T3 risk starvation.',
  },
  MLFQ: {
    segs: {
      T1: [[0, 2], [8, 12], [21, 23]],
      T2: [[2, 4], [12, 14]],
      T3: [[4, 6], [14, 18], [23, 26]],
      T4: [[6, 8], [18, 21]],
    },
    resp: '1.50',
    wait: '13.0',
    note: 'Multi-Level Feedback Queue: Uses priority tiers with increasing time slices (q=2, 4, then FCFS). Gives interactive tasks fast response times while still processing long workloads.',
  },
}

export const THREAD_COLORS: Record<'T1' | 'T2' | 'T3' | 'T4', string> = {
  T1: '#C5F547',
  T2: '#6FD3C1',
  T3: '#8FA8FF',
  T4: '#F2A65A',
}

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    name: 'Social Nutrition Label',
    cat: 'AI',
    line: 'A Chrome extension that calls Gemini to check social media posts for factual accuracy and image manipulation in real time.',
    stack: 'Gemini API · JavaScript · Web Extensions',
    url: 'https://github.com/IlhamKassim/laila-coders',
  },
  {
    name: 'Qwen Shariah Autopilot',
    cat: 'AI',
    line: 'An autonomous agent layer that parses financial news and earnings calls to explain trade decisions for the Algo Trader. Built for Alibaba Cloud’s Qwen hackathon.',
    stack: 'Qwen Cloud · FastAPI · Python',
    url: 'https://github.com/IlhamKassim/qwen-shariah-autopilot',
  },
  {
    name: 'AI Resume Builder',
    cat: 'AI',
    line: 'Tailors resumes to match specific job descriptions using Claude. Validates structured JSON schemas with Zod so ATS parsers don’t break, tested with Vitest.',
    stack: 'Next.js · Anthropic API · Zod · Vitest',
    url: 'https://github.com/IlhamKassim/resume-builder',
  },
  {
    name: 'MLBB Predictive Analysis',
    cat: 'AI',
    line: 'An esports analytics tool that predicts match outcomes and flags recurring gameplay weaknesses using historical Mobile Legends match data.',
    stack: 'Python · scikit-learn · Pandas',
    url: 'https://github.com/IlhamKassim/mlbb-predictive-analysis-mvp',
  },
  {
    name: 'MyInvois Middleware',
    cat: 'Systems',
    line: 'A backend service that automates Malaysia’s mandatory LHDN e-invoicing for social commerce sellers, using Redis job queues to process batches without timeouts.',
    stack: 'Express · Prisma · BullMQ · Redis',
    url: 'https://github.com/IlhamKassim/myinvois',
  },
  {
    name: 'Reber Virtual Tour',
    cat: 'Web',
    line: 'An interactive 360° virtual tour and budget visualization created for Penn State’s Learning Factory capstone showcase.',
    stack: 'Next.js · React · Pannellum · WebGL',
    url: 'https://ilhamkassim.github.io/showcase-website/',
  },
  {
    name: 'Skincare Storefront',
    cat: 'Web',
    line: 'A full-stack routine builder that walks customers through picking products for their skin concerns directly into cart and checkout.',
    stack: 'Next.js · Supabase · Tailwind CSS',
    url: 'https://github.com/IlhamKassim/skincare-storefront',
  },
  {
    name: 'AI in Fundraising Briefs',
    cat: 'AI',
    line: 'Internal research papers delivered to Penn State Development and Alumni Relations leadership evaluating practical pilot projects for generative AI in donor research.',
    stack: 'Technical Writing · Research · Data Strategy',
    url: '#experience',
  },
]

export const EXPERIENCES: Record<'Engineering' | 'Leadership', ExperienceItem[]> = {
  Engineering: [
    {
      role: 'DDAR Intern',
      org: 'Penn State — Development & Alumni Relations',
      when: 'Apr 2025 – Jul 2026',
      points: [
        'Evaluated generative AI and predictive modeling tools for donor engagement, delivering actionable pilot project proposals to division leadership.',
        'Audited donor data during the university-wide CRM migration to Salesforce, ensuring no high-value donor records or gift histories were lost in transit.',
        'Screened over 100 student applications and conducted 15 technical/behavioral interviews to select the incoming 2026 intern team.',
      ],
      tags: ['Python', 'Predictive Modeling', 'Salesforce CRM', 'Data Audit'],
    },
    {
      role: 'Online Program Technical Assistant',
      org: 'Smeal College of Business, Penn State',
      when: 'Feb 2025 – Jul 2026',
      points: [
        'Managed live technical operations for 6+ executive education sessions each week, supporting cohorts of ~20 corporate leaders.',
        'Configured virtual breakout rooms and quickly resolved software or audio issues in real time across Zoom and Microsoft Teams.',
      ],
      tags: ['Technical Operations', 'Live Support', 'Zoom', 'MS Teams'],
    },
    {
      role: 'Part-Time Research Support',
      org: 'Applied Poultry Research Lab, Penn State',
      when: 'Nov 2024 – Aug 2025',
      points: [
        'Collected and verified over 1,000 biological samples for nutrition and animal welfare trials, maintaining high data accuracy.',
        'Organized raw laboratory data and standardized spreadsheet formats to streamline preparation for ongoing studies.',
      ],
      tags: ['Data Collection', 'Research Methods', 'Quality Control'],
    },
    {
      role: 'National Training Week — AI Coursework',
      org: 'NTW Malaysia',
      when: 'Jun 2024',
      points: [
        'Completed intensive coursework covering supervised machine learning, convolutional neural networks (CNNs), recurrent models, and natural language processing.',
      ],
      tags: ['Machine Learning', 'Neural Networks', 'NLP'],
    },
    {
      role: 'Active Member',
      org: 'Google Developer Student Club, Penn State',
      when: 'Aug 2023 – Mar 2025',
      points: [
        'Participated in hands-on workshops covering cloud infrastructure, system design, and collaborative software engineering projects.',
      ],
      tags: ['Cloud Computing', 'System Design', 'Workshops'],
    },
  ],
  Leadership: [
    {
      role: 'Founding Member & Operational Director',
      org: 'The Borneo, Penn State University',
      when: 'Apr 2023 – Present',
      points: [
        'Co-founded an officially recognized student organization to celebrate the cultural heritage of Sabah, Sarawak, and Kalimantan.',
        'Drafted the original constitution from scratch, established club bylaws, and led formal registration with Penn State Student Affairs.',
        'Led operational workflows for regular meetings, cultural exhibitions, and cross-club partnerships as the first Operational Director.',
      ],
      tags: ['Constitution & Bylaws', 'Student Governance', 'Operations'],
    },
    {
      role: 'Board Transition Committee Representative',
      org: 'Penn State University',
      when: 'Jun 2025',
      points: [
        'Selected as a student representative to advise incoming executive board leaders on organizational continuity, event logistics, and strategic planning.',
      ],
      tags: ['Governance', 'Organizational Continuity', 'Advising'],
    },
    {
      role: 'NSO Frontline Coordinator',
      org: 'Student Orientation & Transition Programs, Penn State',
      when: 'Mar – Aug 2025',
      points: [
        'Served as a primary point of contact for over 8,000 incoming students and parents across phone, email, and in-person desk inquiries.',
        'Built standardized response templates that cut phone call handling times by 40% while keeping answers clear and thorough.',
        'Mentored 5 student volunteers on campus policies and customer support, speeding up overall team response times by 30%.',
      ],
      tags: ['Operations', 'Team Mentoring', 'Public Communication'],
    },
    {
      role: 'Vice President of External Affairs',
      org: 'Penn State Malaysian Students Club',
      when: 'Aug 2023 – Aug 2024',
      points: [
        'Co-led an executive board of 20 officers serving a community of over 200 members.',
        'Organized major campus cultural programs, including Malaysian Cultural Night (200+ attendees) and partnered with the Malaysian Embassy in D.C. for cultural materials.',
      ],
      tags: ['Community Leadership', 'Event Production', 'Partnerships'],
    },
    {
      role: 'EduSpark Social Enterprise Bootcamp',
      org: 'FutureLab.my',
      when: 'Jun – Jul 2024',
      points: [
        'Co-developed a marketplace platform concept connecting indigenous Borneo artisans with regional buyers, placing 3rd out of 20 competing teams.',
        'Earned a paid mentorship with FutureLab based on the strength of the final business pitch.',
      ],
      tags: ['Social Enterprise', 'Product Pitching', 'Mentorship'],
    },
  ],
}

export const STACK_COLUMNS = [
  {
    title: 'languages & frameworks',
    items: [
      'Python',
      'C++',
      'Java',
      'TypeScript',
      'JavaScript',
      'FastAPI',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Pandas',
      'scikit-learn',
    ],
  },
  {
    title: 'systems & ai',
    items: [
      'Operating Systems',
      'POSIX Threads',
      'CPU Scheduling',
      'Computer Architecture',
      'Machine Learning',
      'Gemini API',
      'Alpaca Trading API',
      'Database Design',
      'Prompt Engineering',
    ],
  },
  {
    title: 'leadership & operations',
    items: [
      'Team Leadership',
      'Club Governance',
      'Constitution Drafting',
      'Event Operations',
      'Mentorship',
      'Stakeholder Communication',
      'English (Bilingual)',
      'Malay (Native)',
    ],
  },
]
