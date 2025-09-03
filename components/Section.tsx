'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
  intro?: string
}

export default function Section({ id, title, children, className = '', intro }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 
            id={`${id}-title`}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            {title}
          </h2>
          {intro && (
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {intro}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
