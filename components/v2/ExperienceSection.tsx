'use client'

import { useState } from 'react'
import { EXPERIENCES } from './data'

export default function ExperienceSection() {
  const [tab, setTab] = useState<'Engineering' | 'Leadership'>('Engineering')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const currentList = EXPERIENCES[tab]

  const handleTabChange = (newTab: 'Engineering' | 'Leadership') => {
    setTab(newTab)
    setOpenIndex(0)
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="experience"
      className="scroll-mt-16 mx-[clamp(20px,4vw,48px)] mt-[clamp(56px,7vw,88px)] pt-9 border-t border-[#1F2422]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-8 lg:gap-12">
        {/* Left Column: Heading, Tab Switcher, Resume note */}
        <div className="flex flex-col gap-4 max-w-[320px]">
          <div className="font-mono text-[13px] text-[#5C635F]">/experience</div>
          <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#E6E9E4]">
            Experience &amp; Leadership
          </h2>

          {/* Tab Switcher */}
          <div className="flex gap-1.5 font-mono text-xs pt-1">
            {(['Engineering', 'Leadership'] as const).map((t) => {
              const isSelected = tab === t
              return (
                <button
                  key={t}
                  onClick={() => handleTabChange(t)}
                  className={`cursor-pointer px-3 py-2 rounded-[5px] border transition-colors ${
                    isSelected
                      ? 'border-[#C5F547] bg-[#C5F547] text-[#0A0C0B] font-semibold'
                      : 'border-[#2C3330] bg-transparent text-[#A4ABA6] hover:border-[#8A918C]'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>

          <p className="m-0 text-[13px] leading-[1.5] text-[#5C635F] pt-2">
            For a full chronological record including on-campus roles, check out my{' '}
            <a
              href="/Ilham_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A918C] underline hover:text-[#C5F547]"
            >
              résumé (PDF)
            </a>
            .
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="min-w-0">
          {currentList.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.role + item.org} className="border-b border-[#1F2422]">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left py-4.5 flex items-baseline justify-between gap-4 cursor-pointer group focus:outline-none"
                >
                  <div>
                    <div className="text-[17px] font-medium text-[#E6E9E4] group-hover:text-[#C5F547] transition-colors">
                      {item.role}
                    </div>
                    <div className="text-[14px] text-[#8A918C] mt-0.5">
                      {item.org}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-[#5C635F] whitespace-nowrap">
                      {item.when}
                    </span>
                    <span
                      className={`font-mono text-sm w-4 text-right transition-colors ${
                        isOpen ? 'text-[#C5F547]' : 'text-[#5C635F]'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-5.5 pr-9 flex flex-col gap-3.5 transition-all">
                    {item.points.map((pt, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[16px_minmax(0,1fr)] gap-2 text-[15px] leading-[1.55] text-[#A4ABA6]"
                      >
                        <span className="text-[#C5F547] font-mono">›</span>
                        <span>{pt}</span>
                      </div>
                    ))}

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tg) => (
                        <span
                          key={tg}
                          className="font-mono text-[11px] text-[#8A918C] border border-[#2C3330] rounded-[4px] px-2 py-1"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
