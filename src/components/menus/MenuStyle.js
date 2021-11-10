import styled from 'styled-components';

const MenuStyle = styled.div`
	width: 250px;
	height: 100px;
	background-color: rgb(240, 240, 240);
	border-bottom: 1px solid #023894;
	position: absolute;
	z-index: 5;
	${({ closed }) => (closed ? 'bottom: 0px' : 'top: var(--header-height)')};
	${({ closed }) => (closed ? 'opacity: 0' : 'opacity: 1')};
	transition: all 0.3s ease;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default MenuStyle;
