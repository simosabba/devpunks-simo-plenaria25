import { ReactNode } from "react";
import { SlideFooter } from "./SlideFooter";

interface SlideContainerProps {
  children: ReactNode;
  slideNumber: number;
}

export function SlideContainer({ children, slideNumber }: SlideContainerProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white">
      <div className="flex-1 p-16">{children}</div>
      <SlideFooter slideNumber={slideNumber} />
    </div>
  );
}
