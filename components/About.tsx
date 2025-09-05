'use client'

import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Get to know me better">
      <div className="prose prose-lg max-w-none text-center">
        <p className="leading-relaxed text-muted-foreground">
          I pair hands-on engineering with people-centered leadership. Recent
          work includes launching a Staff Advisory Council and ERG succession
          framework for Penn State&apos;s Division of Development & Alumni Relations,
          front-line support for 8,000+ new students, and fault-free moderation
          of executive-education programs. I enjoy building tools and programs
          that scale — from analytics MVPs to operational playbooks.
        </p>
      </div>
    </Section>
  )
}
