"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
}: SlideNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides) {
        router.push(`/s/${currentSlide + 1}`);
      } else if (e.key === "ArrowLeft" && currentSlide > 1) {
        router.push(`/s/${currentSlide - 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides, router]);

  return null;
}
