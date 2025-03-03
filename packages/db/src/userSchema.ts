import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});
const User = mongoose.model("User", userSchema);
export default User;
