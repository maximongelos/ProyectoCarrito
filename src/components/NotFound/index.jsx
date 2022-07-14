import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="w-full absolute top-1/3 text-center text-negro">
			<h2>Oops! Página no encontrada.</h2>
			<h1 className="text-9xl m-0 font-black">404</h1>
			<Link
				to="/"
				className="bg-rosa text-blanco py-3 px-6 rounded-3xl text-sm uppercase hover:bg-rosaFuerte"
			>
				Volver al Inicio
			</Link>
		</div>
	);
};

export default NotFound;
