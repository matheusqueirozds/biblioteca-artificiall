import styled from "styled-components";

export const IndexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	background-color: #fff;
	text-align: center;
	height: 100vh;
	padding-bottom: 174px;

	@media screen and (max-width: 1024px) {
		min-height: 88.5vh;
		padding-bottom: 100px;
	}

	@media screen and (max-width: 809px) {
		min-height: 88.5vh;
		padding-bottom: 100px;
	}

	@media screen and (max-width: 700px) {
		height: 100%;
	}
`;

export const IndexButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 12px;
	margin-bottom: 1rem;
	max-width: 560px;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px;
	}
`;

export const IndexButton = styled.button`
	padding: 11px 16px;
	color: #3c4043;
	background-color: #f8f9fa;
	font-size: 14px;
	border-radius: 4px;
	transition: all 0.3s;
	border: 1px solid #f8f9fa;
	opacity: 1;
	width: 274px;
	
	&:hover,
	&:focus {
		border-color: #dadce0;
		transform: none;
	}

	&.dailyPrompt {
		width: 100%;
		color: ${({ showDailyPrompt }) => (showDailyPrompt ? "#fff" : "#3c4043")};
		background-color: ${({ showDailyPrompt }) =>
			showDailyPrompt ? "#ff7f7f" : "#f8f9fa"};
		border: ${({ showDailyPrompt }) =>
			showDailyPrompt ? "1px solid #ff4d4d" : "1px solid #f8f9fa"};

		&:hover,
		&:focus {
			border-color: ${({ showDailyPrompt }) =>
				showDailyPrompt ? "#ff4d4d" : "#dadce0"};
		}
	}
`;
