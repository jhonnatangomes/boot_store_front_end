import './App.css';

import Header from './components/header/Header';
import PageContainer from './components/containers/PageContainer';

import routes from './routes/routes';
import Home from './components/homePage/Home';
import Login from './components/login/Login';
import Categories from './components/categories/Categories';
import Product from './components/productPage/Product';
import Cart from './components/cart/Cart';
import UserOrders from './components/userOrders/UserOrders';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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

                        <Route exact path={routes.userOrders}>
                            <UserOrders />
                        </Route>

                        <Route exact path={routes.cart}>
                            <Cart />
                        </Route>

                        <Route exact path={routes.products}>
                            <Product />
                        </Route>

                        <Route exact path={routes.categories}>
                            <Categories />
                        </Route>

                        <Route exact path={routes.home}>
                            <Home />
                        </Route>

                        <Redirect to={routes.home} />
                    </Switch>
                </PageContainer>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
