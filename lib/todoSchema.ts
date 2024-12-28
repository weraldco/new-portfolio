import z from 'zod';

export const todoSchema = z.object({
	content: z.string().min(2, { message: 'Content is required.' }),
	priority: z.string().min(2, { message: 'Enter a valid email address.' }),
});
