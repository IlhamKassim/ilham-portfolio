import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MessageCircle, FileText } from 'lucide-react'
import { profile } from '@/lib/data'
import { Accent } from './Section'
import { whatsappLink } from '@/lib/contact'

const liveProducts = profile.projects.filter((p) => p.live)

// CSS-only entrance so the hero paints before hydration (it's the LCP element).
function Fade({
  as: Tag = 'div',
  delay,
  className = '',
  children,
  ...rest
}: {
  as?: 'div' | 'h1' | 'p' | 'aside' | 'dl'
  delay: number
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      {...rest}
      className={`animate-fade-up motion-reduce:animate-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Fade
              as="div"
              delay={0}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </Fade>

            <Fade
              as="h1"
              delay={0.1}
              className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            >
              Software that <Accent>shows its work.</Accent>
            </Fade>

            <Fade
              as="p"
              delay={0.2}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {profile.intro}
            </Fade>

            <Fade as="div" delay={0.3} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See services and prices
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hi Ilham, I found your site and I'd like to talk about a project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/40"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp me
              </a>
            </Fade>

            <Fade
              as="p"
              delay={0.4}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground"
            >
              <span>{profile.location}</span>
              <span aria-hidden>·</span>
              <span>{profile.timezone}</span>
              <span aria-hidden>·</span>
              <a
                href="/Ilham_Resume.pdf"
                download
                className="inline-flex items-center gap-1 underline-offset-4 hover:text-foreground hover:underline"
              >
                <FileText className="h-3.5 w-3.5" />
                Hiring full-time? Résumé (PDF)
              </a>
            </Fade>
          </div>

          <Fade
            as="aside"
            delay={0.35}
            className="lg:col-span-5"
            aria-label="Live products"
          >
            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4 border-b border-border pb-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Web, AI and data. B.S. Computer Engineering, Penn State.
                  </p>
                </div>
              </div>

              <p className="mb-3 mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Live right now
              </p>
              <ul className="space-y-1">
                {liveProducts.map((p) => (
                  <li key={p.title}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                    >
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 font-medium">
                          {p.title}
                          <span className="rounded border border-emerald-500/40 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            Live
                          </span>
                        </span>
                        <span className="block truncate text-sm text-muted-foreground">
                          {p.kicker}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>

        <Fade
          as="dl"
          delay={0.5}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-border md:grid-cols-4"
        >
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-background/60 p-5 backdrop-blur md:p-6 ${
                i % 2 === 0 ? 'border-r' : ''
              } ${i < 2 ? 'border-b md:border-b-0' : ''} ${
                i === 1 ? 'md:border-r' : ''
              } border-border`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight md:text-4xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}
