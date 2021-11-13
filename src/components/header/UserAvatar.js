import styled from 'styled-components';

import { AiOutlineUser } from 'react-icons/ai';

import { useContext, useState, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';

import HeaderIconButton from '../buttons/HeaderIconButton';

export default function UserAvatar({ onClick }) {
	const { user } = useContext(UserContext);
	const [hasImg, setHasImg] = useState(false);

	useEffect(() => {
		if (!user || !user.avatarUrl) return setHasImg(false);
		setHasImg(true);
	}, [user]);

	return (
		<AvatarContainer onClick={onClick} hasImg={hasImg}>
			{!hasImg || !user ? (
				<AiOutlineUser />
			) : (
				<UserImage
					src={user.avatarUrl}
					onError={() => setHasImg(false)}
					alt='Foto do cliente'
				/>
			)}
		</AvatarContainer>
	);
}

const AvatarContainer = styled(HeaderIconButton)`
	font-size: 30px;
	padding: 0 2px;
	border: ${({ hasImg }) =>
		hasImg ? 'none' : '2px solid rgb(255, 255, 255)'};
	border-radius: 50%;
`;

const UserImage = styled.img`
	border: 2px solid rgb(255, 255, 255);
	border-radius: 50%;
	height: 45px;
`;
