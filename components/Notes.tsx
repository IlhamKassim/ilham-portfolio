'use client'

import { ArrowUpRight, Linkedin } from 'lucide-react'
import Section, { Accent } from './Section'
import { profile } from '@/lib/data'

const activityUrl = `${profile.linkedin}/recent-activity/all/`

export default function Notes() {
  return (
    <Section
      id="notes"
      index="05"
      eyebrow="Build notes"
      title={
        <>
          What I&apos;m learning, <Accent>written down.</Accent>
        </>
      }
      intro="I post about what I build and what went wrong, mostly on LinkedIn. A few recent ones."
      aside={
        <a
          href={activityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40 md:self-auto"
        >
          <Linkedin className="h-4 w-4" />
          Follow on LinkedIn
        </a>
      }
    >
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {profile.notes.map((n) => (
          <li key={n.hook}>
            <a
              href={activityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/25"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                {n.tag}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug tracking-tight">
                {n.hook}
              </p>
              <p className="mt-3 flex-1 font-serif text-lg italic leading-snug text-muted-foreground">
                &ldquo;{n.takeaway}&rdquo;
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Read on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
