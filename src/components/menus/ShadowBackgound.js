import styled from 'styled-components';

const ShadowBackground = styled.div`
	width: 100%;
	height: ${({ menuClosed }) =>
		menuClosed ? '0px' : 'calc(100vh - var(--header-height))'};
	background-color: rgb(0, 0, 0);
	opacity: ${({ menuClosed }) => (menuClosed ? '0' : '0.5')};
	transition: opacity 0.3s ease;
`;

export default ShadowBackground;
