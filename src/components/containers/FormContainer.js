import styled from 'styled-components';

const FormContainer = styled.div`
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
		margin-bottom: 20px;
	}

	@media (max-width: 600px) {
		width: 100%;
		padding: 30px 15px 0px;
		border-radius: 0px;
		border-left: none;
		border-right: none;
	}
`;

export default FormContainer;
