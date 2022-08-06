import React from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css';

const Item = ({producto}) => {
	const navigate = useNavigate();

	const handleDetail = () => {
		navigate(`/detail/${producto.id}`);
	};

	return (
		<>
			<div
				onClick={handleDetail}
				className="card flex flex-col justify-center items-center w-80 h-96 rounded-lg shadow-lg overflow-hidden m-5 text-center transition-all duration-300 bg-white"
			>
				<img
					className="w-48 h-48 text-center"
					src={producto.image}
					alt="imagen"
				/>
				<h4 className="font-normal p-2">{producto.title}</h4>
				<h5 className="font-semibold p-2">$ {producto.price}</h5>
				<button
					onClick={handleDetail}
					className="border rounded-sm uppercase m-2 p-2 hover:bg-gris"
				>
					Agregar al carrito
				</button>
			</div>
		</>
	);
};

export default Item;
