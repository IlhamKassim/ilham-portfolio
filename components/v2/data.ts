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
    note: 'First come, first served — simple, but T4 waits 18 ticks behind longer jobs.',
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
    note: 'Shortest remaining time first — lowest average wait, but the longest job (T3) starves.',
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
    note: 'Multi-level feedback queue (q=2, 4, then FCFS) — every thread runs within 3 ticks; throughput pays for it. Sample workload.',
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
    line: 'Chrome extension scoring social posts for credibility, factual alignment and visual integrity.',
    stack: 'Gemini API · JS',
    url: 'https://github.com/IlhamKassim/laila-coders',
  },
  {
    name: 'Qwen Shariah Autopilot',
    cat: 'AI',
    line: 'Autonomous decision layer on the Algo Trader’s signal engine, built for a global AI hackathon.',
    stack: 'Qwen Cloud · Trading',
    url: 'https://github.com/IlhamKassim/qwen-shariah-autopilot',
  },
  {
    name: 'AI Resume Builder',
    cat: 'AI',
    line: 'Claude-powered tailoring pipeline with Zod-validated, ATS-safe output and a Vitest suite.',
    stack: 'Next.js · Anthropic · Zod',
    url: 'https://github.com/IlhamKassim/resume-builder',
  },
  {
    name: 'MLBB Predictive Analysis',
    cat: 'AI',
    line: 'Esports coaching MVP surfacing player-performance insights from ML pipelines.',
    stack: 'Python · scikit-learn',
    url: 'https://github.com/IlhamKassim/mlbb-predictive-analysis-mvp',
  },
  {
    name: 'MyInvois Middleware',
    cat: 'Systems',
    line: 'Automates LHDN e-invoicing so small social-commerce sellers stay compliant.',
    stack: 'Express · Prisma · BullMQ',
    url: 'https://github.com/IlhamKassim/myinvois',
  },
  {
    name: 'Reber Virtual Tour',
    cat: 'Web',
    line: '360° multi-scene tour and animated budget dashboard for a Learning Factory capstone.',
    stack: 'Next.js · Pannellum',
    url: 'https://ilhamkassim.github.io/showcase-website/',
  },
  {
    name: 'Skincare Storefront',
    cat: 'Web',
    line: 'Routine builder that takes a user from picking products to checkout in one flow.',
    stack: 'Next.js · Supabase',
    url: 'https://github.com/IlhamKassim/skincare-storefront',
  },
  {
    name: 'AI in Fundraising Briefs',
    cat: 'AI',
    line: 'Research behind the gen-AI pilot roadmaps delivered to Penn State DDAR leaders.',
    stack: 'Research · Technical writing',
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
        'Evaluated generative-AI and predictive-modeling tools to accelerate fundraising; delivered pilot-project roadmaps to Division leaders.',
        'Audited the AWA-to-Salesforce CRM migration so no high-value prospect records were lost.',
        'Screened 100+ applicants and interviewed 15 to select the 2026 intern cohort.',
      ],
      tags: ['Python', 'Predictive Modeling', 'Data Analysis'],
    },
    {
      role: 'Online Program Technical Assistant',
      org: 'Smeal College of Business',
      when: 'Feb 2025 – Jul 2026',
      points: [
        'Ran technical delivery for 6+ live sessions a week, each with ~20 senior leaders.',
        'Configured breakout rooms and resolved Zoom / Teams issues in real time.',
      ],
      tags: ['Zoom', 'Teams', 'Tech Support'],
    },
    {
      role: 'Part-Time Research Support',
      org: 'Applied Poultry Research Lab',
      when: 'Nov 2024 – Aug 2025',
      points: [
        'Collected and analyzed 1,000+ data samples at a 99% accuracy rate.',
        'Improved data-collection workflows and supported publication prep.',
      ],
      tags: ['Data Analysis', 'Research Methods'],
    },
    {
      role: 'National Training Week — AI',
      org: 'NTW Malaysia',
      when: 'Jun 2024',
      points: [
        'Coursework in AI From Scratch and Foundations of AI: ML, CNNs, RNNs and NLP.',
      ],
      tags: ['Machine Learning', 'NLP'],
    },
    {
      role: 'Member',
      org: 'Google Developer Student Club, Penn State',
      when: 'Aug 2023 – Mar 2025',
      points: [
        'Workshops on project management and startup creation; networked with Google representatives.',
      ],
      tags: ['Community', 'Networking'],
    },
  ],
  Leadership: [
    {
      role: 'Founding Member & Operational Director',
      org: 'The Borneo, Penn State',
      when: 'Apr 2023 – now',
      points: [
        'Co-founded an organization promoting the heritage of Sabah, Sarawak and Kalimantan.',
        'Authored the club constitution and led official registration with Penn State.',
        'Led negotiations with peer clubs and set up operating workflows as first Operational Director.',
      ],
      tags: ['Governance', 'Org Leadership'],
    },
    {
      role: 'Board Transition Committee',
      org: 'Penn State',
      when: 'Jun 2025',
      points: [
        'Student representative advising the incoming board on strategic planning and continuity for 2026–27.',
      ],
      tags: ['Strategy', 'Governance'],
    },
    {
      role: 'NSO Frontline',
      org: 'Student Orientation & Transition Programs',
      when: 'Mar – Aug 2025',
      points: [
        'Primary contact for 8,000+ new students and families.',
        'Built quick-response scripts that cut call handling time by 40%.',
        'Mentored 5 volunteers, reducing response time by 30%.',
      ],
      tags: ['Operations', 'Mentoring'],
    },
    {
      role: 'VP External Affairs',
      org: 'Penn State Malaysian Students Club',
      when: 'Aug 2023 – Aug 2024',
      points: [
        'Co-led 20+ officers for a 200+ member organization.',
        'Ran Independence Day, Game Night and Malaysian Cultural Night; built cross-club partnerships.',
      ],
      tags: ['Leadership', 'External Relations'],
    },
    {
      role: 'EduSpark Bootcamp',
      org: 'FutureLab.my',
      when: 'Jun – Jul 2024',
      points: [
        'Co-developed a marketplace concept for Borneo artisans; placed 3rd of 20 teams and earned a paid mentorship.',
      ],
      tags: ['Social Enterprise', 'Pitching'],
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
      'React',
      'Next.js',
      'FastAPI',
      'Tailwind',
      'Pandas',
      'scikit-learn',
    ],
  },
  {
    title: 'systems & ai',
    items: [
      'Operating Systems',
      'Multithreading',
      'Process Scheduling',
      'Computer Architecture',
      'Machine Learning',
      'Prompt Engineering',
      'Database Design',
      'Gemini API',
      'Alpaca API',
    ],
  },
  {
    title: 'leadership',
    items: [
      'Team Leadership',
      'Project Management',
      'Governance',
      'Stakeholder Engagement',
      'Mentoring',
      'Event Management',
      'English',
      'Malay',
    ],
  },
]
