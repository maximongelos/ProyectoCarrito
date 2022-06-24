import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './style.css';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greating}) => {
	const [color, setColor] = useState('Blue');
	const [colorFont, setColorFont] = useState('white');
	const [count, setCount] = useState({clicks: 0, fecha: '-'});

	const handleColor = () => {
		const fecha = new Date().toLocaleTimeString();

		if (color === 'Blue') {
			setColor('Red');
			setColorFont('black');
			setCount({clicks: count.clicks + 1, fecha: fecha});
		} else {
			setColor('Blue');
			setColorFont('white');
			setCount({clicks: count.clicks + 1, fecha: fecha});
		}
	};

	useEffect(() => {
		console.log('Se monto el componente');
	}, []);

	return (
		<>
			<div style={{backgroundColor: color}} className="container">
				<p style={{color: colorFont}}>{greating}</p>
				<ItemCount initialStock={10} initial={1} />
				<hr />
				<button className="btn-color" onClick={handleColor}>
					Cambiar Color
				</button>
				<br />
				<p style={{color: colorFont}}>Veces clickeado: {count.clicks}</p>
				<p style={{color: colorFont}}>Ultima vez clickeado: {count.fecha}</p>
			</div>
		</>
	);
};

export default ItemListContainer;
