"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import {
  SlideContainer,
  SlideTitle,
  HighlightText,
  Typewriter,
} from "@/components/ui"

export default function Slide3() {
  const router = useRouter()
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)
  const [line3Done, setLine3Done] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (line3Done && step < 4) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else if (step === 4) {
          router.push("/s/4")
        }
      } else if (e.key === "ArrowLeft") {
        if (step > 0) {
          e.stopPropagation()
          setStep((prev) => prev - 1)
        } else {
          router.push("/s/2")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [line3Done, step, router])

  const isZoomed = step === 4

  return (
    <SlideContainer slideNumber={3}>
      <AnimatePresence>
        {!isZoomed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full items-start gap-24 pt-16"
          >
            <div className="flex flex-shrink-0 flex-col gap-2">
              <SlideTitle>
                <Typewriter
                  text="Come cambia"
                  delay={80}
                  onComplete={() => setLine1Done(true)}
                  className="text-7xl"
                />
              </SlideTitle>
              {line1Done && (
                <SlideTitle>
                  <Typewriter
                    text="il mondo dei"
                    delay={80}
                    onComplete={() => setLine2Done(true)}
                    className="text-7xl"
                  />
                </SlideTitle>
              )}
              {line2Done && (
                <SlideTitle>
                  <Typewriter
                    text="dev con l'AI?"
                    delay={80}
                    onComplete={() => setLine3Done(true)}
                    className="text-7xl"
                  />
                </SlideTitle>
              )}
            </div>

            {line3Done && (
              <div className="max-w-5xl text-4xl">
                {step >= 1 && (
                  <p>
                    <strong>1.</strong>{" "}
                    <HighlightText className="font-bold">
                      Se uso AI nel progetto?
                    </HighlightText>
                    <Typewriter
                      text="Si, tantissimo!"
                      delay={60}
                      className="ml-2"
                    />
                  </p>
                )}

                {step >= 2 && (
                  <p className="mt-8">
                    <strong>2.</strong>{" "}
                    <HighlightText className="font-bold">
                      Come mi relaziono all&apos;uso dei tool dell&apos;AI?
                    </HighlightText>
                    <Typewriter
                      text="Li provo tutti!"
                      delay={60}
                      className="ml-2"
                    />
                  </p>
                )}

                {step >= 3 && (
                  <p className="mt-8">
                    <strong>3.</strong>{" "}
                    <HighlightText className="font-bold">
                      Come l&apos;AI cambierà il lavoro degli sviluppatori?
                    </HighlightText>
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="bg-black px-4 py-2 text-center text-6xl font-bold text-white">
              Come l&apos;AI cambierà il lavoro degli sviluppatori?
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideContainer>
  )
}
