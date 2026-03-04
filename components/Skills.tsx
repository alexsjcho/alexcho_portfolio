'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Code, Brain, LineChart, Palette, GitBranch, Database, Layout, Terminal,
  Globe, Cpu, BarChart, Users, MessageSquare, Search, Target, Briefcase,
  PenTool, Figma, Trello, FileSearch, Rocket, Share2, Megaphone,
  BarChart2, PieChart, Presentation, BookOpen, TrendingUp, Award,
  UserPlus, GitPullRequest, RefreshCw, Network, Layers, Activity
} from 'lucide-react'
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiGithub,
  SiGithubactions,
  SiNextdotjs,
  SiNodedotjs,
  SiVercel,
  SiNetlify,
  SiTerraform,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGrafana,
  SiPrometheus,
  SiFigma,
  SiTrello,
} from 'react-icons/si'

// First, define the category type
type SkillCategory = 'Engineering' | 'AI' | 'Infrastructure' | 'Analytics' | 'Solutions' | 'UX/UI Design' | 'Product Management' | 'Product Marketing'

const CAROUSEL_INTERVAL_MS = 4000
const categoriesOrder: SkillCategory[] = ['Engineering', 'AI', 'Infrastructure', 'Analytics', 'Solutions', 'UX/UI Design', 'Product Management', 'Product Marketing']

// Define the structure of skill data
interface SkillData {
  skills: string[];
  color: string;
}

// Define the type for skillsData
type SkillsDataType = {
  [K in SkillCategory]: SkillData;
}

// Define your skillsData with the correct type
const skillsData: SkillsDataType = {
  'Engineering': {
    skills: ['React', 'Next.js', 'JavaScript', 'Python', 'HTML', 'CSS', 'RESTful API', 'GitHub', 'Vercel', 'Node.js', 'Netlify', 'Cursor', 'Claude Code', 'Software System Design' /* ... */],
    color: 'bg-blue-500'
  },
  'AI': {
    skills: ['Prompt Engineering', 'LLM', 'MCP Server', 'Claude Skills', 'Context Engineering', 'RAG', 'Knowledge Graph' /* ... */],
    color: 'bg-green-500'
  },
  'Infrastructure': {
    skills: ['Terraform', 'Github Actions', 'AWS', 'GCP', 'Grafana', 'Prometheus', 'APM', 'CI/CD'],
    color: 'bg-slate-600'
  },
  'Analytics': {
    skills: ['OLAP', 'ELT', 'Data Warehouse', 'Metrics', 'Data-Analysis', 'Data-Visualization', 'SQL', 'NoSQL'],
    color: 'bg-amber-600'
  },
  'Solutions': {
    skills: ['Qualification Frameworks', 'Prospecting & Lead Generation', 'Sales Process', 'Retention & Renewal', 'Account Management', 'Solution Proof-of-Concept', 'Technical Discovery', ' Technical Customer Support' /* ... */],
    color: 'bg-yellow-500'
  },
  'UX/UI Design': {
    skills: ['Figma UI Design', 'Wireframe & Prototype', 'User Research & Analysis', 'Information Architecture' /* ... */],
    color: 'bg-purple-500'
  },
  'Product Management': {
    skills: ['Agile/Scrum', 'Requirement Docs', 'Decision Making & Prioritization', 'Product Roadmap & Strategy', 'Product Led Growth' /* ... */],
    color: 'bg-red-500'
  },
  'Product Marketing': {
    skills: ['Messaging & Positioning', 'Go-to-Market Strategy', 'Market Competitive Analysis', 'Content Marketing', 'Competitive Battlecards' /* ... */],
    color: 'bg-teal-500'
  }

};

