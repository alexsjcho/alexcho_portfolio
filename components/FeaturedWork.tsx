'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, Globe, FileText, X, Copy, Check } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import getBasePath from '../utils/path'

type CategoryType = 'AI/ML' | 'Analytics' | 'UX/UI Design' | 'Infrastructure' | 'Product';

interface KeyMetric {
  label: string;
  value: string;
}

interface TeamOverview {
  teamSize: string;
  scope: string;
  keyStakeholders: string[];
}

interface CaseStudy {
  problem: string;
  solution: string;
  impact: string[];
  teamOverview: TeamOverview;
}

interface FeaturedWorkItem {
  id: string;
  title: string;
  date: string; // MM/DD/YYYY format
  category: CategoryType;
  image: string;
  metrics?: KeyMetric[];
  description: string;
  tools: string[];
  demo?: string;
  repo?: string;
  diagram?: string;
  caseStudy: CaseStudy;
}

const featuredWorkData: FeaturedWorkItem[] = [
  {
    id: 'aiden-demo-playground',
    title: "Aiden Demo Playground",
    date: "12/19/2025",
    category: 'Infrastructure',
    image: `${getBasePath()}/img/tryaiden-img.png`,
    metrics: [
      { label: "Page Views", value: "Track XXX view count and specific prompt use cases" },
      { label: "Time-to-PoC", value: "80% faster PoC creation for new  use cases based on recent feature or product releases" },
      { label: "Sign-Ups", value: "Track X% conversion of self-service sign-ups from prompt demo page views" }
    ],
    description: "GTM playground for Aiden AI Agent to showcase proof-of-concept demos of AI-powered infrastructure automation capabilities.",
    tools: ['StackGen', 'AI Agent', 'Terraform', 'Cloud Infrastructure', 'Infrastructure as Code', 'Cursor AI', 'Next.js', 'Vercel', 'Grafana'],
    demo: 'https://drive.google.com/file/d/1IIhCIssA1yvXj2nYfCpEjm-NIbNBU524/view?usp=sharing',
    caseStudy: {
      problem: "Demonstrating Aiden AI agent capabilities for infrastructure automation required extensive time to set-up environment with the right integrations, skills, tasks and prompt engineering to ensure certain use cases would work properly which  Sales and marketing teams needed a way to showcase the product's capabilities to potential customers effectively.",
      solution: "Created an interactive demo playground that showcases Aiden AI Agent's infrastructure automation capabilities with a guided tour of how to set-up Aiden's features like Integrations, Skills, Tasks, and Knowledge Base. Created 13+ prompt use case flows per persona and solution category",
      impact: [
        "Helped generate average 70% increase demo bookings during in-person events like KubeCon and AWS Re:Invent 2025.",
        "2.6K page views within first 60 days of launch.",
        "Enable Sales and Marketing to demo PoC for campaigns and outreach faster without spending Solution Engineering or Product Engineering resources to setup and demo PoC for each use case."
      ],
      teamOverview: {
        teamSize: "2 (1 engineers, I functioned as the PM, UX Designer, and Frontend Engineer",
        scope: "Used for Marketing campaigns, Sales Outreach, In-Person Event Booth Demos, Website content, blogs, and more",
        keyStakeholders: ["Platform Engineer", "SREs", "App Developers", "DevOps Engineers"]
      }
    }
  },

  {
    id: 'iac-deployment-app',
    title: "IaC Deployment App",
    date: "01/15/2025",
    category: 'Infrastructure',
    image: `${getBasePath()}/img/rolloutsystem.png`,
    metrics: [
      { label: "Scale of Deployments", value: "320K with several thousand resources per deployment" },
      { label: "Adoption", value: "25+ platform and app engineering teams across ByteDance" },
      { label: "Developer Cost Savings", value: "Average of $XX millions per project" }
    ],
    description: "0-1 Intent-based deployment IaC product that simplifies global infrastructure provisioning, mamagenent, and deployment orchestration. Integrated into a greater DevOps Platform spanning from feature requirement to observability and monitoring. Targeting overseas (non-China) engineering teams under the ByteDance umbrella.",
    tools: ['Figma', 'React'],
    demo: 'https://www.figma.com/proto/NdFRq7UsKkyrfIFddtZitG/RLS-Q32024?node-id=36-27387&t=PDo2dUO7bLGzoPVl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    diagram: 'https://miro.com/app/board/uXjVIAVfeT0=/?share_link_id=737365740298',
    caseStudy: {
      problem: "Many internal business engineering teams (e.g. TikTok, Lark, CapCut) were using DIY manual methodologies to provision infrastructure without using existing platform tools because it couldn't handle global large scale provisioning and deployments for greenfield and brownfield scenarios.",
      solution: "Created an intent-based IaC deployment platform that simplifies infrastructure management by focusing on desired outcomes rather than manual configuration in a standardized manner. Rollout System solved the problem of global provisioning and deployments for greenfield and brownfield scenarios by creating an abstraction layer on top of the existing platform tools for a global deployment IaC entity, making it easier for engineering teams to define their desired infrastructure for their app for all global regions vs manually configuring each region.",
      impact: [
        "Reduced large global greenfield deployment time by 50%",
        "Reduced large global brownfield deployment time by 30-50% depending on the complexity of the deployment and # of resources being deployed.",
        "Reduce needed engineering resources by an average of 80% by automating the provisioning and deployment process.",
        "Helped one TikTok engineering team handle 320K deployments with average of several thousand resources per deployment and roughly $10M of engineering cost savings by saving on engineering resources (200-300 engineers) and provisioning and deployment time.",

      ],
      teamOverview: {
        teamSize: "7 (6 engineers, I was the PM & Figma UX Designer)",
        scope: "All subsidiaries business unit and platform engineering team under the ByteDance (e.g. TikTok, Douyin, Lark, CapCut, etc), but primarily targeting overseas (non-China) teams",
        keyStakeholders: ["DevOps Engineers", "Platform Engineers", "Tech Leads", "App Developers"]
      }
    }
  },
  {
    id: 'feature-gate',
    title: "Feature Gate",
    date: "12/20/2024",
    category: 'Infrastructure',
    image: `${getBasePath()}/img/bytegate.png`,
    metrics: [
      { label: "MAU Growth", value: "30 => 500" },
      { label: "# of Feature Gates", value: "+80% (489 → 2392)" },
      { label: "Engineering Team Adoption", value: "+81% (44 → 236)" }
    ],
    description: "A 0-1 Feature flagging product for managing feature rollouts specialized for monorepo architecture. Integrated into a greater DevOps Platform spanning from feature requirement to observability and monitoring. Targeting overseas (non-China) engineering teams under the ByteDance umbrella.",
    tools: ['Figma', 'React'],
    demo: 'https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/feature-gate-Q3-2024?node-id=1-52481&t=td5ZU4pdPnNBlpLM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    diagram: 'https://miro.com/app/board/uXjVIAKWrLw=/?share_link_id=523562170775',
    caseStudy: {
      problem: "Teams needed a safe way to speed up product development velocity while reducing risk of production incidents or product readiness blocking code deployment. Moreover, there was a mandate within ByteDance engineering team to migrate to a monorepo architecture and existing internal feature flag solutions did not optimize for this mandate.",
      solution: "Designed and developed a 0-1 feature flagging product within 1 year that was lightweight and easy to use for the engineering team who wanted to were invested in our product roadmap to optimize for monorepo architecture or just wanted a simple feature flag solution versus waste time on DIY solutions that was not satandardized.",
      impact: [
        "Increased production adoption by 81% from immediate 44 internal engineering team adoption to 236 engineering teams across ByteDance including Volcano Engine, TikTok, Douyin, Lark, CapCut, etc.",
        "Increased # of feature gate usage by 80% from 489 to 2392 feature gates",
        "Increased MAU growth by 15x from 30 to 500."
      ],
      teamOverview: {
        teamSize: "3 (2 engineers, I was the PM & Figma UX Designer)",
        scope: "All subsidiaries engineering team under the ByteDance (e.g. TikTok, Douyin, Lark, CapCut, etc), but primarily targeting overseas (non-China) teams",
        keyStakeholders: ["Platform Engineers", "App Developers ", "Product Manager"]
      }
    }
  },
  {
    id: 'grampages',
    title: "GramPages",
    date: "12/15/2019",
    category: 'Analytics',
    image: `${getBasePath()}/img/grampages.png`,
    metrics: [
      { label: "Sign-Up", value: "Tracked # of " },
      { label: "Impressions", value: "Tracked # of" },

    ],
    description: "A bootstraped side project, GramPages provides engagement analytics for Instagram to empower influencers to make content creation decisions that will yield the greatest impact (no longer hosted, private GitHub repo).",
    tools: ['JavaScript', 'CSS', '3rd Party API', 'React', 'Redux', 'React-Router', 'Express', 'Node.js', 'MongoDB', 'Mongoose'],
    caseStudy: {
      problem: "Instagram influencers lacked actionable insights into their content performance. Without analytics, creators were making content decisions based on intuition rather than data, limiting their growth potential.",
      solution: "Developed an analytics platform that provides detailed engagement analytics for Instagram accounts. The platform analyzes content performance, identifies trends, and provides recommendations to help influencers optimize their content strategy.",
      impact: [
        "Empowered influencers with data-driven insights to optimize content creation and posting strategies.",
        "Helped creators identify their best-performing content types and optimal posting times for maximum engagement.",
        "Provided actionable analytics that enabled influencers to grow their following and improve engagement rates."
      ],
      teamOverview: {
        teamSize: "3 (3 engineers. I helped as PM and Frontend Engineer)",
        scope: "Side project deployed with small usage",
        keyStakeholders: ["Social Media Strategist", "Instagram Influencers", 'Marketing Teams']
      }
    }
  },

]

