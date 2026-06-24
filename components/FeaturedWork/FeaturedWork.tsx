'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Globe, FileText, Copy, Check, Wrench, BookOpen, ChevronLeft, ChevronRight, Video } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Import types
import type { FeaturedWorkItem } from './types'
import { categoryColors } from './types'

// Import data
import { featuredWorkData } from './data'

// Import utility functions
import { parseDate, getProblemOrSolutionBullets, parseMarkdownLinks, getWorkImageSrc } from './utils'

const ITEMS_PER_PAGE = 3

export default function FeaturedWork() {
  const [selectedWork, setSelectedWork] = useState<FeaturedWorkItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)

  // Handle company filter change
  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value)
    setCurrentPage(1) // Reset to first page when filtering
    // Close any open case study when filtering
    setSelectedWork(null)
  }

  // Get unique companies from featured work data
  const companies = useMemo(() => {
    const uniqueCompanies = Array.from(new Set(featuredWorkData.map(item => item.company)))
    return uniqueCompanies.sort()
  }, [])

  // Sort and filter featured work by date (newest first) and company
  const sortedFeaturedWork = useMemo(() => {
    // Create a copy of the data
    let filtered = [...featuredWorkData]

    // Filter by company if not 'All'
    if (selectedCompany !== 'All') {
      filtered = filtered.filter(item => item.company === selectedCompany)
    }

    // Sort by date (newest first) - create new array to avoid mutating original
    return [...filtered].sort((a, b) => {
      try {
        const dateA = parseDate(a.date).getTime()
        const dateB = parseDate(b.date).getTime()
        return dateB - dateA // Descending order (newest first)
      } catch (error) {
        // If date parsing fails, keep original order
        console.error('Error parsing date:', error, a.date, b.date)
        return 0
      }
    })
  }, [selectedCompany])

  // Calculate pagination - memoize to ensure it updates when currentPage or sortedFeaturedWork changes
  const totalPages = useMemo(() => {
    return Math.ceil(sortedFeaturedWork.length / ITEMS_PER_PAGE)
  }, [sortedFeaturedWork.length])

  const paginatedFeaturedWork = useMemo(() => {
    return sortedFeaturedWork.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
  }, [sortedFeaturedWork, currentPage])

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  useEffect(() => {
    const openFromHash = () => {
      const rawHash = window.location.hash || ''
      const id = rawHash.replace('#featured-work-', '').replace('#', '')

      if (!id) {
        return
      }

      const work = sortedFeaturedWork.find(item => item.id === id)
      if (work) {
        setSelectedWork(work)
      }
    }

    // Run once on mount (for direct URL loads)
    openFromHash()

    // Also respond to in-page hash changes (e.g. clicks from Skills chart)
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [sortedFeaturedWork])

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
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-6xl mb-6">
            A selection of product or GTM initiatives that showcase strategic thinking, user empathy, and measurable results. Along with work examples artifacts. 
          </p>
          <div className="mb-8 w-64 mx-auto">
            <Select value={selectedCompany} onValueChange={handleCompanyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800">
                <SelectItem value="All" className="cursor-pointer">All Companies</SelectItem>
                {companies.map((company) => (
                  <SelectItem key={company} value={company} className="cursor-pointer">
                    {company}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6 mb-8">
              <Button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                aria-label="Next page"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-8" key={`${selectedCompany}-${currentPage}`}>
          {paginatedFeaturedWork.map((work) => (
            <div
              key={`${selectedCompany}-${currentPage}-${work.id}`}
              id={`featured-work-${work.id}`}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <div className="relative w-full md:w-64 h-64 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={getWorkImageSrc(work.image)}
                      alt={work.title}
                      fill
                      className="object-contain"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 256px"
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
                      {work.category.map((cat) => (
                        <span key={cat} className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[cat] ?? 'bg-muted text-muted-foreground'}`}>
                          {cat}
                        </span>
                      ))}
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

                  {/* Skills */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-foreground mr-2">Skills:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {work.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
                    {work.website && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                    {work.tool && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.tool} target="_blank" rel="noopener noreferrer">
                          <Wrench className="w-4 h-4 mr-2" />
                          Tool
                        </a>
                      </Button>
                    )}
                    {work.document && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.document} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Document
                        </a>
                      </Button>
                    )}
                    {work.video && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.video} target="_blank" rel="noopener noreferrer">
                          <Video className="w-4 h-4 mr-2" />
                          Video
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
          <DialogContent key={selectedWork.id} className="max-w-7xl max-h-[90vh] overflow-y-auto">
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
                <DialogTitle className="text-3xl font-bold flex-2">
                  {selectedWork.title}

                </DialogTitle>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {selectedWork.date}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {selectedWork.category.map((cat) => (
                  <span key={cat} className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[cat] ?? 'bg-muted text-muted-foreground'}`}>
                    {cat}
                  </span>
                ))}
              </div>
              {(selectedWork.demo || selectedWork.repo || selectedWork.diagram || selectedWork.website || selectedWork.tool || selectedWork.document || selectedWork.video) && (
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-sm font-semibold text-red-600">Examples:</span>
                  {selectedWork.demo && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3 h-3 mr-1.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {selectedWork.repo && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1.5" />
                        Repo
                      </a>
                    </Button>
                  )}
                  {selectedWork.diagram && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.diagram} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-3 h-3 mr-1.5" />
                        Diagram
                      </a>
                    </Button>
                  )}
                  {selectedWork.website && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3 h-3 mr-1.5" />
                        Website
                      </a>
                    </Button>
                  )}
                  {selectedWork.tool && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.tool} target="_blank" rel="noopener noreferrer">
                        <Wrench className="w-3 h-3 mr-1.5" />
                        Tool
                      </a>
                    </Button>
                  )}
                  {selectedWork.document && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.document} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="w-3 h-3 mr-1.5" />
                        Document
                      </a>
                    </Button>
                  )}
                  {selectedWork.video && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.video} target="_blank" rel="noopener noreferrer">
                        <Video className="w-3 h-3 mr-1.5" />
                        Video
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </DialogHeader>

            <div className="space-y-6">
              {/* Featured Image */}
              <div className="w-full">
                <div className="relative w-full h-[600px] bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={getWorkImageSrc(selectedWork.image)}
                    alt={selectedWork.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">OVERVIEW</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedWork.description}
                </p>
              </div>

              {/* Metrics */}
              {selectedWork.metrics && selectedWork.metrics.length > 0 && (
                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">METRICS</h4>
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
                </div>
              )}

              {/* Impact */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">IMPACT</h4>
                <ul className="space-y-2">
                  {selectedWork.caseStudy.impact.map((impactItem, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="mr-2">•</span>
                      <span>{parseMarkdownLinks(impactItem)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">PROBLEM</h4>
                <ul className="space-y-2">
                  {getProblemOrSolutionBullets(selectedWork.caseStudy.problem).map((bullet, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="mr-2">•</span>
                      <span>{parseMarkdownLinks(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">SOLUTION</h4>
                <ul className="space-y-2">
                  {getProblemOrSolutionBullets(selectedWork.caseStudy.solution).map((bullet, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="mr-2">•</span>
                      <span>{parseMarkdownLinks(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Examples */}
              {selectedWork.caseStudy.contentList && selectedWork.caseStudy.contentList.length > 0 && (
                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground">CONTENT EXAMPLES</h4>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-relaxed">
                    {selectedWork.caseStudy.contentList.map((item, index) => (
                      <li key={index}>
                        {parseMarkdownLinks(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Team Overview */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">TEAM OVERVIEW</h4>
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
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
