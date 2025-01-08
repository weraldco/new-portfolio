'use client';
import { Bungee_Outline, Quicksand } from 'next/font/google';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { GiBrutalHelm } from 'react-icons/gi';
const BungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' });
const quicksand = Quicksand({ subsets: ['latin'], weight: '300' });

const Navbar = () => {
	const [urlHash, setUrlHash] = useState('about');
	const router = useRouter();

	// useEffect(() => {
	// 	const navLink = document.querySelectorAll('nav button');
	// 	navLink.forEach((nav) => {
	// 		nav.classList.remove('active');
	// 	});

	// 	if (urlHash) {
	// 		const activeLink = document.querySelector('button.' + urlHash);
	// 		activeLink?.classList.add('active');
	// 	}
	// }, [urlHash]);
	return (
		<nav className="flex flex-row justify-between p-2 items-center bg-[#202020] fixed left-0 right-0">
			<Link
				href="/#about"
				onClick={() => {
					router.push('/#about');
					setUrlHash('about');
				}}
				className=" flex  gap-2 items-center p-3"
			>
				{/* <GiBrutalHelm size={40} /> */}
				<div className={`${BungeeOutline.className} text-4xl text-white`}>
					wxx
				</div>
			</Link>
			<div className={`${quicksand.className} flex gap-2 text-md text-white`}>
				{/* <Link className="p-1 border border-b-gray-200" href="/dashboard">
					Dashboard
				</Link> */}
				<Link href="#about" className="active p-1">
					About
				</Link>
				<Link href="#services" className=" p-1">
					Services
				</Link>
				<Link href="#works" className=" p-1">
					Works
				</Link>
				<Link href="#contacts" className=" p-1">
					Contacts
				</Link>

				{/* <button
					className="active about p-1"
					onClick={() => {
						router.push('/#about');
						setUrlHash('about');
					}}
				>
					About
				</button>
				<button
					className="p-1 services"
					onClick={() => {
						router.push('/#services');
						setUrlHash('services');
					}}
				>
					Services
				</button>
				<button
					className="p-1 works"
					onClick={() => {
						router.push('/#works');
						setUrlHash('works');
					}}
				>
					Works
				</button>

				<button
					className="p-1 contacts"
					onClick={() => {
						router.push('/#contacts');
						setUrlHash('contacts');
					}}
				>
					Contacts
				</button> */}
				<Link className="p-1" href="/blogs">
					Blogs
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
