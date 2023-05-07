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
import Image from "next/image";

// Componente que representa um prompt e suas ações relacionadas
export default function Prompt({ prompt, onViewImageClick }) {
	const nonEditablePart = "/imagine prompt: ";
	const editablePart = prompt.prompt_text.substring(nonEditablePart.length);

	const { image_url, image_alt } = prompt;

	// Estados locais para gerenciar os textos, cores e estados dos botões
	const [copyButtonText, setCopyButtonText] = useState("Copiar");
	const [copyButtonColor, setCopyButtonColor] = useState("");
	const [copyButtonBackgroundColor, setCopyButtonBackgroundColor] =
		useState("");
	const [translateButtonText, setTranslateButtonText] = useState("Traduzir");
	const [translateButtonColor, setTranslateButtonColor] = useState("");
	const [translateButtonBackgroundColor, setTranslateButtonBackgroundColor] =
		useState("");
	const [resetButtonText, setResetButtonText] = useState("Resetar texto");
	const [resetButtonColor, setResetButtonColor] = useState("");
	const [resetButtonBackgroundColor, setResetButtonBackgroundColor] =
		useState("");

	// Estado local para armazenar se o texto foi traduzido
	const [translated, setTranslated] = useState(false);

	// Estado local para armazenar o texto editável
	const [text, setText] = useState(editablePart);

	// Função para lidar com a ação de copiar o texto
	const handleCopyClick = () => {
		const fullText = nonEditablePart + text;
		navigator.clipboard.writeText(fullText);
		setCopyButtonText("Copiado!");
		setCopyButtonColor("#FFFFFF");
		setCopyButtonBackgroundColor("#81C784");
		setTimeout(() => {
			setCopyButtonText("Copiar");
			setCopyButtonColor("");
			setCopyButtonBackgroundColor("");
		}, 2000);
	};

	// Função para lidar com a ação de resetar o texto
	const handleResetTextClick = () => {
		setText(editablePart);
		setTranslateButtonText("Traduzir");
		setTranslateButtonBackgroundColor("");
		setTranslated(false);
		setResetButtonText("Resetado!");
		setResetButtonColor("#FFFFFF");
		setResetButtonBackgroundColor("#FF8A65");
		setTimeout(() => {
			setResetButtonText("Resetar texto");
			setResetButtonColor("");
			setResetButtonBackgroundColor("");
		}, 1000);
	};

	// Função para lidar com a ação de traduzir o texto
	const handleTranslateClick = async () => {
		if (!translated) {
			const translatedText = await translateText(text, "pt-BR");
			setText(translatedText);
			setTranslateButtonText("Desfazer tradução");
			setTranslateButtonColor("#FFFFFF");
			setTranslateButtonBackgroundColor("#64B5F6");
			setTranslated(true);
		} else {
			const translatedText = await translateText(text, "en");
			setText(translatedText);
			setTranslateButtonText("Traduzir");
			setTranslateButtonColor("");
			setTranslateButtonBackgroundColor("");
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
					backgroundColor={copyButtonBackgroundColor}
					textColor={copyButtonColor}
					text={copyButtonText}
				/>
				<ResetTextButton
					onClick={handleResetTextClick}
					backgroundColor={resetButtonBackgroundColor}
					textColor={resetButtonColor}
					text={resetButtonText}
				/>
				<TranslateButton
					onClick={handleTranslateClick}
					backgroundColor={translateButtonBackgroundColor}
					textColor={translateButtonColor}
					text={translateButtonText}
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
