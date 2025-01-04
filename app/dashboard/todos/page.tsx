import { getAllTodos, getTodosByQuery } from '@/actions/todoAction';
import AddTodoForm from '@/components/todos/AddTodo';
import TodosItem from '@/components/todos/TodosItem';

const TodoPage = async () => {
	const todosItem = await getTodosByQuery({ done: false });
	const doneTodosItem = await getTodosByQuery({ done: true });

	return (
		<div className="flex w-full md:w-[640px] mx-auto flex-col py-4 gap-2 px-2">
			<div className="flex flex-row gap-4 items-center justify-between">
				<h1 className="text-2xl font-bold text-blue-900">Todo Lists</h1>{' '}
				<AddTodoForm />
			</div>

			<div>
				{/* Todo list items here */}
				<ul className="flex flex-col gap-2">
					{todosItem &&
						todosItem.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
					{doneTodosItem &&
						doneTodosItem.map((todo) => (
							<TodosItem key={todo.id} todo={todo} />
						))}
				</ul>
			</div>
		</div>
	);
};

export default TodoPage;
