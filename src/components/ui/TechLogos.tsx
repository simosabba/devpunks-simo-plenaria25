"use client"

import { useEffect, useState } from "react"

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const logos = [
  {
    name: "TypeScript",
    src: `${DEVICON_CDN}/typescript/typescript-original.svg`,
    rotate: -5,
    top: "15%",
    left: "45%",
  },
  {
    name: "React",
    src: `${DEVICON_CDN}/react/react-original.svg`,
    rotate: 8,
    top: "60%",
    left: "25%",
  },
  {
    name: "Next.js",
    src: `${DEVICON_CDN}/nextjs/nextjs-original.svg`,
    rotate: -3,
    top: "75%",
    left: "8%",
  },
  {
    name: "Node.js",
    src: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,
    rotate: 6,
    top: "75%",
    left: "50%",
  },
  {
    name: "NestJS",
    src: `${DEVICON_CDN}/nestjs/nestjs-original.svg`,
    rotate: -7,
    top: "35%",
    left: "55%",
  },
  {
    name: ".NET",
    src: `${DEVICON_CDN}/dotnetcore/dotnetcore-original.svg`,
    rotate: 4,
    top: "50%",
    left: "40%",
  },
  {
    name: "Terraform",
    src: `${DEVICON_CDN}/terraform/terraform-original.svg`,
    rotate: -4,
    top: "80%",
    left: "70%",
  },
  {
    name: "AWS",
    src: `${DEVICON_CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    rotate: 3,
    top: "40%",
    left: "80%",
  },
  {
    name: "Azure",
    src: `${DEVICON_CDN}/azure/azure-original.svg`,
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
    src: "https://www.cursor.com/brand/icon.svg",
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
            className={`h-20 w-20 object-contain ${
              logo.invert ? "invert" : ""
            }`}
          />
        </div>
      ))}
    </>
  )
}
