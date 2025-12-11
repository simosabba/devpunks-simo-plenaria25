"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
        if (line3Done && step < 1) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else if (step === 1) {
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
          <div className="max-w-2xl">
            <p className="text-5xl">
              <HighlightText className="font-bold">
                <Typewriter text="Tanti ma in primis Devpunks" delay={60} />
              </HighlightText>
            </p>
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
