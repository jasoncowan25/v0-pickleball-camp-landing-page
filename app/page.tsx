import { Navigation } from "@/components/Navigation"
import { CampFinder } from "@/components/CampFinder"
import { ValueProps } from "@/components/ValueProps"
import { CampCard } from "@/components/CampCard"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredCamps = [
    {
      id: "toronto-intermediate-jan",
      title: "Toronto Intermediate Intensive",
      date: "Jan 10-11, 2026",
      location: "The Jar PickleBall Club",
      price: "$800 CAD",
      image: "/joey_coaching_jar.jpg",
      badges: [
        { text: "Selling Fast", variant: "destructive" as const },
        { text: "Joey Manchurek Signature", variant: "secondary" as const },
      ],
      coach: "Joey Manchurek",
    },
    {
      id: "kids-march-break",
      title: "Kids March Break Camp",
      date: "Mar 16-17, 2026",
      location: "The Jar PickleBall Club",
      price: "$900 CAD",
      image: "/kids-pickleball-training.jpg",
      badges: [
        { text: "New", variant: "default" as const },
        { text: "Joey Manchurek Signature", variant: "secondary" as const },
      ],
      coach: "Joey Manchurek & Team",
    },
    {
      id: "muskoka-retreat",
      title: "Muskoka Summer Retreat",
      date: "Jul 15-19, 2026",
      location: "Muskoka Lakes Resort",
      price: "$2,200 CAD",
      image: "/outdoor-pickleball-courts-in-florida-sunshine.jpg",
      badges: [{ text: "Retreat", variant: "secondary" as const }],
      coach: "Multiple Coaches",
    },
    {
      id: "saint-martin-clinic",
      title: "Saint Martin Paradise Clinic",
      date: "Mar 20-24, 2026",
      location: "Saint Martin Beach Club",
      price: "$1,850 USD",
      image: "/desert-pickleball-facility-arizona.jpg",
      coach: "Joey Manchurek",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[#1a2847]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Breakaway-vid-notext-trimmed-mnikhpHhgezceXOAuZhTK4XewSNgi9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Elevate Your Game</h1>
            <p className="text-xl text-white/90 mb-8">Pro-level training camps across North America</p>
          </div>

          {/* Camp Finder Widget */}
          <CampFinder />
        </div>
      </section>

      {/* Value Props */}
      <ValueProps />

      {/* Featured Camps Carousel */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">Upcoming Signature Camps</h2>
            <Button asChild variant="ghost" className="text-primary hover:text-accent">
              <Link href="/camps">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCamps.map((camp) => (
              <CampCard key={camp.id} {...camp} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
