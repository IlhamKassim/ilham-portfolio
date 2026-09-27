'use client'

import { useState } from 'react'
import {
  GANTT_POLICIES,
  THREAD_COLORS,
} from './data'

export default function FeaturedBuilds() {
  const [policy, setPolicy] = useState<'FCFS' | 'SRTF' | 'MLFQ'>('MLFQ')
  const currentGantt = GANTT_POLICIES[policy]

  const threadList: ('T1' | 'T2' | 'T3' | 'T4')[] = ['T1', 'T2', 'T3', 'T4']

  return (
    <section id="work" className="scroll-mt-16 pt-8 pb-12">
      {/* Section Header */}
      <div className="px-[clamp(20px,4vw,48px)] pb-6 flex items-baseline justify-between gap-4">
        <h2 className="text-[36px] font-semibold tracking-[-0.03em] text-[#E6E9E4]">
          Featured builds
        </h2>
        <span className="font-mono text-[13px] text-[#5C635F]">01 — 03</span>
      </div>

      {/* Grid of Builds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[clamp(20px,4vw,48px)]">
        {/* Card 01: Shariah Algo Trader */}
        <div className="bg-[#111413] border border-[#1F2422] rounded-[10px] p-7 flex flex-col gap-[22px] min-w-0">
          <div className="flex justify-between items-center gap-3 font-mono text-xs text-[#5C635F]">
            <span>01 / QUANT · PYTHON · FASTAPI</span>
            <a
              href="https://shariah-algo-trader.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5F547] hover:underline"
            >
              live ↗
            </a>
          </div>

          <div className="text-[30px] font-semibold tracking-[-0.03em] text-[#E6E9E4]">
            Shariah Algo Trader
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-[1px] bg-[#1F2422] border border-[#1F2422] rounded-[6px] overflow-hidden">
            <div className="bg-[#0E1110] p-4">
              <div className="text-[clamp(22px,2.4vw,32px)] font-semibold text-[#C5F547] tracking-[-0.03em]">
                +2.5%
              </div>
              <div className="font-mono text-[11px] text-[#8A918C] mt-1">
                vs S&amp;P 500, wk 1
              </div>
            </div>
            <div className="bg-[#0E1110] p-4">
              <div className="text-[clamp(22px,2.4vw,32px)] font-semibold text-[#E6E9E4] tracking-[-0.03em]">
                +5%
              </div>
              <div className="font-mono text-[11px] text-[#8A918C] mt-1">
                vs SPUS ETF
              </div>
            </div>
            <div className="bg-[#0E1110] p-4">
              <div className="text-[clamp(22px,2.4vw,32px)] font-semibold text-[#E6E9E4] tracking-[-0.03em]">
                $100K
              </div>
              <div className="font-mono text-[11px] text-[#8A918C] mt-1">
                paper portfolio
              </div>
            </div>
          </div>

          {/* Flow Pipeline */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#E6E9E4]">
            <span className="border border-[#2C3330] rounded-[4px] px-2.5 py-2 text-[#A4ABA6]">
              signal engine
            </span>
            <span className="text-[#5C635F]">→</span>
            <span className="border border-[#C5F547] text-[#C5F547] rounded-[4px] px-2.5 py-2 font-medium">
              shariah screen
            </span>
            <span className="text-[#5C635F]">→</span>
            <span className="border border-[#2C3330] rounded-[4px] px-2.5 py-2 text-[#A4ABA6]">
              factor rank
            </span>
            <span className="text-[#5C635F]">→</span>
            <span className="border border-[#2C3330] rounded-[4px] px-2.5 py-2 text-[#A4ABA6]">
              alpaca orders
            </span>
          </div>

          <p className="m-0 text-[15px] leading-[1.55] text-[#A4ABA6]">
            Trades only inside a Shariah-compliant universe, with a React/TS dashboard
            for live portfolio, compliance and factor visibility. pytest-covered.
          </p>
        </div>

        {/* Card 02: CPU Design Space Explorer */}
        <div className="bg-[#111413] border border-[#1F2422] rounded-[10px] p-7 flex flex-col gap-[22px] min-w-0">
          <div className="flex justify-between items-center gap-3 font-mono text-xs text-[#5C635F]">
            <span>02 / C++ · COMPUTER ARCHITECTURE</span>
            <a
              href="https://github.com/IlhamKassim/cpu-architecture-dse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5F547] hover:underline"
            >
              repo ↗
            </a>
          </div>

          <div className="text-[30px] font-semibold tracking-[-0.03em] text-[#E6E9E4]">
            CPU Design Space Explorer
          </div>

          {/* Graphic Visualization */}
          <div className="relative h-[150px] border border-[#1F2422] rounded-[6px] bg-[#0E1110] bg-spec-dots overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0E1110] to-transparent pointer-events-none" />

            {/* Glowing Point */}
            <div
              className="absolute left-[62%] top-[38%] w-3.5 h-3.5 rounded-full bg-[#C5F547] shadow-[0_0_0_6px_rgba(197,245,71,0.18),0_0_24px_#C5F547]"
              title="Optimal minimum Energy-Delay Product configuration"
            />
            <div className="absolute left-[calc(62%+24px)] top-[calc(38%-4px)] font-mono text-[11px] text-[#C5F547] font-medium tracking-wide">
              min EDP
            </div>

            <div className="absolute left-3 bottom-2.5 font-mono text-[11px] text-[#5C635F]">
              1,000 configs / run · 18-dimensional space
            </div>
          </div>

          <p className="m-0 text-[15px] leading-[1.55] text-[#A4ABA6]">
            Automates design-space exploration of processor and cache configs with a
            heuristic search, optimizing execution time or Energy-Delay Product under
            cache-hierarchy constraints.
          </p>
        </div>

        {/* Card 03: Thread Scheduler (Full Width with interactive simulator) */}
        <div className="lg:col-span-2 bg-[#111413] border border-[#1F2422] rounded-[10px] p-7 grid grid-cols-1 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-8 md:gap-10 min-w-0">
          {/* Controls Column */}
          <div className="flex flex-col gap-4.5 max-w-[380px]">
            <div className="font-mono text-xs text-[#5C635F]">
              03 / C++ · PTHREADS · OS
            </div>
            <div className="text-[30px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#E6E9E4]">
              Thread Scheduler
            </div>
            <p className="m-0 text-[15px] leading-[1.55] text-[#A4ABA6]">
              Multithreaded CPU scheduler replicating real CPU/I-O timing and
              emitting Gantt charts. Switch policies to see the trade-off.
            </p>

            {/* Policy Buttons */}
            <div className="flex gap-2 font-mono text-xs pt-1">
              {(['FCFS', 'SRTF', 'MLFQ'] as const).map((pol) => {
                const isActive = policy === pol
                return (
                  <button
                    key={pol}
                    onClick={() => setPolicy(pol)}
                    className={`cursor-pointer px-3 py-2 rounded-[5px] border transition-colors ${
                      isActive
                        ? 'border-[#C5F547] bg-[#C5F547] text-[#0A0C0B] font-semibold'
                        : 'border-[#2C3330] bg-transparent text-[#A4ABA6] hover:border-[#8A918C]'
                    }`}
                  >
                    {pol}
                  </button>
                )
              })}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-[1px] bg-[#1F2422] border border-[#1F2422] rounded-[6px] overflow-hidden mt-1">
              <div className="bg-[#0E1110] p-3.5">
                <div className="text-[26px] font-semibold text-[#C5F547] transition-all">
                  {currentGantt.resp}
                </div>
                <div className="font-mono text-[11px] text-[#8A918C] mt-0.5">
                  avg response (ticks)
                </div>
              </div>
              <div className="bg-[#0E1110] p-3.5">
                <div className="text-[26px] font-semibold text-[#E6E9E4] transition-all">
                  {currentGantt.wait}
                </div>
                <div className="font-mono text-[11px] text-[#8A918C] mt-0.5">
                  avg wait (ticks)
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Gantt Chart Column */}
          <div className="flex flex-col gap-2.5 justify-center min-w-0">
            {threadList.map((t) => {
              const segs = currentGantt.segs[t]
              const color = THREAD_COLORS[t]

              return (
                <div
                  key={t}
                  className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 items-center"
                >
                  <span className="font-mono text-xs text-[#8A918C]">{t}</span>
                  <div className="relative h-[34px] bg-[#0E1110] border border-[#1F2422] rounded-[4px] overflow-hidden">
                    {segs.map(([start, end], idx) => {
                      const leftPct = (start / 26) * 100
                      const widthPct = ((end - start) / 26) * 100
                      return (
                        <div
                          key={idx}
                          style={{
                            left: `${leftPct}%`,
                            width: `calc(${widthPct}% - 2px)`,
                            backgroundColor: color,
                          }}
                          className="absolute top-1 bottom-1 rounded-[3px] transition-[left,width] duration-350 ease-out"
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* Time Axis */}
            <div className="grid grid-cols-[32px_minmax(0,1fr)] gap-3">
              <span />
              <div className="flex justify-between font-mono text-[11px] text-[#5C635F] px-0.5">
                <span>t=0</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>26</span>
              </div>
            </div>

            {/* Policy Dynamic Explanation Note */}
            <div className="font-mono text-[11px] leading-[1.5] text-[#5C635F] mt-2 border-t border-[#1F2422] pt-2">
              {currentGantt.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
