import { getAllPosts } from '@/actions/postActions';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function DashboardBlogPage() {
	const data = await getAllPosts();
	return (
		<div className="flex flex-col  items-center justify-center ">
			<div className="flex flex-col items-center justify-center w-[640px] md:w-[768px] lg:w-[1024px]">
				<h1 className="text-2xl font-bold">Dashboard Blog Page</h1>
				<ul className="flex flex-col gap-4">
					{data &&
						data.map((post) => (
							<li key={post.id} className="">
								<div className="flex items-center justify-between">
									<div>
										<h1 className="text-xl font-semibold">{post.title}</h1>
										<div>Dec 12 2024 - 8:00 AM</div>
									</div>
									<div className="flex gap-2">
										<Link
											href={`/dashboard/blogs/edit-posts/${post.id}`}
											className="px-2 py-1 bg-gray-500 hover:bg-gray-400 active:bg-gray-600 text-white rounded-lg duration-200"
										>
											edit
										</Link>
										<button className="px-2 py-1 bg-gray-500 hover:bg-gray-400 active:bg-gray-600 text-white rounded-lg duration-200">
											delete
										</button>
									</div>
								</div>

								{post.img_url && (
									<div className="w-full h-[400px] bg-gray-100 rounded-lg">
										<Image
											src={post.img_url}
											alt="banner-image"
											width={600}
											height={600}
											className=" h-full w-full  object-fill p-2 rounded"
										></Image>
									</div>
								)}
								<div className="prose md:prose-base lg:prose-xl">
									{parse(post.content)}
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
