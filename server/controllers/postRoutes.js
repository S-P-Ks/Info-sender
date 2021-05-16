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
  const post = req.body;
  console.log("==>");
  console.log(post);

  const Posts = [];

  let format = ``;

  for (let i = 0; i < post.length; i++) {
    const pos = await Info.findById(post[i]);
    console.log(pos);
    format += `
    <li>
      <div>${pos.name}</div><br>
      <div>${pos.email}</div><br>
      <div>${pos.phoneNumber}</div><br>
      <div>${pos.hobbies}</div><br>
    </li>
    `;
  }

  console.log(format);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  var mailOptions = {
    from: "10jMourinho@gmail.com",
    to: "hr.redpositive@gmail.com",
    subject: "Just sending mails",
    html: `
      <ol>
        ${format}
      </ol>
    `,
  };
  console.log("Sending Email");
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("ERROR");
      console.log(error);
      return { message: "Error Happened" };
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default router;
