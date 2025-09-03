'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItem {
  role: string
  org: string
  dates: string
  bullets: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10" />
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
            }`}>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.dates}
                  </span>
                </div>
                <p className="text-primary font-medium mb-4">
                  {item.org}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
