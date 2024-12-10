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

import { signInFormSchema } from '@/lib/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormFieldElement } from './FormFieldElement';

export default function SigninForm() {
	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof signInFormSchema>) {
		console.log(values);
	}
	return (
		<div className="flex items-center justify-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle className="text-xl">Admin Login Form</CardTitle>
					<CardDescription>Welcome back to admin login.</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormFieldElement
								formControl={form.control}
								name="email"
								label="Email"
								placeHolder="Enter your email.."
								type="text"
							/>
							<FormFieldElement
								formControl={form.control}
								name="password"
								label="Password"
								placeHolder="Enter your password.."
								type="password"
							/>

							<FormDescription className="text-red-500">
								(Error message here!)
							</FormDescription>
							<Button className="w-full p-6" type="submit">
								Login
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
