import ProductCard from '../ProductCard/ProductCard';
import Pages from '../pagesNumbers/Pages';
import PageContentContainer from '../containers/PageContentContainer';
import ProductsGrid from '../containers/ProductGrid';

export default function ProductsView({
	products,
	totalPages,
	currentPage,
	setCurrentPage,
}) {
	return (
		<PageContentContainer>
			{products ? (
				<>
					{products.length > 0 ? (
						<>
							<ProductsGrid>
								{products.map((product, i) => (
									<ProductCard key={i} product={product} />
								))}
							</ProductsGrid>

							<Pages
								totalPages={totalPages}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						</>
					) : (
						<p> Não há produtos a serem exibidos</p>
					)}
				</>
			) : (
				<p>Carregando...</p>
			)}
		</PageContentContainer>
	);
}
