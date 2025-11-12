import express from "express";
import cors from "cors";

const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/MichaelStibBuitragoMoreano",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ Conexión a la base de datos MongoDB exitosa"))
.catch(error => console.error("❌ Error al conectar a la base de datos MongoDB:", error));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let reviews = [
  { id: 1, game: "The Legend of Zelda", review: "Excelente juego", rating: 5 },
  { id: 2, game: "God of War", review: "Historia épica", rating: 4 },
];

let stats = {
  totalGames: 2,
  avgRating: 4.5,
  totalHours: 70,
};

app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

app.post("/api/reviews", (req, res) => {
  const newReview = { id: Date.now(), ...req.body };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

app.get("/api/games/stats", (req, res) => {
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor backend escuchando en http://localhost:${PORT}`);
});
