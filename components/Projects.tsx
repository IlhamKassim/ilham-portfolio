'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react'
import Section, { Accent } from './Section'
import { profile, type Project, type ProjectCategory } from '@/lib/data'

const COMPACT_LIMIT = 6

const filters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
  { id: 'data', label: 'Data' },
  { id: 'systems', label: 'Systems' },
]

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

function linkLabel(link: string) {
  if (link.includes('github.com')) return 'Source'
  return link.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground/25">
      {project.image && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted"
          tabIndex={-1}
          aria-hidden
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {project.live && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          )}
        </a>
      )}
      <div className="flex flex-1 flex-col p-6">
        {project.kicker && (
          <p className="font-mono text-xs text-muted-foreground">
            {project.kicker}
          </p>
        )}
        <h3 className="mt-1.5 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5">
          <TechTags tech={project.tech} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {project.live
                ? `Visit ${linkLabel(project.link)}`
                : 'Open project'}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function CompactRow({ project }: { project: Project }) {
  const hasLink = project.link !== '#'
  const Wrapper = hasLink ? 'a' : 'div'
  return (
    <Wrapper
      {...(hasLink
        ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`group grid gap-3 py-6 md:grid-cols-12 md:gap-6 ${
        hasLink ? 'cursor-pointer' : ''
      }`}
    >
      <h4 className="flex items-start gap-2 font-medium md:col-span-4">
        <span className={hasLink ? 'group-hover:text-primary' : ''}>
          {project.title}
        </span>
        {hasLink && (
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        )}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
        {project.description}
      </p>
      <div className="md:col-span-3">
        <TechTags tech={project.tech} />
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  const [showAllRest, setShowAllRest] = useState(false)
  const reducedMotion = useReducedMotion()

  const matches = (p: Project) =>
    filter === 'all' || p.category.includes(filter)
  const featured = profile.projects.filter((p) => p.featured && matches(p))
  const rest = profile.projects.filter((p) => !p.featured && matches(p))
  const visibleRest = showAllRest ? rest : rest.slice(0, COMPACT_LIMIT)

  const fade = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
      }

  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected work"
      title={
        <>
          Shipped, public, <Accent>and still running.</Accent>
        </>
      }
      intro="Most of these started as a question I couldn't answer quickly. The live ones are open right now. Click through and try them."
    >
      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const n =
            f.id === 'all'
              ? profile.projects.length
              : profile.projects.filter((p) =>
                  p.category.includes(f.id as ProjectCategory),
                ).length
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === f.id
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
              }`}
            >
              {f.label}
              <span className="ml-1.5 font-mono text-xs opacity-60">{n}</span>
            </button>
          )
        })}
      </div>

      {featured.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {featured.map((project) => (
              <motion.div key={project.title} layout={!reducedMotion} {...fade}>
                <FeaturedCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            More builds and experiments
          </h3>
          <div className="divide-y divide-border border-y border-border">
            {visibleRest.map((project) => (
              <CompactRow key={project.title} project={project} />
            ))}
          </div>
          {rest.length > COMPACT_LIMIT && (
            <button
              type="button"
              onClick={() => setShowAllRest((v) => !v)}
              aria-expanded={showAllRest}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {showAllRest
                ? 'Show fewer'
                : `Show ${rest.length - COMPACT_LIMIT} more`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showAllRest ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
      )}

      <p className="mt-10 text-sm text-muted-foreground">
        Everything else is on{' '}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}
