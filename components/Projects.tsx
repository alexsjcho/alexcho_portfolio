'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, Globe, FileText, X } from 'lucide-react'
import getBasePath from '../utils/path'

// First, define the valid categories
type CategoryType = 'AI/ML' | 'Web' | 'UX/UI Design' | 'Infrastructure';

interface Project {
  title: string;
  description: string;
  category: CategoryType[];  // Allow multiple categories
  image: string;
  demo?: string;
  repo?: string;
  diagram?: string;  // Add diagram property
  tools: string[];  // Add tools array
  dateAdded: string;  // Date when project was added (YYYY-MM-DD format)
}

const projectsData: Project[] = [
  {
    title: 'MentorNear',
    description: 'jQuery app: Find and meet with a mentor near you',
    image: `${getBasePath()}/img/mentornear.png`,
    repo: 'https://github.com/alexsjcho/mentor-near-api-capstone',
    category: ['Web'],
    tools: ['jQuery', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize.css', '3rd Party API'],
    dateAdded: '2019-01-15',
  },
  {
    title: 'Qualified',
    description: 'Allows users to score their sales conversations',
    image: `${getBasePath()}/img/qualified.png`,
    repo: 'https://github.com/alexsjcho/qualified-react-redux-immutable-app',
    category: ['Web'],
    tools: ['React', 'Redux', 'React-Router', 'Immutable', 'Bootstrap', 'Jest', 'Enzyme', 'JavaScript', 'CSS', '3rd Party API'],
    dateAdded: '2019-06-20',
  },
  {
    title: 'SmartOKR',
    description: 'Automate your goals via everday software tools',
    image: `${getBasePath()}/img/sokrapp.png`,
    repo: 'https://github.com/alexsjcho/smart-okr-react-redux-app',
    category: ['Web'],
    tools: ['React', 'Redux', 'JavaScript', '3rd Party API'],
    dateAdded: '2019-09-10',
  },
  {
    title: 'Apple Sales Forecasting 2024',
    description: 'Beginner project on Apple sales forecasting for 2024',
    image: `${getBasePath()}/img/correlation_heatmap.png`,
    category: ['AI/ML'],
    repo: 'https://github.com/alexsjcho/apple-2024-sales-dataset',
    tools: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Jupyter Notebook'],
    dateAdded: '2025-02-03',
  },
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'This was a practice project to learn more about AI Agents workflows. Used Langflow as the backend to power my Next.js frontend.',
    image: `${getBasePath()}/img/ai_agent_chatbot.png`,
    category: ['AI/ML'],
    repo: 'https://github.com/alexsjcho/customer_support_ai_agent',
    tools: ['Python', 'Langflow', 'OpenAI', 'Astra-DB', 'Next.js'],
    dateAdded: '2025-03-15',
  },
  {
    title: 'Simple Terminal AI Agent',
    description: 'Created a simple AI Agent from scratch using Anthropic\'s Claude API and tools',
    image: `${getBasePath()}/img/ai_agent_terminal.png`,
    category: ['AI/ML'],
    repo: 'https://github.com/alexsjcho/aiagent_from_scratch',
    tools: ['Anthropic', 'Claude API', 'Python', 'Wikipedia Search API'],
    dateAdded: '2025-02-01',
  },

  {
    title: 'Terraform Multi-Cloud Provisioning',
    description: 'proof-of-concept multi-cloud provisioning of compute engine resource for AWS and GCP',
    image: `${getBasePath()}/img/terraform_cloud.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/terraform_demo_2',
    tools: ['Terraform', 'AWS', 'GCP', 'Sentinel', 'Terraform Cloud', 'Vault', 'Virtual Machine', 'Compute Engine', 'IAM'],
    dateAdded: '2025-05-10',
  },
  {
    title: 'IaC Provisioning with StackGen and Aiden AI Agent',
    description: 'Very simple proof of concept for IaC provisioning with StackGen and Aiden AI Agent',
    image: `${getBasePath()}/img/stackgen-topology.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/stackgen_demo',
    tools: ['StackGen', 'Aiden AI Agent', 'Terraform', 'AWS', 'Infrastructure as Code'],
    dateAdded: '2025-12-22',
  },
  {
    title: 'Ansible + Terraform Deployment Orchastration',
    description: 'Practice project to learn how to use Ansible for deployment orchestration',
    image: `${getBasePath()}/img/ansible-workflow-diagram.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/ansible-terraform-demo',
    tools: ['Ansible', 'Terraform', 'AWS', 'Infrastructure as Code'],
    dateAdded: '2025-12-23',
  },
  {
    title: 'Docker Compose Project',
    description: 'Practice project to learn how to use Docker Compose to deploy a multi-container application',
    image: `${getBasePath()}/img/docker-img.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/docker-demo',
    tools: ['Docker Compose', 'Node.js', 'Redis', 'Next.js'],
    dateAdded: '2025-12-26',
  },
  {
    title: 'Kubernetes + Docker Project',
    description: 'Practice project to learn how to use Kubernetes and Docker to deploy multiple services',
    image: `${getBasePath()}/img/k8s+docker-img.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/k8s-docker-project',
    tools: ['Kubernetes', 'Docker', 'Node.js', 'Redis', 'Next.js'],
    dateAdded: '2025-12-27',
  },
  {
    title: 'LGTM Observability Stack',
    description: 'Practice project to learn how to learn the LGTM Observability Stack',
    image: `${getBasePath()}/img/lgtm_dashboards.png`,
    category: ['Infrastructure'],
    repo: 'https://github.com/alexsjcho/lgtm-observability-stack-demo',
    tools: ['Docker', 'Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry', 'OpenMetrics'],
    dateAdded: '2025-12-29',
  },
  /*
  {
    title: 'Another AI project TBD',
    description: 'On roadmap. TBD',
    image: `${getBasePath()}/placeholder.svg?height=200&width=300`,
    category: ['AI/ML'],
    tools: ['TBD'],
    dateAdded: '2024-12-01',
  },
  */

]

// Define a type for the category colors
type CategoryColors = {
  [K in CategoryType]: string;
}

// Define the categoryColors object with the correct type
const categoryColors: CategoryColors = {
  'AI/ML': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Web': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'UX/UI Design': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Infrastructure': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
}

const PROJECTS_PER_PAGE = 9

// Helper function to format date without timezone conversion
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, month - 1, day) // month is 0-indexed
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    const filtered = selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(project => project.category.includes(selectedCategory as CategoryType))

    // Sort by dateAdded in descending order (newest first)
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.dateAdded).getTime()
      const dateB = new Date(b.dateAdded).getTime()
      return dateB - dateA
    })
  }, [selectedCategory])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const handleImageClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseEnlargedImage = () => {
    setSelectedProject(null)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground font-sans tracking-tight">Projects</h2>
        <p className="text-lg mb-4 text-center text-muted-foreground font-light leading-relaxed"> These are some of the projects I have worked on to learn and apply new skills.</p>
        <div className="mb-8 w-64 mx-auto">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              <SelectItem value="All" className="cursor-pointer">All Projects</SelectItem>
              <SelectItem value="Web" className="cursor-pointer">Web</SelectItem>
              <SelectItem value="AI/ML" className="cursor-pointer">AI/ML</SelectItem>
              <SelectItem value="UX/UI Design" className="cursor-pointer">UX/UI Design</SelectItem>
              <SelectItem value="Infrastructure" className="cursor-pointer">Infrastructure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <div key={project.title} className="bg-card text-card-foreground p-6 rounded-lg shadow-md relative border border-border">
              {selectedCategory === 'All' && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {project.category.map((cat) => (
                    <span key={cat} className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[cat as CategoryType]}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              )}
              <span className="absolute top-4 right-4 px-2 py-1 text-xs text-muted-foreground font-medium z-10">
                {formatDate(project.dateAdded)}
              </span>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={400}
                className="w-[300px] h-[300px] object-contain mx-auto mb-4 mt-12 cursor-zoom-in"
                onClick={() => handleImageClick(project as Project)}
              />
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.demo && (
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button variant="outline" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Repo
                    </a>
                  </Button>
                )}
                {project.diagram && (
                  <Button asChild>
                    <a href={project.diagram} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      Diagram
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center space-x-4">
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium text-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </section>
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseEnlargedImage}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseEnlargedImage}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              width={1600}
              height={1600}
              className="w-[1200px] h-[1200px] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

