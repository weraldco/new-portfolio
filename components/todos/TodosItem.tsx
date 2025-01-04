'use client';
import { deleteTodo, doneTask } from '@/actions/todoAction';
import clsx from 'clsx';
import React from 'react';
import {
	IoIosCheckmarkCircle,
	IoIosCheckmarkCircleOutline,
} from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

import { LiaEditSolid } from 'react-icons/lia';
import EditTodo from './EditTodo';

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
	const handleDeleteClick = async (id: string) => {
		try {
			await deleteTodo(id);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<li
			className={clsx(
				'flex p-2 w-full rounded-full text-white',
				todo.done
					? 'bg-green-400'
					: todo.priority == 'High'
					? 'bg-red-500'
					: todo.priority == 'Medium'
					? 'bg-orange-500'
					: 'bg-yellow-500'
			)}
		>
			<div className="flex flex-row gap-2 justify-between items-center  w-full">
				<div className="flex gap-2">
					<div
						onClick={() => handleClick(todo.id)}
						className="cursor-pointer flex items-center gap-2"
					>
						{todo.done ? (
							<IoIosCheckmarkCircle size={24} />
						) : (
							<IoIosCheckmarkCircleOutline size={24} />
						)}
					</div>
					<span>{todo.content}</span>
				</div>
				<div className="flex gap-1 items-center">
					<EditTodo id={todo.id} />
					<div
						onClick={() => handleDeleteClick(todo.id)}
						className="flex opacity-50 hover:opacity-100 duration-200 cursor-pointer"
					>
						<IoTrashOutline size={18} />
					</div>
				</div>
			</div>
		</li>
	);
};

export default TodosItem;
