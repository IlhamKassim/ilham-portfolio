'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal, reveal } from '@/lib/scroll-reveal'

interface BadgeListProps {
  items: string[]
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export default function BadgeList({
  items,
  variant = 'default',
}: BadgeListProps) {
  const { ref, isInView, reducedMotion } = useScrollReveal()

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          {...reveal(
            isInView,
            { direction: 'scale', distance: 0.8, duration: 0.4, delay: index * 0.05 },
            reducedMotion
          )}
        >
          <Badge
            variant={variant}
            className="cursor-default px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
