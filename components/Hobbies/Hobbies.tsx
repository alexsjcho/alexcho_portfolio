'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { hobbiesData } from './data'

export default function Hobbies() {
  const [currentImages, setCurrentImages] = useState<{ [key: string]: number }>({
    breakdancing: 0,
    music: 0,
    traveling: 0,
  })

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    hobbiesData.forEach((hobby) => {
      const timer = setInterval(() => {
        setCurrentImages((prev) => ({
          ...prev,
          [hobby.id]: (prev[hobby.id] + 1) % hobby.images.length,
        }))
      }, 4000)
      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [])

  const nextImage = (hobbyId: string, totalImages: number) => {
    setCurrentImages((prev) => ({
      ...prev,
      [hobbyId]: (prev[hobbyId] + 1) % totalImages,
    }))
  }

  const prevImage = (hobbyId: string, totalImages: number) => {
    setCurrentImages((prev) => ({
      ...prev,
      [hobbyId]: (prev[hobbyId] - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section>
        <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">
          Hobbies
        </h2>
        <p className="text-lg mb-12 text-muted-foreground max-w-5xl">
          Outside of work, I'm driven by curiosity and creativity. I've traveled to 30+ cities across China and 12+ countries worldwide, play guitar, piano, and vocals, enjoy gaming, and once competed in the SF Bay Area as a B-Boy (breakdancer) (now happily retired).
        </p>

        <div className="space-y-8">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Carousel */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
                    {hobby.images.map((image, index) => (
                      <Image
                        key={image.id}
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${index === currentImages[hobby.id] ? 'opacity-100' : 'opacity-0'
                          }`}
                      />
                    ))}
                    {hobby.images.length > 1 && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-between p-2">
                          <button
                            onClick={() => prevImage(hobby.id, hobby.images.length)}
                            className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity"
                            aria-label="Previous image"
                          >
                            &#10094;
                          </button>
                          <button
                            onClick={() => nextImage(hobby.id, hobby.images.length)}
                            className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity"
                            aria-label="Next image"
                          >
                            &#10095;
                          </button>
                        </div>
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                          {hobby.images.map((_, index) => (
                            <button
                              key={`dot-${hobby.id}-${index}`}
                              onClick={() =>
                                setCurrentImages((prev) => ({
                                  ...prev,
                                  [hobby.id]: index,
                                }))
                              }
                              className={`w-2 h-2 rounded-full transition-colors ${index === currentImages[hobby.id] ? 'bg-white' : 'bg-gray-400'
                                }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {hobby.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {hobby.description}
                  </p>
                  {hobby.mediaLinks && hobby.mediaLinks.length > 0 && (
                    <div style={{ marginTop: '0.25em' }}>
                      <h4 className="text-sm font-semibold mb-2">Examples</h4>
                      <ul className="list-none space-y-2">
                        {hobby.mediaLinks.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-800 underline hover:no-underline flex items-center gap-1 transition-colors"
                            >
                              {link.label}
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
