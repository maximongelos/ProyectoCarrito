import React, {useState} from 'react';
import guardarProducto from '../../Utils/guardarProducto';
import generateProduct from '../../Utils/generarProducto';

const CreateProduct = () => {
	const [titulo, setTitulo] = useState();
	const [precio, setPrecio] = useState();
	const [descripcion, setDescripcion] = useState();
	const [categoria, setCategoria] = useState();
	const [imagen, setImagen] = useState();
	const [stock, setStock] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		// validar el formulario
		if ([titulo, precio, descripcion, categoria, imagen, stock].includes('')) {
			alert('Todos los campos son obligatorios');
			return;
		}

		const producto = generateProduct(
			titulo,
			precio,
			descripcion,
			categoria,
			imagen,
			stock
		);

		setTitulo('');
		setPrecio('');
		setDescripcion('');
		setCategoria('');
		setImagen('');
		setStock('');

		guardarProducto(producto);
	};

	return (
		<>
			<form
				className="w-11/12 items-center h-full mx-auto  px-5 mb-10 rounded-md"
				onSubmit={handleSubmit}
			>
				<div className="mb-5 ">
					<label htmlFor="nombre" className="uppercase font-bold">
						Titulo
					</label>
					<input
						id="titulo"
						type="text"
						placeholder="Titulo"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="precio" className="uppercase font-bold">
						Precio
					</label>
					<input
						id="precio"
						type="text"
						placeholder="Precio"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={precio}
						onChange={(e) => setPrecio(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="email" className="uppercase font-bold">
						Descripcion
					</label>
					<input
						id="descripcion"
						type="text"
						placeholder="Descripcion"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={descripcion}
						onChange={(e) => setDescripcion(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="fecha" className="uppercase font-bold">
						Categoria
					</label>
					<input
						id="categoria"
						type="text"
						placeholder="Categoria"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={categoria}
						onChange={(e) => setCategoria(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="sintomas" className="uppercase font-bold">
						Imagen
					</label>
					<input
						id="imagen"
						type="text"
						placeholder="Imagen"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={imagen}
						onChange={(e) => setImagen(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label htmlFor="sintomas" className="uppercase font-bold">
						Stock
					</label>
					<input
						id="stock"
						type="text"
						placeholder="Stock"
						className="border-2 w-full p-2 mt-2 rounded-md"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<input
						type="submit"
						className="bg-rosa text-blanco text-center w-1/5 py-2 px-2 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
						value={'Guardar'}
					></input>
				</div>
			</form>
		</>
	);
};

export default CreateProduct;
