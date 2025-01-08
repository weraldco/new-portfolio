'use client';
import Navbar from '@/components/navbar/Navbar';
import SectionItem from '@/components/SectionItem';
import { useEffect, useState } from 'react';

export default function Home() {
	const [sections, setSections] = useState<any>();
	const [navLinks, setNavLinks] = useState<any>();

	useEffect(() => {
		setSections(() => document.querySelectorAll('section'));
		setNavLinks(() => document.querySelectorAll('nav div a'));
	}, []);

	if (sections && navLinks) {
		window.onscroll = () => {
			sections.forEach((sec) => {
				let top = window.scrollY;
				let offset = sec.offsetTop;

				let height = sec.offsetHeight;

				let id = sec.getAttribute('id');

				if (top >= offset && top < offset + height) {
					console.log('yes');

					navLinks.forEach((links) => {
						links.classList.remove('active');
						console.log(id);
						document
							.querySelector('nav div a[href="#' + id + '"]')
							?.classList.add('active');
					});
				}
			});
		};
	}
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
