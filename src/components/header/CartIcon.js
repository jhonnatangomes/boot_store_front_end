import styled from 'styled-components';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

export default function CartIcon() {
	const history = useHistory();

	return (
		<IconStyle onClick={() => history.push(routes.cart)}>
			<AiOutlineShoppingCart />
		</IconStyle>
	);
}

const IconStyle = styled.div`
	font-size: 35px;
	color: rgb(255, 255, 255);
	padding-top: 2px;
	margin: 0 0 0 20px;
	cursor: pointer;
`;
