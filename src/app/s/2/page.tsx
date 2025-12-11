"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import Image from "next/image"
import {
  SlideContainer,
  SlideTitle,
  HighlightText,
  Typewriter,
} from "@/components/ui"

export default function Slide2() {
  const router = useRouter()
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)
  const [line3Done, setLine3Done] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (line3Done && step < 5) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else if (step === 5) {
          router.push("/s/3")
        }
      } else if (e.key === "ArrowLeft") {
        if (step > 0) {
          e.stopPropagation()
          setStep((prev) => prev - 1)
        } else {
          router.push("/s/1")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [line3Done, step, router])

  return (
    <SlideContainer slideNumber={2}>
      <div className="flex h-full items-start gap-24 pt-16">
        <div className="flex flex-shrink-0 flex-col gap-[2px]">
          <SlideTitle>
            <Typewriter
              text="Di quale"
              delay={100}
              onComplete={() => setLine1Done(true)}
              className="text-7xl"
            />
          </SlideTitle>
          {line1Done && (
            <SlideTitle>
              <Typewriter
                text="progetto mi"
                delay={80}
                onComplete={() => setLine2Done(true)}
                className="text-7xl"
              />
            </SlideTitle>
          )}
          {line2Done && (
            <SlideTitle>
              <Typewriter
                text="occupo?"
                delay={80}
                onComplete={() => setLine3Done(true)}
                className="text-7xl"
              />
            </SlideTitle>
          )}
        </div>

        {step >= 1 && (
          <div className="max-w-3xl">
            <p className="text-5xl">
              <HighlightText className="font-bold">
                <Typewriter text="Tanti ma in primis Devpunks" delay={60} />
              </HighlightText>
            </p>
            {step >= 2 && (
              <p className="mt-8 text-5xl">
                <HighlightText className="font-bold">
                  <Typewriter text="Cose che ho visto quest'anno" delay={60} />
                </HighlightText>
              </p>
            )}

            {/* AI Illustration */}
            {step >= 3 && (
              <motion.div
                className="mt-32 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="border-2 border-black bg-white px-4 py-2 text-2xl font-bold">
                  Agents / LLM
                </div>
                <span className="text-3xl">+</span>
                <div className="border-2 border-black bg-white px-4 py-2 text-2xl font-bold">
                  RAG
                </div>
                <span className="text-3xl">+</span>
                <div className="border-2 border-black bg-white px-4 py-2 text-2xl font-bold">
                  AI Automation
                </div>
              </motion.div>
            )}

            {/* Terraform Logo */}
            {step >= 4 && (
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/logos/terraform-original.svg"
                  alt="Terraform CDK"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <span className="text-3xl font-bold">Terraform CDK</span>
              </motion.div>
            )}

            {/* Placeholder for last logo */}
            {step >= 5 && (
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-50">
                  <span className="text-3xl text-gray-400">?</span>
                </div>
                <span className="text-3xl font-bold text-gray-400">
                  Coming soon...
                </span>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
