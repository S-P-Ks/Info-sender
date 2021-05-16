import express from "express";
import {
  getPosts,
  createPosts,
  getPost,
  deletePost,
  sendPosts,
  updatePost,
} from "../controllers/postRoutes.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPosts);
router.put("/send", sendPosts);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
