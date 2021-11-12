import './App.css';

import Header from './components/header/Header';
import PageContainer from './components/containers/PageContainer';

import routes from './routes/routes';
import Home from './components/homePage/Home';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Categories from './components/categories/Categories';
import Product from './components/productPage/Product';
import Cart from './components/cart/Cart';
import UserOrders from './components/userOrders/UserOrders';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';

export default function App() {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Header />
                    <PageContainer>
                        <Switch>
                            <Route exact path={routes.signUp}>
                                <SignUp />
                            </Route>

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
                </CartContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
