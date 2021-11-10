import styled from 'styled-components';

export default function SearchBarInput() {
	return <SearchBarStyle placeholder={'Pesquise um produto'} />;
}

const SearchBarStyle = styled.input`
	box-sizing: border-box;
	font-size: 20px;
	color: rgb(60, 60, 60);
	width: 100%;
	padding: 5px 40px 5px 10px;
	border: none;
	border-radius: 5px;
	outline: none;

	::placeholder {
		text-align: center;
	}
`;
