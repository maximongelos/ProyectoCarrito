import React from 'react';
import {useContext} from 'react';
import {Shop} from '../../context/ShopContext';

const Cart = () => {
	const {cart, removeItem, clear} = useContext(Shop);

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div>
				<h4 className="text-center uppercase font-extrabold text-2xl pt-2">
					Detalle de su compra
				</h4>
			</div>
			<div className="w-11/12  p-2 mt-2">
				{cart.length === 0 ? (
					<p className="text-center font-light text-lg pt-2">No hay compras</p>
				) : (
					<ul className="p-4 border rounded-md">
						{cart.map((producto) => {
							return (
								<div class="flex justify-center items-center w-full">
									<div class="w-2/12">
										<img
											src={producto.image}
											className="w-20 flex-shrink-0 tablet:w-16 cel:w-14"
											alt={producto.title}
										/>
									</div>

									<div class="w-1/5">
										<h2 class="text-gray-800 mb-1 text-lg font-normal uppercase justify tablet:text-sm cel:text-xs">
											{producto.title}
										</h2>
									</div>

									<div class="w-1/5">
										<p class="text-primary text-lg font-bold tablet:text-sm cel:text-xs">
											${producto.price}
										</p>
									</div>

									<div class="w-1/5">
										<p class="text-primary text-lg font-bold tablet:text-sm cel:text-xs">
											Cantidad: {producto.quantity}
										</p>
									</div>

									<div class="w-1/5">
										<button
											onClick={() => removeItem(producto.id)}
											className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
										>
											Eliminar
										</button>
									</div>
								</div>
							);
						})}
					</ul>
				)}
			</div>
			{cart.length !== 0 ? (
				<div className="mt-2">
					<button
						onClick={clear}
						className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
					>
						Vaciar carrito
					</button>
				</div>
			) : null}
		</div>
	);
};

export default Cart;

/* <li
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
							</li> */
