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

export default function Section({
  id,
  title,
  children,
  className = '',
  intro,
}: SectionProps) {
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
          className="mx-auto max-w-4xl"
        >
          <h2
            id={`${id}-title`}
            className="mb-4 text-center text-3xl font-bold md:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
