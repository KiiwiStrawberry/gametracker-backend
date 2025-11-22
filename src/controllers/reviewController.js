import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener reseñas", error });
  }
};

export const createReview = async (req, res) => {
  try {
    const newReview = Review.find().sort({ createdAt: -1 });
    await newReview.save();
    res.status(200).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error al crear reseña", error });
  }
};
