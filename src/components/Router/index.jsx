import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ItemListContainer from '../../containers/ItemListContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer';
import NotFound from '../NotFound';
import Home from '../Home';
import Cart from '../../containers/CartContainer';
import Admin from '../../containers/AdminContainer';
import EditProduct from '../EditProduct';
import Checkout from '../Checkout';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/detail/:productId" element={<ItemDetailContainer />} />
				<Route path="/productos" element={<ItemListContainer />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/edit/:productId" element={<EditProduct />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default Router;
