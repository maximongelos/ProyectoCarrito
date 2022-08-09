import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosMenu} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';
import logo from '../../assets/DuoShowRooom.png';
import CardWidget from '../CardWidget';

export default function Navbar({fixed}) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-rosa mb-3">
				<div className="w-full tablet:h-full cel:h-full tablet:flex-col cel:flex-col px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between desktop:w-auto desktop:static desktop:block desktop:justify-start">
						<Link to="/" className="flex items-center">
							<img
								className="h-20 mr-2.5 tablet:h-24 cel:h-24"
								src={logo}
								alt="logo"
							/>
						</Link>

						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1  border-transparent rounded bg-transparent block desktop:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							{!navbarOpen ? (
								<IoIosMenu className=" h-10 w-10" />
							) : (
								<GrFormClose className=" h-10 w-10" />
							)}
						</button>
					</div>

					<div
						className={
							'desktop:flex flex-grow-0 items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col tablet:gap-3 cel:gap-3 tablet:p-3 cel:p-3 desktop:flex-row list-none text-center desktop:ml-auto">
							<li
								className="nav-item tablet:gap-2 cel:gap-2"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<Link
									to="/"
									className=" font-normal p-2 uppercase hover:text-gris"
								>
									Inicio
								</Link>
							</li>
							<li
								className="nav-item"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<Link
									to="/nosotros"
									className=" font-normal p-2 uppercase hover:text-gris"
								>
									Nosotros
								</Link>
							</li>
							<li
								className="nav-item"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<Link
									to="/productos"
									className=" font-normal p-2 uppercase hover:text-gris"
								>
									Productos
								</Link>
							</li>
							<li
								className="nav-item"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<Link
									to="/contacto"
									className=" font-normal p-2 uppercase hover:text-gris"
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
					<div
						className={
							'desktop:flex flex-grow-0 items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
					>
						<div className="flex items-center tablet:flex-col cel:flex-col tablet:gap-2 cel:gap-2 desktop:order-2">
							<Link
								to="/login"
								className="dark:text-negro hover:bg-gris focus:ring-4 focus:ring-gris font-medium rounded-lg text-normal p-2 desktop:px-5 desktop:py-2.5 mr-1 desktop:mr-2 dark:hover:bg-gris focus:outline-none dark:focus:ring-gris uppercase"
							>
								Login
							</Link>
							<Link
								to="/admin"
								className="dark:text-negro hover:bg-gris focus:ring-4 focus:ring-gris font-medium rounded-lg text-normal p-2 desktop:px-5 desktop:py-2.5 mr-1 desktop:mr-2 dark:hover:bg-gris focus:outline-none dark:focus:ring-gris uppercase"
							>
								Admin
							</Link>
							<CardWidget />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
