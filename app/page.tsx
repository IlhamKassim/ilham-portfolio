import Hero from '@/components/v2/Hero'
import FeaturedBuilds from '@/components/v2/FeaturedBuilds'
import EverythingElse from '@/components/v2/EverythingElse'
import ExperienceSection from '@/components/v2/ExperienceSection'
import StackSection from '@/components/v2/StackSection'
import ContactSection from '@/components/v2/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0C0B]">
      <Hero />
      <FeaturedBuilds />
      <EverythingElse />
      <ExperienceSection />
      <StackSection />
      <ContactSection />
    </div>
  )
}
