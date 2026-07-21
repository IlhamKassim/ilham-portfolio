'use client'

import { useRef } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export function useScrollReveal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const reducedMotion = useReducedMotion()
  return { ref, isInView, reducedMotion }
}

type RevealDirection = 'x' | 'y' | 'scale'

interface RevealOptions {
  direction?: RevealDirection
  /** Pixel offset for x/y, starting scale value for 'scale'. */
  distance?: number
  duration?: number
  delay?: number
}

export function reveal(
  isInView: boolean,
  { direction = 'y', distance = 20, duration = 0.6, delay = 0 }: RevealOptions = {},
  reducedMotion?: boolean | null
) {
  if (reducedMotion) {
    return { initial: false, animate: {}, transition: { duration: 0 } }
  }

  const hidden =
    direction === 'scale'
      ? { scale: distance, opacity: 0 }
      : direction === 'x'
        ? { x: distance, opacity: 0 }
        : { y: distance, opacity: 0 }

  const visible =
    direction === 'scale'
      ? { scale: 1, opacity: 1 }
      : { x: 0, y: 0, opacity: 1 }

  return {
    initial: hidden,
    animate: isInView ? visible : hidden,
    transition: { duration, delay },
  }
}
