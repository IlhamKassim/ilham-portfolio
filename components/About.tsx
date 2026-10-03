'use client'

import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Section, { Accent } from './Section'
import { profile } from '@/lib/data'

export default function About() {
  return (
    <Section
      id="about"
      index="03"
      eyebrow="About"
      title={
        <>
          Built in Sabah, <Accent>trained at Penn State.</Accent>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
          <p>
            I grew up in Papar, Sabah. A MARA scholarship took me through INTEC
            and on to Penn State, where I finished a Computer Engineering degree
            in May 2026. Now I build from Malaysia for clients anywhere.
          </p>
          <p>
            Most of my projects start with a question I can&apos;t answer
            quickly.{' '}
            <span className="text-foreground">
              What does Sabah&apos;s economy look like, district by district?
              Which graduate programmes am I actually eligible for?
            </span>{' '}
            So I build the thing that answers it, put it in public, and ask
            people what&apos;s missing.
          </p>
          <p>
            I care about the parts nobody screenshots. Where a number came from.
            What a tool should refuse to show. Whether I can defend a decision
            when someone asks. Clients get the same treatment: if I used AI to
            build something, I can tell you where, and how I checked it.
          </p>
          <p>
            I work in English and Malay. The longer story, from Papar to Penn
            State, is on my{' '}
            <Link
              href="/journey"
              className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Journey page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>

        <div className="lg:col-span-5">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Where I build with others
          </h3>
          <ul className="space-y-3">
            {profile.community.map((c) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="font-mono text-xs text-primary">{c.role}</p>
                    </div>
                    {c.link && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </>
              )
              return (
                <li key={c.name}>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/25"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="rounded-2xl border border-border bg-card p-5">
                      {inner}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
