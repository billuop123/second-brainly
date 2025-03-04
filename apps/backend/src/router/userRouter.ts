import express from "express";
import User from "@repo/db/userSchema";
import z from "zod";
import jwt from "jsonwebtoken";
const userSchema = z.object({
  name: z.string(),
  password: z.string().min(6),
});
const router = express.Router();
router.post("/signup", async (req: any, res: any) => {
  const body = req.body;
  const validationResult = userSchema.safeParse(body);
  if (!validationResult.success) {
    return res.status(411).json({
      message: "Inputs are not in the required format",
    });
  }
  try {
    const existingUser = await User.find({
      name: body.name,
      password: body.password,
    });

    if (existingUser && existingUser.length>0) {
      return res.status(403).json({
        message: "User already exists",
      });
    }
    const user = await User.create({
      name: body.name,
      password: body.password,
    });
    return res.status(200).json({
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
router.post("/signin", async (req: any, res: any) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign({ userId: user._id }, "somesecret", {
        expiresIn: "3d",
      });
      return res.status(200).json({
        token,
        message: "signin successfully",
      });
    } else {
      return res.status(400).json({
        message: "wrong email and password",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "signin failed",
    });
  }
});
export default router;
