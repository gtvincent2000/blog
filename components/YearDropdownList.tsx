import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Album = {
  title: string;
  slug: string;
  year: string;
  coverImage: string;
};

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
        <h4 className="text-base font-medium tracking-wide text-white sm:text-lg">
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
  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm"
    >
      <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-left list-none">
        <span className={`${playfair.className} text-2xl text-white`}>
          {year}
        </span>

        <ChevronDown className="h-5 w-5 text-white transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <div className="space-y-3 border-t border-white/10 px-4 py-4">
        {albums.map((album) => (
          <AlbumRow key={album.slug} album={album} />
        ))}
      </div>
    </details>
  );
}

export default function YearDropdownList() {
  return (
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
  );
}