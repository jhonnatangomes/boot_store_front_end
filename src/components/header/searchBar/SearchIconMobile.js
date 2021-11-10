import HeaderIconButton from '../../buttons/HeaderIconButton';

import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchIconMobile({ onClick }) {
	return (
		<SearchButton onClick={onClick}>
			<AiOutlineSearch />
		</SearchButton>
	);
}

const SearchButton = styled(HeaderIconButton)`
	@media (min-width: 600px) {
		display: none;
	}
`;
