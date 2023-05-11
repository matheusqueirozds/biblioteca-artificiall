import styled from "styled-components";

export const CreatePromptContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	width: max-content;
	margin: 0 auto;
`;

export const Heading = styled.h1`
	font-size: 2rem;
`;

export const TextInputWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
`;

export const PromptInput = styled.input`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.5rem;
	font-size: 1rem;
	margin-right: 1rem;
	width: 100%;
	flex-grow: 1;

	::placeholder {
		opacity: 0.7;
	}
`;

export const AddWordButton = styled.button`
	background-color: #0070f3;
	border: none;
	border-radius: 8px;
	color: #fff;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
`;

export const PromptsInfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
	height: 100%;
`;

export const PromptWords = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f0f0f0;
	gap: 24px;
	padding: 24px;
	border-radius: 8px;
	width: 705px;
	max-width: 100%;
	height: 100%;
`;

export const PromptWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	span {
		font-family: "Courier New", Courier, monospace;
		font-weight: 600;
		margin-right: .5rem;
	}
`;

export const SingleWord = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0.25rem;
	background-color: #e0e0e0;
	border-radius: 4px;
	padding: 0.25rem 0.5rem;
`;

export const CloseButton = styled.button`
	background-color: transparent;
	border: none;
	color: #444;
	font-size: 0.8rem;
	margin-left: 0.5rem;
	cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ActionButton = styled.button`
	background-color: #0070f3;
	border: none;
	border-radius: 4px;
	color: #fff;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
	margin: 0 0.5rem;
`;

export const PromptParameters = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 1rem 0;
`;

export const ParameterWrapper = styled.li`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const Select = styled.select`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.5rem;
	font-size: 1rem;
	margin-left: 0.5rem;
	width: 60px;
`;

export const RatioInput = styled.input`
	padding: 0.25rem 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
	text-align: center;
`;

export const AddParameterButton = styled.button`
	background-color: #4caf50;
	border: none;
	color: white;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	line-height: 30px;
	padding: 0;
	transition: background-color 0.3s;

	&:hover {
		background-color: #45a049;
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;
