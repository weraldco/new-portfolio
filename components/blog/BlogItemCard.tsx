import parse from 'html-react-parser';
import { FiArrowUpRight } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Post } from './PostItem';

interface Props {
	post: Post;
}

const BlogItemCard = ({ post }: { post: Post }) => {
	const contentText: string =
		'Per default there is no provided user interface, you are absolutely free to build whatever interface you want. No need to overwrite any class, to use !important or other hacks, just write whatever you like in the setup you are used to. However, we do offer a Notion-inspired template to kick-start your project or as a point of reference.';

	const trimContent = (str: string) => {
		const arrayStr = str.split('');

		let newStr = '';
		for (let i = 0; i < 150; i++) {
			newStr += arrayStr[i];
		}

		return newStr + '..';
	};

	return (
		<Link
			href={post && `/blogs/${post.id}`}
			className="group flex flex-col overflow-hidden h-[500px] hover:scale-105 duration-200 "
		>
			{post.img_url && (
				<div className="w-full h-[250px] rounded-lg relative bg-gray-600 ">
					<Image
						src={post.img_url}
						alt="banner-image"
						width={300}
						height={300}
						className=" h-full w-full  object-cover"
						priority
					></Image>
					<div className="absolute bg-gray-50 bottom-0 left-0 right-0 bg-opacity-50 text-gray-900 p-2 group-hover:bg-teal-300 group-hover:bg-opacity-30 duration-200">
						<h1 className="text-xl font-semibold">{post.title}</h1>
						<span className="text-sm text-gray-600">Dec 12 2024 - 8:00 AM</span>
					</div>
				</div>
			)}

			<div className="flex flex-col p-2 gap-2 overflow-hidden ">
				<div className="flex items-center justify-between">
					{/* <div className="flex gap-2">
					<Link
					href={`/dashboard/blogs/edit-posts/${post.id}`}
					className="px-2 py-1 bg-gray-500 hover:bg-gray-400 active:bg-gray-600 text-white rounded-lg duration-200"
					>
					edit
					</Link>
					<button className="px-2 py-1 bg-gray-500 hover:bg-gray-400 active:bg-gray-600 text-white rounded-lg duration-200">
					delete
					</button>
					</div> */}
				</div>

				<div className="text-base text-gray-700">
					{/* {parse(post.contentHTML)} */}
					{/* {parse(trimContent(post.contentHTML))} */}
					{trimContent(contentText)}
				</div>
			</div>
			<div className="px-2 py-4 text-gray-700 text-right flex gap-2 group-hover:text-teal-500">
				<span className="font-bold">Read post</span>
				<FiArrowUpRight size={23} />
			</div>
		</Link>
	);
};

export default BlogItemCard;
