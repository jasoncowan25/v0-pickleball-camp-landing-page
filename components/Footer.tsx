import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E5E7EB]">
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-[#F3F4F6]" />
        {/* Lighter grey on the right */}
        <div className="flex-1 bg-[#FAFBFC]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute h-full w-[200%] bg-[#FAFBFC] origin-top-right"
          style={{
            transform: "rotate(75deg) translateX(50%)",
            right: "calc(50% - 500px)",
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
          <Link href="/camps" className="text-[#111827]/70 hover:text-[#00205B] transition-colors">
            Find Your Camp
          </Link>
        </nav>

        <p className="mt-6 text-sm text-[#111827]/70">
          Contact: <span className="text-[#111827]">breakawaypickleball@gmail.com</span>
        </p>

        <p className="mt-3 text-xs text-[#111827]/60">© 2025 Breakaway Pickleball Camps. All rights reserved.</p>
      </div>
    </footer>
  )
}
