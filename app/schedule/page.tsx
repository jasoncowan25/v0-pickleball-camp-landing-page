import { Navigation } from "@/components/Navigation"
import { CampCard } from "@/components/CampCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/Footer"

export default function SchedulePage() {
  const campsByLocation = {
    toronto: [
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
        id: "toronto-beginner-feb",
        title: "Toronto Beginner Fundamentals",
        date: "Feb 5-6, 2026",
        location: "The Jar PickleBall Club",
        price: "$600 CAD",
        image: "/beginner-pickleball-lesson-group.jpg",
        coach: "Lisa Park",
      },
    ],
    muskoka: [
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
        id: "muskoka-advanced",
        title: "Muskoka Advanced Training",
        date: "Aug 10-12, 2026",
        location: "Muskoka Performance Center",
        price: "$1,200 CAD",
        image: "/luxury-pickleball-resort-florida-beach.jpg",
        badges: [{ text: "4.0+ Only", variant: "secondary" as const }],
        coach: "James Taylor",
      },
    ],
    saintMartin: [
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
        id: "saint-martin-retreat",
        title: "Saint Martin Ultimate Retreat",
        date: "Apr 12-16, 2026",
        location: "Grand Case Beach Resort",
        price: "$2,500 USD",
        image: "/professional-pickleball-training-facility.jpg",
        badges: [{ text: "Luxury Retreat", variant: "secondary" as const }],
        coach: "Sarah Chen",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Camp Schedule</h1>
          <p className="text-xl text-muted-foreground">Browse camps by location and find your perfect dates</p>
        </div>

        <Tabs defaultValue="toronto" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="toronto">Toronto</TabsTrigger>
            <TabsTrigger value="muskoka">Muskoka</TabsTrigger>
            <TabsTrigger value="saintMartin">Saint Martin</TabsTrigger>
          </TabsList>

          <TabsContent value="toronto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsByLocation.toronto.map((camp) => (
                <CampCard key={camp.id} {...camp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="muskoka">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsByLocation.muskoka.map((camp) => (
                <CampCard key={camp.id} {...camp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saintMartin">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsByLocation.saintMartin.map((camp) => (
                <CampCard key={camp.id} {...camp} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
