import { getAllTodos } from '@/actions/todoAction';
import TodosItem from '@/components/todos/TodosItem';
import Link from 'next/link';

const TodoPage = async () => {
	const todosItem = await getAllTodos();
	// const todosItem = [
	// 	{
	// 		id: 1,
	// 		content: 'Study algorithm and data structure',
	// 		done: false,
	// 		priority: 'high', // high, medium, low
	// 	},
	// 	{
	// 		id: 2,
	// 		content: 'Exercise for 30 mins.',
	// 		done: false,
	// 		priority: 'medium', // high, medium, low
	// 	},
	// 	{
	// 		id: 2,
	// 		content: 'Pay bills this month.',
	// 		done: false,
	// 		priority: 'medium', // high, medium, low
	// 	},
	// 	{
	// 		id: 2,
	// 		content: 'Cook breakfast',
	// 		done: false,
	// 		priority: 'low', // high, medium, low
	// 	},
	// 	{
	// 		id: 2,
	// 		content: 'Buy to the groceries.',
	// 		done: false,
	// 		priority: 'low', // high, medium, low
	// 	},
	// ];
	return (
		<div className="flex w-[640px] mx-auto flex-col py-4 gap-2">
			<div className="flex flex-row gap-4 items-center justify-between">
				<h1 className="text-2xl font-bold text-blue-900">Todo Lists</h1>{' '}
				<Link
					href="/dashboard/todos/add-todo"
					className="bg-blue-500 px-2 py-1 rounded-xl text-white text-sm hover:bg-blue-400 active:bg-blue-600 duration-200"
				>
					Add todo
				</Link>
			</div>

			<div>
				<ul className="flex flex-col gap-2">
					{todosItem &&
						todosItem.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
				</ul>
			</div>
		</div>
	);
};

export default TodoPage;
