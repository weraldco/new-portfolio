'use client';
import { addNewBlogPost, getPostDetails } from '@/actions/postActions';
import AddBlogPost from '@/components/AddBlogPost';

import { default as RichEditor } from '@/components/RichEditor';
import React, { FormEvent, useState } from 'react';

interface Props {
	// formData: FormData;
	e: any;
}

export default function AddPosts() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const handleEditorChange = (value: string) => {
		setContent(value);
	};
	const formSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', content);
		await addNewBlogPost(formData);
	};
	return (
		<div className="max-w-3xl mx-auto p-4">
			{/* <AddBlogPost /> */}
			<form onSubmit={formSubmit} className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Adding New Post</h1>
				<div>
					<label htmlFor="title" className="text-sm text-gray-600">
						Post Title
					</label>
					<input
						type="text"
						placeholder="Enter a title for your post.."
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="w-full border border-gray-600 p-2 rounded outline-none"
						id="title"
					/>
				</div>
				<div>
					<label htmlFor="title" className="text-sm text-gray-600">
						Post Content
					</label>
					<div className="border border-gray-600 rounded p-2">
						<RichEditor onValueChange={handleEditorChange} />
					</div>
				</div>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded">
					Submit
				</button>
			</form>
		</div>
	);
}
