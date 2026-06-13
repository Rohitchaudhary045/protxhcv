export const siteConfig = {
  title: "HCV | Hack Cyber Verse",
  description: "Rohit Chaudhary - Cyber Security Engineer | VAPT - Web - API - Network Security | 3x CVE Researcher | 40+ Hall of Fame | CEH v13 - CAP - CNSP - CCSP-AWS | WorldSkills Mentor",
  language: "en",
};

export const headerConfig = {
  brandMark: "HCV",
  noteCountSuffix: " notes",
  editorViewLabel: "Editor",
  graphViewLabel: "Graph",
  backgroundButtonTitle: "Switch Background",
  importButtonLabel: "",
};

export const backgroundConfig = {
  defaultMode: 'solid' as const,
  defaultSolidColor: '#020B13',
  options: [
    { id: 'solid' as const, label: "Dark" },
  ],
  solidColors: [
    { color: '#020B13', label: "Deep" },
    { color: '#0A1929', label: "Surface" },
    { color: '#1a1a2e', label: "Navy" },
    { color: '#0d1f0d', label: "Forest" },
  ],
};

export const sidebarConfig = {
  searchPlaceholder: "Search portfolio...",
  noResultsLabel: "No results found",
  emptyNotesLabel: "No items",
  selectAllLabel: "All",
  clearSelectionLabel: "Clear",
  selectedCountSuffix: " selected",
  deleteSelectedLabel: "Delete",
  cancelLabel: "Cancel",
  newNoteLabel: "New",
  manageLabel: "Manage",
};

export const editorConfig = {
  editLabel: "Edit",
  previewLabel: "Preview",
  sourceLabel: "Source",
  deleteLabel: "Delete",
  cancelLabel: "Cancel",
  titlePlaceholder: "Title...",
  contentPlaceholder: "Content...",
  outgoingLinksLabel: "Links:",
  incomingLinksLabel: "Backlinks:",
};

export const graphConfig = {
  notesLabel: "items",
  connectionsLabel: "connections",
  emptyGraphLabel: "No items yet",
};

