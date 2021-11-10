import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';

import MenuStyle from './MenuStyle';

function CategoryMenu({ closed, setClosed }) {
	CategoryMenu.handleClickOutside = () => setClosed(true);

	return <CategoryMenuStyle closed={closed}>categorias</CategoryMenuStyle>;
}

const clickOutsideConfig = {
	handleClickOutside: () => CategoryMenu.handleClickOutside,
};

const CategoryMenuStyle = styled(MenuStyle)`
	left: 0px;
	border-right: 1px solid #023894;

	@media (max-width: 600px) {
		border-right: none;
	}
`;

export default onClickOutside(CategoryMenu, clickOutsideConfig);
