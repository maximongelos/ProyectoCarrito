import React from 'react';
import './style.css';
import CardWidget from '../CardWidget';
import logo from '../../assets/DuoShowroom.png';

const NavBar = () => {
	return (
		<>
			<header>
				<a href="#" className="logo">
					<img src={logo} alt="logo" />
					<h2 className="titulo">Dúo Showroom</h2>
				</a>
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
