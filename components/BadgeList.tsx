'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

interface BadgeListProps {
  items: string[]
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export default function BadgeList({
  items,
  variant = 'default',
}: BadgeListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.4, delay: index * 0.05 }}
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
