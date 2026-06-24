'use client'

import { useState, useEffect, useCallback } from 'react'
import { Code } from 'lucide-react'
import { skillsData, categoriesOrder, skillIcons, CAROUSEL_INTERVAL_MS } from './data'

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeCategory = categoriesOrder[activeIndex];
  const { skills, color } = skillsData[activeCategory];

  // Auto-rotate carousel (paused when user hovers nav or skills list)
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % categoriesOrder.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-4xl font-bold mb-6 text-center text-foreground font-sans tracking-tight">Skills</h2>

        {/* Category nav - horizontal list, current category highlighted; hover pauses rotation */}
        <nav
          className="mb-8 overflow-x-auto pb-2 scrollbar-thin"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ul className="flex flex-wrap justify-center gap-2 min-w-max px-2">
            {categoriesOrder.map((category, index) => {
              const isActive = index === activeIndex;
              const catColor = skillsData[category].color;
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                      transition-all duration-200 ease-out
                      ${isActive
                        ? `${catColor} text-white shadow-md scale-105`
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Carousel slide - current category skills; hover pauses rotation */}
        <div
          key={activeCategory}
          className="animate-in fade-in duration-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className={`p-4 rounded-lg shadow-md text-center ${color} text-white flex items-center justify-center gap-2 border border-white/10 transition-transform hover:scale-[1.02]`}
            >
              {skillIcons[skill] || <Code className="w-4 h-4 shrink-0" />}
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
