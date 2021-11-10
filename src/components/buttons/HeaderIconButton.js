import styled from 'styled-components';

const HeaderIconButton = styled.button`
	font-size: 35px;
	color: rgb(255, 255, 255);
	padding: 2px 0 0;
	margin: 0 0 0 20px;
	border: none;
	background-color: transparent;
	cursor: pointer;

	@media (max-width: 600px) {
		margin: 0 0 0 10px;
	}
`;

export default HeaderIconButton;
