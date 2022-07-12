import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ItemCount = ({initialStock}) => {
	const [count, setCount] = useState(1);
	const [stock, setStock] = useState(initialStock);

	const navigate = useNavigate();

	const addProduct = (num) => {
		setCount(count + num);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		if (stock > 0) {
			setStock(stock - count);
			setCount(1);
		}

		alert(`Agregaste ${count} productos al carrito`);
	};

	const handleTerminate = () => {
		navigate('/cart');
	};

	console.log(`Count: ${count} - Stock: ${stock}`);

	return (
		<>
			<div className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer tablet:w-3/5 cel:w-3/5">
				<button
					disabled={count === 1 ? true : null}
					onClick={() => addProduct(-1)}
					className="text-sm font-bold pr-7"
				>
					-
				</button>
				{count}
				<button
					disabled={count === stock || stock === 0 ? true : null}
					onClick={() => addProduct(1)}
					className="text-sm font-bold pl-7"
				>
					+
				</button>
			</div>
			<br />
			{stock === initialStock ? (
				<button
					disabled={stock === 0 ? true : null}
					className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer uppercase hover:bg-gris tablet:w-3/5 cel:w-3/5"
					onClick={handleAdd}
				>
					Agregar al carrito
				</button>
			) : (
				<button
					disabled={stock === 0 ? true : null}
					className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer uppercase hover:bg-gris tablet:w-3/5 cel:w-3/5"
					onClick={handleTerminate}
				>
					Finalizar compra
				</button>
			)}
		</>
	);
};

export default ItemCount;
