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
  const [showArrow2, setShowArrow2] = useState(false)
  const [arrow2Done, setArrow2Done] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (line3Done && !showArrow) {
          e.stopPropagation()
          setShowArrow(true)
        } else if (arrowDone && !showArrow2) {
          e.stopPropagation()
          setShowArrow2(true)
        } else if (arrow2Done) {
          router.push("/s/5")
        }
      } else if (e.key === "ArrowLeft") {
        if (showArrow2) {
          e.stopPropagation()
          setShowArrow2(false)
          setArrow2Done(false)
        } else if (showArrow) {
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
  }, [line3Done, showArrow, arrowDone, showArrow2, arrow2Done, router])

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

        {/* First arrow - goes down then right */}
        {showArrow && (
          <svg
            className="absolute left-[135px] top-[240px]"
            width="600"
            height="400"
            viewBox="0 0 600 400"
            fill="none"
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="380"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.line
              x1="0"
              y1="380"
              x2="250"
              y2="380"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              onAnimationComplete={() => setArrowDone(true)}
            />
            <motion.polygon
              points="250,372 270,380 250,388"
              fill="black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.3 }}
            />
          </svg>
        )}

        {/* First text block - horizontal vs vertical skills */}
        {arrowDone && (
          <div className="absolute left-[406px] top-[500px] flex flex-col items-start gap-[2px]">
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

        {/* Second arrow - from second block, goes up then right to top right */}
        {showArrow2 && (
          <svg
            className="absolute left-[616px] top-[-60px]"
            width="500"
            height="640"
            viewBox="0 0 500 640"
            fill="none"
          >
            {/* Vertical line going up */}
            <motion.line
              x1="2"
              y1="620"
              x2="2"
              y2="20"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {/* Horizontal line going right */}
            <motion.line
              x1="0"
              y1="20"
              x2="350"
              y2="20"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
              onAnimationComplete={() => setArrow2Done(true)}
            />
            {/* Arrow head */}
            <motion.polygon
              points="350,12 370,20 350,28"
              fill="black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.4 }}
            />
          </svg>
        )}

        {/* Second text block - AI skeptical vs AI explorers */}
        {arrow2Done && (
          <div className="absolute right-16 top-[-60px] flex flex-col items-start gap-[2px]">
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter text="AI skeptical" delay={80} />
            </h1>
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <HighlightText>vs</HighlightText>
            </h1>
            <h1 className="slide-title min-w-[420px] bg-black px-4 text-center text-6xl font-bold text-white">
              <Typewriter text="AI explorers" delay={80} />
            </h1>
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
