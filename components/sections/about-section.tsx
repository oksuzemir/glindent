"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import Image from "next/image"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-1000 ease-out md:mb-12 ${
                isVisible ? "translate-y-0 scale-100 opacity-100 blur-0" : "-translate-y-20 scale-95 opacity-0 blur-sm"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                <span className="inline-block transition-all duration-700 hover:text-foreground/80">Our</span>
                <br />
                <span className="inline-block transition-all duration-700 delay-100 hover:text-foreground/80">
                  Story
                </span>
              </h2>
            </div>

            <div
              className={`relative mb-6 h-56 overflow-hidden rounded-2xl transition-all duration-700 ease-out md:mb-8 md:h-72 ${
                isVisible ? "translate-y-0 opacity-100 blur-0" : "-translate-y-12 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src="/modern-dental-laboratory-with-advanced-equipment.jpg"
                alt="Modern dental laboratory with advanced equipment - Glindent"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <p
                className={`max-w-md text-sm leading-relaxed text-foreground/90 transition-all duration-700 ease-out md:text-lg ${
                  isVisible ? "translate-x-0 opacity-100 blur-0" : "-translate-x-12 opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Our journey started in Izmir, Turkey, where Gülsa Medical Devices and Materials has been supporting
                dentists and labs for more than four decades. Built on a commitment to quality and trust, Gülsa grew
                into one of Turkey's most respected names in dental care, now serving professionals across the world.
              </p>
              <p
                className={`max-w-md text-sm leading-relaxed text-foreground/90 transition-all duration-700 ease-out md:text-lg ${
                  isVisible ? "translate-x-0 opacity-100 blur-0" : "-translate-x-12 opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                Glindent was created to bring that same dedication closer to the UK. We know how important it is for
                dental professionals to have reliable materials at hand, that's why we make Gülsa's products, from
                world-class zirconia discs to restorative and CAD/CAM solutions, available with faster delivery and
                local service you can count on.
              </p>
            </div>
          </div>

          {/* Right side - Stats with creative layout */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              { value: "40+", label: "Years", sublabel: "Supporting dental professionals", direction: "right" },
              { value: "1000+", label: "Products", sublabel: "Premium dental supplies", direction: "left" },
              { value: "Global", label: "Reach", sublabel: "Serving worldwide", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left"
                    ? "-translate-x-24 rotate-[-2deg] scale-90 opacity-0 blur-sm"
                    : "translate-x-24 rotate-[2deg] scale-90 opacity-0 blur-sm"
                }
                return "translate-x-0 rotate-0 scale-100 opacity-100 blur-0"
              }

              return (
                <div
                  key={i}
                  className={`group flex cursor-default items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-1000 ease-out hover:border-foreground/60 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${500 + i * 200}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground transition-all duration-500 group-hover:scale-110 group-hover:text-foreground/80 md:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div className="transition-all duration-500 group-hover:translate-x-1">
                    <div className="font-sans text-base font-light text-foreground transition-colors duration-500 group-hover:text-foreground/80 md:text-xl">
                      {stat.label}
                    </div>
                    <div className="font-mono text-xs text-foreground/60 transition-colors duration-500 group-hover:text-foreground/80">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-1000 ease-out md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-16 scale-95 opacity-0 blur-sm"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(2)}>
            Shop Products
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(4)}>
            Contact Us
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
