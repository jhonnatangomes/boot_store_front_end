import styled from 'styled-components';

const PageContentContainer = styled.div`
	min-height: calc(100vh - var(--header-height) - 1px);
	text-align: center;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	> p {
		font-size: 18px;
		margin-top: 100px;
	}
`;

export default PageContentContainer;
