import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<ul className="list-group list-group-flush">
			{todos.map((el, idx) => (
				<TodoListItem
					key={idx}
					el={el}
					idx={idx}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
};
