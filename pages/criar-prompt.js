import { useState } from "react";
import {
	Button,
	ButtonsWrapper,
	ImagensDiv,
	InputField,
	MainDiv,
	ParametrosDiv,
	PromptContainer,
	SelectField,
	SliderField,
	Tab,
	TabContainer,
	TextoDiv,
} from "@/components/CriarPrompts/CriarPromptsStyles";
import { translateText } from "../components/Midjourney/Prompt/translationHelper";
import GlobalFooter from "@/components/Global/GlobalFooter/GlobalFooter";

function TabPanel({ children, value, index }) {
	if (value !== index) return null;

	return (
		<div
			role="tabpanel"
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
		>
			{children}
		</div>
	);
}

const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

export default function CriarPrompts() {
	const initialState = {
		input1: "",
		input2: "",
		inputImage: "",
		version: "version 5.1",
		aspectRatio: { num1: 1, num2: 1 },
		stylize: 100,
		chaos: 0,
		currentTab: "Texto",
		commandContent: "",
		isFirstExclusion: true,
		includeContent: "",
		excludeContent: "",
		activeFields: {
			version: false,
			aspectRatio: false,
			stylize: false,
			chaos: false,
		},
		imageLinks: [],
		isClearClicked: false,
		isCopyClicked: false,
		isIncludeClicked: false,
		isExcludeClicked: false,
		isAddLinkClicked: false,
	};

	const [state, setState] = useState(initialState);

	const aspectRatioOptions = Array.from({ length: 16 }, (_, i) => i + 1);

	const handleAspectRatioChange = (value, position) => {
		setState((prevState) => {
			const newAspectRatio = {
				...prevState.aspectRatio,
				[position]: value,
			};

			const newCommandContent =
				prevState.commandContent +
				`, aspect ratio: ${newAspectRatio.num1}:${newAspectRatio.num2}`;

			return {
				...prevState,
				aspectRatio: newAspectRatio,
				commandContent: newCommandContent,
			};
		});
	};

	const versionCommandMap = {
		"version 5.1": "--v 5.1",
		"niji 5": "--niji 5",
		"version 5": "--v 5",
		niji: "--niji",
		"version 4": "--v 4",
	};

	const versionOptions = Object.keys(versionCommandMap);

	const updateVersion = (version) => {
		setState((prevState) => ({
			...prevState,
			version,
		}));
	};

	const handleVersionChange = (e) => {
		updateVersion(e.target.value);
	};

	const toggleFieldActive = (field) => {
		setState((prevState) => ({
			...prevState,
			activeFields: {
				...prevState.activeFields,
				[field]: !Boolean(prevState.activeFields[field]),
			},
		}));
	};

	const handleInclude = async () => {
		if (state.input1.trim() !== "") {
			const translatedInput1 = await translateText(state.input1, "en");

			setState((prevState) => {
				const newIncludeContent =
					prevState.includeContent.length > 0
						? prevState.includeContent + ", " + translatedInput1
						: prevState.includeContent + translatedInput1;

				return {
					...prevState,
					isIncludeClicked: true,
					includeContent: newIncludeContent,
					input1: "",
				};
			});

			setTimeout(() => {
				setState((prevState) => ({
					...prevState,
					isIncludeClicked: false,
				}));
			}, 1000);
		}
	};

	const updateExcludeClicked = (value) => {
		setState((prevState) => ({
			...prevState,
			isExcludeClicked: value,
		}));
	};

	const resetExcludeClicked = () => {
		setTimeout(() => {
			updateExcludeClicked(false);
		}, 1000);
	};

	const buildExcludeContent = (content, isFirstExclusion) => {
		const prefix = isFirstExclusion ? ", --no " : ", ";
		return content.length > 0 ? content + prefix : content;
	};

	const handleExclude = async () => {
		if (state.input2.trim() !== "") {
			updateExcludeClicked(true);
			resetExcludeClicked();

			const translatedInput2 = await translateText(state.input2, "en");

			setState((prevState) => ({
				...prevState,
				excludeContent:
					buildExcludeContent(
						prevState.excludeContent,
						prevState.isFirstExclusion
					) + translatedInput2,
				isFirstExclusion: false,
				input2: "",
			}));
		}
	};

	const handleCopy = () => {
		setState((prevState) => ({ ...prevState, isCopyClicked: true }));
		setTimeout(
			() => setState((prevState) => ({ ...prevState, isCopyClicked: false })),
			1000
		);

		const promptText = document.querySelector(".prompt-text").textContent;
		navigator.clipboard
			.writeText(promptText)
			.catch(() => alert("Falha ao copiar texto"));
	};

	const handleClear = () => {
		setState({
			...initialState,
			isClearClicked: true,
		});
		setTimeout(() => {
			setState((prevState) => ({
				...prevState,
				isClearClicked: false,
			}));
		}, 1000);
	};

	function isValidUrl(string) {
		return urlRegex.test(string);
	}

	const handleAddLink = () => {
		const trimmedInput = state.inputImage.trim();
		if (trimmedInput === "" || !isValidUrl(trimmedInput)) {
			alert("Por favor, insira um link válido.");
			return;
		}

		setState((prevState) => ({
			...prevState,
			isAddLinkClicked: true,
			imageLinks: [...prevState.imageLinks, trimmedInput],
			inputImage: "",
		}));

		setTimeout(() => {
			setState((prevState) => ({
				...prevState,
				isAddLinkClicked: false,
			}));
		}, 1000);
	};

	const createPromptText = (state) => {
		const {
			imageLinks,
			includeContent,
			version,
			aspectRatio,
			activeFields,
			stylize,
			chaos,
			excludeContent,
		} = state;
		let prompt = "/imagine prompt: ";

		if (imageLinks.length) {
			prompt += imageLinks.join(", ");
			if (includeContent) prompt += ", ";
		}

		if (includeContent) prompt += includeContent;

		if (version) prompt += " " + versionCommandMap[version];

		if (aspectRatio) prompt += ` --ar ${aspectRatio.num1}:${aspectRatio.num2}`;

		if (activeFields.stylize) prompt += ` --s ${stylize}`;

		if (activeFields.chaos) prompt += ` --c ${chaos}`;

		if (excludeContent) prompt += `, ${excludeContent}`;
		return prompt;
	};

	const tabs = [
		{ title: "Texto", className: "texto" },
		{ title: "Parâmetros", className: "parametros" },
		{ title: "Imagens", className: "imagens" },
	];

	return (
		<>
			<MainDiv>
				<PromptContainer>
					<span className="prompt-text">{createPromptText(state)}</span>

					<ButtonsWrapper>
						<Button
							onClick={handleClear}
							className={state.isClearClicked ? "clearClicked" : "clear"}
						>
							{state.isClearClicked ? "Apagado!" : "Apagar tudo"}
						</Button>

						<Button
							onClick={handleCopy}
							className={state.isCopyClicked ? "copyClicked" : "copy"}
						>
							{state.isCopyClicked ? "Copiado!" : "Copiar prompt"}
						</Button>
					</ButtonsWrapper>
				</PromptContainer>

				<TabContainer>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							active={state.currentTab === tab.title}
							onClick={() =>
								setState((prevState) => ({
									...prevState,
									currentTab: tab.title,
								}))
							}
							className={tab.className}
						>
							{tab.title}
						</Tab>
					))}
				</TabContainer>

				{state.currentTab === "Texto" && (
					<TabPanel value={state.currentTab} index="Texto">
						<TextoDiv>
							<InputField>
								<input
									type="text"
									value={state.input1}
									onChange={(e) =>
										setState((prevState) => ({
											...prevState,
											input1: e.target.value,
										}))
									}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleInclude();
										}
									}}
									placeholder="Adicione palavras ou frases que você quer que apareçam no prompt"
									className="blue"
								/>
								<Button
									color="#197ef4"
									onClick={handleInclude}
									className={
										state.isIncludeClicked ? "includeClicked" : "include"
									}
								>
									{state.isIncludeClicked ? "Incluído!" : "Incluir no prompt"}
								</Button>
							</InputField>

							<InputField>
								<input
									type="text"
									value={state.input2}
									onChange={(e) =>
										setState((prevState) => ({
											...prevState,
											input2: e.target.value,
										}))
									}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleExclude();
										}
									}}
									placeholder="Adicione palavras ou frases que você NÃO quer que apareçam no prompt"
									className="red"
								/>
								<Button
									color="#dc2626"
									onClick={handleExclude}
									className={
										state.isExcludeClicked ? "excludeClicked" : "exclude"
									}
								>
									{state.isExcludeClicked ? "Excluído!" : "Excluir do prompt"}
								</Button>
							</InputField>
						</TextoDiv>
					</TabPanel>
				)}

				{state.currentTab === "Parâmetros" && (
					<TabPanel value={state.currentTab} index="Parâmetros">
						<ParametrosDiv>
							{/* Version */}
							<SelectField
								className={`version ${
									state.activeFields.version ? "active" : ""
								}`}
								onClick={() => toggleFieldActive("version")}
							>
								<label>Version</label>
								{state.activeFields.version && (
									<div>
										<select
											onChange={handleVersionChange}
											onClick={(e) => e.stopPropagation()}
										>
											{versionOptions.map((option, index) => (
												<option value={option} key={index}>
													{option}
												</option>
											))}
										</select>
									</div>
								)}
							</SelectField>

							{/* Aspect Ratio */}
							<SliderField
								className={`aspectRatio ${
									state.activeFields.aspectRatio ? "active" : ""
								}`}
								onClick={() => toggleFieldActive("aspectRatio")}
							>
								<label>Aspect Ratio</label>
								{state.activeFields.aspectRatio && (
									<div>
										<select
											onChange={(e) =>
												handleAspectRatioChange(e.target.value, "num1")
											}
											onClick={(e) => e.stopPropagation()}
										>
											{aspectRatioOptions.map((option, index) => (
												<option value={option} key={index}>
													{option}
												</option>
											))}
										</select>
										<span>:</span>
										<select
											onChange={(e) =>
												handleAspectRatioChange(e.target.value, "num2")
											}
											onClick={(e) => e.stopPropagation()}
										>
											{aspectRatioOptions.map((option, index) => (
												<option value={option} key={index}>
													{option}
												</option>
											))}
										</select>
									</div>
								)}
							</SliderField>

							{/* Stylize */}
							<SelectField
								className={`stylize ${
									state.activeFields.stylize ? "active" : ""
								}`}
								onClick={() => toggleFieldActive("stylize")}
							>
								<label>Stylize</label>
								{state.activeFields.stylize && (
									<div>
										<input
											type="range"
											min="0"
											max="1000"
											value={state.stylize}
											onChange={(e) =>
												setState({ ...state, stylize: e.target.value })
											}
											onClick={(e) => e.stopPropagation()}
										/>
										<span>{state.stylize}</span>
									</div>
								)}
							</SelectField>

							{/* Chaos */}
							<SliderField
								className={`chaos ${state.activeFields.chaos ? "active" : ""}`}
								onClick={() => toggleFieldActive("chaos")}
							>
								<label>Chaos</label>
								{state.activeFields.chaos && (
									<div>
										<input
											type="range"
											min="1"
											max="100"
											value={state.chaos}
											onChange={(e) =>
												setState({ ...state, chaos: e.target.value })
											}
											onClick={(e) => e.stopPropagation()}
										/>
										<span>{state.chaos}</span>{" "}
										{/* Exibir o valor atual de chaos */}
									</div>
								)}
							</SliderField>
						</ParametrosDiv>
					</TabPanel>
				)}

				{state.currentTab === "Imagens" && (
					<TabPanel value={state.currentTab} index="Imagens">
						<ImagensDiv>
							<InputField>
								<input
									type="text"
									value={state.inputImage}
									onChange={(e) =>
										setState({ ...state, inputImage: e.target.value })
									}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleAddLink();
										}
									}}
									placeholder="Cole o link da imagem que você deseja adicionar ao prompt"
									className="blue"
								/>
								<Button
									onClick={handleAddLink}
									className={
										state.isAddLinkClicked ? "addLinkClicked" : "addLink"
									}
								>
									{state.isAddLinkClicked ? "Adicionado!" : "Adicionar link"}
								</Button>
							</InputField>
						</ImagensDiv>
					</TabPanel>
				)}
			</MainDiv>

			<GlobalFooter />
		</>
	);
}
