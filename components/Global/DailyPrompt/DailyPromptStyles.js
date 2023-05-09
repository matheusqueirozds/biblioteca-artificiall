import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PromptContainer = styled.li`
	display: flex;
	gap: 24px;
	align-items: center;
	padding: 24px;
	height: 298px;
	width: 773px;
	color: #888;
	background: #fff;
	border: 1px solid #eaeaea;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
	transition: all 0.15s ease;
	animation: ${fadeIn} 0.9s ease;

	&:hover {
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 1024px) {
		max-width: 100%;
	}

	@media screen and (max-width: 700px) {
		flex-direction: column;
		max-width: 100%;
		height: 100%;
	}
`;

export const LeftColumn = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 8px;

	@media screen and (max-width: 700px) {
		width: 50%;
	}
`;

export const PromptImage = styled.img`
	object-fit: cover;
	object-position: top;
	cursor: pointer;
	height: 100%;
	width: 100%;
	border-radius: 8px;
`;

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	width: 100%;
	height: 100%;
`;

export const EditableText = styled.textarea`
	resize: none;
	border-radius: 8px;
	outline: none;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	color: inherit;
	background-color: #f6f6f6;
	width: 441px;
	height: 187px;
	transition: all 0.3s;
	word-break: break-all;
	padding: 24px;
	border: none;

	::-webkit-scrollbar {
		display: none;
		width: 6px;
		background-color: transparent;
		transition: all 0.3s;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #dadce0;
	}

	&:hover {
		background-color: rgba(187, 215, 233, 0.3);

		::-webkit-scrollbar {
			display: block;
		}
	}

	&:focus {
		background-color: rgba(187, 215, 233, 0.3);

		border: 1px solid $primary-color;
		border-radius: 3px;
	}

	@media screen and (max-width: 700px) {
		height: 100px;
		width: 100%;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 24px;
	width: 100%;

	@media screen and (max-width: 809px) {
		flex-direction: column;
	}
`;

export const Button = styled.button`
	background-color: #3498db;
	color: ${({ theme }) => theme.buttonText};
	background-color: transparent;
	transition: all 0.3s;
	padding: 10px 20px;
	border: none;

	&:nth-child(1) {
		background-color: #4caf50;
	}

	&:nth-child(2) {
		background-color: #2196f3;
	}

	&:nth-child(3) {
		background-color: #ff5722;
	}

	@media screen and (max-width: 809px) {
		padding: 10px;
		width: 100%;
	}
`;
