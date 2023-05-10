import styled from "styled-components";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	width: 506px;
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

export const TextInput = styled.input`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.5rem;
	font-size: 1rem;
	margin-right: 1rem;
	width: 100%;
	flex-grow: 1;
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

export const SelectWrapper = styled.div`
	display: flex;
    gap: 1rem;
	margin: 1rem 0;
`;

export const ConfigSelect = styled.select`
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.5rem;
	font-size: 1rem;
	margin-bottom: 1rem;
`;

export const WordsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: #f0f0f0;
	gap: 24px;
	padding: 24px;
	border-radius: 8px;
`;

export const PromptWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
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
