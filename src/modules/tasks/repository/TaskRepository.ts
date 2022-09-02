import { prisma } from "../../../config/prismaClient";
import { ITaskDTO } from "../dtos/ITask";

export class TaskRepository {
  async createTask(task: ITaskDTO) {
    return prisma.task.create({
      data: task,
    });
  }
  async save(task: ITaskDTO) {
    return prisma.task.update({
      where: {
        id: task.id,
      },
      data: task,
    });
  }
  async delete(id: number) {
    return prisma.task.delete({
      where: {
        id,
      },
    });
  }
  async findById(id: number) {
    return prisma.task.findUnique({
      where: {
        id,
      },
    });
  }
  async findByTitle({ title }: ITaskDTO) {
    return prisma.task.findFirst({
      where: {
        title,
      },
    });
  }
  async findAll() {
    return prisma.task.findMany();
  }
}
