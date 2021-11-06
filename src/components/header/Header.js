import styled from 'styled-components';

import HeaderStyle from './HeaderStyle';

import MenuIcon from '../menu/MenuIcon';
import Logo from './Logo';
import SearchBarContainer from '../containers/SearchBarContainer';
import UserAvatar from './UserAvatar';
import CartIcon from './CartIcon';

export default function Header() {
	return (
		<HeaderStyle>
			<SideContainer>
				<MenuIcon />
				<Logo />
			</SideContainer>

			<SearchBarContainer />

			<SideContainer>
				<UserAvatar />
				<CartIcon />
			</SideContainer>
		</HeaderStyle>
	);
}

const SideContainer = styled.div`
	display: flex;
	align-items: center;
`;
