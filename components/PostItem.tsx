'use client';
import { getPostById } from '@/actions/postActions';
import React, { useEffect, useState } from 'react';
import PostContent from './PostContent';

export interface Post {
	id: string;
	title: string;
	img_url: string | null;
	contentHTML: string;
	contentJSON: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Props {
	postId: string;
}
const PostItem = ({ postId }: Props) => {
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getPostData = async () => {
			try {
				const post: any = await getPostById(postId);
				if (post) setPost(post);
			} catch (error) {
				console.log(error);
			}
		};

		getPostData();
	}, [postId]);
	return <div>{post ? <PostContent post={post} /> : null}</div>;
};

export default PostItem;
