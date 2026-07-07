'use client'

import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" intro="Get to know me better">
      <div className="prose prose-lg max-w-none text-center">
        <p className="leading-relaxed text-muted-foreground">
          I like building things that make life a little easier to navigate.
          As a Computer Engineering senior at Penn State, I&apos;m most drawn
          to where technical systems meet community needs — from managing
          technical operations for university programs to experimenting with
          AI-powered tools, like a Chrome extension that helps people spot
          misinformation on social media. Outside of code, I lead
          community-focused initiatives — from co-founding a cultural
          organization to serving on university governance — that bring
          people together and drive real impact. I&apos;m always happy to
          connect with anyone interested in AI, international education, or
          navigating life as an international student.
        </p>
      </div>
    </Section>
  )
}
