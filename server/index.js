import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/posts", postRoutes);

const mongoose_connection_url =
  "mongodb+srv://ShubhamKumbhare:apple1234@cluster0.mdr7v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongoose_connection_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  })
  .catch((error) => console.log(error));
