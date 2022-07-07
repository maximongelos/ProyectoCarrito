import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/detail/:productId" element={<ItemDetailContainer />} />
					<Route path="/productos" element={<ItemListContainer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
