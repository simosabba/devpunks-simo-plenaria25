import { SlideContainer, SlideTitle, HighlightText } from "@/components/ui";

export default function Slide2() {
  return (
    <SlideContainer slideNumber={2}>
      <div className="flex h-full items-start gap-24 pt-16">
        <div className="flex flex-shrink-0 flex-col gap-2">
          <SlideTitle>Di quale</SlideTitle>
          <SlideTitle>progetto mi</SlideTitle>
          <SlideTitle>occupo?</SlideTitle>
        </div>

        <div className="slide-content max-w-2xl">
          <p>
            <HighlightText className="font-bold">
              Descrizione del progetto
            </HighlightText>
          </p>
          <p>
            obiettivi, contesto, problemi che risolve e valore per gli utenti.
          </p>

          <p className="mt-8">
            Contributo personale: responsabilità principali, risultati ottenuti,
            impatti misurabili.
          </p>

          <p className="mt-8">
            Lavoro con altri <span className="underline">Devpunkers</span>? Se
            sì, cosa ho imparato da loro e che problemi mi hanno aiutato a
            risolvere?
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
