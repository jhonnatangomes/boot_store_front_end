import styled from 'styled-components';

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

export default ProductsGrid;
