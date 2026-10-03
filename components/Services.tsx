'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Check,
  Minus,
  Plus,
  MessageCircle,
  Mail,
  X,
  ArrowRight,
} from 'lucide-react'
import Section, { Accent } from './Section'
import { profile, type Service, type ServiceUnit } from '@/lib/data'
import { whatsappLink, mailtoLink } from '@/lib/contact'

const STORAGE_KEY = 'quote-selection-v1'

const unitLabel: Record<ServiceUnit, string> = {
  project: 'project',
  hour: 'hour',
  session: 'session',
  workshop: 'workshop',
}

const usd = (n: number) => `$${n.toLocaleString('en-US')}`

const allServices = profile.services.flatMap((g) => g.items)
const byCode = new Map(allServices.map((s) => [s.code, s]))

type Selection = Record<string, number>

function useQuoteSelection() {
  const [selection, setSelection] = useState<Selection>({})

  // Restore a half-built quote for returning visitors. Purely a convenience.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Selection
      const valid = Object.fromEntries(
        Object.entries(parsed).filter(
          ([code, qty]) => byCode.has(code) && Number.isInteger(qty) && qty > 0,
        ),
      )
      setSelection(valid)
    } catch {
      // Ignore unreadable storage.
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selection))
    } catch {
      // Ignore unavailable storage.
    }
  }, [selection])

  const toggle = (code: string) =>
    setSelection((prev) => {
      const next = { ...prev }
      if (next[code]) delete next[code]
      else next[code] = 1
      return next
    })

  const setQty = (code: string, qty: number) =>
    setSelection((prev) => ({
      ...prev,
      [code]: Math.min(99, Math.max(1, qty)),
    }))

  const clear = () => setSelection({})

  return { selection, toggle, setQty, clear }
}

function lineFor(service: Service, qty: number) {
  const qtyText =
    service.unit === 'project'
      ? ''
      : ` × ${qty} ${unitLabel[service.unit]}${qty > 1 ? 's' : ''}`
  return `${service.code} ${service.title}${qtyText} (from ${usd(service.price * qty)})`
}

