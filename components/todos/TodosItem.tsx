'use client';
import { doneTask, getSingleTodo } from '@/actions/todoAction';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

interface TodoItemsT {
	id: string;
	content: string;
	done: boolean;
	priority: string;
}

interface TodoT {
	todo: TodoItemsT;
}

const TodosItem = ({ todo }: TodoT) => {
	const handleClick = async (id: string) => {
		try {
			await doneTask(id);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<li
			className={clsx(
				'flex p-2 w-full rounded-full text-white',
				todo.priority == 'High'
					? 'bg-red-500'
					: todo.priority == 'Medium'
					? 'bg-orange-500'
					: 'bg-yellow-500'
			)}
		>
			<div className="flex gap-2 ">
				<div
					onClick={() => handleClick(todo.id)}
					className="cursor-pointer flex items-center gap-2"
				>
					{todo.done ? (
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
