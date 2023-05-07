import React, { useState } from "react";
import {
	PromptContainer,
	ButtonsWrapper,
	EditableText,
	PromptImage,
	TextAreaWrapper,
	NonEditableText,
} from "./PromptStyles";
import CopyButton from "./CopyButton";
import TranslateButton from "./TranslateButton";
import ResetTextButton from "./ResetTextButton";
import ViewImageButton from "./ViewImageButton";
import { translateText } from "./translationHelper";

// Componente que representa um prompt e suas ações relacionadas
export default function Prompt({ prompt, onViewImageClick }) {
	const nonEditablePart = "/imagine prompt: ";
	const editablePart = prompt.prompt_text.substring(nonEditablePart.length);

	const { image_url, image_alt } = prompt;

	// Estados locais para gerenciar os textos, cores e estados dos botões
	const [copyButton, setCopyButton] = useState({
		text: "Copiar",
		color: "",
		backgroundColor: "",
	});
	const [translateButton, setTranslateButton] = useState({
		text: "Traduzir",
		color: "",
		backgroundColor: "",
	});
	const [resetButton, setResetButton] = useState({
		text: "Resetar texto",
		color: "",
		backgroundColor: "",
	});

	// Estado local para armazenar se o texto foi traduzido
	const [translated, setTranslated] = useState(false);

	// Estado local para armazenar o texto editável
	const [text, setText] = useState(editablePart);

	// Função para lidar com a ação de copiar o texto
	const handleCopyClick = () => {
		const fullText = nonEditablePart + text;
		navigator.clipboard.writeText(fullText);
		setCopyButton({
			text: "Copiado!",
			color: "#FFFFFF",
			backgroundColor: "#81C784",
		});
		setTimeout(() => {
			setCopyButton({
				text: "Copiar",
				color: "",
				backgroundColor: "",
			});
		}, 2000);
	};

	// Função para lidar com a ação de resetar o texto
	const handleResetTextClick = () => {
		setText(editablePart);
		setTranslateButton({
			text: "Traduzir",
			color: "",
			backgroundColor: "",
		});
		setTranslated(false);
		setResetButton({
			text: "Resetado!",
			color: "#FFFFFF",
			backgroundColor: "#FF8A65",
		});
		setTimeout(() => {
			setResetButton({
				text: "Resetar texto",
				color: "",
				backgroundColor: "",
			});
		}, 1000);
	};

	// Função para lidar com a ação de traduzir o texto
	const handleTranslateClick = async () => {
		if (!translated) {
			const translatedText = await translateText(text, "pt-BR");
			setText(translatedText);
			setTranslateButton({
				text: "Desfazer tradução",
				color: "#FFFFFF",
				backgroundColor: "#64B5F6",
			});
			setTranslated(true);
		} else {
			const translatedText = await translateText(text, "en");
			setText(translatedText);
			setTranslateButton({
				text: "Traduzir",
				color: "",
				backgroundColor: "",
			});
			setTranslated(false);
		}
	};

	// Função para lidar com a ação de visualizar a imagem
	const handleViewImageClick = () => {
		onViewImageClick(image_url, image_alt);
	};

	// Função para lidar com a mudança no texto editável
	const handleTextChange = (e) => {
		const newValue = e.target.value;
		setText(newValue);
	};

	return (
		<PromptContainer>
			<ButtonsWrapper>
				<CopyButton
					onClick={handleCopyClick}
					backgroundColor={copyButton.backgroundColor}
					textColor={copyButton.color}
					text={copyButton.text}
				/>
				<ResetTextButton
					onClick={handleResetTextClick}
					backgroundColor={resetButton.backgroundColor}
					textColor={resetButton.color}
					text={resetButton.text}
				/>
				<TranslateButton
					onClick={handleTranslateClick}
					backgroundColor={translateButton.backgroundColor}
					textColor={translateButton.color}
					text={translateButton.text}
				/>
			</ButtonsWrapper>
			<TextAreaWrapper>
				<NonEditableText>{nonEditablePart}</NonEditableText>
				<EditableText
					value={text}
					onChange={handleTextChange}
					title="Clique aqui para editar o texto"
				/>
			</TextAreaWrapper>
			<PromptImage
				src={image_url}
				alt={image_alt}
				onClick={handleViewImageClick}
			/>
			<ViewImageButton onClick={handleViewImageClick} />
		</PromptContainer>
	);
}
