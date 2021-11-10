import styled from 'styled-components';

import SearchBar from './SearchBarInput';

export default function SearchBarContainerMobile({ closed }) {
	console.log(closed);
	return (
		<ContainerStyle closed={closed}>
			<SearchBar />
		</ContainerStyle>
	);
}

const ContainerStyle = styled.div`
	width: 100%;
	padding: 5px 0;
	background-color: #04176e;
	border-bottom: 1px solid #023894;
	position: absolute;
	z-index: 5;
	top: ${({ closed }) => (closed ? '0px' : 'var(--header-height)')};
	transition: all 0.5s ease-in-out;

	input {
		border-radius: 0px;
	}

	@media (min-width: 600px) {
		display: 'none';
	}
`;
