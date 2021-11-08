import styled from 'styled-components';

import { AiOutlineUser } from 'react-icons/ai';

export default function UserAvatar({ onClick }) {
	return (
		<AvatarContainer onClick={onClick}>
			<AiOutlineUser />
		</AvatarContainer>
	);
}

const AvatarContainer = styled.div`
	font-size: 30px;
	color: rgb(255, 255, 255);
	margin: 0 0 0 20px;
	padding: 0 2px;
	border: 2px solid rgb(255, 255, 255);
	border-radius: 50%;
	cursor: pointer;
`;
