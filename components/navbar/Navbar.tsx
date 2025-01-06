import { Bungee_Outline, Quicksand } from 'next/font/google';

import Link from 'next/link';
import React from 'react';

import { GiBrutalHelm } from 'react-icons/gi';
const BungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' });
const quicksand = Quicksand({ subsets: ['latin'], weight: '300' });

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between p-2 items-center bg-[#202020] fixed left-0 right-0">
			<Link href="/" className=" flex  gap-2 items-center p-3">
				{/* <GiBrutalHelm size={40} /> */}
				<div className={`${BungeeOutline.className} text-4xl text-white`}>
					wxx
				</div>
			</Link>
			<div className={`${quicksand.className} flex gap-2 text-md text-white`}>
				{/* <Link className="p-1 border border-b-gray-200" href="/dashboard">
					Dashboard
				</Link> */}
				<Link className="p-1" href="/services">
					About
				</Link>
				<Link className="p-1" href="/services">
					Services
				</Link>
				<Link className="p-1" href="/works">
					Works
				</Link>

				<Link className="p-1" href="/contacts">
					Contacts
				</Link>
				<Link className="p-1" href="/blogs">
					Blogs
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
