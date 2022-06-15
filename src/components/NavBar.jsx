import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<>
			<nav className="navbar">
				<li className="titulo">Proyecto Carrito</li>
				<ul>
					<li>Inicio</li>
					<li>Nosotros</li>
					<li>Productos</li>
					<li>Contacto</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
