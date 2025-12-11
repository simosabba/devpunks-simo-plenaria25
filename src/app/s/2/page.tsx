"use client"

import { useState } from "react"
import {
  SlideContainer,
  SlideTitle,
  HighlightText,
  Typewriter,
} from "@/components/ui"

export default function Slide2() {
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)

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
              <Typewriter text="occupo?" delay={80} className="text-7xl" />
            </SlideTitle>
          )}
        </div>

        <div className="slide-content max-w-2xl">
          <p>
            <HighlightText className="font-bold">
              Tanti ma in primis Devpunks
            </HighlightText>
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}
