import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import CardWidget from '../CardWidget';
import logo from '../../assets/DuoShowroom.png';

const NavBar = () => {
	return (
		<>
			<header>
				<Link className="logo" to="/">
					<img src={logo} alt="logo" />
					<h2 className="titulo">Dúo Showroom</h2>
				</Link>
				<nav>
					<ul className="nav-container">
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/nosotros">Nosotros</Link>
						</li>
						<li>
							<Link to="/productos">Productos</Link>
						</li>
						<li>
							<Link to="/contacto">Contacto</Link>
						</li>
						<CardWidget />
					</ul>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
