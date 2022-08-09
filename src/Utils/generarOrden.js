const generateOrder = (
	nombre,
	telefono,
	mail,
	direccion,
	cart,
	precioTotal
) => {
	return {
		buyer: {
			nombre,
			telefono,
			mail,
			direccion,
		},
		items: cart,
		total: precioTotal,
		fecha: new Date().toLocaleString(),
	};
};

export default generateOrder;
