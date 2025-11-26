import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-[#E5E7EB] relative">
      {/* Angled top edge (hero continuation) */}

      <div className="relative max-w-4xl mx-auto px-6 py-12 text-center text-[#111827]/70">
        {/* Mini Nav */}
        <nav className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-3 text-sm font-medium">
          <Link href="/camps" className="hover:text-[#00205B] transition-colors">
            Camps
          </Link>
          <Link href="/coaches" className="hover:text-[#00205B] transition-colors">
            Coaches
          </Link>
          <Link href="/experience" className="hover:text-[#00205B] transition-colors">
            The Experience
          </Link>
          <Link href="/schedule" className="hover:text-[#00205B] transition-colors">
            Schedule
          </Link>
          <Link href="/camps" className="hover:text-[#00205B] transition-colors">
            Find Your Camp
          </Link>
        </nav>

        {/* Contact */}
        <p className="mt-6 text-sm">Contact: breakawaypickleball@gmail.com</p>

        {/* Copyright */}
        <p className="mt-3 text-xs">© 2025 Breakaway Pickleball Camps. All rights reserved.</p>
      </div>
    </footer>
  )
}
