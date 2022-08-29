import { Router } from "express";

import { CreateTaskController } from "./modules/tasks/useCase/createTask/CreateTaskController";
import { ListTaskController } from "./modules/tasks/useCase/listTask/ListTaskController";

const routes = Router();

// get
const listTaskController = new ListTaskController();

// post
const createTaskController = new CreateTaskController();

routes.get("/tasks", listTaskController.handle);
routes.post("/tasks", createTaskController.handle);

export { routes };
