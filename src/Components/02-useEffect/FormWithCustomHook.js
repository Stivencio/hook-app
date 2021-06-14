import React, { useEffect } from "react";
import './effects.css'
import { useForm } from "../../Hooks/useForm";

export const FormWithCustomHook = () => {

   
	const [formValues, handleInputChange] = useForm({
		name: "",
		email: "",
        password:''
	});

	const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email cambió')        
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        name.length && email.length && password.length ? console.log(formValues):console.log("Campos vacios")
    }      
	
	return (
		<form onSubmit={handleSubmit}>
			<h1>FormWithCustomHook</h1>
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
			</div>
			<div className="form-group">
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="*****"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				></input>
			</div>
            <hr/>
            <button type="submit" className="btn btn-primary">Guardar</button>
		</form>
	);
};
