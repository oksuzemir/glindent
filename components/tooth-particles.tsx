"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
}

interface ToothParticlesProps {
  currentSection: number
}

export function ToothParticles({ currentSection }: ToothParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const prevSectionRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Initialize particles (slightly increased from minimal for a gentle presence)
    const particleCount = 30
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      // Gentle drift (a little faster than ultra-subtle)
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      // Slightly larger sizes for better visibility
      size: Math.random() * 22 + 14,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.6,
      // Low opacity but increased slightly for better visibility
      opacity: Math.random() * 0.04 + 0.012
    }))

    // Create particle elements
    particlesRef.current.forEach((particle, index) => {
      const img = document.createElement("img")
      img.src = "/tooth-icon.png"
      img.style.position = "absolute"
      img.style.width = `${particle.size}px`
      img.style.height = `${particle.size}px`
      img.style.opacity = String(particle.opacity)
      img.style.pointerEvents = "none"
      img.style.left = `${particle.x}px`
      img.style.top = `${particle.y}px`
      img.style.transform = `translate(-50%, -50%) rotate(${particle.rotation}deg)`
      img.dataset.index = String(index)
      container.appendChild(img)
    })

    // Animation loop
    const animate = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed

        // Wrap around edges
        if (particle.x < -100) particle.x = window.innerWidth + 100
        if (particle.x > window.innerWidth + 100) particle.x = -100
        if (particle.y < -100) particle.y = window.innerHeight + 100
        if (particle.y > window.innerHeight + 100) particle.y = -100

        // Update DOM element
        const img = container.querySelector(`[data-index="${index}"]`) as HTMLElement
        if (img) {
          img.style.left = `${particle.x}px`
          img.style.top = `${particle.y}px`
          img.style.transform = `translate(-50%, -50%) rotate(${particle.rotation}deg)`
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

    // React to section changes - push particles in scroll direction (subtle)
  useEffect(() => {
    const direction = currentSection > prevSectionRef.current ? -1 : 1
    prevSectionRef.current = currentSection

    // Add temporary velocity boost to particles
    particlesRef.current.forEach((particle) => {
      // slightly stronger nudge for a noticeable but still subtle effect
      particle.vx += direction * (Math.random() * 0.8 + 0.3)
      particle.vy += (Math.random() - 0.5) * 0.25
    })

    // Gradually slow down particles back to normal speed
    const slowdownInterval = setInterval(() => {
      particlesRef.current.forEach((particle) => {
        particle.vx *= 0.9
        if (Math.abs(particle.vx) < 0.2) {
          particle.vx = (Math.random() - 0.5) * 0.25
        }
      })
    }, 60)

    setTimeout(() => clearInterval(slowdownInterval), 900)

    return () => clearInterval(slowdownInterval)
  }, [currentSection])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-5"
    />
  )
}
