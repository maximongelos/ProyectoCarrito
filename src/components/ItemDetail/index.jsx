import React from 'react';
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const ItemDetail = ({product}) => {
	const navigate = useNavigate();

	product.stock = 10;

	const [qtyAdded, setQtyAdded] = useState(0);

	const handleConfirm = (qty) => {
		setQtyAdded(qty);
	};

	const handleTerminate = () => {
		navigate('/cart');
	};

	return (
		<div className="flex justify-end items-end  w-4/5 mx-0 my-auto pt-6 tablet:flex-col tablet:justify-center tablet:items-center tablet:w-full cel:flex-col cel:justify-center cel:items-center cel:w-full">
			<div className=" w-2/5 items-center p-6">
				<img
					src={product.image}
					alt="imagen"
					className=" w-96 h-96 items-center tablet:w-72 tablet:h-72 tablet:items-center
					cel:w-64 cel:h-60 cel:items-center"
				/>
			</div>
			<div className="flex flex-col justify-start items-start mx-0 my-7  w-2/5 tablet:justify-center tablet:items-center cel:justify-center cel:items-center">
				<h3 className="w-10/12 uppercase pb-3 tablet:text-center cel:text-center">
					{product.title}
				</h3>
				<p className="w-10/12 text-base text-justify pb-3 tablet:text-center cel:text-center">
					$ {product.price}
				</p>
				<p className="w-10/12 text-base text-justify pb-3 tablet:text-center cel:text-center">
					{product.description}
				</p>
				{qtyAdded === 0 ? (
					<ItemCount
						initialStock={product.stock}
						initial={1}
						onConfirm={handleConfirm}
					/>
				) : (
					<button
						className="flex justify-center text-center text-sm border-2 w-1/2 rounded-md p-2 cursor-pointer uppercase hover:bg-gris tablet:w-3/5 cel:w-3/5"
						onClick={handleTerminate}
					>
						Finalizar compra
					</button>
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
