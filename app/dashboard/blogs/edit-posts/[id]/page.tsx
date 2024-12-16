import EditPostsForm from '@/components/EditPosts';
import React from 'react';

interface Props {
	params: { id: string };
}

const EditPostPage = async ({ params }: Props) => {
	const id = params.id;
	return <div>{<EditPostsForm postId={id} />}</div>;
};

export default EditPostPage;
