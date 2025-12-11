"use client"

import { SlideContainer } from "@/components/ui"

export default function Slide4() {
  return (
    <SlideContainer slideNumber={4}>
      <div className="flex h-full items-center justify-center">
        <p className="text-4xl text-gray-400">Slide 4</p>
      </div>
    </SlideContainer>
  )
}
