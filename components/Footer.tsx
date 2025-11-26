import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E5E7EB]">
      <div className="absolute inset-0 flex">
        {/* Light gray left side */}
        <div className="flex-1 bg-[#F9FAFB]" />
        {/* Navy blue right side */}
        <div className="flex-1 bg-[#00205B]" />
      </div>

      {/* Diagonal split overlay - positioned between Schedule and Find Your Camp */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute h-full w-[200%] bg-[#00205B] origin-top-left"
          style={{
            transform: "rotate(-10deg) translateX(-50%)",
            left: "50%",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Mini Nav */}
        <nav className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-3 text-sm font-medium">
          <Link href="/camps" className="text-[#111827]/70 hover:text-[#00205B] transition-colors">
            Camps
          </Link>
          <Link href="/coaches" className="text-[#111827]/70 hover:text-[#00205B] transition-colors">
            Coaches
          </Link>
          <Link href="/experience" className="text-[#111827]/70 hover:text-[#00205B] transition-colors">
            The Experience
          </Link>
          <Link href="/schedule" className="text-[#111827]/70 hover:text-[#00205B] transition-colors">
            Schedule
          </Link>
          <Link href="/camps" className="text-white/90 hover:text-[#D1E231] transition-colors">
            Find Your Camp
          </Link>
        </nav>

        {/* Contact - mixed colors based on position */}
        <p className="mt-6 text-sm">
          <span className="text-[#111827]/70">Contact: </span>
          <span className="text-white/90">breakawaypickleball@gmail.com</span>
        </p>

        {/* Copyright - mixed colors */}
        <p className="mt-3 text-xs">
          <span className="text-[#111827]/70">© 2025 Breakaway </span>
          <span className="text-white/90">Pickleball Camps. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
