import Review from "../models/Review.js";

// Obtener todas las reseñas
export const getReviews = async (req, res) => {
  try {
    const filter = req.query.gameId ? { gameId: req.query.gameId } : {};

    const reviews = await Review.find(filter).sort({ createdAt: -1 });

   return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener reseñas", error });
  }
};

// Crear reseña
export const createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    return res.status(201).json(newReview);
  } catch (error) {
    return res.status(400).json({ message: "Error al crear reseña", error });
  }
};

// Actualizar reseña
export const updateReview = async (req, res) => {
  try {
    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Reseña no encontrada" });

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(400).json({ message: "Error al actualizar reseña", error });
  }
};

// Eliminar reseña
export const deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Reseña no encontrada" });

    return res.status(200).json({ message: "Reseña eliminada" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar reseña", error });
  }
};
