import { IUpdateTaskDTO } from "../../dtos/ITask";
import { TaskRepository } from "../../repository/TaskRepository";

export class UpdateTaskUseCase {
  async execute({ id, title, description, completed }: IUpdateTaskDTO) {
    const taskRepository = new TaskRepository();

    const task = await taskRepository.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }
    task.title = title;
    if (description) {
      task.description = description;
    }
    task.completed = completed;
    task.updated_at = new Date();
    await taskRepository.save(task);
  }
}
