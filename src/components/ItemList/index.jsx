import React from 'react';
import Item from '../Item';

const ItemList = ({productos}) => {
	return (
		<>
			<ul>
				<div className="flex flex-wrap justify-center max-w-1200 mx-0 my-auto cursor-pointer">
					{productos.map((producto) => (
						<Item producto={producto} key={producto.id} />
					))}
				</div>
			</ul>
		</>
	);
};

export default ItemList;
