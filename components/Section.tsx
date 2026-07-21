'use client'

import { motion } from 'framer-motion'
import { useScrollReveal, reveal } from '@/lib/scroll-reveal'

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
  const { ref, isInView, reducedMotion } = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          {...reveal(isInView, {}, reducedMotion)}
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
