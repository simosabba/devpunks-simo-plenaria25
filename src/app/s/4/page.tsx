"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { SlideContainer, Typewriter, HighlightText } from "@/components/ui"

export default function Slide4() {
  const router = useRouter()
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)
  const [line3Done, setLine3Done] = useState(false)
  const [showArrow, setShowArrow] = useState(false)
  const [arrowDone, setArrowDone] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (line3Done && !showArrow) {
          e.stopPropagation()
          setShowArrow(true)
        } else if (arrowDone) {
          router.push("/s/5")
        }
      } else if (e.key === "ArrowLeft") {
        if (showArrow) {
          e.stopPropagation()
          setShowArrow(false)
          setArrowDone(false)
        } else {
          router.push("/s/3")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [line3Done, showArrow, arrowDone, router])

  return (
    <SlideContainer slideNumber={4}>
      <div className="relative">
        <div className="flex flex-col items-start gap-[2px]">
          <h1 className="slide-title min-w-[270px] bg-black px-4 text-center text-6xl font-bold text-white">
            <Typewriter
              text="coders"
              delay={100}
              onComplete={() => setLine1Done(true)}
            />
          </h1>
          {line1Done && (
            <h1 className="slide-title min-w-[270px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter
                text="vs"
                delay={100}
                onComplete={() => setLine2Done(true)}
              />
            </h1>
          )}
          {line2Done && (
            <h1 className="slide-title min-w-[270px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter
                text="builders"
                delay={100}
                onComplete={() => setLine3Done(true)}
              />
            </h1>
          )}
        </div>

        {showArrow && (
          <svg
            className="absolute left-[135px] top-[240px]"
            width="500"
            height="300"
            viewBox="0 0 500 300"
            fill="none"
          >
            {/* Vertical line going down */}
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="200"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Horizontal line going right */}
            <motion.line
              x1="0"
              y1="200"
              x2="400"
              y2="200"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
              onAnimationComplete={() => setArrowDone(true)}
            />
            {/* Arrow head */}
            <motion.polygon
              points="400,192 420,200 400,208"
              fill="black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.4 }}
            />
          </svg>
        )}

        {arrowDone && (
          <div className="absolute left-[555px] top-[390px] flex flex-col items-start gap-[2px]">
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter text="horizontal" delay={80} />
            </h1>
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <HighlightText>vs</HighlightText>
            </h1>
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter text="vertical skills" delay={80} />
            </h1>
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
