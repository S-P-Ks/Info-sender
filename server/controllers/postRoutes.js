import express from "express";
import Info from "../models/information.js";
import nodemailer from "nodemailer";
import Mongoose from "mongoose";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await Info.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await Info.findById(id);
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

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Info.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber, hobbies } = req.body;
  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updatedPost = { name, email, phoneNumber, hobbies, _id: id };
  await Info.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};

export const sendPosts = async (req, res) => {
  console.log(req.body);
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.user,
  //     pass: process.env.pass,
  //   },
  // });

  // console.log(transporter);

  // var mailOptions = {
  //   from: "10jMourinho@gmail.com",
  //   to: "18it.shubhamkumbhare@adit.ac.in",
  //   subject: "Just sending mails",
  //   html: `<ol>
  //       <li>Hello World</li>
  //       <li>Hello World</li>
  //       <li>Hello World</li>
  //       <li>Hello World</li>
  //       <li>Hello World</li>
  //       </ol >`,
  // };

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     return { message: "Email Sent" };
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });
};

export default router;
