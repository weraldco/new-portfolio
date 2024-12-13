import AddBlogPost from '@/components/AddBlogPost';
import { default as RichEditor } from '@/components/RichEditor';
import React from 'react';

export default function AddPosts() {
	return (
		<div className="max-w-3xl mx-auto p-4">
			{/* <AddBlogPost /> */}
			<RichEditor />
		</div>
	);
}
