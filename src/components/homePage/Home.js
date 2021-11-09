import styled from 'styled-components';
import { getProducts } from '../../services/dataApi';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import Pages from './Pages';

export default function Home() {
	const [products, setProducts] = useState(null);
	const [count, setCount] = useState(null);

	useEffect(() => {
		const promise = getProducts();
		promise
			.then(res => {
				console.log(res.data);
				if (res.data.products) {
					setProducts(res.data.products);
					setCount(res.data.count);
				} else {
					setProducts([]);
				}
			})
			.catch(err => {
				alert('Ocorreu um erro interno');
				console.log(err.response);
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

							<Pages numPages={count} setProducts={setProducts} />
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
`;
