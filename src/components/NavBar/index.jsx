import React from 'react';
import './style.css';
import CardWidget from '../CardWidget';

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
					<CardWidget />
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
