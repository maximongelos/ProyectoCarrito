import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './style.css';
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greating}) => {
	const [color, setColor] = useState('Blue');
	const [colorFuente, setColorFuente] = useState('white');
	const [count, setCount] = useState({clicks: 0, fecha: '-'});

	const cambiarColor = () => {
		const fecha = new Date().toLocaleTimeString();

		if (color === 'Blue') {
			setColor('Red');
			setColorFuente('black');
			setCount({clicks: count.clicks + 1, fecha: fecha});
		} else {
			setColor('Blue');
			setColorFuente('white');
			setCount({clicks: count.clicks + 1, fecha: fecha});
		}
	};

	useEffect(() => {
		console.log('Se monto el componente');
	}, []);

	return (
		<>
			<div style={{backgroundColor: color}} className="container">
				<p style={{color: colorFuente}}>{greating}</p>
				<ItemCount initialStock={10} />
				<hr />
				<button className="btn" onClick={cambiarColor}>
					Cambiar Color
				</button>
				<br />
				<p style={{color: colorFuente}}>Veces clickeado: {count.clicks}</p>
				<p style={{color: colorFuente}}>Ultima vez clickeado: {count.fecha}</p>
			</div>
		</>
	);
};

export default ItemListContainer;
