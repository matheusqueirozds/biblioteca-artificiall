import styled from "styled-components";

const widthValue = "364px";

export const PromptContainer = styled.li`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.bodyBackground};
	color: ${({ theme }) => theme.bodyText};
	border-radius: 8px;
	padding: 1rem;
	width: ${widthValue};
	height: 420px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.buttonText};

	&:nth-child(4) {
		width: 100%;
	}
`;

export const TextAreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NonEditableText = styled.code`
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
		monospace;
	font-size: 0.875rem;
	background-color: rgba(27, 31, 35, 0.2);
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
	background-color: inherit;
	width: calc(${widthValue} - 2rem);
	height: 100px;
	text-align: center;
	transition: all 0.3s;
	&:hover {
		background-color: rgba(187, 215, 233, 0.3);
		padding: 0.5rem;
	}

	&:focus {
		background-color: #e7e7e7;
		border: 1px solid $primary-color;
		border-radius: 3px;
		padding: 0.5rem;
		height: 8rem;
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
