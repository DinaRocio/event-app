import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config(); //carga .env
const app = express(); // crea la app de express

app.use(cors()); //permite requests desde el frontend
app.use(express.json()); //interpreta JSON en las peticiones

//Ruta de prueba
app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Backend up");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
