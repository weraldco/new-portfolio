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

export const getTodosByQuery = async (query: any) => {
	try {
		const todos = await db.todos.findMany({ where: query });
		return todos;
	} catch (error) {
		console.error(error);
	}
};

export const getSingleTodo = async (id: string) => {
	try {
		const todo = await db.todos.findUnique({ where: { id } });
		return todo;
	} catch (error) {
		console.error(error);
	}
};

export const doneTask = async (id: string) => {
	try {
		const done = await db.todos.findUnique({
			where: { id },
			select: { done: true },
		});
		const doneData = done?.done === false ? true : false;

		await db.todos.update({ where: { id }, data: { done: doneData } });
	} catch (error) {
		console.error(error);
	} finally {
		revalidatePath('/dashboard/todos');
	}
};

export const deleteTodo = async (id: string) => {
	try {
		await db.todos.delete({ where: { id } });
	} catch (error) {
		console.error(error);
	} finally {
		revalidatePath('/dashboard/todos');
	}
};

export const updateTodo = async (
	data: z.infer<typeof todoSchema>,
	id: string
) => {
	try {
		await db.todos.update({ where: { id }, data: data });
	} catch (error) {
		console.error;
	} finally {
		revalidatePath('/dashboard/todos');
	}
};
