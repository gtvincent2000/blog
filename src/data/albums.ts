export type FeaturedStoryBlock = {
  image: string;
  title?: string;
  text: string;
};

export type AlbumMeta = {
  title: string;
  slug: string;
  year: string;
  description: string;
  coverImage: string;
  heroImage: string;
  intro: string;
  featuredStory?: FeaturedStoryBlock[];
};

export const albums: AlbumMeta[] = [
  {
    title: "Kyoto Days",
    slug: "kyoto-days",
    year: "2025",
    description:
      "Quiet streets, temples, and small moments that defined our time in Kyoto.",
    coverImage: "/images/albums/kyoto/kyoto-days-cover.jpg",
    heroImage: "/images/albums/kyoto/kyoto-days-cover.jpg",
    intro:
      "Kyoto was one of those places that felt meaningful in both its grand moments and its quiet ones.",
    featuredStory: [
      {
        image: "/images/albums/kyoto/01-arrival.jpg",
        title: "A Quiet Beginning",
        text: "After departing Kyoto station, we began the walk to our accommodation. To our surprise, we found a yuzu tree in the courtyard of a shrine along our route.",
      },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug);
}