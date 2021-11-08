import styled from 'styled-components';

const MenuStyle = styled.div`
	width: 250px;
	height: auto;
	background-color: rgb(240, 240, 240);
	border-bottom: 1px solid #023894;
	position: absolute;
	z-index: 5;
	${({ closed }) => (closed ? 'bottom: 0px' : 'top: var(--header-height)')};
	transition: all 3s ease;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default MenuStyle;
