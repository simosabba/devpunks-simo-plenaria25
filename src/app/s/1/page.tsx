"use client"

import { useState } from "react"
import {
  SlideContainer,
  SlideTitle,
  Typewriter,
  TechLogos,
} from "@/components/ui"

export default function Slide1() {
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)
  const [text1Done, setText1Done] = useState(false)
  const [text2Done, setText2Done] = useState(false)

  return (
    <SlideContainer slideNumber={1} className="relative h-full">
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
            text="sono un dev a cui piace parlare con altri dev"
            delay={50}
            onComplete={() => setText1Done(true)}
          />
        </p>
      )}

      {text1Done && (
        <p className="absolute top-64 right-26 -rotate-3 text-4xl text-black">
          <Typewriter
            text="e mi piace provare tante cose"
            delay={90}
            onComplete={() => setText2Done(true)}
          />
        </p>
      )}

      {text2Done && <TechLogos startDelay={200} itemDelay={200} />}
    </SlideContainer>
  )
}
