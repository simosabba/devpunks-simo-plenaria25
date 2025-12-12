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
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        if (line3Done && step < 4) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else if (step === 4) {
          router.push("/s/3")
        }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
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
          <div className="max-w-8xl">
            <p className="text-5xl">
              <HighlightText className="font-bold">
                <Typewriter text="Tanti e ho visto un po di cose nuove" delay={60} />
              </HighlightText>
            </p>

            {/* AI Illustration */}
            {step >= 2 && (
              <motion.div
                className="mt-32 flex flex-wrap items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/ai-sdk.png"
                    alt="AI SDK"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">Agents / LLM</span>
                </div>
                <span className="text-5xl">+</span>
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/qdrant.png"
                    alt="Qdrant"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">RAG</span>
                </div>
                <span className="text-5xl">+</span>
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/n8n_.png"
                    alt="n8n"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">AI Automation</span>
                </div>
              </motion.div>
            )}

            {/* Terraform Logo */}
            {step >= 3 && (
              <motion.div
                className="mt-24 flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/terraform-original.svg"
                    alt="Terraform CDK"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">Terraform CDK</span>
                </div>
              </motion.div>
            )}

            {/* PowerPoint + Claude Code */}
            {step >= 4 && (
              <motion.div
                className="mt-24 flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/powerpoint.png"
                    alt="PowerPoint"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">PowerPoint</span>
                </div>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                  <line
                    x1="0"
                    y1="12"
                    x2="45"
                    y2="12"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <polygon points="45,6 60,12 45,18" fill="black" />
                </svg>
                <div className="flex items-center gap-4 border-2 border-black bg-white px-6 py-4">
                  <Image
                    src="/logos/claude.png"
                    alt="Claude Code"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <span className="text-4xl font-bold">Claude Code</span>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
