"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Zap, ArrowLeft } from "lucide-react"
import { Countdown } from "@/components/Countdown"
import { ActionRow } from "@/components/ActionRow"
import { REGISTRATION_OPEN_AT, PRICE_LABEL, SPOTS_LABEL, FORMATTED_OPEN_DATE } from "@/lib/launch"

export default function CountdownPage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const handleRegistrationOpen = () => {
    setIsRegistrationOpen(true)
  }

  const formatOpenTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/breakaway-logo.png" alt="Breakaway Pickleball Camps" className="h-10 w-auto" />
            <div className="font-bold text-xl text-primary">Breakaway Pickleball Camps</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {isRegistrationOpen ? (
              <Button asChild className="bg-primary hover:bg-blue-700 text-white">
                <a href="#register">{PRICE_LABEL}</a>
              </Button>
            ) : (
              <Button asChild className="bg-primary hover:bg-blue-700 text-white">
                <a href="#countdown">Get Notified</a>
              </Button>
            )}
          </nav>
        </div>
      </header>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-primary">
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">{SPOTS_LABEL}</Badge>
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
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-gray-700">Snacks & drinks included</span>
                </div>
              </div>

              <Card className="rounded-2xl border shadow-lg p-6 md:p-7 bg-white" id="countdown">
                <CardContent className="p-0 space-y-6">
                  <Badge className="bg-accent text-accent-foreground">
                    {isRegistrationOpen ? "Open Now" : SPOTS_LABEL}
                  </Badge>

                  <h3 className="text-2xl font-bold text-primary">
                    {isRegistrationOpen ? "Registration is Open!" : "Registration opens in"}
                  </h3>

                  {!isRegistrationOpen && (
                    <>
                      <Countdown target={REGISTRATION_OPEN_AT} onOpen={handleRegistrationOpen}>
                        <div className="text-center space-y-4">
                          <div className="text-2xl font-bold text-accent">Registration is now open!</div>
                          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
                            <a href="#register">{PRICE_LABEL}</a>
                          </Button>
                        </div>
                      </Countdown>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Opens at {formatOpenTime(REGISTRATION_OPEN_AT)} on {FORMATTED_OPEN_DATE}
                        </p>
                      </div>

                      <ActionRow />

                      <p className="text-sm opacity-70 text-center">
                        First come, first serve. Expected to sell out fast.
                      </p>
                    </>
                  )}

                  {isRegistrationOpen && (
                    <div className="text-center space-y-4">
                      <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
                        <a href="#register">{PRICE_LABEL}</a>
                      </Button>
                      <p className="text-sm opacity-70">First come, first serve. Expected to sell out fast.</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <a href="/#program">See the Program</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/hero-action.jpg"
                alt="Pickleball player in action reaching for a low ball with spectators behind fence"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {isRegistrationOpen && (
        <section id="register" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Ready to Level Up?</h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-700 text-white text-xl px-12 py-6"
              onClick={() => window.open("https://your-checkout-or-typeform.com", "_blank")}
            >
              {PRICE_LABEL}
            </Button>
            <p className="mt-6 text-gray-600">
              Questions? Email{" "}
              <a href="mailto:info@yourdomain.com" className="text-primary hover:text-accent hover:underline">
                info@yourdomain.com
              </a>
            </p>
          </div>
        </section>
      )}

      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto text-center">
          <div className="space-y-0">
            <div className="flex justify-center">
              <img src="/breakaway-logo-horizontal.png" alt="Breakaway Pickleball Camps" className="h-40 w-auto" />
            </div>
            <p className="text-gray-600 mt-4">Find Your Next Level.</p>
            <p className="text-sm text-gray-500 mt-2">
              All sales subject to terms. &copy; 2026 Breakaway Pickleball Camps
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button
          className="w-full bg-primary hover:bg-blue-700 text-white shadow-lg"
          size="lg"
          onClick={() => {
            if (isRegistrationOpen) {
              window.open("https://your-checkout-or-typeform.com", "_blank")
            } else {
              document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          {isRegistrationOpen ? PRICE_LABEL : "Get Notified"}
        </Button>
      </div>
    </div>
  )
}
