import { prisma } from "../../db/prisma.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'dev-secret-for-now';

export async function register(data: { email: string; password: string }) {
	
	const hashed = await bcrypt.hash(data.password, 10);

	const user = await prisma.user.create({
		data: { email: data.email, password: hashed },
	});
	
	return { id: user.id, email: user.email };
}

export async function login(data: { email: string, password: string}) {
	
	const user = await prisma.user.findUnique({
		where: { email: data.email },
	});
	if (!user) throw new Error("Invcalid credentials");

	const match = await bcrypt.compare(data.password, user.password);
	if (!match) throw new Error("Invalid credentials");

	const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

	return { token, user: { id: user.id, email: user.email }};
}