"use client";

import { useEffect, useState } from "react";

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const logos = [
  { name: "TypeScript", src: `${DEVICON_CDN}/typescript/typescript-original.svg`, rotate: -3, y: 0 },
  { name: "React", src: `${DEVICON_CDN}/react/react-original.svg`, rotate: 2, y: 20 },
  { name: "Next.js", src: `${DEVICON_CDN}/nextjs/nextjs-original.svg`, rotate: -1, y: -10 },
  { name: "Node.js", src: `${DEVICON_CDN}/nodejs/nodejs-original.svg`, rotate: 4, y: 15 },
  { name: "NestJS", src: `${DEVICON_CDN}/nestjs/nestjs-original.svg`, rotate: -2, y: -5 },
  { name: ".NET", src: `${DEVICON_CDN}/dotnetcore/dotnetcore-original.svg`, rotate: 3, y: 25 },
  { name: "Terraform", src: `${DEVICON_CDN}/terraform/terraform-original.svg`, rotate: -4, y: 5 },
  { name: "AWS", src: `${DEVICON_CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`, rotate: 1, y: -15 },
  { name: "Azure", src: `${DEVICON_CDN}/azure/azure-original.svg`, rotate: -2, y: 10 },
  { name: "Claude", src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg", rotate: 3, y: -8, invert: true },
  { name: "Cursor", src: "https://www.cursor.com/brand/icon.svg", rotate: -3, y: 18 },
];

interface TechLogosProps {
  startDelay?: number;
  itemDelay?: number;
}

export function TechLogos({ startDelay = 0, itemDelay = 300 }: TechLogosProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= logos.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, itemDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay, itemDelay]);

  return (
    <div className="flex items-end justify-center gap-10">
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className="transition-all duration-500 ease-out"
          style={{
            opacity: index < visibleCount ? 1 : 0,
            transform: index < visibleCount
              ? `translateY(${logo.y}px) rotate(${logo.rotate}deg) scale(1)`
              : `translateY(40px) rotate(0deg) scale(0.3)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className={`h-16 w-16 object-contain ${logo.invert ? "invert" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}
