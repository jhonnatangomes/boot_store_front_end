import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';

import MenuStyle from './MenuStyle';

function UserMenu({ closed, setClosed }) {
	UserMenu.handleClickOutside = () => setClosed(true);

	return <UserMenuStyle closed={closed}>Login</UserMenuStyle>;
}

const clickOutsideConfig = {
	handleClickOutside: () => UserMenu.handleClickOutside,
};

const UserMenuStyle = styled(MenuStyle)`
	border-left: 1px solid #023894;
	right: 0px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 600px) {
		border-left: none;
	}
`;

export default onClickOutside(UserMenu, clickOutsideConfig);