const categoryColors: Record<CategoryType, string> = {
  'AI/ML': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Analytics': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'UX/UI Design': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Infrastructure': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Product': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
}

// Helper function to parse MM/DD/YYYY date format to Date object
const parseDate = (dateString: string): Date => {
  const [month, day, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

export default function FeaturedWork() {
  const [selectedWork, setSelectedWork] = useState<FeaturedWorkItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Sort featured work by date (newest first)
  const sortedFeaturedWork = useMemo(() => {
    return [...featuredWorkData].sort((a, b) => {
      const dateA = parseDate(a.date).getTime()
      const dateB = parseDate(b.date).getTime()
      return dateB - dateA // Descending order (newest first)
    })
  }, [])

  useEffect(() => {
    // Check if there's a hash in the URL and open the corresponding case study
    const hash = window.location.hash.replace('#featured-work-', '').replace('#', '')
    if (hash) {
      const work = sortedFeaturedWork.find(item => item.id === hash)
      if (work) {
        setSelectedWork(work)
      }
    }
  }, [])

  const handleCopyLink = (e: React.MouseEvent, workId: string) => {
    e.stopPropagation()
    const url = `${window.location.origin}${window.location.pathname}#featured-work-${workId}`
    navigator.clipboard.writeText(url)
    setCopiedId(workId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleOpenCaseStudy = (work: FeaturedWorkItem) => {
    setSelectedWork(work)
    // Update URL hash without scrolling
    window.history.pushState(null, '', `#featured-work-${work.id}`)
  }

  const handleCloseCaseStudy = (open: boolean) => {
    if (!open) {
      setSelectedWork(null)
      // Remove hash from URL
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-sans tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A selection of product or GTM initiatives that showcase strategic thinking, user empathy, and measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {sortedFeaturedWork.map((work) => (
            <div
              key={work.id}
              id={`featured-work-${work.id}`}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <div className="relative w-full md:w-64 h-64 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  {/* Header with date, category, and copy link */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-muted-foreground font-medium">
                        {work.date}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[work.category]}`}>
                        {work.category}
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleCopyLink(e, work.id)}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                      aria-label="Copy link to case study"
                    >
                      {copiedId === work.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {work.title}
                  </h3>

                  {/* Metrics */}
                  {work.metrics && work.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 rounded-md text-sm"
                        >
                          <span className="font-semibold text-amber-800 dark:text-amber-300">{metric.label}:</span>{' '}
                          <span className="font-medium text-amber-950 dark:text-amber-100">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-1">
                    {work.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.demo && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {work.repo && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Repo
                        </a>
                      </Button>
                    )}
                    {work.diagram && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.diagram} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          Diagram
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Expand Case Study Button */}
                  <Button
                    onClick={() => handleOpenCaseStudy(work)}
                    variant="link"
                    className="self-start p-0 h-auto text-foreground hover:text-foreground/80"
                  >
                    Expand full case study →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Dialog */}
      {selectedWork && (
        <Dialog open={!!selectedWork} onOpenChange={handleCloseCaseStudy}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyLink(e, selectedWork.id)
                  }}
                  className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
                  aria-label="Copy link to case study"
                >
                  {copiedId === selectedWork.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <DialogTitle className="text-3xl font-bold">
                  {selectedWork.title}
                </DialogTitle>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-muted-foreground">
                  {selectedWork.date}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[selectedWork.category]}`}>
                  {selectedWork.category}
                </span>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Featured Image */}
              <div className="w-full">
                <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={selectedWork.image || "/placeholder.svg"}
                    alt={selectedWork.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedWork.description}
                </p>
              </div>

              {/* Metrics */}
              {selectedWork.metrics && selectedWork.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedWork.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 rounded-lg text-sm"
                    >
                      <span className="font-bold text-amber-800 dark:text-amber-300">{metric.label}:</span>{' '}
                      <span className="font-medium text-amber-950 dark:text-amber-100">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tools */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">TOOLS</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team & Scope */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-foreground">TEAM OVERVIEW</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">TEAM SIZE:</span> {selectedWork.caseStudy.teamOverview.teamSize}
                  </div>
                  <div>
                    <span className="font-medium">SCOPE:</span> {selectedWork.caseStudy.teamOverview.scope}
                  </div>
                  <div>
                    <span className="font-medium">TARGET PERSONAS:</span> {selectedWork.caseStudy.teamOverview.keyStakeholders.join(', ')}
                  </div>
                </div>
              </div>

              {/* Problem */}
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">PROBLEM</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedWork.caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">SOLUTION</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedWork.caseStudy.solution}
                </p>
              </div>

              {/* Impact */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">IMPACT</h4>
                <ul className="space-y-2">
                  {selectedWork.caseStudy.impact.map((impactItem, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="mr-2">•</span>
                      <span>{impactItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

