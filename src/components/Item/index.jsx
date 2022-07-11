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
				className="card w-330 h-400 rounded-lg shadow-sm overflow-hidden m-5 text-center transition-all duration-300 bg-white"
				onClick={handleDetail}
			>
				<img className="w-36 h-36" src={producto.image} alt="imagen" />
				<h4 className="font-normal">{producto.title}</h4>
				<h5 className="font-semibold">$ {producto.price}</h5>
			</div>
		</>
	);
};

export default Item;
