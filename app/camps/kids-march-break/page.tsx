"use client"

import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Video, Clock, UtensilsCrossed, Award, Camera, Shield } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function KidsMarchBreakCamp() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const camp = {
    title: "Kids March Break Camp",
    subtitle: "2-Day Youth Training • Ages 8–14",
    location: "Toronto",
    coach: "Joey Manchurek & Team",
    date: "Mar 16-17, 2026",
    price: "$900 CAD",
    spotsLeft: 16,
    venue: "The Jar PickleBall Club",
    coachBio:
      "Led by Joey Manchurek and our certified youth coaches, this camp provides a structured, fun environment for kids to learn pickleball fundamentals and develop their skills through games and friendly competition.",
    image: "/kids-pickleball-training.jpg",
    coachImage: "/coach-joey.jpg",
    venueImages: ["/jar3.png", "/jar4.png", "/jar1.png", "/jar2.png"],
    curriculum: [
      {
        day: "Day 1",
        sessions: [
          { time: "9:00 AM", activity: "Fun Warm-up & Assessment" },
          { time: "10:00 AM", activity: "Pickleball Basics (Grip, Contact Point, Footwork)" },
          { time: "12:00 PM", activity: "Lunch Break" },
          { time: "1:00 PM", activity: "Rallying, Dinks & Mini-Games" },
          { time: "3:00 PM", activity: "Friendly Matches + Skills Challenges" },
        ],
      },
      {
        day: "Day 2",
        sessions: [
          { time: "9:00 AM", activity: "Dynamic Warm-up" },
          { time: "10:00 AM", activity: "Serving, Returns & Target Drills" },
          { time: "12:00 PM", activity: "Lunch Break" },
          { time: "1:00 PM", activity: "Match Play + Partner Play" },
          { time: "3:00 PM", activity: "Tournament Games + Awards" },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0">
          <Image
            src="/kids-pickleball-training.jpg"
            alt="Kids playing pickleball"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Ages 8-14</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{camp.title}</h1>
            <p className="text-xl text-white/90">{camp.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* The Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">2-Day Curriculum</h2>
              <div className="space-y-6">
                {camp.curriculum.map((day, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{day.day}</h3>
                    <div className="space-y-4">
                      {day.sessions.map((session, sessionIdx) => (
                        <div key={sessionIdx} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-accent/20 rounded-full p-2">
                              <Clock className="h-5 w-5 text-accent-foreground" />
                            </div>
                          </div>
                          <div className="flex-1 border-l-2 border-muted pl-4 pb-4">
                            <div className="font-semibold text-primary">{session.time}</div>
                            <div className="text-muted-foreground">{session.activity}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* What Parents Get */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">What Parents Get</h2>
              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Structured Program</div>
                      <div className="text-sm text-muted-foreground">
                        Led by certified pickleball coaches with youth training experience
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Safe Environment</div>
                      <div className="text-sm text-muted-foreground">
                        Fully supervised facility with 1:8 coach-to-student ratio
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Camera className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Photos & Videos</div>
                      <div className="text-sm text-muted-foreground">
                        Professional highlights of your child's progress and tournament play
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Video className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Progress Notes</div>
                      <div className="text-sm text-muted-foreground">
                        Daily feedback and end-of-camp skills summary for each child
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Meet Your Coaches */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Your Coaches</h2>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative h-48 w-48 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={camp.coachImage || "/placeholder.svg"} alt={camp.coach} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{camp.coach}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{camp.coachBio}</p>
                  </div>
                </div>
              </Card>
            </section>

            {/* The Venue */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">The Venue</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {camp.venueImages.map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Venue photo ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{camp.venue}</span>
              </div>
            </section>
          </div>

          {/* Booking Widget - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className={`${isSticky ? "fixed top-24 w-80" : ""}`}>
              <Card className="p-6 border-2 border-primary/20">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">{camp.price}</div>
                    <div className="text-sm text-muted-foreground">Per child</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{camp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{camp.venue}</span>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-800">Only {camp.spotsLeft} spots</p>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                    Book Now
                  </Button>

                  <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="h-4 w-4" />
                      <span>Lunch & snacks included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      <span>Video & photo highlights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Kids ages 8–14</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Safe supervised environment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>1 coach : 8 kids ratio</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-lg z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-bold text-primary">{camp.price}</div>
            <div className="text-xs text-muted-foreground">Only {camp.spotsLeft} spots</div>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">Book Now</Button>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden behind mobile sticky bar */}
      <div className="lg:hidden h-20" />

      <Footer />
    </div>
  )
}
