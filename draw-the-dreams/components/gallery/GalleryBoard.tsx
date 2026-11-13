"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArtworkLightbox } from "@/components/gallery/ArtworkLightbox";
import { Button } from "@/components/ui/Button";
import { filterGalleryItems, galleryFilters, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryItem } from "@/types";

const heightClass = {
  short: "h-52 sm:h-56",
  medium: "h-72 sm:h-80",
  tall: "h-96 sm:h-[28rem]",
};

export function GalleryBoard() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => filterGalleryItems(galleryItems, filter),
    [filter],
  );

  return (
    <div>
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter artwork by category"
      >
        {galleryFilters.map((item) => {
          const active = filter === item.id;

          return (
            <Button
              key={item.id}
              type="button"
              variant={active ? "primary" : "outline"}
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
              className={cn("shadow-none", !active && "bg-white/80")}
            >
              {item.label}
            </Button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <div className="studio-card mt-10 rounded-[1.8rem] px-6 py-16 text-center ring-1 ring-ink/10">
          <p className="font-hand text-2xl text-magenta">Nothing here yet</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">
            No artwork in this category right now.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-muted">
            Try another filter, or check back when original pieces are added to
            this part of the gallery.
          </p>
          <div className="mt-6">
            <Button type="button" variant="secondary" onClick={() => setFilter("all")}>
              View all artwork
            </Button>
          </div>
        </div>
      ) : (
        <ul className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
          {items.map((item) => (
            <li key={item.id} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="studio-card group w-full overflow-hidden rounded-[1.6rem] text-left ring-1 ring-ink/10 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-magenta"
                aria-label={`Open larger preview of ${item.title}`}
              >
                <div className={cn("relative w-full overflow-hidden", heightClass[item.height])}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {item.categoryLabel}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected ? (
        <ArtworkLightbox item={selected} onClose={() => setSelected(null)} />
      ) : null}
    </div>
  );
}
