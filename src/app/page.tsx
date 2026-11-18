'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, ExternalLink, MapPin, Mail, Smartphone, Code, Server, Database, Cloud, Trophy, Briefcase, GraduationCap, Users, Sparkles, Wrench } from 'lucide-react';

const experience = [
  {
    title: 'Software Developer Intern',
    org: 'Rubicon Food Products Limited',
    location: 'Richmond Hill, ON',
    dates: 'May 2026 - Aug 2026',
    stack: 'Python (FastAPI) · PostgreSQL · TypeScript React · Power BI',
    points: [
      'Built a full-stack warehouse system with Python (FastAPI) REST APIs on PostgreSQL and TypeScript React screens.',
      'Cut barcode record mismatches by about 40% by tracing failed scanner handoffs through root cause analysis, then adding React validation and SQL data quality checks.',
      'Reduced manual data entry by about 50% by migrating legacy Excel data into a PostgreSQL schema I designed, plus Excel VBA UserForms and Power Automate flows feeding Power BI KPI dashboards.',
      'Ran user acceptance testing with warehouse users before each release, demoed every release to the Operations Director in Agile sprint reviews, and kept Confluence docs current.',
    ],
  },
  {
    title: 'Specialist',
    org: 'Apple',
    location: 'Toronto, ON',
    dates: 'Jul 2026 - Present',
    points: [
      'Resolve about 85% of iOS, hardware, software, and connectivity issues in one visit by reading diagnostic logs and escalating complex cases.',
      'Hold a 100/100 NPS score in a store serving 1000+ clients daily by explaining technical issues as plain-language steps.',
      'Handle 50+ support requests per shift, with a 2FA identity check before every account change.',
    ],
  },
];

const leadership = {
  title: 'Software Developer, JobFit.AI',
  org: 'Enactus Seneca',
  location: 'Toronto, ON',
  dates: 'Sept 2024 - Sept 2025',
  points: [
    'Raised usability scores by 20% for students with disabilities by running user testing and fixing React contrast and keyboard navigation.',
    'Cut average API latency by 200ms between the React front end and Express REST APIs by debugging slow middleware and adding JWT-protected routes.',
    'Removed 200+ lines of duplicated code with reusable React components and an MVC backend on MongoDB, documenting a template the team adopted.',
    'Integrated LLM features with the OpenAI API for resume optimization and job matching.',
  ],
};

const skills = [
  { icon: Code, label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL', 'Bash', 'HTML/CSS'] },
  { icon: Server, label: 'Frontend & Backend', items: ['React', 'React Native', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'Microservices'] },
  { icon: Database, label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'DynamoDB', 'MongoDB', 'Prisma ORM'] },
  { icon: Cloud, label: 'Cloud & DevOps', items: ['AWS (EC2, S3, ECS, DynamoDB, Cognito, CloudWatch)', 'Docker', 'GitHub Actions', 'Jenkins', 'Linux'] },
  { icon: Sparkles, label: 'Testing & AI', items: ['Jest', 'Postman', 'Lighthouse', 'OpenAI API', 'Claude Code', 'GitHub Copilot', 'Cursor'] },
  { icon: Wrench, label: 'Tools', items: ['Git', 'JIRA', 'Confluence', 'Figma', 'Power BI', 'Power Automate', 'Excel VBA'] },
];

function Bullets({ points, color = 'text-blue-500' }: { points: string[]; color?: string }) {
  return (
    <ul className="space-y-3 text-slate-300 font-light text-sm leading-relaxed">
      {points.map((p) => (
        <li key={p} className="flex gap-3"><span className={`${color} mt-1`}>▹</span> {p}</li>
      ))}
    </ul>
  );
}

