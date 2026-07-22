'use client'

import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Get to know me better">
      <div className="prose prose-lg max-w-none text-center">
        <p className="leading-relaxed text-muted-foreground">
          Whether I&apos;m writing code or running a meeting, I end up doing
          the same thing: taking something confusing and making it legible
          enough for other people to trust. An AI model&apos;s black box. A
          donor database mid-migration. A club with no constitution yet.
          That&apos;s the actual range of things I&apos;ve untangled.
          It&apos;s shown up as a Chrome extension that uses the Gemini API
          to help people spot misinformation on social media, an audit of
          Penn State&apos;s alumni-relations CRM migration that made sure no
          high-value prospect records got lost in the transition, and the
          constitution I wrote and registered to get a new Penn State student
          organization officially recognized. I&apos;m a Computer
          Engineering senior at Penn State, graduating May 2026, looking for
          internship and entry-level roles where I can keep doing that kind
          of work in AI or in systems. And if you&apos;re working through
          something similar right now, whether that&apos;s an ambiguous
          technical problem or life as an international student far from
          home, I&apos;d like to hear from you.
        </p>
      </div>
    </Section>
  )
}
