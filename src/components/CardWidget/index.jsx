import React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Shop} from '../../context/ShopContext';

const CardWidget = () => {
	const {cart} = useContext(Shop);

	const navigate = useNavigate();

	const handleCart = () => {
		navigate('/cart');
	};

	return (
		<div className="flex">
			<svg
				className="w-6 h-6 mx-auto cursor-pointer"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				onClick={handleCart}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				></path>
			</svg>
			<div>
				{cart.length > 0 ? (
					<div className="w-4 h-4 bg-blanco rounded-full text-negro text-xs font-bold text-center">
						<span>{cart.length}</span>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default CardWidget;
