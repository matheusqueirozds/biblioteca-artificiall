import React, { useCallback, useRef, useState } from "react";
import Head from "next/head";
import {
	CreatePromptContainer,
	Heading,
	TextInputWrapper,
	PromptInput,
	AddWordButton,
	PromptsInfoContainer,
	PromptWords,
	PromptWrapper,
	SingleWord,
	CloseButton,
	ButtonsWrapper,
	ActionButton,
	PromptParameters,
	ParameterWrapper,
	Select,
	RatioInput,
	AddParameterButton,
} from "@/components/CriarPrompts/CriarPromptsStyles";

// Componente principal
export default function CreatePrompt() {
	const [inputText, setInputText] = useState("");
	const [words, setWords] = useState([]);
	const promptContainerRef = useRef(null);
	const [parameterButtons, setParameterButtons] = useState({
		aspectRatio: "add",
		version: "add",
		chaos: "add",
		stylize: "add",
	});

	// Manipula a mudança no campo de texto
	const handleInputChange = useCallback((e) => {
		setInputText(e.target.value);
	}, []);

	// Adiciona a palavra ao pressionar 'Enter'
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleAddWord();
		}
	};

	// Copia o texto do prompt para a área de transferência
	const handleCopyText = useCallback(() => {
		const aspectRatioText =
			selectedParameters.aspectRatio.show &&
			selectedParameters.aspectRatio.value1 &&
			selectedParameters.aspectRatio.value2
				? `--ar ${selectedParameters.aspectRatio.value1}:${selectedParameters.aspectRatio.value2} `
				: "";

		const versionText = selectedParameters.version.show
			? `--v ${selectedParameters.version.value} `
			: "";

		const chaosText = selectedParameters.chaos.show
			? `--c ${selectedParameters.chaos.value} `
			: "";

		const stylizeText = selectedParameters.stylize.show
			? `--s ${selectedParameters.stylize.value} `
			: "";

		const wordsWithSpace = words.length > 0 ? words.join(", ") + " " : "";

		const text = `/imagine prompt: ${wordsWithSpace}${aspectRatioText}${versionText}${chaosText}${stylizeText}`;

		navigator.clipboard.writeText(text);
	}, [selectedParameters, words]);

	// Adiciona uma palavra ao array de palavras
	const handleAddWord = useCallback(() => {
		setWords([...words, inputText]);
		setInputText("");
	}, [inputText, words]);

	// Remove a palavra do array de palavras
	const handleDeleteWord = useCallback(
		(indexToDelete) => {
			setWords(words.filter((_, index) => index !== indexToDelete));
		},
		[words]
	);

	// Adiciona o parâmetro selecionado
	const handleAddParameter = useCallback((parameter) => {
		if (!selectedParameters[parameter].isParameterDefined) return;
		setSelectedParameters((prevSelectedParameters) => ({
			...prevSelectedParameters,
			[parameter]: { ...prevSelectedParameters[parameter], show: true },
		}));
		setParameterButtons((prevParameterButtons) => ({
			...prevParameterButtons,
			[parameter]: "remove",
		}));
	}, []);

	// Estado para controlar os parâmetros selecionados
	const [selectedParameters, setSelectedParameters] = useState({
		aspectRatio: {
			show: false,
			value1: 1,
			value2: 1,
			isParameterDefined: true,
		},
		version: {
			show: false,
			value: "5.1",
			isParameterDefined: true,
		},
		chaos: {
			show: false,
			value: 0,
			isParameterDefined: true,
		},
		stylize: {
			show: false,
			value: 100,
			isParameterDefined: true,
		},
	});

	// Atualiza os parâmetros selecionados
	const handleParameterChange = useCallback(
		(parameter, value) => {
			setSelectedParameters({
				...selectedParameters,
				[parameter]: {
					...selectedParameters[parameter],
					...value,
					isParameterDefined: true,
				},
			});
		},
		[selectedParameters]
	);

	// Remove o parâmetro selecionado
	const handleDeleteParameter = useCallback((parameter) => {
		switch (parameter) {
			case "aspectRatio":
				handleParameterChange(parameter, {
					show: false,
					value1: 1,
					value2: 1,
				});
				break;
			case "version":
				handleParameterChange(parameter, { show: false, value: "5.1" });
				break;
			case "chaos":
				handleParameterChange(parameter, { show: false, value: 0 });
				break;
			case "stylize":
				handleParameterChange(parameter, { show: false, value: 100 });
				break;
			default:
				break;
		}
		setParameterButtons((prevParameterButtons) => ({
			...prevParameterButtons,
			[parameter]: "add",
		}));
	}, []);

	// Limpa todos os parâmetros e palavras
	const handleClearAll = useCallback(() => {
		if (confirm("Tem certeza de que deseja apagar tudo?")) {
			setWords([]);
			setSelectedParameters({
				aspectRatio: { show: false, value1: "1", value2: "1" },
				version: { show: false, value: "5.1" },
				chaos: { show: false, value: "0" },
				stylize: { show: false, value: "100" },
			});
			setParameterButtons({
				aspectRatio: "add",
				version: "add",
				chaos: "add",
				stylize: "add",
			});
			alert("Tudo apagado com sucesso!");
		}
	}, []);

	return (
		<CreatePromptContainer>
			<Head>
				<title>Criar prompt | Bibioteca Artificiall</title>
			</Head>

			<Heading>Criar Prompt</Heading>

			<TextInputWrapper>
				<PromptInput
					type="text"
					value={inputText}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					placeholder="Digite uma palavra"
					role="textbox"
					aria-placeholder="Digite uma palavra"
				/>
				<AddWordButton
					onClick={() => {
						handleAddWord();
						handleTranslateClick();
					}}
				>
					+
				</AddWordButton>
			</TextInputWrapper>

			<PromptsInfoContainer>
				<PromptWords>
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
						{selectedParameters.aspectRatio.show &&
							selectedParameters.aspectRatio.isParameterDefined && (
								<SingleWord>
									--ar {selectedParameters.aspectRatio.value1}:
									{selectedParameters.aspectRatio.value2}
									<CloseButton
										onClick={() => handleDeleteParameter("aspectRatio")}
									>
										×
									</CloseButton>
								</SingleWord>
							)}
						{selectedParameters.version.show &&
							selectedParameters.version.isParameterDefined && (
								<SingleWord>
									--v {selectedParameters.version.value}
									<CloseButton onClick={() => handleDeleteParameter("version")}>
										×
									</CloseButton>
								</SingleWord>
							)}
						{selectedParameters.chaos.show &&
							selectedParameters.chaos.isParameterDefined && (
								<SingleWord>
									--c {selectedParameters.chaos.value}
									<CloseButton onClick={() => handleDeleteParameter("chaos")}>
										×
									</CloseButton>
								</SingleWord>
							)}
						{selectedParameters.stylize.show &&
							selectedParameters.stylize.isParameterDefined && (
								<SingleWord>
									--s {selectedParameters.stylize.value}
									<CloseButton onClick={() => handleDeleteParameter("stylize")}>
										×
									</CloseButton>
								</SingleWord>
							)}
					</PromptWrapper>
					<ButtonsWrapper>
						<ActionButton onClick={handleCopyText}>Copiar prompt</ActionButton>
						<ActionButton onClick={handleClearAll}>Apagar tudo</ActionButton>
					</ButtonsWrapper>
				</PromptWords>

				<PromptParameters>
					<ParameterWrapper>
						Proporção:
						<Select
							value={selectedParameters.aspectRatio.value1}
							onChange={(e) =>
								handleParameterChange("aspectRatio", {
									...selectedParameters.aspectRatio,
									value1: e.target.value,
								})
							}
						>
							{[...Array(16).keys()].map((num) => (
								<option key={num + 1} value={num + 1}>
									{num + 1}
								</option>
							))}
						</Select>
						<span>:</span>
						<Select
							value={selectedParameters.aspectRatio.value2}
							onChange={(e) =>
								handleParameterChange("aspectRatio", {
									...selectedParameters.aspectRatio,
									value2: e.target.value,
								})
							}
						>
							{[...Array(16).keys()].map((num) => (
								<option key={num + 1} value={num + 1}>
									{num + 1}
								</option>
							))}
						</Select>
						<AddParameterButton
							style={
								parameterButtons.aspectRatio === "add"
									? {}
									: { color: "#FFFFFF", backgroundColor: "#FF8A65" }
							}
							onClick={
								parameterButtons.aspectRatio === "add"
									? () => handleAddParameter("aspectRatio")
									: () => handleDeleteParameter("aspectRatio")
							}
						>
							{parameterButtons.aspectRatio === "add" ? "+" : "×"}
						</AddParameterButton>
					</ParameterWrapper>

					<ParameterWrapper>
						Versão:
						<Select
							value={selectedParameters.version.value}
							onChange={(e) =>
								handleParameterChange("version", {
									...selectedParameters.version,
									value: e.target.value,
								})
							}
						>
							<option value="5.1">5.1</option>
							<option value="5">5</option>
							<option value="4">4</option>
						</Select>
						<AddParameterButton
							style={
								parameterButtons.version === "add"
									? {}
									: { color: "#FFFFFF", backgroundColor: "#FF8A65" }
							}
							onClick={
								parameterButtons.version === "add"
									? () => handleAddParameter("version")
									: () => handleDeleteParameter("version")
							}
						>
							{parameterButtons.version === "add" ? "+" : "×"}
						</AddParameterButton>
					</ParameterWrapper>

					<ParameterWrapper>
						Chaos:
						<RatioInput
							type="number"
							placeholder="0 - 100"
							min="0"
							max="100"
							step="1"
							value={selectedParameters.chaos.value}
							onChange={(e) =>
								handleParameterChange("chaos", {
									...selectedParameters.chaos,
									value: e.target.value,
								})
							}
						/>
						<AddParameterButton
							style={
								parameterButtons.chaos === "add"
									? {}
									: { color: "#FFFFFF", backgroundColor: "#FF8A65" }
							}
							onClick={
								parameterButtons.chaos === "add"
									? () => handleAddParameter("chaos")
									: () => handleDeleteParameter("chaos")
							}
						>
							{parameterButtons.chaos === "add" ? "+" : "×"}
						</AddParameterButton>
					</ParameterWrapper>

					<ParameterWrapper>
						Stylize:
						<RatioInput
							type="number"
							placeholder="0 - 1000"
							min="0"
							max="1000"
							step="1"
							value={selectedParameters.stylize.value}
							onChange={(e) =>
								handleParameterChange("stylize", {
									...selectedParameters.stylize,
									value: e.target.value,
								})
							}
						/>
						<AddParameterButton
							style={
								parameterButtons.stylize === "add"
									? {}
									: { color: "#FFFFFF", backgroundColor: "#FF8A65" }
							}
							onClick={
								parameterButtons.stylize === "add"
									? () => handleAddParameter("stylize")
									: () => handleDeleteParameter("stylize")
							}
						>
							{parameterButtons.stylize === "add" ? "+" : "×"}
						</AddParameterButton>
					</ParameterWrapper>
				</PromptParameters>
			</PromptsInfoContainer>
		</CreatePromptContainer>
	);
}
