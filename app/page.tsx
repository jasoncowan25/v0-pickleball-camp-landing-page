import { redirect } from 'next/navigation'

export const metadata = {
  alternates: {
    canonical: "https://www.breakawaycamps.ca/",
  },
}

export default function HomePage() {
  redirect("/2-day-jan-2026")
}
