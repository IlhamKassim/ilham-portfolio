'use client'

import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Get to know me better">
      <div className="prose prose-lg max-w-none text-center">
        <p className="leading-relaxed text-muted-foreground">
          The pattern across my work is the same whether I&apos;m writing
          code or running a meeting: take something confusing — an AI
          model&apos;s black box, a donor database mid-migration, a club with
          no constitution yet — and make it legible enough for other people
          to trust and use. That&apos;s shown up as a Chrome extension that
          uses the Gemini API to help people spot misinformation on social
          media, an audit of Penn State&apos;s alumni-relations CRM migration
          that made sure no high-value prospect records got lost in the
          process, and the constitution I wrote and registered to get a new
          Penn State student organization officially recognized. I&apos;m a
          Computer Engineering senior at Penn State, graduating May 2026, and
          I&apos;m looking for internship and entry-level roles where I can
          keep doing that kind of work — in AI, in systems, wherever
          technical judgment and people judgment both matter. If
          you&apos;re working through something similar — an ambiguous
          technical problem, or life as an international student far from
          home — I&apos;d like to hear from you.
        </p>
      </div>
    </Section>
  )
}
