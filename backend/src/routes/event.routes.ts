// src/routes/event.routes.ts
import { Router } from "express";
import { handleCreateEvent } from "../controllers/event.controller"; // ✅ Importas solo la función

const router = Router();

router.post("/events", handleCreateEvent);

export default router;
