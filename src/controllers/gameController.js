import Review from "../models/Review.js";

export const getGameStats = async (req, res) => {
  try {
    const reviews = await Review.find();

    if (!reviews.length) {
      return res.status(200).json({
        totalGames: 0,
        completedGames: 0,
        averageRating: 0,
        totalHours: 0,
      });
    }

    const uniqueGames = new Set(reviews.map((r) => r.gameTitle)).size;

    const avgRating =
      reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;

    const totalHours = reviews.length * 10;

    res.json({
      totalGames: uniqueGames,
      completedGames: Math.floor(uniqueGames / 2),
      averageRating: Number(avgRating.toFixed(1)),
      totalHours,
    });
  } catch (error) {
    console.error("❌ Error al obtener estadísticas:", error);
    res.status(500).json({ message: "Error al calcular estadísticas", error });
  }
};
