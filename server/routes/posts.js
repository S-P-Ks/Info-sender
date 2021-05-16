import express from "express";
import {
  getPosts,
  createPosts,
  getPost,
  deletePost,
  updatePost,
} from "../controllers/postRoutes.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPosts);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
