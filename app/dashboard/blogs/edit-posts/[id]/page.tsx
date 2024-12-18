'use client';
import EditPostsForm from '@/components/EditPostForm';
import React from 'react';

interface Props {
	params: { id: string };
}

const EditPostPage = ({ params }: Props) => {
	const id = params.id;
	return <div>{<EditPostsForm postId={id} />}</div>;
};

export default EditPostPage;
