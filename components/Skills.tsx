'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Code, Brain, LineChart, Palette, GitBranch, Database, Layout, Terminal,
  Globe, Cpu, BarChart, Users, MessageSquare, Search, Target, Briefcase,
  PenTool, Figma, Trello, FileSearch, Rocket, Share2, Megaphone, 
  BarChart2, PieChart, Presentation, BookOpen, TrendingUp, Award,
  UserPlus, GitPullRequest, RefreshCw, Network, Layers
} from 'lucide-react'
import { SiReact, SiJavascript, SiPython, SiPytorch, SiTensorflow, SiScikitlearn } from 'react-icons/si'

// First, define the category type
type SkillCategory = 'Web Development' | 'AI/ML' | 'Solutions' | 'UX/UI Design' | 'Product Management' | 'Product Marketing'

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
  'Web Development': {
    skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'RESTful API', 'SQL', 'NoSQL', 'CI/CD', 'Software System Design' /* ... */],
    color: 'bg-blue-500'
  },
  'AI/ML': {
    skills: ['Python', 'Prompt Engineering', 'LLM', 'NLP','Data-Analysis', 'Data-Visualization' /* ... */],
    color: 'bg-green-500'
  },
  'Solutions': {
    skills: ['Qualification Frameworks', 'Prospecting & Lead Generation', 'Sales Process', 'Retention & Renewal', 'Account Management' , 'Solution Proof-of-Concept', 'Technical Discovery', ' Technical Customer Support' /* ... */],
    color: 'bg-yellow-500'
  },
  'UX/UI Design': {
    skills: ['Figma UI Design', 'Wireframe & Prototype', 'User Research & Analysis', 'Information Architecture' /* ... */],
    color: 'bg-purple-500'
  },
  'Product Management': {
    skills: ['Agile/Scrum', 'Requirement Docs', 'Decision Making & Prioritization', 'Product Roadmap & Strategy' /* ... */],
    color: 'bg-red-500'
  },
  'Product Marketing': {
    skills: ['Messaging & Positioning', 'Go-to-Market Strategy', 'Market Competitive Analysis', 'Content Marketing', 'Competitive Battlecards' /* ... */],
    color: 'bg-teal-500'
  }

};

// Define icon mapping
const skillIcons: { [key: string]: React.ReactNode } = {
  // Development
  'React': <SiReact className="w-4 h-4 mr-2" />,
  'JavaScript': <SiJavascript className="w-4 h-4 mr-2" />,
  'Next.js': <Globe className="w-4 h-4 mr-2" />,
  'HTML': <Layout className="w-4 h-4 mr-2" />,
  'CSS': <Palette className="w-4 h-4 mr-2" />,
  'RESTful API': <Share2 className="w-4 h-4 mr-2" />,
  'SQL': <Database className="w-4 h-4 mr-2" />,
  'NoSQL': <Database className="w-4 h-4 mr-2" />,
  'CI/CD': <Rocket className="w-4 h-4 mr-2" />,
  'Software System Design': <Layers className="w-4 h-4 mr-2" />,
  
  // AI/ML
  'Python': <SiPython className="w-4 h-4 mr-2" />,
  'PyTorch': <SiPytorch className="w-4 h-4 mr-2" />,
  'TensorFlow': <SiTensorflow className="w-4 h-4 mr-2" />,
  'Scikit-learn': <SiScikitlearn className="w-4 h-4 mr-2" />,
  'Data-Analysis': <BarChart className="w-4 h-4 mr-2" />,
  'Data-Visualization': <LineChart className="w-4 h-4 mr-2" />,
  
  // Design
  'Figma UI Design': <Figma className="w-4 h-4 mr-2" />,
  'Wireframe & Prototype': <PenTool className="w-4 h-4 mr-2" />,
  'User Research & Analysis': <Users className="w-4 h-4 mr-2" />,
  'Information Architecture': <Network className="w-4 h-4 mr-2" />,
  
  // Product
  'Agile/Scrum': <Trello className="w-4 h-4 mr-2" />,
  'Product Roadmap & Strategy': <Target className="w-4 h-4 mr-2" />,
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
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground font-sans tracking-tight">Skills</h2>
        <div className="mb-8 w-64 mx-auto">
          <Select onValueChange={(value: SkillCategory | 'All') => setSelectedCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              <SelectItem value="All" className="cursor-pointer">All Skills</SelectItem>
              {Object.keys(skillsData).map((category) => (
                <SelectItem key={category} value={category} className="cursor-pointer">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {selectedCategory === 'All' ? (
          // Group by category when "All" is selected
          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, { skills, color }]) => (
              <div key={category} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex items-center justify-center">
                  <span className={`px-4 py-2 rounded-lg ${color} text-white font-semibold`}>
                    {category}
                  </span>
                </div>
                <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div key={skill} className={`p-4 rounded-lg shadow-md text-center ${color} text-white flex items-center justify-center border border-border/20`}>
                      {skillIcons[skill] || <Code className="w-4 h-4 mr-2" />}
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Regular grid for specific category
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData[selectedCategory]?.skills.map((skill) => (
              <div key={skill} className={`p-4 rounded-lg shadow-md text-center ${skillsData[selectedCategory].color} text-white flex items-center justify-center border border-border/20`}>
                {skillIcons[skill] || <Code className="w-4 h-4 mr-2" />}
                {skill}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

