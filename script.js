"use strict";

const SOURCES = {
  blsIT: "https://www.bls.gov/ooh/computer-and-information-technology/",
  blsSoftware:
    "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
  blsData: "https://www.bls.gov/ooh/math/data-scientists.htm",
  blsCyber:
    "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
  blsSystems:
    "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
  blsWeb:
    "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
  wef: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  onet: "https://www.onetonline.org/",
  ncs: "https://www.ncs.gov.in/",
  googleSkills: "https://www.skills.google/",
  googleCertificates: "https://grow.google/intl/en_in/certificates/",
  googleDevelopers: "https://www.youtube.com/@GoogleDevelopers",
  microsoftLearn: "https://learn.microsoft.com/en-in/training/",
  microsoftAI: "https://learn.microsoft.com/en-us/ai/",
  awsSkillBuilder: "https://skillbuilder.aws/",
  awsDevelopers: "https://www.youtube.com/@amazonwebservices",
  kaggleLearn: "https://www.kaggle.com/learn",
  githubSkills: "https://skills.github.com/",
  freeCodeCamp: "https://www.freecodecamp.org/learn/",
  freeCodeCampYouTube: "https://www.youtube.com/@freecodecamp",
  ciscoNetAcad: "https://www.netacad.com/",
  unstopInternships: "https://unstop.com/internship-portal",
  unstopHackathons: "https://unstop.com/hackathons",
  hack2skill: "https://hack2skill.com/",
  hack2skillFoundational:
    "https://hack2skill.com/event/aiforfoundationallearning/",
  devpost: "https://devpost.com/hackathons?status=open",
  mlhEvents: "https://mlh.io/seasons/2026/events",
  mlhGhw: "https://ghw.mlh.io/",
  googleInternships:
    "https://www.google.com/about/careers/applications/internships",
  googleJobs: "https://www.google.com/about/careers/applications/jobs/results/",
  microsoftStudents: "https://careers.microsoft.com/v2/global/en/students",
  amazonInternships:
    "https://amazon.jobs/content/en-gb/career-programs/university/internships-for-students",
  amazonJobs: "https://www.amazon.jobs/",
  ibmInternships: "https://www.ibm.com/in-en/careers/internships",
  ibmCareers: "https://www.ibm.com/careers",
  nvidiaUniversity:
    "https://www.nvidia.com/en-eu/about-nvidia/careers/university-recruiting-new/",
  adobeUniversity: "https://www.adobe.com/careers/university.html",
  salesforceInternships:
    "https://www.salesforce.com/company/careers/university/internships/",
  qualcommInternships:
    "https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities/india",
  mdnLearn: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
  pythonDocs: "https://docs.python.org/3/",
  reactLearn: "https://react.dev/learn",
  postgresTutorial: "https://www.postgresql.org/docs/current/tutorial.html",
  owaspWstg: "https://owasp.org/projects/web-security-testing-guide",
  mitOcw: "https://ocw.mit.edu/",
  linuxFoundation: "https://training.linuxfoundation.org/",
  nptelCourses: "https://www.nptel.ac.in/courses",
  googleStudents:
    "https://www.google.com/about/careers/applications/students/?hl=en-IN",
  mastercardCareers: "https://careers.mastercard.com/us/en",
  mastercardEarly: "https://careers.mastercard.com/us/en/early-careers",
  mastercardEngineering:
    "https://careers.mastercard.com/us/en/c/engineering-jobs",
  mastercardCyber:
    "https://careers.mastercard.com/us/en/c/cyber-and-corporate-security-jobs",
  mastercardSearch: "https://careers.mastercard.com/us/en/search-results/1000",
  appleStudents: "https://www.apple.com/careers/in/work-at-apple/students.html",
  appleInternships:
    "https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN",
  oracleStudents: "https://www.oracle.com/in/careers/students-grads/",
  oracleInternships:
    "https://www.oracle.com/careers/students-grads/internships/",
  atlassianEarly: "https://www.atlassian.com/company/careers/earlycareers",
  atlassianCareers: "https://www.atlassian.com/company/careers",
  visaCareers: "https://corporate.visa.com/en/careers.html",
  visaEarly: "https://corporate.visa.com/en/careers/early-careers.html",
  jpmTechIntern:
    "https://careers.jpmorgan.com/US/en/students/programs/technology-summer-analyst",
  jpmSoftwareIntern:
    "https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer",
  jpmDesignIntern:
    "https://careers.jpmorgan.com/us/en/students/programs/design-dev-summer",
  tcsCareers: "https://www.tcs.com/careers/india",
  tcsInternship: "https://www.tcs.com/careers/india/internship",
  infosysCareers: "https://www.infosys.com/careers.html",
  infosysInternship: "https://www.infosys.com/careers/internships.html",
  accentureCareersIndia: "https://www.accenture.com/in-en/careers",
  hackspire: "https://hackspire26.devfolio.co/",
  hackspireSchedule: "https://hackspire26.devfolio.co/schedule",
  buildersDay: "https://builders-day-hackunion.devfolio.co/",
  buildersDaySchedule: "https://builders-day-hackunion.devfolio.co/schedule",
  hackWithGdg: "https://hack-with-gdg-s4.devfolio.co/",
  hackWithGdgSchedule: "https://hack-with-gdg-s4.devfolio.co/schedule",
  devfolioHackathons: "https://devfolio.co/hackathons",
  kaggleHackathons:
    "https://www.kaggle.com/competitions?requireHackathons=true",
  kaggleArcPaper:
    "https://www.kaggle.com/competitions/arc-prize-2026-paper-track/overview/description",
  kagglePokemonStrategy:
    "https://www.kaggle.com/competitions/pokemon-tcg-ai-battle-challenge-strategy/",
  kaggleCompetitions: "https://www.kaggle.com/competitions",
  goldmanStudents: "https://www.goldmansachs.com/careers/students",
  goldmanIndia: "https://www.goldmansachs.com/worldwide/india/careers",
  goldmanSummerIndia:
    "https://www.goldmansachs.com/careers/students/programs-and-internships/india/summer-analyst-program",
  goldmanNewAnalystIndia:
    "https://www.goldmansachs.com/careers/students/programs-and-internships/india/new-analyst-program",
  goldmanHackathon:
    "https://www.goldmansachs.com/careers/students/programs-and-internships/india/hackathon",
  morganStudents: "https://www.morganstanley.com/campus",
  morganCareers: "https://www.morganstanley.com/people",
  morganInterview:
    "https://www.morganstanley.com/people-opportunities/students-graduates/resources/interview-preparation",
  ciscoEarlyIndia: "https://careers.cisco.com/india/etr-jobs",
  ciscoIdeathon: "https://careers.cisco.com/global/en/india/etr/ideathon",
  intelInternships:
    "https://www.intel.com/content/www/us/en/support/articles/000021775/programs/jobs-at-intel.html",
  intelJobs: "https://jobs.intel.com/",
  oracleStudents: "https://www.oracle.com/in/careers/students-grads/",
  oracleInternships:
    "https://www.oracle.com/careers/students-grads/internships/",
  oracleHiring:
    "https://www.oracle.com/in/careers/opportunities/getting-hired/",
  atlassianEarly: "https://www.atlassian.com/company/careers/earlycareers",
  atlassianCareers: "https://www.atlassian.com/company/careers",
  pwcIndiaCareers: "https://www.pwc.in/careers.html",
  pwcStudents: "https://www.pwc.in/careers/job-search.html",
  pwcCampus: "https://www.pwc.in/careers/campus-careers.html",
  eyIndiaJoin: "https://www.ey.com/en_in/careers/how-to-join-us",
  eyIndiaCareers: "https://www.ey.com/en_in/careers",
  deloitteIndiaCampus:
    "https://www.deloitte.com/in/en/careers/deloitte-life/benefits/campus-recruits.html",
  deloitteIndiaCareers: "https://www.deloitte.com/in/en/careers",
  capgeminiStudents:
    "https://www.capgemini.com/in-en/careers/career-paths/students-and-graduates/",
  capgeminiCareers: "https://www.capgemini.com/in-en/careers/",
  sapCareers: "https://jobs.sap.com/",
  citiCareers: "https://jobs.citi.com/",
  boaStudents: "https://careers.bankofamerica.com/en-us/students",
  boaCareers: "https://careers.bankofamerica.com/en-us/",
  paypalCareers: "https://www.paypal.com/us/brc/careers",
  uberCareers: "https://www.uber.com/us/en/careers/",
};

/* NO-FABRICATION CONTRACT */
const DATA_META = {
  verifiedAt: "2026-09-17",
  policy:
    "Source-backed catalog + strict input validation + profile-derived matching",
  geography: "U.S. occupation benchmarks; global/India opportunity portals",
  seedIntegrity: "STRICT",
};

const skillAliases = {
  js: "javascript",
  javascript: "javascript",
  "javascript es6": "javascript",
  ts: "typescript",
  typescript: "typescript",
  py: "python",
  python3: "python",
  python: "python",
  sql: "sql",
  mysql: "sql",
  postgres: "sql",
  postgresql: "sql",
  git: "git",
  github: "github",
  "github actions": "github actions",
  reactjs: "react",
  "react.js": "react",
  react: "react",
  nextjs: "next.js",
  "next.js": "next.js",
  node: "node.js",
  nodejs: "node.js",
  "node.js": "node.js",
  html5: "html",
  html: "html",
  css3: "css",
  css: "css",
  figma: "figma",
  "adobe xd": "adobe xd",
  photoshop: "photoshop",
  "power bi": "power bi",
  tableau: "tableau",
  excel: "excel",
  pandas: "pandas",
  numpy: "numpy",
  matplotlib: "matplotlib",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  "machine learning": "machine learning",
  ml: "machine learning",
  "deep learning": "deep learning",
  ai: "ai",
  "artificial intelligence": "ai",
  "generative ai": "generative ai",
  llm: "llm",
  "large language models": "llm",
  cloud: "cloud",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  linux: "linux",
  unix: "unix",
  bash: "bash",
  powershell: "powershell",
  networking: "networking",
  "tcp/ip": "networking",
  dns: "networking",
  http: "http",
  cybersecurity: "cybersecurity",
  security: "security",
  "application security": "appsec",
  appsec: "appsec",
  soc: "soc",
  siem: "siem",
  splunk: "splunk",
  "threat analysis": "threat analysis",
  docker: "docker",
  kubernetes: "kubernetes",
  devops: "devops",
  "ci/cd": "ci/cd",
  "system design": "system design",
  algorithms: "algorithms",
  "data structures": "data structures",
  dsa: "data structures",
  testing: "testing",
  "unit testing": "testing",
  apis: "apis",
  api: "apis",
  statistics: "statistics",
  mathematics: "mathematics",
  "data visualization": "data visualization",
  ux: "ux",
  ui: "ui",
  "user experience": "ux",
  "user interface": "ui",
  prototyping: "prototyping",
  wireframing: "wireframing",
  accessibility: "accessibility",
  requirements: "requirements",
  "systems analysis": "systems analysis",
  "business analysis": "business analysis",
  communication: "communication",
  writing: "writing",
  "critical thinking": "critical thinking",
  "active listening": "active listening",
  research: "research",
  "product management": "product management",
  jira: "jira",
  agile: "agile",
  java: "java",
  "c++": "c++",
  "c#": "c#",
  go: "go",
  rust: "rust",
  postgresql: "sql",
  postgres: "sql",
  "web development": "web development",
  web: "web development",
  "open source": "open source",
  kubernetes: "kubernetes",
  owasp: "owasp",
};

function normalizeSkill(v) {
  const raw = String(v || "")
    .trim()
    .toLowerCase();
  return skillAliases[raw] || raw.replace(/\s+/g, " ");
}

const careers = [
  {
    id: "software",
    title: "Software Developer",
    pay: "$135,980 median (U.S., May 2025)",
    growth: 10,
    skills: [
      "JavaScript",
      "Python",
      "Git",
      "APIs",
      "SQL",
      "Data Structures",
      "Algorithms",
    ],
    demands: [
      "Programming",
      "Algorithms & data structures",
      "Version control",
      "APIs",
      "Databases",
      "Testing",
      "System design",
    ],
    tracks: ["Frontend", "Backend", "Full-stack", "Cloud", "Developer tools"],
    onet: "15-1252.00",
    desc: "Build, test and maintain software applications and systems.",
    source: "U.S. Bureau of Labor Statistics",
    url: SOURCES.blsSoftware,
    skillTags: [
      "javascript",
      "python",
      "git",
      "sql",
      "data structures",
      "algorithms",
      "apis",
      "react",
      "node.js",
      "cloud",
      "testing",
    ],
    internshipTitles: [
      "Software Engineering Intern",
      "Software Developer Intern",
      "Software Engineer Intern",
    ],
    roadmap: [
      [
        "01",
        "Foundation",
        "Strengthen one primary language, Git and clean coding habits.",
        "Python / JavaScript / Git",
      ],
      [
        "02",
        "CS core",
        "Practice data structures, algorithms, APIs and testing.",
        "DSA / APIs / Testing",
      ],
      [
        "03",
        "Build",
        "Ship one public project with an API, database and tests.",
        "API / SQL / Project evidence",
      ],
      [
        "04",
        "Deploy",
        "Deploy it and document architecture, tests and trade-offs.",
        "Cloud / System design",
      ],
      [
        "05",
        "Apply",
        "Tailor CV and project evidence, then verify live student roles.",
        "Resume / Interview / Applications",
      ],
    ],
  },
  {
    id: "data",
    title: "Data Scientist",
    pay: "$120,230 median (U.S., May 2025)",
    growth: 35,
    skills: [
      "Python",
      "Statistics",
      "SQL",
      "Machine Learning",
      "Pandas",
      "Data Visualization",
    ],
    demands: [
      "Statistics",
      "Data preparation",
      "Modeling",
      "Experimentation",
      "Communication",
      "Data visualization",
    ],
    tracks: [
      "Analytics",
      "ML",
      "Applied AI",
      "Experimentation",
      "Business intelligence",
    ],
    onet: "15-2051.00",
    desc: "Use analytical tools, statistics and modeling to extract insight from data.",
    source: "U.S. Bureau of Labor Statistics",
    url: SOURCES.blsData,
    skillTags: [
      "python",
      "statistics",
      "sql",
      "machine learning",
      "pandas",
      "numpy",
      "data visualization",
      "tableau",
      "power bi",
      "ai",
    ],
    internshipTitles: [
      "Data Science Intern",
      "Data Analytics Intern",
      "Machine Learning Intern",
    ],
    roadmap: [
      [
        "01",
        "Statistics",
        "Refresh probability, statistics and experiment thinking.",
        "Statistics / Mathematics",
      ],
      [
        "02",
        "Data stack",
        "Become fluent with Python, Pandas and SQL.",
        "Python / Pandas / SQL",
      ],
      [
        "03",
        "Model",
        "Build and validate one end-to-end ML project.",
        "Machine Learning / Evaluation",
      ],
      [
        "04",
        "Explain",
        "Turn analysis into a dashboard and concise written story.",
        "Visualization / Writing",
      ],
      [
        "05",
        "Apply",
        "Show reproducible evidence and verify current analytics/data roles.",
        "Portfolio / CV / Applications",
      ],
    ],
  },
  {
    id: "cyber",
    title: "Information Security Analyst",
    pay: "$129,180 median (U.S., May 2025)",
    growth: 21,
    skills: [
      "Networking",
      "Linux",
      "Python",
      "Cybersecurity",
      "Security",
      "Cloud",
      "SIEM",
    ],
    demands: [
      "Network fundamentals",
      "Linux/Unix",
      "Threat analysis",
      "Security controls",
      "Monitoring",
      "Risk",
    ],
    tracks: ["SOC", "Cloud security", "AppSec", "Threat intelligence", "GRC"],
    onet: "15-1212.00",
    desc: "Protect networks and systems by assessing risks, monitoring threats and improving controls.",
    source: "U.S. Bureau of Labor Statistics",
    url: SOURCES.blsCyber,
    skillTags: [
      "networking",
      "linux",
      "python",
      "cybersecurity",
      "security",
      "aws",
      "azure",
      "splunk",
      "powershell",
      "unix",
      "siem",
      "appsec",
    ],
    internshipTitles: [
      "Cybersecurity Intern",
      "Security Engineering Intern",
      "SOC Analyst Intern",
    ],
    roadmap: [
      [
        "01",
        "Networking",
        "Understand TCP/IP, DNS, HTTP, routing and common attacks.",
        "Networking / TCP-IP / DNS",
      ],
      [
        "02",
        "Systems",
        "Work confidently in Linux/Unix and automate small tasks.",
        "Linux / Bash / Python",
      ],
      [
        "03",
        "Detect",
        "Practice logs, alerts and incident-analysis workflows.",
        "SIEM / Monitoring / Threat analysis",
      ],
      [
        "04",
        "Defend",
        "Document controls, threat models and risk treatment.",
        "Security / Risk / AppSec",
      ],
      [
        "05",
        "Apply",
        "Use labs/projects as evidence and verify live early-career roles.",
        "Portfolio / CV / Applications",
      ],
    ],
  },
  {
    id: "systems",
    title: "Computer Systems Analyst",
    pay: "$105,850 median (U.S., May 2025)",
    growth: 8,
    skills: [
      "SQL",
      "Requirements",
      "APIs",
      "Communication",
      "Critical Thinking",
      "Business Analysis",
    ],
    demands: [
      "Requirements analysis",
      "Systems thinking",
      "SQL",
      "Process analysis",
      "Stakeholder communication",
      "Problem solving",
    ],
    tracks: [
      "Business systems",
      "IT consulting",
      "Product analysis",
      "Enterprise systems",
    ],
    onet: "15-1211.00",
    desc: "Analyze organizations and technology needs and help design or improve information systems.",
    source: "U.S. Bureau of Labor Statistics",
    url: SOURCES.blsSystems,
    skillTags: [
      "sql",
      "requirements",
      "apis",
      "communication",
      "critical thinking",
      "business analysis",
      "power bi",
      "excel",
      "jira",
      "agile",
      "systems analysis",
    ],
    internshipTitles: [
      "Business Systems Intern",
      "Technology Analyst Intern",
      "Business Analyst Intern",
    ],
    roadmap: [
      [
        "01",
        "Business context",
        "Learn how requirements and workflows are documented.",
        "Requirements / Process analysis",
      ],
      [
        "02",
        "Data",
        "Use SQL and BI tools to inspect operational data.",
        "SQL / Excel / Power BI",
      ],
      [
        "03",
        "Systems",
        "Model APIs, integrations and constraints.",
        "APIs / Systems thinking",
      ],
      [
        "04",
        "Communicate",
        "Produce a requirements brief and stakeholder-ready recommendation.",
        "Writing / Communication",
      ],
      [
        "05",
        "Apply",
        "Target analyst/technology roles using evidence from real projects.",
        "Case study / CV / Applications",
      ],
    ],
  },
  {
    id: "webdesign",
    title: "Web / Digital Interface Designer",
    pay: "$104,000 median (U.S., May 2025)",
    growth: 6,
    skills: [
      "Figma",
      "UX",
      "UI",
      "Prototyping",
      "HTML",
      "CSS",
      "JavaScript",
      "Accessibility",
    ],
    demands: [
      "User research",
      "Interaction design",
      "Prototyping",
      "HTML/CSS",
      "Accessibility",
      "Communication",
    ],
    tracks: ["UX", "UI", "Product design", "Design systems", "Research"],
    onet: "15-1255.00",
    desc: "Design digital interfaces and experiences around usability, accessibility and user needs.",
    source: "U.S. Bureau of Labor Statistics",
    url: SOURCES.blsWeb,
    skillTags: [
      "figma",
      "ux",
      "ui",
      "prototyping",
      "wireframing",
      "html",
      "css",
      "javascript",
      "react",
      "communication",
      "accessibility",
    ],
    internshipTitles: [
      "UX Design Intern",
      "UI Design Intern",
      "Product Design Intern",
    ],
    roadmap: [
      [
        "01",
        "Research",
        "Learn user interviews, problem framing and accessibility basics.",
        "UX / Research / Accessibility",
      ],
      [
        "02",
        "Interface",
        "Build component-based layouts and interaction patterns.",
        "Figma / UI / Design systems",
      ],
      [
        "03",
        "Prototype",
        "Prototype one meaningful flow and test it with users.",
        "Prototyping / Usability",
      ],
      [
        "04",
        "Ship",
        "Implement a responsive version and measure usability.",
        "HTML / CSS / JavaScript",
      ],
      [
        "05",
        "Apply",
        "Turn the work into a case study and verify current design roles.",
        "Portfolio / Case study / Applications",
      ],
    ],
  },
];

const courseResources = [
  {
    id: "google-certificates",
    kind: "course",
    title: "Google Career Certificates",
    provider: "Google",
    tags: [
      "data",
      "analytics",
      "sql",
      "ux",
      "design",
      "cybersecurity",
      "python",
      "it",
    ],
    desc: "Official Google career-certificate catalog covering Data Analytics, Cybersecurity, UX Design, IT Support and related areas.",
    url: SOURCES.googleCertificates,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "google-skills",
    kind: "course",
    title: "Google Skills / Cloud",
    provider: "Google",
    tags: [
      "cloud",
      "ai",
      "machine learning",
      "security",
      "networking",
      "python",
      "data",
    ],
    desc: "Official Google learning paths, courses, labs and cloud/AI skill resources.",
    url: SOURCES.googleSkills,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "microsoft-learn",
    kind: "course",
    title: "Microsoft Learn",
    provider: "Microsoft",
    tags: [
      "python",
      "data",
      "analytics",
      "ai",
      "machine learning",
      "cybersecurity",
      "security",
      "azure",
      "github",
      "developer",
      "cloud",
    ],
    desc: "Official self-directed modules and learning paths across Microsoft technologies.",
    url: SOURCES.microsoftLearn,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "kaggle-learn",
    kind: "course",
    title: "Kaggle Learn",
    provider: "Kaggle",
    tags: [
      "python",
      "data",
      "pandas",
      "sql",
      "machine learning",
      "visualization",
      "statistics",
      "ai",
    ],
    desc: "Hands-on micro-courses for Python, Pandas, SQL, machine learning, visualization and data skills.",
    url: SOURCES.kaggleLearn,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "github-skills",
    kind: "course",
    title: "GitHub Skills",
    provider: "GitHub",
    tags: [
      "git",
      "github",
      "developer",
      "programming",
      "open source",
      "devops",
      "github actions",
    ],
    desc: "Interactive exercises for GitHub workflows, collaboration and developer practices.",
    url: SOURCES.githubSkills,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "cisco-netacad",
    kind: "course",
    title: "Cisco Networking Academy",
    provider: "Cisco",
    tags: [
      "networking",
      "cybersecurity",
      "security",
      "linux",
      "python",
      "programming",
      "data",
    ],
    desc: "Training across networking, cybersecurity, programming and IT/data topics.",
    url: SOURCES.ciscoNetAcad,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "aws-skill-builder",
    kind: "course",
    title: "AWS Skill Builder",
    provider: "AWS",
    tags: [
      "aws",
      "cloud",
      "devops",
      "security",
      "machine learning",
      "python",
      "data",
    ],
    desc: "Official AWS learning resources for cloud, data, AI/ML, security and developer skills.",
    url: SOURCES.awsSkillBuilder,
    alt: "AWS Developers",
    altUrl: SOURCES.awsDevelopers,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "freecodecamp",
    kind: "course",
    title: "freeCodeCamp",
    provider: "freeCodeCamp",
    tags: [
      "python",
      "javascript",
      "web",
      "sql",
      "machine learning",
      "data",
      "programming",
      "git",
    ],
    desc: "Free technical learning curriculum and video resources controlled by freeCodeCamp.",
    url: SOURCES.freeCodeCamp,
    alt: "YouTube",
    altUrl: SOURCES.freeCodeCampYouTube,
    sourceType: "ESTABLISHED_PUBLIC",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "mdn-learn",
    kind: "course",
    title: "MDN Learn Web Development",
    provider: "MDN / Mozilla",
    tags: [
      "html",
      "css",
      "javascript",
      "web development",
      "accessibility",
      "git",
    ],
    desc: "Structured front-end learning modules covering HTML, CSS, JavaScript, accessibility, tooling and core web practice.",
    url: SOURCES.mdnLearn,
    sourceType: "ESTABLISHED_PUBLIC",
    freshness: "Curriculum — source controls current content",
  },
  {
    id: "python-docs",
    kind: "course",
    title: "Python 3 Documentation",
    provider: "Python Software Foundation",
    tags: ["python", "programming"],
    desc: "Official Python documentation with a tutorial, language reference, standard library and HOWTOs.",
    url: SOURCES.pythonDocs,
    sourceType: "OFFICIAL",
    freshness: "Documentation — source controls current version",
  },
  {
    id: "react-learn",
    kind: "course",
    title: "React Learn",
    provider: "React",
    tags: ["react", "javascript", "ui", "web development"],
    desc: "Official React learning path covering components, state, events, data and core React concepts.",
    url: SOURCES.reactLearn,
    sourceType: "OFFICIAL",
    freshness: "Documentation — source controls current content",
  },
  {
    id: "postgres-tutorial",
    kind: "course",
    title: "PostgreSQL Tutorial",
    provider: "PostgreSQL",
    tags: ["sql", "postgresql", "data"],
    desc: "Official PostgreSQL tutorial covering relational concepts, SQL, tables, joins, aggregates and transactions.",
    url: SOURCES.postgresTutorial,
    sourceType: "OFFICIAL",
    freshness: "Documentation — source controls current version",
  },
  {
    id: "owasp-wstg",
    kind: "course",
    title: "OWASP Web Security Testing Guide",
    provider: "OWASP",
    tags: ["cybersecurity", "security", "owasp", "appsec", "http"],
    desc: "Official OWASP security-testing reference for web application developers and security professionals.",
    url: SOURCES.owaspWstg,
    sourceType: "ESTABLISHED_PUBLIC",
    freshness: "Guide — latest project content controls current state",
  },
  {
    id: "mit-ocw",
    kind: "course",
    title: "MIT OpenCourseWare",
    provider: "MIT OpenCourseWare",
    tags: [
      "python",
      "programming",
      "algorithms",
      "data structures",
      "mathematics",
      "research",
    ],
    desc: "Free and open publication of MIT course materials, including introductory programming and computer science.",
    url: SOURCES.mitOcw,
    sourceType: "OFFICIAL",
    freshness: "Course library — source controls current collection",
  },
  {
    id: "linux-foundation",
    kind: "course",
    title: "Linux Foundation Training & Resources",
    provider: "Linux Foundation",
    tags: [
      "linux",
      "kubernetes",
      "cloud",
      "devops",
      "cybersecurity",
      "open source",
      "networking",
    ],
    desc: "Official training and free resources across Linux, Kubernetes, cloud, cybersecurity, DevOps and open source.",
    url: SOURCES.linuxFoundation,
    sourceType: "OFFICIAL",
    freshness: "Catalog — source controls current offerings",
  },
  {
    id: "nptel",
    kind: "course",
    title: "NPTEL Courses",
    provider: "NPTEL / IITs / IISc",
    tags: [
      "python",
      "programming",
      "data",
      "machine learning",
      "statistics",
      "mathematics",
      "research",
    ],
    desc: "Courses from IITs and IISc through NPTEL, with current course listings and learning schedules controlled by the platform.",
    url: SOURCES.nptelCourses,
    sourceType: "OFFICIAL_EDUCATION",
    freshness: "Course catalog — source controls current offerings",
  },
];

