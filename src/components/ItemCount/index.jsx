import React from 'react';
import {useState} from 'react';

const ItemCount = ({initial, initialStock, onConfirm}) => {
	const [count, setCount] = useState(initial);

	const addProduct = (num) => {
		setCount(count + num);
	};

	const handleConfirm = () => {
		if (count <= initialStock) {
			onConfirm(count);
		}
	};

	return (
		<>
			<div className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer tablet:w-9/12 cel:w-11/12">
				<button
					disabled={count === initial ? true : null}
					onClick={() => addProduct(-1)}
					className="text-sm font-bold pr-7"
				>
					-
				</button>
				{count}
				<button
					disabled={count === initialStock || initialStock === 0 ? true : null}
					onClick={() => addProduct(1)}
					className="text-sm font-bold pl-7"
				>
					+
				</button>
			</div>
			<br />
			<button
				disabled={initialStock === 0 ? true : null}
				className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer uppercase hover:bg-gris tablet:w-9/12 cel:w-11/12"
				onClick={handleConfirm}
			>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;
