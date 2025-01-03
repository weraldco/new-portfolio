'use client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { addTodo } from '@/actions/todoAction';
import { Button } from '@/components/ui/button';

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
import { DialogClose } from '@radix-ui/react-dialog';

const AddTodoForm = () => {
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
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="bg-blue-500 px-3 py-1 rounded-full text-white text-sm hover:bg-blue-400 active:bg-blue-600 duration-200">
						Add todo
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Add new todo</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className=" space-y-6  w-full"
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
												className="resize-none size-full"
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
							<DialogClose asChild>
								<Button type="submit">Add todo</Button>
							</DialogClose>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddTodoForm;
