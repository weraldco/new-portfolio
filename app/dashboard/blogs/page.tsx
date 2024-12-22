import { getAllPosts } from '@/actions/postActions';
import BlogItemCard from '@/components/BlogItemCard';
import Link from 'next/link';

import React from 'react';

export default async function DashboardBlogPage() {
	const data = await getAllPosts();
	return (
		<div className="flex flex-col items-center justify-center ">
			<div className="flex flex-col  w-[640px] md:w-[768px] lg:w-[1024px]">
				<div className="flex flex-row justify-between items-center  p-5">
					<h1 className="text-3xl font-bold text-blue-900">
						Dashboard Blog Page
					</h1>
					<Link
						href={'/dashboard/blogs/add-posts'}
						className="px-2 py-1 border-blue-900 border rounded-full hover:bg-gray-200 active:bg-gray-300 duration-200 "
					>
						Add new post
					</Link>
				</div>
				<ul className="flex  gap-4">
					{data &&
						data.map((post) => (
							<li key={post.id} className="">
								<BlogItemCard post={post} />
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
