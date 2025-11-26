import { Navigation } from "@/components/Navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Footer } from "@/components/Footer"

export default function ExperiencePage() {
  const features = [
    "Small group sizes (max 12 players per coach)",
    "Video analysis of your gameplay",
    "Personalized skill assessments",
    "Professional-grade facilities",
    "All equipment provided",
    "Post-camp support and resources",
  ]

  const schedule = [
    { time: "8:00 AM", activity: "Check-in & Coffee" },
    { time: "8:30 AM", activity: "Warm-up & Fundamentals Review" },
    { time: "10:00 AM", activity: "Skill Development Drills" },
    { time: "12:00 PM", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "Strategic Play & Game Situations" },
    { time: "3:00 PM", activity: "Live Play & Video Analysis" },
    { time: "5:00 PM", activity: "Q&A and Wrap-up" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Breakaway Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immersive training designed to transform your game in just days
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-16">
          <Image
            src="/One-Health-Clubs-Bayview-Village-pickleball-courts.jpg"
            alt="Breakaway Camp Experience"
            fill
            className="object-cover"
          />
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Schedule */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Typical Day Schedule</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div key={item.time} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                    <span className="font-semibold text-primary min-w-24">{item.time}</span>
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
