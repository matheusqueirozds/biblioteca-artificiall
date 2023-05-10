import React, { useRef, useState } from "react";
import Head from "next/head";
import {
	AddWordButton,
	ActionButton,
	ButtonsWrapper,
	PageContainer,
	TextInputWrapper,
	TextInput,
	PromptWrapper,
	Heading,
	SingleWord,
	WordsWrapper,
	CloseButton,
	SelectWrapper,
	ConfigSelect,
} from "@/components/CriarPrompts/CriarPromptsStyles";

export default function CriarPrompts() {
	const [inputText, setInputText] = useState("");
	const [words, setWords] = useState([]);
	const [version, setVersion] = useState("");
	const [aspectRatio, setAspectRatio] = useState("");
	const promptContainerRef = useRef(null);

	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	const handleAddWord = () => {
		setWords([...words, inputText]);
		setInputText("");
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddWord();
		}
	};

	const handleCopyText = () => {
		const text = `/imagine prompt: ${words.join(", ")}${
			version ? ` --v ${version}` : ""
		}${aspectRatio ? ` --ar ${aspectRatio}` : ""}`;
		navigator.clipboard.writeText(text);
	};

	const handleClearText = () => {
		setWords([]);
	};

	const handleDeleteWord = (indexToDelete) => {
		setWords(words.filter((_, index) => index !== indexToDelete));
	};

	return (
		<PageContainer>
			<Head>
				<title>Criar Prompts</title>
			</Head>

			<main>
				<Heading>Criar Prompts</Heading>

				<TextInputWrapper>
					<TextInput
						type="text"
						value={inputText}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						placeholder="Digite uma palavra"
						aria-label="Digite uma palavra"
					/>
					<AddWordButton onClick={handleAddWord}>+</AddWordButton>
				</TextInputWrapper>

				<WordsWrapper>
					<PromptWrapper ref={promptContainerRef}>
						<span>/imagine prompt: </span>
						{words.map((word, index) => (
							<SingleWord key={index}>
								{word}
								<CloseButton onClick={() => handleDeleteWord(index)}>
									×
								</CloseButton>
							</SingleWord>
						))}
					</PromptWrapper>

					<ButtonsWrapper>
						<ActionButton onClick={handleCopyText}>Copiar prompt</ActionButton>
						<ActionButton onClick={handleClearText}>Apagar tudo</ActionButton>
					</ButtonsWrapper>
				</WordsWrapper>

				<SelectWrapper>
					<ConfigSelect
						onChange={(e) => setAspectRatio(e.target.value)}
						value={aspectRatio}
					>
						<option value="">Proporção</option>
						<option value="1:1">1:1</option>
						<option value="2:3">2:3</option>
						<option value="3:2">3:2</option>
						<option value="4:3">4:3</option>
						<option value="4:7">4:7</option>
						<option value="5:4">5:4</option>
						<option value="7:4">7:4</option>
						<option value="16:9">16:9</option>
						<option value="21:9">21:9</option>
					</ConfigSelect>

					<ConfigSelect
						onChange={(e) => setVersion(e.target.value)}
						value={version}
					>
						<option value="">Versão</option>
						<option value="5.1">Versão 5.1</option>
						<option value="5">Versão 5</option>
						<option value="4">Versão 4</option>
						<option value="3">Versão 3</option>
						<option value="2">Versão 2</option>
						<option value="1">Versão 1</option>
					</ConfigSelect>
				</SelectWrapper>
			</main>
		</PageContainer>
	);
}
