import React from 'react';
import generateOrder from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';
import {useContext} from 'react';
import {Shop} from '../../context/ShopContext';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
	const [nombre, setNombre] = useState();
	const [telefono, setTelefono] = useState();
	const [email, setEmail] = useState();
	const [direccion, setDireccion] = useState();

	const {cart, totalPrice, clear} = useContext(Shop);

	const navigate = useNavigate();

	const handleOrder = (e) => {
		e.preventDefault();

		// validar el formulario
		if ([nombre, telefono, email, direccion].includes('')) {
			alert('Todos los campos son obligatorios');
			return;
		}

		const newOrder = generateOrder(
			nombre,
			telefono,
			email,
			direccion,
			cart,
			totalPrice
		);

		guardarOrden(cart, newOrder);

		clear();

		navigate('/');
	};

	return (
		<>
			<h1 className=" text-2xl text-center py-4 uppercase">
				Ingrese su informacion
			</h1>
			<form
				className="w-11/12 items-center h-full mx-auto  px-5 mb-10 rounded-md"
				onSubmit={handleOrder}
			>
				<div className="mb-5 ">
					<label htmlFor="nombre" className="uppercase font-bold">
						Nombre
					</label>
					<input
						id="titulo"
						type="text"
						placeholder="Nombre"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="telefono" className="uppercase font-bold">
						Telefono
					</label>
					<input
						id="telefono"
						type="text"
						placeholder="Telefono"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={telefono}
						onChange={(e) => setTelefono(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="email" className="uppercase font-bold">
						Email
					</label>
					<input
						id="email"
						type="text"
						placeholder="Email"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="fecha" className="uppercase font-bold">
						Direccion
					</label>
					<input
						id="direccion"
						type="text"
						placeholder="Direccion"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={direccion}
						onChange={(e) => setDireccion(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<input
						type="submit"
						className="bg-rosa text-blanco text-center w-1/5 tablet:w-11/12 cel:w-11/12 py-2 px-2 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
						value={'Guardar'}
					></input>
				</div>
			</form>
		</>
	);
};

export default Checkout;
