import express from "express";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getReviews);         // READ
router.post("/", createReview);      // CREATE
router.put("/:id", updateReview);    // UPDATE
router.delete("/:id", deleteReview); // DELETE

export default router;
