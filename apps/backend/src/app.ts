import express from "express";
import userRouter from "./router/userRouter";
import contentRouter from "./router/contentRouter";
import { authMiddleware } from "./authMiddleware";
import { LinkModel } from "@repo/db/linkSchema";
import Content from "@repo/db/contentSchema";
import User from "@repo/db/userSchema";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/v2/users", userRouter);

app.get("/api/v2/content/:sharelink",async(req:any,res:any)=>{
    const hash=req.params.sharelink
    const link=await LinkModel.findOne({
      hash
    })
    if(!link){
      return res.json({
        message:"This is not the valid id"
      })
    }
    const content=await Content.findOne({
      userId:link.userId
    })
    const user=await User.findOne({
      _id:link.userId
    })
    return res.json({
      username:user?.name,
      content
    })
  })
app.use("/api/v2/content", authMiddleware as any, contentRouter);

export default app;
