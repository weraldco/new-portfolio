import parse from 'html-react-parser';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from './PostItem';

interface Props {
	post: Post;
}
const PostContent = ({ post }: Props) => {
	const date = post.createdAt.toLocaleDateString('en-PH', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
	});
	const time = post.createdAt.toLocaleTimeString('en-PH', {
		hour: '2-digit',
		minute: '2-digit',
	});
	return (
		<div className="flex flex-col prose md:prose-base lg:prose-lg">
			<div className="flex items-center justify-between leading-1">
				<div className=" flex flex-col gap-0">
					<div className="content-title">
						<h1 className=" font-bold text-3xl">{post.title}</h1>
					</div>
					<div className="text-sm italic">
						<span className="font-bold text-sm">Posted: </span> {date} - {time}
					</div>
				</div>
				<div className="flex gap-2">
					<Link
						href={`/dashboard/blogs/edit-posts/${post.id}`}
						className="px-2 py-1 border border-gray-500 hover:bg-gray-300 active:bg-gray-400 text-gray-700 rounded-full duration-200 no-underline text-xs font-normal"
					>
						edit
					</Link>
					{/* <Link
						href={``}
						className="px-2 py-1 border border-gray-500 hover:bg-gray-300 active:bg-gray-400 text-gray-700 rounded-full duration-200 no-underline text-xs font-normal"
					>
						delete
					</Link> */}
				</div>
			</div>
			{post.img_url && (
				<Image
					src={post.img_url}
					width={400}
					height={400}
					className="w-full"
					alt={post.title}
					priority
				></Image>
			)}
			<div className="content">{parse(post.contentHTML)}</div>
		</div>
	);
};

export default PostContent;
