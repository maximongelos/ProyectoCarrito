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
			<div className="card" onClick={handleDetail}>
				<img src={producto.image} alt="imagen" />
				<h4>{producto.title}</h4>
				<h5>$ {producto.price}</h5>
			</div>
		</>
	);
};

export default Item;
