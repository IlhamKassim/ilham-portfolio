'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Download, Github } from 'lucide-react'
import { profile } from '@/lib/data'
import { useScrollReveal, reveal } from '@/lib/scroll-reveal'

export default function Hero() {
  const { ref, isInView, reducedMotion } = useScrollReveal()

  return (
    <section
      id="hero"
      ref={ref}
      className="flex min-h-screen items-center justify-center pb-16 pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          {...reveal(isInView, { distance: 30, duration: 0.8 }, reducedMotion)}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Profile Image */}
          <motion.div
            {...reveal(
              isInView,
              { direction: 'scale', distance: 0.8, duration: 0.8, delay: 0.2 },
              reducedMotion
            )}
            className="mb-8"
          >
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src={profile.avatar ?? '/avatar.jpg'}
                alt="Mohammad Ilham bin Kassim"
                width={640}
                height={640}
                className="rounded-full border border-border object-cover shadow"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Role */}
          <motion.h1
            {...reveal(isInView, { duration: 0.8, delay: 0.4 }, reducedMotion)}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...reveal(isInView, { duration: 0.8, delay: 0.6 }, reducedMotion)}
            className="mb-6 text-xl text-muted-foreground md:text-2xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            {...reveal(isInView, { duration: 0.8, delay: 0.8 }, reducedMotion)}
            className="mx-auto mb-6 max-w-3xl text-lg text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          {/* Open to section */}
          {profile.openTo && (
            <motion.div
              {...reveal(isInView, { duration: 0.8, delay: 1.0 }, reducedMotion)}
              className="mx-auto mb-12 max-w-2xl"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Open to:</span>{' '}
                {profile.openTo.join(' • ')}
              </p>
            </motion.div>
          )}

          {/* Contact Info */}
          <motion.div
            {...reveal(isInView, { duration: 0.8, delay: 1.0 }, reducedMotion)}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{profile.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{profile.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{profile.location}</span>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...reveal(isInView, { duration: 0.8, delay: 1.2 }, reducedMotion)}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="flex items-center space-x-2" asChild>
              <a href="/Ilham_Resume.pdf" download>
                <Download className="h-4 w-4" />
                <span>Download Résumé</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2"
              asChild
            >
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2"
              asChild
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>View GitHub</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
