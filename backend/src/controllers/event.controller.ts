// src/controllers/event.controller.ts
import { Request, Response } from "express";
import { createEventSchema } from "../models/event.model";
import { createEvent } from "../services/event.service";

export async function handleCreateEvent(req: Request, res: Response) {
  try {
    const parsed = createEventSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }

    const slugs = await createEvent(parsed.data);
    return res.status(201).json(slugs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
