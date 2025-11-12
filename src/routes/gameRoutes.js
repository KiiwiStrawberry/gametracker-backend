import express from "express";
import { getGameStats } from "../controllers/gameController.js";

const router = express.Router();

router.get("/stats", getGameStats);

export default router;
