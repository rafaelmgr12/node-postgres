import { ICreateTaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class CreateTaskUseCase {
  async execute({ title, description }: ICreateTaskDTO) {
    const taskRepository = new TaskRepository();
    const taskAlreadyExists = await taskRepository.findByTitle({ title });
    if (taskAlreadyExists) {
      throw new Error("Task already exists!");
    }
    const task = await taskRepository.createTask({
      title,
      description,
    });

    return task;
  }
}