export const moonConfig = {
  phaseLabels: ["New", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full", "Waning Gibbous", "Last Quarter", "Waning Crescent"],
};

export const appConfig = {
  emptyStateLabel: "Select an item to view details",
};

export const storageConfig = {
  notesKey: "cyber-portfolio-v1",
};

// ============================================================
// PERSONAL DATA
// ============================================================

export const personalData = {
  name: "Rohit Chaudhary",
  title: "Cyber Security Engineer | VAPT - Web - API - Network Security | 3x CVE Researcher | 40+ Hall of Fame | CEH v13 - CAP - CNSP - CCSP-AWS | WorldSkills Mentor",
  subtitle: "CYBER SECURITY ENGINEER | VAPT - WEB - API - NETWORK SECURITY | 3x CVE RESEARCHER | 40+ HALL OF FAME",
  summary: "Offensive security specialist with hands-on experience in VAPT, Web & API Security, and Network Penetration Testing. Discovered 3 CVEs (CVSS up to 8.5), earned 40+ Hall of Fame recognitions from Tesla, NASA, Dell, Cisco, Zerodha, and others. CEH v13 | CAP | CNSP | CCSP-AWS. WorldSkills Cyber Security Mentor.",
  location: "Gurugram, India",
  email: "rohit.chaudhary@example.com",
  linkedin: "https://www.linkedin.com/in/rohit-chaudhary-045/",
  github: "https://github.com/rohitchaudhary",
  instagram: "https://www.instagram.com/hackcyberverse.in/",
  medium: "https://www.linkedin.com/in/rohit-chaudhary-045/",
  portfolio: "https://rohitchaudhary.dev",
  about: [
    "I am a Cyber Security Engineer with deep expertise in Vulnerability Assessment and Penetration Testing (VAPT), Web Application Security, API Security Testing, Network Security, and Red Teaming. I have discovered 3 CVEs with CVSS scores ranging from 6.5 to 8.5 and earned 40+ Hall of Fame recognitions from leading organizations including Tesla, NASA, Dell, Cisco, Zerodha, Snapchat, HDFC Bank, Nykaa, and more.",
    "I am a Cyber Security Mentor for WorldSkills Shanghai 2026, a Trainer for Cyber Secured Africa's Operation Black Trace, and an active Security Researcher on Bugcrowd. I hold CEH v13, CAP, CNSP with Merit, CCSP-AWS, and multiple other certifications. Currently working at Think Future Technologies where I lead security testing and vulnerability assessment engagements for enterprise clients."
  ],
  skillTags: ["VAPT", "Web AppSec", "API Security", "Red Teaming", "CEH v13", "CVE Researcher", "Bug Bounty"],
};

// ============================================================
// STATS
// ============================================================

export const statsData = [
  { value: 3, label: "CVEs Assigned", suffix: "" },
  { value: 40, label: "Hall of Fame", suffix: "+" },
  { value: 5, label: "VAPT Engagements", suffix: "+" },
  { value: 2, label: "Years Security Research", suffix: "+" },
];

export const achievementStats = [
  { value: 3, label: "CVEs Assigned", suffix: "" },
  { value: 40, label: "Hall of Fame Recognitions", suffix: "+" },
  { value: 5, label: "Professional VAPT Engagements", suffix: "+" },
  { value: 2, label: "Years of Security Research", suffix: "+" },
  { value: 100, label: "Vulnerabilities Reported", suffix: "+" },
  { value: 0, label: "WorldSkills 2026 Mentor", suffix: "", text: "WorldSkills 2026 Mentor" },
  { value: 0, label: "Trainer - Cyber Secured Africa", suffix: "", text: "Trainer - Cyber Secured Africa" },
  { value: 0, label: "Bugcrowd Security Researcher", suffix: "", text: "Bugcrowd Security Researcher" },
];

// ============================================================
// EXPERIENCE - Full LinkedIn History
// ============================================================

export const experienceData = [
  {
    position: "Cyber Security Engineer L1",
    company: "Think Future Technologies",
    period: "Mar 2026 - Present",
    duration: "4 mos",
    location: "Remote",
    type: "Full-time",
    bullets: [
      "Conducted comprehensive vulnerability assessments and web application security testing",
      "Monitored network traffic and logs with Wireshark and Splunk to support incident analysis and security operations",
      "Engaged in reconnaissance to identify security vulnerabilities, enhancing the overall security posture of the organization",
    ],
    tags: ["VAPT", "Wireshark", "Splunk", "Web Security"],
  },
  {
    position: "Software Trainee",
    company: "Think Future Technologies",
    period: "Sep 2025 - Mar 2026",
    duration: "7 mos",
    location: "Remote",
    type: "Full-time",
    bullets: [
      "Gained hands-on experience in cybersecurity, focusing on VAPT, web and network security, and reverse engineering",
      "Utilized industry-standard tools such as Nmap, Burp Suite, and SQLMap to conduct security assessments",
      "Developed skills in analyzing network traffic with Wireshark and monitoring logs using Splunk",
    ],
    tags: ["Burp Suite", "Nmap", "SQLMap", "Wireshark", "Reverse Engineering"],
  },
  {
    position: "Security Analyst",
    company: "Think Future Technologies",
    period: "Jun 2025 - Sep 2025",
    duration: "4 mos",
    location: "Hybrid",
    type: "Internship",
    bullets: [
      "Performed Vulnerability Assessment & Penetration Testing (VAPT) on web applications, APIs, and networks",
      "Identified, analyzed, and reported critical vulnerabilities aligned with OWASP Top 10",
      "Collaborated with the team to suggest remediation measures for identified risks",
      "Prepared detailed security reports with technical findings and business impact",
    ],
    tags: ["VAPT", "OWASP Top 10", "Web App Security", "API Security"],
  },
  {
    position: "Cybersecurity Trainer",
    company: "Operation Black Trace, Cyber Secured Africa",
    period: "May 2026 - Present",
    duration: "2 mos",
    location: "Accra, Ghana - Remote",
    type: "Freelance",
    bullets: [
      "Officially appointed as a Trainer for the Operation Black Trace Workshop by Cyber Secured Africa",
      "Delivered comprehensive training on cybersecurity, digital forensics, and fraud prevention",
      "Contributed to capacity building for law enforcement, legal professionals, and bankers across Africa",
      "Supported initiatives aimed at raising cybersecurity awareness and preventing cybercrime",
    ],
    tags: ["Digital Forensics", "Fraud Prevention", "Training", "Cybercrime"],
  },
  {
    position: "Security Researcher",
    company: "Bugcrowd",
    period: "Dec 2023 - Present",
    duration: "2 yrs 7 mos",
    location: "India - Remote",
    type: "Self-employed",
    bullets: [
      "Discovered and reported critical vulnerabilities for clients like Dell and Monash University",
      "Employed tools like Burp Suite and SQLMap to conduct comprehensive security assessments",
      "Focused on OWASP Top 10 vulnerabilities to ensure robust web application security",
      "40+ Hall of Fame recognitions from leading organizations worldwide",
    ],
    tags: ["Bug Bounty", "Burp Suite", "SQLMap", "OWASP Top 10"],
  },
  {
    position: "Volunteer Mentor",
    company: "CSI Linux - Cybersecurity For All Program",
    period: "Mar 2025 - Jun 2026",
    duration: "1 yr 4 mos",
    location: "Remote",
    type: "Apprenticeship",
    bullets: [
      "Served as a mentor for the Cybersecurity For All program, a community initiative to educate the public about online security",
      "Prepared presentations, reports, and designed practice questions",
      "Coordinated logistics for special events, such as conferences and workshops",
    ],
    tags: ["Mentoring", "Community", "OSINT", "Digital Forensics"],
  },
  {
    position: "Cyber Security Team Lead",
    company: "TECHNIKI",
    period: "Sep 2024 - Jun 2026",
    duration: "1 yr 10 mos",
    location: "Gurugram, India - On-site",
    type: "Full-time",
    bullets: [
      "Conducted engaging sessions on ethical hacking, network security, and cyber awareness to inspire peers",
      "Empowered students through hands-on workshops and collaborative initiatives, fostering a secure digital culture",
      "Organized and created Capture The Flag (CTF) events to enhance practical cybersecurity skills",
    ],
    tags: ["CTF", "Ethical Hacking", "Network Security", "Team Leadership"],
  },
  {
    position: "Infosec Engineer Intern",
    company: "CredBox Services",
    period: "Sep 2024 - Mar 2025",
    duration: "7 mos",
    location: "Mumbai, India - Remote",
    type: "Internship",
    bullets: [
      "Gained practical experience in information security and vulnerability management",
      "Assisted in security assessments and reporting for client applications",
    ],
    tags: ["InfoSec", "Vulnerability Management"],
  },
  {
    position: "Core Member & Speaker",
    company: "Cyberonites Club",
    period: "Mar 2023 - Apr 2024",
    duration: "1 yr 2 mos",
    location: "Mathura, India - On-site",
    type: "Full-time",
    bullets: [
      "Delivered engaging sessions and workshops on cybersecurity, ethical hacking, and network security",
      "Organized and led events to enhance cyber awareness among students",
      "Collaborated with the core team to foster a robust student cybersecurity community",
    ],
    tags: ["Public Speaking", "Cybersecurity Awareness", "Workshops"],
  },
  {
    position: "Cyber Security Intern",
    company: "Cyber Secured India",
    period: "Apr 2022 - Jun 2022",
    duration: "3 mos",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Gained hands-on experience with OWASP Top 10 web vulnerabilities through practical labs and testing on vulnerable machines",
      "Developed detailed reports on identified vulnerabilities, enhancing understanding of security risks",
      "Collaborated with team members to strengthen cybersecurity measures and improve overall security posture",
    ],
    tags: ["OWASP Top 10", "VAPT Reporting"],
  },
];

