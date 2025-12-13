import { Router } from "express";
import { createTask, getTasksByPriority } from "./task.controller.js";


export const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/priority/:priority', getTasksByPriority);