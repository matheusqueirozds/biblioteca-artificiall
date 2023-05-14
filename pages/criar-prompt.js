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

// Criação do novo componente TabPanel
function TabPanel({ children, value, index }) {
	if (value !== index) {
		return null;
	}

	return (
		<div
			role="tabpanel"
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
		>
			<div>{children}</div>
		</div>
	);
}

export default function CriarPrompts() {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [inputImage, setInputImage] = useState("");
	const [version, setVersion] = useState("version 5.1");
	const [aspectRatio, setAspectRatio] = useState({ num1: 1, num2: 1 });
	const [stylize, setStylize] = useState(100);
	const [chaos, setChaos] = useState(0);
	const [currentTab, setCurrentTab] = useState("Texto");
	const [commandContent, setCommandContent] = useState("");
	const [isFirstExclusion, setIsFirstExclusion] = useState(true);
	const [includeContent, setIncludeContent] = useState("");
	const [excludeContent, setExcludeContent] = useState("");
	const [activeFields, setActiveFields] = useState({
		version: false,
		aspectRatio: false,
		stylize: false,
		chaos: false,
	});
	const [imageLinks, setImageLinks] = useState([]);
	const [isClearClicked, setIsClearClicked] = useState(false);
	const [isCopyClicked, setIsCopyClicked] = useState(false);
	const [isIncludeClicked, setIsIncludeClicked] = useState(false);
	const [isExcludeClicked, setIsExcludeClicked] = useState(false);
	const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);

	const versionOptions = [
		"version 5.1",
		"niji 5",
		"version 5",
		"niji",
		"version 4",
	];

	const versionCommandMap = {
		"version 5.1": "--v 5.1",
		"niji 5": "--niji 5",
		"version 5": "--v 5",
		niji: "--niji",
		"version 4": "--v 4",
	};

	const aspectRatioOptions = Array.from({ length: 16 }, (_, i) => i + 1);

	const handleAspectRatioChange = (value, position) => {
		setAspectRatio((prevState) => {
			const newAspectRatio = {
				...prevState,
				[position]: value,
			};
			setCommandContent(
				(prevContent) =>
					prevContent +
					`, aspect ratio: ${newAspectRatio.num1}:${newAspectRatio.num2}`
			);
			return newAspectRatio;
		});
	};

	const handleVersionChange = (e) => {
		setVersion(e.target.value);
	};

	const toggleFieldActive = (field) => {
		setActiveFields((prevState) => ({
			...prevState,
			[field]: !prevState[field],
		}));
	};

	const handleInclude = async () => {
		if (input1.trim() !== "") {
			// Verifica se input1 não está vazio
			setIsIncludeClicked(true);
			setTimeout(() => setIsIncludeClicked(false), 1000);

			// Translate input1 content
			const translatedInput1 = await translateText(input1, "en");

			setIncludeContent((prevContent) =>
				prevContent.length > 0
					? prevContent + ", " + translatedInput1
					: prevContent + translatedInput1
			);
			setInput1("");
		}
	};

	const handleExclude = async () => {
		if (input2.trim() !== "") {
			// Verifica se input2 não está vazio
			setIsExcludeClicked(true);
			setTimeout(() => setIsExcludeClicked(false), 1000);

			// Translate input2 content
			const translatedInput2 = await translateText(input2, "en");

			setExcludeContent((prevContent) => {
				if (isFirstExclusion) {
					setIsFirstExclusion(false);
					return prevContent.length > 0
						? prevContent + ", --no " + translatedInput2
						: prevContent + "--no " + translatedInput2;
				} else {
					return prevContent.length > 0
						? prevContent + ", " + translatedInput2
						: prevContent + translatedInput2;
				}
			});
			setInput2("");
		}
	};

	const handleCopy = () => {
		setIsCopyClicked(true);
		setTimeout(() => setIsCopyClicked(false), 1000);

		const promptText = document.querySelector(".prompt-text").textContent;
		navigator.clipboard
			.writeText(promptText)
			.catch(() => alert("Falha ao copiar texto"));
	};

	const handleClear = () => {
		setInput1("");
		setInput2("");
		setInputImage("");
		setVersion("version 5.1");
		setAspectRatio({ num1: 1, num2: 1 });
		setStylize(100);
		setChaos(0);
		setCurrentTab("Texto");
		setCommandContent("");
		setIsFirstExclusion(true);
		setIncludeContent("");
		setExcludeContent("");
		setActiveFields({
			version: false,
			aspectRatio: false,
			stylize: false,
			chaos: false,
		});
		setImageLinks("");
		setIsClearClicked(true);
		setTimeout(() => setIsClearClicked(false), 1000);
	};

	function isValidUrl(string) {
		var regex = /^(ftp|http|https):\/\/[^ "]+$/;
		return regex.test(string);
	}

	const handleAddLink = () => {
		if (inputImage.trim() !== "") {
			// Verifica se inputImage não está vazio
			if (isValidUrl(inputImage.trim())) {
				setIsAddLinkClicked(true);
				setTimeout(() => setIsAddLinkClicked(false), 1000);

				setImageLinks((prevLinks) => [...prevLinks, inputImage]);
				setInputImage("");
			} else {
				alert("Por favor, insira um link válido.");
			}
		}
	};

	return (
		<MainDiv>
			<PromptContainer>
				<span className="prompt-text">
					/imagine prompt:{" "}
					{(imageLinks.length ? imageLinks.join(", ") : "") +
						(imageLinks.length && includeContent ? ", " : "") +
						(includeContent ? includeContent : "") +
						(version ? " " + versionCommandMap[version] : "") +
						(aspectRatio
							? " --ar " + aspectRatio.num1 + ":" + aspectRatio.num2
							: "") +
						(activeFields.stylize ? " --stylize " + stylize : "") +
						(activeFields.chaos ? " --chaos " + chaos : "") +
						(excludeContent ? ", " + excludeContent : "")}
				</span>

				<ButtonsWrapper>
					<Button
						onClick={handleClear}
						className={isClearClicked ? "clearClicked" : "clear"}
					>
						{isClearClicked ? "Apagado!" : "Apagar tudo"}
					</Button>

					<Button
						onClick={handleCopy}
						className={isCopyClicked ? "copyClicked" : "copy"}
					>
						{isCopyClicked ? "Copiado!" : "Copiar prompt"}
					</Button>
				</ButtonsWrapper>
			</PromptContainer>

			<TabContainer>
				<Tab
					active={currentTab === "Texto"}
					onClick={() => setCurrentTab("Texto")}
					className="texto"
				>
					Texto
				</Tab>
				<Tab
					active={currentTab === "Parâmetros"}
					onClick={() => setCurrentTab("Parâmetros")}
					className="parametros"
				>
					Parâmetros
				</Tab>
				<Tab
					active={currentTab === "Imagens"}
					onClick={() => setCurrentTab("Imagens")}
					className="imagens"
				>
					Imagens
				</Tab>
			</TabContainer>
			{currentTab === "Texto" && (
				<TabPanel value={currentTab} index="Texto">
					<TextoDiv>
						<InputField>
							<input
								type="text"
								value={input1}
								onChange={(e) => setInput1(e.target.value)}
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
								className={isIncludeClicked ? "includeClicked" : "include"}
							>
								{isIncludeClicked ? "Incluído!" : "Incluir no prompt"}
							</Button>
						</InputField>
						<InputField>
							<input
								type="text"
								value={input2}
								onChange={(e) => setInput2(e.target.value)}
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
								className={isExcludeClicked ? "excludeClicked" : "exclude"}
							>
								{isExcludeClicked ? "Excluído!" : "Excluir do prompt"}
							</Button>
						</InputField>
					</TextoDiv>
				</TabPanel>
			)}

			{currentTab === "Parâmetros" && (
				<TabPanel value={currentTab} index="Parâmetros">
					<ParametrosDiv>
						{/* Version */}
						<SelectField
							className={`version ${activeFields.version ? "active" : ""}`}
							onClick={() => toggleFieldActive("version")}
						>
							<label>Version</label>
							{activeFields.version && (
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
								activeFields.aspectRatio ? "active" : ""
							}`}
							onClick={() => toggleFieldActive("aspectRatio")}
						>
							<label>Aspect Ratio</label>
							{activeFields.aspectRatio && (
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
							className={`stylize ${activeFields.stylize ? "active" : ""}`}
							onClick={() => toggleFieldActive("stylize")}
						>
							<label>Stylize</label>
							{activeFields.stylize && (
								<div>
									<input
										type="range"
										min="0"
										max="1000"
										value={stylize}
										onChange={(e) => setStylize(e.target.value)}
										onClick={(e) => e.stopPropagation()}
									/>
									<span>{stylize}</span>
								</div>
							)}
						</SelectField>

						{/* Chaos */}
						<SliderField
							className={`chaos ${activeFields.chaos ? "active" : ""}`}
							onClick={() => toggleFieldActive("chaos")}
						>
							<label>Chaos</label>
							{activeFields.chaos && (
								<div>
									<input
										type="range"
										min="1"
										max="100"
										value={chaos}
										onChange={(e) => setChaos(e.target.value)}
										onClick={(e) => e.stopPropagation()}
									/>
									<span>{chaos}</span> {/* Exibir o valor atual de chaos */}
								</div>
							)}
						</SliderField>
					</ParametrosDiv>
				</TabPanel>
			)}

			{currentTab === "Imagens" && (
				<TabPanel value={currentTab} index="Imagens">
					<ImagensDiv>
						<InputField>
							<input
								type="text"
								value={inputImage}
								onChange={(e) => setInputImage(e.target.value)}
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
								className={isAddLinkClicked ? "addLinkClicked" : "addLink"}
							>
								{isAddLinkClicked ? "Adicionado!" : "Adicionar link"}
							</Button>
						</InputField>
					</ImagensDiv>
				</TabPanel>
			)}
		</MainDiv>
	);
}
