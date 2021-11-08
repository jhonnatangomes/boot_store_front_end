import './App.css';

import Header from './components/header/Header';
import PageContainer from './components/containers/PageContainer';

import routes from './routes/routes';
import Home from './routes/Home';
import Login from './routes/Login';
import Categories from './routes/Categories';
import Product from './routes/Product';
import Cart from './routes/Cart';
import UserOrders from './routes/UserOrders';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';

export default function App() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<PageContainer>
					<Switch>
						<Route exact path={routes.login}>
							<Login />
						</Route>

						<Route path={routes.userOrders}>
							<UserOrders />
						</Route>

						<Route exact path={routes.cart}>
							<Cart />
						</Route>

						<Route path={routes.products}>
							<Product />
						</Route>

						<Route exact path={routes.categories}>
							<Categories />
						</Route>

						<Route path={routes.home}>
							<Home />
						</Route>
					</Switch>
				</PageContainer>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
