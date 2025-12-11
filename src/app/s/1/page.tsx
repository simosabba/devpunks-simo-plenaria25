"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  SlideContainer,
  SlideTitle,
  Typewriter,
  TechLogos,
} from "@/components/ui"

export default function Slide1() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)
  const [text1Done, setText1Done] = useState(false)
  const [text2Done, setText2Done] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (step === 0) {
          e.stopPropagation()
          setStep(1)
        } else {
          router.push("/s/2")
        }
      }
      // No ArrowLeft handler - this is the first slide
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [step, router])

  return (
    <SlideContainer slideNumber={1} className="relative h-full">
      {step >= 1 && (
        <>
          <div className="flex flex-col items-start gap-[2px] pt-32">
            <SlideTitle>
              <Typewriter
                text="Ciao,"
                delay={100}
                onComplete={() => setLine1Done(true)}
                className="text-7xl"
              />
            </SlideTitle>
            {line1Done && (
              <SlideTitle>
                <Typewriter
                  text="sono Simo"
                  delay={80}
                  onComplete={() => setLine2Done(true)}
                  className="text-7xl"
                />
              </SlideTitle>
            )}
          </div>

          {line2Done && (
            <p className="absolute top-26 right-16 max-w-3xl -translate-y-1/2 text-right text-4xl text-black">
              <Typewriter
                text="sono un dev a cui piace provare tante cose"
                delay={50}
                onComplete={() => setText1Done(true)}
              />
            </p>
          )}

          {text1Done && (
            <p className="absolute top-64 right-26 -rotate-3 text-4xl text-black">
              <Typewriter
                text="per costruire altre cose"
                delay={90}
                onComplete={() => setText2Done(true)}
              />
            </p>
          )}

          {text2Done && <TechLogos startDelay={200} itemDelay={200} />}
        </>
      )}
    </SlideContainer>
  )
}
