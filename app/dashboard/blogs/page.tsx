import { getAllPosts } from '@/actions/authAction';
import React from 'react';

export default async function DashboardBlogPage() {
	const data = await getAllPosts();
	return (
		<div>
			<h1 className="text-2xl font-bold">Dashboard Blog Page</h1>
			<ul className="flex flex-col gap-4">
				{data &&
					data.map((post) => (
						<li key={post.id} className=" bg-gray-300">
							<div className="flex flex-col gap-1">
								<h1 className="text-xl font-semibold">{post.title}</h1>
								<div>{post.content}</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
}
