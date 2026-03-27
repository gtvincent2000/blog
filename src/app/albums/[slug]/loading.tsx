"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { getAlbumBySlug } from "@/data/albums";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Loading() {
  const params = useParams();
  const slug = params.slug as string;

  const album = getAlbumBySlug(slug);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background image (blurred) */}
      {album?.heroImage && (
        <div className="absolute inset-0">
          <Image
            src={album.heroImage}
            alt="Loading background"
            fill
            priority
            sizes="100vw"
            className="object-cover blur-md scale-105"
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Center content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 h-14 w-14 animate-spin rounded-full border-2 border-white/20 border-t-white" />

        <h1 className={`${playfair.className} text-3xl sm:text-4xl`}>
          Opening album...
        </h1>

        <p className="mt-3 max-w-md text-sm text-white/75 sm:text-base">
          Loading images and preparing the gallery.
        </p>
      </div>
    </main>
  );
}