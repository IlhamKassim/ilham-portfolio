'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Mohammad Ilham bin Kassim. All
              rights reserved.
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
