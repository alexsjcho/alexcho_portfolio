import type { ReactNode } from 'react'
import getBasePath from '../../utils/path'

// Helper function to parse MM/DD/YYYY date format to Date object
export const parseDate = (dateString: string): Date => {
  const [month, day, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

// Split problem/solution text into bullet points (one per sentence, split on period)
export const getProblemOrSolutionBullets = (text: string): string[] => {
  if (!text || !text.trim()) return []
  return text
    .split(/\.\s+/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.endsWith('.') ? s : s + '.')
}

// Helper function to parse markdown links and convert them to clickable links
export const parseMarkdownLinks = (text: string): ReactNode[] => {
  if (!text) return []

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match
  let key = 0

  // Reset regex lastIndex to ensure fresh search
  linkRegex.lastIndex = 0

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      const textBefore = text.substring(lastIndex, match.index)
      if (textBefore) {
        parts.push(<span key={`text-${key++}`}>{textBefore}</span>)
      }
    }
    // Add the link
    parts.push(
      <a
        key={`link-${key++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {match[1]}
      </a>
    )
    lastIndex = linkRegex.lastIndex
  }
  // Add remaining text after the last link
  if (lastIndex < text.length) {
    const textAfter = text.substring(lastIndex)
    if (textAfter) {
      parts.push(<span key={`text-${key++}`}>{textAfter}</span>)
    }
  }

  return parts.length > 0 ? parts : [text]
}

// Build image URL at render time so basePath is correct in all environments
export function getWorkImageSrc(img: string | undefined): string {
  if (!img) return '/placeholder.svg'
  if (img.startsWith('http')) return img
  const base = getBasePath()
  if (!base) return img.startsWith('/') ? img : `/${img}`
  if (img.startsWith(base)) return img
  return base + (img.startsWith('/') ? img : `/${img}`)
}
