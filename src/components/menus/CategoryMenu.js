import styled from 'styled-components';

import { useRef } from 'react';

import MenuStyle from './MenuStyle';

export default function CategoryMenu({ closed, setClosed }) {
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView();

	if (!closed) executeScroll();

	return (
		<CategoryMenuStyle closed={closed}>
			<h2 ref={myRef}>Categorias</h2>
			<ul>
				<li>primeiro</li>
				<li>eletrônicos</li>
				<li>qualquer coisa muito grande</li>
				<li>mais um teste</li>
				<li>
					qualquer coisa muito grande qualquer coisa muito grande
					qualquer coisa muito grande qualquer coisa muito grande
					qualquer coisa muito grande qualquer coisa muito grande
					qualquer coisa muito grande qualquer coisa muito grande
				</li>
				<li>pneumoultramicroscopicossilicovulcanoconiótico</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
				<li>teste</li>
			</ul>
		</CategoryMenuStyle>
	);
}

const CategoryMenuStyle = styled(MenuStyle)`
	left: 0px;
	border-right: 1px solid #023894;
	border-bottom-right-radius: 5px;

	ul {
		align-items: flex-start;
	}

	li {
		word-break: break-word;
		margin: 0px 30px 30px 50px;
	}

	@media (max-width: 600px) {
		border-right: none;
	}
`;
