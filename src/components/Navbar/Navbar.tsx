
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Mindful Oasis</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10">Services</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10">Resources</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
            prefetch={false}
          >
            <span className="relative z-10">Contact</span>
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
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}