import React from 'react';
import {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail';
import Spinner from '../../components/Spinner';
import {useParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../components/firebase/config';

const ItemDetailContainer = () => {
	const [productDetail, setProductDetail] = useState({});

	const params = useParams();

	useEffect(() => {
		const getItem = async () => {
			try {
				const docRef = doc(db, 'products', params.productId);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const productDetail = {id: docSnap.id, ...docSnap.data()};
					setProductDetail(productDetail);
				} else {
					console.log('No existe el producto');
				}
			} catch (e) {
				console.error(e);
			}
		};

		getItem();
	}, [params]);

	return (
		<>
			{Object.keys(productDetail).length !== 0 ? (
				<ItemDetail product={productDetail} />
			) : (
				<Spinner />
			)}
		</>
	);
};

export default ItemDetailContainer;
