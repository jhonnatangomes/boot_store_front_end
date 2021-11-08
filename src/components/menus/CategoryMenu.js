import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';

import MenuStyle from './MenuStyle';

function CategoryMenu({ closed, setClosed }) {
	CategoryMenu.handleClickOutside = () => setClosed(true);

	return (
		<CategoryMenuStyle closed={closed}>
			<ul>
				<li>primeiro</li>
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

const clickOutsideConfig = {
	handleClickOutside: () => CategoryMenu.handleClickOutside,
};

const CategoryMenuStyle = styled(MenuStyle)`
	left: 0px;
	border-right: 1px solid #023894;
	border-bottom-right-radius: 5px;

	@media (max-width: 600px) {
		border-right: none;
	}
`;

export default onClickOutside(CategoryMenu, clickOutsideConfig);
