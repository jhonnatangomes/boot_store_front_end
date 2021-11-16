import styled from 'styled-components';
import FormButton from '../buttons/FormButton';

const OrderHistoryContainer = styled.div`
	width: 95%;
	max-width: 1056px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 35px;
		color: rgb(102, 102, 102);
		margin: 30px 0 35px;
	}

	@media (max-width: 400px) {
		h2 {
			font-size: 27px;
		}
	}
`;

const HistoryCard = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border: 1px solid lightgray;
	border-radius: 5px;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
	background-color: rgb(240, 240, 240);
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 600px) {
		height: auto;
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	box-sizing: border-box;
	max-width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-height: 100%;
		max-width: 100%;
		border-radius: 5px;
		object-fit: contain;
	}

	@media (max-width: 600px) {
		max-width: 40%;
	}
`;

const ProductName = styled.div`
	height: 100%;
	width: 50%;
	padding: 0 10px;
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;

	@media (max-width: 600px) {
		margin: 20px 0;
		width: 100%;
	}
`;

const SecondaryInfoContainer = styled.div`
	height: 100%;
	min-height: 95px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const BuyAgainButton = styled(FormButton)`
	font-size: 15px;
	width: 100%;
	min-width: 0px;
`;

export {
	OrderHistoryContainer,
	HistoryCard,
	ImageContainer,
	SecondaryInfoContainer,
	ProductName,
	BuyAgainButton,
};
