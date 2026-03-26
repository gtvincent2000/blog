"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Album = {
  title: string;
  slug: string;
  year: string;
  coverImage: string;
  description?: string;
};

const featuredAlbums: Album[] = [
  {
    title: "Kyoto Days",
    slug: "kyoto-days",
    year: "2025",
    coverImage: "/images/albums/kyoto/kyoto-days-cover.jpg",
    description: "Quiet streets, temples, and small moments that defined our time in Kyoto.",
  },
  {
    title: "Engagement in Kyoto",
    slug: "engagement-in-kyoto",
    year: "2025",
    coverImage: "/images/albums/engagement/engagement-in-kyoto-cover.jpg",
    description: "A romantic visual story of our engagement in the beautiful city of Kyoto.",
  },
  {
    title: "Bustling Tokyo",
    slug: "bustling-tokyo",
    year: "2025",
    coverImage: "/images/albums/tokyo/tokyo-cover.jpg",
    description: "Busy streets, skyline views, and vibrant energy.",
  },
  
];

const yearAlbums: Record<string, Album[]> = {
  "2026": [
    {
      title: "Texas Tulips",
      slug: "texas-tulips",
      year: "2026",
      coverImage: "/images/albums/texas-tulips-cover.jpg",
    },
  ],
  "2025": [
    {
      title: "Kyoto Days",
      slug: "kyoto-days",
      year: "2025",
      coverImage: "/images/albums/kyoto/kyoto-days-cover.jpg",
    },
    {
      title: "Engagement in Kyoto",
      slug: "engagement-in-kyoto",
      year: "2025",
      coverImage: "/images/albums/engagement/engagement-in-kyoto-cover.jpg",
    },
    {
      title: "Bustling Tokyo",
      slug: "bustling-tokyo",
      year: "2025",
      coverImage: "/images/albums/tokyo/tokyo-cover.jpg",
    },
    {
      title: "Osaka Nights",
      slug: "osaka",
      year: "2025",
      coverImage: "/images/albums/osaka/osaka-cover.jpg",
    },
  ],
  "2024": [
    {
      title: "City Evenings",
      slug: "city-evenings",
      year: "2024",
      coverImage: "/images/albums/city-evenings-cover.jpg",
    },
    {
      title: "Weekend Escapes",
      slug: "weekend-escapes",
      year: "2024",
      coverImage: "/images/albums/weekend-escapes-cover.jpg",
    },
  ],
};

function AlbumRow({ album }: { album: Album }) {
  return (
    <Link
      href={`/albums/${album.slug}`}
      className="group grid grid-cols-[72px_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
    >
      <div className="relative h-18 w-18 overflow-hidden rounded-xl">
        <Image
          src={album.coverImage}
          alt={album.title}
          fill
          sizes="72px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-center text-center">
        <h4 className="text-base sm:text-lg font-medium tracking-wide text-white">
          {album.title}
        </h4>
      </div>
    </Link>
  );
}

function YearDropdown({
  year,
  albums,
  defaultOpen = false,
}: {
  year: string;
  albums: Album[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className={`${playfair.className} text-2xl text-white`}>{year}</span>
        <ChevronDown
          className={`h-5 w-5 text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <div className="space-y-3 border-t border-white/10 px-4 py-4">
          {albums.map((album) => (
            <AlbumRow key={album.slug} album={album} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="fixed inset-0 -z-20">
        <Image
          src="/images/homepage/kyoto_street.jpg"
          alt="Kyoto street background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-black/45" />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`${playfair.className} mb-6 text-4xl font-extrabold tracking-wide sm:text-6xl md:text-7xl`}
          >
            Welcome to Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-2xl"
          >
            A growing collection of moments, places, and memories told through
            photographs and the stories behind them.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/30 p-8 text-center backdrop-blur-sm sm:p-12">
          <h2
            className={`${playfair.className} mb-6 text-3xl font-bold tracking-wide sm:text-5xl`}
          >
            About Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            This space is meant to preserve the places we have been, the things
            we have seen, and the small details that made each experience meaningful.
            Part gallery and part journal, it is a record of our journey as it unfolds.
          </p>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2
              className={`${playfair.className} mb-4 text-3xl font-bold tracking-wide sm:text-5xl`}
            >
              Featured Albums
            </h2>
            <p className="mx-auto max-w-2xl text-white/85 sm:text-lg">
              A few highlighted collections that capture especially meaningful moments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredAlbums.map((album, index) => (
              <motion.div
                key={album.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/albums/${album.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm transition hover:bg-black/40"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      key={album.slug}
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">
                      {album.year}
                    </p>
                    <h3
                      className={`${playfair.className} mb-3 text-2xl font-semibold`}
                    >
                      {album.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                      {album.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Year */}
      <section className="relative px-4 pb-28 pt-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2
              className={`${playfair.className} mb-4 text-3xl font-bold tracking-wide sm:text-5xl`}
            >
              Browse by Year
            </h2>
            <p className="mx-auto max-w-2xl text-white/85 sm:text-lg">
              Explore albums by year, with each collection opening into its own visual story.
            </p>
          </div>

          <div className="space-y-5">
            {Object.entries(yearAlbums)
              .sort((a, b) => Number(b[0]) - Number(a[0]))
              .map(([year, albums], index) => (
                <YearDropdown
                  key={year}
                  year={year}
                  albums={albums}
                  defaultOpen={index === 0}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}