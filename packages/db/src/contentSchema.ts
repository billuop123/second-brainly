import mongoose from "mongoose";
const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["document", "tweet", "youtube", "link"],
    required: [true, "Name is required"],
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  tags: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  },
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});
const Content = mongoose.model("Content", contentSchema);
export default Content;
