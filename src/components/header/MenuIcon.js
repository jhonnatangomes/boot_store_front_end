import styled from 'styled-components';

import { AiOutlineMenu } from 'react-icons/ai';

export default function MenuIcon({ onClick }) {
	return (
		<IconStyle onClick={onClick}>
			<AiOutlineMenu />
		</IconStyle>
	);
}

const IconStyle = styled.button`
	font-size: 30px;
	color: rgb(255, 255, 255);
	padding: 15px 0 0;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
