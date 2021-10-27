import React from "react";

export const TodoListItem = ({ el, idx, handleDelete, handleToggle }) => {
	return (
		<li key={el.id} className="list-group-item">
			<p
				className={`${el.done && "complete"}`}
				onClick={() => handleToggle(el.id)}
			>
				{idx + 1}. {el.desc}
			</p>
			<button className="btn btn-danger" onClick={() => handleDelete(el.id)}>
				Borrar
			</button>
		</li>
	);
};
