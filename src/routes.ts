import { Router } from "express";

import { CreateTaskController } from "./modules/tasks/useCase/createTask/CreateTaskController";
import { ListTaskController } from "./modules/tasks/useCase/listTask/ListTaskController";
import { UpdateTaskController } from "./modules/tasks/useCase/updateTask/UpdateTaskController";

const routes = Router();

// get
const listTaskController = new ListTaskController();

// post
const createTaskController = new CreateTaskController();

// put
const updateTaskController = new UpdateTaskController();

routes.get("/tasks", listTaskController.handle);
routes.post("/tasks", createTaskController.handle);
routes.put("/tasks/:id", updateTaskController.handle);

export { routes };
