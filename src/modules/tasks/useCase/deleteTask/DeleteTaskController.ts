import { Request, Response } from "express";

import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const idInt = parseInt(id, 10);
    const deleteTaskUseCase = new DeleteTaskUseCase();
    await deleteTaskUseCase.execute(idInt);
    return res.status(200).send();
  }
}
