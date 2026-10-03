import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume',
  description: "Download Mohammad Ilham bin Kassim's resume in PDF format.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16 pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-bold">Resume</h1>
          <p className="mb-8 text-muted-foreground">
            Download my resume in PDF format to learn more about my experience
            and qualifications.
          </p>

          <div className="space-y-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="/Ilham_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume (PDF)
              </a>
            </Button>

            <div className="pt-4">
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
    </div>
  )
}
