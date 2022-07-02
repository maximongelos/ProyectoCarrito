import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import './style.css';
import Spinner from '../../components/Spinner';

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
				{productos.length ? <ItemList productos={productos} /> : <Spinner />}
			</div>
		</>
	);
};

export default ItemListContainer;
