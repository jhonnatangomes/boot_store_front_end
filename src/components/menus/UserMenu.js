import styled from 'styled-components';

import MenuStyle from './MenuStyle';

import { useHistory } from 'react-router';
import routes from '../../routes/routes';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function UserMenu({ closed, setClosed }) {
	const { user, setUser } = useContext(UserContext);
	const history = useHistory();

	const logout = () => {
		localStorage.removeItem('boot-store-user');
		setUser(null);
		setClosed(true);
	};

	const redirectTo = to => {
		history.push(to);
		setClosed(true);
	};

	return (
		<UserMenuStyle closed={closed}>
			<h2>{user ? `Olá, ${user}` : 'Olá'}</h2>
			<ul>
				<li
					onClick={
						user
							? () => redirectTo(routes.userOrders)
							: () => redirectTo(routes.login)
					}
				>
					Meus pedidos
				</li>

				<li onClick={user ? logout : () => redirectTo(routes.login)}>
					{user ? 'Sair' : 'Entrar'}
				</li>
			</ul>
		</UserMenuStyle>
	);
}

const UserMenuStyle = styled(MenuStyle)`
	border-left: 1px solid #023894;
	border-bottom-left-radius: 5px;
	right: 0px;
	align-items: flex-end;

	ul {
		align-items: flex-end;
	}

	li {
		margin: 0px 30px 30px 50px;
	}

	@media (max-width: 600px) {
		border-left: none;
	}
`;
