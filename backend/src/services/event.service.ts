import { prisma } from "../db";
import { CreateEventInput } from "../models/event.model";
import { generateSlugs } from "../utils/slugGenerator";

export async function createEvent(data: CreateEventInput) {
  const { publicSlug, adminSlug } = generateSlugs(data.title);

  const event = await prisma.event.create({
    data: {
      ...data,
      publicSlug,
      adminSlug,
      date: new Date(data.date),
    },
  });

  return { publicSlug, adminSlug };
}
