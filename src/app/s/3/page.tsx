"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
        if (line3Done && step < 3) {
          e.stopPropagation()
          setStep((prev) => prev + 1)
        } else if (step === 3) {
          router.push("/s/4")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [line3Done, step, router])

  return (
    <SlideContainer slideNumber={3}>
      <div className="flex h-full items-start gap-24 pt-16">
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
          <div className="slide-content max-w-2xl">
            {step >= 1 && (
              <p>
                <strong>1.</strong>{" "}
                <HighlightText className="font-bold">
                  Se uso AI nel progetto
                </HighlightText>
                : <Typewriter text="si, tantissimo!" delay={60} />
              </p>
            )}

            {step >= 2 && (
              <p className="mt-6">
                <strong>2.</strong>{" "}
                <HighlightText className="font-bold">
                  Come mi relaziono all&apos;uso dei tool dell&apos;AI
                </HighlightText>
                : <Typewriter text="li provo tutti!" delay={60} />
              </p>
            )}

            {step >= 3 && (
              <p className="mt-6">
                <strong>3.</strong> Visione su{" "}
                <HighlightText className="font-bold">
                  come l&apos;AI cambierà il lavoro degli sviluppatori
                </HighlightText>{" "}
                (automazione, pair programming avanzato, generazione di codice,
                test intelligenti).
              </p>
            )}
          </div>
        )}
      </div>
    </SlideContainer>
  )
}
