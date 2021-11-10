import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import routes from '../../routes/routes';

import MenuStyle from './MenuStyle';

import { getAllCategories } from '../../services/dataApi';

export default function CategoryMenu({ closed, setClosed }) {
	const [categories, setCategories] = useState([]);
	const myRef = useRef(null);
	const history = useHistory();

	const executeScroll = () => myRef.current.scrollIntoView();

	if (!closed) executeScroll();

	useEffect(() => {
		getAllCategories()
			.then(response => setCategories(response.data))
			.catch(error => setCategories([]));
	}, []);

	return (
		<CategoryMenuStyle closed={closed}>
			<h2 ref={myRef}>Categorias</h2>
			{categories.length > 0 ? (
				<ul>
					{categories.map((category, i) => (
						<li
							key={i}
							onClick={() => {
								setClosed(true);
								history.push(
									routes.categories.replace(
										':categoryName',
										category
									)
								);
							}}
						>
							{category}
						</li>
					))}
				</ul>
			) : (
				<NoCategoriesText>
					Não há categorias a serem exibidas
				</NoCategoriesText>
			)}
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

const NoCategoriesText = styled.p`
	font-size: 18px;
	word-break: break-word;
	margin: 0px 30px 30px 50px;
`;
