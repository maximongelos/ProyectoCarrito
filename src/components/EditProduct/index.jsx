import {db} from '../firebase/config';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const EditProduct = () => {
	const [titulo, setTitulo] = useState();
	const [precio, setPrecio] = useState();
	const [descripcion, setDescripcion] = useState();
	const [categoria, setCategoria] = useState();
	const [imagen, setImagen] = useState();
	const [stock, setStock] = useState();
	// const [producto, setProducto] = useState({});

	const {productId} = useParams();

	const navigate = useNavigate();

	const datos = {
		title: titulo,
		price: precio,
		description: descripcion,
		category: categoria,
		image: imagen,
		stock,
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		const product = doc(db, 'products', productId);
		const data = datos;
		await updateDoc(product, data);
		navigate('/admin');
	};

	const getProductById = async (productId) => {
		const product = await getDoc(doc(db, 'products', productId));
		console.log(product.data());
		if (product.exists()) {
			setTitulo(product.data().title);
			setPrecio(product.data().price);
			setDescripcion(product.data().description);
			setCategoria(product.data().category);
			setImagen(product.data().image);
			setStock(product.data().stock);
		} else {
			console.log('El producto no existe');
		}
	};

	useEffect(() => {
		getProductById(productId);
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1 className=" text-2xl text-center pt-4 uppercase">Editar</h1>
			<form
				className="w-11/12 items-center h-full mx-auto  px-5 mb-10 rounded-md"
				onSubmit={handleUpdate}
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
					<label htmlFor="propietario" className="uppercase font-bold">
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

export default EditProduct;
