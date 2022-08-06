import React from 'react';

const ShowOrders = ({ordenes}) => {
	return (
		<>
			<table className="w-full border-2 text-center">
				<thead>
					<tr>
						<th className="border-2">Nombre</th>
						<th className="border-2">Dirreccion</th>
						<th className="border-2">Mail</th>
						<th className="border-2">Telefono</th>
					</tr>
				</thead>
				<tbody className="border-2">
					{ordenes.map((orden) => {
						return (
							<tr key={orden.id} className="border-2">
								<td className="w-2/12 text-center mb-1 text-lg font-normal border-2 tablet:text-sm cel:text-xs">
									{orden.buyer.nombre}
								</td>
								<td className=" w-2/12 text-center mb-1 text-lg font-normal border-2 tablet:text-sm cel:text-xs">
									{orden.buyer.direccion}
								</td>
								<td className=" w-2/12 text-center mb-1 text-lg font-normal border-2 tablet:text-sm cel:text-xs">
									{orden.buyer.mail}
								</td>
								<td className=" w-2/12 text-center text-lg font-normal border-2 tablet:text-sm cel:text-xs">
									{orden.buyer.telefono}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ShowOrders;
