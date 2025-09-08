"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function Lightbox({ src, alt, caption, isOpen, onClose }: Props) {
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  if (!isOpen) return null;

  const ratio = dims ? dims.w / dims.h : 16 / 9;
  const w = `min(90vw, calc(85vh * ${ratio}))`;
  const h = `min(85vh, calc(90vw / ${ratio}))`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <figure
        className="inline-block"
        style={{ width: w }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative rounded-t-md overflow-hidden"
          style={{ width: w, height: h }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
            onLoadingComplete={(img) =>
              setDims({ w: img.naturalWidth, h: img.naturalHeight })
            }
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition"
          >
            ×
          </button>
        </div>

        <figcaption className="w-full bg-black/60 text-white px-3 py-2 rounded-b-md text-xs sm:text-sm leading-5 break-words">
          <strong className="mr-2">Caption:</strong>
          {caption || alt}
        </figcaption>
      </figure>
    </div>
  );
}