// ============================================================
// SKILLS & TOOLS
// ============================================================

export const skillsData = {
  radar: [
    { name: "Offensive Security", score: 92 },
    { name: "Web App Security", score: 90 },
    { name: "Network Security", score: 85 },
    { name: "Reverse Engineering", score: 80 },
    { name: "Security Research", score: 88 },
  ],
  categories: [
    {
      title: "Web & API Security",
      icon: "Globe",
      skills: ["Burp Suite", "Postman", "Acunetix", "Netsparker", "OWASP ZAP", "SQLMap"],
    },
    {
      title: "Network Security",
      icon: "Network",
      skills: ["Nmap", "Wireshark", "Nessus", "Metasploit"],
    },
    {
      title: "SOC & Monitoring",
      icon: "Monitor",
      skills: ["Splunk", "Wazuh", "Elasticsearch"],
    },
    {
      title: "Operating Systems",
      icon: "Laptop",
      skills: ["Kali Linux", "Linux Administration", "Windows Security"],
    },
    {
      title: "Reverse Engineering",
      icon: "Binary",
      skills: ["Ghidra", "x64dbg", "PE Studio", "Detect It Easy (DIE)"],
    },
    {
      title: "Digital Forensics",
      icon: "Fingerprint",
      skills: ["Volatility", "Autopsy"],
    },
    {
      title: "Cloud & Platforms",
      icon: "Cloud",
      skills: ["Microsoft Azure", "AWS"],
    },
    {
      title: "AI & Automation",
      icon: "Cpu",
      skills: ["ChatGPT", "n8n", "MCP", "Garak", "LLM Security Testing"],
    },
  ],
};

