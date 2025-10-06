"use client"

import type React from "react"
import Head from "next/head"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Calendar, MapPin, Users, Target, Zap, Grid3X3 } from "lucide-react"
import { LAUNCH_CONFIG } from "@/lib/launch"
import { getOpenInfo } from "@/lib/openState"
import dynamic from "next/dynamic"
import CountdownActions from "@/components/CountdownActions"

const CountdownWidget = dynamic(() => import("@/app/components/CountdownWidget"), { ssr: false })

export default function TwoDayJan2026Page() {
  const [isWaitlist, setIsWaitlist] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [emailStatus, setEmailStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { openAtIso, isOpen } = useMemo(() => getOpenInfo(), [])

  const handleReservation = () => {
    if (isWaitlist) {
      console.log("Waitlist signup:", { name, email })
      alert("Thanks! You've been added to the waitlist.")
    } else {
      window.open("https://buy.stripe.com/6oUdR85YJbcc0G8cef57W00", "_blank", "noopener,noreferrer")
    }
  }

  const scrollToCountdown = () => {
    const countdownElement = document.getElementById("countdown-section")
    if (countdownElement) {
      countdownElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedEmail = emailInput.trim().toLowerCase()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(trimmedEmail)) {
      setEmailStatus("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)
    setEmailStatus("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Failed")
      }

      setEmailInput("")
      setEmailStatus("Thanks! We'll notify you when registration opens.")
    } catch (error) {
      setEmailStatus("Hmm, that didn't go through. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Toronto Pickleball Camp – 2-Day Intermediate Clinic (Jan 2026)</title>
        <meta
          name="description"
          content="Join our 2-day pickleball camp in Toronto this January 2026! Perfect for intermediate 3.0–3.5 players, with an experienced coach, indoor courts, and limited spots for personalized training."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.breakawaycamps.ca/2-day-jan-2026" />
      </Head>

      <div className="min-h-screen bg-white">
        <CountdownWidget />

        <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src="/breakaway-logo.png" alt="Breakaway Pickleball Camps" className="h-10 w-auto" />
              <div className="brand-text text-xl text-primary">Breakaway Pickleball Camps</div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#program"
                onClick={(e) => handleSmoothScroll(e, "program")}
                className="text-primary hover:text-accent transition-colors"
              >
                Program
              </a>
              <a
                href="#schedule"
                onClick={(e) => handleSmoothScroll(e, "schedule")}
                className="text-primary hover:text-accent transition-colors"
              >
                Schedule
              </a>
              <a
                href="#coach"
                onClick={(e) => handleSmoothScroll(e, "coach")}
                className="text-primary hover:text-accent transition-colors"
              >
                Coach
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="text-primary hover:text-accent transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-primary hover:text-accent transition-colors"
              >
                FAQ
              </a>
              {isOpen ? (
                <Button asChild className="bg-primary hover:bg-blue-700 text-white">
                  <a href="#register" onClick={(e) => handleSmoothScroll(e, "register")}>
                    Reserve Your Spot
                  </a>
                </Button>
              ) : (
                <Button onClick={scrollToCountdown} className="bg-primary hover:bg-blue-700 text-white">
                  Countdown to Register
                </Button>
              )}
            </nav>
          </div>
        </header>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-accent text-accent-foreground">Only 16 spots</Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold text-primary text-balance">
                    16 Players. 2 Days. Big Results.
                  </h1>
                  <p className="text-xl text-gray-600">Intermediate Camp (3.0–3.5) • Toronto • Jan 9–10, 2026</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-700">Pro-led training at a professional facility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="text-gray-700">Small group, only 16 spots</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Grid3X3 className="h-5 w-5 text-accent" />
                    <span className="text-gray-700">4 courts, everyone on-court the whole time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="text-gray-700">Catered lunch included</span>
                  </div>
                </div>

                {isOpen ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={handleReservation}
                      className="bg-primary hover:bg-blue-700 text-white text-lg px-8"
                    >
                      Reserve Your Spot — $800 CAD
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      <a href="#program">See the Program</a>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4" id="countdown-section">
                    <Card className="bg-white border-gray-200 p-6">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-primary">Registration opens in</h3>
                          <div id="cd-wrapper" className="grid grid-cols-4 gap-4 text-center">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div id="cd-days" className="text-3xl font-bold text-primary">
                                --
                              </div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">DAYS</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div id="cd-hours" className="text-3xl font-bold text-primary">
                                --
                              </div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">HOURS</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div id="cd-minutes" className="text-3xl font-bold text-primary">
                                --
                              </div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">MINUTES</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div id="cd-seconds" className="text-3xl font-bold text-primary">
                                --
                              </div>
                              <div className="text-sm text-gray-600 uppercase tracking-wide">SECONDS</div>
                            </div>
                          </div>
                          <p id="cd-open-label" className="text-gray-600">
                            Opens at {LAUNCH_CONFIG.localTime} on {LAUNCH_CONFIG.formattedDate}
                          </p>
                          <CountdownActions />
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joey-breakaway-hero-uv5yOyM9Nvo8BWVl5lWtFspqmdyYn2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-auto object-cover"
                  poster="/images/joey-video-poster.jpg"
                />
                <div className="absolute bottom-2 left-2 bg-gray-900/50 text-white text-xs px-2 py-1 rounded">
                  Coach Joey leading a training session.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-primary">Camp Focus</h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Net Game & Dinking</h3>
                      <p className="text-gray-600">Dominate the net and move the ball effectively.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">3rd Shots & Transition Zone</h3>
                      <p className="text-gray-600">
                        Master drop shots, drives, and seamless transitions from baseline to net.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Defensive Strategies</h3>
                      <p className="text-gray-600">Slow down hard hitters and manage powerful shots.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Attacking at the Net</h3>
                      <p className="text-gray-600">Refine volleying and finishing techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Baseline Play</h3>
                      <p className="text-gray-600">Enhance consistency and shot selection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Serve & Return</h3>
                      <p className="text-gray-600">Use these as weapons to control the game.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lobs</h3>
                      <p className="text-gray-600">Know when to lob and how to defend against them.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Court Positioning</h3>
                      <p className="text-gray-600">Leverage smart positioning to gain a point-by-point advantage.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <img
                  src="/joey-coaching-v2.jpg"
                  alt="Coach demonstrating pickleball drills to intermediate 3.0–3.5 players"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <p className="text-center text-gray-600">Coach Joey at a pro facility in Toronto</p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <Card className="bg-white border-gray-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-3xl text-primary">2 Full Training Days</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="text-xl font-semibold text-gray-900">Day 1 & Day 2 — 9:00 AM – 5:00 PM</div>
                <p className="text-gray-600">On-court training with a 1-hour lunch break.</p>
                <p className="text-sm text-gray-500">Note: Confirm specifics with Camp Director after registration.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="coach" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="flex justify-center">
                    <img
                      src="/coach-joey.jpg"
                      alt="Joey Manchurek, professional pickleball coach and former hockey player, holding trophy and paddle"
                      className="w-48 h-48 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <h2 className="text-3xl font-bold text-primary">Joey Manchurek - Experienced Pickleball Coach</h2>
                    <div className="space-y-3 text-gray-600">
                      <p>Former pro hockey player (OHL Oshawa Generals Captain; later ECHL).</p>
                      <p>Grew up playing tennis & table tennis; transitioned quickly to competitive pickleball.</p>
                      <p>
                        Actively competes in tournaments; coaching focus on leadership, skill development, and helping
                        players reach potential.
                      </p>
                      <p>Rating: 5.0 DUPR.</p>
                    </div>
                    <blockquote className="text-xl font-semibold text-gray-900 border-l-4 border-accent pl-4">
                      "My goal is to give you the tools and confidence to win more matches."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <Card className="bg-white border-2 border-accent">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Camp Investment</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  $800 CAD (no tax) — 2 days, pro instruction, lunch included.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">Only 16 spots</Badge>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-blue-700 text-white text-xl py-6"
                  onClick={handleReservation}
                  disabled={!isOpen}
                >
                  {isOpen ? (isWaitlist ? "Join Waitlist" : "Reserve Your Spot") : "Registration Opens Soon"}
                </Button>
                <p className="text-sm text-gray-500">Secure checkout. No hidden fees.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-gray-200 text-center">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro-quality indoor courts</h3>
                  <p className="text-gray-600">Professional facility with optimal playing conditions</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Small groups for more reps</h3>
                  <p className="text-gray-600">Maximum 16 players for personalized attention</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy + skills for intermediates</h3>
                  <p className="text-gray-600">Tailored training for 3.0-3.5 rated players</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-0">
                <img
                  src="/hero-action.jpg"
                  alt="Wide on-court rally shot inside professional pickleball facility in Toronto"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="who" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">Who is this for?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intermediate players rated 3.0–3.5 looking to level up with pro coaching.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">How much is it?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  The camp fee is $800 CAD with no tax. That's $800 total per player for the full 2-day camp, including
                  professional coaching, lunch, and court time. Filtered water is available throughout the day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="included" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">What's included?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  2 full days of pro-led training, catered lunch, and unlimited filtered water.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="location" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">Where is it?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Professional indoor facility in Toronto (exact address provided after registration).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bring" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">What should I bring?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Paddle, court shoes, water bottle. We'll provide lunch and filtered water is available.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="waitlist" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-gray-900">Is there a waitlist?</AccordionTrigger>
                <AccordionContent className="text-gray-600 min-h-[60px] pb-4">
                  If sold out, we'll show a waitlist form instead of the payment button.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="register" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Ready to Level Up?</h2>

            {isWaitlist ? (
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Join the Waitlist</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-900">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white border-gray-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-900">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white border-gray-200"
                      />
                    </div>
                    <Button
                      onClick={handleReservation}
                      className="w-full bg-primary hover:bg-blue-700 text-white"
                      size="lg"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Button
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white text-xl px-12 py-6"
                onClick={handleReservation}
                disabled={!isOpen}
              >
                {isOpen ? "Reserve Your Spot — $800 CAD" : "Registration Opens Soon"}
              </Button>
            )}

            <p className="mt-6 text-gray-600">
              Questions? Email{" "}
              <a href="mailto:breakawaypickleball@gmail.com" className="text-primary hover:text-accent hover:underline">
                breakawaypickleball@gmail.com
              </a>
            </p>
          </div>
        </section>

        <footer className="py-12 px-4 bg-white border-t border-gray-200">
          <div className="container mx-auto text-center">
            <div className="space-y-0">
              <div className="flex justify-center">
                <img src="/breakaway-logo-horizontal.png" alt="Breakaway Pickleball Camps" className="h-40 w-auto" />
              </div>
              <p className="text-gray-600 mt-4">Find Your Next Level.</p>
              <p className="text-sm text-gray-500 mt-2">
                All sales subject to terms. © 2026 Breakaway Pickleball Camps
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
          <Button
            className="w-full bg-primary hover:bg-blue-700 text-white shadow-lg"
            size="lg"
            onClick={isOpen ? handleReservation : scrollToCountdown}
            disabled={!isOpen && false}
          >
            {isOpen ? "Reserve Your Spot — $800 CAD" : "Countdown to Register"}
          </Button>
        </div>
      </div>
    </>
  )
}