const internshipResources = [
  {
    id: "google-internships",
    kind: "internship",
    title: "Google Internships",
    provider: "Google Careers",
    tags: [
      "software",
      "python",
      "ai",
      "machine learning",
      "data",
      "design",
      "engineering",
    ],
    desc: "Official Google internship hub and live job search. Eligibility varies by listing.",
    url: SOURCES.googleInternships,
    alt: "Google live jobs",
    altUrl: SOURCES.googleJobs,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "microsoft-students",
    kind: "internship",
    title: "Microsoft Early in Profession",
    provider: "Microsoft Careers",
    tags: [
      "software",
      "python",
      "ai",
      "data",
      "security",
      "cloud",
      "developer",
      "design",
    ],
    desc: "Official student and early-career portal for internships and related programs.",
    url: SOURCES.microsoftStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "amazon-students",
    kind: "internship",
    title: "Amazon Student Internships",
    provider: "Amazon Jobs",
    tags: ["software", "aws", "cloud", "data", "ai", "engineering", "business"],
    desc: "Official student internship entry point. Individual openings and eligibility are controlled by Amazon Jobs.",
    url: SOURCES.amazonInternships,
    alt: "Amazon Jobs",
    altUrl: SOURCES.amazonJobs,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "ibm-internships",
    kind: "internship",
    title: "IBM Internships",
    provider: "IBM Careers",
    tags: [
      "software",
      "ai",
      "data",
      "cloud",
      "cybersecurity",
      "research",
      "business",
    ],
    desc: "Official IBM internships and early-career information.",
    url: SOURCES.ibmInternships,
    alt: "IBM Careers",
    altUrl: SOURCES.ibmCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "nvidia-university",
    kind: "internship",
    title: "NVIDIA University Recruiting",
    provider: "NVIDIA Careers",
    tags: [
      "ai",
      "machine learning",
      "python",
      "cuda",
      "software",
      "data",
      "research",
    ],
    desc: "Official university recruiting page for internships and other early-talent programs.",
    url: SOURCES.nvidiaUniversity,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "adobe-university",
    kind: "internship",
    title: "Adobe University",
    provider: "Adobe Careers",
    tags: [
      "design",
      "ux",
      "ui",
      "software",
      "creative",
      "engineering",
      "marketing",
    ],
    desc: "Official Adobe university recruiting hub for internships and graduate opportunities.",
    url: SOURCES.adobeUniversity,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "salesforce-futureforce",
    kind: "internship",
    title: "Salesforce Futureforce",
    provider: "Salesforce Careers",
    tags: ["software", "ai", "data", "cloud", "product", "design", "sales"],
    desc: "Official university internship information across technology, product, AI research and other functions.",
    url: SOURCES.salesforceInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify listing at source",
  },
  {
    id: "unstop-internships",
    kind: "internship",
    title: "Unstop Internship Portal",
    provider: "Unstop",
    tags: [
      "internship",
      "software",
      "data",
      "marketing",
      "design",
      "finance",
      "management",
      "student",
      "india",
    ],
    desc: "India-focused marketplace. Individual listings are not copied into Horizon; check employer, eligibility, stipend and deadline on the live listing.",
    url: SOURCES.unstopInternships,
    sourceType: "ESTABLISHED_MARKETPLACE",
    freshness: "LIVE DIRECTORY — verify listing at source",
  },
  {
    id: "qualcomm-india-internships",
    kind: "internship",
    title: "Qualcomm India Early Career & Internships",
    provider: "Qualcomm Careers",
    tags: [
      "software",
      "c++",
      "python",
      "ai",
      "machine learning",
      "embedded",
      "research",
      "india",
    ],
    desc: "Official Qualcomm India internship and early-career page with eligibility, program timing and a search link for open internships.",
    url: SOURCES.qualcommInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "mastercard-early-careers",
    kind: "internship",
    title: "Mastercard Early Careers",
    provider: "Mastercard Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "cybersecurity",
      "product",
      "payments",
      "student",
      "internship",
    ],
    desc: "Official Mastercard early-career hub covering internships and the Launch graduate program.",
    url: SOURCES.mastercardEarly,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "apple-students",
    kind: "internship",
    title: "Apple Student Jobs & Internships",
    provider: "Apple Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "hardware",
      "design",
      "student",
      "internship",
    ],
    desc: "Official Apple student portal for internships and student jobs across technical and non-technical fields.",
    url: SOURCES.appleStudents,
    alt: "Apple internship search",
    altUrl: SOURCES.appleInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and location at source",
  },
  {
    id: "oracle-internships",
    kind: "internship",
    title: "Oracle Internships",
    provider: "Oracle Careers",
    tags: [
      "software",
      "cloud",
      "database",
      "data",
      "ai",
      "engineering",
      "student",
      "internship",
    ],
    desc: "Official Oracle internship hub with technical, corporate and student-program routes plus resume/interview guidance.",
    url: SOURCES.oracleInternships,
    alt: "Oracle students & graduates",
    altUrl: SOURCES.oracleStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "atlassian-early-careers",
    kind: "internship",
    title: "Atlassian Early Careers",
    provider: "Atlassian Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "security",
      "ux",
      "research",
      "student",
      "internship",
    ],
    desc: "Official Atlassian student and graduate route. India recruiting windows and internship timing are maintained on the source page.",
    url: SOURCES.atlassianEarly,
    alt: "Atlassian Careers",
    altUrl: SOURCES.atlassianCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness:
      "LIVE PORTAL — verify current opening and local recruiting cycle",
  },
  {
    id: "visa-early-careers",
    kind: "internship",
    title: "Visa Students & Early Careers",
    provider: "Visa Careers",
    tags: [
      "software",
      "data",
      "ai",
      "cybersecurity",
      "payments",
      "product",
      "student",
      "internship",
    ],
    desc: "Official Visa student and early-career page including its college internship program.",
    url: SOURCES.visaEarly,
    alt: "Visa Careers",
    altUrl: SOURCES.visaCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "jpmorgan-tech-internship",
    kind: "internship",
    title: "JPMorgan Chase Technology Internship",
    provider: "JPMorgan Chase Careers",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "react",
      "sql",
      "cloud",
      "cybersecurity",
      "student",
      "internship",
    ],
    desc: "Official technology internship route. The current program page describes software-engineering work, induction, training, teamwork and technical/business skill development.",
    url: SOURCES.jpmSoftwareIntern,
    alt: "Technology Summer Analyst",
    altUrl: SOURCES.jpmTechIntern,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM PAGE — verify current location/opening at source",
  },
  {
    id: "tcs-internship",
    kind: "internship",
    title: "TCS Internship & Research Routes",
    provider: "TCS Careers",
    tags: [
      "software",
      "research",
      "ai",
      "data",
      "engineering",
      "student",
      "internship",
      "india",
    ],
    desc: "Official TCS India internship page covering research internships and other student routes; requirements and timing are controlled by TCS/institutes.",
    url: SOURCES.tcsInternship,
    alt: "TCS India careers",
    altUrl: SOURCES.tcsCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness:
      "LIVE PORTAL — verify current program and institute eligibility at source",
  },
  {
    id: "infosys-internships",
    kind: "internship",
    title: "Infosys Internships",
    provider: "Infosys Careers",
    tags: [
      "software",
      "data",
      "ai",
      "machine learning",
      "research",
      "management",
      "student",
      "internship",
      "india",
    ],
    desc: "Official Infosys internship portfolio including InStep, Winternship and Summer Internship routes with different eligibility rules.",
    url: SOURCES.infosysInternship,
    alt: "Infosys Careers",
    altUrl: SOURCES.infosysCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness:
      "PROGRAM PORTAL — verify current cohort and eligibility at source",
  },
  {
    id: "accenture-students",
    kind: "internship",
    title: "Accenture India Students & Early Careers",
    provider: "Accenture Careers",
    tags: [
      "software",
      "ai",
      "data",
      "analytics",
      "cybersecurity",
      "cloud",
      "consulting",
      "student",
      "internship",
    ],
    desc: "Official Accenture India careers portal with student opportunities and technology tracks such as AI/Analytics and Cybersecurity.",
    url: SOURCES.accentureCareersIndia,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
];

const hackathonResources = [
  {
    id: "unstop-hackathons",
    kind: "hackathon",
    title: "Unstop Hackathons",
    provider: "Unstop",
    tags: [
      "hackathon",
      "coding",
      "data",
      "ai",
      "design",
      "business",
      "student",
      "india",
    ],
    desc: "India-focused live hackathon directory. Horizon does not cache individual event claims from it.",
    url: SOURCES.unstopHackathons,
    sourceType: "LIVE_DIRECTORY",
    freshness: "LIVE DIRECTORY — verify event at source",
  },
  {
    id: "hack2skill-foundational",
    kind: "hackathon",
    title: "AI for Foundational Learning Hackathon",
    provider: "Hack2Skill",
    tags: [
      "ai",
      "machine learning",
      "education",
      "india",
      "student",
      "hackathon",
    ],
    desc: "Official Hack2Skill event verified from its event page. Registration and first-submission deadline: 27 Sep 2026. Open to eligible Indian citizens age 18+; individual or individual-led teams.",
    url: SOURCES.hack2skillFoundational,
    sourceType: "LIVE_VERIFIED",
    deadline: "2026-09-27T23:59:59+05:30",
    freshness: "VERIFIED 17 SEP 2026 — deadline is date-aware",
  },
  {
    id: "devpost-open",
    kind: "hackathon",
    title: "Devpost Open Hackathons",
    provider: "Devpost",
    tags: [
      "ai",
      "machine learning",
      "software",
      "web",
      "data",
      "global",
      "hackathon",
    ],
    desc: "Public directory of open hackathons. Eligibility and deadlines are controlled by each organizer.",
    url: SOURCES.devpost,
    sourceType: "LIVE_DIRECTORY",
    freshness: "LIVE DIRECTORY — verify event at source",
  },
  {
    id: "mlh-events",
    kind: "hackathon",
    title: "MLH 2026 Event Calendar",
    provider: "Major League Hacking",
    tags: [
      "coding",
      "software",
      "open source",
      "student",
      "hackathon",
      "global",
    ],
    desc: "Official Major League Hacking 2026 student event calendar.",
    url: SOURCES.mlhEvents,
    sourceType: "OFFICIAL_CALENDAR",
    freshness: "CALENDAR — verify event at source",
  },
  {
    id: "mlh-ghw",
    kind: "hackathon",
    title: "MLH Global Hack Week",
    provider: "Major League Hacking",
    tags: ["data", "open source", "ai", "coding", "beginner", "hackathon"],
    desc: "Official Global Hack Week page; dates and themes are controlled by MLH.",
    url: SOURCES.mlhGhw,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM — verify current schedule at source",
  },
  {
    id: "devfolio-directory",
    kind: "hackathon",
    title: "Devfolio Open Hackathons",
    provider: "Devfolio",
    tags: [
      "hackathon",
      "coding",
      "web",
      "ai",
      "fintech",
      "design",
      "student",
      "india",
    ],
    desc: "Live Devfolio directory. Individual events are sourced directly from organizers and should be checked for eligibility and registration status.",
    url: SOURCES.devfolioHackathons,
    sourceType: "LIVE_DIRECTORY",
    freshness: "LIVE DIRECTORY — verify event at source",
  },
  {
    id: "hackspire-26",
    kind: "hackathon",
    title: "HackSpire'26",
    provider: "Devfolio / FIEM ACM Student Chapter",
    tags: [
      "hackathon",
      "coding",
      "software",
      "hardware",
      "student",
      "india",
      "web",
      "ai",
    ],
    desc: "Open student hackathon in Kolkata scheduled for 2–3 Oct 2026. Registrations and shortlist milestones are maintained on the event schedule.",
    url: SOURCES.hackspire,
    alt: "Schedule",
    altUrl: SOURCES.hackspireSchedule,
    sourceType: "LIVE_VERIFIED",
    registrationDeadline: "2026-09-20T23:59:59+05:30",
    startDate: "2026-10-02T14:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — date-aware from event schedule",
  },
  {
    id: "builders-day-hackunion",
    kind: "hackathon",
    title: "Builders Day by HackUnion",
    provider: "Devfolio / HackUnion",
    tags: [
      "hackathon",
      "software",
      "product",
      "coding",
      "student",
      "india",
      "building",
    ],
    desc: "Open Devfolio builder event in Hyderabad on 26 Sep 2026; event page lists team size 1–4 and no registration fee.",
    url: SOURCES.buildersDay,
    alt: "Schedule",
    altUrl: SOURCES.buildersDaySchedule,
    sourceType: "LIVE_VERIFIED",
    registrationDeadline: "2026-09-20T23:59:59+05:30",
    startDate: "2026-09-26T09:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — date-aware from event schedule",
  },
  {
    id: "hack-with-gdg-s4",
    kind: "hackathon",
    title: "HACK WITH GDG S4",
    provider: "Google Developer Groups / Devfolio",
    tags: [
      "hackathon",
      "software",
      "design",
      "ai",
      "coding",
      "student",
      "india",
      "web",
    ],
    desc: "Open 36-hour offline hackathon in Namakkal, Tamil Nadu, scheduled for 8–10 Oct 2026. Ideation submission closes 28 Sep on the event page.",
    url: SOURCES.hackWithGdg,
    alt: "Schedule",
    altUrl: SOURCES.hackWithGdgSchedule,
    sourceType: "LIVE_VERIFIED",
    registrationDeadline: "2026-09-25T23:59:59+05:30",
    startDate: "2026-10-08T18:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — date-aware from event schedule",
  },
  {
    id: "kaggle-hackathons",
    kind: "hackathon",
    title: "Kaggle Competitions & Hackathons",
    provider: "Kaggle",
    tags: [
      "hackathon",
      "machine learning",
      "ai",
      "data",
      "research",
      "python",
      "student",
      "global",
    ],
    desc: "Live Kaggle competition/hackathon directory with current organizer pages, participation rules and timelines.",
    url: SOURCES.kaggleHackathons,
    alt: "All Kaggle competitions",
    altUrl: SOURCES.kaggleCompetitions,
    sourceType: "LIVE_DIRECTORY",
    freshness: "LIVE DIRECTORY — verify event at source",
  },
  {
    id: "kaggle-arc-paper",
    kind: "hackathon",
    title: "ARC Prize 2026 — Paper Track",
    provider: "Kaggle / ARC Prize",
    tags: [
      "hackathon",
      "ai",
      "reasoning",
      "machine learning",
      "research",
      "python",
      "global",
    ],
    desc: "Current Kaggle hackathon paper track. The official page lists a 9 Nov 2026 final-submission deadline and requires a writeup documenting an ARC-AGI-2 or ARC-AGI-3 submission.",
    url: SOURCES.kaggleArcPaper,
    sourceType: "LIVE_VERIFIED",
    registrationDeadline: "2026-11-09T23:59:59Z",
    freshness: "VERIFIED 17 SEP 2026 — official Kaggle timeline",
  },
  {
    id: "kaggle-pokemon-strategy",
    kind: "hackathon",
    title: "Pokémon TCG AI Battle Challenge — Strategy",
    provider: "Kaggle / The Pokémon Company",
    tags: [
      "hackathon",
      "ai",
      "reinforcement learning",
      "data",
      "research",
      "strategy",
      "global",
    ],
    desc: "Kaggle-hosted strategy hackathon connected to the Pokémon TCG AI Battle Challenge. The official source records an earlier entry/final-submission timeline, so Horizon marks it closed rather than pretending it is still open.",
    url: SOURCES.kagglePokemonStrategy,
    sourceType: "OFFICIAL_COMPETITION",
    registrationDeadline: "2026-09-06T23:59:59Z",
    freshness: "HISTORICAL/CLOSED — source retained for research",
  },
  {
    id: "define-4",
    kind: "hackathon",
    title: "DEFINE 4.0",
    provider: "Devfolio / Mar Baselios College of Engineering and Technology",
    tags: ["hackathon", "software", "student", "india", "coding", "innovation"],
    desc: "Open Devfolio hackathon in Thiruvananthapuram running 9–10 Oct 2026. The event page lists team size 2–5 and no registration fee.",
    url: "https://define4.devfolio.co/",
    sourceType: "LIVE_VERIFIED",
    startDate: "2026-10-09T10:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — event page current",
  },
  {
    id: "hackify-3",
    kind: "hackathon",
    title: "Hackify 3.0",
    provider: "Devfolio / IEDC MACE",
    tags: [
      "hackathon",
      "cybersecurity",
      "defence",
      "software",
      "ai",
      "student",
      "india",
    ],
    desc: "National-level student hackathon in Kothamangalam, Kerala, scheduled for 9–11 Oct 2026, with cyber-defence, defence technology and humanitarian-response themes.",
    url: "https://hackify-3.devfolio.co/",
    sourceType: "LIVE_VERIFIED",
    startDate: "2026-10-09T10:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — event page current",
  },
  {
    id: "hackbios-2k26",
    kind: "hackathon",
    title: "HACKBIOS 2K26",
    provider: "Devfolio / HackBIOS",
    tags: [
      "hackathon",
      "healthcare",
      "web3",
      "web development",
      "cybersecurity",
      "ai",
      "fintech",
      "edtech",
      "student",
      "india",
    ],
    desc: "National-level hackathon in Junwani with online idea selection and a 24-hour offline round on 9–10 Oct 2026.",
    url: "https://hackbios2k26.devfolio.co/",
    sourceType: "LIVE_VERIFIED",
    startDate: "2026-10-09T10:00:00+05:30",
    freshness: "VERIFIED 17 SEP 2026 — event page current",
  },
  {
    id: "boss-battle",
    kind: "hackathon",
    title: "BOSS Battle",
    provider: "Devfolio / Bitshala",
    tags: [
      "hackathon",
      "bitcoin",
      "open source",
      "privacy",
      "nostr",
      "ai",
      "coding",
      "online",
    ],
    desc: "Open online hackathon running from 7 Sep to 5 Oct 2026, focused on Bitcoin/open-source software, privacy, Nostr and AI.",
    url: "https://boss-battle.devfolio.co/",
    sourceType: "LIVE_VERIFIED",
    registrationDeadline: "2026-10-05T23:59:59+05:30",
    freshness: "VERIFIED 17 SEP 2026 — event page current",
  },
];

const companyResources = [
  {
    id: "google",
    kind: "company",
    title: "Google",
    provider: "Google Careers",
    tags: [
      "software",
      "python",
      "ai",
      "machine learning",
      "data",
      "security",
      "design",
      "cloud",
    ],
    desc: "Official Google career search and internship portals. Use filters for role, location, job type and student eligibility.",
    url: SOURCES.googleJobs,
    alt: "Internships",
    altUrl: SOURCES.googleInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "microsoft",
    kind: "company",
    title: "Microsoft",
    provider: "Microsoft Careers",
    tags: [
      "software",
      "python",
      "ai",
      "data",
      "security",
      "cloud",
      "developer",
      "design",
    ],
    desc: "Official Microsoft early-in-profession and student portal.",
    url: SOURCES.microsoftStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "amazon",
    kind: "company",
    title: "Amazon / AWS",
    provider: "Amazon Jobs",
    tags: ["software", "aws", "cloud", "data", "ai", "business", "engineering"],
    desc: "Official Amazon student internship and jobs entry points.",
    url: SOURCES.amazonInternships,
    alt: "Amazon Jobs",
    altUrl: SOURCES.amazonJobs,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "ibm",
    kind: "company",
    title: "IBM",
    provider: "IBM Careers",
    tags: ["software", "ai", "data", "cloud", "cybersecurity", "research"],
    desc: "Official IBM internships and early-career routes.",
    url: SOURCES.ibmInternships,
    alt: "IBM Careers",
    altUrl: SOURCES.ibmCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "nvidia",
    kind: "company",
    title: "NVIDIA",
    provider: "NVIDIA Careers",
    tags: [
      "ai",
      "machine learning",
      "python",
      "cuda",
      "software",
      "hardware",
      "research",
    ],
    desc: "Official NVIDIA university recruiting page.",
    url: SOURCES.nvidiaUniversity,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "adobe",
    kind: "company",
    title: "Adobe",
    provider: "Adobe Careers",
    tags: [
      "ux",
      "ui",
      "design",
      "software",
      "creative",
      "engineering",
      "marketing",
    ],
    desc: "Official Adobe university recruiting and graduate opportunities page.",
    url: SOURCES.adobeUniversity,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "salesforce",
    kind: "company",
    title: "Salesforce",
    provider: "Salesforce Careers",
    tags: ["software", "ai", "data", "cloud", "product", "design", "sales"],
    desc: "Official Salesforce Futureforce university and early-career route.",
    url: SOURCES.salesforceInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "qualcomm",
    kind: "company",
    title: "Qualcomm",
    provider: "Qualcomm Careers",
    tags: [
      "software",
      "c++",
      "python",
      "ai",
      "machine learning",
      "embedded",
      "research",
      "india",
    ],
    desc: "Official Qualcomm early-career and internship route, including India-specific program information.",
    url: SOURCES.qualcommInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening at source",
  },
  {
    id: "mastercard",
    kind: "company",
    title: "Mastercard",
    provider: "Mastercard Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "cybersecurity",
      "product",
      "payments",
      "cloud",
      "student",
    ],
    desc: "Official Mastercard careers hub, including early careers, engineering, cybersecurity and jobs search routes.",
    url: SOURCES.mastercardCareers,
    alt: "Early careers",
    altUrl: SOURCES.mastercardEarly,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "apple",
    kind: "company",
    title: "Apple",
    provider: "Apple Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "hardware",
      "design",
      "student",
    ],
    desc: "Official Apple student careers and internship search.",
    url: SOURCES.appleStudents,
    alt: "Student internships",
    altUrl: SOURCES.appleInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and location at source",
  },
  {
    id: "oracle",
    kind: "company",
    title: "Oracle",
    provider: "Oracle Careers",
    tags: [
      "software",
      "cloud",
      "database",
      "data",
      "ai",
      "engineering",
      "student",
    ],
    desc: "Official Oracle students and graduates careers hub with internship and technical program routes.",
    url: SOURCES.oracleStudents,
    alt: "Internships",
    altUrl: SOURCES.oracleInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "atlassian",
    kind: "company",
    title: "Atlassian",
    provider: "Atlassian Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "security",
      "ux",
      "research",
      "student",
    ],
    desc: "Official Atlassian careers hub with student/graduate roles and candidate resources.",
    url: SOURCES.atlassianCareers,
    alt: "Early careers",
    altUrl: SOURCES.atlassianEarly,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and local cycle at source",
  },
  {
    id: "visa",
    kind: "company",
    title: "Visa",
    provider: "Visa Careers",
    tags: [
      "software",
      "data",
      "ai",
      "cybersecurity",
      "payments",
      "product",
      "student",
    ],
    desc: "Official Visa careers and student/early-career opportunities.",
    url: SOURCES.visaCareers,
    alt: "Students & early careers",
    altUrl: SOURCES.visaEarly,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
  {
    id: "jpmorgan",
    kind: "company",
    title: "JPMorgan Chase",
    provider: "JPMorgan Chase Careers",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "react",
      "sql",
      "cloud",
      "cybersecurity",
      "data",
      "design",
      "student",
    ],
    desc: "Official JPMorgan Chase student and technology career routes, including software engineering and design programs.",
    url: SOURCES.jpmSoftwareIntern,
    alt: "Technology Summer Analyst",
    altUrl: SOURCES.jpmTechIntern,
    sourceType: "OFFICIAL_PROGRAM",
    freshness:
      "PROGRAM/CAREERS — verify current opening and location at source",
  },
  {
    id: "tcs",
    kind: "company",
    title: "TCS",
    provider: "TCS Careers",
    tags: [
      "software",
      "research",
      "ai",
      "data",
      "engineering",
      "consulting",
      "student",
      "india",
    ],
    desc: "Official TCS India careers portal with entry-level, internship and research routes.",
    url: SOURCES.tcsCareers,
    alt: "Internship",
    altUrl: SOURCES.tcsInternship,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening/program at source",
  },
  {
    id: "infosys",
    kind: "company",
    title: "Infosys",
    provider: "Infosys Careers",
    tags: [
      "software",
      "data",
      "ai",
      "machine learning",
      "research",
      "management",
      "student",
      "india",
    ],
    desc: "Official Infosys careers and internships portal, including InStep and Winternship routes.",
    url: SOURCES.infosysCareers,
    alt: "Internships",
    altUrl: SOURCES.infosysInternship,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current cohort/opening at source",
  },
  {
    id: "accenture",
    kind: "company",
    title: "Accenture",
    provider: "Accenture Careers",
    tags: [
      "software",
      "ai",
      "data",
      "analytics",
      "cybersecurity",
      "cloud",
      "consulting",
      "student",
    ],
    desc: "Official Accenture India career route across AI/Analytics, Cybersecurity, digital engineering and student opportunities.",
    url: SOURCES.accentureCareersIndia,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening and eligibility at source",
  },
];

