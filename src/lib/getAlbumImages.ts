import fs from "fs";
import path from "path";

export type AlbumImage = {
  src: string;
  filename: string;
};

const albumFolderMap: Record<string, string> = {
  "kyoto-days": "kyoto",
  "engagement-in-kyoto": "engagement",
  "bustling-tokyo": "tokyo",
  "osaka": "osaka",
  "texas-tulips": "texas-tulips",
};

export function getAlbumImages(slug: string): AlbumImage[] {
  const folder = albumFolderMap[slug];
  if (!folder) return [];

  const absolutePath = path.join(process.cwd(), "public", "images", "albums", folder);

  if (!fs.existsSync(absolutePath)) return [];

  const files = fs
    .readdirSync(absolutePath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  return files.map((file) => ({
    filename: file,
    src: `/images/albums/${folder}/${file}`,
  }));
}