'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section 
      id="education" 
      title="Education"
      intro="My academic background and achievements"
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profile.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{edu.school}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.dates}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-foreground mb-3">
                  {edu.credential}
                </p>
                {edu.details.length > 0 && (
                  <ul className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
