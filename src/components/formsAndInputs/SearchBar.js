import styled from 'styled-components';

export default function SearchBar() {
	return <SearchBarStyle />;
}

const SearchBarStyle = styled.input`
	box-sizing: border-box;
	font-size: 20px;
	color: rgb(60, 60, 60);
	width: 100%;
	padding: 5px 40px 5px 5px;
	border: none;
	border-radius: 5px;
	outline: none;
`;
