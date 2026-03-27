import { notFound } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { getAlbumBySlug } from "@/data/albums";
import { getAlbumImages } from "@/lib/getAlbumImages";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type AlbumPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;

  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  const images = getAlbumImages(slug);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={album.heroImage}
          alt={album.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="fixed inset-0 z-10 bg-black/55" />

      {/* Page content */}
      <div className="relative z-20">
        {/* Hero content */}
        <section className="flex min-h-screen items-end px-6">
          <div className="mx-auto w-full max-w-6xl pb-16">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/75">
              {album.year}
            </p>
            <h1 className={`${playfair.className} text-4xl font-bold sm:text-6xl`}>
              {album.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {album.description}
            </p>
          </div>
        </section>

        {/* Intro / story section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              {album.intro}
            </p>
          </div>
        </section>

        {/* Featured story blocks */}
        {album.featuredStory && album.featuredStory.length > 0 && (
          <section className="px-6 pb-20">
            <div className="mx-auto flex max-w-5xl flex-col gap-16">
              {album.featuredStory.map((block, index) => (
                <div
                  key={`${block.image}-${index}`}
                  className="grid gap-8 md:grid-cols-2 md:items-center"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Image
                      src={block.image}
                      alt={block.title ?? album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    {block.title && (
                      <h2 className={`${playfair.className} mb-4 text-3xl font-semibold`}>
                        {block.title}
                      </h2>
                    )}
                    <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                      {block.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery grid */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <h2 className={`${playfair.className} mb-8 text-3xl font-semibold sm:text-4xl`}>
              Gallery
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={image.src}
                    alt={album.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}