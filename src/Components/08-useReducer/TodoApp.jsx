import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../Hooks/useForm";
import "./styles.css";

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (todoId) => {
		console.log(todoId);

		// crear la action
		const action = {
			type: "delete",
			payload: todoId,
		};
		//dispatch
		dispatch(action);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: "add",
			payload: newTodo,
		};

		dispatch(action);
		reset();
	};

	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{todos.map((el, idx) => (
							<li key={el.id} className="list-group-item">
								<p className="text-center">
									{idx + 1}. {el.desc}
								</p>
								<button
									className="btn btn-danger"
									onClick={() => handleDelete(el.id)}
								>
									Borrar
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="description"
							className="form-control"
							placeholder="Aprender ..."
							autoComplete="off"
							value={description}
							onChange={handleInputChange}
						/>
						<div className="d-grid gap-2">
							<button type="submit" className="btn btn-outline-primary mt-1">
								Agregar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
