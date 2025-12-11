"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { SlideContainer } from "@/components/ui"

export default function Slide5() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        router.push("/s/4")
      }
      // No ArrowRight handler - this is the last slide
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [router])

  return (
    <SlideContainer slideNumber={5} totalSlides={5}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.h1
          className="bg-black px-8 py-4 text-9xl font-bold text-white"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          Bye!
        </motion.h1>
      </motion.div>
    </SlideContainer>
  )
}
