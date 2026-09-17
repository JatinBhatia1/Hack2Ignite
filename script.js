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
  wef: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  ncs: "https://www.ncs.gov.in/",
  googleSkills: "https://www.skills.google/",
  googleCertificates: "https://grow.google/intl/en_in/certificates/",
  googleDevelopers: "https://www.youtube.com/@GoogleDevelopers",
  microsoftLearn: "https://learn.microsoft.com/en-in/training/",
  microsoftAI: "https://learn.microsoft.com/en-us/ai/",
  awsSkillBuilder: "https://skillbuilder.aws/",
  awsDevelopers: "https://www.youtube.com/@amazonwebservices",
  kaggleLearn: "https://www.kaggle.com/learn",
  kagglePython: "https://www.kaggle.com/learn/python",
  githubSkills: "https://skills.github.com/",
  ciscoNetAcad: "https://www.netacad.com/en",
  freeCodeCamp: "https://www.youtube.com/@freecodecamp",
  unstopInternships: "https://unstop.com/internship-portal",
  unstopHackathons: "https://unstop.com/hackathons",
  hack2skill: "https://hack2skill.com/",
  devpost: "https://devpost.com/hackathons?status=open",
  mlh: "https://mlh.io/",
  mlhEvents: "https://mlh.io/seasons/2026/events",
  mlhGhw: "https://ghw.mlh.io/",
  googleInternships:
    "https://www.google.com/about/careers/applications/internships",
  googleJobs: "https://www.google.com/about/careers/applications/jobs/results/",
  microsoftStudents: "https://careers.microsoft.com/v2/global/en/students",
  amazonInternships:
    "https://amazon.jobs/content/en-gb/career-programs/university/internships-for-students",
  ibmInternships: "https://www.ibm.com/in-en/careers/internships",
  nvidiaUniversity:
    "https://www.nvidia.com/en-eu/about-nvidia/careers/university-recruiting-new/",
  adobeUniversity: "https://www.adobe.com/careers/university.html",
  salesforceInternships:
    "https://www.salesforce.com/company/careers/university/internships/",
};

