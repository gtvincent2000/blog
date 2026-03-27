"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Props = {
  href: string;
  heroImage: string;
  title: string;
  children: React.ReactNode;
};

export default function AlbumTransitionOverlay({
  href,
  heroImage,
  title,
  children,
}: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Small delay so the overlay becomes visible before navigation
    setTimeout(() => {
      router.push(href);
    }, 120);
  };

  return (
    <>
      <button onClick={handleClick} className="block w-full text-left">
        {children}
      </button>

      {isLoading && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover blur-md scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
            <div className="mb-6 h-14 w-14 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            <h1 className={`${playfair.className} text-3xl sm:text-4xl`}>
              Opening album...
            </h1>
            <p className="mt-3 max-w-md text-sm text-white/75 sm:text-base">
              Loading images and preparing the gallery.
            </p>
          </div>
        </div>
      )}
    </>
  );
}