export const securityDomains = [
  "Web Application Security",
  "API Security Testing",
  "Mobile Application Testing",
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "Reverse Engineering",
  "Malware Analysis",
  "OSINT",
  "Digital Forensics",
  "Incident Response",
  "Threat Hunting",
  "Network Security",
  "Application Security",
];

// ============================================================
// CVES
// ============================================================

export const cvesData = [
  {
    id: "CVE-2025-63416",
    description: "Stored XSS leading to Privilege Escalation",
    severity: "High" as const,
    cvss: "8.5",
    date: "2025",
  },
  {
    id: "CVE-2025-63417",
    description: "Persistent Stored XSS",
    severity: "High" as const,
    cvss: "8.2",
    date: "2025",
  },
  {
    id: "CVE-2025-63418",
    description: "DOM-Based XSS",
    severity: "Medium" as const,
    cvss: "6.5",
    date: "2025",
  },
];

// ============================================================
// HALL OF FAME
// ============================================================

export const hallOfFameData = [
  { name: "Tesla", category: "Automotive" },
  { name: "Circle", category: "Fintech" },
  { name: "HDFC Bank", category: "Banking" },
  { name: "Nykaa", category: "E-Commerce" },
  { name: "Snapchat", category: "Social Media" },
  { name: "Elan Limited", category: "Enterprise" },
  { name: "TMF Group", category: "Enterprise" },
  { name: "Zerodha", category: "Fintech" },
  { name: "Dell", category: "Enterprise" },
  { name: "NASA", category: "Government" },
  { name: "Cisco", category: "Enterprise" },
  { name: "Monash University", category: "Education" },
];

// ============================================================
// LEADERSHIP & MENTORSHIP
// ============================================================

export const leadershipData = [
  {
    role: "Cyber Security Mentor & Trainer",
    organization: "WorldSkills Shanghai 2026",
    description: "Mentoring and training competitors for the international WorldSkills Cyber Security competition",
  },
  {
    role: "Cybersecurity Trainer",
    organization: "Operation Black Trace, Cyber Secured Africa",
    description: "Delivered cybersecurity training across Africa as part of the Operation Black Trace initiative",
  },
  {
    role: "Cyber Security Team Lead",
    organization: "TECHNIKI",
    description: "Led a team of security professionals in delivering VAPT services and coordinated client engagements",
  },
  {
    role: "Mentor",
    organization: "CSI Linux Cybersecurity For All Program",
    description: "Mentoring aspiring cybersecurity professionals in penetration testing, digital forensics, and OSINT",
  },
];

// ============================================================
// BUG BOUNTY & SECURITY RESEARCH
// ============================================================

export const bugBountyData = [
  "40+ Hall of Fame Recognitions from industry-leading organizations",
  "3 CVEs Assigned with CVSS scores up to 8.5",
  "Active Security Researcher on Bugcrowd platform",
  "Responsible Disclosure Researcher",
  "Web, API & Network Security Specialist",
  "100+ vulnerabilities reported across web, mobile, and network applications",
];

// ============================================================
// PROJECTS
// ============================================================

