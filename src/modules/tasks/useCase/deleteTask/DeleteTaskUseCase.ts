import { TaskRepository } from "../../repository/TaskRepository";

export class DeleteTaskUseCase {
  async execute(id: number) {
    const taskRepository = new TaskRepository();
    const task = taskRepository.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    await taskRepository.delete(id);
  }
}
