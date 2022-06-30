import React from 'react';
import {useState, useEffect} from 'react';
import './style.css';
import ItemDetail from '../../components/ItemDetail';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {TailSpin} from 'react-loader-spinner';

const ItemDetailContainer = () => {
	const [productDetail, setProductDetail] = useState({});

	useEffect(() => {
		const url = 'https://fakestoreapi.com/products/4';

		const getItem = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setProductDetail(data);
			} catch (e) {
				console.error(e);
			}
		};

		getItem();
	}, []);

	return (
		<>
			<div className="container">
				{Object.keys(productDetail).length !== 0 ? (
					<ItemDetail product={productDetail} />
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

export default ItemDetailContainer;
