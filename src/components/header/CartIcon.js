import HeaderIconButton from '../buttons/HeaderIconButton';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

export default function CartIcon() {
	const history = useHistory();

	return (
		<HeaderIconButton onClick={() => history.push(routes.cart)}>
			<AiOutlineShoppingCart />
		</HeaderIconButton>
	);
}
