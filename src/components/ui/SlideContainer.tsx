import { ReactNode } from "react";
import { SlideFooter } from "./SlideFooter";
import { SlideNavigation } from "./SlideNavigation";
import { SlideToolbar } from "./SlideToolbar";

interface SlideContainerProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides?: number;
}

export function SlideContainer({
  children,
  slideNumber,
  totalSlides = 3,
}: SlideContainerProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white">
      <SlideNavigation currentSlide={slideNumber} totalSlides={totalSlides} />
      <SlideToolbar />
      <div className="flex-1 p-16">{children}</div>
      <SlideFooter slideNumber={slideNumber} />
    </div>
  );
}
