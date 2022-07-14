import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Cart from './containers/CartContainer';
import ShopProvider from './context/ShopContext';

function App() {
	return (
		<ShopProvider>
			<BrowserRouter>
				<div className="w-full h-screen bg-blanco font-poppins">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route
							path="/detail/:productId"
							element={<ItemDetailContainer />}
						/>
						<Route path="/productos" element={<ItemListContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</ShopProvider>
	);
}

export default App;
