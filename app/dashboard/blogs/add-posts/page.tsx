'use client';
import { getPostDetails } from '@/actions/postActions';
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
	const formSubmit = async () => {
		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', content);
		await getPostDetails(formData);
	};
	return (
		<div className="max-w-3xl mx-auto p-4">
			{/* <AddBlogPost /> */}
			<form action={formSubmit}>
				<input
					type="text"
					placeholder="Enter a title for your post.."
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className="w-full"
				/>
				<RichEditor />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
