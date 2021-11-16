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

import { formatDate } from '../../helpers/helpers';

export default function HistoryCard({ product }) {
	const { productId, name, price, quantity, image_url } = product;
	const purchaseDate = formatDate(product.purchaseDate);
	const { user } = useContext(UserContext);
	const { cart } = useContext(CartContext);

	const history = useHistory();

	function insertProductInCart() {
		postProduct(user.token, {
			uuid: productId,
			quantity,
		})
			.then(() => history.push(routes.cart))
			.catch(error => console.log(error.response));
	}

	return (
		<HistoryCardStyle>
			<ImageContainer>
				<img src={image_url} alt='Imagem do produto' />
			</ImageContainer>
			<ProductName>{name}</ProductName>
			<SecondaryInfoContainer>
				<div>Data da compra {purchaseDate}</div>
				<div>Quantidade {quantity}</div>
				<div>Preço unitário R$ {price}</div>
				<BuyAgainButton onClick={insertProductInCart}>
					Comprar novamente
				</BuyAgainButton>
			</SecondaryInfoContainer>
		</HistoryCardStyle>
	);
}
