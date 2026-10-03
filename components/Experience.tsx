'use client'

import { useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import Section from './Section'
import { profile, type Experience as ExperienceItem } from '@/lib/data'

function Role({ item }: { item: ExperienceItem }) {
  return (
    <li className="grid grid-cols-1 gap-2 py-7 md:grid-cols-12 md:gap-6">
      <p className="font-mono text-xs text-muted-foreground md:col-span-3 md:pt-1">
        {item.dates}
      </p>
      <div className="md:col-span-9">
        <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
        <p className="text-sm text-primary">{item.org}</p>
        <ul className="mt-3 space-y-2">
          {item.bullets.map((b) => (
            <li
              key={b}
              className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const highlighted = profile.experiences.filter((e) => e.highlight)
  const hiddenCount = profile.experiences.length - highlighted.length
  const roles = showAll ? profile.experiences : highlighted

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Where I've worked and led"
      intro="Community and open-source work now, and the roles at Penn State that taught me how organisations actually run."
      aside={
        <a
          href="/Ilham_Resume.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40 md:self-auto"
        >
          <Download className="h-4 w-4" />
          Résumé (PDF)
        </a>
      }
    >
      <ul className="divide-y divide-border border-y border-border">
        {roles.map((item) => (
          <Role key={`${item.role}-${item.org}`} item={item} />
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {showAll
            ? 'Show highlights only'
            : `Show full history (${hiddenCount} more roles)`}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      <div className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </h3>
          <ul className="space-y-5">
            {profile.education.map((edu) => (
              <li
                key={edu.school}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-semibold">{edu.school}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {edu.dates}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.credential}
                </p>
                {edu.details.length > 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {edu.details.join(' · ')}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <details className="group mt-5 rounded-2xl border border-border bg-card p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              {profile.certifications.length} certifications
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="mt-4 space-y-2">
              {profile.certifications.map((c) => (
                <li key={c.name} className="flex justify-between gap-4 text-sm">
                  <span>
                    {c.name}{' '}
                    <span className="text-muted-foreground">· {c.issuer}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div id="skills">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Toolkit
          </h3>
          <div className="space-y-6">
            {profile.skillCategories.map((cat) => (
              <div key={cat.category}>
                <p className="mb-2.5 text-sm font-semibold">{cat.category}</p>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
