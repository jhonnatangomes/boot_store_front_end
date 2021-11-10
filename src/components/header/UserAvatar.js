import styled from 'styled-components';

import { AiOutlineUser } from 'react-icons/ai';

import HeaderIconButton from '../buttons/HeaderIconButton';

export default function UserAvatar({ onClick }) {
	return (
		<AvatarContainer onClick={onClick}>
			<AiOutlineUser />
		</AvatarContainer>
	);
}

const AvatarContainer = styled(HeaderIconButton)`
	font-size: 30px;
	padding: 0 2px;
	border: 2px solid rgb(255, 255, 255);
	border-radius: 50%;
`;
