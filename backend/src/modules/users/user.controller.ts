import type { Request, Response } from "express";
import * as service from './user.service.js';

export async function register(req: Request, res: Response) {
	try {
		const user = await service.register(req.body);
		res.json(user);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
}

export async function login(req: Request, res: Response) {
	try {
		const data = await service.login(req.body);
		res.json(data);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
}