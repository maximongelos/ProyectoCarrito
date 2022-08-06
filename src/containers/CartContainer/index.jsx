import React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Shop} from '../../context/ShopContext';

const Cart = () => {
	const {cart, removeItem, clear, setTotalPrice, totalPrice} = useContext(Shop);
	let precioFinal = 0;

	const navigate = useNavigate();

	const handleCheckout = async () => {
		navigate('/checkout');
	};

	const handleProducts = () => {
		navigate('/productos');
	};

	return (
		<div className="flex flex-col justify-center items-center w-full text-center">
			<div>
				<h4 className="text-center uppercase font-extrabold text-2xl pt-2">
					Detalle de su compra
				</h4>
			</div>
			<div className="w-11/12 p-2 mt-2 ">
				{cart.length === 0 ? (
					<>
						<p className="text-center font-light text-lg pt-2 underline underline-offset-1">
							No hay compras
						</p>
						<button
							onClick={handleProducts}
							className="bg-rosa text-blanco py-3 px-6 mt-10  rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
						>
							Ir a productos
						</button>
					</>
				) : (
					<>
						<hr className="mb-4" />
						<table className="w-full">
							<thead>
								<tr>
									<th></th>
									<th>Articulo</th>
									<th>Cantidad</th>
									<th>Precio</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{cart.map((producto) => {
									let precioTotal = producto.price * producto.quantity;
									precioFinal += precioTotal;
									setTotalPrice(precioFinal.toFixed(2));
									return (
										<tr key={producto.id}>
											<td className="w-1/12 text-center">
												<img
													src={producto.image}
													className="w-16 tablet:w-16 cel:w-14"
													alt={producto.title}
												/>
											</td>
											<td className=" w-2/12 text-center mb-1 text-lg font-normal uppercase justify tablet:text-sm cel:text-xs">
												{producto.title}
											</td>
											<td className=" w-2/12 text-center text-lg font-bold tablet:text-sm cel:text-xs">
												{producto.quantity}
											</td>
											<td className=" w-2/12 text-center text-lg font-bold tablet:text-sm cel:text-xs">
												$ {precioTotal}
											</td>
											<td className=" w-1/12 text-center">
												<button
													onClick={() => removeItem(producto.id)}
													className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
												>
													Eliminar
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<hr className=" mt-4" />
					</>
				)}
			</div>
			{cart.length !== 0 ? (
				<div className="flex justify-between items-end w-10/12">
					<div className="mt-2">
						<button
							onClick={clear}
							className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
						>
							Vaciar carrito
						</button>
					</div>
					<div>
						<div>Subtotal: $ {totalPrice}</div>
						<div className="mt-2 text-center">
							<button
								onClick={handleCheckout}
								className="bg-rosa text-blanco py-1 px-3 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
							>
								Ir a pagar
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Cart;

/* <ul className="p-4 border rounded-md">
	{cart.map((producto) => {
		let precioTotal = producto.price * producto.quantity;
		return (
			<div class="flex justify-between items-center w-full justify tablet:text-xs cel:text-xs">
				<div>
					<img
						src={producto.image}
						className="w-20 flex-shrink-0 tablet:w-16 cel:w-14"
						alt={producto.title}
					/>
				</div>

				<div>
					<h2 class="text-gray-800 mb-1 text-lg font-normal uppercase justify tablet:text-sm cel:text-xs">
						{producto.title.substring(0, 12)}
					</h2>
				</div>

				<div>
					<p class="text-primary text-lg font-bold tablet:text-sm cel:text-xs">
						${precioTotal}
					</p>
				</div>

				<div>
					<p class="text-primary text-lg font-bold tablet:text-sm cel:text-xs">
						Cantidad: {producto.quantity}
					</p>
				</div>

				<div>
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
</ul> */
