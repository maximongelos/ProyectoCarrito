import React from 'react';
import './style.css';

const Item = ({producto}) => {
	return (
		<>
			<div className="card">
				<img src={producto.image} alt="imagen" />
				<h4>{producto.title}</h4>
				<h5>USD {producto.price}</h5>
				<a href={() => false}>Leer más</a>
			</div>
		</>
	);
};

export default Item;
