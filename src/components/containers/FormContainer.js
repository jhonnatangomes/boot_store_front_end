import styled from 'styled-components';

const FormContainer = styled.div`
	box-sizing: border-box;
	max-width: 600px;
	padding: 30px 20px 0px;
	margin: 3vh auto 0px;
	border-radius: 10px;
	background-color: rgb(239, 239, 239);
	border: 1px solid rgb(204, 204, 204);
	display: flex;
	flex-direction: column;
	align-items: center;

	> * {
		margin-bottom: 17px;
	}

	@media (max-width: 600px) {
		min-height: calc(99vh - var(--header-height));
		width: 100%;
		margin: 0px;
		padding: 30px 15px 0px;
		border-radius: 0px;
		border: none;
		justify-content: center;
	}

	@media (max-height: 620px) {
		padding: 15px 15px 0px;

		> *:last-child {
			margin-bottom: 10px;
		}
	}
`;

export default FormContainer;
