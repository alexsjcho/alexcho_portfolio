'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import getBasePath from '../../utils/path'

import type { Recommendation, RelationshipType } from './types'
import { recommendationsData, ITEMS_PER_PAGE, MAX_PREVIEW_LENGTH } from './data'

// Company logos mapping
const companyLogos: Record<string, string> = {
  'StackGen': `${getBasePath()}/company_logos/stackgen-logo.jpg`,
  'ByteDance': `${getBasePath()}/company_logos/bytedance-logo.jpg`,
  'Agora': `${getBasePath()}/company_logos/agora-logo.png`
}

export default function Recommendations() {
  const [selectedRelationship, setSelectedRelationship] = useState<RelationshipType | 'All'>('All')
  const [selectedCompany, setSelectedCompany] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null)

  // Get unique companies
  const companies = useMemo(() => {
    const uniqueCompanies = Array.from(new Set(recommendationsData.map(item => item.company)))
    return uniqueCompanies.sort()
  }, [])

  // Filter recommendations
  const filteredRecommendations = useMemo(() => {
    let filtered = recommendationsData

    // Filter by relationship
    if (selectedRelationship !== 'All') {
      filtered = filtered.filter(item => item.relationship === selectedRelationship)
    }

    // Filter by company
    if (selectedCompany !== 'All') {
      filtered = filtered.filter(item => item.company === selectedCompany)
    }

    return filtered
  }, [selectedRelationship, selectedCompany])

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecommendations.length / ITEMS_PER_PAGE)
  const paginatedRecommendations = useMemo(() => {
    return filteredRecommendations.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
  }, [filteredRecommendations, currentPage])

  // Handle filters
  const handleRelationshipChange = (relationship: RelationshipType | 'All') => {
    setSelectedRelationship(relationship)
    setCurrentPage(1)
  }

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value)
    setCurrentPage(1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const handleReadMore = (recommendation: Recommendation) => {
    setSelectedRecommendation(recommendation)
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">
            Recommendations
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-2">
            What colleagues and managers say about working with me
          </p>
          <div className="text-center mb-8">
            <a
              href="https://www.linkedin.com/in/alexsjcho/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
            >
              View All Recommendations
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Relationship Toggle Pills */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => handleRelationshipChange('All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedRelationship === 'All'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleRelationshipChange('Manager')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedRelationship === 'Manager'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Managers
            </button>
            <button
              onClick={() => handleRelationshipChange('Peer')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedRelationship === 'Peer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Peers
            </button>
          </div>

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

        {/* Recommendations Grid - Max 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={`${selectedRelationship}-${selectedCompany}-${currentPage}`}>
          {paginatedRecommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Profile Image - Circular, Top Center */}
              <div className="flex justify-center mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                  <Image
                    src={rec.profileImage || `${getBasePath()}/recommendations/default-avatar.png`}
                    alt={rec.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Recommender Name */}
              <h3 className="text-xl font-bold text-foreground text-center mb-1">
                {rec.name}
              </h3>

              {/* Title */}
              <p className="text-sm text-muted-foreground text-center mb-2">
                {rec.title}
              </p>

              {/* Company with Logo and LinkedIn */}
              <div className="flex items-center justify-center gap-2 mb-4">
                {companyLogos[rec.company] && (
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <Image
                      src={companyLogos[rec.company]}
                      alt={`${rec.company} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
                <span className="text-sm font-medium text-foreground">
                  {rec.company}
                </span>
                <a
                  href={rec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`View ${rec.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Relationship Badge */}
              <div className="flex justify-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  rec.relationship === 'Manager'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {rec.relationship}
                </span>
              </div>

              {/* Recommendation Text */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{truncateText(rec.text, MAX_PREVIEW_LENGTH)}"
                </p>
              </div>

              {/* Read More Button */}
              {rec.text.length > MAX_PREVIEW_LENGTH && (
                <div className="mt-4">
                  <Button
                    onClick={() => handleReadMore(rec)}
                    variant="link"
                    className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </Button>
                </div>
              )}

              {/* Date */}
              {rec.date && (
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {rec.date}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {paginatedRecommendations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No recommendations found for the selected filters.</p>
          </div>
        )}
      </section>

      {/* Full Recommendation Modal */}
      {selectedRecommendation && (
        <Dialog open={!!selectedRecommendation} onOpenChange={() => setSelectedRecommendation(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 flex-shrink-0">
                  <Image
                    src={selectedRecommendation.profileImage || `${getBasePath()}/recommendations/default-avatar.png`}
                    alt={selectedRecommendation.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{selectedRecommendation.name}</h3>
                  <p className="text-sm text-muted-foreground font-normal">
                    {selectedRecommendation.title} at {selectedRecommendation.company}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      selectedRecommendation.relationship === 'Manager'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {selectedRecommendation.relationship}
                    </span>
                    <a
                      href={selectedRecommendation.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground leading-relaxed italic whitespace-pre-wrap">
                "{selectedRecommendation.text}"
              </p>
              {selectedRecommendation.date && (
                <p className="text-xs text-muted-foreground mt-4 text-right">
                  {selectedRecommendation.date}
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
