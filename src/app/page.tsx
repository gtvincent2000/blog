import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import YearDropdownList from "../../components/YearDropdownList";
import AlbumTransitionOverlay from "../../components/AlbumTransitionOverlay";

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
    description:
      "Quiet streets, temples, and small moments that defined our time in Kyoto.",
  },
  {
    title: "Engagement in Kyoto",
    slug: "engagement-in-kyoto",
    year: "2025",
    coverImage: "/images/albums/engagement/engagement-in-kyoto-cover.jpg",
    description:
      "A romantic visual story of our engagement in the beautiful city of Kyoto.",
  },
  {
    title: "Bustling Tokyo",
    slug: "bustling-tokyo",
    year: "2025",
    coverImage: "/images/albums/tokyo/tokyo-cover.jpg",
    description: "Busy streets, skyline views, and vibrant energy.",
  },
];

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
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-black/45" />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1
            className={`${playfair.className} mb-6 text-4xl font-extrabold tracking-wide sm:text-6xl md:text-7xl`}
          >
            Welcome to Our Story
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-2xl">
            A growing collection of moments, places, and memories told through
            photographs and the stories behind them.
          </p>
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
            we have seen, and the small details that made each experience
            meaningful. Part gallery and part journal, it is a record of our
            journey as it unfolds.
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
              A few highlighted collections that capture especially meaningful
              moments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredAlbums.map((album, index) => (
              <div key={album.slug}>
                <AlbumTransitionOverlay
                  href={`/albums/${album.slug}`}
                  heroImage={album.coverImage}
                  title={album.title}
                >
                  <div className="group block overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm transition hover:bg-black/40">
                    
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">
                        {album.year}
                      </p>
                      <h3 className={`${playfair.className} mb-3 text-2xl font-semibold`}>
                        {album.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                        {album.description}
                      </p>
                    </div>

                  </div>
                </AlbumTransitionOverlay>
              </div>
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
              Explore albums by year, with each collection opening into its own
              visual story.
            </p>
          </div>

          <YearDropdownList />
        </div>
      </section>
    </main>
  );
}