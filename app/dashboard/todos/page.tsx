'use client';
import React, { useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

const TodoPage = () => {
	const [isCheck, setIsCheck] = useState(true);
	const handleClick = () => {
		setIsCheck((prev) => !isCheck);
	};
	console.log(isCheck);
	return (
		<div className="flex w-[640px] mx-auto flex-col">
			<h1 className="text-2xl font-bold text-blue-900">Todo Lists</h1>
			<div>
				<ul>
					<li className="flex ">
						<div className="flex gap-2">
							<div
								onClick={handleClick}
								className="cursor-pointer flex items-center gap-2"
							>
								{isCheck ? (
									<FaRegCheckCircle size={24} />
								) : (
									<FaCheckCircle size={24} />
								)}
							</div>
							<span>Study algorithm and data structure</span>
						</div>
					</li>
					<li>Chapter 2 of course: Web Development</li>
				</ul>
			</div>
		</div>
	);
};

export default TodoPage;