const careers = [
  {
    id: "software",
    title: "Software Developer",
    score: 94,
    pay: "$135,980 median",
    growth: 10,
    skills: ["JavaScript", "Python", "Git", "APIs", "SQL"],
    desc: "Design and build software products, services and systems.",
    source: "U.S. BLS OOH",
    url: SOURCES.blsSoftware,
    demands: ["Programming", "APIs", "Version control", "Databases", "Testing"],
    tracks: ["Frontend", "Backend", "Full-stack", "Cloud", "Developer tools"],
  },
  {
    id: "data",
    title: "Data Scientist",
    score: 95,
    pay: "$120,230 median",
    growth: 35,
    skills: [
      "Python",
      "Statistics",
      "SQL",
      "Machine Learning",
      "Visualization",
    ],
    desc: "Use analytical tools and statistical methods to extract meaningful insights from data.",
    source: "U.S. BLS OOH",
    url: SOURCES.blsData,
    demands: [
      "Statistics",
      "Data cleaning",
      "Modeling",
      "Experimentation",
      "Communication",
    ],
    tracks: [
      "Analytics",
      "ML",
      "Applied AI",
      "Experimentation",
      "Business intelligence",
    ],
  },
  {
    id: "cyber",
    title: "Information Security Analyst",
    score: 92,
    pay: "$129,180 median",
    growth: 21,
    skills: ["Networking", "Linux", "Python", "Security", "Risk"],
    desc: "Protect systems and data by evaluating vulnerabilities and improving security controls.",
    source: "U.S. BLS OOH",
    url: SOURCES.blsCyber,
    demands: [
      "Networking",
      "Linux",
      "Threat analysis",
      "Security controls",
      "Risk",
    ],
    tracks: ["SOC", "Cloud security", "AppSec", "Threat intelligence", "GRC"],
  },
  {
    id: "systems",
    title: "Computer Systems Analyst",
    score: 88,
    pay: "$105,850 median",
    growth: 8,
    skills: [
      "Systems Thinking",
      "SQL",
      "APIs",
      "Communication",
      "Requirements",
    ],
    desc: "Study organizations and technology needs and design systems that improve efficiency.",
    source: "U.S. BLS OOH",
    url: SOURCES.blsSystems,
    demands: [
      "Requirements",
      "Process analysis",
      "SQL",
      "Systems thinking",
      "Stakeholder communication",
    ],
    tracks: [
      "Business systems",
      "IT consulting",
      "Product analysis",
      "Enterprise systems",
    ],
  },
  {
    id: "webdesign",
    title: "Web / Digital Interface Designer",
    score: 80,
    pay: "$104,000 median for digital interface designers",
    growth: 6,
    skills: [
      "Figma",
      "UX Research",
      "Prototyping",
      "Design Systems",
      "Communication",
    ],
    desc: "Design digital interfaces and experiences around user needs and interaction.",
    source: "U.S. BLS OOH",
    url: "https://www.bls.gov/ooh/arts-and-design/web-developers.htm",
    demands: [
      "User research",
      "Prototyping",
      "Visual systems",
      "Interaction design",
      "Communication",
    ],
    tracks: ["UX", "UI", "Product design", "Design systems", "Research"],
  },
];
const courseResources = [
  {
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
      "project management",
    ],
    desc: "Career certificates covering Data Analytics, Advanced Data Analytics, Cybersecurity, UX Design, IT Support, IT Automation and more.",
    url: SOURCES.googleCertificates,
    alt: "Google Skills",
    altUrl: SOURCES.googleSkills,
  },
  {
    title: "Google Skills / Cloud",
    provider: "Google",
    tags: [
      "cloud",
      "ai",
      "ml",
      "machine learning",
      "security",
      "networking",
      "python",
    ],
    desc: "Official Google Cloud learning paths, courses, badges and hands-on labs.",
    url: SOURCES.googleSkills,
    alt: "Google Developers",
    altUrl: SOURCES.googleDevelopers,
  },
  {
    title: "Microsoft Learn",
    provider: "Microsoft",
    tags: [
      "python",
      "data",
      "analytics",
      "ai",
      "ml",
      "cybersecurity",
      "security",
      "azure",
      "github",
      "developer",
      "cloud",
    ],
    desc: "Self-directed learning paths and modules across developer, data, AI, cloud and security skills.",
    url: SOURCES.microsoftLearn,
    alt: "Microsoft AI",
    altUrl: SOURCES.microsoftAI,
  },
  {
    title: "Kaggle Learn",
    provider: "Kaggle",
    tags: [
      "python",
      "data",
      "pandas",
      "sql",
      "machine learning",
      "ml",
      "visualization",
      "ai",
      "statistics",
    ],
    desc: "Short, practical courses including Python, Pandas, SQL, machine learning, data visualization and deep learning.",
    url: SOURCES.kaggleLearn,
    alt: "Kaggle Python",
    altUrl: SOURCES.kagglePython,
  },
  {
    title: "GitHub Skills",
    provider: "GitHub",
    tags: [
      "git",
      "github",
      "developer",
      "programming",
      "open source",
      "devops",
    ],
    desc: "Interactive GitHub courses covering Git, Markdown, pull requests, GitHub Pages and collaboration workflows.",
    url: SOURCES.githubSkills,
    alt: "GitHub",
    altUrl: "https://github.com/",
  },
  {
    title: "Cisco Networking Academy",
    provider: "Cisco",
    tags: [
      "networking",
      "cybersecurity",
      "security",
      "linux",
      "it",
      "python",
      "programming",
    ],
    desc: "Free online learning across networking, cybersecurity, AI & data science, programming and IT.",
    url: SOURCES.ciscoNetAcad,
    alt: "Cisco",
    altUrl: "https://www.cisco.com/",
  },
  {
    title: "AWS Skill Builder",
    provider: "AWS",
    tags: [
      "aws",
      "cloud",
      "devops",
      "security",
      "machine learning",
      "ml",
      "python",
      "data",
    ],
    desc: "Official AWS training and learning paths for cloud, AI/ML, data, security and developer skills.",
    url: SOURCES.awsSkillBuilder,
    alt: "AWS Developers",
    altUrl: SOURCES.awsDevelopers,
  },
  {
    title: "YouTube — Google for Developers",
    provider: "YouTube / Google",
    tags: [
      "javascript",
      "python",
      "web",
      "android",
      "firebase",
      "cloud",
      "ai",
      "ml",
      "developer",
    ],
    desc: "Official developer tutorials, technical talks and product learning from Google for Developers.",
    url: SOURCES.googleDevelopers,
    alt: "Google Developers",
    altUrl: "https://developers.google.com/",
  },
  {
    title: "YouTube — freeCodeCamp",
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
    desc: "Long-form programming and technical learning videos from the freeCodeCamp community.",
    url: SOURCES.freeCodeCamp,
    alt: "freeCodeCamp",
    altUrl: "https://www.freecodecamp.org/",
  },
];

const internshipResources = [
  {
    title: "Google Internships",
    provider: "Google Careers",
    tags: [
      "python",
      "software",
      "ai",
      "ml",
      "data",
      "design",
      "business",
      "engineering",
    ],
    desc: "Official Google internship hub; listings change by team, location and academic program.",
    url: SOURCES.googleInternships,
  },
  {
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
    desc: "Official student and early-career portal with global university internships and other programs.",
    url: SOURCES.microsoftStudents,
  },
  {
    title: "Amazon Student Internships",
    provider: "Amazon Jobs",
    tags: ["software", "aws", "cloud", "data", "ai", "business", "engineering"],
    desc: "Official student internship listings and program information from Amazon Jobs.",
    url: SOURCES.amazonInternships,
  },
  {
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
    desc: "Official IBM internship portal, including roles and guidance for student candidates.",
    url: SOURCES.ibmInternships,
  },
  {
    title: "NVIDIA University Recruiting",
    provider: "NVIDIA Careers",
    tags: [
      "ai",
      "ml",
      "python",
      "cuda",
      "hardware",
      "software",
      "data",
      "research",
    ],
    desc: "Official NVIDIA early-talent page covering internships and other university programs.",
    url: SOURCES.nvidiaUniversity,
  },
  {
    title: "Adobe University",
    provider: "Adobe Careers",
    tags: [
      "design",
      "ux",
      "ui",
      "software",
      "creative",
      "marketing",
      "engineering",
    ],
    desc: "Official Adobe university recruiting hub for intern and university-grad roles.",
    url: SOURCES.adobeUniversity,
  },
  {
    title: "Salesforce Futureforce",
    provider: "Salesforce Careers",
    tags: ["software", "ai", "data", "cloud", "product", "design", "sales"],
    desc: "Official university internship programs across tech, product, sales, AI research and corporate functions.",
    url: SOURCES.salesforceInternships,
  },
  {
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
    ],
    desc: "India-focused internship marketplace with live listings.",
    url: SOURCES.unstopInternships,
  },
];

