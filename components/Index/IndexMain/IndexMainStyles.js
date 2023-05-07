import styled from "styled-components";

export const IndexContainer = styled.div`
	background-color: #fff;
	min-height: calc(100vh - 174px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	text-align: center;

	@media screen and (max-width: 1024px) {
		min-height: 88.5vh;
	}
`;

export const IndexButtonsContainer = styled.div`
	display: flex;
	gap: 12px;
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
`;
