'use server';
import db from '@/db';
import bcrypt from 'bcryptjs';
export const hashPassword = async (pwd: string) => {
	const hashPassword = await bcrypt.hash(pwd, 10);

	return hashPassword;
};

export const addAdminUser = async () => {
	try {
		const data = {
			name: 'Oks Kai',
			email: 'kaiz@gmail.com',
			hashPassword:
				'$2a$10$86HIbVB0G3O4QJAJDEGtTey/C.IW76oldjdP71Xp4jmwjmdZ0ZVhC',
		};

		await db.user.create({ data });
	} catch (error) {
		console.error(error);
	}
};

export const getAllTheData = async () => {
	const data = await db.user.findMany();
	return data;
};

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function testTransaction() {
	const session = await prisma.$transaction([
		prisma.user.create({
			data: {
				name: 'John Doe',
				email: 'email@gmail.com',
				hashPassword: 'asdasdadsad',
			},
		}),
	]);

	console.log(session);
}

// BLOGS ACTIONS
export const addNewBlogPost = async (values: any) => {
	try {
		const { title, content } = values;
		await db.posts.create({ data: values });
	} catch (error) {
		console.log(error);
	} finally {
		revalidatePath('/dashboard/blogs/add-posts');
		redirect('/dashboard/blogs');
	}
};

export const getAllPosts = async () => {
	try {
		const data = await db.posts.findMany({});

		return data;
	} catch (error) {
		console.error(error);
	}
};
