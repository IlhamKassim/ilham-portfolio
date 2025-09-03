'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import Section from './Section'
import { profile } from '@/lib/data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      description: 'Call or text me'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: '#',
      description: 'Based in State College, PA'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      description: 'Professional networking'
    }
  ]

  return (
    <Section 
      id="contact" 
      title="Get In Touch"
      intro="Open to internships and entry-level roles (Summer 2026), collaborations, and conversation."
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {method.description}
                      </p>
                      {method.href !== '#' ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                          className="w-full"
                        >
                          <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {method.value}
                          </a>
                        </Button>
                      ) : (
                        <p className="text-foreground font-medium">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities, collaborations, and meaningful conversations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={`mailto:${profile.email}?subject=Let's Connect`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
