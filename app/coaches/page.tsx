import { Navigation } from "@/components/Navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/Footer"

export default function CoachesPage() {
  const coaches = [
    {
      name: "Joey Manchurek",
      title: "Founder & Lead Coach",
      image: "/coach-joey.jpg",
      bio: "Professional pickleball coach with over 10 years of experience coaching players from beginners to pros. Specializes in strategic play and mental game development.",
      credentials: ["IPTPA Certified", "Former Pro Tour Player", "5.0 Rated"],
      signature: true,
    },
    {
      name: "Sarah Chen",
      title: "Advanced Skills Coach",
      image: "/professional-female-pickleball-coach.jpg",
      bio: "Expert in advanced techniques and competitive play. Sarah has coached numerous national champions and brings a data-driven approach to skill development.",
      credentials: ["PPR Certified", "National Champion", "4.5+ Specialist"],
      signature: false,
    },
    {
      name: "James Taylor",
      title: "Performance Coach",
      image: "/male-pickleball-coach-training.jpg",
      bio: "Focuses on athletic performance and injury prevention. James combines sports science with practical pickleball training to optimize player development.",
      credentials: ["Sports Science Degree", "USAPA Ambassador", "Fitness Specialist"],
      signature: false,
    },
    {
      name: "Lisa Park",
      title: "Beginner & Intermediate Coach",
      image: "/friendly-female-pickleball-instructor.jpg",
      bio: "Passionate about introducing new players to pickleball. Lisa creates welcoming learning environments and builds strong fundamentals from day one.",
      credentials: ["IPTPA Certified", "Community Leader", "Teaching Excellence Award"],
      signature: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Coaches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from certified professionals who are passionate about elevating your game
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <Card key={coach.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    fill
                    className={coach.name === "Joey Manchurek" ? "object-cover object-top" : "object-cover"}
                  />
                  {coach.signature && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Signature Coach</Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">{coach.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{coach.title}</p>
                  <p className="text-foreground mb-4">{coach.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {coach.credentials.map((credential) => (
                      <Badge key={credential} variant="outline">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
