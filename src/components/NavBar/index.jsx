import React from 'react';
import './style.css';
import CardWidget from '../CardWidget';

const NavBar = () => {
	return (
		<>
			<header>
				<div className="titulo">
					<a href="#">Proyecto Carrito</a>
				</div>
				<nav>
					<a href="#">Inicio</a>
					<a href="#">Nosotros</a>
					<a href="#">Productos</a>
					<a href="#">Contacto</a>
					<CardWidget />
				</nav>
			</header>
		</>
	);
};

export default NavBar;
