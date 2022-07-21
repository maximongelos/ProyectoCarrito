import React from 'react';
import {useState} from 'react';
import {createContext} from 'react';

export const Shop = createContext();

const ShopProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	let precioFinal = 0;

	const addItem = (producto, cantidad) => {
		const productoRepetido = isInCart(producto.id);

		if (productoRepetido) {
			productoRepetido.quantity += cantidad;
			productoRepetido.stock -= cantidad;

			setCart([...cart]);
		} else {
			producto.stock -= cantidad;
			setCart([...cart, {...producto, quantity: cantidad}]);
		}
	};

	const removeItem = (id) => {
		const cartUpdate = cart.filter((elemento) => elemento.id !== id);
		cartUpdate.forEach((producto) => {
			precioFinal += producto.quantity * producto.price;
		});
		setCart(cartUpdate);
		setTotalPrice(precioFinal);
	};

	const clear = () => {
		setCart([]);
		setTotalPrice(0);
	};

	const isInCart = (id) => {
		return cart.find((elemento) => elemento.id === id);
	};

	return (
		<Shop.Provider
			value={{addItem, cart, removeItem, clear, setTotalPrice, totalPrice}}
		>
			{children}
		</Shop.Provider>
	);
};

export default ShopProvider;
