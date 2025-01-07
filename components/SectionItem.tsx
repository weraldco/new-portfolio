import React from 'react';

const SectionItem = ({
	children,
	id,
}: {
	children: React.ReactNode;
	id: string;
}) => {
	return (
		<section
			className="flex min-h-screen justify-center items-center text-5xl text-white font-bold"
			id={id}
		>
			{children}
		</section>
	);
};

export default SectionItem;
