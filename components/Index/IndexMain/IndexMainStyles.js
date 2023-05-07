import styled from "styled-components";

export const IndexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	background-color: #fff;
	min-height: calc(100vh - 174px);
	text-align: center;

	@media screen and (max-width: 1024px) {
		min-height: 88.5vh;
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

	div {
		display: flex;
		align-items: center;
		justify-content: center;
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

	&:hover,
	&:focus {
		border-color: #dadce0;
		transform: none;
	}

	&.dailyPrompt {
		width: 100%;
		color: ${({ showDailyPrompt }) =>
			showDailyPrompt ? "#fff" : "#3c4043"};
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
