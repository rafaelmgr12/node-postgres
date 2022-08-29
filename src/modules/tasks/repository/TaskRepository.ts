import { prisma } from "../../../config/prismaClient";
import { ITaskDTO } from "../dtos/ITask";

export class TaskRepository {
  async indById({ id }: ITaskDTO) {
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
