import styled from 'styled-components';

const PageContainer = styled.div`
	width: 100%;
	min-height: calc(100vh - var(--header-height));
	margin-top: calc(var(--header-height) - 1px);
	padding: 1px;
`;

export default PageContainer;
