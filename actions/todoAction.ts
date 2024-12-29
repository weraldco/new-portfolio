'use server';

import db from '@/db';
import { todoSchema } from '@/lib/todoSchema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const addTodo = async (data: z.infer<typeof todoSchema>) => {
	const rawData = {
		content: data.content as string,
		priority: data.priority as string,
	};
	try {
		await db.todos.create({
			data: rawData,
		});
	} catch (error) {
		console.log(error);
	} finally {
		revalidatePath('/dashboard/todos/add-todo');
		redirect('/dashboard/todos');
	}
};

export const getAllTodos = async () => {
	try {
		const todos = await db.todos.findMany();
		return todos;
	} catch (error) {
		console.error(error);
	}
};

export const doneTask = async (id: string) => {
	try {
	} catch (error) {
		console.error(error);
	}
};
