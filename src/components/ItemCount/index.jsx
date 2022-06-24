import React from 'react';
import {useState} from 'react';
import './style.css';
import {GrFormAdd} from 'react-icons/gr';
import {IoIosRemove} from 'react-icons/io';

const ItemCount = ({initialStock, initial}) => {
	const [count, setCount] = useState(initial);
	const [stock, setStock] = useState(initialStock);

	const onAdd = () => {
		if (count < stock) {
			setCount(count + 1);
		} else {
			alert('No hay mas articulos en stock');
			return;
		}
	};

	const onDecrement = () => {
		if (stock === 0) {
			alert('No hay mas articulos en stock');
			return;
		} else if (count === initial) {
			alert('Aun no se agregaron articulos al carrito');
			return;
		} else {
			setCount(count - 1);
		}
	};

	const handleAdd = (e) => {
		e.preventDefault();
		if (stock > 0) {
			setStock(stock - count);
			setCount(initial);
		}
	};

	return (
		<>
			<div className="container-carrito">
				<p className="stock">Stock Disponible : {stock}</p>
				<div className="btn-carrito">
					<IoIosRemove
						onClick={onDecrement}
						style={{marginRight: '75px', cursor: 'pointer'}}
					/>
					{count}
					<GrFormAdd
						onClick={onAdd}
						style={{marginLeft: '75px', cursor: 'pointer'}}
					/>
				</div>
				<br />
				<button className="agregar-carrito" onClick={handleAdd}>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};

export default ItemCount;
