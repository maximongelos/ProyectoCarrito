import React from 'react';
import {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import './style.css';

const ItemListContainer = () => {
	const [productos, setProductos] = useState(null);

	useEffect(() => {
		const url = '/mocks/data.json';

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
				{productos ? <ItemList productos={productos} /> : null}
			</div>
		</>
	);
};

export default ItemListContainer;
