import React from 'react';
import {useState} from 'react';
import './style.css';

const ItemCount = ({initialStock, initial}) => {
	const [count, setCount] = useState(initial);
	const [stock, setStock] = useState(initialStock);

	const addProduct = (num) => {
		setCount(count + num);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		if (stock > 0) {
			setStock(stock - count);
			setCount(initial);
		}

		alert(`Agregaste ${count} productos al carrito`);
	};

	return (
		<>
			<div className="container-carrito">
				<p className="stock">Stock Disponible : {stock}</p>
				<div className="btn-carrito">
					<button
						disabled={count === initial ? true : null}
						onClick={() => addProduct(-1)}
						className="btn"
					>
						-
					</button>
					{count}
					<button
						disabled={count === stock ? true : null}
						onClick={() => addProduct(1)}
						className="btn"
					>
						+
					</button>
				</div>
				<br />
				<button
					disabled={stock === 0 ? true : null}
					className="agregar-carrito"
					onClick={handleAdd}
				>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};

export default ItemCount;
