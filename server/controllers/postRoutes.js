import express from "express";
import Info from "../models/information.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await Info.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: errorr.message });
  }
};

export const createPosts = async (req, res) => {
  const { name, phoneNumber, email, hobbies } = req.body;
  console.log(name, phoneNumber, email, hobbies);

  const newPost = Info({ name, phoneNumber, email, hobbies });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: errorr.message });
  }
};

export default router;
