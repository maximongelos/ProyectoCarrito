import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import './style.css';
import Spinner from '../../components/Spinner';
import {useNavigate, useParams} from 'react-router-dom';

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [categorias, setCategorias] = useState([]);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const params = useParams();

	const handleCategory = (categoria) => {
		navigate(`/category/${categoria}`);
	};

	useEffect(() => {
		const url = 'https://fakestoreapi.com/products/categories';

		const getCategorias = async () => {
			try {
				setLoading(true);
				const res = await fetch(url);
				const data = await res.json();
				setLoading(false);
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
				setLoading(true);
				const res = await fetch(url);
				const data = await res.json();

				let productosFiltrados = [...data];
				if (params?.categoryId) {
					productosFiltrados = productosFiltrados.filter(
						(producto) => producto.category === params.categoryId
					);
				}
				setLoading(false);
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
					{!loading ? (
						categorias.map((categoria) => (
							<div
								className="text-2xl no-underline relative cursor-pointer text-center text-black p-2.5 tablet:text-lg cel:text-xs justify"
								onClick={() => handleCategory(categoria)}
								key={categoria}
							>
								{categoria}
							</div>
						))
					) : (
						<p>Cargando...</p>
					)}
				</div>

				{productos.length && !loading ? (
					<ItemList productos={productos} />
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
};

export default ItemListContainer;
