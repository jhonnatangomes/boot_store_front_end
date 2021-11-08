import styled from 'styled-components';

import { AiOutlineMenu } from 'react-icons/ai';

export default function MenuIcon({ onClick }) {
	return (
		<IconStyle onClick={onClick}>
			<AiOutlineMenu />
		</IconStyle>
	);
}

const IconStyle = styled.div`
	font-size: 30px;
	color: rgb(255, 255, 255);
	padding-top: 15px;
	cursor: pointer;
`;
