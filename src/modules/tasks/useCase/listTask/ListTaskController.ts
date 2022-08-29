import { Request, Response } from "express";

import { ListTaskUseCase } from "./ListTaskUseCase";

export class ListTaskController {
  async handle(req: Request, res: Response) {
    const { id, title, description } = req.body;
    const listTaskUseCase = new ListTaskUseCase();
    const tasks = await listTaskUseCase.execute({ id, title, description });
    return res.json(tasks);
  }
}