// Define icon mapping – use brand/SaaS logos (Simple Icons) where available
const skillIcons: { [key: string]: React.ReactNode } = {
  // Engineering – brand icons
  'React': <SiReact className="w-4 h-4 mr-2" />,
  'Next.js': <SiNextdotjs className="w-4 h-4 mr-2" />,
  'JavaScript': <SiJavascript className="w-4 h-4 mr-2" />,
  'Python': <SiPython className="w-4 h-4 mr-2" />,
  'HTML': <Layout className="w-4 h-4 mr-2" />,
  'CSS': <Palette className="w-4 h-4 mr-2" />,
  'RESTful API': <Share2 className="w-4 h-4 mr-2" />,
  'GitHub': <SiGithub className="w-4 h-4 mr-2" />,
  'Vercel': <SiVercel className="w-4 h-4 mr-2" />,
  'Node.js': <SiNodedotjs className="w-4 h-4 mr-2" />,
  'Netlify': <SiNetlify className="w-4 h-4 mr-2" />,
  'Cursor': <Code className="w-4 h-4 mr-2" />,
  'Claude Code': <Terminal className="w-4 h-4 mr-2" />,
  'Software System Design': <Layers className="w-4 h-4 mr-2" />,

  // Analytics
  'OLAP': <Database className="w-4 h-4 mr-2" />,
  'ELT': <RefreshCw className="w-4 h-4 mr-2" />,
  'Data Warehouse': <Database className="w-4 h-4 mr-2" />,
  'Metrics': <BarChart2 className="w-4 h-4 mr-2" />,
  'SQL': <Database className="w-4 h-4 mr-2" />,
  'NoSQL': <Database className="w-4 h-4 mr-2" />,
  'Data-Analysis': <BarChart className="w-4 h-4 mr-2" />,
  'Data-Visualization': <LineChart className="w-4 h-4 mr-2" />,

  // Infrastructure – brand icons
  'Terraform': <SiTerraform className="w-4 h-4 mr-2" />,
  'Github Actions': <SiGithubactions className="w-4 h-4 mr-2" />,
  'AWS': <SiAmazonwebservices className="w-4 h-4 mr-2" />,
  'GCP': <SiGooglecloud className="w-4 h-4 mr-2" />,
  'Grafana': <SiGrafana className="w-4 h-4 mr-2" />,
  'Prometheus': <SiPrometheus className="w-4 h-4 mr-2" />,
  'APM': <Activity className="w-4 h-4 mr-2" />,
  'CI/CD': <Rocket className="w-4 h-4 mr-2" />,

  // AI
  'MCP Server': <Cpu className="w-4 h-4 mr-2" />,
  'Claude Skills': <Brain className="w-4 h-4 mr-2" />,
  'Context Engineering': <Layers className="w-4 h-4 mr-2" />,
  'RAG': <Database className="w-4 h-4 mr-2" />,
  'Knowledge Graph': <Network className="w-4 h-4 mr-2" />,
  'PyTorch': <SiPytorch className="w-4 h-4 mr-2" />,
  'TensorFlow': <SiTensorflow className="w-4 h-4 mr-2" />,
  'Scikit-learn': <SiScikitlearn className="w-4 h-4 mr-2" />,

  // UX/UI Design – brand icon for Figma
  'Figma UI Design': <SiFigma className="w-4 h-4 mr-2" />,
  'Wireframe & Prototype': <PenTool className="w-4 h-4 mr-2" />,
  'User Research & Analysis': <Users className="w-4 h-4 mr-2" />,
  'Information Architecture': <Network className="w-4 h-4 mr-2" />,

  // Product Management – brand icon for Trello
  'Agile/Scrum': <SiTrello className="w-4 h-4 mr-2" />,
  'Product Roadmap & Strategy': <Target className="w-4 h-4 mr-2" />,
  'Product Led Growth': <TrendingUp className="w-4 h-4 mr-2" />,
  'Market Competitive Analysis': <Search className="w-4 h-4 mr-2" />,
  'Technical Discovery': <FileSearch className="w-4 h-4 mr-2" />,
  'Solution Proof-of-Concept': <Cpu className="w-4 h-4 mr-2" />,
  'Technical Customer Support': <MessageSquare className="w-4 h-4 mr-2" />,
  'Account Management': <Briefcase className="w-4 h-4 mr-2" />,

  // Product Marketing
  'Messaging & Positioning': <Megaphone className="w-4 h-4 mr-2" />,
  'Go-to-Market Strategy': <TrendingUp className="w-4 h-4 mr-2" />,
  'Content Marketing': <BookOpen className="w-4 h-4 mr-2" />,
  'Competitive Battlecards': <Presentation className="w-4 h-4 mr-2" />,
  'Market Research': <PieChart className="w-4 h-4 mr-2" />,
  'Sales Analytics': <BarChart2 className="w-4 h-4 mr-2" />,

  // Sales & Solutions
  'Qualification Frameworks': <Award className="w-4 h-4 mr-2" />,
  'Prospecting & Lead Generation': <UserPlus className="w-4 h-4 mr-2" />,
  'Sales Process': <GitPullRequest className="w-4 h-4 mr-2" />,
  'Retention & Renewal': <RefreshCw className="w-4 h-4 mr-2" />,
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeCategory = categoriesOrder[activeIndex];
  const { skills, color } = skillsData[activeCategory];

  // Auto-rotate carousel (paused when user hovers nav or skills list)
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % categoriesOrder.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-4xl font-bold mb-6 text-center text-foreground font-sans tracking-tight">Skills</h2>

        {/* Category nav - horizontal list, current category highlighted; hover pauses rotation */}
        <nav
          className="mb-8 overflow-x-auto pb-2 scrollbar-thin"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ul className="flex flex-wrap justify-center gap-2 min-w-max px-2">
            {categoriesOrder.map((category, index) => {
              const isActive = index === activeIndex;
              const catColor = skillsData[category].color;
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                      transition-all duration-200 ease-out
                      ${isActive
                        ? `${catColor} text-white shadow-md scale-105`
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Carousel slide - current category skills; hover pauses rotation */}
        <div
          key={activeCategory}
          className="animate-in fade-in duration-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className={`p-4 rounded-lg shadow-md text-center ${color} text-white flex items-center justify-center gap-2 border border-white/10 transition-transform hover:scale-[1.02]`}
            >
              {skillIcons[skill] || <Code className="w-4 h-4 shrink-0" />}
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