const guidanceResources = [
  {
    id: "google-students-guidance",
    kind: "guidance",
    title: "Google Students & Applying",
    provider: "Google Careers",
    tags: [
      "software",
      "engineering",
      "student",
      "internship",
      "resume",
      "application",
    ],
    desc: "Google's student hub with internships, early-career routes and application guidance.",
    url: SOURCES.googleStudents,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current program details at source",
  },
  {
    id: "mastercard-interview-guidance",
    kind: "guidance",
    title: "Mastercard Engineering + Interview Resources",
    provider: "Mastercard Careers",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "cybersecurity",
      "interview",
      "application",
    ],
    desc: "Mastercard's engineering page points candidates to technical interview tips, a sample technical interview, workshop and guide.",
    url: SOURCES.mastercardEngineering,
    alt: "Technical interview source",
    altUrl: SOURCES.mastercardSearch,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current interview guidance at source",
  },
  {
    id: "oracle-student-prep",
    kind: "guidance",
    title: "Oracle Student Career Prep",
    provider: "Oracle Careers",
    tags: ["software", "cloud", "student", "resume", "interview"],
    desc: "Oracle's student page links resume advice, interview guidance and free technical learning for students.",
    url: SOURCES.oracleInternships,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — source controls current advice",
  },
  {
    id: "atlassian-candidate-hub",
    kind: "guidance",
    title: "Atlassian Candidate Resource Hub",
    provider: "Atlassian Careers",
    tags: [
      "software",
      "engineering",
      "student",
      "interview",
      "application",
      "ux",
      "research",
    ],
    desc: "Atlassian's careers site provides application and interviewing resources alongside student opportunities.",
    url: SOURCES.atlassianCareers,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — source controls current advice",
  },
  {
    id: "jpmorgan-tech-prep",
    kind: "guidance",
    title: "JPMorgan Technology Internship Prep",
    provider: "JPMorgan Chase Careers",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "react",
      "sql",
      "cloud",
      "cybersecurity",
      "interview",
      "application",
    ],
    desc: "The official technology internship page describes technical/business training, teamwork and skill development in the program.",
    url: SOURCES.jpmSoftwareIntern,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM PAGE — verify current location/opening at source",
  },
  {
    id: "tcs-research-internship",
    kind: "guidance",
    title: "TCS Research Internship Guidance",
    provider: "TCS Careers",
    tags: ["research", "software", "data", "ai", "student", "internship"],
    desc: "TCS's official internship page explains its research-internship environment and how institute-linked student routes work.",
    url: SOURCES.tcsInternship,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current institute/program rules",
  },
  {
    id: "infosys-internship-guidance",
    kind: "guidance",
    title: "Infosys Internship Routes & Eligibility",
    provider: "Infosys Careers",
    tags: [
      "software",
      "data",
      "ai",
      "research",
      "student",
      "internship",
      "india",
    ],
    desc: "Infosys documents multiple internship routes with materially different eligibility and timing; the source is the authority.",
    url: SOURCES.infosysInternship,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current cohort details at source",
  },
  {
    id: "visa-early-career-guidance",
    kind: "guidance",
    title: "Visa Early Career Guidance",
    provider: "Visa Careers",
    tags: [
      "payments",
      "software",
      "data",
      "ai",
      "cybersecurity",
      "student",
      "internship",
    ],
    desc: "Official Visa student and early-career page with internship-program context and a live role search.",
    url: SOURCES.visaEarly,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current opening and eligibility",
  },
  {
    id: "forage",
    kind: "guidance",
    title: "Forage Virtual Work Experiences",
    provider: "Forage",
    tags: [
      "software",
      "data",
      "cybersecurity",
      "business",
      "student",
      "career",
    ],
    desc: "Established virtual-work-experience platform. Use it as optional evidence-building practice, not as a substitute for employer hiring requirements.",
    url: "https://www.theforage.com/",
    sourceType: "ESTABLISHED_PUBLIC",
    freshness: "PLATFORM — availability varies by provider",
  },
];

const targetPrograms = [
  {
    id: "google-swe-intern",
    kind: "internship",
    company: "Google",
    companyId: "google",
    title: "Software Engineering Intern",
    roleId: "software",
    tags: [
      "software",
      "python",
      "javascript",
      "java",
      "c++",
      "data structures",
      "algorithms",
      "linux",
    ],
    source: SOURCES.googleStudents,
    sourceLabel: "Google Students & current Careers search",
    locationNote:
      "Current official internship postings can be region-specific; the verified Summer 2027 BS posting found in the source search is U.S.-based. Check regional Google Careers pages for India or another location.",
    steps: [
      "Confirm degree, location and internship-year eligibility on the exact Google listing.",
      "Build competency in at least two general-purpose programming languages; the current Google BS software-intern posting explicitly lists this.",
      "Practice data structures, algorithms, complexity and clean implementation under time limits.",
      "Strengthen Unix/Linux and software-development fundamentals; these appear in the current preferred-qualification signals.",
      "Build one production-style project with tests, documentation and a clear Git history.",
      "Build a second project that demonstrates scale, systems, AI/ML, networking or security relevance.",
      "Write a one-page resume that makes technical evidence easy to verify.",
      "Practice technical problem solving aloud and explaining trade-offs, debugging and complexity.",
      "Prepare your transcript/CV/application materials for the exact Google listing.",
      "Apply through the official Google Careers listing; do not rely on third-party job IDs.",
      "Track the application and keep researching active listings rather than assuming one posting remains open.",
    ],
  },
  {
    id: "google-swe-job",
    kind: "job",
    company: "Google",
    companyId: "google",
    title: "Software Engineer — Job Path",
    roleId: "software",
    tags: [
      "software",
      "python",
      "java",
      "c++",
      "algorithms",
      "system design",
      "distributed systems",
      "linux",
    ],
    source: SOURCES.googleJobs,
    sourceLabel: "Google Careers job search",
    locationNote:
      "Job requirements vary by team, level and location. The roadmap uses the currently visible Google software-engineering signals as preparation guidance, not a guaranteed role specification.",
    steps: [
      "Pick a concrete Google software-engineering job family and verify its exact minimum qualifications.",
      "Strengthen one primary language plus a second general-purpose language.",
      "Master data structures, algorithms and complexity analysis with timed practice.",
      "Add systems fundamentals: APIs, networking, concurrency, databases and testing.",
      "Learn the system-design depth appropriate to the target level; use architecture diagrams and trade-off notes.",
      "Build and deploy a project that demonstrates reliability, scale, testing and observability.",
      "Add a second project with a clear technical decision log and measurable results.",
      "Prepare resume bullets around actions, technical choices and evidence rather than tool lists.",
      "Prepare behavioral stories covering teamwork, ownership, debugging and learning.",
      "Practice technical interviews with code explanation and follow-up questions.",
      "Apply through the exact Google Careers job page and re-check requirements before submission.",
      "Recalibrate the roadmap whenever the specific posting changes or closes.",
    ],
  },
  {
    id: "mastercard-tech-intern",
    kind: "internship",
    company: "Mastercard",
    companyId: "mastercard",
    title: "Technology / Engineering Intern",
    roleId: "software",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "cybersecurity",
      "cloud",
      "payments",
      "student",
    ],
    source: SOURCES.mastercardEarly,
    sourceLabel: "Mastercard Early Careers",
    locationNote:
      "Mastercard's early-career page states its internship program is for currently enrolled Bachelor's and Master's students; exact role/location requirements are listing-specific.",
    steps: [
      "Check Mastercard Early Careers and identify a currently open internship that matches your degree and location.",
      "Choose a technical path: software, platform/SRE, data/AI or cybersecurity; Mastercard's engineering pages explicitly describe these areas.",
      "Strengthen one production language and a second language where relevant to the target listing.",
      "Master DSA, debugging, testing and practical coding; use timed problem sets.",
      "Build backend/cloud fundamentals: APIs, databases, authentication, monitoring and deployment.",
      "Learn payment-domain basics: transactions, fraud/risk, reliability, security and data privacy at a conceptual level.",
      "Build one secure, scalable project and document its architecture and trade-offs.",
      "Build one data/AI/payment-adjacent project if it matches the chosen team.",
      "Use Mastercard's official technical interview resources and sample materials on the engineering site.",
      "Prepare resume + project evidence for the exact Mastercard job description.",
      "Apply through Mastercard Careers and verify location, eligibility and status on the employer page.",
      "Keep the target open as a research route only until a specific listing is actually found and submitted.",
    ],
  },
  {
    id: "mastercard-swe-job",
    kind: "job",
    company: "Mastercard",
    companyId: "mastercard",
    title: "Software Engineer / Engineering Job Path",
    roleId: "software",
    tags: [
      "software",
      "engineering",
      "data",
      "ai",
      "cybersecurity",
      "cloud",
      "payments",
      "system design",
    ],
    source: SOURCES.mastercardEngineering,
    sourceLabel: "Mastercard Engineering Jobs",
    locationNote:
      "Mastercard's engineering page covers software, platform, SRE, data, AI and cybersecurity. Exact qualifications are controlled by each open role.",
    steps: [
      "Select the exact Mastercard engineering opening and record its location, level and minimum qualifications.",
      "Map every must-have skill in the posting to your current recognized skill profile.",
      "Close gaps in language proficiency, DSA, testing and debugging.",
      "Strengthen scalable backend engineering: APIs, databases, concurrency, reliability and observability.",
      "Add cloud and secure-development fundamentals relevant to the job family.",
      "Learn payment-system concepts sufficiently to discuss reliability, fraud/risk, privacy and customer impact.",
      "Build one production-quality project that has measurable performance or reliability evidence.",
      "Prepare a concise architecture explanation and trade-off log for that project.",
      "Use Mastercard's official technical interview tips, sample interview and workshop resources.",
      "Prepare behavioral examples showing collaboration, ownership, problem solving and learning.",
      "Apply through the exact Mastercard listing and preserve the job URL in your application tracker.",
      "Re-check the posting after application; requirements and role classifications can change.",
    ],
  },
  {
    id: "mastercard-cyber-job",
    kind: "job",
    company: "Mastercard",
    companyId: "mastercard",
    title: "Cybersecurity / Corporate Security Job Path",
    roleId: "cyber",
    tags: [
      "cybersecurity",
      "security",
      "networking",
      "linux",
      "siem",
      "risk",
      "ai",
    ],
    source: SOURCES.mastercardCyber,
    sourceLabel: "Mastercard Cybersecurity & Corporate Security Jobs",
    locationNote:
      "The Mastercard source describes security opportunities and security-development themes; exact role qualifications remain listing-specific.",
    steps: [
      "Select a current security opening and capture its exact requirements.",
      "Build networking fundamentals: TCP/IP, DNS, HTTP, routing and common security failures.",
      "Build Linux/Unix confidence and automate repetitive security tasks with Python or shell.",
      "Practice log analysis, detection logic, SIEM workflows and incident-response reasoning.",
      "Learn secure coding/application-security basics and threat modeling.",
      "Study risk, controls and privacy concepts relevant to payment systems.",
      "Create a documented defensive project: monitoring lab, detection rules, secure service or incident report.",
      "Demonstrate evidence through GitHub documentation, diagrams and reproducible steps.",
      "Practice explaining an incident, threat model and remediation choices clearly.",
      "Use official Mastercard security and interview resources where applicable.",
      "Tailor CV to the exact security role and verify every eligibility requirement.",
      "Apply through the employer source and keep monitoring the live portal.",
    ],
  },
  {
    id: "apple-student-intern",
    kind: "internship",
    company: "Apple",
    companyId: "apple",
    title: "Technical Student Internship",
    roleId: "software",
    tags: ["software", "engineering", "data", "ai", "hardware", "student"],
    source: SOURCES.appleStudents,
    sourceLabel: "Apple Students",
    locationNote:
      "Apple's student page says internships span technical and non-technical fields and require full-time student enrollment; exact role/location requirements vary.",
    steps: [
      "Choose a specific Apple student internship and verify degree, graduation and location requirements.",
      "Strengthen the programming language(s) named by the target team.",
      "Practice DSA, debugging and writing correct maintainable code.",
      "Build strong platform fundamentals relevant to the team: web, systems, mobile, hardware or data.",
      "Build one project with strong engineering quality and documentation.",
      "Build a second project showing depth in the target technical area.",
      "Prepare concise technical resume bullets with measurable outcomes.",
      "Practice coding and project deep-dives aloud.",
      "Prepare behavioral examples around collaboration and ownership.",
      "Submit through Apple Jobs or the official student portal.",
      "Track the exact job ID from the employer only after you open it yourself.",
      "Re-check current openings because student roles change by season.",
    ],
  },
  {
    id: "oracle-technical-intern",
    kind: "internship",
    company: "Oracle",
    companyId: "oracle",
    title: "Technical Intern",
    roleId: "software",
    tags: ["software", "cloud", "database", "data", "ai", "engineering"],
    source: SOURCES.oracleInternships,
    sourceLabel: "Oracle Internships",
    locationNote:
      "Oracle currently documents a Technical Intern Program and multiple corporate internship routes; exact eligibility varies.",
    steps: [
      "Select a current Oracle technical internship and verify eligibility.",
      "Strengthen one language and core software-engineering habits.",
      "Build SQL/database fluency and understand transactions and data modeling.",
      "Add cloud fundamentals, especially where the target role names a platform or service.",
      "Practice DSA and practical debugging.",
      "Build one deployable project with database + API + tests.",
      "Build one project showing cloud or distributed-system fundamentals.",
      "Use Oracle's student learning resources to fill specific gaps.",
      "Use the resume advice and interview guidance linked from Oracle's internship page.",
      "Tailor application materials to the exact posting.",
      "Apply on Oracle's official jobs portal.",
      "Re-check role status, location and eligibility before every application.",
    ],
  },
  {
    id: "atlassian-software-intern",
    kind: "internship",
    company: "Atlassian",
    companyId: "atlassian",
    title: "Software Engineering Intern",
    roleId: "software",
    tags: ["software", "engineering", "data", "cloud", "student", "india"],
    source: SOURCES.atlassianEarly,
    sourceLabel: "Atlassian Early Careers",
    locationNote:
      "Atlassian's current early-career page says India internship applications open around July for April–June starts and the internship is aimed at penultimate-year students; verify the exact cycle and listing.",
    steps: [
      "Confirm that your academic year and graduation timing fit the India internship cycle on the current Atlassian page.",
      "Build strong programming + DSA fundamentals.",
      "Strengthen collaborative engineering: Git, code review, testing and documentation.",
      "Build cloud/web/software fundamentals relevant to the selected team.",
      "Create a high-quality project with a meaningful user problem and measurable outcome.",
      "Prepare a clean public repository and README that another engineer can understand quickly.",
      "Practice coding and technical project explanations.",
      "Practice behavioral/teamwork questions because Atlassian emphasizes collaboration and professional development in early-career materials.",
      "Prepare application materials before the India recruiting window.",
      "Apply through Atlassian Careers and preserve the exact listing URL.",
      "Use the Atlassian candidate/application resources while preparing.",
      "Re-check dates and eligibility whenever the recruiting cycle changes.",
    ],
  },
  {
    id: "visa-student-intern",
    kind: "internship",
    company: "Visa",
    companyId: "visa",
    title: "Student Internship",
    roleId: "software",
    tags: ["software", "data", "ai", "cybersecurity", "payments", "student"],
    source: SOURCES.visaEarly,
    sourceLabel: "Visa Students + Early Careers",
    locationNote:
      "Visa's official early-career page documents an internship program for college students; exact role/location eligibility is listing-specific.",
    steps: [
      "Choose a current Visa student role and verify degree/location requirements.",
      "Build core programming and DSA skills if targeting technology.",
      "Strengthen data, cloud or cybersecurity skills according to the target team.",
      "Learn payments concepts at a high level: authorization, fraud, security, reliability and data flow.",
      "Build a project related to trustworthy transactions, risk, data or scalable services.",
      "Document tests, security controls and design choices.",
      "Prepare resume bullets with measurable evidence.",
      "Practice technical + behavioral interviews.",
      "Review Visa's live student role details before applying.",
      "Apply through the official Visa careers portal.",
      "Track applications and deadlines only from the employer source.",
      "Refresh the roadmap as the target posting changes.",
    ],
  },
  {
    id: "jpmorgan-swe-intern",
    kind: "internship",
    company: "JPMorgan Chase",
    companyId: "jpmorgan",
    title: "Software Engineer Internship",
    roleId: "software",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "react",
      "sql",
      "cloud",
      "cybersecurity",
    ],
    source: SOURCES.jpmSoftwareIntern,
    sourceLabel: "JPMorgan Chase Software Engineer Internship",
    locationNote:
      "The official program page describes a software-engineering internship with technical and business training. Current locations/opening status are controlled by the live application page.",
    steps: [
      "Check the live JPMorgan program page and exact location availability.",
      "Build strong software development fundamentals and DSA.",
      "Develop proficiency in one main language such as Java or Python and a second language where the team needs it.",
      "Strengthen web/backend fundamentals: APIs, databases, SQL and testing.",
      "Learn cloud, monitoring and secure-development basics.",
      "Build a full-stack or backend project with realistic business requirements.",
      "Add a finance/payments-adjacent project element to demonstrate business understanding where relevant.",
      "Prepare teamwork/leadership examples; the official program specifically discusses collaboration and leadership abilities.",
      "Practice technical assessment and coding under time limits.",
      "Use the official program and application source for current steps.",
      "Apply through the employer page and record the exact live listing.",
      "Re-check location and program status before every submission.",
    ],
  },
  {
    id: "tcs-research-intern",
    kind: "internship",
    company: "TCS",
    companyId: "tcs",
    title: "Research / Internship Route",
    roleId: "data",
    tags: ["research", "ai", "data", "software", "engineering", "india"],
    source: SOURCES.tcsInternship,
    sourceLabel: "TCS India Internship",
    locationNote:
      "TCS documents research internships and institute-linked student routes; requirements and timing can be program-specific.",
    steps: [
      "Verify whether your institute and academic profile qualify for the current TCS route.",
      "Choose a research/technical theme aligned with TCS's current program description.",
      "Strengthen Python, statistics/data or software engineering according to the project theme.",
      "Read 2–3 relevant papers and reproduce one baseline result where feasible.",
      "Build a research-grade project with reproducible code and documentation.",
      "Create a short technical report explaining method, experiments and limitations.",
      "Practice communicating technical findings to non-specialists.",
      "Prepare an institute-ready CV and project evidence.",
      "Coordinate with the placement/research office when the program requires institutional nomination.",
      "Apply through the official TCS process.",
      "Track current cohort dates only from the employer/institute source.",
      "Refresh your target when the program requirements change.",
    ],
  },
  {
    id: "infosys-intern",
    kind: "internship",
    company: "Infosys",
    companyId: "infosys",
    title: "InStep / Winternship / Student Internship Route",
    roleId: "software",
    tags: ["software", "data", "ai", "research", "student", "india"],
    source: SOURCES.infosysInternship,
    sourceLabel: "Infosys Internships",
    locationNote:
      "Infosys publishes multiple internship programs with materially different eligibility; the current source must decide which route you qualify for.",
    steps: [
      "Identify the exact Infosys program (InStep, Winternship or Summer Internship) that matches your education and institute.",
      "Verify eligibility and intake timing on the current source.",
      "Strengthen core software/data skills relevant to the target project.",
      "Build one project with a clear business or research problem.",
      "Document your contribution, methods and measurable result.",
      "Prepare a concise CV tailored to the program.",
      "Strengthen communication and presentation because internship work includes project interaction and evaluation.",
      "Review interview or placement-office requirements for your program.",
      "Submit through the official Infosys channel or your institute when required.",
      "Keep proof of project work and completion certificates in your portfolio.",
      "Track the next cohort from Infosys rather than using stale third-party deadlines.",
      "Re-evaluate the target route each intake.",
    ],
  },
  {
    id: "accenture-tech-intern",
    kind: "internship",
    company: "Accenture",
    companyId: "accenture",
    title: "Technology / AI / Analytics / Cybersecurity Student Route",
    roleId: "systems",
    tags: [
      "software",
      "ai",
      "data",
      "analytics",
      "cybersecurity",
      "cloud",
      "consulting",
    ],
    source: SOURCES.accentureCareersIndia,
    sourceLabel: "Accenture India Careers",
    locationNote:
      "Accenture's India careers page currently highlights AI/Analytics, Cybersecurity and digital engineering plus student opportunities; exact roles vary.",
    steps: [
      "Choose the exact Accenture student role family and read its current requirements.",
      "Strengthen the core technical skills named by the target path.",
      "Add problem-solving, communication and teamwork evidence.",
      "Build one client-style project with clear requirements, implementation and outcome.",
      "Practice SQL/data or cybersecurity/cloud skills depending on the role.",
      "Learn to explain technical choices in business terms.",
      "Prepare a project portfolio that shows ownership and measurable results.",
      "Tailor resume to the exact role rather than the generic company.",
      "Practice assessment-style reasoning and role-specific interview questions.",
      "Apply via official Accenture Careers India.",
      "Track exact application status in your workspace.",
      "Re-check current openings and eligibility before each submission.",
    ],
  },
  {
    id: "microsoft-software-intern",
    kind: "internship",
    company: "Microsoft",
    companyId: "microsoft",
    title: "Software / Engineering Internship",
    roleId: "software",
    tags: [
      "software",
      "python",
      "java",
      "javascript",
      "cloud",
      "ai",
      "student",
    ],
    source: SOURCES.microsoftStudents,
    sourceLabel: "Microsoft Early in Profession",
    locationNote:
      "Microsoft's student portal is the source of truth for current internship roles, locations and eligibility.",
    steps: [
      "Find a current Microsoft student/early-career engineering role and verify requirements.",
      "Strengthen programming, DSA, debugging and testing.",
      "Build one cloud-backed application with APIs and a database.",
      "Add CI/CD, observability or secure-development evidence where relevant.",
      "Build a second project demonstrating AI/data or product impact if the target role calls for it.",
      "Prepare GitHub documentation and measurable project results.",
      "Tailor resume to the exact Microsoft role.",
      "Practice technical and behavioral interviews.",
      "Apply via Microsoft's official student portal.",
      "Record the exact listing URL and application date.",
      "Keep monitoring official openings and update the roadmap.",
      "Do not assume a previous listing remains open.",
    ],
  },
  {
    id: "amazon-software-intern",
    kind: "internship",
    company: "Amazon / AWS",
    companyId: "amazon",
    title: "Software Development Internship",
    roleId: "software",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "aws",
      "cloud",
      "data",
      "student",
    ],
    source: SOURCES.amazonInternships,
    sourceLabel: "Amazon Student Internships",
    locationNote:
      "Amazon's student internship page is the route to current internships; exact requirements vary by listing and country.",
    steps: [
      "Identify the exact Amazon SDE/student listing and verify degree/location requirements.",
      "Strengthen one production language and core DSA.",
      "Practice object-oriented design, APIs, databases and testing.",
      "Learn AWS/cloud fundamentals relevant to the target role.",
      "Build and deploy an end-to-end project with monitoring and documentation.",
      "Add scale/reliability reasoning and clear trade-offs.",
      "Prepare measurable resume bullets and a concise project deep dive.",
      "Practice technical assessments and behavioral stories.",
      "Apply through Amazon Jobs/student source.",
      "Track the exact role URL and status.",
      "Re-check the live listing before each application.",
      "Use additional employer-recommended resources when the listing provides them.",
    ],
  },
];

targetPrograms.push(
  {
    id: "google-data-job",
    kind: "job",
    company: "Google",
    companyId: "google",
    title: "Data / AI Software Job Path",
    roleId: "data",
    tags: [
      "python",
      "sql",
      "statistics",
      "machine learning",
      "ai",
      "data",
      "software",
    ],
    source: SOURCES.googleJobs,
    sourceLabel: "Google Careers job search",
    locationNote:
      "Use the exact Google data/AI/software listing to establish minimum qualifications; team and location requirements vary.",
    steps: [
      "Select an exact Google data/AI/software role and record its minimum qualifications.",
      "Strengthen Python, SQL, statistics and data-wrangling fundamentals.",
      "Practice machine-learning concepts, evaluation and error analysis where the role names ML/AI.",
      "Build an end-to-end data project with clean data, reproducible code and documented decisions.",
      "Add a second project involving scale, experimentation or model-serving concepts where relevant.",
      "Create dashboards or written analysis that clearly communicate results.",
      "Prepare a resume that makes analytical and engineering evidence easy to verify.",
      "Practice technical data/ML questions plus behavioral/project deep dives.",
      "Review the exact Google source for degree, location, experience and application requirements.",
      "Apply only through the employer source and preserve the exact listing link.",
      "Re-check current role status and requirements before each submission.",
    ],
  },
  {
    id: "mastercard-data-job",
    kind: "job",
    company: "Mastercard",
    companyId: "mastercard",
    title: "AI / Data Job Path",
    roleId: "data",
    tags: [
      "python",
      "sql",
      "statistics",
      "machine learning",
      "ai",
      "data",
      "payments",
      "cloud",
    ],
    source: SOURCES.mastercardEngineering,
    sourceLabel: "Mastercard Engineering Jobs",
    locationNote:
      "Mastercard's engineering page explicitly includes data and AI areas; exact role qualifications remain controlled by the current job listing.",
    steps: [
      "Pick a live Mastercard AI/data opening and capture its exact requirements.",
      "Strengthen Python, SQL, statistics and data preparation.",
      "Practice model evaluation, experimentation and reproducibility.",
      "Build an end-to-end project with a strong business or payments-related question.",
      "Add data-quality, privacy and security considerations to the project.",
      "Learn the basics of payments and fraud/risk analytics where relevant.",
      "Deploy or operationalize one project enough to discuss reliability and monitoring.",
      "Prepare a concise data story and technical deep dive.",
      "Use Mastercard's official engineering/interview resources where applicable.",
      "Tailor resume and project evidence to the exact role.",
      "Apply through Mastercard Careers and track the employer URL.",
      "Re-check the listing before subsequent applications.",
    ],
  },
  {
    id: "mastercard-cyber-job",
    kind: "job",
    company: "Mastercard",
    companyId: "mastercard",
    title: "Cybersecurity / Corporate Security Job Path",
    roleId: "cyber",
    tags: [
      "cybersecurity",
      "security",
      "networking",
      "linux",
      "siem",
      "risk",
      "ai",
    ],
    source: SOURCES.mastercardCyber,
    sourceLabel: "Mastercard Cybersecurity & Corporate Security Jobs",
    locationNote:
      "The Mastercard source describes security opportunities and security-development themes; exact role qualifications remain listing-specific.",
    steps: [
      "Select a current security opening and capture its exact requirements.",
      "Build networking fundamentals: TCP/IP, DNS, HTTP, routing and common security failures.",
      "Build Linux/Unix confidence and automate repetitive security tasks with Python or shell.",
      "Practice log analysis, detection logic, SIEM workflows and incident-response reasoning.",
      "Learn secure coding/application-security basics and threat modeling.",
      "Study risk, controls and privacy concepts relevant to payment systems.",
      "Create a documented defensive project: monitoring lab, detection rules, secure service or incident report.",
      "Demonstrate evidence through GitHub documentation, diagrams and reproducible steps.",
      "Practice explaining an incident, threat model and remediation choices clearly.",
      "Use official Mastercard security and interview resources where applicable.",
      "Tailor CV to the exact security role and verify every eligibility requirement.",
      "Apply through the employer source and keep monitoring the live portal.",
    ],
  },
  {
    id: "nvidia-ai-intern",
    kind: "internship",
    company: "NVIDIA",
    companyId: "nvidia",
    title: "AI / ML / Software Internship Path",
    roleId: "data",
    tags: [
      "python",
      "machine learning",
      "ai",
      "software",
      "cuda",
      "research",
      "data",
    ],
    source: SOURCES.nvidiaUniversity,
    sourceLabel: "NVIDIA University Recruiting",
    locationNote:
      "NVIDIA's university page is a recruiting hub; exact internship requirements and locations are listing-specific.",
    steps: [
      "Choose an exact NVIDIA university role and verify degree, location and technical requirements.",
      "Strengthen Python and the math/statistics foundations needed for the role.",
      "Build machine-learning depth and evaluation discipline.",
      "Learn systems/GPU concepts relevant to the posting, such as CUDA when the role calls for it.",
      "Build one ML project with rigorous experiments and reproducibility.",
      "Build a second project showing engineering quality, performance or deployment.",
      "Document results, limitations and technical decisions.",
      "Prepare a focused resume and concise research/project summary.",
      "Practice coding, ML fundamentals and technical project explanations.",
      "Apply via NVIDIA's official university/careers source.",
      "Track the exact listing and its status.",
      "Re-check requirements before every application.",
    ],
  },
  {
    id: "adobe-product-design-intern",
    kind: "internship",
    company: "Adobe",
    companyId: "adobe",
    title: "Product / UX Design Internship",
    roleId: "webdesign",
    tags: ["ux", "ui", "figma", "research", "prototyping", "design", "student"],
    source: SOURCES.adobeUniversity,
    sourceLabel: "Adobe University",
    locationNote:
      "Adobe says internships span engineering, sales, marketing and more, with technical and non-technical university routes; exact design requirements vary by role.",
    steps: [
      "Pick an exact Adobe university design role and verify eligibility.",
      "Strengthen user research, problem framing and accessibility.",
      "Build component-based UI and design-system thinking in Figma or your primary tool.",
      "Create two polished case studies with clear user/problem/solution/evidence structure.",
      "Prototype one meaningful flow and document usability feedback.",
      "Demonstrate collaboration with engineering or product through handoff artifacts.",
      "Prepare a portfolio with 2–3 strong cases rather than a large gallery.",
      "Write concise project narratives that justify design choices.",
      "Practice portfolio presentation and behavioral questions.",
      "Apply through Adobe's official university/jobs source.",
      "Track the exact role and closing status.",
      "Re-check portfolio and role requirements before each submission.",
    ],
  },
  {
    id: "jpmorgan-design-intern",
    kind: "internship",
    company: "JPMorgan Chase",
    companyId: "jpmorgan",
    title: "Design Development Program Internship",
    roleId: "webdesign",
    tags: [
      "ux",
      "ui",
      "research",
      "prototyping",
      "design",
      "communication",
      "student",
    ],
    source: SOURCES.jpmDesignIntern,
    sourceLabel: "JPMorgan Design Development Program Internship",
    locationNote:
      "The official program page asks for user research, UX writing, prototyping and communication/presentation foundations; exact location and opening status are controlled by the current page.",
    steps: [
      "Verify the current JPMorgan design internship opening and location.",
      "Strengthen user research, interaction design and problem framing.",
      "Practice UX writing and accessible interaction patterns.",
      "Prototype meaningful flows and test them with users.",
      "Create two case studies showing research, iteration and design rationale.",
      "Prepare collaboration/handoff artifacts for product and engineering partners.",
      "Practice presenting design decisions with evidence.",
      "Prepare behavioral examples around teamwork and learning.",
      "Submit a focused portfolio and resume.",
      "Apply through the official JPMorgan program page.",
      "Track the exact live role and application status.",
      "Re-check requirements before applying to later cycles.",
    ],
  },
);

