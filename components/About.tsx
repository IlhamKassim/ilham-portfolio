'use client'

import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Get to know me better">
      <div className="prose prose-lg max-w-none text-center">
        <p className="leading-relaxed text-muted-foreground">
          Driven Computer Engineering Senior at Penn State, specializing in the
          intersection of AI innovation and systems programming. With experience
          in technical operations and data-driven development, I&apos;ve managed
          SQL-based databases and implemented predictive models to solve complex
          problems. I also lead community-focused initiatives — from cultural
          events to university governance — that bring people together and drive
          impact.
        </p>
      </div>
    </Section>
  )
}
