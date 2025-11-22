import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    gameId: {
      type: String,
      required: true
    },
    gameTitle: {
      type: String,
      required: [true, "El título del juego es obligatorio"],
      trim: true,
    },
    text: {
      type: String,
      required: [true, "La reseña no puede estar vacía"],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "La calificación es obligatoria"],
      min: [1, "La calificación mínima es 1"],
      max: [5, "La calificación máxima es 5"],
    },
    user: {
      type: String,
      default: "Anónimo",
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false, // 🔹 evita el campo "__v"
  }
);

export default mongoose.model("Review", reviewSchema);
