import { prisma } from "../../db/prisma.js";

export async function createTask(data: { title: string; priority: number; userId: number}) {
	return prisma.task.create({
		data,
	});
}

export async function getTasksByPriority(priority: number) {
	return prisma.task.findMany({
		where: { priority },
	});
}