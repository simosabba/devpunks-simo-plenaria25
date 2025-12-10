"use client"

import { useEffect, useState } from "react"

const logos = [
  {
    name: "TypeScript",
    src: "/logos/typescript-original.svg",
    rotate: -5,
    top: "15%",
    left: "45%",
  },
  {
    name: "React",
    src: "/logos/react-original.svg",
    rotate: 8,
    top: "60%",
    left: "25%",
  },
  {
    name: "Next.js",
    src: "/logos/nextjs-original.svg",
    rotate: -3,
    top: "75%",
    left: "8%",
  },
  {
    name: "Node.js",
    src: "/logos/nodejs-original.svg",
    rotate: 6,
    top: "75%",
    left: "50%",
  },
  {
    name: "NestJS",
    src: "/logos/nestjs-original.svg",
    rotate: -7,
    top: "35%",
    left: "55%",
  },
  {
    name: ".NET",
    src: "/logos/dotnetcore-original.svg",
    rotate: 4,
    top: "50%",
    left: "40%",
  },
  {
    name: "Terraform",
    src: "/logos/terraform-original.svg",
    rotate: -4,
    top: "80%",
    left: "70%",
  },
  {
    name: "AWS",
    src: "/logos/amazonwebservices-original-wordmark.svg",
    rotate: 3,
    top: "40%",
    left: "80%",
  },
  {
    name: "Azure",
    src: "/logos/azure-original.svg",
    rotate: -6,
    top: "65%",
    left: "85%",
  },
  {
    name: "Claude",
    src: "/logos/claude.png",
    rotate: 5,
    top: "70%",
    left: "18%",
  },
  {
    name: "Cursor",
    src: "/logos/cursor.svg",
    rotate: -8,
    top: "85%",
    left: "35%",
  },
]

interface TechLogosProps {
  startDelay?: number
  itemDelay?: number
}

export function TechLogos({ startDelay = 0, itemDelay = 250 }: TechLogosProps) {
  const [visibleCount, setVisibleCount] = useState(0)

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
