import express from "express";
import { sendPosts } from "../controllers/postRoutes.js";

const router = express.Router();

router.get("/", sendPosts);

export default router;
