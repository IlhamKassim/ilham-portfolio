import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import JourneyTimeline from '@/components/JourneyTimeline'

export const metadata: Metadata = {
  title: 'My Journey',
  description: 'How I got from Papar, Malaysia to Penn State University.',
}

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16 pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold">My Journey</h1>
          <p className="mb-12 text-muted-foreground">
            From Papar to Penn State.
          </p>

          <JourneyTimeline />

          <div className="mt-16">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
