"use client";
import {
  ArrowRightCircleIcon,
  FrownIcon,
  LeafIcon,
  MedalIcon,
  MoonIcon,
} from "lucide-react";
import Link from "next/link";
import { Typing } from "./Typing";
import { FAQ } from "./FAQ";
import { UserExp } from "./Userexp";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero section */}
        <section className="w-full pt-4 md:pt-6 lg:pt-8 bg-primary -mt-16 md:-mt-20 lg:-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                <Typing />
              </div>
              <img
                src="https://img.freepik.com/free-photo/portrait-person-suffering-from-hangover_23-2151256258.jpg?t=st=1726417851~exp=1726421451~hmac=433d44ad5a07d4fca29b09b9965aa1a5a52d3d37ce9f696b4fad4db2689ac9e9&w=1060"
                alt="Hero"
                className="mx-auto h-64 w-full object-cover overflow-hidden rounded-lg sm:h-80 lg:h-[450px] lg:order-last lg:aspect-square"
                width="550"
                height="450"
              />
            </div>
          </div>
        </section>
        {/* Feature section */}
        <section className="w-full -mb-20 -mt-10 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-black mb-8 sm:mt-20 xs:mt-10">
              Support for Every Step of Your Journey
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <MoonIcon className="h-8 w-8 text-primary" />,
                  title: "Anxiety",
                  description:
                    "Discover effective strategies to manage anxiety and find inner calm.",
                },
                {
                  icon: <FrownIcon className="h-8 w-8 text-primary" />,
                  title: "Depression",
                  description:
                    "Explore resources to understand and manage symptoms of depression.",
                },
                {
                  icon: <MedalIcon className="h-8 w-8 text-primary" />,
                  title: "Mindfulness",
                  description:
                    "Explore mindfulness techniques to reduce stress and improve well-being.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 border  hover:scale-105 border-gray-200 rounded-lg"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-black mt-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-center">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Learn More
                    <ArrowRightCircleIcon className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* User Experience */}
        <UserExp />  
        {/* FAQ */}
        <FAQ />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
  <div className="container mx-auto flex flex-col items-center text-center px-4 md:px-6 lg:px-8">
    <div className="space-y-6 mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">Our Impact</h2>
      <p className="mx-auto max-w-2xl text-gray-700 md:text-lg lg:text-xl xl:text-2xl italic">
        See the real-world impact of our public education and mental health fundraising programs.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
      <div className="rounded-lg border border-blue-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          <span id="counter1" className="counter">125,000+</span>
        </div>
        <p className="text-gray-800">People reached through public education programs</p>
      </div>
      <div className="rounded-lg border border-purple-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl font-bold text-purple-600 mb-2">
          <span id="counter2" className="counter">$2.3M</span>
        </div>
        <p className="text-gray-800">Raised through fundraisers for mental health programs</p>
      </div>
      <div className="rounded-lg border border-pink-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl font-bold text-pink-600 mb-2">
          <span id="counter3" className="counter">10,000+</span>
        </div>
        <p className="text-gray-800">Individuals provided with mental health resources</p>
      </div>
    </div>
  </div>
</section>

        {/* Discover Section */}
        <section className="w-full md:py-24 lg:py-32 bg-gray-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter -mt-10 text-center text-black sm:text-3xl sm:mt-10">
                  Discover Our Features
                </h2>
                <p className="max-w-[900px] italic text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a range of tools and resources to support
                  your mental health journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://img.freepik.com/free-photo/heart-healthy-life-wellness-icon_53876-123819.jpg?t=st=1726420761~exp=1726424361~hmac=23f6f24ab5de58e397b285aeb3139d67dab3e2bfe494b491794644d71b92f128&w=826"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  {[
                    {
                      title: "Community Forum",
                      description:
                        "Connect with others, share experiences, and find support.",
                    },
                    {
                      title: "Self-Assessment Tools",
                      description:
                        "Identify your mental health needs and track your progress.",
                    },
                    {
                      title: "Professional Help",
                      description:
                        "Access to licensed therapists and counselors for personalized support.",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-black">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground italic">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Mindful Oasis. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {[
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
            { href: "#", label: "Privacy Policy" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xs hover:underline underline-offset-4 text-muted-foreground"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Hero;
