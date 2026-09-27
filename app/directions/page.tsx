'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Sparkles, Terminal, BookOpen, Compass } from 'lucide-react'

export default function DirectionsPage() {
  const [selectedDirection, setSelectedDirection] = useState<'1b' | '1a' | '1c'>('1b')

  return (
    <div className="min-h-screen bg-[#0A0C0B] text-[#E6E9E4] pb-24">
      {/* Top Banner */}
      <div className="border-b border-[#1F2422] bg-[#111413]/60 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#C5F547]">
                <Sparkles className="w-4 h-4" />
                <span>DESIGN DIRECTIONS REVIEW</span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-[#E6E9E4] mt-2">
                Portfolio Redesign Directions
              </h1>
              <p className="text-sm text-[#A4ABA6] max-w-2xl mt-1">
                Comparing the three design explorations from your redesign assets.
                Direction <strong>1b (Systems)</strong> has been selected and implemented as the live homepage.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-md bg-[#C5F547] text-[#0A0C0B] font-semibold hover:bg-[#d6ff5e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View Live Redesign (1b)
            </Link>
          </div>

          {/* Direction Tabs */}
          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[#1F2422]">
            <button
              onClick={() => setSelectedDirection('1b')}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border font-mono text-xs transition-all ${
                selectedDirection === '1b'
                  ? 'border-[#C5F547] bg-[#C5F547]/15 text-[#C5F547] font-semibold shadow-[0_0_12px_rgba(197,245,71,0.2)]'
                  : 'border-[#2C3330] bg-[#0E1110] text-[#8A918C] hover:border-[#8A918C]'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>1b: Systems (Dark Spec-Sheet) [Active]</span>
            </button>

            <button
              onClick={() => setSelectedDirection('1a')}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border font-mono text-xs transition-all ${
                selectedDirection === '1a'
                  ? 'border-[#C8432B] bg-[#C8432B]/15 text-[#FFA090] font-semibold shadow-[0_0_12px_rgba(200,67,43,0.2)]'
                  : 'border-[#2C3330] bg-[#0E1110] text-[#8A918C] hover:border-[#8A918C]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>1a: Legible (Editorial Serif &amp; Paper)</span>
            </button>

            <button
              onClick={() => setSelectedDirection('1c')}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border font-mono text-xs transition-all ${
                selectedDirection === '1c'
                  ? 'border-[#F07A3A] bg-[#F07A3A]/15 text-[#F07A3A] font-semibold shadow-[0_0_12px_rgba(240,122,58,0.2)]'
                  : 'border-[#2C3330] bg-[#0E1110] text-[#8A918C] hover:border-[#8A918C]'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>1c: Borneo (Warm &amp; Bold Two-Lane Timeline)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        {/* DIRECTION 1B: SYSTEMS (CURRENT) */}
        {selectedDirection === '1b' && (
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111413] border border-[#1F2422]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#C5F547]">ACTIVE LIVE HOMEPAGE DIRECTION</span>
                  <h2 className="text-xl font-semibold mt-1">1b: Systems — Dark Spec-Sheet</h2>
                </div>
                <Link
                  href="/"
                  className="text-xs font-mono text-[#C5F547] hover:underline flex items-center gap-1"
                >
                  Inspect on Homepage <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-sm text-[#A4ABA6] mt-3 leading-relaxed">
                Positions Ilham as a rigorous computer systems and AI engineer. Features an interactive
                operating system thread scheduler with real-time animated Gantt charts, live metrics from
                quantitative trading algorithms, an engineer’s terminal specification card, and dynamic category filtering.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#1F2422] font-mono text-xs text-[#8A918C]">
                <div>Palette: <span className="text-[#E6E9E4]">#0A0C0B, #C5F547 (Chartreuse)</span></div>
                <div>Typography: <span className="text-[#E6E9E4]">Geist, Geist Mono</span></div>
                <div>Hero Thesis: <span className="text-[#E6E9E4]">&quot;Built to be trusted&quot;</span></div>
                <div>Interactive: <span className="text-[#E6E9E4]">Gantt simulator, category chips</span></div>
              </div>
            </div>

            {/* Live Interactive Embed of the Hero & Builds */}
            <div className="border border-[#1F2422] rounded-xl overflow-hidden shadow-2xl bg-[#0A0C0B]">
              <div className="border-b border-[#1F2422] bg-[#111413] px-4 py-2 text-xs font-mono text-[#8A918C] flex items-center justify-between">
                <span>PREVIEW: DIRECTION 1B (SYSTEMS)</span>
                <span className="text-[#C5F547]">LIVE RENDERING</span>
              </div>
              <div className="p-6 bg-[#0A0C0B]">
                <div className="text-center py-6">
                  <div className="font-mono text-xs text-[#8A918C]">Mohammad Ilham bin Kassim — Computer Engineer</div>
                  <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight mt-3 text-balance">
                    AI tools and systems software, <span className="text-[#C5F547]">built to be trusted.</span>
                  </h3>
                  <p className="text-base text-[#A4ABA6] max-w-xl mx-auto mt-4">
                    Penn State Computer Engineering, May 2026. I take things that are hard to trust — a model’s black box, a CRM mid-migration, a club with no constitution — and make them legible.
                  </p>
                  <div className="flex justify-center gap-3 mt-6">
                    <Link href="/#work" className="bg-[#C5F547] text-[#0A0C0B] px-5 py-2.5 rounded font-semibold text-sm">
                      See the work ↓
                    </Link>
                    <a href="/Ilham_Resume.pdf" className="border border-[#2C3330] px-5 py-2.5 rounded text-sm text-[#E6E9E4]">
                      Résumé.pdf
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIRECTION 1A: LEGIBLE (EDITORIAL SERIF) */}
        {selectedDirection === '1a' && (
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111413] border border-[#1F2422]">
              <span className="font-mono text-xs text-[#C8432B]">ALTERNATIVE DIRECTION 1A</span>
              <h2 className="text-xl font-semibold mt-1">1a: Legible — Editorial, Paper &amp; Serif, Narrative-First</h2>
              <p className="text-sm text-[#A4ABA6] mt-3 leading-relaxed">
                Warm paper tone (#F2EFE7) with classic editorial typography (Instrument Serif and Instrument Sans).
                Emphasizes clear narrative storytelling, breaking down complex engineering into human-legible milestones.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#1F2422] font-mono text-xs text-[#8A918C]">
                <div>Palette: <span className="text-[#E6E9E4]">#F2EFE7 (Paper), #C8432B (Crimson)</span></div>
                <div>Typography: <span className="text-[#E6E9E4]">Instrument Serif, IBM Plex Mono</span></div>
                <div>Hero Thesis: <span className="text-[#E6E9E4]">&quot;I make confusing things legible&quot;</span></div>
                <div>Focus: <span className="text-[#E6E9E4]">Narrative clarity &amp; editorial flow</span></div>
              </div>
            </div>

            {/* Visual Reproduction of Direction 1a */}
            <div className="rounded-xl overflow-hidden border border-[#D5D0C5] shadow-2xl bg-[#F2EFE7] text-[#17160F] font-sans">
              <div className="border-b border-[#17160F]/15 bg-[#EAE5D9] px-4 py-2 text-xs font-mono text-[#6B675C] flex items-center justify-between">
                <span>PREVIEW: DIRECTION 1A (EDITORIAL PAPER)</span>
                <span className="text-[#C8432B]">PROTOTYPE MOCKUP</span>
              </div>
              <div className="p-8 sm:p-12">
                <div className="font-mono text-xs uppercase tracking-wider text-[#6B675C] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8432B]" />
                  Computer Engineer · Penn State ’26 · Open to full-time roles
                </div>
                <h3 className="font-serif text-5xl sm:text-7xl font-normal tracking-tight mt-6 leading-[0.95] max-w-3xl">
                  I make confusing things <em className="text-[#C8432B] italic">legible.</em>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 mt-10 items-end">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#17160F]/15">
                    <p className="text-lg leading-relaxed text-[#17160F]">
                      I’m Ilham — I build AI tools and systems software, and I co-founded a Penn State student organization from its constitution up.
                    </p>
                    <p className="text-sm leading-relaxed text-[#6B675C]">
                      Recently: a Chrome extension that flags misinformation with Gemini, and a Shariah-compliant trading bot that beat the S&amp;P 500 by 2.5% in its first week.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      src="/avatar.jpg"
                      alt="Mohammad Ilham bin Kassim"
                      className="w-48 h-56 object-cover grayscale contrast-105 rounded-sm border border-[#17160F]/20"
                    />
                    <div className="font-mono text-[11px] text-[#6B675C]">State College, PA — EN / MS</div>
                  </div>
                </div>

                {/* Three Things I've Untangled banner */}
                <div className="mt-12 p-8 bg-[#17160F] text-[#F2EFE7] rounded-lg">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#A39E90]">
                    Three things I’ve untangled
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                      <div className="font-serif text-4xl text-[#E0664E]">01</div>
                      <div className="font-serif text-2xl">An AI model’s black box</div>
                      <p className="text-xs text-[#C9C4B6] leading-relaxed">
                        Social Nutrition Label scores a post’s credibility, factual alignment and visual integrity.
                      </p>
                      <div className="font-mono text-[10px] text-[#A39E90]">GEMINI API · CHROME EXTENSION</div>
                    </div>
                    <div className="space-y-2 md:border-l md:border-[#F2EFE7]/15 md:pl-6">
                      <div className="font-serif text-4xl text-[#E0664E]">02</div>
                      <div className="font-serif text-2xl">A donor database mid-migration</div>
                      <p className="text-xs text-[#C9C4B6] leading-relaxed">
                        Audited Penn State’s AWA-to-Salesforce CRM move so no high-value prospect record was lost.
                      </p>
                      <div className="font-mono text-[10px] text-[#A39E90]">PENN STATE DDAR · DATA AUDIT</div>
                    </div>
                    <div className="space-y-2 md:border-l md:border-[#F2EFE7]/15 md:pl-6">
                      <div className="font-serif text-4xl text-[#E0664E]">03</div>
                      <div className="font-serif text-2xl">A club with no constitution</div>
                      <p className="text-xs text-[#C9C4B6] leading-relaxed">
                        Wrote and registered the constitution that made The Borneo an officially recognized organization.
                      </p>
                      <div className="font-mono text-[10px] text-[#A39E90]">THE BORNEO · GOVERNANCE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIRECTION 1C: BORNEO (WARM & BOLD) */}
        {selectedDirection === '1c' && (
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111413] border border-[#1F2422]">
              <span className="font-mono text-xs text-[#F07A3A]">ALTERNATIVE DIRECTION 1C</span>
              <h2 className="text-xl font-semibold mt-1">1c: Borneo — Warm &amp; Bold, Two-Lane Timeline</h2>
              <p className="text-sm text-[#A4ABA6] mt-3 leading-relaxed">
                Rich forest green (#0E3A2F) paired with warm sunset orange (#F07A3A) and cream (#F3E9D2).
                Celebrates both halves of Ilham’s identity: technical systems engineering in parallel with community organizing and leadership.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#1F2422] font-mono text-xs text-[#8A918C]">
                <div>Palette: <span className="text-[#E6E9E4]">#0E3A2F (Deep Forest), #F07A3A (Orange)</span></div>
                <div>Typography: <span className="text-[#E6E9E4]">Bricolage Grotesque</span></div>
                <div>Hero Thesis: <span className="text-[#E6E9E4]">&quot;Engineer by degree. Organizer by instinct.&quot;</span></div>
                <div>Feature: <span className="text-[#E6E9E4]">Two-lane concurrent timeline (Code &amp; Community)</span></div>
              </div>
            </div>

            {/* Visual Reproduction of Direction 1c */}
            <div className="rounded-xl overflow-hidden border border-[#0E3A2F] shadow-2xl bg-[#0E3A2F] text-[#F3E9D2] font-bricolage">
              <div className="border-b border-[#F3E9D2]/15 bg-[#0A2E25] px-4 py-2 text-xs font-mono text-[#BFD3C2] flex items-center justify-between">
                <span>PREVIEW: DIRECTION 1C (BORNEO TWO-LANE)</span>
                <span className="text-[#F07A3A]">PROTOTYPE MOCKUP</span>
              </div>
              <div className="p-8 sm:p-12 relative overflow-hidden">
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#F3E9D2]/35 rounded-full px-3.5 py-1.5 text-xs">
                    Computer Engineering · Penn State ’26
                  </span>
                  <span className="border border-[#F3E9D2]/35 rounded-full px-3.5 py-1.5 text-xs">
                    Co-founder, The Borneo
                  </span>
                  <span className="bg-[#9CC5A1] text-[#0E3A2F] font-semibold rounded-full px-3.5 py-1.5 text-xs">
                    Open to full-time
                  </span>
                </div>

                <h3 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-6 leading-[0.95] max-w-3xl">
                  Engineer by degree.{' '}
                  <span className="text-[#F07A3A]">Organizer</span> by instinct.
                </h3>
                <p className="text-lg text-[#D5DFD2] max-w-2xl mt-6 leading-relaxed">
                  I’m Ilham. I build AI tools and systems software — and I’ve written a student organization’s constitution from a blank page. Same skill: making the confusing legible.
                </p>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 py-6 border-y border-[#F3E9D2]/20">
                  <div>
                    <div className="text-4xl font-extrabold text-[#F07A3A]">1,000</div>
                    <div className="text-xs text-[#BFD3C2] mt-1">processor configs explored per run</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-[#F07A3A]">8,000+</div>
                    <div className="text-xs text-[#BFD3C2] mt-1">new students &amp; families at orientation</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-[#F07A3A]">200+</div>
                    <div className="text-xs text-[#BFD3C2] mt-1">member club co-led as VP External</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-[#F07A3A]">3rd/20</div>
                    <div className="text-xs text-[#BFD3C2] mt-1">teams, EduSpark pitch for Borneo artisans</div>
                  </div>
                </div>

                {/* Two Lanes Journey Section */}
                <div className="mt-8 p-6 bg-[#F3E9D2] text-[#14261F] rounded-xl">
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold">Two lanes, one journey</h4>
                    <div className="flex gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#0E3A2F]" /> Code &amp; data</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#F07A3A]" /> Community</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 font-mono text-xs">
                    <div className="p-2.5 rounded bg-[#0E3A2F] text-[#F3E9D2] font-semibold">
                      [Code] B.S. Computer Engineering, Penn State (2022–2026)
                    </div>
                    <div className="p-2.5 rounded bg-[#F07A3A] text-[#14261F] font-semibold">
                      [Community] The Borneo — Founder, Authored Constitution &amp; Registered (2023–now)
                    </div>
                    <div className="p-2.5 rounded bg-[#0E3A2F] text-[#F3E9D2] font-semibold">
                      [Code] DDAR Intern — Gen-AI pilot roadmap &amp; CRM audit (2025–2026)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