const hackathonResources = [
  {
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
    desc: "Live India-focused hackathon directory with eligibility, deadlines and registration details.",
    url: SOURCES.unstopHackathons,
    status: "LIVE DIRECTORY",
  },
  {
    title: "Devpost Open Hackathons",
    provider: "Devpost",
    tags: ["ai", "ml", "software", "web", "data", "global", "hackathon"],
    desc: "Open hackathon directory with online and in-person events.",
    url: SOURCES.devpost,
    status: "OPEN EVENTS",
  },
  {
    title: "MLH Hackathon Season",
    provider: "Major League Hacking",
    tags: [
      "coding",
      "software",
      "open source",
      "student",
      "hackathon",
      "global",
    ],
    desc: "Official student hackathon league and event calendar.",
    url: SOURCES.mlhEvents,
    status: "2026 CALENDAR",
  },
];

const companyResources = [
  {
    title: "Google",
    provider: "Google Careers",
    tags: [
      "software",
      "python",
      "ai",
      "ml",
      "data",
      "security",
      "design",
      "cloud",
    ],
    desc: "Official jobs and internship portals. Search by skill, role and location.",
    url: SOURCES.googleJobs,
  },
  {
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
    ],
    desc: "Early-in-profession portal plus global student internship programs.",
    url: SOURCES.microsoftStudents,
  },
  {
    title: "Amazon / AWS",
    provider: "Amazon Jobs",
    tags: ["software", "aws", "cloud", "data", "ai", "business"],
    desc: "Student internships, new-grad programs and AWS-oriented early-career roles.",
    url: SOURCES.amazonInternships,
  },
];

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
    "Career Match Engine",
    "Calculate transparent profile-fit signals against a small, source-backed occupation set.",
    "careers",
  ],
  [
    "04",
    "Career Explorer",
    "Search careers by title or required skills and inspect their source cards.",
    "careers",
  ],
  [
    "05",
    "Skill-Gap Audit",
    "See where your current skills intersect or miss the skills used by a target path.",
    "gaps",
  ],
  [
    "06",
    "Roadmap Generator",
    "Turn a target path into a four-stage action plan.",
    "roadmap",
  ],
  [
    "07",
    "Weekly Planner",
    "Create and complete weekly actions with local persistence.",
    "planner",
  ],
  [
    "08",
    "Project Studio",
    "Create portfolio evidence tied to skills and target paths.",
    "projects",
  ],
  [
    "09",
    "Application Tracker",
    "Track opportunities, stages and next actions in one pipeline.",
    "applications",
  ],
  [
    "10",
    "Market Radar",
    "Explore current source-labelled occupation growth and pay benchmarks.",
    "market",
  ],
  [
    "11",
    "Source Panel",
    "See exactly which public source a market fact came from.",
    "sources",
  ],
  [
    "12",
    "Theme Studio",
    "Switch among four light editorial visual themes.",
    "theme",
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
  skill: { technical: 72, creative: 62, analytical: 78, communication: 66 },
  assessment: [],
  theme: "atelier",
  focus: false,
};

let state;
try {
  state =
    JSON.parse(localStorage.getItem("horizon-max-state") || "null") ||
    structuredClone(defaultState);
} catch (e) {
  state = structuredClone(defaultState);
}

function save() {
  try {
    localStorage.setItem("horizon-max-state", JSON.stringify(state));
  } catch (e) {}
}

function esc(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
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
  if (!state.skills.length) return "Add 3 skills in Skill Calibration";
  if (!state.saved.length) return "Save a career worth researching";
  if (!state.tasks.some((x) => !x.done)) return "Generate a roadmap task";
  return "Finish one high-impact task this week";
}

function ranked() {
  const mine = state.skills.map((x) => x.toLowerCase());
  return careers
    .map((c) => {
      const hits = c.skills.filter((s) =>
        mine.includes(s.toLowerCase()),
      ).length;
      const score = Math.min(99, c.score + Math.min(8, hits * 2));
      return { ...c, score };
    })
    .sort((a, b) => b.score - a.score);
}

function fitFor(c) {
  return ranked().find((x) => x.id === c.id)?.score || c.score;
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
