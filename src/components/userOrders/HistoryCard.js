import {
	HistoryCardStyle,
	ImageContainer,
	SecondaryInfoContainer,
	ProductName,
	BuyAgainButton,
} from './UserOrdersStyles';

export default function HistoryCard({ product }) {
	const { productId, name, price, quantity, image_url } = product;

	return (
		<HistoryCardStyle>
			<ImageContainer>
				<img src={image_url} alt='Imagem do produto' />
			</ImageContainer>
			<ProductName>{name}</ProductName>
			<SecondaryInfoContainer>
				<div>Quantidade {quantity}</div>
				<div>Preço unitário R$ {price}</div>
				<BuyAgainButton>Comprar novamente</BuyAgainButton>
			</SecondaryInfoContainer>
		</HistoryCardStyle>
	);
}
