import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const authMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization || "";
  try {
    const decoded = jwt.verify(token, "somesecret");
    if (decoded) {
      //@ts-ignore
      req.userId = decoded.userId;

      return next();
    }
  } catch (err) {
    return res.status(400).json({
      message: "jwt is not verified",
      err,
    });
  }
};
