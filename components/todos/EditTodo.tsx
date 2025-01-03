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

import { addTodo, getSingleTodo, updateTodo } from '@/actions/todoAction';
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
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';

const EditTodo = ({ id }: { id: string }) => {
	const [content, setContent] = useState('');
	const [priority, setPriority] = useState('');

	const handleClick = async (id: string) => {
		const currTodo = await getSingleTodo(id);
		if (currTodo) {
			setContent(currTodo.content);
			setPriority(currTodo.priority);
		}
	};
	const form = useForm<z.infer<typeof todoSchema>>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			content: '',
			priority: '',
		},
	});

	async function onSubmit(data: z.infer<typeof todoSchema>) {
		try {
			// await updateTodo(data);
			console.log(typeof data);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<div
						onClick={() => handleClick(id)}
						className="flex opacity-50 hover:opacity-100 duration-200 cursor-pointer"
					>
						<LiaEditSolid size={22} />
					</div>
				</DialogTrigger>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Edit todo</DialogTitle>
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
												defaultValue={content}
												onChange={(e) => setContent(e.target.value)}
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
											onValueChange={(e) => {
												setPriority(e);
											}}
											defaultValue={priority}
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
								<Button type="submit" className="w-full">
									Update todo
								</Button>
							</DialogClose>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default EditTodo;
