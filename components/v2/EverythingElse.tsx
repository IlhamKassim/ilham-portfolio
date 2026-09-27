'use client'

import { useState } from 'react'
import { OTHER_PROJECTS } from './data'

export default function EverythingElse() {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Systems' | 'Web'>('All')

  const categories: ('All' | 'AI' | 'Systems' | 'Web')[] = [
    'All',
    'AI',
    'Systems',
    'Web',
  ]

  const filteredProjects =
    filter === 'All'
      ? OTHER_PROJECTS
      : OTHER_PROJECTS.filter((p) => p.cat === filter)

  return (
    <section className="pt-10 pb-8">
      {/* Section Header & Filter Pills */}
      <div className="px-[clamp(20px,4vw,48px)] pb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[36px] font-semibold tracking-[-0.03em] text-[#E6E9E4]">
          Everything else
        </h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[13px]">
          {categories.map((c) => {
            const isSelected = filter === c
            const count =
              c === 'All'
                ? OTHER_PROJECTS.length
                : OTHER_PROJECTS.filter((p) => p.cat === c).length

            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`cursor-pointer px-3.5 py-2 rounded-full border transition-colors ${
                  isSelected
                    ? 'border-[#C5F547] bg-[#C5F547] text-[#0A0C0B] font-semibold'
                    : 'border-[#2C3330] bg-transparent text-[#A4ABA6] hover:border-[#8A918C]'
                }`}
              >
                {c} <span className="opacity-55">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-[clamp(20px,4vw,48px)]">
        {filteredProjects.map((p) => {
          const isExternal = p.url.startsWith('http')
          return (
            <a
              key={p.name}
              href={p.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gap-3 p-5.5 border border-[#1F2422] rounded-[10px] bg-[#0E1110] min-h-[170px] transition-all duration-200 hover:border-[#C5F547] hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-center font-mono text-[11px] text-[#5C635F]">
                <span>{p.cat}</span>
                <span className="group-hover:text-[#C5F547] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>
              <div className="text-[20px] font-semibold tracking-[-0.02em] text-[#E6E9E4] group-hover:text-[#C5F547] transition-colors">
                {p.name}
              </div>
              <p className="m-0 text-[14px] leading-[1.5] text-[#A4ABA6]">
                {p.line}
              </p>
              <div className="mt-auto font-mono text-[11px] text-[#8A918C]">
                {p.stack}
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
