import React from 'react';
import './style.css';

const ItemDetail = ({product}) => {
	return (
		<div className="container-detail">
			<div className="imagen-detail">
				<img src={product.image} alt="imagen" />
			</div>
			<div className="detail">
				<h3>{product.title}</h3>
				<p>$ {product.price}</p>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default ItemDetail;