function RoleHeader({ title, org, location, dates }: { title: string; org: string; location: string; dates: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="text-blue-400">{org} <span className="text-slate-500 text-sm">· {location}</span></div>
      </div>
      <div className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">{dates}</div>
    </div>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full overflow-hidden flex flex-col items-center">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6"
            >
              AV.
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl w-full px-6 py-24 flex flex-col gap-32 relative z-10">

        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Code size={14} /> Full Stack Developer │ Python · TypeScript · AWS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Ashutosh Verma
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-8">
              I build software that actually changes something. Most recently I shipped a full-stack
              warehouse system as a <span className="text-white font-medium">Software Developer Intern at Rubicon</span>.
              Now open to <span className="text-white font-medium">software internship and co-op roles</span> in the GTA.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><MapPin size={16} /> Toronto, ON</span>
              <a href="mailto:ashutosh.1557@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors"><Mail size={16} /> ashutosh.1557@gmail.com</a>
              <a href="tel:+16472834819" className="flex items-center gap-1 hover:text-white transition-colors"><Smartphone size={16} /> +1 (647) 283-4819</a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                View Experience <ChevronDown size={18} />
              </a>
              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* TOP 3 IMPACT STRIP */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Less Manual Data Entry', val: '~50%', desc: 'Rubicon warehouse system (PostgreSQL migration)' },
            { label: 'Test Coverage', val: '95%', desc: 'Fragments microservice on AWS, CI/CD on every push' },
            { label: 'Customer NPS', val: '100/100', desc: 'Apple Specialist, 1000+ clients daily' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
              <div className="text-blue-400 font-medium mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.desc}</div>
            </div>
          ))}
        </motion.section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-500" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((role) => (
              <div key={role.org} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <RoleHeader {...role} />
                {role.stack && <div className="text-xs font-mono text-slate-500 mb-4">{role.stack}</div>}
                <Bullets points={role.points} />
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-blue-500" />
            <h2 className="text-3xl font-bold">Leadership & Involvement</h2>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <RoleHeader {...leadership} />
            <Bullets points={leadership.points} />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Server className="text-blue-500" />
            <h2 className="text-3xl font-bold">Projects & Code</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Fragments Microservice</h3>
              <div className="text-blue-400 text-sm font-mono mb-6">Node.js · Express · Jest · Docker · AWS (ECS, S3, DynamoDB, Cognito) · Jenkins</div>
              <ul className="space-y-3 text-slate-300 font-light text-sm flex-grow mb-6">
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Designed 12 REST API endpoints linking DynamoDB metadata to S3 content behind Cognito JWT auth and input validation.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Reached 95% test coverage with Jest unit and integration tests, run by GitHub Actions and Jenkins CI/CD on every push.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Cut environment setup time by 70% by containerizing with Docker and scripting repeatable AWS ECS Fargate deployments.</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">PocketHistory</h3>
              <div className="text-blue-400 text-sm font-mono mb-6">Next.js · PostgreSQL · Prisma ORM</div>
              <ul className="space-y-3 text-slate-300 font-light text-sm flex-grow mb-6">
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Built a secure expense tracking platform with 5+ categories across 3+ normalized relational database models.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Developed 3 interactive dashboards for spending patterns, category distributions, and historical trends.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Designed 7+ RESTful API endpoints, improving response performance by ~80%.</li>
              </ul>
              <a
                href="https://pockethistory.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors mt-auto"
              >
                <ExternalLink size={16} /> View Project
              </a>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={120} /></div>
            <h3 className="text-2xl font-bold text-white mb-1">Top 5 Finalist (Out of 50+ Teams)</h3>
            <div className="text-yellow-500 font-medium mb-6">Seneca Hackathon 2025 | Team Lead / Full-Stack Developer</div>
            <div className="max-w-2xl relative z-10">
              <Bullets
                color="text-yellow-500"
                points={[
                  'Led a team of 4 to build a real-time collaborative tool in a 24-hour sprint, owning the full SDLC.',
                  'Engineered the backend for real-time collaboration, delivering a working MVP recognized for technical complexity.',
                ]}
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-blue-500" />
            <h2 className="text-3xl font-bold">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(({ icon: Icon, label, items }) => (
              <div key={label} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2"><Icon size={16} /> {label}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs border border-white/10">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & SUMMARY */}
        <section id="education" className="scroll-mt-24 mb-32">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-500" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Honours Bachelor of Technology - Software Development (Co-op)</h3>
              <div className="text-slate-400 mb-2">Seneca Polytechnic, Toronto, ON <span className="text-white/20 mx-2">|</span> GPA: 3.5/4.0</div>
              <div className="text-xs text-slate-500 max-w-xl">
                Coursework: OOP in C++, Data Structures & Algorithms, Database Technologies, Systems Analysis & Design, Python.
              </div>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="text-sm font-mono text-blue-400">Jan 2024 - Aug 2027</div>
              <div className="text-xs text-slate-500 mt-1">Class of 2027</div>
            </div>
          </div>

          <div className="mt-12 p-8 border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/5 to-transparent">
            <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
              Software Development student with real production experience: I&apos;ve shipped a FastAPI + React + PostgreSQL system
              used daily by warehouse staff, built and tested cloud microservices on AWS, and spend my week at Apple turning
              technical problems into plain-language fixes. I care about clean APIs, solid tests, and software people actually
              want to use. Email <a href="mailto:ashutosh.1557@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">ashutosh.1557@gmail.com</a> and
              I&apos;ll respond within 24 hours. (Languages: English, Hindi)
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
