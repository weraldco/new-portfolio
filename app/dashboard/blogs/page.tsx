import { getAllPosts } from '@/actions/postActions';
import BlogItemCard from '@/components/BlogItemCard';

import React from 'react';

export default async function DashboardBlogPage() {
	const data = await getAllPosts();
	return (
		<div className="flex flex-col  items-center justify-center ">
			<div className="flex flex-col items-center justify-center w-[640px] md:w-[768px] lg:w-[1024px]">
				{/* <h1 className="text-3xl font-bold">Dashboard Blog Page</h1> */}
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