/* EXPANDED REAL-WORLD TARGET CATALOG — official/public employer program routes only. */
const expandedCompanyResources = [
  {
    id: "goldman",
    kind: "company",
    title: "Goldman Sachs",
    provider: "Goldman Sachs Careers",
    tags: [
      "software",
      "java",
      "python",
      "c++",
      "data",
      "statistics",
      "finance",
      "engineering",
      "risk",
      "student",
      "internship",
      "research",
    ],
    desc: "Official Goldman Sachs student, India and open-career pages covering internships, entry-level programs and engineering opportunities.",
    url: SOURCES.goldmanStudents,
    alt: "India Careers",
    altUrl: SOURCES.goldmanIndia,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current program/role at source",
  },
  {
    id: "morganstanley",
    kind: "company",
    title: "Morgan Stanley",
    provider: "Morgan Stanley Careers",
    tags: [
      "software",
      "java",
      "python",
      "data",
      "finance",
      "research",
      "technology",
      "student",
      "internship",
      "risk",
    ],
    desc: "Official Morgan Stanley Students & Graduates portal with internships, apprenticeships, full-time entry roles and interview preparation.",
    url: SOURCES.morganStudents,
    alt: "Careers",
    altUrl: SOURCES.morganCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current program/role and region",
  },
  {
    id: "cisco",
    kind: "company",
    title: "Cisco",
    provider: "Cisco Careers",
    tags: [
      "software",
      "networking",
      "cybersecurity",
      "python",
      "c++",
      "cloud",
      "devops",
      "security",
      "student",
      "internship",
    ],
    desc: "Official Cisco India early-talent and entry-level career routes, including internships and student programs.",
    url: SOURCES.ciscoEarlyIndia,
    alt: "Ideathon",
    altUrl: SOURCES.ciscoIdeathon,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening/program",
  },
  {
    id: "intel",
    kind: "company",
    title: "Intel",
    provider: "Intel Careers",
    tags: [
      "software",
      "c++",
      "python",
      "ai",
      "machine learning",
      "hardware",
      "embedded",
      "systems",
      "research",
      "student",
      "internship",
    ],
    desc: "Official Intel internship and job-search information. Intel says college-level degree students can search internships by country and job type.",
    url: SOURCES.intelJobs,
    alt: "Internship guidance",
    altUrl: SOURCES.intelInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "oracle",
    kind: "company",
    title: "Oracle",
    provider: "Oracle Careers",
    tags: [
      "software",
      "java",
      "python",
      "cloud",
      "database",
      "sql",
      "ai",
      "machine learning",
      "consulting",
      "student",
      "internship",
    ],
    desc: "Official Oracle India students/graduates and internship pages with technical, consulting and corporate early-career routes.",
    url: SOURCES.oracleStudents,
    alt: "Internships",
    altUrl: SOURCES.oracleInternships,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "atlassian",
    kind: "company",
    title: "Atlassian",
    provider: "Atlassian Careers",
    tags: [
      "software",
      "javascript",
      "java",
      "python",
      "cloud",
      "aws",
      "data",
      "ai",
      "ux",
      "security",
      "student",
      "internship",
    ],
    desc: "Official Atlassian early-career portal with India internship and graduate cycles plus software, data, security and design paths.",
    url: SOURCES.atlassianEarly,
    alt: "All Careers",
    altUrl: SOURCES.atlassianCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current India cycle/opening",
  },
  {
    id: "pwc",
    kind: "company",
    title: "PwC India",
    provider: "PwC India Careers",
    tags: [
      "software",
      "data",
      "analytics",
      "cloud",
      "sap",
      "consulting",
      "risk",
      "cybersecurity",
      "business",
      "student",
      "internship",
      "india",
    ],
    desc: "Official PwC India careers and campus routes. PwC documents internship and full-time campus hiring plus technology and analytics programs.",
    url: SOURCES.pwcIndiaCareers,
    alt: "Campus careers",
    altUrl: SOURCES.pwcCampus,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current campus/program status",
  },
  {
    id: "ey",
    kind: "company",
    title: "EY India",
    provider: "EY India Careers",
    tags: [
      "consulting",
      "data",
      "analytics",
      "ai",
      "cybersecurity",
      "risk",
      "finance",
      "technology",
      "student",
      "internship",
      "india",
    ],
    desc: "Official EY India careers route for students, entry-level and other opportunities.",
    url: SOURCES.eyIndiaJoin,
    alt: "Careers",
    altUrl: SOURCES.eyIndiaCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "deloitte",
    kind: "company",
    title: "Deloitte India",
    provider: "Deloitte Careers",
    tags: [
      "consulting",
      "software",
      "data",
      "analytics",
      "ai",
      "cybersecurity",
      "cloud",
      "finance",
      "student",
      "internship",
      "india",
    ],
    desc: "Official Deloitte India campus and careers pages for student and early-career opportunities.",
    url: SOURCES.deloitteIndiaCampus,
    alt: "Careers",
    altUrl: SOURCES.deloitteIndiaCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current campus/open role",
  },
  {
    id: "capgemini",
    kind: "company",
    title: "Capgemini",
    provider: "Capgemini India Careers",
    tags: [
      "software",
      "cloud",
      "data",
      "ai",
      "cybersecurity",
      "consulting",
      "engineering",
      "student",
      "graduate",
      "india",
    ],
    desc: "Official Capgemini India students-and-graduates route with career paths across technology and consulting.",
    url: SOURCES.capgeminiStudents,
    alt: "Careers",
    altUrl: SOURCES.capgeminiCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "sap",
    kind: "company",
    title: "SAP",
    provider: "SAP Careers",
    tags: [
      "software",
      "cloud",
      "data",
      "ai",
      "analytics",
      "business",
      "enterprise",
      "consulting",
      "student",
      "graduate",
    ],
    desc: "Official SAP jobs portal for student, graduate and professional roles across enterprise software and technology.",
    url: SOURCES.sapCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "citi",
    kind: "company",
    title: "Citi",
    provider: "Citi Careers",
    tags: [
      "software",
      "java",
      "python",
      "data",
      "analytics",
      "finance",
      "risk",
      "cybersecurity",
      "cloud",
      "student",
      "internship",
    ],
    desc: "Official Citi careers search for technology, data, finance, risk and early-career opportunities.",
    url: SOURCES.citiCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening/program",
  },
  {
    id: "boa",
    kind: "company",
    title: "Bank of America",
    provider: "Bank of America Careers",
    tags: [
      "software",
      "java",
      "python",
      "data",
      "analytics",
      "finance",
      "risk",
      "cybersecurity",
      "cloud",
      "student",
      "internship",
    ],
    desc: "Official Bank of America student and careers routes for campus, technology and other early-career roles.",
    url: SOURCES.boaStudents,
    alt: "Careers",
    altUrl: SOURCES.boaCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening/program",
  },
  {
    id: "paypal",
    kind: "company",
    title: "PayPal",
    provider: "PayPal Careers",
    tags: [
      "software",
      "java",
      "python",
      "javascript",
      "data",
      "ai",
      "cybersecurity",
      "payments",
      "cloud",
      "student",
      "internship",
    ],
    desc: "Official PayPal careers entry point. Use the current search to identify student, software, data, security and payments roles.",
    url: SOURCES.paypalCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "uber",
    kind: "company",
    title: "Uber",
    provider: "Uber Careers",
    tags: [
      "software",
      "python",
      "java",
      "go",
      "data",
      "machine learning",
      "ai",
      "cloud",
      "maps",
      "mobile",
      "student",
      "internship",
    ],
    desc: "Official Uber careers entry point for technology, data, AI and other roles; internship availability is listing-specific.",
    url: SOURCES.uberCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening/program",
  },
];
companyResources.push(...expandedCompanyResources);

const expandedInternshipResources = [
  {
    id: "goldman-summer-analyst",
    kind: "internship",
    title: "Goldman Sachs Summer Analyst / Student Programs",
    provider: "Goldman Sachs",
    tags: [
      "internship",
      "finance",
      "engineering",
      "software",
      "risk",
      "data",
      "student",
      "india",
    ],
    desc: "Official student internship/program portal. The India Summer Analyst page lists engineering among its available divisions; exact eligibility and locations are program-specific.",
    url: SOURCES.goldmanSummerIndia,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "CURRENT PROGRAM PAGE — verify cycle and role details",
  },
  {
    id: "morgan-students",
    kind: "internship",
    title: "Morgan Stanley Students & Graduates",
    provider: "Morgan Stanley",
    tags: [
      "internship",
      "software",
      "technology",
      "data",
      "finance",
      "research",
      "student",
    ],
    desc: "Official student and graduate portal covering internships, apprenticeships and full-time opportunities for recent graduates.",
    url: SOURCES.morganStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current program",
  },
  {
    id: "cisco-early",
    kind: "internship",
    title: "Cisco India Early Careers & Internships",
    provider: "Cisco",
    tags: [
      "internship",
      "software",
      "networking",
      "cybersecurity",
      "cloud",
      "student",
      "india",
    ],
    desc: "Official Cisco India early-talent portal for internships, apprenticeships and entry-level opportunities.",
    url: SOURCES.ciscoEarlyIndia,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "intel-internships",
    kind: "internship",
    title: "Intel Internships",
    provider: "Intel",
    tags: [
      "internship",
      "software",
      "c++",
      "python",
      "ai",
      "hardware",
      "embedded",
      "systems",
      "research",
      "student",
    ],
    desc: "Intel's official internship guidance says degree-level students can search internships by country and job type.",
    url: SOURCES.intelInternships,
    alt: "Intel Jobs",
    altUrl: SOURCES.intelJobs,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "GUIDANCE + LIVE SEARCH — verify exact internship",
  },
  {
    id: "oracle-internships-expanded",
    kind: "internship",
    title: "Oracle Technical & Corporate Internships",
    provider: "Oracle",
    tags: [
      "internship",
      "software",
      "java",
      "python",
      "cloud",
      "database",
      "ai",
      "business",
      "student",
    ],
    desc: "Official Oracle internship page includes technical and corporate internships; exact roles and locations are source-controlled.",
    url: SOURCES.oracleInternships,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "LIVE PROGRAM PAGE — verify current opening",
  },
  {
    id: "atlassian-internships",
    kind: "internship",
    title: "Atlassian India Internship Program",
    provider: "Atlassian",
    tags: [
      "internship",
      "software",
      "cloud",
      "data",
      "ai",
      "ux",
      "security",
      "student",
      "india",
    ],
    desc: "Official Atlassian early-career page documents a paid full-time internship for students, with India internship applications opening around July for April–June starts.",
    url: SOURCES.atlassianEarly,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM CYCLE — verify current India dates",
  },
  {
    id: "pwc-campus-internship",
    kind: "internship",
    title: "PwC India Campus & Internship Routes",
    provider: "PwC India",
    tags: [
      "internship",
      "consulting",
      "software",
      "data",
      "analytics",
      "cloud",
      "sap",
      "student",
      "india",
    ],
    desc: "PwC India documents eight-week and six-month internship routes plus campus hiring and technology programs.",
    url: SOURCES.pwcCampus,
    sourceType: "OFFICIAL_PROGRAM",
    freshness:
      "PROGRAM/CAMPUS — verify current opening and college eligibility",
  },
  {
    id: "ey-early-careers",
    kind: "internship",
    title: "EY India Students & Entry-Level Careers",
    provider: "EY India",
    tags: [
      "internship",
      "consulting",
      "data",
      "analytics",
      "ai",
      "cybersecurity",
      "risk",
      "student",
      "india",
    ],
    desc: "Official EY India route for students and entry-level candidates; current openings must be checked on the employer site.",
    url: SOURCES.eyIndiaJoin,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current opening",
  },
  {
    id: "deloitte-campus",
    kind: "internship",
    title: "Deloitte India Campus Careers",
    provider: "Deloitte India",
    tags: [
      "internship",
      "consulting",
      "software",
      "data",
      "analytics",
      "ai",
      "cybersecurity",
      "student",
      "india",
    ],
    desc: "Official Deloitte India campus-recruiting route. Program and role availability varies by cycle and campus eligibility.",
    url: SOURCES.deloitteIndiaCampus,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "CAMPUS PORTAL — verify current program",
  },
  {
    id: "capgemini-students",
    kind: "internship",
    title: "Capgemini Students & Graduates",
    provider: "Capgemini",
    tags: [
      "internship",
      "software",
      "cloud",
      "data",
      "ai",
      "cybersecurity",
      "consulting",
      "student",
      "graduate",
      "india",
    ],
    desc: "Official students-and-graduates route across technology and consulting career paths.",
    url: SOURCES.capgeminiStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current role/program",
  },
  {
    id: "sap-students",
    kind: "internship",
    title: "SAP Students & Graduate Opportunities",
    provider: "SAP",
    tags: [
      "internship",
      "software",
      "cloud",
      "data",
      "ai",
      "analytics",
      "enterprise",
      "student",
      "graduate",
    ],
    desc: "Official SAP job search for student and graduate positions; exact internship openings are listing-specific.",
    url: SOURCES.sapCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE JOB SEARCH — verify exact listing",
  },
  {
    id: "citi-students",
    kind: "internship",
    title: "Citi Student & Early-Career Opportunities",
    provider: "Citi",
    tags: [
      "internship",
      "software",
      "java",
      "python",
      "data",
      "finance",
      "risk",
      "cybersecurity",
      "student",
    ],
    desc: "Official Citi careers search for student and early-career technology, analytics and financial-services roles.",
    url: SOURCES.citiCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE JOB SEARCH — verify exact listing",
  },
  {
    id: "boa-students",
    kind: "internship",
    title: "Bank of America Student Careers",
    provider: "Bank of America",
    tags: [
      "internship",
      "software",
      "data",
      "finance",
      "risk",
      "cybersecurity",
      "student",
    ],
    desc: "Official Bank of America student careers hub for campus and early-career opportunities.",
    url: SOURCES.boaStudents,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE PORTAL — verify current program",
  },
  {
    id: "paypal-students",
    kind: "internship",
    title: "PayPal Student / Early-Career Opportunities",
    provider: "PayPal",
    tags: [
      "internship",
      "software",
      "data",
      "ai",
      "cybersecurity",
      "payments",
      "cloud",
      "student",
    ],
    desc: "Official PayPal careers search for current student and early-career opportunities; exact internships are listing-specific.",
    url: SOURCES.paypalCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE JOB SEARCH — verify exact listing",
  },
  {
    id: "uber-students",
    kind: "internship",
    title: "Uber Student & Technology Opportunities",
    provider: "Uber",
    tags: [
      "internship",
      "software",
      "python",
      "java",
      "data",
      "machine learning",
      "ai",
      "mobile",
      "student",
    ],
    desc: "Official Uber careers search for technology, data and student/early-career opportunities; exact internship listings vary by region and cycle.",
    url: SOURCES.uberCareers,
    sourceType: "OFFICIAL_PORTAL",
    freshness: "LIVE JOB SEARCH — verify exact listing",
  },
];
internshipResources.push(...expandedInternshipResources);

const expandedGuidanceResources = [
  {
    id: "goldman-prepare",
    kind: "guidance",
    title: "Goldman Sachs Student Preparation",
    provider: "Goldman Sachs",
    tags: [
      "resume",
      "interview",
      "finance",
      "engineering",
      "internship",
      "student",
    ],
    desc: "Official preparation guidance covering how to choose programs, apply and prepare for interviews.",
    url: SOURCES.goldmanStudents,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current process",
  },
  {
    id: "morgan-interview",
    kind: "guidance",
    title: "Morgan Stanley Interview Preparation",
    provider: "Morgan Stanley",
    tags: [
      "interview",
      "finance",
      "technology",
      "software",
      "research",
      "student",
    ],
    desc: "Official early-career interview preparation covering role research, firm/industry understanding and candidate preparation.",
    url: SOURCES.morganInterview,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — source controls current advice",
  },
  {
    id: "oracle-hiring",
    kind: "guidance",
    title: "Oracle Getting Hired",
    provider: "Oracle",
    tags: [
      "resume",
      "interview",
      "application",
      "internship",
      "graduate",
      "student",
    ],
    desc: "Official Oracle advice for resumes, technical interviews, behavioral interviews and internship preparation.",
    url: SOURCES.oracleHiring,
    sourceType: "OFFICIAL_GUIDANCE",
    freshness: "OFFICIAL — verify current advice",
  },
  {
    id: "cisco-ideathon",
    kind: "guidance",
    title: "Cisco Ideathon",
    provider: "Cisco",
    tags: [
      "hackathon",
      "networking",
      "software",
      "student",
      "internship",
      "problem solving",
    ],
    desc: "Official Cisco India Ideathon information; selected participants may receive internship/full-time opportunities, subject to Cisco's program terms.",
    url: SOURCES.ciscoIdeathon,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM PAGE — verify current cycle",
  },
  {
    id: "pwc-career-readiness",
    kind: "guidance",
    title: "PwC India Career Readiness Training",
    provider: "PwC India",
    tags: [
      "sap",
      "cloud",
      "technology",
      "internship",
      "student",
      "career readiness",
    ],
    desc: "Official PwC India program combining structured learning, assessment, interview readiness, internship and possible full-time pathways; program cycles are time-bound.",
    url: SOURCES.pwcCampus,
    sourceType: "OFFICIAL_PROGRAM",
    freshness: "PROGRAM CYCLE — verify current opening",
  },
];
if (typeof guidanceResources !== "undefined")
  guidanceResources.push(...expandedGuidanceResources);

const targetKindLabels = {
  internship: "Internship",
  job: "Job",
  graduate: "Graduate / Fresher",
  research: "Research",
};
const validTargetKinds = new Set(Object.keys(targetKindLabels));
function normalizeTargetKind(kind) {
  return validTargetKinds.has(kind) ? kind : "internship";
}
function targetKindLabel(kind) {
  return targetKindLabels[normalizeTargetKind(kind)];
}
function targetSteps(company, kind, roleId) {
  const focus =
    roleId === "data"
      ? "Python, SQL, statistics, data preparation and model evaluation"
      : roleId === "cyber"
        ? "networking, Linux, threat analysis, secure development and monitoring"
        : roleId === "webdesign"
          ? "user research, UI systems, accessibility and portfolio case studies"
          : "programming fundamentals, data structures, algorithms, APIs, testing and system design";
  const domain =
    /Goldman Sachs|Morgan Stanley|Citi|Bank of America|Mastercard|PayPal/.test(
      company,
    )
      ? "financial-services/payment concepts, data privacy, reliability and risk"
      : /Cisco|Intel|NVIDIA/.test(company)
        ? "systems, infrastructure, security and performance concepts relevant to the team"
        : /Oracle|SAP|Capgemini|Deloitte|PwC|EY|Accenture/.test(company)
          ? "enterprise technology, client/problem context and clear technical communication"
          : "the product/domain context named by the exact posting";
  const base = [
    `Select a current ${company} ${targetKindLabel(kind).toLowerCase()} opening and record the exact role, location, eligibility and application URL.`,
    `Map every required skill in that posting against your recognized HORIZON profile; do not mark a skill complete without evidence.`,
    `Close the core technical gap: ${focus}.`,
    "Practice problem solving with timed exercises and explain your reasoning, trade-offs and debugging process.",
    `Learn ${domain}.`,
    "Build one substantial project that demonstrates the most important missing skill, with Git history, tests/documentation and measurable evidence.",
    "Build a second project or contribution showing depth, collaboration, or production-style quality.",
    "Create a concise one-page resume with role-specific evidence instead of a generic tool list.",
    "Prepare behavioral examples covering teamwork, ownership, failure/learning and technical decision making.",
    "Practice role-specific technical questions and a project deep dive; use the employer's published preparation material where available.",
    `Apply through the official ${company} source only and save the exact listing in your application tracker.`,
    "Re-check the live posting immediately before submission and again before preparing for interviews because eligibility, location and status can change.",
  ];
  if (kind === "graduate")
    base.splice(
      8,
      0,
      "Prepare for fresher/graduate screening such as aptitude, coding, case, communication or domain assessments when the current employer program specifies them.",
    );
  if (kind === "research")
    base.splice(
      8,
      0,
      "Prepare a research/project portfolio, concise technical write-up and evidence of experimental or analytical thinking relevant to the exact research group.",
    );
  return base;
}

const expandedTargetPrograms = [];
const extraTargets = [
  ["Goldman Sachs", "goldman", ["internship", "job", "graduate"], "software"],
  [
    "Morgan Stanley",
    "morganstanley",
    ["internship", "job", "graduate"],
    "software",
  ],
  ["Cisco", "cisco", ["internship", "job", "graduate"], "cyber"],
  ["Intel", "intel", ["internship", "job", "research"], "software"],
  ["Oracle", "oracle", ["internship", "job", "graduate"], "software"],
  ["Atlassian", "atlassian", ["internship", "job", "graduate"], "software"],
  ["PwC India", "pwc", ["internship", "job", "graduate"], "systems"],
  ["EY India", "ey", ["internship", "job", "graduate"], "systems"],
  ["Deloitte India", "deloitte", ["internship", "job", "graduate"], "systems"],
  ["Capgemini", "capgemini", ["internship", "job", "graduate"], "systems"],
  ["SAP", "sap", ["internship", "job", "graduate"], "systems"],
  ["Citi", "citi", ["internship", "job", "graduate"], "data"],
  ["Bank of America", "boa", ["internship", "job", "graduate"], "data"],
  ["PayPal", "paypal", ["internship", "job", "graduate"], "software"],
  ["Uber", "uber", ["internship", "job"], "data"],
];
for (const [company, companyId, kinds, roleId] of extraTargets) {
  for (const kind of kinds) {
    const slug = company.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    expandedTargetPrograms.push({
      id: `${slug}-${kind}-${roleId}`,
      kind,
      company,
      companyId,
      title:
        kind === "internship"
          ? `${company} ${roleId === "software" ? "Software Engineering" : "Technology / Data"} Intern`
          : kind === "job"
            ? `${company} ${roleId === "software" ? "Software / Engineering" : "Technology / Data"} Job Path`
            : kind === "graduate"
              ? `${company} Graduate / Fresher Path`
              : `${company} Research Path`,
      roleId,
      tags: ["student", kind, roleId, company.toLowerCase()],
      source: companyResources.find((x) => x.id === companyId)?.url || "",
      sourceLabel: `${company} official ${targetKindLabel(kind)} route`,
      locationNote: `Use the exact ${company} posting/program to establish eligibility, location, degree and current status.`,
      steps: targetSteps(company, kind, roleId),
    });
  }
}
targetPrograms.push(...expandedTargetPrograms);

const targetCompanies = Object.fromEntries(
  careers.map((role) => [
    role.id,
    companyResources
      .filter((c) =>
        role.skillTags.some((s) =>
          c.tags.map(normalizeSkill).includes(normalizeSkill(s)),
        ),
      )
      .map((c) => c.title),
  ]),
);

const coursePlaybooks = {
  software: [
    ["GitHub Skills", "GitHub"],
    ["Python 3 Documentation", "Python Software Foundation"],
    ["React Learn", "React"],
    ["PostgreSQL Tutorial", "PostgreSQL"],
    ["Microsoft Learn", "Microsoft"],
    ["AWS Skill Builder", "AWS"],
  ],
  data: [
    ["Kaggle Learn", "Kaggle"],
    ["Python 3 Documentation", "Python Software Foundation"],
    ["PostgreSQL Tutorial", "PostgreSQL"],
    ["NPTEL Courses", "NPTEL / IITs / IISc"],
    ["Google Career Certificates", "Google"],
    ["Microsoft Learn", "Microsoft"],
  ],
  cyber: [
    ["Cisco Networking Academy", "Cisco"],
    ["OWASP Web Security Testing Guide", "OWASP"],
    ["Linux Foundation Training & Resources", "Linux Foundation"],
    ["Microsoft Learn", "Microsoft"],
    ["AWS Skill Builder", "AWS"],
  ],
  systems: [
    ["Microsoft Learn", "Microsoft"],
    ["PostgreSQL Tutorial", "PostgreSQL"],
    ["NPTEL Courses", "NPTEL / IITs / IISc"],
    ["Kaggle Learn", "Kaggle"],
    ["GitHub Skills", "GitHub"],
  ],
  webdesign: [
    ["MDN Learn Web Development", "MDN / Mozilla"],
    ["React Learn", "React"],
    ["Google Career Certificates", "Google"],
    ["YouTube — Google for Developers", "Google"],
    ["GitHub Skills", "GitHub"],
  ],
};

