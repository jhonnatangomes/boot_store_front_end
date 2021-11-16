import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { removeProduct, updateQuantity } from '../../services/dataApi';

export default function Product({ info, total, setTotal }) {
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const [productQuantity, setProductQuantity] = useState(1);
    const [pageLoaded, setPageLoaded] = useState(false);
    const { real_id, id, image_url, name, price } = info;

    let totalPrice = Number(price) * productQuantity;

    useEffect(() => {
        if (!pageLoaded) {
            const product = cart.find((product) => product.real_id === real_id);
            setProductQuantity(product.productQuantity);
            setPageLoaded(true);
        }
        if (!user && pageLoaded) {
            cart.forEach((product) => {
                if (product.real_id === real_id) {
                    product.productQuantity = productQuantity;
                }
            });
            cartLocalStorage.forEach((product) => {
                if (product.real_id === real_id) {
                    product.productQuantity = productQuantity;
                }
            });
            localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
        }
        if (user && pageLoaded) {
            const promise = updateQuantity(user.token, {
                uuid: id,
                quantity: productQuantity,
            });
            promise.then((res) => setCart(res.data));
        }
    }, [productQuantity]);

    function changeQuantity(change) {
        if (change === '+') {
            setProductQuantity(productQuantity + 1);
            const totalToSet = Number(total.replace(',', '.')) + Number(price);
            setTotal(totalToSet.toFixed(2).replace('.', ','));
        }
        if (change === '-' && productQuantity !== 1) {
            setProductQuantity(productQuantity - 1);
            const totalToSet = Number(total.replace(',', '.')) - Number(price);
            setTotal(totalToSet.toFixed(2).replace('.', ','));
        }
    }

    function removeItem() {
        const confirm = window.confirm(
            'Você tem certeza que quer remover o produto?'
        );
        if (confirm) {
            if (!user) {
                const newCart = cart.filter(
                    (product) => product.real_id !== real_id
                );
                setCart(newCart);
                localStorage.setItem('cart', JSON.stringify(newCart));
                const totalToSet =
                    Number(total.replace(',', '.')) -
                    Number(price) * productQuantity;
                setTotal(totalToSet.toFixed(2).replace('.', ','));
            } else {
                const promise = removeProduct(user.token, id);
                promise
                    .then((res) => {
                        setCart(res.data);
                        const totalToSet =
                            Number(total.replace(',', '.')) -
                            Number(price) * productQuantity;
                        setTotal(totalToSet.toFixed(2).replace('.', ','));
                        if (res.data.length) {
                            localStorage.setItem(
                                'cart',
                                JSON.stringify(res.data)
                            );
                        } else {
                            localStorage.removeItem('cart');
                        }
                    })
                    .catch((err) => console.log(err.response));
            }
        }
    }

    return (
        <ProductContainer>
            <ProductImage>
                <img src={image_url} alt=""></img>
            </ProductImage>
            <ProductName>
                <span>{name}</span>
            </ProductName>
            <Price>
                <Counter>
                    <button onClick={() => changeQuantity('-')}>-</button>
                    <span>{productQuantity}</span>
                    <button onClick={() => changeQuantity('+')}>+</button>
                </Counter>
                <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                <Remove onClick={removeItem}>Remover</Remove>
            </Price>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    display: flex;
    text-align: justify;
    text-justify: inter-word;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const ProductImage = styled.div`
    width: 80px;
    height: 80px;
    background-color: black;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProductName = styled.div`
    max-width: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5;

    span {
        font-size: 16px;
    }
`;

const Price = styled.div`
    max-width: 135px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & > span:nth-child(2) {
        font-size: 16px;
        font-weight: bold;
    }
`;

const Counter = styled.div`
    width: 80px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    background-color: white;

    button {
        height: 20px;
        border: none;
        outline: none;
        background-color: inherit;
        border: 1px solid lightgray;
        cursor: pointer;
    }
`;

const Remove = styled.span`
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
`;
