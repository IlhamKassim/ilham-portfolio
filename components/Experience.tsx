'use client'

import Section from './Section'
import Timeline from './Timeline'
import { profile } from '@/lib/data'

export default function Experience() {
  return (
    <Section 
      id="experience" 
      title="Experience"
      intro="My professional journey and key achievements"
    >
      <Timeline items={profile.experiences} />
    </Section>
  )
}
