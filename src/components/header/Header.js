import styled from 'styled-components';

import MenuIcon from './MenuIcon';
import Logo from './Logo';
import SearchBarContainer from '../containers/SearchBarContainer';
import UserAvatar from './UserAvatar';
import CartIcon from './CartIcon';
import UserMenu from '../menus/UserMenu';
import CategoryMenu from '../menus/CategoryMenu';
import ShadowBackground from '../menus/ShadowBackgound';

import { useState } from 'react';

export default function Header() {
	const [categoryMenuClosed, setCategoryMenuClosed] = useState(true);
	const [userMenuClosed, setUserMenuClosed] = useState(true);

	return (
		<HeaderContainer>
			<HeaderStyle>
				<SideContainer>
					<MenuIcon
						onClick={() =>
							setCategoryMenuClosed(!categoryMenuClosed)
						}
					/>
					<Logo />
				</SideContainer>

				<SearchBarContainer />

				<SideContainer>
					<CartIcon />
					<UserAvatar
						onClick={() => setUserMenuClosed(!userMenuClosed)}
					/>
				</SideContainer>
			</HeaderStyle>
			<CategoryMenu
				closed={categoryMenuClosed}
				setClosed={setCategoryMenuClosed}
			/>
			<UserMenu closed={userMenuClosed} setClosed={setUserMenuClosed} />
			<ShadowBackground
				menuClosed={categoryMenuClosed && userMenuClosed}
			/>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	height: var(--header-height);
	position: relative;
	z-index: 10;
`;

const HeaderStyle = styled.header`
	box-sizing: border-box;
	width: 100%;
	height: var(--header-height);
	padding: 0 30px 0 10px;
	background-color: #0046be;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 15;
`;

const SideContainer = styled.div`
	display: flex;
	align-items: center;
`;
