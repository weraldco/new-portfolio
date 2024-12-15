'use server';

import db from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getPostDetails = async (formData: FormData) => {
	console.log(formData);
};

// BLOGS ACTIONS
export const addNewBlogPost = async (values: FormData) => {
	const rawData = {
		title: values.get('title') as string,
		content: values.get('content') as string,
	};
	try {
		await db.posts.create({
			data: rawData,
		});
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
