'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Form, FormDescription } from '@/components/ui/form';

import { addNewBlogPost } from '@/actions/postActions';
import { blogSchema } from '@/lib/blogSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormFieldElement } from '../FormFieldElement';

export default function AddBlogPost() {
	const form = useForm<z.infer<typeof blogSchema>>({
		resolver: zodResolver(blogSchema),
		defaultValues: {
			title: '',
			content: '',
		},
	});

	async function onSubmit(values: z.infer<typeof blogSchema>) {
		console.log(values);
	}
	return (
		<div className="flex items-center justify-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle className="text-xl">Adding new post</CardTitle>
					<CardDescription>Welcome back to admin login.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormFieldElement
								formControl={form.control}
								name="title"
								label="Title"
								placeHolder="Enter your title.."
								type="text"
							/>
							{/* Should be textarea. */}
							<FormFieldElement
								formControl={form.control}
								name="content"
								label="Content"
								placeHolder="Enter your content.."
								type="text"
							/>

							<FormDescription className="text-red-500">
								(Error message here!)
							</FormDescription>
							<Button className="w-full p-6" type="submit">
								Add post
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
