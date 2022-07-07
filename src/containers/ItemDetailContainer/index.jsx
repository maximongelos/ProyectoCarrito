import React from 'react';
import {useState, useEffect} from 'react';
import './style.css';
import ItemDetail from '../../components/ItemDetail';
import Spinner from '../../components/Spinner';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
	const [productDetail, setProductDetail] = useState({});

	const params = useParams();

	useEffect(() => {
		const url = `https://fakestoreapi.com/products/${params.productId}`;

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
	}, [params]);

	return (
		<>
			<div className="container">
				{Object.keys(productDetail).length !== 0 ? (
					<ItemDetail product={productDetail} />
				) : (
					<Spinner />
				)}
			</div>
		</>
	);
};

export default ItemDetailContainer;
