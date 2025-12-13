import type { Request, Response } from "express";
import * as service from './task.service.js';

export async function createTask(req: Request, res: Response) {
	try {
		const task = await service.createTask(req.body);
		res.json(task);
	} catch (err: any) {
		res.status(400).json({ error: err.message })
	}	
}

export async function getTasksByPriority(req: Request, res: Response) {
	const priority = Number(req.params.priority);
	const tasks = await service.getTasksByPriority(priority);
	res.json(tasks);
}