function isValidHttpUrl(url) {
  try {
    return new URL(url).protocol === "https:";
  } catch (e) {
    return false;
  }
}
function eventStatus(item) {
  const now = Date.now();
  const registration = item.registrationDeadline || item.deadline;
  if (registration) {
    const dt = new Date(registration).getTime();
    if (!Number.isNaN(dt))
      return now <= dt
        ? "OPEN · REGISTRATION TO " +
            new Date(dt).toLocaleDateString(undefined, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
        : "CLOSED · REGISTRATION ENDED";
  }
  if (item.startDate) {
    const sd = new Date(item.startDate).getTime();
    if (!Number.isNaN(sd))
      return now < sd
        ? "OPEN · STARTS " +
            new Date(sd).toLocaleDateString(undefined, {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
        : "LIVE / CHECK EVENT PAGE";
  }
  return "OPEN SOURCE PAGE";
}
function catalogHealthCheck() {
  const all = [
    ...courseResources,
    ...internshipResources,
    ...hackathonResources,
    ...companyResources,
    ...guidanceResources,
  ];
  const bad = all.filter(
    (x) =>
      !x.id ||
      !x.title ||
      !x.provider ||
      !x.desc ||
      !isValidHttpUrl(x.url) ||
      (x.altUrl && !isValidHttpUrl(x.altUrl)),
  );
  const badTargets = targetPrograms.filter(
    (x) =>
      !x.id ||
      !x.company ||
      !x.title ||
      !x.roleId ||
      !x.source ||
      !isValidHttpUrl(x.source) ||
      !companyResourceByName(x.company),
  );
  if (bad.length || badTargets.length)
    throw new Error(
      "Horizon catalog integrity failure: " +
        [...bad, ...badTargets].map((x) => x.title || x.id).join(", "),
    );
  if (hackathonResources.some((x) => x.status))
    throw new Error("Legacy hard-coded event status detected");
  return {
    records: all.length,
    targetPrograms: targetPrograms.length,
    trusted: true,
  };
}
const CATALOG_HEALTH = catalogHealthCheck();

const features = [
  [
    "01",
    "Profile Intelligence",
    "A structured student profile that becomes the input to every other module.",
    "profile",
  ],
  [
    "02",
    "Skill Calibration",
    "Adjust evidence-based self-ratings across technical, creative, analytical and communication dimensions.",
    "skills",
  ],
  [
    "03",
    "Interest Mapping",
    "Capture domains, topics and environments that genuinely interest you.",
    "profile",
  ],
  [
    "04",
    "Career Match Engine",
    "Calculate transparent profile-derived match signals against source-backed occupations; no fixed baseline score is stored.",
    "careers",
  ],
  [
    "05",
    "Career Explorer",
    "Search careers by title or required skills and inspect their source cards.",
    "careers",
  ],
  [
    "06",
    "Career Compare",
    "Compare two saved or selected paths without forcing a single winner.",
    "compare",
  ],
  [
    "07",
    "Saved Careers",
    "Maintain a living shortlist of careers worth researching further.",
    "saved",
  ],
  [
    "08",
    "Skill-Gap Audit",
    "See where your current skills intersect or miss the skills used by a target path.",
    "gaps",
  ],
  [
    "09",
    "Roadmap Generator",
    "Turn a target path into a four-stage action plan.",
    "roadmap",
  ],
  [
    "10",
    "Semester Planner",
    "Break a career direction into manageable academic-term actions.",
    "planner",
  ],
  [
    "11",
    "Project Studio",
    "Create portfolio evidence tied to skills and target paths.",
    "projects",
  ],
  [
    "12",
    "Portfolio Builder",
    "Keep track of which projects prove which skills.",
    "projects",
  ],
  [
    "13",
    "Application Tracker",
    "Track opportunities, stages and next actions in one pipeline.",
    "applications",
  ],
  [
    "14",
    "Weekly Planner",
    "Create and complete weekly actions with local persistence.",
    "planner",
  ],
  [
    "15",
    "Assessment Center",
    "Run lightweight work-style questions and record the result.",
    "assessment",
  ],
  [
    "16",
    "Career Journal",
    "Capture reflections, evidence and decisions as your interests evolve.",
    "journal",
  ],
  [
    "17",
    "Focus Mode",
    "Hide dashboard noise and keep only the current action visible.",
    "focus",
  ],
  [
    "18",
    "Progress Analytics",
    "Monitor profile, skill, task and evidence progress.",
    "analytics",
  ],
  [
    "19",
    "Market Radar",
    "Explore current source-labelled occupation growth and pay benchmarks.",
    "market",
  ],
  [
    "20",
    "Source Panel",
    "See exactly which public source a market fact came from.",
    "sources",
  ],
  [
    "21",
    "Theme Studio",
    "Switch among four light editorial visual themes.",
    "theme",
  ],
  [
    "22",
    "Local Persistence",
    "Keep the app usable offline after its fonts have loaded; store your workspace locally.",
    "settings",
  ],
  [
    "23",
    "Profile Export",
    "Download a portable JSON copy of your Horizon profile.",
    "settings",
  ],
  [
    "24",
    "Smart Search",
    "Press Ctrl/Cmd+K to jump directly to features, careers or actions.",
    "search",
  ],
  [
    "25",
    "Action Dashboard",
    "A home view that surfaces the highest-value next step for the current profile.",
    "home",
  ],
];

const defaultState = {
  name: "",
  email: "",
  field: "",
  goal: "Explore",
  interests: "",
  skills: [],
  saved: [],
  tasks: [],
  projects: [],
  applications: [],
  journal: [],
  skill: {
    technical: 0,
    creative: 0,
    analytical: 0,
    communication: 0,
  },
  assessment: [],
  targetRole: "",
  targetCompany: "",
  targetInternship: "",
  targetProgram: "",
  targetKind: "internship",
  theme: "atelier",
  focus: false,
};

let state;
try {
  state =
    JSON.parse(localStorage.getItem("horizon-real-state-v4") || "null") ||
    structuredClone(defaultState);
} catch (e) {
  state = structuredClone(defaultState);
}
state.targetProgram = state.targetProgram || "";
state.targetKind =
  state.targetKind || (state.targetInternship ? "internship" : "internship");

function save() {
  try {
    localStorage.setItem("horizon-real-state-v4", JSON.stringify(state));
  } catch (e) {}
}
function esc(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => t.classList.remove("show"), 2200);
}
function initials() {
  return (state.name || "Student")
    .split(/\s+/)
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
const SUPPORTED_SKILLS = new Set([
  ...Object.values(skillAliases),
  ...careers.flatMap((c) =>
    [...(c.skills || []), ...(c.skillTags || []), ...(c.demands || [])].map(
      normalizeSkill,
    ),
  ),
  ...courseResources.flatMap((x) => x.tags.map(normalizeSkill)),
  ...internshipResources.flatMap((x) => x.tags.map(normalizeSkill)),
  ...hackathonResources.flatMap((x) => x.tags.map(normalizeSkill)),
  ...companyResources.flatMap((x) => x.tags.map(normalizeSkill)),
]);
function profileSkillSet() {
  return new Set(
    (state.skills || [])
      .map(normalizeSkill)
      .filter((s) => SUPPORTED_SKILLS.has(s)),
  );
}
function parseSkillsInput(raw) {
  const parts = String(raw || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  const accepted = [],
    rejected = [],
    seen = new Set();
  for (const original of parts) {
    const canonical = normalizeSkill(original);
    if (!SUPPORTED_SKILLS.has(canonical)) rejected.push(original);
    else if (!seen.has(canonical)) {
      accepted.push(original);
      seen.add(canonical);
    }
  }
  return { accepted, rejected };
}
function validateProfileFields({ name, email, field, interests, skills }) {
  const errors = [];
  if (name && name.length > 80) errors.push("Name is too long.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.push("Enter a valid email address or leave it blank.");
  if (field && field.length > 120) errors.push("Field / degree is too long.");
  if (interests && interests.length > 600)
    errors.push("Interests are limited to 600 characters.");
  if (skills.length > 24) errors.push("Enter at most 24 skills.");
  return errors;
}

function profilePercent() {
  let n = 0;
  if (state.name) n += 15;
  if (state.email) n += 10;
  if (state.field) n += 15;
  if (state.goal) n += 10;
  if (state.interests) n += 15;
  if (state.skills.length >= 3) n += 25;
  if (state.skills.length >= 1) n += 10;
  return Math.min(100, n);
}
function nextAction() {
  if (!state.name) return "Create your profile";
  if (!state.skills.length)
    return "Add your real skills — do not add a skill just to improve a score";
  if (!state.targetRole) return "Choose a target role, company and target type";
  if (!state.projects.length)
    return "Build one project that proves a target skill";
  if (!state.tasks.some((x) => !x.done)) return "Generate a target roadmap";
  return "Finish one high-impact task this week";
}
function profileTokens() {
  const parts = [
    ...(state.skills || []),
    ...(state.interests || "").split(","),
    ...(state.field || "").split(/[\s,/]+/),
  ];
  const out = new Set();
  parts
    .map(normalizeSkill)
    .filter(Boolean)
    .forEach((x) => out.add(x));
  return out;
}

function roleMatch(c) {
  const mine = profileSkillSet();
  if (!mine.size) return 0;
  const core = new Set((c.skills || []).map(normalizeSkill));
  const tags = new Set((c.skillTags || []).map(normalizeSkill));
  const coreHits = [...core].filter((s) => mine.has(s)).length;
  const tagHits = [...tags].filter((s) => mine.has(s)).length;
  return Math.round(
    Math.min(
      100,
      (coreHits / Math.max(core.size, 1)) * 75 +
        (tagHits / Math.max(tags.size, 1)) * 25,
    ),
  );
}
function ranked() {
  return careers
    .map((c) => ({ ...c, score: roleMatch(c) }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
function fitFor(c) {
  return roleMatch(c);
}
function eligibleCompaniesForRole(role) {
  return (targetCompanies[role.id] || []).filter((name) =>
    companyResourceByName(name),
  );
}
function internshipTargetFor(role) {
  return (
    (role && role.internshipTitles && role.internshipTitles[0]) ||
    (role ? role.title + " Intern" : "Internship")
  );
}
function targetProgramById(id) {
  return targetPrograms.find((x) => x.id === id) || null;
}
function targetProgramsForRole(role, kind) {
  const k = normalizeTargetKind(kind);
  return targetPrograms.filter(
    (p) =>
      p.roleId === role.id && p.kind === k && companyResourceByName(p.company),
  );
}
function currentTargetProgram() {
  return targetProgramById(state.targetProgram);
}
function targetProgramEligible(program) {
  if (!program) return false;
  const role = careers.find((c) => c.id === program.roleId);
  return (
    !!role &&
    roleMatch(role) > 0 &&
    !!companyResourceByName(program.company) &&
    /^https:\/\//.test(program.source || "")
  );
}
function sourceTargetLink(program) {
  if (!program) return "";
  return program.source || companyResourceByName(program.company)?.url || "";
}
function syncTargetDefaults() {
  const candidates = ranked().filter((x) => x.score > 0);
  if (!candidates.length) {
    state.targetRole = "";
    state.targetInternship = "";
    state.targetCompany = "";
    state.targetProgram = "";
    save();
    return null;
  }
  const top = candidates[0];
  const current = careers.find((c) => c.id === state.targetRole);
  if (!current || roleMatch(current) <= 0) state.targetRole = top.id;
  const role = careers.find((c) => c.id === state.targetRole) || top;
  const kind = normalizeTargetKind(state.targetKind);
  const matching = targetProgramsForRole(role, kind).filter(
    targetProgramEligible,
  );
  const existing = targetProgramById(state.targetProgram);
  if (
    !existing ||
    existing.roleId !== role.id ||
    existing.kind !== kind ||
    !targetProgramEligible(existing)
  ) {
    const sameCompany = matching.find((p) => p.company === state.targetCompany);
    state.targetProgram = (sameCompany || matching[0] || null)?.id || "";
  }
  const program = currentTargetProgram();
  if (program) {
    state.targetCompany = program.company;
    state.targetInternship = program.title;
  } else {
    state.targetCompany =
      state.targetCompany || eligibleCompaniesForRole(role)[0] || "";
    state.targetInternship = internshipTargetFor(role);
  }
  save();
  return role;
}
function getTargetRole() {
  return syncTargetDefaults();
}
function companyResourceByName(name) {
  return companyResources.find((x) => x.title === name) || null;
}
function setTargetKind(kind) {
  const role = getTargetRole();
  if (!role) return;
  state.targetKind = normalizeTargetKind(kind);
  state.targetProgram = "";
  const candidates = targetProgramsForRole(role, state.targetKind).filter(
    targetProgramEligible,
  );
  if (candidates[0]) {
    state.targetProgram = candidates[0].id;
    state.targetCompany = candidates[0].company;
    state.targetInternship = candidates[0].title;
  }
  save();
  route("home");
  toast("Target type changed");
}
function setTargetProgram(id) {
  const program = targetProgramById(id);
  if (!program || !targetProgramEligible(program)) {
    toast(
      "That target is not currently compatible with your recognized skills.",
    );
    return;
  }
  state.targetProgram = id;
  state.targetKind = program.kind;
  state.targetRole = program.roleId;
  state.targetCompany = program.company;
  state.targetInternship = program.title;
  save();
  route("home");
  toast("Target set — roadmap recalculated");
}
function setTargetRole(id) {
  const role = careers.find((c) => c.id === id);
  if (!role || roleMatch(role) <= 0) {
    toast("That target has no recognized skill match to your profile.");
    return;
  }
  state.targetRole = id;
  const kind = normalizeTargetKind(state.targetKind);
  const programs = targetProgramsForRole(role, kind).filter(
    targetProgramEligible,
  );
  state.targetProgram = (programs[0] || null)?.id || "";
  state.targetCompany =
    programs[0]?.company || eligibleCompaniesForRole(role)[0] || "";
  state.targetInternship = programs[0]?.title || internshipTargetFor(role);
  save();
  route("home");
  toast("Target pathway updated from your profile");
}
function setTargetInternship(title) {
  const role = getTargetRole();
  if (!role) return;
  const program = targetPrograms.find(
    (p) =>
      p.title === title &&
      p.roleId === role.id &&
      p.kind === normalizeTargetKind(state.targetKind || "internship"),
  );
  if (!program) {
    toast("That target is outside this source-backed target catalog.");
    return;
  }
  setTargetProgram(program.id);
}
function setTargetCompany(company) {
  const role = getTargetRole();
  if (!role) return;
  const program = targetPrograms.find(
    (p) =>
      p.company === company &&
      p.roleId === role.id &&
      p.kind === normalizeTargetKind(state.targetKind || "internship"),
  );
  if (!program) {
    toast(
      "Choose a company represented by a verified target route for this role.",
    );
    return;
  }
  setTargetProgram(program.id);
}

function themeButtons() {
  return ["atelier", "spruce", "riviera", "fig"]
    .map(
      (t) =>
        `<button class="mini ${state.theme === t ? "primary" : ""}" onclick="setTheme('${t}')">${t[0].toUpperCase() + t.slice(1)}</button>`,
    )
    .join("");
}
function setTheme(t) {
  state.theme = t;
  document.documentElement.dataset.theme = t;
  save();
  toast("Theme switched");
}
function nav() {
  return `<div class="topline"><span>HORIZON / STUDENT CAREER INTELLIGENCE</span><span id="clock"></span></div>
 <div class="shell nav">
  <button class="brand" style="border:0;background:transparent" onclick="route('home')"><div class="logo">H</div><div><h1>HORIZON</h1><span>CAREER INTELLIGENCE</span></div></button>
  <div class="navlinks">
   <button onclick="route('home')">Home</button>
   <button onclick="route('discover')">Discover</button>
   <button onclick="route('target')">Target & Roadmap</button>
   <button onclick="route('courses')">Course</button>
   <button onclick="route('internships')">Internship</button>
   <button onclick="route('hackathons')">Hackathon</button>
   <button onclick="route('companies')">Company Offers</button>
   <button onclick="route('guidance')">Guidance</button>
   <button onclick="route('workspace')">Workspace</button>
   <button onclick="route('market')">Market</button>
   <button onclick="route('sources')">Sources</button>
  </div>
  <button class="ghost" onclick="openCommand()">⌘ K</button>
  <button class="ghost" onclick="openProfile()">${esc(initials())}</button>
  <button class="ghost" onclick="logoutToLogin()">Login / Switch</button>
 </div>`;
}
function shell(body) {
  document.getElementById("root").innerHTML =
    nav() +
    `<main class="shell page">${body}<div class="footer"><span>HORIZON • local-first student workspace</span><span>Market figures are source-labelled and geography-specific.</span></div></main>`;
}
function route(name) {
  const body =
    name === "home"
      ? homeView()
      : name === "discover"
        ? discoverView()
        : name === "target"
          ? `<div class="sectionhead"><span class="kicker">TARGET / ROADMAP</span><h3>Choose the destination. Build the route.</h3><p>Select an internship or job target after entering recognized skills. HORIZON then generates a target-specific roadmap with skill gaps, project evidence, interview preparation and application steps.</p></div>${targetPlannerView()}`
          : name === "workspace"
            ? workspaceView()
            : name === "market"
              ? marketView()
              : name === "sources"
                ? sourcesView()
                : resourceView(name);
  shell(`<section class="view active" id="view-${name}">${body}</section>`);
  if (name === "discover") renderCareerResults();
  if (name === "workspace") setPanel("overview");
  if (name === "market") drawChart();
  updateClock();
}
function skillTokens() {
  return [
    ...(state.skills || []),
    ...(state.interests || "").split(","),
    ...(state.field || "").split(" "),
  ]
    .join(" ")
    .toLowerCase()
    .split(/[^a-z0-9+#.-]+/)
    .filter(Boolean);
}

function resourceScore(item) {
  const mine = profileSkillSet();
  if (!mine.size) return 0;
  const tags = new Set((item.tags || []).map(normalizeSkill));
  return (
    Math.round(
      ([...mine].filter((s) => tags.has(s)).length / Math.max(mine.size, 1)) *
        100,
    ) / 100
  );
}
function recommended(items, limit = 3) {
  if (!profileSkillSet().size) return [];
  return items
    .map((x) => ({ ...x, _score: resourceScore(x) }))
    .filter((x) => x._score > 0)
    .sort((a, b) => b._score - a._score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
function starterItems(items, limit = 3) {
  return items.slice(0, limit).map((x) => ({ ...x, _score: 0 }));
}
function resourceCard(item) {
  const score = item._score || resourceScore(item),
    status = item.kind === "hackathon" ? eventStatus(item) : item.freshness;
  return `<article class="card resource-card"><span class="source-pill">${esc(item.provider || "Public source")}</span>${status ? `<span class="badge" style="margin-top:7px;width:max-content">${esc(status)}</span>` : ""}<h4>${esc(item.title)}</h4><p>${esc(item.desc)}</p><div class="resource-meta">${score ? `<span class="tag">${Math.round(score * 100)}% skill overlap</span>` : ""}${(
    item.tags || []
  )
    .filter((t) => profileSkillSet().has(normalizeSkill(t)))
    .slice(0, 3)
    .map((t) => `<span class="tag">${esc(t)}</span>`)
    .join(
      "",
    )}</div><div class="resource-links"><a class="resource-link" href="${item.url}" target="_blank" rel="noopener">Open source ↗</a>${item.alt ? `<a class="resource-link" href="${item.altUrl}" target="_blank" rel="noopener">${esc(item.alt)} ↗</a>` : ""}</div><div class="quality-line"><span>${esc(item.sourceType || "PUBLIC_SOURCE")}</span><span>Catalog checked ${DATA_META.verifiedAt}</span></div></article>`;
}
function resourceSection(title, kicker, items, routeName) {
  const recs = profileSkillSet().size
    ? recommended(items, 3)
    : starterItems(items, 3);
  return `<section class="resource-section"><div class="resource-head"><div><span class="kicker">${esc(kicker)}</span><h3>${esc(title)}</h3><p style="color:var(--muted);font-size:12px;margin-top:5px">${state.skills.length ? `Matched only to recognized skills: ${esc(state.skills.join(", "))}` : "Starter sources shown below. Enter recognized skills to personalize the ranking."}</p></div><button class="btn" onclick="route('${routeName}')">See all →</button></div><div class="resource-grid">${recs.length ? recs.map(resourceCard).join("") : `<div class="empty" style="grid-column:1/-1">No source-backed match yet. Add recognized skills such as Python, SQL, JavaScript, Networking, Figma or Statistics.</div>`}</div></section>`;
}
function targetCompanyLink(role, company) {
  const base = companyResourceByName(company);
  if (base) return base.url;
  const found = (role.internshipLinks || []).find((x) => x.company === company);
  return found ? found.url : "";
}

function targetPlannerView() {
  const role = getTargetRole();
  if (!role)
    return `<section class="section"><div class="card target-card"><span class="verified-source">TARGET PLANNER LOCKED</span><h3 style="font:800 28px Fraunces;margin:9px 0">Choose a real target after entering recognized skills.</h3><p style="color:var(--muted);font-size:13px">Example: <b>Software Engineering Intern → Google</b> or <b>Software Engineer → Mastercard</b>. Horizon will only show target programs that have a verified employer/program source and a positive match to your recognized skill profile.</p><div class="danger-note" style="margin-top:12px">Unknown skills do not create matches. No current vacancy is implied by a target selection.</div><div class="target-actions"><button class="btn primary" onclick="openProfile()">Enter / update skills →</button><button class="btn" onclick="route('guidance')">Open guidance →</button></div></div></section>`;
  const kind = normalizeTargetKind(state.targetKind);
  const programs = targetProgramsForRole(role, kind).filter(
    targetProgramEligible,
  );
  const allRolePrograms = targetProgramsForRole(role, kind);
  const program =
    currentTargetProgram() || programs[0] || allRolePrograms[0] || null;
  const missing = role.skills.filter(
    (s) => !profileSkillSet().has(normalizeSkill(s)),
  );
  const targetCompany = companyResourceByName(
    program?.company || state.targetCompany,
  );
  const steps = buildTargetRoadmap(program, role);
  return `<section class="section"><div class="sectionhead"><span class="kicker">TARGET PLANNER / HOME</span><h3>Pick the destination. HORIZON builds the route.</h3><p>The target is a research and preparation plan, not a promise of employment. Choose internship, job, graduate/fresher or research routes; employer pages remain the source of truth for eligibility, location, deadlines and live openings.</p></div>
          <div class="card target-card" style="margin-bottom:15px"><div class="target-wrap"><div><span class="verified-source">TARGET TYPE</span><div class="target-actions" style="margin-top:8px">${Object.entries(
            targetKindLabels,
          )
            .map(
              ([k, label]) =>
                `<button class="btn ${kind === k ? "primary" : ""}" onclick="setTargetKind('${k}')">${label}</button>`,
            )
            .join(
              "",
            )}</div></div><div><span class="verified-source">PROFILE SIGNAL</span><div class="quality-line"><span>${role.title}</span><b>${fitFor(role)}% skill match</b></div><div class="progress" style="margin-top:7px"><i style="width:${fitFor(role)}%"></i></div></div></div>
          <div style="height:14px"></div><label class="source">Target company + role</label><select class="field target-select" onchange="setTargetProgram(this.value)">${programs.length ? programs.map((p) => `<option value="${p.id}" ${p.id === program?.id ? "selected" : ""}>${esc(p.company)} — ${esc(p.title)}</option>`).join("") : allRolePrograms.map((p) => `<option disabled>${esc(p.company)} — ${esc(p.title)} • complete skill match required</option>`).join("")}</select><div class="quality-line"><span>${program ? esc(program.locationNote || "") : "No eligible target route yet."}</span><span>${program ? esc(program.sourceLabel) : "Enter more recognized skills"}</span></div></div>
          ${
            program
              ? `<div class="target-wrap"><article class="card target-card"><span class="verified-source">TARGET DETAILS</span><h3 style="font:800 27px Fraunces;margin:8px 0">${esc(program.company)} · ${esc(program.title)}</h3><div class="target-grid"><div class="target-stat"><span class="source">Core skills matched</span><b>${role.skills.length - missing.length}/${role.skills.length}</b></div><div class="target-stat"><span class="source">Current gaps</span><b>${missing.length}</b></div><div class="target-stat"><span class="source">Roadmap stages</span><b>${steps.length}</b></div></div><div class="tags">${(
                  program.tags || []
                )
                  .slice(0, 10)
                  .map(
                    (s) =>
                      `<span class="tag">${profileSkillSet().has(normalizeSkill(s)) ? "✓ " : ""}${esc(s)}</span>`,
                  )
                  .join(
                    "",
                  )}</div><div class="live-note"><b>Source discipline:</b> target program details are based on the linked employer/program page. HORIZON does not claim that this exact opening is available to you now.</div><div class="target-actions"><a class="btn primary" href="${esc(sourceTargetLink(program))}" target="_blank" rel="noopener">Open official target source ↗</a>${targetCompany ? `<a class="btn" href="${esc(targetCompany.url)}" target="_blank" rel="noopener">Company careers ↗</a>` : ""}</div></article><article class="card target-card"><span class="verified-source">YOUR NEXT 3 MOVES</span><div class="list" style="margin-top:9px">${steps
                  .slice(0, 3)
                  .map(
                    (st, i) =>
                      `<div class="listrow"><span class="badge">${String(i + 1).padStart(2, "0")}</span><b style="flex:1">${esc(st.title)}</b></div>`,
                  )
                  .join(
                    "",
                  )}</div><div class="target-actions"><button class="btn primary" onclick="generateTargetRoadmap('${esc(role.id)}')">Add full roadmap to planner</button><button class="btn" onclick="route('courses')">Matched learning</button></div></article></div>
          <div class="card target-card" style="margin-top:15px"><span class="kicker">COMPLETE TARGET ROADMAP</span><h3 style="font:800 30px Fraunces;margin:7px 0">${esc(program.company)} → ${esc(program.title)}</h3><p style="color:var(--muted);font-size:12px">Every stage ends in evidence. The roadmap adapts its gap work to the skills you entered and keeps employer-specific requirements tied to the official source.</p><div class="roadmap-track">${steps.map((st, i) => `<div class="roadmap-node"><div class="num">STAGE ${String(i + 1).padStart(2, "0")}</div><h4>${esc(st.title)}</h4><p>${esc(st.body)}</p>${st.skill ? `<span class="tag">${esc(st.skill)}</span>` : ""}${st.source ? `<div class="source" style="margin-top:7px">${esc(st.source)}</div>` : ""}</div>`).join("")}</div>${missing.length ? `<div class="danger-note" style="margin-top:12px"><b>Priority gaps:</b> ${esc(missing.join(", "))}. Close these before treating the target as application-ready.</div>` : `<div class="live-note"><b>Core role coverage:</b> every core occupation skill is recognized on the current profile. Shift effort to evidence, interviews and target-specific requirements.</div>`}</div>`
              : ""
          }</section>`;
}

function buildTargetRoadmap(program, role) {
  if (!role) return [];
  const mine = profileSkillSet();
  const missing = role.skills.filter((s) => !mine.has(normalizeSkill(s)));
  const steps = [];
  const add = (title, body, skill, source) =>
    steps.push({ title, body, skill, source });
  add(
    "Validate the exact target",
    "Open the employer/program source, confirm location, degree status, graduation window, work authorization and any role-specific prerequisites before spending time on the plan.",
    "Eligibility",
    program?.sourceLabel || "Employer source",
  );
  if (missing.length)
    add(
      "Close your highest-value gaps",
      "Start with the missing core skills that block the target role. Practice each through a small task and keep evidence in the planner.",
      missing.slice(0, 4).join(" / "),
      "Profile-derived gap audit",
    );
  else
    add(
      "Strengthen depth where it matters",
      "Your current profile covers the occupation's core skills. Increase depth rather than adding random tools.",
      role.skills.slice(0, 4).join(" / "),
      "Occupation pathway",
    );
  add(
    "Master the technical foundation",
    "Use deliberate practice for coding, debugging, DSA, databases, APIs and testing at the level appropriate to the target role.",
    role.demands?.slice(0, 4).join(" / ") ||
      role.skills.slice(0, 4).join(" / "),
    "Career pathway",
  );
  if (program?.id.includes("mastercard"))
    add(
      "Learn the Mastercard-shaped domain",
      "Build conceptual fluency in payments, security, reliability, data/AI and scalable digital commerce; choose the parts named by the exact listing.",
      "Payments / Security / Scale",
      "Mastercard engineering sources",
    );
  else if (program?.company === "Google")
    add(
      "Add Google-relevant engineering depth",
      "For software roles, practice multiple programming languages, DSA, Unix/Linux and one deeper systems area such as distributed systems, AI/ML, networking or security.",
      "Languages / DSA / Systems",
      "Google current software-intern/job signals",
    );
  else if (program?.company === "JPMorgan Chase")
    add(
      "Connect technology to business",
      "Practice explaining how your technical solution affects customers, clients, risk or operations; the official technology internship emphasizes both technical and business skills.",
      "Technical + business context",
      "JPMorgan program source",
    );
  else
    add(
      "Build target-domain context",
      "Learn the business/domain ideas that appear in the exact target listing so your technical work is easier to connect to impact.",
      program?.company || role.title,
      "Target source",
    );
  add(
    "Build project #1",
    "Ship one end-to-end project that proves the most important missing or target-specific capability. Use a real repository, tests and a concise README.",
    missing[0] || role.skills[0],
    "Portfolio evidence",
  );
  add(
    "Build project #2",
    "Add a second project that demonstrates a different dimension: scale, data, security, UX, cloud, research or product thinking depending on the target.",
    missing[1] || role.skills[1] || role.skills[0],
    "Portfolio evidence",
  );
  add(
    "Create proof",
    "Turn project work into evidence: repo links, architecture diagram, tests, demo, metrics, design rationale and a two-minute explanation.",
    "Evidence",
    "Portfolio standard",
  );
  add(
    "Prepare the resume",
    "Make the target role obvious in the first third of the resume. Use measurable bullets and only claim skills you can demonstrate.",
    "Resume",
    "Application readiness",
  );
  add(
    "Prepare interviews",
    "Practice role-specific coding/technical questions plus behavioral stories about teamwork, ownership, debugging, failure, learning and trade-offs.",
    "Interview",
    "Employer guidance + role practice",
  );
  add(
    "Apply from the source of truth",
    "Use the exact employer listing or program page. Record the URL, application date, role title and status in HORIZON's application tracker.",
    "Application",
    "Employer source",
  );
  add(
    "Re-check and iterate",
    "Open the official source again before each application. Requirements, location, deadlines and availability can change; adjust the roadmap to the current posting.",
    "Re-verification",
    "Live employer source",
  );
  return steps;
}

function addTargetSkillTask(skill, roleId) {
  const role = careers.find((c) => c.id === roleId) || getTargetRole();
  const title = `Strengthen ${skill} for ${internshipTargetFor(role)}`;
  if (!state.tasks.some((t) => t.title === title)) {
    state.tasks.push({ title, done: false });
    save();
    toast("Gap action added");
  }
  rerenderWorkspace("planner");
}

function generateTargetRoadmap(roleId) {
  const role = careers.find((c) => c.id === roleId) || getTargetRole();
  const program = currentTargetProgram();
  if (!role) {
    toast("Add recognized skills before generating a roadmap.");
    return;
  }
  const steps = buildTargetRoadmap(program, role);
  const existing = new Set(state.tasks.map((t) => t.title));
  steps.forEach((s, i) => {
    const title = `Target ${program ? program.company : "Path"} — Stage ${i + 1}: ${s.title}`;
    if (!existing.has(title)) state.tasks.push({ title, done: false });
  });
  (role.skills || [])
    .filter((s) => !profileSkillSet().has(normalizeSkill(s)))
    .forEach((s) => {
      const title = `Close target skill gap: ${s} for ${program ? program.title : internshipTargetFor(role)}`;
      if (!existing.has(title)) state.tasks.push({ title, done: false });
    });
  save();
  toast("Complete target roadmap added to planner");
  rerenderWorkspace("planner");
}

function homeView() {
  const top = getTargetRole();
  const current = new Date().toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  if (!top)
    return `<div class="hero"><div><span class="kicker">PERSONAL CAREER INTELLIGENCE / 2026</span><h2>Make your <em>next move</em> visible.</h2><p>Horizon maps recognized skills to source-backed careers, learning resources, internship portals, hackathons and company career pages. Empty or unsupported input never creates a fake match.</p><div class="actions"><button class="btn primary" onclick="openProfile()">Enter my skills →</button><button class="btn" onclick="route('target')">Choose target & roadmap →</button><button class="btn" onclick="route('sources')">Review data sources</button></div></div><div class="card sim"><div class="simtop"><div><span class="kicker">MATCH ENGINE</span><h3 style="font:800 26px Fraunces;margin-top:5px">Waiting for recognized skills</h3></div><span class="badge">NO BASELINE</span></div><div class="metric"><span>Data rule</span><b style="font-size:17px">No recognized skills → no target → no invented offer</b></div><div class="quality-line"><span>Input validation is active</span><span>Catalog checked ${DATA_META.verifiedAt}</span></div></div></div>${targetPlannerView()}${resourceSection("Courses that match your skills", "COURSE", courseResources, "courses")}${resourceSection("Internships & student opportunities", "INTERNSHIP", internshipResources, "internships")}${resourceSection("Hackathons to build evidence", "HACKATHON", hackathonResources, "hackathons")}${resourceSection("Company career portals", "COMPANY OFFERS", companyResources, "companies")}`;
  const demandSkills = top.demands || top.skills;
  const missing = (top.skills || []).filter(
    (s) => !profileSkillSet().has(normalizeSkill(s)),
  );
  return `<div class="hero">
          <div><span class="kicker">PERSONAL CAREER INTELLIGENCE / 2026</span>
            <h2>Make your <em>next move</em> visible.</h2>
            <p>Horizon maps the skills you actually enter to source-backed career requirements, learning providers, internship portals, hackathons and company career pages. No fabricated candidate data, job IDs or “offers.”</p>
            <div class="actions"><button class="btn primary" onclick="openProfile()">Build / update profile →</button><button class="btn" onclick="route('discover')">Explore careers</button></div>
            <div class="stats"><div class="stat"><b>${profilePercent()}%</b><span>Profile completeness</span></div><div class="stat"><b>${state.saved.length}</b><span>Saved paths</span></div><div class="stat"><b>${state.tasks.filter((x) => !x.done).length}</b><span>Open actions</span></div><div class="stat"><b>${CATALOG_HEALTH.records}</b><span>Verified source records</span></div><div class="stat"><b>${CATALOG_HEALTH.targetPrograms}</b><span>Target pathways</span></div></div>
          </div>
          <div class="card sim" id="tilt">
            <div class="simtop"><div><span class="kicker">PROFILE MATCH</span><h3 style="font:800 26px Fraunces;margin-top:5px">${esc(top.title)}</h3></div><span class="badge">${fitFor(top)}% MATCH</span></div>
            <div class="skillgrid">${Object.entries(state.skill)
              .map(
                ([k, v]) =>
                  `<div class="metric"><span>${k}</span><b>${v}%</b><div class="progress" style="margin-top:8px"><i style="width:${v}%"></i></div></div>`,
              )
              .join("")}</div>
            <div style="height:12px"></div><div class="metric"><span>Next useful action</span><b style="font-size:16px">${esc(nextAction())}</b></div>
            <div class="quality-line"><span>Match score is calculated from your profile</span><span>${state.skills.length ? "No static baseline" : "Enter skills to calculate"}</span></div>
          </div>
        </div>

        ${targetPlannerView()}

        <section class="section">
          <div class="sectionhead"><span class="kicker">CAREER SNAPSHOT</span><h3>Profile → growth → opportunity → gap → track.</h3><p>The path is built around the data you provide instead of a fake student record.</p></div>
          <div class="intel-grid">
            <article class="card intel-card wide"><span class="kicker">PROFILE</span><h4>${esc(state.name || "Your profile")} / ${esc(state.field || "add your field")}</h4><p>${esc(state.interests || "Add interests so the recommendation layer can use them.")}</p><div class="tags">${(state
              .skills.length
              ? state.skills
              : ["Add real skills"]
            )
              .slice(0, 7)
              .map((s) => `<span class="tag">${esc(s)}</span>`)
              .join(
                "",
              )}</div><button class="mini" onclick="openProfile()">Update profile ↗</button></article>
            <article class="card intel-card"><span class="kicker">GROWTH</span><div class="intel-value">${top.growth}%</div><p>Current U.S. BLS projection for the occupation, 2025–35.</p><button class="mini" onclick="route('market')">Market radar ↗</button></article>
            <article class="card intel-card"><span class="kicker">TARGET INTERNSHIP</span><div style="font:800 22px Fraunces">${esc(internshipTargetFor(top))}</div><p>Target title generated from the selected role; it is not presented as a guaranteed opening.</p><button class="mini" onclick="route('internships')">Check live portals ↗</button></article>
            <article class="card intel-card"><span class="kicker">DEMANDS</span><h4>What the path asks for</h4><div class="tags">${demandSkills
              .slice(0, 7)
              .map((s) => `<span class="tag">${esc(s)}</span>`)
              .join(
                "",
              )}</div><p>Requirements are anchored to the occupation record and current employer-signal sources where available.</p></article>
            <article class="card intel-card"><span class="kicker">SKILL SET</span><h4>Your current evidence</h4><div class="tags">${(state
              .skills.length
              ? state.skills
              : ["No skills entered"]
            )
              .slice(0, 7)
              .map((s) => `<span class="tag">${esc(s)}</span>`)
              .join(
                "",
              )}</div><button class="mini" onclick="rerenderWorkspace('skills')">Calibrate ↗</button></article>
            <article class="card intel-card"><span class="kicker">GAP</span><div class="intel-value">${missing.length}</div><p>Current missing core skill tags for the target role.</p><button class="mini" onclick="rerenderWorkspace('gaps')">Audit gap ↗</button></article>
            <article class="card intel-card wide"><span class="kicker">TRACK</span><h4>${esc((top.tracks || ["Explore a track"])[0])} → ${(top.tracks || []).slice(1, 4).map(esc).join(" → ")}</h4><p>Possible directions inside ${esc(top.title)}; the app keeps this as a research map, not a ranking.</p><div class="tags">${(top.tracks || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></article>
          </div>
        </section>

        ${resourceSection("Courses that match your skills", "COURSE", courseResources, "courses")}
        ${resourceSection("Internships & student opportunities", "INTERNSHIP", internshipResources, "internships")}
        ${resourceSection("Hackathons to build evidence", "HACKATHON", hackathonResources, "hackathons")}
        ${resourceSection("Company career portals", "COMPANY OFFERS", companyResources, "companies")}

        <section class="section"><div class="sectionhead"><span class="kicker">ROLE-SPECIFIC LEARNING</span><h3>Suggested learning sequence.</h3><p>Horizon filters the course catalog again using the selected target role, not just a generic tag cloud.</p></div>
          <div class="resource-grid">${(coursePlaybooks[top.id] || [])
            .map((x) => {
              const item = courseResources.find((r) => r.title === x[0]);
              return item
                ? resourceCard({ ...item, _score: resourceScore(item) })
                : "";
            })
            .join("")}</div>
        </section>

        <section class="section">
          <div class="sectionhead"><span class="kicker">25-MODULE WORKSPACE</span><h3>Tools stay behind the career journey.</h3><p>They support the profile, gap audit, roadmap, projects and applications without pretending to be real external records.</p></div>
          <div class="module-stream">${features.map((f) => `<button class="module-pill" onclick="openFeature('${f[3]}','${esc(f[1])}')"><span>${f[0]} / MODULE</span><b>${esc(f[1])}</b></button>`).join("")}</div>
        </section>

        <section class="section"><div class="sectionhead"><span class="kicker">RIGHT NOW</span><h3>${esc(state.name || "Student")}, start here.</h3><p>${esc(nextAction())}</p></div>
          <div class="bento"><div class="card"><div class="profile-head"><div class="avatar">${esc(initials())}</div><div><span class="kicker">PROFILE</span><h3 style="font:800 27px Fraunces">${esc(state.field || "Your field")}</h3><p style="color:var(--muted);font-size:12px">${esc(state.interests || "Add your interests to personalize your map.")}</p></div></div><div style="height:14px"></div><div class="progress"><i style="width:${profilePercent()}%"></i></div><div class="source" style="margin-top:7px">${profilePercent()}% complete</div></div>
          <div class="card"><span class="kicker">TARGET ROLE</span><h3 style="font:800 27px Fraunces;margin:6px 0">${esc(top.title)}</h3><p style="color:var(--muted);font-size:13px">${esc(top.desc)}</p><div class="tags">${top.skills.map((s) => `<span class="tag">${profileSkillSet().has(normalizeSkill(s)) ? "✓ " : ""}${esc(s)}</span>`).join("")}</div><button class="btn" onclick="openCareer('${top.id}')">Inspect pathway →</button></div></div>
        </section>
        <div class="live-note"><b>Data discipline:</b> Horizon uses source-backed occupation benchmarks and official/public opportunity portals. Live openings can close or change, so the source page is always authoritative. This build was checked on ${current}. No fake job IDs, candidate profiles or guaranteed offers are stored.</div>`;
}

function careerCard(c) {
  return `<article class="card career"><span class="score">${fitFor(c)}% PROFILE MATCH</span><h4>${esc(c.title)}</h4><p>${esc(c.desc)}</p><div class="tags">${c.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div><div style="font-size:10px;color:var(--soft);margin:8px 0">${c.growth}% growth benchmark • ${esc(c.pay)}</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="mini" onclick="openCareer('${c.id}')">Inspect</button><button class="mini" onclick="toggleSave('${c.id}')">${state.saved.includes(c.id) ? "★ Saved" : "☆ Save"}</button><button class="mini" onclick="googleCareer('${c.id}')">Google ↗</button></div></article>`;
}

function discoverView() {
  return `<div class="sectionhead"><span class="kicker">CAREER EXPLORER</span><h3>Search the map.</h3><p>Search local occupation records, inspect skills, save a path or send a research query to Google.</p></div>
 <div class="card"><div class="controls"><input id="careerSearch" class="field search" placeholder="Search career or skill…" oninput="renderCareerResults()"><select id="careerSort" class="field" onchange="renderCareerResults()"><option value="fit">Fit signal</option><option value="growth">Growth</option><option value="pay">Pay</option><option value="title">Name</option></select><button class="btn" onclick="openCommand()">Smart Search ⌘K</button></div><div style="height:18px"></div><div id="careerResults" class="career-grid"></div></div>
 <div class="section"><div class="card"><span class="kicker">HOW GOOGLE FITS</span><h3 style="font:800 25px Fraunces;margin:7px 0">Research layer, not fake “live data”.</h3><p style="color:var(--muted);font-size:13px">This self-contained version does not hide a secret API key in browser code. Instead, every market card can launch a targeted Google research query and also link to the primary public source.</p></div></div>`;
}
function renderCareerResults() {
  const el = document.getElementById("careerResults");
  if (!el) return;
  const q = (
    document.getElementById("careerSearch")?.value || ""
  ).toLowerCase();
  let arr = ranked().filter((c) =>
    (c.title + " " + c.skills.join(" ")).toLowerCase().includes(q),
  );
  const sort = document.getElementById("careerSort")?.value || "fit";
  if (sort === "growth") arr.sort((a, b) => b.growth - a.growth);
  if (sort === "title") arr.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "pay")
    arr.sort(
      (a, b) =>
        parseFloat(b.pay.replace(/[^0-9.]/g, "")) -
        parseFloat(a.pay.replace(/[^0-9.]/g, "")),
    );
  el.innerHTML = arr.length
    ? arr.map((c) => careerCard(c)).join("")
    : `<div class="empty" style="grid-column:1/-1">No matching careers in the built-in source set. Try another term or use ⌘K to research.</div>`;
}
function resourceView(name) {
  const map = {
    courses: [
      "courses",
      "COURSES",
      "Learning resources matched to your profile.",
      courseResources,
    ],
    internships: [
      "internships",
      "INTERNSHIPS",
      "Official company portals plus India-focused opportunity directories.",
      internshipResources,
    ],
    hackathons: [
      "hackathons",
      "HACKATHONS",
      "Live directories and date-aware current event pages.",
      hackathonResources,
    ],
    companies: [
      "companies",
      "COMPANY OFFERS",
      "Official early-career and student opportunity portals.",
      companyResources,
    ],
    guidance: [
      "guidance",
      "GUIDANCE",
      "Application, interview, career and evidence-building sources tied to real providers.",
      guidanceResources,
    ],
  };
  const cfg = map[name] || map.courses;
  const items = profileSkillSet().size
    ? recommended(cfg[3], 12)
    : starterItems(cfg[3], 12);
  return `<div class="sectionhead"><span class="kicker">${cfg[1]}</span><h3>${cfg[2]}</h3><p>${profileSkillSet().size ? "Recommendations are matched to the skills and interests stored in your Horizon profile." : "Starter sources are shown until you add recognized skills."} Open the provider page for the current eligibility, deadline and availability.</p></div>
          <div class="card"><div class="resource-filter"><span class="badge">${state.skills.length ? "PERSONALIZED" : "GENERAL STARTER SET"}</span>${state.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
          <div class="resource-grid">${items.map(resourceCard).join("")}</div></div>
          <div style="height:16px"></div><div class="card"><span class="kicker">SOURCE DISCIPLINE</span><h3 style="font:800 25px Fraunces;margin:7px 0">Official links first.</h3><p style="color:var(--muted);font-size:12px">Horizon prioritizes official learning providers, company career portals and established hackathon directories. A live listing can close or change after this page was built, so the source link is the authority for the final application decision.</p></div>`;
}

function workspaceView() {
  return `<div class="sectionhead"><span class="kicker">MY WORKSPACE</span><h3>Your career cockpit.</h3><p>Every module below edits the same saved local profile.</p></div>
 <div class="split"><aside class="card sidebar">${[
   ["overview", "Overview"],
   ["roadmap", "Roadmap"],
   ["skills", "Skill Lab"],
   ["gaps", "Skill Gaps"],
   ["projects", "Projects"],
   ["applications", "Applications"],
   ["planner", "Planner"],
   ["assessment", "Assessment"],
   ["journal", "Journal"],
   ["analytics", "Analytics"],
   ["compare", "Compare"],
   ["saved", "Saved Careers"],
   ["profile", "Profile"],
   ["settings", "Settings"],
 ]
   .map(
     (x) =>
       `<button class="sidebtn" data-panel="${x[0]}" onclick="setPanel('${x[0]}')">${x[1]}</button>`,
   )
   .join("")}</aside>
 <main>
 ${panel("overview", overviewPanel())}${panel("roadmap", roadmapPanel())}${panel("skills", skillPanel())}${panel("gaps", gapPanel())}${panel("projects", projectPanel())}${panel("applications", applicationsPanel())}${panel("planner", plannerPanel())}${panel("assessment", assessmentPanel())}${panel("journal", journalPanel())}${panel("analytics", analyticsPanel())}${panel("compare", comparePanel())}${panel("saved", savedPanel())}${panel("profile", profilePanel())}${panel("settings", settingsPanel())}
 </main></div>`;
}
function panel(id, html) {
  return `<section class="panel" id="panel-${id}">${html}</section>`;
}
function setPanel(id) {
  document
    .querySelectorAll(".sidebtn")
    .forEach((b) => b.classList.toggle("active", b.dataset.panel === id));
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.toggle("active", p.id === "panel-" + id));
  window.scrollTo({ top: 120, behavior: "smooth" });
}
function overviewPanel() {
  const open = state.tasks.filter((x) => !x.done);
  return `<div class="card"><span class="kicker">ACTION DASHBOARD</span><h3 style="font:800 31px Fraunces;margin:7px 0">Your next moves</h3><p style="color:var(--muted);font-size:13px;margin-bottom:15px">${esc(nextAction())}</p>${(open.length
    ? open
    : [{ title: "Create your first roadmap task", done: false }]
  )
    .slice(0, 5)
    .map(
      (t, i) =>
        `<div class="listrow"><input class="check" type="checkbox" ${t.done ? "checked" : ""} onchange="toggleTask(${state.tasks.indexOf(t)})"><span style="flex:1">${esc(t.title)}</span><span class="badge">${i + 1}</span></div>`,
    )
    .join("")}</div>
 <div style="height:15px"></div><div class="grid3"><div class="card"><span class="kicker">PROFILE</span><div style="font:800 43px Fraunces;margin:6px 0">${profilePercent()}%</div><div class="progress"><i style="width:${profilePercent()}%"></i></div></div><div class="card"><span class="kicker">PROJECTS</span><div style="font:800 43px Fraunces">${state.projects.length}</div><p style="color:var(--muted);font-size:12px">Portfolio evidence pieces</p></div><div class="card"><span class="kicker">APPLICATIONS</span><div style="font:800 43px Fraunces">${state.applications.length}</div><p style="color:var(--muted);font-size:12px">Tracked opportunities</p></div></div>
 <div style="height:15px"></div><div class="card"><span class="kicker">TOP PATH SIGNAL</span><h3 style="font:800 27px Fraunces;margin:7px 0">${esc(ranked()[0].title)}</h3><p style="color:var(--muted);font-size:13px">${esc(ranked()[0].desc)}</p><div class="tags">${ranked()[0]
   .skills.map((s) => `<span class="tag">${esc(s)}</span>`)
   .join("")}</div></div>`;
}
function roadmapPanel() {
  const steps = [
    ["01", "Profile", "Complete the personal evidence base."],
    ["02", "Gap audit", "Select a target and identify missing skills."],
    ["03", "Evidence", "Build one portfolio project and document it."],
    ["04", "Opportunity", "Prepare applications, interviews and outreach."],
  ];
  return `<div class="card"><span class="kicker">ROADMAP GENERATOR</span><h3 style="font:800 31px Fraunces;margin:7px 0">A four-stage route you can actually execute.</h3><p style="color:var(--muted);font-size:13px;margin-bottom:16px">Your roadmap is deliberately transparent. It is a planning framework, not a promise of employment.</p><div class="roadmap">${steps.map((s) => `<div class="step"><small>STAGE ${s[0]}</small><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join("")}</div><div style="height:17px"></div><button class="btn primary" onclick="generateRoadmap()">Generate five concrete tasks</button><button class="btn" onclick="route('target')">Open Target & Roadmap</button></div>`;
}
function skillPanel() {
  const labels = {
    technical: "Technical / computational",
    creative: "Creative / design",
    analytical: "Analytical / quantitative",
    communication: "Communication / collaboration",
  };
  return `<div class="card"><span class="kicker">SKILL CALIBRATION</span><h3 style="font:800 31px Fraunces;margin:7px 0">Tune the profile the way you work.</h3>${Object.entries(
    labels,
  )
    .map(
      ([k, l]) =>
        `<div style="margin:20px 0"><div style="display:flex;justify-content:space-between"><b>${l}</b><span id="skillv-${k}" class="badge">${state.skill[k]}%</span></div><input class="range" type="range" min="0" max="100" value="${state.skill[k]}" oninput="state.skill.${k}=+this.value;document.getElementById('skillv-${k}').textContent=this.value+'%';save()"></div>`,
    )
    .join(
      "",
    )}<button class="btn primary" onclick="rerenderWorkspace('skills')">Save calibration</button></div>`;
}
function gapPanel() {
  const target = ranked()[0];
  const current = state.skills.map((x) => x.toLowerCase());
  const items = target.skills.map((s) => ({
    skill: s,
    have: current.includes(s.toLowerCase()),
    needed: true,
  }));
  return `<div class="card"><span class="kicker">SKILL-GAP AUDIT</span><h3 style="font:800 31px Fraunces;margin:7px 0">${esc(target.title)}</h3><p style="color:var(--muted);font-size:13px;margin-bottom:16px">This audit compares the skills you entered with the skill tags used by the Horizon occupation record.</p>${items.map((x) => `<div class="listrow"><span class="badge">${x.have ? "MATCH" : "GAP"}</span><b style="flex:1">${esc(x.skill)}</b><span style="color:${x.have ? "var(--green)" : "var(--accent)"}">${x.have ? "On profile" : "Add / practice"}</span></div>`).join("")}<div style="height:16px"></div><button class="btn primary" onclick="generateGapTasks()">Add gap-closing actions</button></div>`;
}
function projectPanel() {
  return `<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><span class="kicker">PROJECT STUDIO</span><h3 style="font:800 31px Fraunces">Build visible evidence.</h3></div><button class="btn primary" onclick="newProject()">+ New project</button></div><div style="height:16px"></div>${state.projects.length ? `<div class="career-grid">${state.projects.map((p, i) => `<div class="card soft"><span class="badge">${esc(p.status)}</span><h4 style="font:800 22px Fraunces;margin:8px 0">${esc(p.title)}</h4><p style="color:var(--muted);font-size:12px">${esc(p.desc)}</p><div style="height:11px"></div><div class="progress"><i style="width:${p.progress}%"></i></div><div style="display:flex;justify-content:space-between;margin-top:7px;font-size:10px;color:var(--soft)"><span>${p.progress}%</span><button class="mini" onclick="advanceProject(${i})">Advance</button></div></div>`).join("")}</div>` : `<div class="empty">No projects yet. Start with a problem you care about, not a technology buzzword.</div>`}</div>`;
}
function applicationsPanel() {
  const stages = ["Research", "Applied", "Interview", "Offer / Closed"];
  return `<div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><div><span class="kicker">APPLICATION TRACKER</span><h3 style="font:800 31px Fraunces">Opportunity pipeline.</h3></div><button class="btn primary" onclick="newApplication()">+ Add opportunity</button></div><div style="height:16px"></div><div class="appgrid">${stages
    .map(
      (stage) =>
        `<div class="card soft kanban"><h4>${stage}</h4>${
          state.applications
            .filter((a) => a.status === stage)
            .map(
              (a, i) =>
                `<div class="card"><b>${esc(a.role)}</b><div style="font-size:10px;color:var(--soft);margin-top:3px">${esc(a.company)}</div><div style="font-size:10px;color:var(--muted);margin-top:7px">${esc(a.next)}</div><button class="mini" onclick="cycleApplication('${a.id}')">Move →</button></div>`,
            )
            .join("") ||
          `<div class="empty" style="padding:18px;font-size:10px">Empty</div>`
        }</div>`,
    )
    .join("")}</div></div>`;
}
function plannerPanel() {
  return `<div class="card"><span class="kicker">WEEKLY PLANNER</span><h3 style="font:800 31px Fraunces">The week, not the decade.</h3><div class="controls" style="margin:15px 0"><input id="taskInput" class="field search" placeholder="Add a concrete action…"><button class="btn primary" onclick="addTask()">Add task</button><button class="btn" onclick="generateRoadmap()">Generate roadmap tasks</button></div><div class="list">${state.tasks.map((t, i) => `<div class="listrow"><input class="check" type="checkbox" ${t.done ? "checked" : ""} onchange="toggleTask(${i})"><span style="flex:1;${t.done ? "text-decoration:line-through;color:var(--soft)" : ""}">${esc(t.title)}</span><button class="mini" onclick="deleteTask(${i})">Delete</button></div>`).join("") || '<div class="empty">No tasks yet.</div>'}</div></div>`;
}
function assessmentPanel() {
  const qs = [
    [
      "ambiguity",
      "When instructions are incomplete, you usually…",
      [
        "Break the problem down",
        "Prototype quickly",
        "Ask for context",
        "Explore multiple paths",
      ],
    ],
    [
      "evidence",
      "Your best proof of ability is…",
      [
        "Code / analysis",
        "A finished design",
        "A deep explanation",
        "A shipped result",
      ],
    ],
    [
      "learning",
      "You learn fastest through…",
      ["Practice", "Iteration", "Reading", "Discussion"],
    ],
    [
      "energy",
      "A strong workday feels like…",
      ["Solving", "Creating", "Understanding", "Coordinating"],
    ],
    [
      "goal",
      "Right now your strongest pull is…",
      ["Depth", "Creative range", "Discovery", "Opportunity"],
    ],
  ];
  return `<div class="card"><span class="kicker">ASSESSMENT CENTER</span><h3 style="font:800 31px Fraunces">Five questions, one signal.</h3><p style="color:var(--muted);font-size:13px">This is a reflection tool, not a clinical or validated psychological assessment.</p>${qs.map((q, qi) => `<div style="margin:20px 0"><b>${q[1]}</b><div class="tags">${q[2].map((o, oi) => `<button class="tag" style="cursor:pointer;outline:${state.assessment[qi] === oi ? "2px solid var(--accent)" : "none"}" onclick="answerAssessment(${qi},${oi})">${o}</button>`).join("")}</div></div>`).join("")}<button class="btn primary" onclick="finishAssessment()">Save result</button></div>`;
}
function journalPanel() {
  return `<div class="card"><span class="kicker">CAREER JOURNAL</span><h3 style="font:800 31px Fraunces">Keep the reasoning.</h3><textarea id="journalText" class="field" rows="6" style="width:100%;margin:15px 0" placeholder="What did you learn? What changed your mind? What evidence did you gain?"></textarea><button class="btn primary" onclick="addJournal()">Save reflection</button><div style="height:17px"></div>${state.journal.map((j) => `<div class="card soft" style="margin-bottom:9px"><div class="source">${esc(j.date)}</div><p style="font-size:13px;margin-top:6px">${esc(j.text)}</p></div>`).join("") || '<div class="empty">Your reflections will appear here.</div>'}</div>`;
}
function analyticsPanel() {
  const taskTotal = Math.max(1, state.tasks.length),
    done = state.tasks.filter((x) => x.done).length,
    projectProgress = state.projects.length
      ? Math.round(
          state.projects.reduce((a, b) => a + b.progress, 0) /
            state.projects.length,
        )
      : 0;
  return `<div class="grid2"><div class="card"><span class="kicker">PROFILE</span><h3 style="font:800 40px Fraunces">${profilePercent()}%</h3><div class="progress"><i style="width:${profilePercent()}%"></i></div><p class="source" style="margin-top:7px">Completeness is based only on fields stored by Horizon.</p></div><div class="card"><span class="kicker">TASKS</span><h3 style="font:800 40px Fraunces">${Math.round((done / taskTotal) * 100)}%</h3><div class="progress"><i style="width:${Math.round((done / taskTotal) * 100)}%"></i></div><p class="source" style="margin-top:7px">${done} of ${state.tasks.length} tasks complete</p></div></div><div style="height:15px"></div><div class="grid2"><div class="card"><span class="kicker">PROJECT EVIDENCE</span><h3 style="font:800 40px Fraunces">${projectProgress}%</h3><div class="progress"><i style="width:${projectProgress}%"></i></div></div><div class="card"><span class="kicker">INTEREST COVERAGE</span><h3 style="font:800 40px Fraunces">${state.interests ? 100 : 0}%</h3><p class="source">Add interests to improve the context shown by the dashboard.</p></div></div>`;
}
function comparePanel() {
  let a = careers.find((c) => c.id === state.saved[0]) || careers[0],
    b = careers.find((c) => c.id === state.saved[1]) || careers[1];
  return `<div class="card"><span class="kicker">COMPARE</span><h3 style="font:800 31px Fraunces">Put two paths beside each other.</h3><div class="grid2" style="margin-top:16px"><div>${compareCard(a)}</div><div>${compareCard(b)}</div></div><div class="notice" style="margin-top:16px">Horizon presents documented differences; it does not declare one career universally better.</div></div>`;
}
function compareCard(c) {
  return `<div class="card soft"><span class="badge">${fitFor(c)}% fit signal</span><h4 style="font:800 24px Fraunces;margin:8px 0">${esc(c.title)}</h4><div class="listrow"><span style="flex:1">Median pay</span><b>${esc(c.pay)}</b></div><div class="listrow"><span style="flex:1">Growth 2025–35</span><b>${c.growth}%</b></div><div class="tags">${c.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div><button class="mini" onclick="googleCareer('${c.id}')">Research on Google ↗</button></div>`;
}
function savedPanel() {
  const list = state.saved
    .map((id) => careers.find((c) => c.id === id))
    .filter(Boolean);
  return `<div class="card"><span class="kicker">SAVED CAREERS</span><h3 style="font:800 31px Fraunces">Your shortlist.</h3><div style="height:16px"></div>${list.length ? `<div class="career-grid">${list.map((c) => careerCard(c)).join("")}</div>` : '<div class="empty">Save a career from Discover to build a shortlist.</div>'}</div>`;
}
function profilePanel() {
  return `<div class="card"><div class="profile-head"><div class="avatar">${esc(initials())}</div><div><span class="kicker">PROFILE INTELLIGENCE</span><h3 style="font:800 31px Fraunces">${esc(state.name || "Student")}</h3></div></div><div style="height:16px"></div><div class="grid2"><div><label class="source">Name</label><input id="pName" class="field" style="width:100%" value="${esc(state.name)}"></div><div><label class="source">Email</label><input id="pEmail" class="field" style="width:100%" value="${esc(state.email)}"></div><div><label class="source">Field / degree</label><input id="pField" class="field" style="width:100%" value="${esc(state.field)}"></div><div><label class="source">Goal</label><select id="pGoal" class="field" style="width:100%">${["Explore", "Internship", "Placement", "Research", "Startup"].map((x) => `<option ${state.goal === x ? "selected" : ""}>${x}</option>`).join("")}</select></div></div><div style="height:10px"></div><label class="source">Interests</label><textarea id="pInterests" class="field" rows="3" style="width:100%" placeholder="AI, medicine, finance, climate…">${esc(state.interests)}</textarea><div style="height:10px"></div><label class="source">Skills — comma separated (recognized skills only)</label><input id="pSkills" class="field" style="width:100%" value="${esc(state.skills.join(", "))}" placeholder="Python, SQL, Figma, communication"><div class="source" style="margin-top:6px">Unsupported skill names are rejected rather than used to create a match.</div><div style="height:14px"></div><button class="btn primary" onclick="saveProfileFields()">Save profile</button><div class="live-note" style="margin-top:14px"><b>Personalization:</b> the Course, Internship, Hackathon and Company Offers hubs read this skill list and match it against tagged resources.</div></div>`;
}
function settingsPanel() {
  return `<div class="card"><span class="kicker">SETTINGS / THEME STUDIO</span><h3 style="font:800 31px Fraunces">Make it yours.</h3><div class="controls" style="margin:16px 0">${themeButtons()}</div><div class="grid2"><button class="btn" onclick="toggleFocus()">Focus mode</button><button class="btn" onclick="exportProfile()">Export JSON</button><button class="btn" onclick="openFeature('sources','Source Panel')">Open source panel</button><button class="btn" onclick="resetLocal()">Reset local workspace</button></div><div class="notice" style="margin-top:15px">Local-first mode: profile/workspace data is stored in this browser using localStorage. No account backend is required for this version.</div></div>`;
}
function marketView() {
  const top = [...careers].sort((a, b) => b.growth - a.growth).slice(0, 5);
  return `<div class="sectionhead"><span class="kicker">MARKET RADAR</span><h3>Current, source-labelled context.</h3><p>U.S. BLS figures below use May 2025 median wage data and 2025–35 employment projections. They are U.S. benchmarks, not Indian salary forecasts.</p></div>
 <div class="bento"><div class="card"><div style="display:flex;justify-content:space-between;align-items:center"><div><span class="kicker">GROWTH SIGNAL</span><h3 style="font:800 26px Fraunces">Selected occupation growth</h3></div><span class="badge">BLS 2025–35</span></div><canvas class="chart" id="marketChart"></canvas></div>
 <div class="card"><span class="kicker">SKILLS CONTEXT</span><h3 style="font:800 26px Fraunces;margin:6px 0">Skills rising in the 2025–2030 outlook</h3><div class="tags">${["AI and big data", "Networks and cybersecurity", "Technology literacy", "Creative thinking", "Resilience, flexibility and agility", "Curiosity and lifelong learning"].map((s) => `<span class="tag">${s}</span>`).join("")}</div><p style="font-size:12px;color:var(--muted);margin-top:11px">Source: World Economic Forum, Future of Jobs Report 2025.</p><button class="btn" style="margin-top:14px" onclick="window.open('${SOURCES.wef}','_blank')">Open WEF report ↗</button></div></div>
 <div style="height:16px"></div><div class="career-grid">${top
   .map(
     (c) =>
       `<div class="card career"><span class="score">${c.growth}% projected growth</span><h4>${esc(c.title)}</h4><p>${esc(c.pay)}</p><div class="tags">${c.skills
         .slice(0, 4)
         .map((s) => `<span class="tag">${esc(s)}</span>`)
         .join(
           "",
         )}</div><div class="source">${esc(c.source)} • <a href="${c.url}" target="_blank" rel="noopener">official source</a></div><div style="margin-top:11px"><button class="mini" onclick="googleCareer('${c.id}')">Google research ↗</button></div></div>`,
   )
   .join("")}</div>`;
}
function drawChart() {
  const c = document.getElementById("marketChart");
  if (!c) return;
  const ctx = c.getContext("2d");
  const r = c.getBoundingClientRect();
  const d = window.devicePixelRatio || 1;
  c.width = r.width * d;
  c.height = r.height * d;
  ctx.scale(d, d);
  const w = r.width,
    h = r.height;
  ctx.clearRect(0, 0, w, h);
  const vals = careers.map((x) => x.growth);
  const max = Math.max(...vals, 40);
  const pad = 35;
  ctx.strokeStyle = "rgba(80,60,45,.14)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    let y = pad + ((h - pad * 1.6) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();
  }
  const bw = ((w - pad - 30) / vals.length) * 0.62;
  vals.forEach((v, i) => {
    const x = pad + i * ((w - pad - 30) / vals.length) + 12;
    const bh = (h - pad * 1.6) * (v / max);
    const y = h - pad - bh;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
      "--accent",
    );
    ctx.fillRect(x, y, bw, bh);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
      "--muted",
    );
    ctx.font = "10px DM Sans";
    ctx.fillText(v + "%", x, y - 7);
    ctx.font = "9px DM Sans";
    ctx.fillText(careers[i].title.split(" ").slice(0, 2).join(" "), x, h - 12);
  });
}
function sourcesView() {
  return `<div class="sectionhead"><span class="kicker">SOURCE PANEL</span><h3>Know where the number came from.</h3><p>Horizon separates source-backed facts from profile-generated signals and makes geography explicit.</p></div>
 <div class="grid2"><div class="card"><span class="kicker">U.S. BUREAU OF LABOR STATISTICS</span><h3 style="font:800 26px Fraunces;margin:6px 0">Occupational Outlook Handbook</h3><p style="color:var(--muted);font-size:13px">BLS occupational profiles describe duties, work environment, education/training, median pay and job outlook. Horizon uses those public profiles for the U.S. benchmark cards.</p><div class="tags"><span class="tag">Software developers</span><span class="tag">Data scientists</span><span class="tag">Information security analysts</span><span class="tag">Computer systems analysts</span></div><button class="btn" onclick="window.open('${SOURCES.blsIT}','_blank')">Open BLS IT occupations ↗</button></div>
 <div class="card"><span class="kicker">WORLD ECONOMIC FORUM</span><h3 style="font:800 26px Fraunces;margin:6px 0">Future of Jobs Report 2025</h3><p style="color:var(--muted);font-size:13px">WEF reports employer expectations across 55 economies and 22 industry clusters, with skills outlook through 2030.</p><div class="tags"><span class="tag">AI & big data</span><span class="tag">Cybersecurity</span><span class="tag">Technology literacy</span><span class="tag">Creative thinking</span></div><button class="btn" onclick="window.open('${SOURCES.wef}','_blank')">Open WEF report ↗</button></div></div>
 <div style="height:16px"></div><div class="grid2">
 <div class="card"><span class="kicker">O*NET ONETLINE</span><h3 style="font:800 26px Fraunces;margin:6px 0">Occupational skill detail</h3><p style="color:var(--muted);font-size:13px">O*NET adds occupational tasks, essential skills, transferable skills and employer-based technology-skill signals. Horizon uses this layer to keep its pathway skill lists grounded rather than arbitrary.</p><div class="tags"><span class="tag">Software skills</span><span class="tag">Essential skills</span><span class="tag">Transferable skills</span><span class="tag">Employer signals</span></div><button class="btn" onclick="window.open('https://www.onetonline.org/','_blank')">Open O*NET ↗</button></div>
 <div class="card"><span class="kicker">OPPORTUNITY SOURCES</span><h3 style="font:800 26px Fraunces;margin:6px 0">Live portals, not fake records</h3><p style="color:var(--muted);font-size:13px">Company and internship pages link directly to employer or established opportunity platforms. Listings can disappear after publication, so Horizon avoids storing invented offer IDs.</p><div class="tags"><span class="tag">Google Careers</span><span class="tag">Microsoft Careers</span><span class="tag">Amazon Jobs</span><span class="tag">IBM Careers</span><span class="tag">Unstop</span><span class="tag">Hack2Skill</span></div></div></div>
 <div style="height:16px"></div><div class="card"><span class="kicker">INDIA RESEARCH ENTRY POINT</span><h3 style="font:800 26px Fraunces;margin:6px 0">National Career Service</h3><p style="color:var(--muted);font-size:13px">For Indian career and employment resources, use the official National Career Service portal. The single-file Horizon build does not claim a live NCS API integration.</p><button class="btn" onclick="window.open('${SOURCES.ncs}','_blank')">Open NCS ↗</button></div>`;
}

function openProfile() {
  openModal(`<div class="modalhead"><div><span class="kicker">ONBOARDING / PROFILE</span><h3 style="font:800 30px Fraunces">Tell Horizon what matters.</h3></div><button class="close" onclick="closeModal()">✕</button></div>
 <div class="grid2"><input id="mName" class="field" placeholder="Name" value="${esc(state.name)}"><input id="mEmail" class="field" placeholder="Email (optional)" value="${esc(state.email)}"><input id="mField" class="field" placeholder="Degree / field" value="${esc(state.field)}"><select id="mGoal" class="field">${["Explore", "Internship", "Placement", "Research", "Startup"].map((x) => `<option ${state.goal === x ? "selected" : ""}>${x}</option>`).join("")}</select></div>
 <div style="height:10px"></div><textarea id="mInterests" class="field" style="width:100%" rows="3" placeholder="Interests">${esc(state.interests)}</textarea><div style="height:10px"></div>
 <input id="mSkills" class="field" style="width:100%" placeholder="Skills — comma separated (e.g. Python, SQL, Git)" value="${esc(state.skills.join(", "))}"><div class="source" style="margin-top:6px">Only recognized skills enter the matching engine; unknown entries are excluded.</div><div style="height:15px"></div>
 <button class="btn primary" onclick="saveProfileModal()">Generate / update my Horizon</button>`);
}
function openModal(content) {
  document.getElementById("modalContent").innerHTML = content;
  document.getElementById("modal").classList.add("open");
}
function closeModal() {
  document.getElementById("modal").classList.remove("open");
}
function collectProfileFrom(prefix) {
  const parsed = parseSkillsInput(
    document.getElementById(prefix + "Skills").value,
  );
  const profile = {
    name: document.getElementById(prefix + "Name").value.trim(),
    email: document.getElementById(prefix + "Email").value.trim(),
    field: document.getElementById(prefix + "Field").value.trim(),
    goal: document.getElementById(prefix + "Goal").value,
    interests: document.getElementById(prefix + "Interests").value.trim(),
    skills: parsed.accepted,
  };
  return {
    profile,
    rejected: parsed.rejected,
    errors: validateProfileFields(profile),
  };
}
function applyProfileInput(prefix, mode) {
  const { profile, rejected, errors } = collectProfileFrom(prefix);
  if (errors.length) {
    toast(errors[0]);
    return;
  }
  state.name = profile.name;
  state.email = profile.email;
  state.field = profile.field;
  state.goal = profile.goal;
  state.interests = profile.interests;
  state.skills = profile.skills;
  syncTargetDefaults();
  save();
  if (mode === "home") {
    closeModal();
    route("home");
  } else {
    rerenderWorkspace("profile");
  }
  toast(
    rejected.length
      ? "Profile updated; unsupported skills were excluded."
      : "Profile updated — recommendations recalculated.",
  );
}
function saveProfileModal() {
  applyProfileInput("m", "home");
}
function saveProfileFields() {
  applyProfileInput("p", "workspace");
}
function rerenderWorkspace(panel) {
  route("workspace");
  setTimeout(() => setPanel(panel), 0);
}
function openCareer(id) {
  const c = careers.find((x) => x.id === id);
  if (!c) return;
  const current = profileSkillSet();
  const gaps = (c.skills || []).filter((s) => !current.has(normalizeSkill(s)));
  const companies = targetCompanies[c.id] || [];
  openModal(`<div class="modalhead"><div><span class="kicker">CAREER PATHWAY</span><h3 style="font:800 32px Fraunces">${esc(c.title)}</h3></div><button class="close" onclick="closeModal()">✕</button></div>
          <p style="color:var(--muted);font-size:13px">${esc(c.desc)}</p>
          <div class="tags">${c.skills.map((s) => `<span class="tag">${current.has(normalizeSkill(s)) ? "✓ " : ""}${esc(s)}</span>`).join("")}</div>
          <div class="grid2"><div class="metric"><span>Profile-derived match</span><b>${fitFor(c)}%</b></div><div class="metric"><span>BLS projected growth</span><b>${c.growth}%</b></div></div>
          <div style="height:11px"></div><div class="notice">Source-backed benchmark: ${esc(c.source)} • ${esc(c.pay)} • U.S. geography. This is not an India salary forecast or a personalized employment prediction.</div>
          <div style="height:12px"></div><div class="source">Official occupation source: <a href="${c.url}" target="_blank" rel="noopener">Open source ↗</a></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:15px">
            <button class="btn primary" onclick="setTargetRole('${c.id}');closeModal()">Use as target</button>
            <button class="btn" onclick="toggleSave('${c.id}');closeModal();">Save career</button>
            <button class="btn" onclick="googleCareer('${c.id}')">Research ↗</button>
            <button class="btn" onclick="generateTargetRoadmap('${c.id}');closeModal()">Add roadmap</button>
          </div>
          <div style="height:18px"></div><span class="kicker">CURRENT GAPS</span><div style="height:8px"></div>
          ${gaps.length ? gaps.map((g) => `<div class="listrow"><b style="flex:1">${esc(g)}</b><span class="badge">GAP</span></div>`).join("") : '<div class="listrow">Your current skill list covers every core skill in this pathway.</div>'}
          <div style="height:18px"></div><span class="kicker">TARGET INTERNSHIP</span>
          <div class="listrow"><b style="flex:1">${esc(internshipTargetFor(c))}</b><span class="badge">TARGET TITLE</span></div>
          <div style="height:8px"></div>
          ${companies
            .map((co) => {
              const u = targetCompanyLink(c, co);
              return `<div class="listrow"><b style="flex:1">${esc(co)}</b><a class="resource-link" href="${u}" target="_blank" rel="noopener">Open company portal ↗</a></div>`;
            })
            .join("")}
          <div style="height:12px"></div><div class="source">Availability and eligibility are controlled by the employer source. Horizon does not claim that these portals contain an open role for you right now.</div>`);
}

function toggleSave(id) {
  state.saved = state.saved.includes(id)
    ? state.saved.filter((x) => x !== id)
    : [...state.saved, id];
  save();
  toast(state.saved.includes(id) ? "Career saved" : "Career removed");
  rerenderWorkspace("saved");
}
function googleCareer(id) {
  const c = careers.find((x) => x.id === id);
  if (!c) return;
  const q = encodeURIComponent(
    `${c.title} career skills salary outlook official ${new Date().getFullYear()}`,
  );
  window.open("https://www.google.com/search?q=" + q, "_blank");
}
function generateCareerTask(id) {
  const c = careers.find((x) => x.id === id);
  state.tasks.push({
    title: `Research ${c.title} and choose one skill to deepen`,
    done: false,
  });
  save();
  toast("Roadmap action added");
}
function generateRoadmap() {
  const role = getTargetRole();
  if (!role) {
    toast("Add recognized skills before generating a roadmap.");
    return;
  }
  generateTargetRoadmap(role.id);
}

function generateGapTasks() {
  const target = getTargetRole();
  if (!target) {
    toast("Add recognized skills before generating gap tasks.");
    return;
  }
  const mine = profileSkillSet();
  target.skills
    .filter((s) => !mine.has(normalizeSkill(s)))
    .forEach((s) => {
      const title = `Practice ${s} and create evidence`;
      if (!state.tasks.some((t) => t.title === title))
        state.tasks.push({ title, done: false });
    });
  save();
  toast("Gap-closing tasks added");
  rerenderWorkspace("planner");
}
function toggleTask(i) {
  if (i < 0) return;
  if (state.tasks[i]) {
    state.tasks[i].done = !state.tasks[i].done;
    save();
    rerenderWorkspace("overview");
  }
}
function addTask() {
  const el = document.getElementById("taskInput"),
    v = el?.value.trim();
  if (!v) return;
  state.tasks.push({ title: v, done: false });
  save();
  toast("Task added");
  rerenderWorkspace("planner");
}
function deleteTask(i) {
  state.tasks.splice(i, 1);
  save();
  rerenderWorkspace("planner");
}
function newProject() {
  const title = prompt("Project title");
  if (!title) return;
  const desc = prompt("What problem will it solve or investigate?") || "";
  state.projects.push({
    id: cryptoSafeId(),
    title,
    desc,
    status: "IDEA",
    progress: 10,
  });
  save();
  toast("Project created");
  rerenderWorkspace("projects");
}
function advanceProject(i) {
  if (!state.projects[i]) return;
  state.projects[i].progress = Math.min(100, state.projects[i].progress + 20);
  if (state.projects[i].progress === 100) state.projects[i].status = "DONE";
  else if (state.projects[i].progress >= 60)
    state.projects[i].status = "BUILDING";
  save();
  rerenderWorkspace("projects");
}
function cryptoSafeId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function newApplication() {
  const role = prompt("Role / internship / research opportunity");
  if (!role) return;
  const company = prompt("Company / lab / organization") || "";
  state.applications.push({
    id: cryptoSafeId(),
    role,
    company,
    status: "Research",
    next: "Check requirements",
  });
  save();
  toast("Opportunity added");
  rerenderWorkspace("applications");
}
function cycleApplication(id) {
  const order = ["Research", "Applied", "Interview", "Offer / Closed"];
  const a = state.applications.find((x) => x.id === id);
  if (!a) return;
  a.status = order[(order.indexOf(a.status) + 1) % order.length];
  a.next =
    a.status === "Applied"
      ? "Prepare interview stories"
      : a.status === "Interview"
        ? "Prepare for interview"
        : a.status === "Offer / Closed"
          ? "Archive or reflect"
          : "Check fit and requirements";
  save();
  rerenderWorkspace("applications");
}
function answerAssessment(q, a) {
  state.assessment[q] = a;
  save();
  rerenderWorkspace("assessment");
}
function finishAssessment() {
  toast("Assessment saved as a reflection signal");
}
function addJournal() {
  const el = document.getElementById("journalText"),
    v = el?.value.trim();
  if (!v) return;
  state.journal.unshift({ date: new Date().toLocaleString(), text: v });
  save();
  toast("Reflection saved");
  rerenderWorkspace("journal");
}
function exportProfile() {
  const copy = { ...state, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(copy, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "horizon-profile.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Profile exported");
}
function logoutToLogin() {
  const keepTheme = state.theme || "atelier";
  state = structuredClone(defaultState);
  state.theme = keepTheme;
  try {
    localStorage.setItem("horizon-real-state-v4", JSON.stringify(state));
  } catch (e) {}
  document.documentElement.dataset.theme = keepTheme;
  boot();
}
function resetLocal() {
  if (!confirm("Reset all Horizon data stored in this browser?")) return;
  localStorage.removeItem("horizon-real-state-v4");
  location.reload();
}
function toggleFocus() {
  state.focus = !state.focus;
  save();
  if (state.focus) {
    document.body.innerHTML = `<div style="min-height:100vh;display:grid;place-items:center;background:var(--bg);padding:30px"><div class="card" style="width:min(700px,100%);text-align:center"><span class="kicker">FOCUS MODE</span><h1 style="font:800 58px Fraunces;margin:12px 0">${esc(nextAction())}</h1><p style="color:var(--muted)">One action. One timer. No dashboard noise.</p><div style="font:800 68px Fraunces;margin:25px 0" id="focusTimer">25:00</div><div style="display:flex;justify-content:center;gap:10px"><button class="btn primary" onclick="startFocusTimer()">Start 25 min</button><button class="btn" onclick="state.focus=false;save();location.reload()">Exit focus</button></div></div></div>`;
  } else location.reload();
}
let focusInt = null;
function startFocusTimer() {
  let sec = 25 * 60;
  clearInterval(focusInt);
  focusInt = setInterval(() => {
    sec--;
    const m = String(Math.floor(sec / 60)).padStart(2, "0"),
      s = String(sec % 60).padStart(2, "0");
    document.getElementById("focusTimer").textContent = m + ":" + s;
    if (sec <= 0) {
      clearInterval(focusInt);
      toast("Focus session complete");
    }
  }, 1000);
}
function openFeature(key, title) {
  const map = {
    profile: "profile",
    skills: "skills",
    careers: "discover",
    compare: "compare",
    saved: "saved",
    gaps: "gaps",
    roadmap: "roadmap",
    planner: "planner",
    projects: "projects",
    applications: "applications",
    assessment: "assessment",
    journal: "journal",
    focus: "settings",
    analytics: "analytics",
    market: "market",
    sources: "sources",
    theme: "settings",
    settings: "settings",
    search: "discover",
    home: "home",
  };
  const dest = map[key] || "workspace";
  if (dest === "workspace") {
    route("workspace");
    setTimeout(() => setPanel(key === "focus" ? "settings" : key), 0);
  } else route(dest);
}
function openCommand() {
  const cmd = document.getElementById("command"),
    input = document.getElementById("cmdInput");
  cmd.classList.add("open");
  input.value = "";
  renderCommands("");
  setTimeout(() => input.focus(), 50);
}
function closeCommand() {
  document.getElementById("command").classList.remove("open");
}
function renderCommands(q) {
  const term = (q || "").toLowerCase();
  let rows = [];
  features.forEach((f) =>
    rows.push({
      label: f[1],
      sub: f[2],
      action: () => {
        closeCommand();
        openFeature(f[3], f[1]);
      },
    }),
  );
  ranked().forEach((c) =>
    rows.push({
      label: "Career: " + c.title,
      sub: c.desc,
      action: () => {
        closeCommand();
        openCareer(c.id);
      },
    }),
  );
  [
    ["Courses", "courses"],
    ["Internships", "internships"],
    ["Hackathons", "hackathons"],
    ["Company Offers", "companies"],
  ].forEach(([label, key]) =>
    rows.push({
      label: label,
      sub: "Open the personalized " + label.toLowerCase() + " hub",
      action: () => {
        closeCommand();
        route(key);
      },
    }),
  );
  rows = rows
    .filter((x) => (x.label + " " + x.sub).toLowerCase().includes(term))
    .slice(0, 16);
  document.getElementById("cmdList").innerHTML =
    rows
      .map(
        (r, i) =>
          `<button class="commandrow" onclick="(${r.action.toString()})()"><b>${esc(r.label)}</b><div style="font-size:10px;color:var(--soft);margin-top:2px">${esc(r.sub)}</div></button>`,
      )
      .join("") || `<div class="empty" style="border:0">Nothing found.</div>`;
}
document
  .getElementById("cmdInput")
  .addEventListener("input", (e) => renderCommands(e.target.value));
document.getElementById("command").addEventListener("click", (e) => {
  if (e.target.id === "command") closeCommand();
});
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCommand();
  }
  if (e.key === "Escape") {
    closeCommand();
    closeModal();
  }
});
function updateClock() {
  const c = document.getElementById("clock");
  if (c)
    c.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
}
setInterval(updateClock, 1000);
window.addEventListener("resize", () => {
  if (document.getElementById("marketChart")) drawChart();
});
document.addEventListener("mousemove", (e) => {
  const el = document.getElementById("tilt");
  if (!el) return;
  const r = el.getBoundingClientRect();
  if (
    e.clientX >= r.left &&
    e.clientX <= r.right &&
    e.clientY >= r.top &&
    e.clientY <= r.bottom
  ) {
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
  } else el.style.transform = "";
});

function boot() {
  document.documentElement.dataset.theme = state.theme;
  /* Entry gate: always show the login screen first when this file is opened. */
  document.getElementById("root").innerHTML =
    `<div class="loginwrap"><div class="loginbox"><div class="loginhero"><span class="kicker">HORIZON / STUDENT CAREER INTELLIGENCE</span><h2>Career clarity, without the career-cliché.</h2><p>Start with a simple profile. Horizon then gives you a living workspace for discovery, skill gaps, roadmaps, projects, applications and market context.</p><div class="tags" style="margin-top:25px"><span class="tag">25 working modules</span><span class="tag">Light editorial UI</span><span class="tag">Local-first</span><span class="tag">Source-labelled</span></div></div><div class="loginpanel"><span class="kicker">WELCOME / LOGIN</span><h3>Enter Horizon</h3><p>Start or switch your local Horizon profile. This single-file build does not use a server-side account system.</p><input id="quickName" class="field" style="width:100%;margin-bottom:10px" placeholder="Your name" autocomplete="name"><input id="quickEmail" class="field" style="width:100%;margin-bottom:16px" placeholder="Email (optional)" autocomplete="email"><button class="btn primary" style="width:100%" onclick="quickStart()">Login / Continue →</button><div class="notice" style="margin-top:15px">Your information is kept in this browser. Use <b>Login / Switch</b> in the top navigation any time to return here.</div></div></div></div>`;
  updateClock();
}
function quickStart() {
  const name = document.getElementById("quickName").value.trim();
  const email = document.getElementById("quickEmail").value.trim();
  const errors = validateProfileFields({
    name,
    email,
    field: "",
    interests: "",
    skills: [],
  });
  if (errors.length) {
    toast(errors[0]);
    return;
  }
  state.name = name || "Student";
  state.email = email;
  save();
  route("home");
  setTimeout(openProfile, 250);
}
/* ===================== W-COMBINATORS AI ENGINE ===================== */
const WC = {
  model: "gemini-3.8-flash",
  endpoint: "/.netlify/functions/wcombinators",
  keyStore: "horizon-wc-gemini-key-v2",
  chatStore: "horizon-wc-chat-v2",
  maxHistory: 30,
  recognition: null,
  listening: false,
  speaking: false,
  busy: false,
  route: "home",
  panel: "home",
  pageText: "",
};
let wcChat = [];
try {
  const x = JSON.parse(localStorage.getItem(WC.chatStore) || "[]");
  if (Array.isArray(x))
    wcChat = x
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.text === "string",
      )
      .slice(-WC.maxHistory);
} catch (e) {}
function wcGetKey() {
  try {
    return (
      sessionStorage.getItem(WC.keyStore) ||
      localStorage.getItem(WC.keyStore) ||
      ""
    );
  } catch (e) {
    return "";
  }
}
function wcSaveChat() {
  try {
    localStorage.setItem(
      WC.chatStore,
      JSON.stringify(wcChat.slice(-WC.maxHistory)),
    );
  } catch (e) {}
}
function wcScroll() {
  const el = document.getElementById("wcMessages");
  if (el) requestAnimationFrame(() => (el.scrollTop = el.scrollHeight));
}
function wcSetSubtitle(t) {
  const el = document.getElementById("wcSubtitle");
  if (el) el.textContent = t;
}
function wcRefreshContext() {
  const root = document.getElementById("root");
  WC.pageText = (root?.innerText || "").replace(/\s+/g, " ").slice(0, 12000);
  const p = document.getElementById("wcPageChip");
  if (p)
    p.textContent = `HORIZON · ${WC.route}${WC.panel ? ` / ${WC.panel}` : ""}`;
  const k = document.getElementById("wcKeyState");
  if (k) k.textContent = wcGetKey() ? "AI + Google active" : "Local mode";
  const w = document.getElementById("wcWebChip");
  if (w)
    w.textContent = wcGetKey() ? "Google grounding" : "Google search ready";
  const v = document.getElementById("wcVoiceChip");
  if (v)
    v.textContent =
      window.SpeechRecognition || window.webkitSpeechRecognition
        ? "Voice ready"
        : "Voice unavailable";
}
function wcToggle() {
  const p = document.getElementById("wcPanel");
  if (!p) return;
  const open = !p.classList.contains("open");
  p.classList.toggle("open", open);
  if (open) {
    wcRenderChat();
    wcRefreshContext();
    setTimeout(() => document.getElementById("wcInput")?.focus(), 80);
  }
}
function wcToggleSettings() {
  const s = document.getElementById("wcSettings");
  if (!s) return;
  s.classList.toggle("open");
  const i = document.getElementById("wcApiKey");
  if (i) i.value = wcGetKey();
}
function wcClearChat() {
  wcChat = [];
  wcSaveChat();
  wcRenderChat();
  wcPush("assistant", "Chat cleared. I’m ready for your next problem.");
}
function wcPush(role, text, meta = {}) {
  wcChat.push({ role, text, meta });
  wcChat = wcChat.slice(-WC.maxHistory);
  wcSaveChat();
  wcRenderChat();
}
function wcRenderChat() {
  const box = document.getElementById("wcMessages");
  if (!box) return;
  const items = wcChat.length
    ? wcChat
    : [
        {
          role: "assistant",
          text: "Hey — I’m **W-Combinators**. I can guide you around HORIZON, act on your workspace, explain career data, build study plans, take voice input, and answer broader educational questions when Gemini is connected.",
          meta: {
            actions: [
              ["Open roadmap", "openFeature('roadmap')"],
              ["Open careers", "openFeature('careers')"],
              [
                "Build study plan",
                "wcSendText('Create a focused study plan for me')",
              ],
            ],
          },
        },
      ];
  box.innerHTML = items.map((m, i) => wcMessageHTML(m, i)).join("");
  wcScroll();
}
function escAttr(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function wcFormat(raw) {
  let s = esc(String(raw || ""));
  const blocks = [];
  s = s.replace(/```([\s\S]*?)```/g, (_, c) => {
    const id = `WCBLOCK${blocks.length}`;
    blocks.push(`<div class="wc-code">${c.trim()}</div>`);
    return id;
  });
  s = s.replace(/^\s*[-*]\s+(.+)$/gm, "<li>$1</li>");
  s = s.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/g, (x) => `<ul>${x}</ul>`);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>");
  s = `<p>${s}</p>`;
  blocks.forEach((b, i) => (s = s.replace(`WCBLOCK${i}`, b)));
  return s;
}
function wcMessageHTML(m, i) {
  const user = m.role === "user";
  let a = "";
  if (!user && m.meta?.actions)
    a += `<div class="wc-actions">${m.meta.actions.map((x) => `<button class="wc-action" onclick="${escAttr(x[1])}">${esc(x[0])}</button>`).join("")}</div>`;
  if (!user)
    a += `<div class="wc-actions"><button class="wc-action" onclick="wcSpeak(${i})">🔊 Read aloud</button>${m.meta?.searchUrl ? `<a class="wc-action" href="${escAttr(m.meta.searchUrl)}" target="_blank" rel="noopener">Google ↗</a>` : ""}${m.meta?.sources?.length ? `<button class="wc-action" onclick="wcShowSources(${i})">Sources (${m.meta.sources.length})</button>` : ""}</div>`;
  return `<div class="wc-msg ${user ? "user" : "assistant"}">${user ? "" : `<div class="wc-avatar">W</div>`}<div class="wc-bubble">${wcFormat(m.text)}${a}</div></div>`;
}
function wcScrollToEnd() {
  wcScroll();
}
function wcAutoResize() {
  const e = document.getElementById("wcInput");
  if (!e) return;
  e.style.height = "auto";
  e.style.height = Math.min(e.scrollHeight, 110) + "px";
}
function wcSendText(t) {
  const e = document.getElementById("wcInput");
  if (!e) return;
  e.value = t;
  wcAutoResize();
  wcSend();
}
function wcAppendTyping() {
  const b = document.getElementById("wcMessages");
  if (!b) return;
  document.getElementById("wcTypingMsg")?.remove();
  b.insertAdjacentHTML(
    "beforeend",
    `<div class="wc-msg assistant" id="wcTypingMsg"><div class="wc-avatar">W</div><div class="wc-bubble"><div class="wc-typing"><i></i><i></i><i></i></div></div></div>`,
  );
  wcScroll();
}
function wcRemoveTyping() {
  document.getElementById("wcTypingMsg")?.remove();
}
function wcSpeak(i) {
  const m = wcChat[i];
  if (!m || !window.speechSynthesis) {
    toast("Read-aloud is not supported in this browser.");
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(
    String(m.text || "").replace(/[*#`]/g, ""),
  );
  u.rate = 0.98;
  WC.speaking = true;
  u.onend = () => (WC.speaking = false);
  u.onerror = () => (WC.speaking = false);
  speechSynthesis.speak(u);
}
function wcShowSources(i) {
  const m = wcChat[i];
  if (!m?.meta?.sources?.length) return;
  openModal(
    `<div class="modalhead"><div><span class="kicker">W-COMBINATORS / SOURCES</span><h3 style="font:800 28px Fraunces">Grounding references</h3></div><button class="close" onclick="closeModal()">✕</button></div>${m.meta.sources.map((s) => `<div class="listrow"><div style="flex:1"><b>${esc(s.title || "Web source")}</b><div class="source">${esc(s.url || "")}</div></div><a class="resource-link" href="${escAttr(s.url || "#")}" target="_blank" rel="noopener">Open ↗</a></div>`).join("")}`,
  );
}
function wcInitVoice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const mic = document.getElementById("wcMic");
  if (!SR) {
    if (mic) {
      mic.disabled = true;
      mic.title = "Speech recognition is not supported in this browser";
    }
    return;
  }
  const r = new SR();
  r.lang = navigator.language || "en-IN";
  r.interimResults = true;
  r.continuous = false;
  r.maxAlternatives = 1;
  r.onstart = () => {
    WC.listening = true;
    mic?.classList.add("recording");
    wcSetSubtitle("Listening… speak your question");
  };
  r.onresult = (e) => {
    const input = document.getElementById("wcInput");
    if (!input) return;
    let interim = "",
      finalText = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i]?.[0]?.transcript || "";
      if (e.results[i].isFinal) finalText += t;
      else interim += t;
    }
    input.value = finalText || interim;
    wcAutoResize();
    if (finalText.trim()) setTimeout(wcSend, 100);
  };
  r.onerror = (e) => {
    WC.listening = false;
    mic?.classList.remove("recording");
    toast(
      e.error === "not-allowed"
        ? "Microphone permission was blocked. Allow access and try again."
        : `Voice input: ${e.error}`,
    );
  };
  r.onend = () => {
    WC.listening = false;
    mic?.classList.remove("recording");
    wcRefreshContext();
  };
  WC.recognition = r;
}
function wcToggleMic() {
  if (!WC.recognition) {
    toast("Voice input is not supported in this browser.");
    return;
  }
  if (WC.listening) {
    WC.recognition.stop();
    return;
  }
  try {
    WC.recognition.start();
  } catch (e) {
    toast("Microphone is busy. Try again.");
  }
}
function wcBuildKnowledge() {
  const c = careers
    .map(
      (x) =>
        `${x.title}: ${x.desc}; skills=${(x.skills || []).join(", ")}; growth=${x.growth}%; source=${x.source}; pay=${x.pay}`,
    )
    .join("\n");
  const r = [
    ...courseResources,
    ...internshipResources,
    ...hackathonResources,
    ...companyResources,
    ...guidanceResources,
  ]
    .slice(0, 180)
    .map((x) => `${x.kind}: ${x.title} — ${x.desc} — ${x.url}`)
    .join("\n");
  return `HORIZON STATE\nRoute=${WC.route}; Panel=${WC.panel}\nProfile=${state.name || "Student"}; field=${state.field || "not set"}; goal=${state.goal}; interests=${state.interests || "not set"}; skills=${(state.skills || []).join(", ") || "none"}\nTasks=${(state.tasks || []).map((t) => `${t.done ? "DONE" : "OPEN"}: ${t.title}`).join(" | ") || "none"}\nProjects=${(state.projects || []).map((p) => `${p.title} (${p.progress}%, ${p.status})`).join(" | ") || "none"}\nApplications=${(state.applications || []).map((a) => `${a.role} @ ${a.company} [${a.status}]`).join(" | ") || "none"}\nSaved careers=${
    (state.saved || [])
      .map((id) => careers.find((c) => c.id === id)?.title)
      .filter(Boolean)
      .join(", ") || "none"
  }\n\nFEATURES\n${features.map((f) => `${f[3]}: ${f[1]} — ${f[2]}`).join("\n")}\n\nCAREERS\n${c}\n\nRESOURCE CATALOG\n${r}\n\nCURRENT PAGE\n${WC.pageText}`;
}
function googleSearchText(q) {
  window.open(
    "https://www.google.com/search?q=" + encodeURIComponent(q),
    "_blank",
    "noopener",
  );
}
function wcDetectAction(q) {
  let m = q.trim().match(/^(?:open|go to|show|take me to)\s+(?:the\s+)?(.+)$/i);
  if (m) {
    const s = m[1].toLowerCase();
    const maps = [
      ["home", "home"],
      ["careers", "discover"],
      ["discover", "discover"],
      ["target", "target"],
      ["roadmap", "roadmap"],
      ["workspace", "workspace"],
      ["skills", "skills"],
      ["gaps", "gaps"],
      ["projects", "projects"],
      ["applications", "applications"],
      ["planner", "planner"],
      ["assessment", "assessment"],
      ["journal", "journal"],
      ["analytics", "analytics"],
      ["compare", "compare"],
      ["saved careers", "saved"],
      ["saved", "saved"],
      ["profile", "profile"],
      ["settings", "settings"],
      ["market", "market"],
      ["sources", "sources"],
      ["courses", "courses"],
      ["internships", "internships"],
      ["hackathons", "hackathons"],
      ["company offers", "companies"],
    ];
    const hit = maps.find(([k]) => s.includes(k));
    if (hit) return { type: "nav", panel: hit[1], label: hit[0] };
  }
  m = q.trim().match(/^add\s+(?:a\s+)?task\s*[:\-]?\s*(.+)$/i);
  if (m) return { type: "task", text: m[1] };
  m = q.trim().match(/^add\s+(?:a\s+)?project\s*[:\-]?\s*(.+)$/i);
  if (m) return { type: "project", text: m[1] };
  m = q
    .trim()
    .match(
      /^(?:set|make|choose)\s+(?:my\s+)?target\s+(?:career\s+)?(?:to|as)\s+(.+)$/i,
    );
  if (m) return { type: "target", text: m[1] };
  m = q.trim().match(/^(?:search|google)\s+(?:google\s+)?(?:for\s+)?(.+)$/i);
  if (m) return { type: "google", text: m[1] };
  return null;
}
function wcExecuteAction(a) {
  if (a.type === "nav") {
    if (
      [
        "home",
        "discover",
        "target",
        "workspace",
        "market",
        "sources",
        "courses",
        "internships",
        "hackathons",
        "companies",
      ].includes(a.panel)
    )
      route(a.panel);
    else {
      route("workspace");
      setTimeout(() => setPanel(a.panel), 0);
    }
    wcPush("assistant", `Done — I opened **${a.label}**.`);
    return;
  }
  if (a.type === "task") {
    state.tasks.push({ title: a.text.trim(), done: false });
    save();
    rerenderWorkspace("planner");
    WC.route = "workspace";
    WC.panel = "planner";
    wcRefreshContext();
    wcPush("assistant", `Added this task to Planner: **${a.text.trim()}**`);
    return;
  }
  if (a.type === "project") {
    state.projects.push({
      id: cryptoSafeId(),
      title: a.text.trim(),
      desc: "Created through W-Combinators.",
      status: "IDEA",
      progress: 10,
    });
    save();
    rerenderWorkspace("projects");
    WC.route = "workspace";
    WC.panel = "projects";
    wcRefreshContext();
    wcPush("assistant", `Created **${a.text.trim()}** in Project Studio.`);
    return;
  }
  if (a.type === "target") {
    const q = a.text.toLowerCase();
    const c = careers.find(
      (c) => q === c.id || q.includes(c.title.toLowerCase()),
    );
    if (c) {
      setTargetRole(c.id);
      route("target");
      wcPush(
        "assistant",
        `Target set to **${c.title}** and the target roadmap is open.`,
      );
    } else {
      googleSearchText(`${a.text} student career skills official`);
      wcPush(
        "assistant",
        `I couldn't map **${a.text}** to a built-in HORIZON career, so I opened Google research.`,
      );
    }
    return;
  }
  if (a.type === "google") {
    googleSearchText(a.text);
    wcPush("assistant", `Opened Google results for **${a.text}**.`);
  }
}
function wcLocalAnswer(q) {
  const x = q.toLowerCase();
  if (/^(hi|hello|hey|yo)\b/.test(x))
    return "Hey! 👋 Tell me the problem. I can guide you through HORIZON or help build a study plan.";
  if (/who are you|what are you|w-combinators/.test(x))
    return "I’m **W-Combinators**, the AI assistant built into HORIZON.";
  if (/what can you do|help/.test(x))
    return "I can navigate HORIZON, create tasks/projects, set target careers, explain HORIZON data, build study plans, take voice input, read answers aloud, and use Gemini + Google Search for broader educational questions.";
  if (/where am i|current page|what page/.test(x))
    return `You’re on **${WC.route}**${WC.panel ? ` → **${WC.panel}**` : ""}.`;
  const kb = [
    [
      /photosynthesis/,
      "Photosynthesis uses light energy to convert carbon dioxide and water into stored chemical energy in plants, releasing oxygen. I can explain it at school, NEET, or deeper level.",
    ],
    [
      /newton.*laws?|laws?.*newton/,
      "Newton’s three laws describe inertia, F=ma, and action–reaction pairs.",
    ],
    [
      /quadratic/,
      "A quadratic equation has the form ax² + bx + c = 0. The quadratic formula is x = (−b ± √(b²−4ac))/(2a).",
    ],
    [
      /cell membrane|plasma membrane/,
      "The plasma membrane is a selectively permeable phospholipid bilayer containing proteins and controlling movement of substances.",
    ],
    [
      /noun|pronoun|adverb|adjective|conjunction/,
      "Noun, pronoun, adjective, adverb and conjunction are parts of speech. I can also quiz you on them.",
    ],
  ];
  for (const [re, ans] of kb) if (re.test(x)) return ans;
  return "I’m in **local mode**. Website commands and built-in guidance work now; for open-ended educational answers, connect Gemini in ⚙ or use the Google button.";
}
function wcHistory() {
  return wcChat
    .slice(-12)
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.text || "") }],
    }));
}
async function wcAskGemini(q, key) {
  WC.busy = true;
  wcAppendTyping();
  const system = `You are W-Combinators, an educational AI agent inside HORIZON. Be fluent, problem-first, concise but helpful. Use the supplied HORIZON state as authoritative for HORIZON-specific facts and actions. Never invent site features or user data. For general education, teach clearly and step-by-step. Use Google Search grounding for current or niche facts. If a response can be solved directly from the site context, do that without unnecessary web search.

HORIZON KNOWLEDGE:
${wcBuildKnowledge()}`;
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [...wcHistory(), { role: "user", parts: [{ text: q }] }],
  };
  const parse = async (r) => {
    const d = await r.json();
    if (!r.ok) throw new Error(d?.error || `HTTP ${r.status}`);
    if (!d?.text) throw new Error("AI returned no text.");
    return d;
  };
  try {
    let d = null;
    try {
      const r = await fetch(WC.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: body.contents,
          systemInstruction: body.systemInstruction,
        }),
      });
      if (r.status !== 404 && r.status !== 405) d = await parse(r);
    } catch (serverErr) {}
    if (!d && key) {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${WC.model}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": key,
          },
          body: JSON.stringify({
            ...body,
            tools: [{ google_search: {} }],
            generationConfig: {
              maxOutputTokens: 1800,
              thinkingConfig: { thinkingLevel: "low" },
            },
          }),
        },
      );
      d = await parse(r);
      const chunks =
        d?.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      d.sources = d.sources || [];
      for (const c of chunks) {
        const w = c?.web,
          u = w?.uri || w?.url;
        if (u && !d.sources.some((s) => s.url === u))
          d.sources.push({ url: u, title: w.title || u });
      }
    }
    if (!d)
      throw new Error(
        "No AI provider is connected. Add GEMINI_API_KEY on Netlify or connect a Gemini key in W-Combinators settings.",
      );
    wcRemoveTyping();
    wcPush("assistant", d.text, {
      sources: (d.sources || []).slice(0, 8),
      searchUrl: "https://www.google.com/search?q=" + encodeURIComponent(q),
    });
    wcSetSubtitle(
      d.grounded
        ? "Answered · Google-grounded"
        : d.model
          ? "Answered · Gemini"
          : "Answered · AI",
    );
  } catch (e) {
    wcRemoveTyping();
    wcPush(
      "assistant",
      `I couldn’t reach the live AI service. **Your HORIZON data was not changed.**\n\n${String(e.message || e)}\n\nYou can still use website commands and local educational guidance, or connect Gemini in ⚙.`,
    );
    wcSetSubtitle("Web guide · study co-pilot");
  } finally {
    WC.busy = false;
    wcRefreshContext();
  }
}
async function wcSend() {
  if (WC.busy) return;
  const i = document.getElementById("wcInput");
  const q = (i?.value || "").trim();
  if (!q) return;
  i.value = "";
  wcAutoResize();
  wcPush("user", q);
  const a = wcDetectAction(q);
  if (a) {
    wcExecuteAction(a);
    return;
  }
  const key = wcGetKey();
  const serverKnown = location.protocol.startsWith("http");
  if (!serverKnown && !key) {
    wcPush("assistant", wcLocalAnswer(q), {
      searchUrl: "https://www.google.com/search?q=" + encodeURIComponent(q),
    });
    return;
  }
  await wcAskGemini(q, key);
}
function wcSaveApiKey() {
  const i = document.getElementById("wcApiKey"),
    key = (i?.value || "").trim();
  if (!key) {
    toast("Paste a Gemini API key first.");
    return;
  }
  try {
    sessionStorage.setItem(WC.keyStore, key);
  } catch (e) {
    try {
      localStorage.setItem(WC.keyStore, key);
    } catch (_e) {}
  }
  wcRefreshContext();
  wcSetSubtitle("Gemini connected · ready");
  toast("W-Combinators is connected.");
}
function wcRemoveApiKey() {
  try {
    sessionStorage.removeItem(WC.keyStore);
    localStorage.removeItem(WC.keyStore);
  } catch (e) {}
  const i = document.getElementById("wcApiKey");
  if (i) i.value = "";
  wcRefreshContext();
  toast("Gemini key removed.");
}
async function wcTestApi() {
  const key = (document.getElementById("wcApiKey")?.value || wcGetKey()).trim();
  if (!key) {
    toast("Add a Gemini API key first.");
    return;
  }
  toast("Testing Gemini…");
  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${WC.model}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: "Reply exactly: W-COMBINATORS ONLINE" }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 20,
            thinkingConfig: { thinkingLevel: "low" },
          },
        }),
      },
    );
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    wcSaveApiKey();
    toast("Connection works — W-Combinators is online.");
  } catch (e) {
    toast("Connection failed: " + String(e.message || e).slice(0, 150));
  }
}
function wcBind() {
  wcInitVoice();
  const i = document.getElementById("wcInput");
  if (i) {
    i.addEventListener("input", wcAutoResize);
    i.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        wcSend();
      }
    });
  }
  wcRenderChat();
  wcRefreshContext();
}
function wcSyncRoute(name) {
  WC.route = name || "home";
  setTimeout(wcRefreshContext, 0);
}
function wcSyncPanel(name) {
  WC.panel = name || "";
  setTimeout(wcRefreshContext, 0);
}
const __wcRoute = route;
route = function (name) {
  __wcRoute(name);
  wcSyncRoute(name);
};
const __wcSetPanel = setPanel;
setPanel = function (id) {
  __wcSetPanel(id);
  wcSyncPanel(id);
};

boot();
wcBind();
wcRefreshContext();
