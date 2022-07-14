import React from 'react';
import {useContext} from 'react';
import {Shop} from '../../context/ShopContext';

const Cart = () => {
	const {cart, removeItem, clear} = useContext(Shop);

	return (
		<>
			<h4 className="text-center uppercase font-extrabold text-2xl pt-2">
				Detalle de su compra
			</h4>
			{cart.length === 0 ? (
				<p className="text-center font-light text-lg pt-2">No hay compras</p>
			) : (
				<ul className="p-4">
					{cart.map((producto) => {
						return (
							<li
								key={producto.id}
								className="flex justify-start items-center p-3"
							>
								<img
									src={producto.image}
									className=" w-20 h-20 pr-4"
									alt={producto.title}
								/>
								<p className="pr-4">{producto.title}</p>
								<p className="pr-4">Cantidad: {producto.quantity}</p>
								<p className="pr-4">Precio: ${producto.price}</p>
								<button
									onClick={() => removeItem(producto.id)}
									className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
								>
									Eliminar
								</button>
							</li>
						);
					})}
					<button
						onClick={clear}
						className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte my-auto mx-auto"
					>
						Vaciar carrito
					</button>
				</ul>
			)}
		</>
	);
};

export default Cart;
