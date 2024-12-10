import z from 'zod';

export const blogSchema = z.object({
	title: z.string().min(2, { message: 'Title is required.' }),
	content: z.string().min(2, { message: 'Enter a valid email address.' }),
});
