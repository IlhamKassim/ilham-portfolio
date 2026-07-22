'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollReveal, reveal } from '@/lib/scroll-reveal'

interface JourneyChapter {
  place: string
  years: string
  image: string
  caption: string
  text: string
}

const chapters: JourneyChapter[] = [
  {
    place: 'Papar',
    years: 'Childhood',
    image: 'https://loremflickr.com/700/500/kampung,tropical',
    caption: 'Placeholder photo, swap for a real one from Papar',
    text: 'I grew up in Papar and went to SK St. Joseph for primary school. Both of my parents are teachers. Getting an education was never really optional in my house. It was just what we did.',
  },
  {
    place: 'MARA Junior Science College',
    years: '2016 – 2021',
    image: 'https://loremflickr.com/700/500/boardingschool,dormitory',
    caption: 'Placeholder photo, swap for a real one from MRSM',
    text: "I ended up at MARA Junior Science College mostly because my brother went there first, and I'd always looked up to him. Day to day, it was a pretty normal boarding school experience. I didn't even know it came with the MARA YTP scholarship until after I was already in, which sounds strange looking back. I was an introverted kid. Information like that just didn't reach me.",
  },
  {
    place: 'INTEC, and the move to the US',
    years: '2021 – 2022',
    image: 'https://loremflickr.com/700/500/airport,terminal',
    caption: 'Placeholder photo, swap for a real one from this move',
    text: "The move to the US, through INTEC's American Degree Transfer Program, wasn't really a choice between a dozen options. It was what the scholarship offered, and I took it. But I'd also always wanted to get away from home, just to see what that felt like. The idea of being somewhere overseas kept me up some nights before I left. I'd never actually traveled outside Malaysia before that. Not even to Singapore, which is right there. Penn State wasn't a small step for me. It was the first time I'd left the country at all.",
  },
  {
    place: 'Penn State',
    years: '2022 – 2026',
    image: 'https://loremflickr.com/700/500/university,campus',
    caption: 'Placeholder photo, swap for a real one from Penn State',
    text: "I picked Computer Engineering partly because my sister is a software engineer and I've always looked up to her too. And partly because I really like playing games. I'll admit the second reason doesn't actually connect to the major in any real way. I just liked games, and computer engineering sounded close enough.",
  },
  {
    place: 'Why leadership, why building',
    years: 'Throughline',
    image: 'https://loremflickr.com/700/500/leadership,teamwork',
    caption: 'Placeholder photo, swap for a real one of your own',
    text: "The leadership side traces back to my brother too. He was head prefect in high school and genuinely good at it, and I think part of me has always wanted to be like him. That's most of why I've taken on the leadership roles I have since, including co-founding The Borneo, a Penn State student organization built around the cultural heritage of Sabah, Sarawak, and Kalimantan. Papar is in Sabah. The building side came later, and separately. I found out I actually like making things, and the honest reason I kept doing it is I want to turn that into a business eventually.",
  },
]

function ChapterBlock({
  chapter,
  index,
}: {
  chapter: JourneyChapter
  index: number
}) {
  const { ref, isInView, reducedMotion } = useScrollReveal()
  const imageFirst = index % 2 === 0

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
    >
      <motion.div
        {...reveal(
          isInView,
          { direction: 'x', distance: imageFirst ? -40 : 40 },
          reducedMotion
        )}
        className={imageFirst ? 'md:order-1' : 'md:order-2'}
      >
        <div className="relative aspect-[7/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={chapter.image}
            alt={chapter.caption}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            unoptimized
          />
        </div>
        <p className="mt-2 text-center text-xs italic text-muted-foreground">
          {chapter.caption}
        </p>
      </motion.div>

      <motion.div
        {...reveal(
          isInView,
          { direction: 'x', distance: imageFirst ? 40 : -40, delay: 0.1 },
          reducedMotion
        )}
        className={imageFirst ? 'md:order-2' : 'md:order-1'}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {chapter.years}
        </p>
        <h2 className="mb-3 text-xl font-bold">{chapter.place}</h2>
        <p className="leading-relaxed text-muted-foreground">
          {chapter.text}
        </p>
      </motion.div>
    </div>
  )
}

export default function JourneyTimeline() {
  return (
    <div className="space-y-20">
      {chapters.map((chapter, index) => (
        <ChapterBlock key={chapter.place} chapter={chapter} index={index} />
      ))}
    </div>
  )
}
