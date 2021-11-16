import PageContentContainer from '../containers/PageContentContainer';
import {
	OrderHistoryContainer,
	HistoryCard,
	ImageContainer,
	SecondaryInfoContainer,
	ProductName,
	BuyAgainButton,
} from './UserOrdersStyles';

export default function UserOrders() {
	return (
		<PageContentContainer>
			<OrderHistoryContainer>
				<h2>Histórico de compras</h2>

				<HistoryCard>
					<ImageContainer>
						<img
							src={
								'https://img.freepik.com/vetores-gratis/astronauta-segurando-a-bandeira-no-espaco-dos-desenhos-animados-icone-ilustracao-icone-do-espaco-de-tecnologia-isolado-estilo-flat-cartoon_138676-3099.jpg?size=338&ext=jpg'
							}
							alt='q'
						/>
					</ImageContainer>
					<ProductName>
						descrição descriçãodescrição descrição descrição
						descrição descrição descrição descriçãodescrição
						descrição descrição descrição descrição descrição
						descriçãodescrição descriçãodescrição descrição
						descrição descrição descrição descrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição descrição
						descrição descrição descrição descrição descrição
						descrição descriçãodescrição descrição descrição
						descrição descrição descrição descriçãodescrição
						descrição descrição descrição descrição descrição
						descrição descrição descriçãodescrição descrição
						descrição descrição descrição descrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição descrição
						descrição descrição descrição descrição
						descriçãodescrição descriçãodescrição descrição
						descrição descrição descrição descrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição
						descriçãodescrição descrição descrição descrição
						descrição descrição descriçãodescrição descrição
						descrição descrição descrição descrição descrição
					</ProductName>
					<SecondaryInfoContainer>
						<div>Quantidade 100</div>
						<div>Preço unitário R$ 1300</div>
						<BuyAgainButton>Comprar novamente</BuyAgainButton>
					</SecondaryInfoContainer>
				</HistoryCard>
			</OrderHistoryContainer>
		</PageContentContainer>
	);
}
