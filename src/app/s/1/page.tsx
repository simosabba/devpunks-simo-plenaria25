"use client";

import { useState } from "react";
import {
  SlideContainer,
  SlideTitle,
  Typewriter,
  FadeIn,
} from "@/components/ui";

export default function Slide1() {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);

  return (
    <SlideContainer slideNumber={1}>
      <div className="flex h-full items-start gap-24 pt-32">
        <div className="flex flex-col gap-[2px]">
          <SlideTitle>
            <Typewriter
              text="Ciao,"
              delay={100}
              onComplete={() => setLine1Done(true)}
            />
          </SlideTitle>
          {line1Done && (
            <SlideTitle>
              <Typewriter
                text="sono Simo"
                delay={80}
                onComplete={() => setLine2Done(true)}
              />
            </SlideTitle>
          )}
        </div>

        {line2Done && (
          <FadeIn delay={200} className="slide-content max-w-xl">
            <p>sono un dev a cui piace parlare con altri dev</p>
            <p>mi piace qualche stack</p>
          </FadeIn>
        )}
      </div>
    </SlideContainer>
  );
}
