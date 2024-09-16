
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeafIcon, MenuIcon } from "lucide-react"

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/100 backdrop-blur transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">Mindful Oasis</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/about"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10 font-serif hover:font-extrabold text-white">About</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
          </Link>
          <Link
            href="/library"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10 font-serif hover:font-extrabold text-white">Resouces</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10 hover:font-extrabold text-white">Services</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10 hover:font-extrabold text-white">Resources</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10 hover:font-extrabold text-white">Contact</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
        </nav>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          Schedule Appointment
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  )
}
