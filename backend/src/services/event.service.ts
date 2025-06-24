// src/services/event.service.ts
import { prisma } from "../db";
import { CreateEventInput } from "../models/event.model";
import { generateSlugs } from "../utils/slugGenerator";

export async function createEvent(data: CreateEventInput) {
  const { title, description, date, time, location, template } = data;

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("❌ Invalid date");
  }

  const { publicSlug, adminSlug } = generateSlugs(title);
  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: parsedDate,
        time,
        location,
        template,
        publicSlug,
        adminSlug,
      },
    });
    return { publicSlug, adminSlug };
  } catch (err) {
    throw err;
  }

  return { publicSlug, adminSlug };
}
