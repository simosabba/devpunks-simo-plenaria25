import { SlideContainer, SlideTitle, HighlightText } from "@/components/ui";

export default function Slide1() {
  return (
    <SlideContainer slideNumber={1}>
      <div className="flex h-full items-start gap-24 pt-32">
        <div className="flex-shrink-0">
          <SlideTitle>Chi Sono</SlideTitle>
        </div>

        <div className="slide-content max-w-xl">
          <p>
            <HighlightText className="font-bold underline">
              Presentarti brevemente
            </HighlightText>
            :
          </p>
          <p>
            ruolo, competenze chiave e{" "}
            <span className="underline">stack</span> tecnologico..
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
