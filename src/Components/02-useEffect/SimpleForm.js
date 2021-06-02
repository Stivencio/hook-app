import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
	});

	const { name, email } = formState;

	useEffect(() => {
		// console.log("Hola");
	}, []);
	useEffect(() => {
		// console.log("FormState cambió");
	}, [formState]);
	useEffect(() => {
		// console.log("Email cambió");
	}, [email]);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				></input>
			</div>
			<div className="form-group">
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="email@gmail.com"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				></input>

				{name === "123" && <Message />}
			</div>
		</>
	);
};
