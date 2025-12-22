'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import getBasePath from '../utils/path'

const images = [
  { id: 1, src: `${getBasePath()}/img/shenyang2024.jpg`, alt: 'shenyang2024' },
  { id: 2, src: `${getBasePath()}/img/canada2022.jpg`, alt: 'canada2022' },
  { id: 3, src: `${getBasePath()}/img/hawaii2022.jpg`, alt: 'hawaii2022' },
  { id: 4, src: `${getBasePath()}/img/muirwood.jpg`, alt: 'muirwoods2022' },
  { id: 5, src: `${getBasePath()}/img/fostercity2019.jpg`, alt: 'fostercity2019' },
  { id: 6, src: `${getBasePath()}/img/academyofart2019.jpg`, alt: 'academyofart2019' },
  { id: 7, src: `${getBasePath()}/img/yosemite2019.jpg`, alt: 'yosemite2019' },
  { id: 8, src: `${getBasePath()}/img/seapoint_sf_2019.jpg`, alt: 'seapoint_sf_2019' }
]

export default function About() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-20">
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center text-white font-sans tracking-tight hidden sm:block">About Me</h2>
        <div className="flex flex-col items-center">
          <div className="w-full relative h-[400px] md:h-[400px] mb-8">
            {images.map((image, index) => (
              <Image
                key={image.id}
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className={`object-cover rounded-lg transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                aria-label="Previous image"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? 'bg-white' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-3xl text-center mb-10">
            <p className="text-lg mb-4 text-white font-light leading-relaxed">
              Hello World! My name is Alex Cho, a self-taught, multi-disciplinary <span className="font-semibold text-blue-300">Product & Solutions oriented professional</span> with experience ranging from <span className="font-semibold text-green-300">Software Engineering</span>, Full-Cycle Sales from <span className="font-semibold text-gray-300">Lead Generation</span> to <span className="font-semibold text-yellow-300">Customer Success</span>, <span className="font-semibold text-purple-300">UX Design</span>, <span className="font-semibold text-orange-300">Operations </span>, and <span className="font-semibold text-red-300">Marketing</span>.
            </p>
            <p className="text-lg mb-4 text-white font-light leading-relaxed">
              I travelled to <span className="font-semibold text-pink-300">25+ cities</span> in China and <span className="font-semibold text-pink-300">10+ countries</span> around the world.  Current hobbies include <span className="font-semibold text-blue-300">music</span>: guitar, piano, lead and harmony vocals, <span className="font-semibold text-green-300">video games</span>, and <span className="font-semibold text-yellow-300">traveling</span>. Previously a <span className="font-semibold text-purple-300">b-boy</span> competing in the San Francisco Bay Area.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}

