'use client'

import { Mail, MessageCircle, Linkedin, Github, Plus } from 'lucide-react'
import Section, { Accent } from './Section'
import { profile } from '@/lib/data'
import { whatsappLink, mailtoLink } from '@/lib/contact'

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: profile.phone,
    href: whatsappLink(
      "Hi Ilham, I found your site and I'd like to talk about a project.",
    ),
    note: 'Fastest. Quotes and quick questions.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: mailtoLink('Project enquiry', 'Hi Ilham,\n\n'),
    note: 'For longer briefs and attachments.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/ilhamkassim',
    href: profile.linkedin,
    note: 'Build notes and full-time roles.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'IlhamKassim',
    href: profile.github,
    note: 'Source for most of what you see here.',
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Got a problem worth building for? <Accent>Tell me about it.</Accent>
        </>
      }
      intro={`I'm in ${profile.location} (${profile.timezone}) and work with clients anywhere. I'm also open to full-time roles if the work is right.`}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  c.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <c.icon className="h-5 w-5 text-primary" />
                <p className="mt-4 font-semibold">{c.label}</p>
                <p className="mt-0.5 break-all font-mono text-sm text-muted-foreground group-hover:text-foreground">
                  {c.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Common questions
          </h3>
          <div className="divide-y divide-border border-y border-border">
            {profile.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium">
                  {f.q}
                  <Plus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
