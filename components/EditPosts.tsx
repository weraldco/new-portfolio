'use client';
import { getPostById } from '@/actions/postActions';
import React, { useEffect, useState } from 'react';

interface Props {
	postId: string;
}
const EditPostsForm = ({ postId }: Props) => {
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPostData = async () => {
			try {
				const postData = await getPostById(postId);
				if (postData) {
					setPost(postData);
				}
			} catch (error) {
				console.error(error);
			}
		};

		getPostData();
	}, [postId]);

	if (post) console.log(post);
	return <div></div>;
};

export default EditPostsForm;
