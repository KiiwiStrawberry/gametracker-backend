import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import gameRoutes from "./src/routes/gameRoutes.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conexión a MongoDB Atlas exitosa"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

app.use("/api/reviews", reviewRoutes);
app.use("/api/games", gameRoutes);

app.get("/", (req, res) => {
  res.send("Servidor GameTracker en funcionamiento 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
