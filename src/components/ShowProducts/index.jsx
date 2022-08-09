import React from 'react';
import {BiEditAlt} from 'react-icons/bi';
import {MdDeleteOutline} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import eliminarProducto from '../../Utils/eliminarProducto';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const ShowProducts = ({productos}) => {
	const navigate = useNavigate();

	const handleEdit = (id) => {
		navigate(`/edit/${id}`);
	};

	const handleDelete = (id) => {
		eliminarProducto(id);
	};

	const confirmDelete = (id) => {
		MySwal.fire({
			title: '¿Eliminar el producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'SI',
		}).then((result) => {
			if (result.isConfirmed) {
				//llamamos a la fcion para eliminar
				handleDelete(id);
				Swal.fire('Eliminado!', 'El producto ha sido eliminado', 'success');
			}
		});
	};

	return (
		<>
			<table className="w-full border-2 text-center">
				<thead>
					<tr>
						<th className="border-2">Articulo</th>
						<th className="border-2">Descripcion</th>
						<th className="border-2">Categoria</th>
						<th className="border-2">Stock</th>
						<th className="border-2">Acción</th>
					</tr>
				</thead>
				<tbody className="border-2">
					{productos.map((producto) => {
						return (
							<tr key={producto.id} className="border-2">
								<td className="w-2/12 text-center mb-1 text-lg font-normal uppercase border-2 tablet:text-sm cel:text-xs">
									{producto.title}
								</td>
								<td className=" w-2/12 text-center mb-1 text-lg font-normal uppercase border-2 tablet:text-sm cel:text-xs">
									{producto.description}
								</td>
								<td className=" w-2/12 text-center mb-1 text-lg font-normal uppercase border-2 tablet:text-sm cel:text-xs">
									{producto.category}
								</td>
								<td className=" w-2/12 text-center text-lg font-normal border-2 tablet:text-sm cel:text-xs">
									{producto.stock}
								</td>

								<td className="w-1/12 text-center">
									<button
										className="text-3xl"
										onClick={() => handleEdit(producto.id)}
									>
										<BiEditAlt />
									</button>
									<button
										className="text-3xl"
										onClick={() => confirmDelete(producto.id)}
									>
										<MdDeleteOutline />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ShowProducts;
