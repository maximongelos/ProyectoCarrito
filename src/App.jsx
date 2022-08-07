import NavBar from './components/NavBar';

import {BrowserRouter} from 'react-router-dom';
import ShopProvider from './context/ShopContext';
import Router from './components/Router';

function App() {
	return (
		<ShopProvider>
			<BrowserRouter>
				<NavBar />
				<Router />
			</BrowserRouter>
		</ShopProvider>
	);
}

export default App;
