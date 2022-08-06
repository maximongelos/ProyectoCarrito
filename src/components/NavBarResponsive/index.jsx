import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosMenu} from 'react-icons/io';
import logo from '../../assets/DuoShowRooom.png';

export default function Navbar({fixed}) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-rosa mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static desktop:block lg:justify-start">
						<Link to="/" className="flex items-center">
							<img
								className="h-20 mr-2.5 tablet:h-24 cel:h-24"
								src={logo}
								alt="logo"
							/>
						</Link>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<IoIosMenu className=" h-10 w-10" />
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Share</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Tweet</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
									<span className="ml-2">Pin</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
