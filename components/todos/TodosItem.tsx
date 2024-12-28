import clsx from 'clsx';
import React, { useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

interface TodoItemsT {
	id: number;
	content: string;
	done: boolean;
	priority: string;
}

interface TodoT {
	todo: TodoItemsT;
}

const TodosItem = ({ todo }: TodoT) => {
	const [isCheck, setIsCheck] = useState(todo.done);
	const handleClick = () => {
		setIsCheck((prev) => !isCheck);
	};
	return (
		<li
			className={clsx(
				'flex p-2 w-full rounded-full text-white',
				todo.priority == 'high'
					? 'bg-red-500'
					: todo.priority == 'medium'
					? 'bg-orange-500'
					: 'bg-yellow-500'
			)}
		>
			<div className="flex gap-2 ">
				<div
					onClick={handleClick}
					className="cursor-pointer flex items-center gap-2"
				>
					{isCheck ? (
						<FaCheckCircle size={24} />
					) : (
						<FaRegCheckCircle size={24} />
					)}
				</div>
				<span>{todo.content}</span>
			</div>
		</li>
	);
};

export default TodosItem;
