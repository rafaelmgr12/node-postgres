import { Request, Response } from "express";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title, description } = request.body;

    const createTaskUseCase = new CreateTaskUseCase();
    const task = await createTaskUseCase.execute({ title, description });

    return response.status(201).json(task);
  }
}
