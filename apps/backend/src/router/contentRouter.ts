import express from "express";
import Content from "@repo/db/contentSchema";
import { authMiddleware } from "../authMiddleware";
const router = express.Router();
router.post("/", async (req: any, res: any) => {
  const { type, link, title, tags } = req.body;
  try {
    const content = await Content.create({
      type,
      link,
      title,
      tags,
      userId: req.userId,
    });
    return res.status(200).json({
      content,
    });
  } catch (err) {
    return res.status(500).json({
      message: "failed to get content",
    });
  }
});
router.get("/", async (req: any, res: any) => {
  try {
    const allContent = await Content.find({
      userId: req.userId,
    }).populate("userId", "name ");
    return res.status(200).json({
      allContent,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching content",
    });
  }
});
router.delete("/", async (req: any, res: any) => {
  const { id } = req.body;
  try {
    const deletedContent = await Content.deleteOne({
      _id: id,
      userId: req.userId,
    });
    return res.status(200).json({
      deletedContent,
      message: "successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: "failed to delete",
    });
  }
});
export default router;
