"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import type { GalleryItem } from "@/types";

type ArtworkLightboxProps = {
  item: GalleryItem;
  onClose: () => void;
};

export function ArtworkLightbox({ item, onClose }: ArtworkLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(true);

  useEffect(() => {
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artwork-preview-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/55"
        aria-label="Close artwork preview"
        onClick={onClose}
      />

      <div className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[1.8rem] bg-paper shadow-[0_20px_50px_rgb(74_46_30_/_0.25)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[240px] w-full bg-ink/5 md:min-h-[420px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-magenta">
            {item.categoryLabel}
          </p>
          <h2
            id="artwork-preview-title"
            className="mt-2 font-heading text-2xl font-semibold text-ink sm:text-3xl"
          >
            {item.title}
          </h2>
          {item.description ? (
            <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
              {item.description}
            </p>
          ) : null}
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm ring-1 ring-ink/10"
          aria-label="Close preview"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
