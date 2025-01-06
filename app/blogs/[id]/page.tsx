import PostItem from '@/components/blog/PostItem';
import React from 'react';

interface Props {
	params: { id: string };
}

const PostItemPage = async ({ params }: Props) => {
	const id = params.id;

	return (
		<div className="flex flex-col items-center justify-center">
			{<PostItem postId={id} />}
		</div>
	);
};

export default PostItemPage;
