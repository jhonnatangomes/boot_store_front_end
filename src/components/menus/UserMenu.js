import styled from 'styled-components';

import MenuStyle from './MenuStyle';

import { useHistory } from 'react-router';
import routes from '../../routes/routes';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import { postLogout } from '../../services/dataApi';

import { deleteUserOnLocalStorage } from '../../helpers/helpers';
import CartContext from '../../contexts/CartContext';

export default function UserMenu({ closed, setClosed }) {
    const { user, setUser } = useContext(UserContext);
    const { cart } = useContext(CartContext);
    const history = useHistory();

    const logout = () => {
        postLogout({ userId: user.id, token: user.token })
            .then((response) => {
                deleteUserOnLocalStorage();
                setUser(null);
                setClosed(true);
                localStorage.setItem('cart', JSON.stringify(cart));
                history.push(routes.home);
            })
            .catch((error) =>
                alert('Houve um erro ao tentar sair. Por favor, tente de novo.')
            );
    };

    const redirectTo = (to) => {
        history.push(to);
        setClosed(true);
    };

    return (
        <UserMenuStyle closed={closed}>
            <h2>{user ? `Olá, ${user.name}` : ''}</h2>
            <ul>
                {user ? (
                    <>
                        <li onClick={() => redirectTo(routes.userOrders)}>
                            Meus pedidos
                        </li>

                        <li onClick={logout}>Sair</li>
                    </>
                ) : (
                    <>
                        <li onClick={() => redirectTo(routes.login)}>Entrar</li>

                        <li onClick={() => redirectTo(routes.signUp)}>
                            Cadastrar
                        </li>
                    </>
                )}
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
