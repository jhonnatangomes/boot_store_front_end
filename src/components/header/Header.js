import styled from 'styled-components';

import MenuIcon from './MenuIcon';
import Logo from './Logo';
import SearchBarContainerDesktop from './searchBar/SearchBarContainerDesktop';
import SearchBarContainerMobile from './searchBar/SearchBarContainerMobile';
import SearchIconMobile from './searchBar/SearchIconMobile';
import UserAvatar from './UserAvatar';
import CartIcon from './CartIcon';
import UserMenu from '../menus/UserMenu';
import CategoryMenu from '../menus/CategoryMenu';
import ShadowBackground from '../menus/ShadowBackgound';

import { useState } from 'react';

export default function Header() {
	const [mobileSearchClosed, setMobileSearchClosed] = useState(true);
	const [categoryMenuClosed, setCategoryMenuClosed] = useState(true);
	const [userMenuClosed, setUserMenuClosed] = useState(true);

	const closeBothMenu = () => {
		if (!categoryMenuClosed || !userMenuClosed || !mobileSearchClosed) {
			setCategoryMenuClosed(true);
			setUserMenuClosed(true);
			setMobileSearchClosed(true);
		}
	};

	return (
		<HeaderContainer>
			<HeaderStyle onClick={closeBothMenu}>
				<SideContainer>
					<MenuIcon
						onClick={() =>
							setCategoryMenuClosed(!categoryMenuClosed)
						}
					/>
					<Logo />
				</SideContainer>

				<SearchBarContainerDesktop />

				<SideContainer>
					<SearchIconMobile
						onClick={() =>
							setMobileSearchClosed(!mobileSearchClosed)
						}
					/>
					<CartIcon />
					<UserAvatar onClick={() => setUserMenuClosed(false)} />
				</SideContainer>
			</HeaderStyle>

			<SearchBarContainerMobile closed={mobileSearchClosed} />

			<CategoryMenu
				closed={categoryMenuClosed}
				setClosed={setCategoryMenuClosed}
			/>

			<UserMenu closed={userMenuClosed} setClosed={setUserMenuClosed} />

			<ShadowBackground
				menuClosed={
					categoryMenuClosed && userMenuClosed && mobileSearchClosed
				}
				onClick={closeBothMenu}
			/>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	height: var(--header-height);
	position: fixed;
	top: 0;
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
