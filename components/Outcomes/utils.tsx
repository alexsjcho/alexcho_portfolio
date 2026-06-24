import type { ReactNode } from 'react'

/**
 * Parse description text and highlight content within ** markers
 * Example: "Accomplished a **347.5% increase**" -> renders with bold highlight
 */
export const parseHighlightedText = (text: string): ReactNode[] => {
  if (!text) return []

  const parts: ReactNode[] = []
  const regex = /\*\*(.*?)\*\*/g
  let lastIndex = 0
  let match
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    // Add text before the highlight
    if (match.index > lastIndex) {
      const textBefore = text.substring(lastIndex, match.index)
      if (textBefore) {
        parts.push(<span key={`text-${key++}`}>{textBefore}</span>)
      }
    }

    // Add the highlighted text
    parts.push(
      <strong
        key={`highlight-${key++}`}
        className="font-bold text-blue-600 dark:text-blue-400"
      >
        {match[1]}
      </strong>
    )

    lastIndex = regex.lastIndex
  }

  // Add remaining text after the last highlight
  if (lastIndex < text.length) {
    const textAfter = text.substring(lastIndex)
    if (textAfter) {
      parts.push(<span key={`text-${key++}`}>{textAfter}</span>)
    }
  }

  return parts.length > 0 ? parts : [text]
}
