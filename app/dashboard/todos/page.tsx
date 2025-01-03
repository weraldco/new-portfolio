import { getAllTodos } from '@/actions/todoAction';
import AddTodoForm from '@/components/todos/AddTodo';
import TodosItem from '@/components/todos/TodosItem';
import Link from 'next/link';

const TodoPage = async () => {
	const todosItem = await getAllTodos();

	return (
		<div className="flex w-[640px] mx-auto flex-col py-4 gap-2">
			<div className="flex flex-row gap-4 items-center justify-between">
				<h1 className="text-2xl font-bold text-blue-900">Todo Lists</h1>{' '}
				<AddTodoForm />
				{/* <Link
					href="/dashboard/todos/add-todo"
					className="bg-blue-500 px-2 py-1 rounded-xl text-white text-sm hover:bg-blue-400 active:bg-blue-600 duration-200"
				>
					Add todo
				</Link> */}
			</div>

			<div>
				{/* Todo list items here */}
				<ul className="flex flex-col gap-2">
					{todosItem &&
						todosItem.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
				</ul>
			</div>
		</div>
	);
};

export default TodoPage;
