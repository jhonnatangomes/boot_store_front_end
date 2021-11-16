import HeaderIconButton from '../buttons/HeaderIconButton';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

export default function CartIcon() {
    const history = useHistory();
    const { cart } = useContext(CartContext);

    return (
        <HeaderIconButton onClick={() => history.push(routes.cart)}>
            <CartContainer>
                <AiOutlineShoppingCart />
                {cart.length ? <Counter>{cart.length}</Counter> : ''}
            </CartContainer>
        </HeaderIconButton>
    );
}

const CartContainer = styled.div`
    position: relative;
`;

const Counter = styled.span`
    width: 20px;
    height: 20px;
    font-size: 17px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    top: -5px;
    right: -6px;
`;
