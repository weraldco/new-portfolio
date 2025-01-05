import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between  p-2 items-center">
			<Link href="/" className="text-xl font-bold">
				Logo
			</Link>
			<div className="flex gap-2 text-md">
				{/* <Link className="p-1 border border-b-gray-200" href="/dashboard">
					Dashboard
				</Link> */}
				<Link className="p-1 border border-b-gray-200" href="/services">
					Services
				</Link>
				<Link className="p-1 border border-b-gray-200" href="/works">
					Works
				</Link>
				<Link className="p-1 border border-b-gray-200" href="/blogs">
					Blogs
				</Link>
				<Link className="p-1 border border-b-gray-200" href="/contacts">
					Contacts
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
