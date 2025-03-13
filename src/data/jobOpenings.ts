
export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationProcess: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'senior-react-developer',
    title: 'Senior React Developer',
    location: 'Prague / Remote',
    type: 'Full-time',
    department: 'Development',
    description: 'We are looking for an experienced React developer to join our team and help build innovative web applications for our clients. As a Senior React Developer, you will be responsible for developing and implementing user interface components using React.js concepts and workflows.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across a vast array of web-capable devices and browsers',
      'Coordinate with the rest of the team to ensure coherent and integrated implementation',
      'Participate in code reviews and providing constructive feedback to other developers'
    ],
    requirements: [
      '4+ years of experience with React.js and JavaScript',
      'Experience with TypeScript, Redux, and modern JavaScript libraries',
      'Thorough understanding of React.js and its core principles',
      'Experience with popular React.js workflows (such as Flux or Redux)',
      'Familiarity with RESTful APIs and GraphQL',
      'Knowledge of modern front-end build pipelines and tools',
      'Experience with common front-end development tools such as Babel, Webpack, npm, etc.',
      'Good understanding of browser rendering behavior and performance'
    ],
    benefits: [
      'Remote-First Culture',
      'Professional Growth',
      'Competitive Compensation',
      'Work-Life Balance',
      'Learning Budget',
      'Team Events'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, resume, and a cover letter explaining why you are interested in joining our team.'
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    location: 'Warsaw / Remote',
    type: 'Full-time',
    department: 'Design',
    description: 'We\'re looking for a talented UX Designer to create amazing user experiences for our clients. The ideal candidate should have an eye for clean and artful design, possess superior UI skills, and be able to translate high-level requirements into interaction flows and artifacts.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements, user feedback, and user research insights',
      'Develop wireframes, prototypes, and user journey maps',
      'Collaborate with product management and engineering to define and implement innovative solutions',
      'Execute all visual design stages from concept to final hand-off to engineering',
      'Create original graphic designs (e.g. images, sketches, and tables)',
      'Identify and troubleshoot UX problems',
      'Conduct layout adjustments based on user feedback'
    ],
    requirements: [
      '3+ years of UX design experience',
      'Strong portfolio of design projects',
      'Proficiency in design tools such as Figma, Sketch, Adobe XD',
      'Solid experience in creating wireframes, user flows, prototypes and mockups',
      'Ability to solve problems creatively and effectively',
      'Up-to-date knowledge of design trends, techniques, and technologies',
      'Excellent communication skills with a good command of English',
      'Bachelor\'s degree in Design, Human-Computer Interaction, or related field'
    ],
    benefits: [
      'Remote-First Culture',
      'Professional Growth',
      'Competitive Compensation',
      'Work-Life Balance',
      'Learning Budget',
      'Team Events'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, portfolio link, resume, and a cover letter explaining why you are interested in joining our team.'
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    location: 'Berlin / Remote',
    type: 'Full-time',
    department: 'Operations',
    description: 'We are seeking a skilled Project Manager to oversee our client projects from inception to completion. The successful candidate will plan, execute, and finalize projects according to strict deadlines and within budget.',
    responsibilities: [
      'Define project scope, goals, and deliverables in collaboration with senior management and stakeholders',
      'Develop full-scale project plans and associated communications documents',
      'Effectively communicate project expectations to team members and stakeholders',
      'Estimate the resources and participants needed to achieve project goals',
      'Draft and submit budget proposals, and recommend subsequent budget changes where necessary',
      'Set and continually manage project expectations with team members and other stakeholders',
      'Delegate tasks and responsibilities to appropriate personnel',
      'Identify and resolve issues and conflicts within the project team',
      'Plan and schedule project timelines and milestones using appropriate tools'
    ],
    requirements: [
      '3+ years of project management experience in the tech industry',
      'Strong experience in managing cross-functional teams',
      'Solid understanding of software development methodologies (Agile, Scrum)',
      'Excellent client-facing skills',
      'Strong familiarity with project management software tools (JIRA, Asana, etc.)',
      'Experience in conflict resolution',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication skills',
      'Project Management Professional (PMP) certification is a plus'
    ],
    benefits: [
      'Remote-First Culture',
      'Professional Growth',
      'Competitive Compensation',
      'Work-Life Balance',
      'Learning Budget',
      'Team Events'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, resume, and a cover letter explaining why you are interested in joining our team.'
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist',
    location: 'Remote (EU)',
    type: 'Full-time',
    department: 'Marketing',
    description: 'We are looking for a Content Strategist to help our clients plan, create and manage content that meets their business objectives. You will be responsible for developing content strategies based on a company\'s or client\'s mission and goals.',
    responsibilities: [
      'Develop content strategy through research and audience understanding',
      'Create editorial guidelines and style guides for consistent content',
      'Plan and manage content calendars and workflows',
      'Collaborate with designers, developers, and other team members to produce high-quality content',
      'Analyze and report on content performance and user engagement',
      'Identify opportunities for new content initiatives that drive engagement',
      'Stay up-to-date with content trends and best practices'
    ],
    requirements: [
      '3+ years of experience in content strategy, content marketing, or related field',
      'Excellent writing, editing, and proofreading skills',
      'Experience with content management systems and SEO principles',
      'Knowledge of UX writing principles',
      'Ability to analyze data and derive insights to inform content decisions',
      'Strong project management and organizational skills',
      'Experience working with cross-functional teams',
      'Portfolio demonstrating successful content strategy projects'
    ],
    benefits: [
      'Remote-First Culture',
      'Professional Growth',
      'Competitive Compensation',
      'Work-Life Balance',
      'Learning Budget',
      'Team Events'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, portfolio samples, resume, and a cover letter explaining why you are interested in joining our team.'
  },
  {
    id: 'english-german-translator',
    title: 'English-German Translator',
    location: 'Remote (EU)',
    type: 'Contract / Part-time',
    department: 'Translation',
    description: 'We are seeking an experienced English-German Translator to join our team on a contract or part-time basis. The ideal candidate will have excellent language skills and the ability to preserve the meaning, context, and tone of original content while translating between English and German.',
    responsibilities: [
      'Translate a variety of content from English to German and vice versa',
      'Ensure translated content maintains the meaning and tone of the original',
      'Edit and proofread translations for accuracy and consistency',
      'Work with specialized terminology for various industries',
      'Collaborate with project managers and other translators',
      'Meet deadlines for translation projects',
      'Stay updated on language trends and cultural references'
    ],
    requirements: [
      'Native or near-native proficiency in both German and English',
      'Bachelor\'s degree in Translation, Linguistics, or related field',
      'Minimum 2 years of professional translation experience',
      'Experience with CAT (Computer-Assisted Translation) tools',
      'Strong attention to detail and ability to meet deadlines',
      'Knowledge of cultural nuances in both languages',
      'Experience in technical, marketing, or legal translation is a plus',
      'Certification from a recognized translation authority is preferred'
    ],
    benefits: [
      'Flexible Working Hours',
      'Remote Work Options',
      'Competitive Per-Word or Hourly Rates',
      'Regular Work Volume',
      'Professional Development Opportunities',
      'Access to Translation Tools and Resources'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, resume, and samples of your previous translation work. Please also indicate your availability and preferred working hours.'
  },
  {
    id: 'business-development',
    title: 'Business Development Representative',
    location: 'Prague / Remote',
    type: 'Full-time',
    department: 'Sales',
    description: 'We are looking for an energetic Business Development Representative to help expand our client base across Europe. The ideal candidate will be responsible for identifying and pursuing new business opportunities, establishing relationships with potential clients, and contributing to the company\'s growth and revenue goals.',
    responsibilities: [
      'Identify and research potential clients in target markets',
      'Conduct outreach to potential clients through email, phone calls, and social media',
      'Schedule and conduct initial meetings with prospective clients',
      'Understand client needs and communicate how our services can address them',
      'Coordinate with the sales team to ensure smooth handover of qualified leads',
      'Maintain accurate records of all sales activities in the CRM system',
      'Meet or exceed monthly and quarterly sales targets',
      'Stay informed about industry trends and competitor activities'
    ],
    requirements: [
      '2+ years of experience in business development or sales',
      'Proven track record of meeting or exceeding sales targets',
      'Excellent communication and presentation skills',
      'Strong networking abilities and relationship-building skills',
      'Proficiency in CRM software and sales tools',
      'Self-motivated with a results-driven approach',
      'Ability to work independently and as part of a team',
      'Fluent English required, additional European languages are a plus',
      'Bachelor\'s degree in Business, Marketing, or related field'
    ],
    benefits: [
      'Remote-First Culture',
      'Professional Growth',
      'Competitive Base Salary + Commission Structure',
      'Work-Life Balance',
      'Learning Budget',
      'Team Events'
    ],
    applicationProcess: 'To apply for this position, please fill out the application form below with your personal information, resume, and a cover letter explaining your sales approach and why you are interested in joining our team.'
  }
];
