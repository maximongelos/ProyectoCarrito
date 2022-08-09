import React, {useState} from 'react';
import getCollection from '../../Utils/getCollections';
import ShowProducts from '../../components/ShowProducts';
import ShowOrders from '../../components/ShowOrders';
import CreateProduct from '../../components/CreateProduct';
import {useEffect} from 'react';

const Admin = () => {
	const [mostrarFormulario, setMostrarFormulario] = useState(false);
	const [productos, setProductos] = useState(null);
	const [ordenes, setOrdenes] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await getCollection('products');
			setProductos(data);
			setOrdenes(null);
		};

		getData();
	}, []);

	const handleCreate = () => {
		setMostrarFormulario(true);
		setProductos(null);
	};

	const handleCollection = async (collection) => {
		let res = [];
		if (collection === 'products') {
			res = await getCollection(collection);
			if (res.length > 0) {
				setProductos(res);
			}

			setOrdenes(null);
			setMostrarFormulario(false);
		} else {
			res = await getCollection(collection);
			if (res.length > 0) {
				setOrdenes(res);
			}
			setOrdenes(res);
			setProductos(null);
			setMostrarFormulario(false);
		}
	};

	return (
		<>
			<h1 className=" text-2xl text-center pt-4 uppercase">
				Panel Administrador
			</h1>
			<div className="flex tablet:flex-col cel:flex-col">
				<div className="w-72 h-screen p-5 pt-8 relative tablet:w-full tablet:h-auto cel:w-full cel:h-auto">
					<div className="flex flex-col justify-center gap-x-4 items-center ">
						<ul className="pt-6">
							<li className="flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 tablet:flex-col cel:flex-col ">
								<button
									className="bg-rosa text-blanco py-3 px-6 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
									onClick={handleCreate}
								>
									Agregar Producto
								</button>
							</li>
							<li className="flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 tablet:flex-col cel:flex-col ">
								<button
									className="bg-rosa text-blanco py-3 px-6 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
									onClick={() => handleCollection('products')}
								>
									Ver Listado Productos
								</button>
							</li>
							<li className="flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 tablet:flex-col cel:flex-col ">
								<button
									className="bg-rosa text-blanco py-3 px-6 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
									onClick={() => handleCollection('orders')}
								>
									Ver Listado Ordenes
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full h-screen flex-1 p-5 pt-8">
					{mostrarFormulario ? <CreateProduct /> : null}
					{productos ? <ShowProducts productos={productos} /> : null}
					{ordenes ? <ShowOrders ordenes={ordenes} /> : null}
				</div>
			</div>
		</>
	);
};

export default Admin;
