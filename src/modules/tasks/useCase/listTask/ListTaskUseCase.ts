import { ITaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class ListTaskUseCase {
  async execute({ id, title, description }: ITaskDTO) {
    const taskRepository = new TaskRepository();
    if (id || title || description) {
      const tasks = await taskRepository.findAll();
      return tasks;
    }
    return null;
  }
}
