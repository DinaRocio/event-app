import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/event.routes"; // 👈 esto sí importa un Router

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", eventRoutes);

// app.get("/", (_req, res) => res.send("Backend up"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
