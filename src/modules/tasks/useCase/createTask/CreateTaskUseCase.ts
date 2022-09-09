import { ICreateTaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class CreateTaskUseCase {
  async execute({ title, description }: ICreateTaskDTO) {
    const taskRepository = new TaskRepository();
    const task = await taskRepository.createTask({
      title,
      description,
    });

    return task;
  }
}
