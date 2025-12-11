"use client"

import { useState } from "react"
import { SlideContainer, Typewriter } from "@/components/ui"

export default function Slide4() {
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)

  return (
    <SlideContainer slideNumber={4}>
      <div>
        <div className="flex flex-col items-start gap-[2px]">
          <h1 className="slide-title min-w-[320px] bg-black px-4 text-center text-7xl font-bold text-white">
            <Typewriter
              text="coders"
              delay={100}
              onComplete={() => setLine1Done(true)}
            />
          </h1>
          {line1Done && (
            <h1 className="slide-title min-w-[320px] bg-black px-4 text-center text-7xl font-bold text-white">
              <Typewriter
                text="vs"
                delay={100}
                onComplete={() => setLine2Done(true)}
              />
            </h1>
          )}
          {line2Done && (
            <h1 className="slide-title min-w-[320px] bg-black px-4 text-center text-7xl font-bold text-white">
              <Typewriter text="builders" delay={100} />
            </h1>
          )}
        </div>
      </div>
    </SlideContainer>
  )
}
