import {
	HistoryCardStyle,
	ImageContainer,
	SecondaryInfoContainer,
	ProductName,
	BuyAgainButton,
} from './UserOrdersStyles';

import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

import { postProduct } from '../../services/dataApi';

export default function HistoryCard({ product }) {
	const { productId, name, price, quantity, image_url } = product;
	const { user } = useContext(UserContext);
	const { cart } = useContext(CartContext);

	const history = useHistory();

	function insertProductInCart(newCart) {
		if (!user) {
			localStorage.setItem('cart', JSON.stringify(newCart));
			history.push(routes.cart);
		} else {
			postProduct(user.token, {
				uuid: productId,
				quantity,
			})
				.then(() => history.push(routes.cart))
				.catch(error => console.log(error.response));
		}
	}

	return (
		<HistoryCardStyle>
			<ImageContainer>
				<img src={image_url} alt='Imagem do produto' />
			</ImageContainer>
			<ProductName>{name}</ProductName>
			<SecondaryInfoContainer>
				<div>Quantidade {quantity}</div>
				<div>Preço unitário R$ {price}</div>
				<BuyAgainButton
					onClick={() =>
						insertProductInCart([
							...cart,
							{ ...product, real_id: null },
						])
					}
				>
					Comprar novamente
				</BuyAgainButton>
			</SecondaryInfoContainer>
		</HistoryCardStyle>
	);
}
