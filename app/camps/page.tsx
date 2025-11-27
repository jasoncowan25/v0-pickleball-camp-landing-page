"use client"

import { useState, Suspense } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CampCard } from "@/components/CampCard"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Filter } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

function CampsPageContent() {
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<string[]>([])

  const allCamps = [
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
      location: "Lake Joseph PickleBarn",
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
    {
      id: "toronto-beginner-feb",
      title: "Toronto Beginner Fundamentals",
      date: "Feb 5-6, 2026",
      location: "The Jar PickleBall Club",
      price: "$600 CAD",
      image: "/beginner-pickleball-lesson-group.jpg",
      coach: "Lisa Park",
    },
    {
      id: "muskoka-advanced",
      title: "Muskoka Advanced Training",
      date: "Aug 10-12, 2026",
      location: "Lake Joseph PickleBarn",
      price: "$1,200 CAD",
      image: "/luxury-pickleball-resort-florida-beach.jpg",
      badges: [{ text: "4.0+ Only", variant: "secondary" as const }],
      coach: "James Taylor",
    },
    {
      id: "saint-martin-retreat",
      title: "Saint Martin Ultimate Retreat",
      date: "Apr 12-16, 2026",
      location: "Grand Case Beach Resort",
      price: "$2,500 USD",
      image: "/professional-pickleball-training-facility.jpg",
      badges: [{ text: "Luxury Retreat", variant: "secondary" as const }],
      coach: "Sarah Chen",
    },
  ]

  const toggleSkillLevel = (level: string) => {
    setSelectedSkillLevels((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  const handleApplyFilters = () => {
    setShowFilters(false)
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["locations", "skill", "format"]}>
        <AccordionItem value="locations">
          <AccordionTrigger className="text-sm font-semibold">Locations</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["Toronto", "Muskoka", "Saint Martin"].map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox id={`location-${location}`} />
                  <Label htmlFor={`location-${location}`} className="text-sm cursor-pointer">
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skill">
          <AccordionTrigger className="text-sm font-semibold">Skill Level</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {["3.0", "3.5", "4.0+"].map((level) => (
                <Button
                  key={level}
                  variant={selectedSkillLevels.includes(level) ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => toggleSkillLevel(level)}
                >
                  {level}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="format">
          <AccordionTrigger className="text-sm font-semibold">Format</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["2-Day", "Clinic", "Retreat"].map((format) => (
                <div key={format} className="flex items-center space-x-2">
                  <Checkbox id={`format-${format}`} />
                  <Label htmlFor={`format-${format}`} className="text-sm cursor-pointer">
                    {format}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="coach">
          <AccordionTrigger className="text-sm font-semibold">Coach</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {["Joey Manchurek", "Sarah Chen", "James Taylor", "Lisa Park", "Joey Manchurek & Team"].map((coach) => (
                <div key={coach} className="flex items-center space-x-2">
                  <Checkbox id={`coach-${coach}`} />
                  <Label htmlFor={`coach-${coach}`} className="text-sm cursor-pointer">
                    {coach}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Discover Your Camp</h1>
          <p className="text-muted-foreground">{allCamps.length} camps available across North America</p>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] flex flex-col">
              <SheetHeader>
                <SheetTitle>Filter Camps</SheetTitle>
              </SheetHeader>
              <div className="mt-6 px-4 flex-1 overflow-y-auto">
                <FilterSidebar />
              </div>
              {/* Apply Filters button to mobile sheet */}
              <div className="p-4 border-t bg-background">
                <Button onClick={handleApplyFilters} className="w-full" size="lg">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Camp Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {allCamps.map((camp) => (
                <CampCard key={camp.id} {...camp} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function CampsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CampsPageContent />
    </Suspense>
  )
}
