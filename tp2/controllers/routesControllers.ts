import { Request, Response } from "express";
import userUI from "../interfaces/userInterface"
import userModel from "../models/userModel";

export default class routes {
  async getRoute(req: Request, res: Response) {
    const { email, password } = req.body as userUI
    const foundUser = await userModel.findOne({ email, password })
    res.status(foundUser ? 200 : 404).json({ message: foundUser ?? `account not found` })
  }

    async postRoute(req: Request, res: Response){
      const { email, password } = req.body as userUI;
      const createdUser = await userModel.create({email, password})
      res.status(201).json({message: createdUser})
    }
    async deleteRoute(req: Request, res: Response){
        const { email, password } = req.body as userUI;
        const deletedUser = await userModel.findOneAndDelete({email, password})
        res.json({message: deletedUser})
    }
    async updateRoute(req: Request, res: Response){
      const { email, password, newEmail, newPassword } = req.body as userUI&{newEmail: string, newPassword: string};
      const deletedUser = await userModel.findOneAndUpdate({email, password}, {email: newEmail, password: newPassword})
      res.json({message: deletedUser})
    }
    
}
