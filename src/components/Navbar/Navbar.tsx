"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeafIcon, MenuIcon } from "lucide-react";
import Cookie from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { toast } from "@/hooks/use-toast";

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); 

  useEffect(() => {
    const token = Cookie.get('accesst');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/logout");
      Cookie.remove('accesst');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed", error);
    
    }
  };
 
  if (isLoggedIn === null) {
    return <div><Loader/></div>; 
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black/100 backdrop-blur transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">Mindful Oasis</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/about" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
            <span className="relative z-10 font-serif hover:font-extrabold text-white">About</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
          </Link>
          <Link href="/library" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
            <span className="relative z-10 font-serif hover:font-extrabold text-white">Resources</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
          </Link>
          <Link href="/community" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
            <span className="relative z-10 hover:font-extrabold text-white">Community</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link href="/contact" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
            <span className="relative z-10 hover:font-extrabold text-white">Contact</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          <Link href="/therapists" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
            <span className="relative z-10 hover:font-extrabold text-white">Therapists</span>
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
          </Link>
          {!isLoggedIn ? (
            <>
              <Link href="/sign-in" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
                <span className="relative z-10 font-serif hover:font-extrabold text-white">Log-In</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
              </Link>
              <Link href="/sign-up" className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10" prefetch={false}>
                <span className="relative z-10 font-serif hover:font-extrabold text-white">Sign-Up</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
              </Link>
            </>
          ) : (
            <Link
              href="#"
              className="group relative overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-primary/10"
              onClick={handleLogout}
            >
              <span className="relative z-10 font-serif hover:font-extrabold text-white">Log Out</span>
              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform group-hover:font-extrabold" />
            </Link>
          )}
        </nav>
        <Link
          href="/webinar"
          className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 -offset-2"
          prefetch={false}
           
        >
          Webinars
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  );
}
