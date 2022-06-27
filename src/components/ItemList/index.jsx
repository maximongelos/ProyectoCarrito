import React from 'react';
import Item from '../Item';
import './style.css';

const ItemList = ({productos}) => {
	return (
		<>
			<h3 className="title">Productos</h3>
			<ul>
				<div className="container-card">
					{productos.map((producto) => {
						return <Item producto={producto} key={producto.id} />;
					})}
				</div>
			</ul>
		</>
	);
};

export default ItemList;
