"use client"

import { useState } from "react"
import {
  SlideContainer,
  SlideTitle,
  HighlightText,
  Typewriter,
} from "@/components/ui"

export default function Slide3() {
  const [line1Done, setLine1Done] = useState(false)
  const [line2Done, setLine2Done] = useState(false)

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
                className="text-7xl"
              />
            </SlideTitle>
          )}
        </div>

        <div className="slide-content max-w-2xl">
          <p>
            <strong>1.</strong>{" "}
            <HighlightText className="font-bold underline">
              Se uso AI nel progetto
            </HighlightText>
            :
          </p>
          <p>
            Una panoramica dei casi d&apos;uso dell&apos;AI integrati nel
            progetto e dei tool/tecniche AI adottate nel progetto (ML, LLM,
            automazioni, agenti, ecc.).
          </p>
          <p>
            Benefici concreti sul progetto, ad es. riduzione del tempo di
            sviluppo, maggiore qualità del codice, miglioramento delle
            funzionalità del prodotto.
          </p>

          <p className="mt-6">
            <strong>2.</strong>{" "}
            <HighlightText className="font-bold">
              Come mi relaziono all&apos;uso dei tool dell&apos;AI
            </HighlightText>{" "}
            e cosa mi incuriosisce o mi frena nel loro utilizzo?
          </p>

          <p className="mt-6">
            <strong>3.</strong> Visione su{" "}
            <HighlightText className="font-bold">
              come l&apos;AI cambierà il lavoro degli sviluppatori
            </HighlightText>{" "}
            (automazione, pair programming avanzato, generazione di codice, test
            intelligenti).
          </p>
        </div>
      </div>
    </SlideContainer>
  )
}
