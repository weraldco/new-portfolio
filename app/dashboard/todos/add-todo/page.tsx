'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// import { toast } from '@/components/hooks/use-toast';
import { addTodo } from '@/actions/todoAction';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { todoSchema } from '@/lib/todoSchema';

const FormSchema = z.object({
	email: z
		.string({
			required_error: 'Please select an email to display.',
		})
		.email(),
});

export default function AddTodoPage() {
	const form = useForm<z.infer<typeof todoSchema>>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			content: '',
			priority: '',
		},
	});

	async function onSubmit(data: z.infer<typeof todoSchema>) {
		try {
			await addTodo(data);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle className="text-xl">Admin Login Form</CardTitle>
				<CardDescription>Welcome back to admin login.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-2/3 space-y-6"
					>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Todo Content</FormLabel>
									<FormControl>
										<Textarea
											placeholder="What's your todo?"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Priority level of todo" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="High">High</SelectItem>
											<SelectItem value="Medium">Medium</SelectItem>
											<SelectItem value="Low">Low</SelectItem>
										</SelectContent>
									</Select>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Add todo</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
