'use client';
import Navbar from '@/components/navbar/Navbar';
import SectionItem from '@/components/SectionItem';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
	const [pathHash, setPathHash] = useState('');

	useEffect(() => {
		const currentHash = window.location.hash;
		setPathHash(currentHash);
	}, []);

	const url = window.location.href.split('/');

	console.log(url);
	return (
		<>
			<Navbar />
			<div className="flex flex-col pt-20">
				<SectionItem id="about">About</SectionItem>
				<SectionItem id="services">Services</SectionItem>
				<SectionItem id="works">Works</SectionItem>
				<SectionItem id="contacts">Contacts</SectionItem>
			</div>
		</>
	);
}
