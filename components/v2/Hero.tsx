export default function Hero() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-end px-[clamp(20px,4vw,48px)] pt-[clamp(56px,9vw,112px)] pb-[clamp(48px,7vw,88px)] bg-spec-grid"
    >
      {/* Left Column: Headline and Introduction */}
      <div className="min-w-0">
        <div className="font-mono text-[13px] text-[#8A918C]">
          Mohammad Ilham bin Kassim — Computer Engineer
        </div>
        <h1 className="mt-5 text-[clamp(44px,6.6vw,92px)] leading-[0.98] font-semibold tracking-[-0.045em] text-[#E6E9E4] text-balance">
          AI tools and systems software,{' '}
          <span className="text-[#C5F547]">built to be trusted.</span>
        </h1>
        <p className="mt-7 max-w-[580px] text-lg leading-[1.55] text-[#A4ABA6]">
          I’m a Computer Engineering student at Penn State graduating in May 2026.
          I build practical AI tools and low-level systems software. Most of my work
          centers on taking complex, opaque systems — like an AI model’s reasoning,
          a messy database migration, or a brand new student club — and turning them
          into something reliable, legible, and easy to use.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-9">
          <a
            href="#work"
            className="bg-[#C5F547] text-[#0A0C0B] px-[22px] py-[14px] rounded-[6px] font-semibold text-[15px] hover:bg-[#d4ff59] transition-all hover:shadow-[0_0_20px_rgba(197,245,71,0.25)]"
          >
            See the work ↓
          </a>
          <a
            href="/Ilham_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2C3330] text-[#E6E9E4] px-[22px] py-[14px] rounded-[6px] text-[15px] hover:border-[#C5F547] hover:text-[#C5F547] transition-colors"
          >
            Résumé (PDF)
          </a>
          <a
            href="https://github.com/IlhamKassim"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2C3330] text-[#E6E9E4] px-[22px] py-[14px] rounded-[6px] text-[15px] hover:border-[#C5F547] hover:text-[#C5F547] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Right Column: Terminal 'whoami' Card */}
      <div className="bg-[#111413] border border-[#1F2422] rounded-[10px] font-mono text-[13px] overflow-hidden max-w-[520px] w-full justify-self-end">
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 px-3.5 py-3 border-b border-[#1F2422]">
          <span className="w-[9px] h-[9px] rounded-full bg-[#2C3330]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#2C3330]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#2C3330]" />
          <span className="ml-2 text-[#5C635F]">whoami</span>
        </div>

        {/* Profile Card Header */}
        <div className="flex items-center gap-4 px-5 pt-4.5">
          <img
            src="/avatar.jpg"
            alt="Mohammad Ilham bin Kassim"
            className="w-14 h-14 rounded-[8px] object-cover grayscale border border-[#2C3330] bg-[#1F2422]"
          />
          <div>
            <div className="font-sans text-[16px] font-semibold text-[#E6E9E4]">
              Ilham Kassim
            </div>
            <div className="text-[#5C635F] text-[13px] mt-0.5">
              State College, PA · English / Malay
            </div>
          </div>
        </div>

        {/* Spec Grid */}
        <div className="p-5 grid grid-cols-[84px_minmax(0,1fr)] row-gap-2.5 leading-[1.45] text-[13px]">
          <span className="text-[#5C635F]">degree</span>
          <span className="text-[#E6E9E4]">B.S. CompE, Penn State ’26</span>

          <span className="text-[#5C635F]">focus</span>
          <span className="text-[#E6E9E4]">AI tools · systems programming</span>

          <span className="text-[#5C635F]">stack</span>
          <span className="text-[#E6E9E4]">Python, C++, TS, FastAPI, Next.js</span>

          <span className="text-[#5C635F]">also</span>
          <span className="text-[#E6E9E4]">Co-founder, The Borneo (Penn State)</span>

          <span className="text-[#5C635F]">status</span>
          <span className="text-[#C5F547]">open to entry-level / full-time</span>
        </div>
      </div>
    </section>
  )
}
