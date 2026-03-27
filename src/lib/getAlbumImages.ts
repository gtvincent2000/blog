import fs from "fs";
import path from "path";
import sharp from "sharp";

export type AlbumImage = {
  src: string;
  filename: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait" | "square";
};

const albumFolderMap: Record<string, string> = {
  "kyoto-days": "kyoto",
  "engagement-in-kyoto": "engagement",
  "bustling-tokyo": "tokyo",
  osaka: "osaka",
  "texas-tulips": "texas-tulips",
};

export async function getAlbumImages(slug: string): Promise<AlbumImage[]> {
  const folder = albumFolderMap[slug];
  if (!folder) return [];

  const absolutePath = path.join(process.cwd(), "public", "images", "albums", folder);

  if (!fs.existsSync(absolutePath)) return [];

  const files = fs
    .readdirSync(absolutePath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  const results = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(absolutePath, file);

      const metadata = await sharp(filePath).metadata();

      // Uses EXIF-aware dimensions when available
      const width = metadata.autoOrient?.width ?? metadata.width ?? 1000;
      const height = metadata.autoOrient?.height ?? metadata.height ?? 1000;

      let orientation: "landscape" | "portrait" | "square" = "square";

      if (width > height) orientation = "landscape";
      else if (height > width) orientation = "portrait";

      return {
        filename: file,
        src: `/images/albums/${folder}/${file}`,
        width,
        height,
        orientation,
      };
    })
  );

  return results;
}