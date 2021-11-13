import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { useHistory } from 'react-router';
import routes from '../../routes/routes';

export default function ProductInfo({ info }) {
    const { name, description, image_url, category, price, color } = info;
    const { user } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    const history = useHistory();

    function addToCart() {
        const isAlreadyInCart = cart.some(
            (product) => product.real_id === info.real_id
        );
        if (!isAlreadyInCart) {
            setCart([...cart, { ...info, productQuantity: 1 }]);
            localStorage.setItem(
                'cart',
                JSON.stringify([...cart, { ...info, productQuantity: 1 }])
            );
        } else {
            const newCart = cart.map((product) => {
                if (product.real_id === info.real_id) {
                    return {
                        ...product,
                        productQuantity: product.productQuantity + 1,
                    };
                }
                return product;
            });
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
        history.push(routes.cart);
    }

    return (
        <ProductInfoContainer>
            <ImageContainer>
                <img src={image_url} alt={''}></img>
            </ImageContainer>
            <VerticalSeparator></VerticalSeparator>
            <InfoContainer>
                <ProductName>{name}</ProductName>
                <OtherInfo>{description}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <OtherInfo>Categoria: {category}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <OtherInfo>Cor: {color}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <div>
                    <Price>Preço: R$ {price.replace('.', ',')}</Price>

                    <Button onClick={addToCart}>Adicionar ao carrinho</Button>
                </div>
            </InfoContainer>
        </ProductInfoContainer>
    );
}

const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 450px;
    height: 450px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const VerticalSeparator = styled.div`
    width: 0px;
    height: 450px;
    border: 1px solid lightgrey;
    margin: 0 25px;
`;

const HorizontalSeparator = styled.div`
    width: 450px;
    height: 0px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 20px;
`;

const InfoContainer = styled.div`
    width: 450px;
    min-height: 450px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductName = styled.p`
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid lightgrey;
`;

const OtherInfo = styled.p`
    font-size: 17px;
    line-height: 19px;
    margin-bottom: 20px;
`;

const Price = styled.p`
    font-weight: bold;
    margin-top: 20px;
    font-size: 20px;
    line-height: 21px;
`;

const Button = styled.button`
    width: 250px;
    height: 70px;
    background-color: green;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;
