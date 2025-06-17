import { customAlphabet } from "nanoid";
import slugify from "slugify";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 6);

export function generateSlugs(title: string) {
  const baseSlug = slugify(title, { lower: true, strict: true });

  return {
    publicSlug: `${baseSlug}`,
    adminSlug: `${baseSlug}-${nanoid()}`,
  };
}
