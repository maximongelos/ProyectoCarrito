import React from 'react';
import {useState} from 'react';
import './style.css';
import {GrFormAdd} from 'react-icons/gr';
import {IoIosRemove} from 'react-icons/io';

const ItemCount = ({initialStock}) => {
	const [count, setCount] = useState(0);
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
		} else if (count === 0) {
			alert('Aun no se agregaron articulos al carrito');
			return;
		} else {
			setCount(count - 1);
		}
	};

	const handleAdd = (e) => {
		e.preventDefault();
		setStock(stock - count);
		setCount(0);
	};

	return (
		<>
			<div className="containerCarrito">
				<p className="stock">Stock Disponible : {stock}</p>
				<div className="btnCarrito">
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
				<button className="agregarCarrito" onClick={handleAdd}>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};

export default ItemCount;
