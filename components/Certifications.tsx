'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section
      id="certifications"
      title="Certifications"
      intro="Professional certifications and learning achievements"
    >
      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {typeof cert === 'string' ? cert : cert.name}
                      </p>
                      {typeof cert === 'object' && cert.issuer && (
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                  {typeof cert === 'object' && cert.date && (
                    <p className="text-xs text-muted-foreground">
                      {new Date(cert.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
