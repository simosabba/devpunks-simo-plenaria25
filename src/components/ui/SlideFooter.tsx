import Image from "next/image";

interface SlideFooterProps {
  slideNumber: number;
}

export function SlideFooter({ slideNumber }: SlideFooterProps) {
  return (
    <footer className="flex items-center justify-between px-6 py-4">
      <span className="text-lg text-black">{slideNumber}</span>
      <Image
        src="/logo.svg"
        alt="DEVPUNKS"
        width={120}
        height={20}
      />
    </footer>
  );
}
