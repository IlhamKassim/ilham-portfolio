'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

function ProjectLink({
  link,
  title,
}: {
  link: string
  title: string
}) {
  if (link === '#') return null
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-colors hover:text-primary"
      aria-label={`View ${title} project`}
    >
      {link.includes('github.com') ? (
        <Github className="h-5 w-5" />
      ) : (
        <ExternalLink className="h-5 w-5" />
      )}
    </a>
  )
}

function TechTags({ tech }: { tech?: string[] }) {
  if (!tech || tech.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span
          key={i}
          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featured = profile.projects.filter((p) => p.featured)
  const rest = profile.projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Some of my recent work and side projects"
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {featured.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              {project.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <ProjectLink link={project.link} title={project.title} />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <TechTags tech={project.tech} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            More Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="group h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg transition-colors group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <ProjectLink link={project.link} title={project.title} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <TechTags tech={project.tech} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
