"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="relative z-20 flex min-h-screen w-screen shrink-0 snap-start flex-col px-6 pt-32 pb-8 md:px-12 md:pt-40 md:pb-12 lg:px-16"
    >
      <div className="h-full flex flex-col">
        {/* Title */}
        <div
          className={`mb-8 shrink-0 md:mb-12 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="font-sans text-5xl font-light leading-none tracking-tight text-foreground whitespace-nowrap md:text-6xl lg:text-7xl">
            Let's talk
          </h2>
          <p className="mt-2 font-mono text-xs text-foreground/60 md:text-sm">/ Get in touch</p>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 lg:gap-20 xl:gap-24">
            {/* Left side - Contact Info */}
            <div className="flex flex-col gap-6 md:gap-8 md:w-[42%]">
              <a
                href="mailto:info@glindent.co.uk"
                className={`flex flex-col group transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60 uppercase tracking-wider">Email</span>
                </div>
                <p className="text-lg text-foreground transition-all group-hover:text-foreground/70 group-hover:translate-x-1 md:text-xl lg:text-2xl">
                  info@glindent.co.uk
                </p>
              </a>

              <div
                className={`flex flex-col transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60 uppercase tracking-wider">Phone</span>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:01202402675"
                    className="text-lg text-foreground transition-all hover:text-foreground/70 hover:translate-x-1 md:text-xl lg:text-2xl"
                  >
                    01202 402675
                  </a>
                  <a
                    href="tel:07717886717"
                    className="text-lg text-foreground transition-all hover:text-foreground/70 hover:translate-x-1 md:text-xl lg:text-2xl"
                  >
                    07717 886717
                  </a>
                </div>
              </div>

              <div
                className={`flex flex-col transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60 uppercase tracking-wider">Address</span>
                </div>
                <p className="text-lg leading-relaxed text-foreground md:text-xl lg:text-2xl">
                  Bourne House
                  <br />
                  23 Hinton Road
                  <br />
                  Bournemouth
                  <br />
                  BH1 2EF
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 md:pt-6 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group relative font-mono text-xs text-foreground/60 uppercase tracking-wider transition-all hover:text-foreground"
                  >
                    {social}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="md:w-[52%]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label className="mb-2 block font-mono text-xs text-foreground/60 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-b-2 border-foreground/20 bg-transparent py-3 text-base text-foreground placeholder:text-foreground/30 transition-all focus:border-foreground focus:outline-none md:text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label className="mb-2 block font-mono text-xs text-foreground/60 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border-b-2 border-foreground/20 bg-transparent py-3 text-base text-foreground placeholder:text-foreground/30 transition-all focus:border-foreground focus:outline-none md:text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label className="mb-2 block font-mono text-xs text-foreground/60 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full resize-none border-b-2 border-foreground/20 bg-transparent py-3 text-base text-foreground placeholder:text-foreground/30 transition-all focus:border-foreground focus:outline-none md:text-lg"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </MagneticButton>
                  {submitSuccess && (
                    <p className="mt-4 text-center font-mono text-sm text-foreground animate-in fade-in slide-in-from-bottom-2 duration-500">
                      ✓ Message sent successfully!
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
