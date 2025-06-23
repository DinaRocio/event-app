import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  time: z.string().min(1),
  location: z.string().min(1),
  template: z.enum(["template1", "template2"]),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
