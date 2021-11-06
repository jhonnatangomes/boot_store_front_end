import styled from 'styled-components';

import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartIcon() {
	return (
		<IconStyle>
			<AiOutlineShoppingCart />
		</IconStyle>
	);
}

const IconStyle = styled.div`
	font-size: 35px;
	color: rgb(255, 255, 255);
	padding-top: 2px;
	cursor: pointer;
`;
