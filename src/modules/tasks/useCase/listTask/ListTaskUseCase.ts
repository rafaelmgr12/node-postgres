import { ITaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class ListTaskUseCase {
  async execute({ id, title, description }: ITaskDTO) {
    const taskRepository = new TaskRepository();
    console.log(id, title, description);
    if (id === undefined || title === undefined || description === undefined) {
      const tasks = await taskRepository.findAll();
      return tasks;
    }
    return null;
  }
}