export default function Services() {
  const { selection, toggle, setQty, clear } = useQuoteSelection()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const reducedMotion = useReducedMotion()
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')

  const selected = useMemo(
    () =>
      Object.entries(selection)
        .map(([code, qty]) => ({ service: byCode.get(code)!, qty }))
        .filter((x) => x.service)
        .sort((a, b) => a.service.code.localeCompare(b.service.code)),
    [selection],
  )
  const total = selected.reduce((sum, x) => sum + x.service.price * x.qty, 0)
  const count = selected.length

  const message = useMemo(() => {
    const lines = [
      "Hi Ilham, I'd like a quote for:",
      '',
      ...selected.map((x) => `- ${lineFor(x.service, x.qty)}`),
      '',
      `Estimated from: ${usd(total)}`,
    ]
    if (details.trim()) lines.push('', 'About the project:', details.trim())
    if (name.trim()) lines.push('', `Name: ${name.trim()}`)
    return lines.join('\n')
  }, [selected, total, details, name])

  const openDialog = () => dialogRef.current?.showModal()
  const closeDialog = () => dialogRef.current?.close()

  return (
    <Section
      id="services"
      index="01"
      eyebrow="Services"
      title={
        <>
          I can build it for you, <Accent>or teach you to.</Accent>
        </>
      }
      intro="Starting prices in USD. Tick what you need, then send me the list on WhatsApp or email. I reply with a fixed quote before any work starts."
    >
      <ol className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {profile.process.map((p) => (
          <li key={p.step} className="bg-background p-4 sm:p-5">
            <p className="font-mono text-xs text-primary">{p.step}</p>
            <p className="mt-2 font-medium">{p.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {profile.services.map((group) => (
          <div
            key={group.id}
            className="rounded-3xl border border-border bg-card p-4 sm:p-6"
          >
            <div className="mb-5 px-1">
              <h3 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight">
                {group.title}
                <span className="font-mono text-xs font-normal uppercase tracking-[0.18em] text-muted-foreground">
                  {group.items.length} services
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.blurb}
              </p>
            </div>

            <ul className="space-y-3">
              {group.items.map((s) => {
                const qty = selection[s.code]
                const isSelected = Boolean(qty)
                return (
                  <li
                    key={s.code}
                    className={`relative rounded-2xl border transition-colors ${
                      isSelected
                        ? 'border-primary/60 bg-accent/60'
                        : 'border-border bg-background hover:border-foreground/25'
                    }`}
                  >
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={isSelected}
                      onClick={() => toggle(s.code)}
                      className="flex w-full items-start gap-4 rounded-2xl p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-foreground/25'
                        }`}
                        aria-hidden
                      >
                        {isSelected && (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-2">
                          <span className="font-mono text-xs text-muted-foreground">
                            {s.code}
                          </span>
                          <span className="font-medium">{s.title}</span>
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {s.description}
                        </span>
                        <span className="mt-2 block font-mono text-sm">
                          {s.unit === 'project' ? 'from ' : ''}
                          <span className="font-semibold text-foreground">
                            {usd(s.price)}
                          </span>
                          <span className="text-muted-foreground">
                            {' '}
                            / {unitLabel[s.unit]}
                          </span>
                        </span>
                      </span>
                    </button>

                    {isSelected && s.unit !== 'project' && (
                      <div className="flex items-center justify-between border-t border-primary/20 px-4 py-2.5 pl-[3.25rem]">
                        <span className="text-sm text-muted-foreground">
                          How many {unitLabel[s.unit]}s?
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => setQty(s.code, qty - 1)}
                            disabled={qty <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background disabled:opacity-40"
                            aria-label={`Fewer ${unitLabel[s.unit]}s of ${s.title}`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span
                            className="w-8 text-center font-mono text-sm tabular-nums"
                            aria-live="polite"
                          >
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(s.code, qty + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background"
                            aria-label={`More ${unitLabel[s.unit]}s of ${s.title}`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted-foreground">
          Not sure what to pick? Describe the problem and I will suggest a
          scope.
        </p>
        <a
          href={whatsappLink(
            "Hi Ilham, I have a project but I'm not sure which service fits. Here's what I need:",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
        >
          <MessageCircle className="h-4 w-4" />
          Talk it through first
        </a>
      </div>

      {/* Sticky quote bar */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={reducedMotion ? false : { y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed inset-x-0 bottom-4 z-40 px-4"
          >
            <div className="mx-auto flex max-w-2xl items-center gap-1 rounded-full border border-border bg-foreground py-2 pl-5 pr-2 text-background shadow-2xl sm:gap-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {count}{' '}
                  <span className="hidden sm:inline">
                    {count === 1 ? 'service' : 'services'}{' '}
                  </span>
                  selected
                </p>
                <p className="truncate font-mono text-xs opacity-70">
                  <span className="hidden sm:inline">Estimated </span>from{' '}
                  {usd(total)}
                </p>
              </div>
              <button
                type="button"
                onClick={clear}
                className="rounded-full px-2 py-2 text-xs opacity-70 transition-opacity hover:opacity-100 sm:px-3"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={openDialog}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Request quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <dialog
        ref={dialogRef}
        aria-labelledby="quote-title"
        className="w-[min(36rem,calc(100vw-2rem))] rounded-3xl border border-border bg-card p-0 text-foreground shadow-2xl outline-none backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDialog()
        }}
      >
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Quote request
              </p>
              <h3
                id="quote-title"
                className="mt-2 text-2xl font-semibold tracking-tight"
              >
                Here&apos;s what you picked
              </h3>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <ul className="divide-y divide-border rounded-2xl border border-border">
            {selected.map(({ service, qty }) => (
              <li
                key={service.code}
                className="flex items-baseline justify-between gap-4 px-4 py-3 text-sm"
              >
                <span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {service.code}
                  </span>{' '}
                  {service.title}
                  {service.unit !== 'project' && (
                    <span className="text-muted-foreground"> × {qty}</span>
                  )}
                </span>
                <span className="shrink-0 font-mono">
                  {usd(service.price * qty)}
                </span>
              </li>
            ))}
            <li className="flex items-baseline justify-between px-4 py-3 text-sm font-semibold">
              <span>Estimated from</span>
              <span className="font-mono">{usd(total)}</span>
            </li>
          </ul>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium">
                Your name{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">
                What are you building?{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="A few lines is plenty: who it's for, what it should do, any deadline."
                className="mt-1.5 w-full resize-y rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Send on WhatsApp
            </a>
            <a
              href={mailtoLink('Quote request from your website', message)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
            >
              <Mail className="h-4 w-4" />
              Send by email
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Nothing is sent from this site. Both buttons open your own app with
            the message filled in.
          </p>
        </div>
      </dialog>
    </Section>
  )
}
