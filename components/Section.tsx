'use client'

import { motion } from 'framer-motion'
import { useScrollReveal, reveal } from '@/lib/scroll-reveal'

interface SectionProps {
  id: string
  /** Two-digit index shown in the eyebrow, e.g. "01". */
  index?: string
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  children: React.ReactNode
  className?: string
  /** Extra content placed to the right of the heading on wide screens. */
  aside?: React.ReactNode
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  aside,
}: SectionProps) {
  const { ref, isInView, reducedMotion } = useScrollReveal()

  return (
    <section
      id={id}
      className={`border-t border-border py-20 md:py-28 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          ref={ref}
          {...reveal(isInView, {}, reducedMotion)}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {index && <span className="text-primary">{index}</span>}
              {index && <span className="mx-2">/</span>}
              {eyebrow}
            </p>
            <h2
              id={`${id}-title`}
              className="text-balance text-4xl font-semibold tracking-tight md:text-5xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}
          </div>
          {aside}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

/** Serif italic accent used inside headings. */
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-primary">
      {children}
    </span>
  )
}
