'use client'

import Section from './Section'
import BadgeList from './BadgeList'
import { profile } from '@/lib/data'

export default function Skills() {
  return (
    <Section 
      id="skills" 
      title="Skills"
      intro="Technologies and competencies I work with"
    >
      <BadgeList items={profile.skills} />
    </Section>
  )
}
