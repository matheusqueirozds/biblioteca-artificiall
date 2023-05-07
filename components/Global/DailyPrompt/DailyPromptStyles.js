import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PromptContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	justify-content: space-between;
	padding: 24px;
	height: 380px;
	width: 560px;
	color: #888;
	background: #fff;
	border-radius: 8px;
	border: 1px solid #eaeaea;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
	animation: ${fadeIn} 0.9s ease;

	&:hover {
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
	}

	@media screen and (max-width: 1024px) {
		aspect-ratio: 4 / 4;
		flex: 1;
		max-width: 100%;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const Button = styled.button`
	background-color: #3498db;
	color: ${({ theme }) => theme.buttonText};
	background-color: transparent;
	transition: all 0.3s;

	&:nth-child(1) {
		background-color: #4caf50;
	}

	&:nth-child(2) {
		background-color: #ff5722;
	}

	&:nth-child(3) {
		background-color: #2196f3;
	}

	&:nth-child(4) {
		background-color: #3498db;
		width: 100%;
	}
`;

export const TextAreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const NonEditableText = styled.code`
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
		monospace;
	font-size: 0.875rem;
	background-color: rgba(27, 31, 35, 0.2);
	color: #666;
	border-radius: 3px;
	padding: 0.2rem 0.4rem;
	margin-bottom: 0.5rem;
	font-weight: bold;
	cursor: default;
`;

export const EditableText = styled.textarea`
	resize: none;
	border-color: rgba(187, 215, 233, 0.3);
	border-radius: 5px;
	outline: none;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	color: inherit;
	background-color: #f6f6f6;
	width: 100%;
	height: 50px;
	text-align: center;
	transition: all 0.3s;
	word-break: break-all;
	padding: 0 1rem;

	&:hover {
		background-color: rgba(187, 215, 233, 0.3);
	}

	&:focus {
		background-color: rgba(187, 215, 233, 0.3);

		border: 1px solid $primary-color;
		border-radius: 3px;
	}
`;

export const PromptImage = styled.img`
	object-fit: cover;
	object-position: top;
	max-height: 40%;
	width: 100%;
	border-radius: 5px;
	cursor: pointer;
`;
