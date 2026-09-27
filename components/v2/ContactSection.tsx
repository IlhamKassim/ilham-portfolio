'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ilhamkassim2003@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Fallback
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <footer
      id="contact"
      className="scroll-mt-16 mx-[clamp(20px,4vw,48px)] my-[clamp(40px,5vw,64px)] bg-[#111413] border border-[#1F2422] rounded-[10px] p-[clamp(24px,4vw,44px)] font-mono"
    >
      {/* Shell prompt command */}
      <div className="text-sm text-[#5C635F] break-all">
        $ ./contact --role=entry-level --focus=ai,systems
      </div>

      {/* Email Link and Copy Button */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-4.5">
        <div className="flex items-center gap-1.5 text-[clamp(22px,4vw,44px)] tracking-[-0.02em] min-w-0 break-all">
          <a
            href="mailto:ilhamkassim2003@gmail.com"
            className="text-[#C5F547] hover:underline"
          >
            ilhamkassim2003@gmail.com
          </a>
          <span
            className="inline-block w-[0.45em] h-[0.9em] bg-[#C5F547] animate-blink"
            aria-hidden="true"
          />
        </div>

        <button
          onClick={copyEmail}
          className={`cursor-pointer font-mono text-[13px] px-3.5 py-2.5 rounded-[6px] border transition-colors ${
            copied
              ? 'border-[#C5F547] text-[#C5F547] bg-[#C5F547]/10'
              : 'border-[#2C3330] bg-transparent text-[#E6E9E4] hover:border-[#C5F547]'
          }`}
        >
          {copied ? 'copied ✓' : 'copy'}
        </button>
      </div>

      {/* Direct human message */}
      <p className="mt-5 font-sans text-[15px] leading-[1.55] text-[#8A918C] max-w-[620px]">
        I’m open to full-time and entry-level engineering roles starting mid-2026.
        Whether you’re hiring for systems or AI teams, want to talk through any of my projects,
        or just want to say hi, feel free to reach out.
      </p>

      {/* Bottom links and copyright */}
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-7 pt-5 border-t border-[#1F2422] text-[13px] text-[#8A918C]">
        <a
          href="https://www.linkedin.com/in/ilhamkassim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#C5F547] transition-colors"
        >
          linkedin/ilhamkassim ↗
        </a>
        <a
          href="https://github.com/IlhamKassim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#C5F547] transition-colors"
        >
          github/IlhamKassim ↗
        </a>
        <span>+60 17-528 4805</span>
        <span>State College, PA</span>
        <span className="sm:ml-auto text-[#5C635F]">
          © {new Date().getFullYear()} Mohammad Ilham bin Kassim
        </span>
      </div>
    </footer>
  )
}
