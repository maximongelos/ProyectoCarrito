import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/DuoShowRooom.png';
import {IoIosMenu} from 'react-icons/io';
import CardWidget from '../CardWidget';

const NavBar = () => {
	return (
		<>
			<nav className="flex justify-between items-center bg-rosa text-black relative shadow-sm uppercase">
				<Link to="/" className="flex items-center">
					<img
						className="h-20 mr-2.5 tablet:h-24 cel:h-24"
						src={logo}
						alt="logo"
					/>
				</Link>
				<div className=" px-4 cursor-pointer desktop:hidden">
					<IoIosMenu className=" h-10 w-10" />
				</div>
				<div className="flex justify-between pr-8 tablet:hidden cel:hidden">
					<div>
						<Link to="/" className=" font-normal p-2 uppercase hover:text-gris">
							Inicio
						</Link>

						<Link
							to="/nosotros"
							className=" font-normal p-2 uppercase hover:text-gris"
						>
							Nosotros
						</Link>

						<Link
							to="/productos"
							className=" font-normal p-2 uppercase hover:text-gris"
						>
							Productos
						</Link>

						<Link
							to="/contacto"
							className=" font-normal p-2 uppercase hover:text-gris"
						>
							Contacto
						</Link>
					</div>
					<div>
						<CardWidget />
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
