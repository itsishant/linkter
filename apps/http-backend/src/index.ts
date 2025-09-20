import express from "express";
import { JWT_SECRET } from "@repo/backend-common/src/index";

export class AuthController {
  static async SignUp(req: Request, res: Response) {

    // all db calls there through prisma orm
    const w= JWT_SECRET;
  }

  static async SignInn(req: Request, res: Response) {
    
    // all db checks over there through prisma orm
  }
}
