import { STACK_COLUMNS } from './data'

export default function StackSection() {
  return (
    <section
      id="stack"
      className="scroll-mt-16 mx-[clamp(20px,4vw,48px)] mt-[clamp(56px,7vw,88px)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1F2422] border border-[#1F2422] rounded-[10px] overflow-hidden">
        {/* Education Column */}
        <div className="bg-[#0E1110] p-6 flex flex-col gap-3.5">
          <div className="font-mono text-xs text-[#5C635F]">education</div>
          <div>
            <div className="text-[18px] font-semibold text-[#E6E9E4]">
              Pennsylvania State University
            </div>
            <div className="text-sm text-[#8A918C] mt-1">
              B.S. Computer Engineering · 2022–2026
            </div>
          </div>
          <div className="text-sm leading-[1.5] text-[#A4ABA6]">
            Computer Organization, Systems Programming, Data Structures, Electronic Circuit Design
          </div>
          <div className="font-mono text-xs text-[#C5F547] mt-auto pt-2 font-medium">
            MARA YTP Scholar
          </div>
        </div>

        {/* Dynamic Spec Columns */}
        {STACK_COLUMNS.map((col) => (
          <div
            key={col.title}
            className="bg-[#0E1110] p-6 flex flex-col gap-3.5"
          >
            <div className="font-mono text-xs text-[#5C635F]">{col.title}</div>
            <div className="flex flex-wrap gap-1.5">
              {col.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] border border-[#2C3330] rounded-[4px] px-[9px] py-[5px] text-[#C9CEC9] hover:border-[#8A918C] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
