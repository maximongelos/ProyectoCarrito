import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import './style.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {TailSpin} from 'react-loader-spinner';

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const url = 'https://fakestoreapi.com/products?limit=7';

		const getProductos = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setProductos(data);
			} catch (e) {
				console.error(e);
			}
		};

		getProductos();
	}, []);

	return (
		<>
			<div className="container">
				{productos.length ? (
					<ItemList productos={productos} />
				) : (
					<TailSpin
						className="spinner"
						ariaLabel="loading-indicator"
						color="#000"
					/>
				)}
			</div>
		</>
	);
};

export default ItemListContainer;
