'use client';
import EditPostsForm from '@/components/EditPostForm';
import React from 'react';

interface Props {
	params: { id: string };
}

const EditPostPage = ({ params }: Props) => {
	const id = params.id;
	return (
		<div className="max-w-3xl mx-auto p-4">{<EditPostsForm postId={id} />}</div>
	);
};

export default EditPostPage;
