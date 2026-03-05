'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, ExternalLink, MapPin, Mail, Smartphone, Code, Server, Database, Cloud, Trophy, Briefcase, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  },[]);

  const data = {
    // Contains all resume text injected into UI elements below
  };
const handleExternalLink = () => {
          window.open('https://pockethistory.vercel.app/', '_blank', 'noopener,noreferrer');
        };
  return (
    <main className="min-h-screen w-full overflow-hidden flex flex-col items-center">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease:[0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 1.2, ease: "easeInOut" }}
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
              <Code size={14} /> Full Stack Developer (BTech) │ GenAI & Web Apps
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Ashutosh Verma
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-8">
              I build software that actually changes something — and I&apos;m just getting started. 
              Currently seeking <span className="text-white font-medium">2025–2026 Co-op opportunities</span> in the GTA.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><MapPin size={16}/> Scarborough, ON</span>
              <span className="flex items-center gap-1"><Mail size={16}/> ashutosh.1557@gmail.com</span>
              <span className="flex items-center gap-1"><Smartphone size={16}/> +1 (647) 283-4819</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                View Experience <ChevronDown size={18} />
              </a>
              <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md">
                <Download size={18} /> Download Resume
              </button>
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
            { label: "Performance Boost", val: "~80%", desc: "PocketHistory API Optimization" },
            { label: "Campaign Reach", val: "68k+", desc: "Views generated in 90 days" },
            { label: "Hackathon Result", val: "Top 5", desc: "Out of 50+ Teams (Seneca '25)" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
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
            {/* Role 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Developer & Social Media Manager</h3>
                  <div className="text-blue-400">Enactus Seneca Polytechnic</div>
                </div>
                <div className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">May 2025 - Present</div>
              </div>
              <ul className="space-y-3 text-slate-300 font-light text-sm leading-relaxed">
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Contributed to Jobfit.ai, an AI-powered inclusive job platform, supporting data-driven feature development with cross-functional teams, leveraging AI tools and mentorship from senior developers to improve automation, productivity, and collaborative software development practices.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Collaborated with cross-functional teams including engineering and business stakeholders, strengthening interpersonal skills while analyzing performance metrics and improving reporting workflows in a consulting-style project environment.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Led marketing and analytics initiatives as Social Media Manager, designing and optimizing campaigns that generated 68,000+ views and reached 10,000+ unique accounts in 90 days.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Independently planned, executed, and analyzed content strategy, increasing profile visits to 1,500+ (+51%) and driving 80+ external link clicks.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Front Desk Representative (Security Officer)</h3>
                  <div className="text-blue-400">Paladin Security Group Ltd</div>
                </div>
                <div className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">Sep 2024 - Present</div>
              </div>
              <p className="text-sm text-slate-400 mb-4 italic">Spent 1.5+ years making high-stakes decisions in fast-moving environments—managing 300–500 daily visitors and staying calm when things go sideways. Developers who can communicate clearly under pressure are rare. I&apos;m one of them.</p>
              <ul className="space-y-3 text-slate-300 font-light text-sm leading-relaxed">
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Proactive Customer Engagement: Actively engaging with tenants, guests, and employees to create a welcoming and friendly environment through highly visible patrols.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Rigorous Safety and Security: Maintaining a safe property by enforcing rules, reporting criminal activity promptly, responding to emergencies, and assisting law enforcement.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Swift Emergency Response: Responding to medical emergencies by providing immediate First Aid, CPR, or AED assistance until medical professionals arrive.</li>
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Health and Safety Leadership: Supporting Joint Health & Safety Committee, ensuring robust occupational safety practices.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Tour Guide</h3>
                  <div className="text-blue-400">Seneca Polytechnic</div>
                </div>
                <div className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">Apr 2025 - Present</div>
              </div>
              <ul className="space-y-3 text-slate-300 font-light text-sm leading-relaxed">
                <li className="flex gap-3"><span className="text-blue-500 mt-1">▹</span> Assisted prospective students and visitors by providing informative and engaging campus tours, highlighting academic programs, student services, and campus life at Seneca.</li>
              </ul>
            </div>
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
              <h3 className="text-2xl font-bold mb-2">PocketHistory</h3>
              <div className="text-blue-400 text-sm font-mono mb-6">Next.js 14 · PostgreSQL · Prisma ORM</div>
              <ul className="space-y-3 text-slate-300 font-light text-sm flex-grow mb-6">
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Built a secure financial tracking platform supporting 5+ expense categories, storing and managing structured user data across 3+ normalized relational database models.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Developed 3 interactive analytical dashboards to visualize spending patterns, category distributions, and historical trends.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Designed 7+ RESTful API endpoints, improving system performance by ~80%.</li>
              </ul>
              <button onClick={handleExternalLink} className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors mt-auto">
                <ExternalLink size={16}/> View Project
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Fragments Microservice</h3>
              <div className="text-blue-400 text-sm font-mono mb-6">Node.js · AWS Cognito/S3/ECS · Docker</div>
              <ul className="space-y-3 text-slate-300 font-light text-sm flex-grow mb-6">
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Built a full-stack app with an authenticated REST API supporting 3+ fragment operations and 117 automated testing cases (unit & system).</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Deployed backend services to AWS using Cognito, S3, and ECS Fargate for scalable transaction processing for authenticated financial technology API workloads.</li>
                <li className="flex gap-3"><span className="text-white mt-1">▹</span> Implemented a dual-mode data layer (in-memory vs S3) integrated with a GitHub Actions CI pipeline.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="scroll-mt-24">
           <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" />
            <h2 className="text-3xl font-bold">Achievements & Leadership</h2>
          </div>
          <div className="p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={120} /></div>
            <h3 className="text-2xl font-bold text-white mb-1">Top 5 Finalist (Out of 50+ Teams)</h3>
            <div className="text-yellow-500 font-medium mb-6">Seneca Hackathon 2025 | Team Lead / Full-Stack Developer</div>
            <ul className="space-y-3 text-slate-300 font-light text-sm max-w-2xl relative z-10">
              <li className="flex gap-3"><span className="text-yellow-500 mt-1">▹</span> Led a team of 4 to build a real-time collaborative tool within a 24-hour sprint, demonstrating leadership experience, strong critical thinking skills, and problem solving while overseeing the full SDLC.</li>
              <li className="flex gap-3"><span className="text-yellow-500 mt-1">▹</span> Engineered a scalable backend with real-time collaboration capabilities, delivering a production-ready MVP recognized for technical complexity and innovation.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-blue-500" />
            <h2 className="text-3xl font-bold">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-medium mb-4 flex items-center gap-2"><Code size={16}/> Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "JavaScript", "TypeScript", "C#", "SQL", "Go", "Node.js", "React", "Next.js", "Django"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs border border-white/10">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-medium mb-4 flex items-center gap-2"><Cloud size={16}/> Cloud, DevOps & Data</h4>
              <div className="flex flex-wrap gap-2">
                {["AWS (S3, DynamoDB, ECS)", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "Kafka", "CI/CD", "Terraform", "Git", "Linux (CLI)"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs border border-white/10">{skill}</span>
                ))}
              </div>
            </div>
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
              <h3 className="text-xl font-bold text-white mb-1">Honours Bachelor of Technology - Software Development</h3>
              <div className="text-slate-400 mb-2">Seneca Polytechnic, Toronto, ON <span className="text-white/20 mx-2">|</span> GPA: 3.6/4.0</div>
              <div className="text-xs text-slate-500 max-w-xl">
                Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Technologies, Operating Systems – Linux, Web Development, Software Analysis & Design.
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-sm font-mono text-blue-400">Jan 2024 - Dec 2027</div>
              <div className="text-xs text-slate-500 mt-1">Class of 2027</div>
            </div>
          </div>
          
          <div className="mt-12 p-8 border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/5 to-transparent">
            <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
              Computer Science student with strong programming skills... Experienced with data structures, algorithms, operating systems, networking, and database technologies including PostgreSQL. Passionate about cloud technologies and building scalable systems on AWS cloud infrastructure with strong analytical and critical thinking skills, creative problem solving, and ability to learn quickly in fast-paced environments. Message me here or email <span className="text-white font-medium">ashutosh.1557@gmail.com</span> — I respond within 24 hours. (Languages: English, Hindi).
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}