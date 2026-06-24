'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import getBasePath from '../../utils/path'

import type { OutcomeItem } from './types'
import { outcomesData, categoryIcons, ITEMS_PER_PAGE, CAROUSEL_INTERVAL_MS } from './data'
import { parseHighlightedText } from './utils'

// Company logos mapping
const companyLogos: Record<string, string> = {
  'StackGen': `${getBasePath()}/company_logos/stackgen-logo.jpg`,
  'ByteDance': `${getBasePath()}/company_logos/bytedance-logo.jpg`,
  'Agora': `${getBasePath()}/company_logos/agora-logo.png`
}

export default function Outcomes() {
  const [selectedCompany, setSelectedCompany] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  // Get unique companies
  const companies = useMemo(() => {
    const uniqueCompanies = Array.from(new Set(outcomesData.map(item => item.company)))
    return uniqueCompanies.sort()
  }, [])

  // Filter outcomes by company
  const filteredOutcomes = useMemo(() => {
    if (selectedCompany === 'All') {
      return outcomesData
    }
    return outcomesData.filter(item => item.company === selectedCompany)
  }, [selectedCompany])

  // Calculate pagination
  const totalPages = Math.ceil(filteredOutcomes.length / ITEMS_PER_PAGE)
  const paginatedOutcomes = useMemo(() => {
    return filteredOutcomes.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
  }, [filteredOutcomes, currentPage])

  // Handle company filter change
  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  // Auto-rotation carousel effect
  useEffect(() => {
    if (isCarouselPaused || totalPages <= 1) return

    const intervalId = setInterval(() => {
      setCurrentPage(prev => {
        // Loop back to page 1 after reaching the last page
        return prev >= totalPages ? 1 : prev + 1
      })
    }, CAROUSEL_INTERVAL_MS)

    return () => clearInterval(intervalId)
  }, [isCarouselPaused, totalPages, CAROUSEL_INTERVAL_MS])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCompany])

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">
            Outcomes
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-6">
            Highlights of outcomes delivered at past companies
          </p>

          {/* Company Filter */}
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

        {/* Outcomes Grid - Max 3 per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={`${selectedCompany}-${currentPage}`}
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          {paginatedOutcomes.map((outcome) => (
            <div
              key={outcome.id}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              {/* Company Header with Logo */}
              <div className="flex items-center gap-3 mb-4">
                {companyLogos[outcome.company] && (
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={companyLogos[outcome.company]}
                      alt={`${outcome.company} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground truncate">
                    {outcome.company}
                  </h3>
                  {outcome.companyTagline && (
                    <p className="text-xs text-muted-foreground truncate">
                      {outcome.companyTagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Category with Icon */}
              <div className="flex items-center gap-2 mb-3">
                <div className="text-blue-600 dark:text-blue-400">
                  {categoryIcons[outcome.category]}
                </div>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {outcome.category}
                </span>
              </div>

              {/* Description with Highlighted Metrics */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {parseHighlightedText(outcome.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {paginatedOutcomes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No outcomes found for the selected company.</p>
          </div>
        )}
      </section>
    </div>
  )
}
