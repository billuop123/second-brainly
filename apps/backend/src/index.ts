import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => console.log("Connected successfully to the database"))
  .catch((err) => console.error("Database connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Port is running on ${process.env.PORT}`);
});
