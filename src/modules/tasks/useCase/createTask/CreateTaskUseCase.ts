import { prisma } from "../../../../config/prismaClient";
import { ITaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class CreateTaskUseCase {
  async execute({ title, description }: ITaskDTO) {
    const taskRepository = new TaskRepository();
    const taskAlreadyExists = await taskRepository.findByTitle({
      title,
      description,
    });
    if (taskAlreadyExists) {
      throw new Error("Task already exists!");
    }

    return prisma.task.create({
      data: {
        title,
        description,
      },
    });
  }
}
