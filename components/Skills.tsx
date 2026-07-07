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
      <div className="space-y-10">
        {profile.skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h3>
            <BadgeList items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}
