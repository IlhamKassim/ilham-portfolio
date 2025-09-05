'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

export default function Languages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section
      id="languages"
      title="Languages"
      intro="Languages I speak and write"
    >
      <div ref={ref} className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center space-x-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Language Proficiency</h3>
              </div>
              <div className="space-y-3">
                {profile.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                  >
                    <span className="font-medium text-foreground">
                      {language}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-2 w-2 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
