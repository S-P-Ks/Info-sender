import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import postRoutes from "./routes/posts.js";
import sendMailRoutes from "./routes/sendMail.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/posts", postRoutes);
app.use("/send", sendMailRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongodb_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  })
  .catch((error) => console.log(error));
