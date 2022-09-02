import { Request, Response } from "express";

import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const idInt = parseInt(id, 10);
    const { title, description, completed } = req.body;
    const updateTaskUseCase = new UpdateTaskUseCase();
    await updateTaskUseCase.execute({
      id: idInt,
      title,
      description,
      completed,
    });
    return res.status(204).send();
  }
}
