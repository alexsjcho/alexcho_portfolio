'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, Globe, FileText, X } from 'lucide-react'
import { Project, CategoryType, categoryColors } from './types'
import { projectsData, PROJECTS_PER_PAGE } from './data'
import { formatDate } from './utils'

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
        <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">Projects</h2>
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
              <ChevronLeft className="h-4 w-4" />
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
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

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
