"use client"

import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Video, Award, Clock } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Footer } from "@/components/Footer"

export default function CampDetailPage({ params }: { params: { id: string } }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mock data - in real app this would come from database
  const camp = {
    title: "Intermediate Intensive",
    location: "Toronto",
    coach: "Joey Manchurek",
    date: "Jan 10-11, 2026",
    price: "$800 CAD",
    spotsLeft: 4,
    venue: "The Jar PickleBall Club",
    dupr: "5.0",
    coachBio:
      "Joey Manchurek is a certified professional pickleball coach with over 10 years of experience. He specializes in helping intermediate players break through to advanced levels through technical refinement and strategic gameplay.",
    image: "/joey-teaching.jpg",
    coachImage: "/coach-joey.jpg",
    venueImages: ["/jar3.png", "/jar4.png", "/jar1.png", "/jar2.png"],
    curriculum: [
      {
        day: "Day 1",
        sessions: [
          { time: "9:00 AM", activity: "Warm-up & Assessment" },
          { time: "10:00 AM", activity: "Dinking Mechanics & Soft Game" },
          { time: "12:00 PM", activity: "Lunch Break" },
          { time: "1:00 PM", activity: "Third Shot Strategies" },
          { time: "3:00 PM", activity: "Match Play & Video Analysis" },
        ],
      },
      {
        day: "Day 2",
        sessions: [
          { time: "9:00 AM", activity: "Dynamic Warm-up" },
          { time: "10:00 AM", activity: "Transition Zone Play" },
          { time: "12:00 PM", activity: "Lunch Break" },
          { time: "1:00 PM", activity: "Advanced Serves & Returns" },
          { time: "3:00 PM", activity: "Tournament Simulation" },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-top"
          poster={camp.image}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Breakaway-vid-notext-trimmed-mnikhpHhgezceXOAuZhTK4XewSNgi9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {camp.title} - {camp.location}
            </h1>
            <p className="text-xl text-white/90">Hosted by Coach {camp.coach}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* The Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">The Curriculum</h2>
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

            {/* Meet Your Pro */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet Your Pro</h2>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative h-48 w-48 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={camp.coachImage || "/placeholder.svg"} alt={camp.coach} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{camp.coach}</h3>
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        DUPR {camp.dupr}
                      </Badge>
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
                    <div className="text-sm text-muted-foreground">Per person</div>
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
                    <p className="text-sm font-semibold text-red-800">Only {camp.spotsLeft} spots left</p>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                    Book Now
                  </Button>

                  <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Maximum 16 players</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      <span>Video analysis included</span>
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
            <div className="text-xs text-muted-foreground">Only {camp.spotsLeft} spots left</div>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">Book Now</Button>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden behind mobile sticky bar */}
      <div className="lg:hidden h-20" />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
