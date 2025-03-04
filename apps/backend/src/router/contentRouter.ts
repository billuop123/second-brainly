import express from "express";
import Content from "@repo/db/contentSchema";
import {LinkModel} from "@repo/db/linkSchema"
import { randomString } from "../utils";
import User from "@repo/db/userSchema";
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
  } catch (err:any) {
    console.log(err.message)
    return res.status(500).json({
      message: "failed to get content"+err.message,
    });
  }
});
router.get("/", async (req: any, res: any) => {
  try {
    const content = await Content.find({
      userId: req.userId,
    }).populate("userId", "name ");
    return res.status(200).json({
      content,
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
router.post("/share",async (req:any,res:any)=>{
  const {share}=req.body;
  const hash=randomString(10)
  try{
  if(share){
    const existingLink=await LinkModel.findOne({
      userId:req.userId
    })
    if(existingLink){
      return res.json({
        hash:existingLink.hash
      })
    }
    const link=await LinkModel.create({
      userId:req.userId,
      hash
    })
  }else{
   await  LinkModel.deleteOne({
      userId:req.userId
    })
  }
  return res.json({
    link:`/share/${hash}`,
    message:"Updated shareable link"
  })}
  catch(err){
    return res.json({
      message:'Error sending request'
    })
  }
})

export default router;
