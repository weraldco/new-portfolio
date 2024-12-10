import z from 'zod';

export const formSchema = z.object({
	name: z.string().min(2, { message: 'Name is required.' }),
	email: z.string().email({ message: 'Enter a valid email address.' }),
	password: z.string().min(2, { message: 'Password is required.' }),
});

export const signInFormSchema = formSchema.pick({
	email: true,
	password: true,
});
