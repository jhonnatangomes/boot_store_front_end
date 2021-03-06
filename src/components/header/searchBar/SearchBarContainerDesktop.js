import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

import SearchBar from './SearchBarInput';

export default function SearchBarContainerDesktop() {
	return (
		<ContainerStyle>
			<SearchBar />
			<SearchButton>
				<AiOutlineSearch />
			</SearchButton>
		</ContainerStyle>
	);
}

const ContainerStyle = styled.div`
	width: 100%;
	max-width: 600px;
	position: relative;

	@media (max-width: 599px) {
		display: none;
	}
`;

const SearchButton = styled.button`
	font-size: 25px;
	height: 100%;
	border: none;
	background-color: transparent;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
`;
