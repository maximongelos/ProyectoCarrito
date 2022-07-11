import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import './style.css';
import Spinner from '../../components/Spinner';
import {useNavigate, useParams} from 'react-router-dom';

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [categorias, setCategorias] = useState([]);

	const navigate = useNavigate();

	const params = useParams();

	const handleCategory = (categoria) => {
		navigate(`/category/${categoria}`);
	};

	useEffect(() => {
		const url = 'https://fakestoreapi.com/products/categories';

		const getCategorias = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCategorias(data);
			} catch (e) {
				console.error(e);
			}
		};

		getCategorias();
	}, []);

	useEffect(() => {
		const url = 'https://fakestoreapi.com/products';

		const getProductos = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();

				let productosFiltrados = [...data];
				if (params?.categoryId) {
					productosFiltrados = productosFiltrados.filter(
						(producto) => producto.category === params.categoryId
					);
				}
				setProductos(productosFiltrados);
			} catch (e) {
				console.error(e);
			}
		};

		getProductos();
	}, [params]);

	return (
		<>
			<div className="flex flex-col justify-center items-center tracking-wide leading-6">
				<div className="m-7 flex justify-evenly uppercase container-category">
					{categorias.map((categoria) => {
						return (
							<>
								<div
									className="text-2xl no-underline relative cursor-pointer text-center text-black p-2.5 tablet:text-lg cel:text-base"
									onClick={() => handleCategory(categoria)}
								>
									{categoria}
								</div>
							</>
						);
					})}
				</div>

				{productos.length ? <ItemList productos={productos} /> : <Spinner />}
			</div>
		</>
	);
};

export default ItemListContainer;
