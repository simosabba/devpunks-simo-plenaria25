"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

const logos = [
  {
    name: "TypeScript",
    src: "/logos/typescript-original.svg",
    rotate: -5,
    top: "15%",
    left: "45%",
    floatY: -12,
    floatDuration: 2.8,
    floatDelay: 0,
  },
  {
    name: "React",
    src: "/logos/react-original.svg",
    rotate: 8,
    top: "60%",
    left: "25%",
    floatY: -18,
    floatDuration: 3.5,
    floatDelay: 1.2,
    spin: true,
  },
  {
    name: "Next.js",
    src: "/logos/nextjs-original.svg",
    rotate: -3,
    top: "75%",
    left: "8%",
    floatY: -10,
    floatDuration: 2.2,
    floatDelay: 2.5,
  },
  {
    name: "Node.js",
    src: "/logos/nodejs-original.svg",
    rotate: 6,
    top: "75%",
    left: "50%",
    floatY: -15,
    floatDuration: 4.0,
    floatDelay: 0.8,
  },
  {
    name: "NestJS",
    src: "/logos/nestjs-original.svg",
    rotate: -7,
    top: "35%",
    left: "55%",
    floatY: -20,
    floatDuration: 3.2,
    floatDelay: 1.8,
  },
  {
    name: ".NET",
    src: "/logos/dotnetcore-original.svg",
    rotate: 4,
    top: "50%",
    left: "40%",
    floatY: -8,
    floatDuration: 2.5,
    floatDelay: 3.0,
  },
  {
    name: "Terraform",
    src: "/logos/terraform-original.svg",
    rotate: -4,
    top: "80%",
    left: "70%",
    floatY: -14,
    floatDuration: 3.8,
    floatDelay: 0.5,
  },
  {
    name: "AWS",
    src: "/logos/amazonwebservices-original-wordmark.svg",
    rotate: 3,
    top: "40%",
    left: "80%",
    floatY: -16,
    floatDuration: 2.9,
    floatDelay: 2.2,
  },
  {
    name: "Azure",
    src: "/logos/azure-original.svg",
    rotate: -6,
    top: "65%",
    left: "85%",
    floatY: -11,
    floatDuration: 3.6,
    floatDelay: 1.5,
  },
  {
    name: "Claude",
    src: "/logos/claude.png",
    rotate: 5,
    top: "45%",
    left: "65%",
    floatY: -13,
    floatDuration: 2.6,
    floatDelay: 0.3,
  },
  {
    name: "Cursor",
    src: "/logos/cursor.png",
    rotate: -8,
    top: "85%",
    left: "35%",
    floatY: -17,
    floatDuration: 3.3,
    floatDelay: 2.8,
  },
  {
    name: "Python",
    src: "/logos/python-original.svg",
    rotate: 7,
    top: "72%",
    left: "18%",
    floatY: -14,
    floatDuration: 3.1,
    floatDelay: 1.0,
  },
  {
    name: "Tailwind",
    src: "/logos/tailwindcss-original.svg",
    rotate: -3,
    top: "25%",
    left: "30%",
    floatY: -9,
    floatDuration: 2.4,
    floatDelay: 1.6,
  },
  {
    name: "Vercel",
    src: "/logos/vercel-original.svg",
    rotate: -4,
    top: "90%",
    left: "55%",
    floatY: -12,
    floatDuration: 2.8,
    floatDelay: 0.9,
  },
  {
    name: "PostgreSQL",
    src: "/logos/postgresql-original.svg",
    rotate: -6,
    top: "48%",
    left: "5%",
    floatY: -10,
    floatDuration: 2.9,
    floatDelay: 1.9,
  },
]

interface TechLogosProps {
  startDelay?: number
  itemDelay?: number
}

export function TechLogos({ startDelay = 0, itemDelay = 250 }: TechLogosProps) {
  const [visibleCount, setVisibleCount] = useState(0)
  const logoRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= logos.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, itemDelay)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(startTimeout)
  }, [startDelay, itemDelay])

  // GSAP floating animation
  useEffect(() => {
    logoRefs.current.forEach((el, index) => {
      if (el && index < visibleCount) {
        const logo = logos[index]
        // Floating animation
        gsap.to(el, {
          y: logo.floatY,
          duration: logo.floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: logo.floatDelay,
        })
        // Spin animation for React
        if (logo.spin) {
          gsap.to(el, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "none",
          })
        }
      }
    })

    return () => {
      logoRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el)
      })
    }
  }, [visibleCount])

  return (
    <>
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className="absolute transition-all duration-700 ease-out"
          style={{
            top: logo.top,
            left: logo.left,
            opacity: index < visibleCount ? 1 : 0,
            transform:
              index < visibleCount
                ? `rotate(${logo.rotate}deg) scale(1)`
                : `rotate(0deg) scale(0)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={(el) => {
              logoRefs.current[index] = el
            }}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="h-20 w-20 object-contain"
          />
        </div>
      ))}
    </>
  )
}
