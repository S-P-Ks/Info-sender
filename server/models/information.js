import mongoose from "mongoose";

const InfoSchema = mongoose.Schema({
  name: String,
  phoneNumber: Number,
  email: String,
  hobbies: [String],
});

const Info = new mongoose.model("Info", InfoSchema);

export default Info;
