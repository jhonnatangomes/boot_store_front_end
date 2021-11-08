import styled from 'styled-components';

const MenuStyle = styled.div`
	box-sizing: border-box;
	color: #023997;
	width: auto;
	max-width: 300px;
	height: auto;
	max-height: calc(100vh - var(--header-height));
	background-color: rgb(240, 240, 240);
	border-bottom: 1px solid #023894;
	position: absolute;
	z-index: 5;
	overflow-y: auto;
	top: ${({ closed }) =>
		closed
			? 'calc(-100vh + var(--header-height))'
			: 'var(--header-height)'};
	transition: all 0.5s ease-in-out;

	h2 {
		font-size: 20px;
		padding: 20px;
	}

	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	li {
		font-size: 18px;
		text-decoration: underline;
		cursor: pointer;
	}

	li:hover {
		filter: brightness(1.5);
	}

	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	::-webkit-scrollbar-track {
		background: rgb(240, 240, 240);
	}

	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	@media (max-width: 600px) {
		width: 100%;
		max-width: none;
	}
`;

export default MenuStyle;
