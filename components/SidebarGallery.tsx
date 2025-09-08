"use client";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  width?: number;
  height?: number;
};

type Props = {
  items?: GalleryItem[];
  onOpen?: (item: GalleryItem) => void;
};

export default function SidebarGallery({ items = [], onOpen }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="mt-200">
      <aside aria-label="Image gallery" className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800">
          In Pictures
        </h2>

        <div className="grid gap-6">
          {items.map((it, idx) => (
            <figure key={idx} className={`cursor-zoom-in ${it.className || ""}`}>
              <button
                type="button"
                className="block w-full text-left"
                onClick={() => onOpen?.(it)}
              >
                {/* Uniform thumbnail box (cropped). Adjust height as you like. */}
                <div className="relative w-full h-44 sm:h-60 overflow-hidden rounded-md border thumb">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 320px, 100vw"
                    priority={idx === 0}
                  />
                </div>
              </button>

              {/* 2-line caption clamp without plugin */}
              <figcaption className="mt-2 text-xs text-zinc-600 leading-5 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-h-[2.5rem]">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </aside>
    </div>
  );
}
