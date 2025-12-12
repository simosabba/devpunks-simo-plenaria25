"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { SlideContainer, Typewriter, HighlightText } from "@/components/ui"

export default function Slide4() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  // Steps: 0=first block, 1=arrow1, 2=second block, 3=arrow2, 4=third block, 5=arrow3, 6=fourth block, 7=arrow4

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        if (step < 7) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else {
          router.push("/s/5")
        }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (step > 0) {
          e.stopPropagation()
          setStep((prev) => prev - 1)
        } else {
          router.push("/s/3")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [step, router])

  return (
    <SlideContainer slideNumber={4} className="relative h-full">
      {/* Top Left: coders vs builders */}
      <div className="absolute left-20 top-20 flex flex-col items-start gap-[2px]">
        <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
          <Typewriter text="coders" delay={50} />
        </h1>
        <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
          <HighlightText>vs</HighlightText>
        </h1>
        <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
          <Typewriter text="builders" delay={50} />
        </h1>
      </div>

      {/* Arrow 1: Left to Right (top) */}
      {step >= 1 && (
        <svg
          className="absolute left-1/2 top-[170px] -translate-x-1/2"
          width="700"
          height="40"
          viewBox="0 0 700 40"
          fill="none"
        >
          <motion.line
            x1="0"
            y1="20"
            x2="680"
            y2="20"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.polygon
            points="680,12 700,20 680,28"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          />
        </svg>
      )}

      {/* Top Right: specialist vs generalist */}
      {step >= 2 && (
        <div className="absolute right-20 top-20 flex flex-col items-start gap-[2px]">
          <h1 className="slide-title min-w-[340px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="specialist" delay={40} />
          </h1>
          <h1 className="slide-title min-w-[340px] bg-black px-4 text-center text-6xl font-bold text-white">
            <HighlightText>vs</HighlightText>
          </h1>
          <h1 className="slide-title min-w-[340px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="generalist" delay={40} />
          </h1>
        </div>
      )}

      {/* Arrow 2: Top to Bottom (right side) */}
      {step >= 3 && (
        <svg
          className="absolute right-[260px] top-1/2 -translate-y-1/2"
          width="40"
          height="200"
          viewBox="0 0 40 200"
          fill="none"
        >
          <motion.line
            x1="20"
            y1="0"
            x2="20"
            y2="180"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.polygon
            points="12,180 20,200 28,180"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          />
        </svg>
      )}

      {/* Bottom Right: AI skeptical vs AI explorers */}
      {step >= 4 && (
        <div className="absolute bottom-20 right-20 flex flex-col items-start gap-[2px]">
          <h1 className="slide-title w-[380px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="AI skeptical" delay={40} />
          </h1>
          <h1 className="slide-title w-[380px] bg-black px-4 text-center text-6xl font-bold text-white">
            <HighlightText>vs</HighlightText>
          </h1>
          <h1 className="slide-title w-[380px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="AI explorers" delay={40} />
          </h1>
        </div>
      )}

      {/* Arrow 3: Right to Left (bottom) */}
      {step >= 5 && (
        <svg
          className="absolute bottom-[170px] left-1/2 -translate-x-1/2"
          width="700"
          height="40"
          viewBox="0 0 700 40"
          fill="none"
        >
          <motion.line
            x1="700"
            y1="20"
            x2="20"
            y2="20"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.polygon
            points="20,12 0,20 20,28"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          />
        </svg>
      )}

      {/* Bottom Left: chaos vs structure */}
      {step >= 6 && (
        <div className="absolute bottom-20 left-20 flex flex-col items-start gap-[2px]">
          <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="chaos" delay={40} />
          </h1>
          <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
            <HighlightText>vs</HighlightText>
          </h1>
          <h1 className="slide-title min-w-[300px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter text="structure" delay={40} />
          </h1>
        </div>
      )}

      {/* Arrow 4: Bottom to Top (left side) */}
      {step >= 7 && (
        <svg
          className="absolute left-[220px] top-1/2 -translate-y-1/2"
          width="40"
          height="200"
          viewBox="0 0 40 200"
          fill="none"
        >
          <motion.line
            x1="20"
            y1="200"
            x2="20"
            y2="20"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.polygon
            points="12,20 20,0 28,20"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          />
        </svg>
      )}
    </SlideContainer>
  )
}
