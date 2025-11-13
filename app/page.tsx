"use client"

import dynamic from 'next/dynamic'
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { AboutSection } from "@/components/sections/about-section"
import { ProductsSection } from "@/components/sections/products-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { FAQSection } from "@/components/sections/faq-section"
import { GlindentLogo } from "@/components/glindent-logo"
import { ChevronDown } from "lucide-react"

// Dynamically import shader components with SSR disabled for better performance
const Shader = dynamic(() => import("shaders/react").then(mod => mod.Shader), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-background" />
})
const ChromaFlow = dynamic(() => import("shaders/react").then(mod => mod.ChromaFlow), { ssr: false })
const Swirl = dynamic(() => import("shaders/react").then(mod => mod.Swirl), { ssr: false })

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shaderError, setShaderError] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const scrollThrottleRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
      // If shader hasn't loaded after 2 seconds, show fallback
      if (!checkShaderReady()) {
        setShaderError(true)
      }
    }, 2000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 4) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 4) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 4) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      {/* Fallback gradient background */}
      <div className="fixed inset-0 z-0 bg-linear-to-br from-[#3db8a4] via-[#2c8e8a] to-background" />

      {/* WebGL Shader Background (enhanced version) */}
      {!shaderError && (
        <div
          ref={shaderContainerRef}
          className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ contain: "strict" }}
        >
          <Suspense fallback={null}>
            <Shader className="h-full w-full">
              <Swirl
                colorA="#3db8a4"
                colorB="#2c8e8a"
                speed={0.8}
                detail={0.8}
                blend={50}
                coarseX={40}
                coarseY={40}
                mediumX={40}
                mediumY={40}
                fineX={40}
                fineY={40}
              />
              <ChromaFlow
                baseColor="#3db8a4"
                upColor="#3db8a4"
                downColor="#d1d1d1"
                leftColor="#2c8e8a"
                rightColor="#2c8e8a"
                intensity={0.9}
                radius={1.8}
                momentum={25}
                maskType="alpha"
                opacity={0.97}
              />
            </Shader>
          </Suspense>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <nav
        className={`fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 transition-opacity duration-700 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <GlindentLogo variant="white" className="h-9 w-auto" />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {["Home", "About Us", "Products", "FAQ", "Contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                currentSection === index ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection(2)}
          className="hidden font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground md:block"
        >
          Shop Now
        </button>
      </nav>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section className="relative flex min-h-screen w-screen shrink-0 flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(70% 60% at 20% 30%, rgba(0,0,0,.16) 0%, rgba(0,0,0,.08) 35%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.04))`,
            }}
          />

          <div className="relative z-10 mt-6 max-w-3xl md:mt-8">
            <div className="glass mb-6 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-2xl px-4 py-1.5 duration-700">
              <p className="text-[14px] leading-none text-white">High-Quality Dental Supplies</p>
            </div>
            <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-8 font-sans text-6xl font-light leading-[1.1] tracking-tight text-white duration-1000 md:text-7xl lg:text-8xl">
              <span className="text-balance">
                Where quality
                <br />
                meets care
              </span>
            </h1>
            <p className="mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-white/95 duration-1000 delay-200 md:text-xl">
              <span className="text-pretty">
                We believe dental professionals deserve materials they can trust. That's why Glindent delivers
                world-class products, supported by responsive service and a commitment to helping you achieve the best
                results for your patients.
              </span>
            </p>

            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
              <Link href="/products">
                <MagneticButton size="lg" variant="primary">
                  Shop Now
                </MagneticButton>
              </Link>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(4)}>
                Contact Us
              </MagneticButton>
            </div>
          </div>

          <button
            onClick={() => scrollToSection(1)}
            className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-in fade-in flex-col items-center gap-2 transition-transform duration-1000 delay-500 hover:scale-105"
          >
            <p className="text-[13px] font-medium text-white/90">Scroll to explore</p>
            <div className="animate-bounce">
              <ChevronDown className="h-5 w-5 text-white/90" strokeWidth={2} />
            </div>
          </button>
        </section>

        <AboutSection scrollToSection={scrollToSection} />
        <ProductsSection />
        <FAQSection />
        <ContactSection />
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
