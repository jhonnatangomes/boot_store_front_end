import styled from 'styled-components';
import { getProducts } from '../../services/dataApi';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import Pages from './Pages';

export default function Home() {
	const [products, setProducts] = useState(null);
	const [pagesCount, setPagesCount] = useState(null);

	useEffect(() => {
		getProducts()
			.then(res => {
				if (res.data.products) {
					setProducts(res.data.products);
					setPagesCount(res.data.pagesCount);
				} else {
					setProducts([]);
				}
			})
			.catch(err => {
				setProducts([]);
			});
	}, []);

	return (
		<HomeContainer>
			{products ? (
				<>
					{products.length > 0 ? (
						<>
							<ProductsGrid>
								{products.map(product => (
									<ProductCard
										key={product.id}
										product={product}
									/>
								))}
							</ProductsGrid>

							<Pages
								numPages={pagesCount}
								setProducts={setProducts}
							/>
						</>
					) : (
						<p> Não há produtos a serem exibidos</p>
					)}
				</>
			) : (
				<p>Carregando...</p>
			)}
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	min-height: calc(100vh - var(--header-height) - 1px);
	text-align: center;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	> p {
		font-size: 18px;
		margin-top: 100px;
	}
`;

const ProductsGrid = styled.div`
	max-width: 1056px; // this width is equivalent to 4 ProductCards widths
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	& > div {
		margin: 20px 7px;
	}

	@media (max-width: 1055px) {
		max-width: 792px; // 3 ProductCards widths
	}

	@media (max-width: 791px) {
		max-width: 528px; // 2 ProductCards widths
	}

	@media (max-width: 527px) {
		max-width: 264px; // 1 ProductCards widths
	}
`;