export const projectsData = [
  {
    title: "Network Security Threats, Vulnerabilities and Countermeasures",
    description: "Implemented firewall security controls, configured DHCP infrastructure, simulated cyber attacks using Cisco Packet Tracer, and developed comprehensive mitigation strategies for network threats.",
    tags: ["Cisco Packet Tracer", "Firewall", "DHCP", "Network Security"],
  },
  {
    title: "NS3 Simulation of OLSR Protocol for Flying Ad-hoc Networks",
    description: "Simulated FANET environments, implemented OLSR routing protocol, evaluated security mechanisms against routing attacks using NS3, NetAnim, and GNUPLOT.",
    tags: ["NS3", "NetAnim", "GNUPLOT", "OLSR", "FANET"],
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certificationsData = [
  { name: "Certified Ethical Hacker (CEH v13)", category: "Offensive Security" },
  { name: "Certified AppSec Practitioner (CAP)", category: "Application Security" },
  { name: "Certified Network Security Practitioner (CNSP) with Merit", category: "Network Security" },
  { name: "Certified Cloud Security Practitioner - AWS (CCSP-AWS)", category: "Cloud Security" },
  { name: "ISO/IEC 27001 Information Security Associate", category: "Compliance" },
  { name: "Splunk Infrastructure Overview", category: "SIEM" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", category: "Cloud" },
  { name: "Fortinet NSE 1", category: "Network Security" },
  { name: "Fortinet NSE 2", category: "Network Security" },
  { name: "IBM Cybersecurity Basics", category: "General" },
  { name: "Scrum Certification", category: "Project Management" },
  { name: "Dark Web Investigation", category: "Digital Forensics" },
];

// ============================================================
// EDUCATION
// ============================================================

export const educationData = [
  {
    degree: "Master of Technology (M.Tech)",
    field: "Network & Cyber Security",
    institution: "Amity University",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering (Cyber Security Specialization)",
    institution: "GLA University",
  },
];

// ============================================================
// STARTER NOTES (for DB seed)
// ============================================================

export type StarterNote = {
  title: string;
  content: string;
  tags: string[];
  source: string;
};

export const starterNotes: StarterNote[] = [
  {
    title: "About Me",
    content: `# About Me

I am a **Cyber Security Engineer** with deep expertise in:
- Vulnerability Assessment and Penetration Testing (VAPT)
- Web Application & API Security
- Network Penetration Testing
- Reverse Engineering & Malware Analysis
- Red Teaming

## Key Achievements

- **3 CVEs Assigned** (CVSS up to 8.5)
- **40+ Hall of Fame** recognitions from Tesla, NASA, Dell, Cisco, Zerodha, Snapchat, HDFC Bank, Nykaa, and more
- **CEH v13, CAP, CNSP with Merit, CCSP-AWS**
- **WorldSkills Shanghai 2026 Cyber Security Mentor**
- **Trainer - Cyber Secured Africa, Operation Black Trace**
- **Security Researcher on Bugcrowd**

## Current Role

Cyber Security Engineer L1 at **Think Future Technologies** (Mar 2026 - Present)`,
    tags: ["about", "profile"],
    source: "",
  },
  {
    title: "CVEs Discovered",
    content: `# CVEs Discovered

| CVE ID | CVSS | Description | Severity |
|--------|------|-------------|----------|
| CVE-2025-63416 | 8.5 | Stored XSS leading to Privilege Escalation | High |
| CVE-2025-63417 | 8.2 | Persistent Stored XSS | High |
| CVE-2025-63418 | 6.5 | DOM-Based XSS | Medium |

All three CVEs were discovered through responsible disclosure processes and have been acknowledged by the affected vendors.`,
    tags: ["CVEs", "research"],
    source: "",
  },
  {
    title: "Hall of Fame",
    content: `# Hall of Fame Recognitions

## Enterprise & Technology
- Tesla
- Dell Technologies
- Cisco
- Circle
- Zerodha
- Snapchat
- Nykaa
- Elan Limited
- TMF Group

## Financial
- HDFC Bank

## Government & Education
- NASA
- Monash University

**Total: 40+ Hall of Fame recognitions**`,
    tags: ["achievements", "hall-of-fame"],
    source: "",
  },
  {
    title: "Tools & Technologies",
    content: `# Tools & Technologies

## Web & API Security
Burp Suite, Postman, Acunetix, Netsparker, OWASP ZAP, SQLMap

## Network Security
Nmap, Wireshark, Nessus, Metasploit

## SOC & Monitoring
Splunk, Wazuh, Elasticsearch

## Operating Systems
Kali Linux, Linux, Windows

## Reverse Engineering
Ghidra, x64dbg, PE Studio, Detect It Easy (DIE)

## Digital Forensics
Volatility, Autopsy

## Cloud & Platforms
Microsoft Azure, AWS

## AI & Automation
ChatGPT, n8n, MCP, Garak, LLM Security Testing`,
    tags: ["skills", "tools"],
    source: "",
  },
  {
    title: "Security Domains",
    content: `# Security Domains

- Web Application Security
- API Security Testing
- Mobile Application Testing
- Vulnerability Assessment & Penetration Testing (VAPT)
- Reverse Engineering
- Malware Analysis
- OSINT
- Digital Forensics
- Incident Response
- Threat Hunting
- Network Security
- Application Security`,
    tags: ["skills", "domains"],
    source: "",
  },
  {
    title: "Certifications",
    content: `# Certifications

- Certified Ethical Hacker (CEH v13)
- Certified AppSec Practitioner (CAP)
- Certified Network Security Practitioner (CNSP) with Merit
- Certified Cloud Security Practitioner - AWS (CCSP-AWS)
- ISO/IEC 27001 Information Security Associate
- Splunk Infrastructure Overview
- Microsoft Azure Fundamentals (AZ-900)
- Fortinet NSE 1 & NSE 2
- IBM Cybersecurity Basics
- Scrum Certification
- Dark Web Investigation`,
    tags: ["certifications"],
    source: "",
  },
];
