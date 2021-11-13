import styled from 'styled-components';
import Product from './Product';
import { Link } from 'react-router-dom';
import routes from '../../routes/routes';
import CartContext from '../../contexts/CartContext';
import { useContext, useEffect, useState } from 'react';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
        if (!cart.length && cartLocalStorage) {
            setCart(cartLocalStorage);
        }
        if (cartLocalStorage) {
            let totalToSet = 0;
            cartLocalStorage.map(
                (product) =>
                    (totalToSet +=
                        Number(product.price) * product.productQuantity)
            );
            setTotal(totalToSet);
        }
    }, []);

    return (
        <PageContainer>
            <CartContainer>
                <ProductsContainer>
                    {cart.map((product) => (
                        <Product
                            key={product.real_id}
                            info={product}
                            total={total}
                            setTotal={setTotal}
                        />
                    ))}
                </ProductsContainer>
                <PriceContainer>
                    <div>
                        <span>Total</span>
                    </div>
                    <div>
                        <span>R$ {total}</span>
                    </div>
                </PriceContainer>
                <ButtonsContainer>
                    <div>
                        <Link to={routes.home}>
                            <button>Ver mais produtos</button>
                        </Link>
                        <button>Finalizar Compra</button>
                    </div>
                </ButtonsContainer>
            </CartContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: calc(99vh - var(--header-height));
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartContainer = styled.div`
    height: 600px;
    border: 1px solid lightgray;
    padding: 27px;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductsContainer = styled.div`
    width: 450px;
    height: 80%;
    padding: 20px;
    overflow: auto;

    & > div:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const PriceContainer = styled.div`
    width: 450px;
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    span {
        font-size: 22px;
        line-height: 20px;
    }

    div:last-child span {
        font-weight: bold;
    }
`;

const ButtonsContainer = styled.div`
    width: 450px;
    height: 10%;
    position: relative;

    div {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 80%;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    button {
        width: 200px;
        height: 100%;
        background-color: green;
        border: none;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`;
