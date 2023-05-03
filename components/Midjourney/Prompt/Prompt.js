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

export default function Prompt({ prompt, onViewImageClick }) {
	const nonEditablePart = "/imagine prompt: ";
	const editablePart = prompt.prompt_text.substring(nonEditablePart.length);

	const { prompt_text, image_url, image_alt } = prompt;
	const [copyButtonText, setCopyButtonText] = useState("Copiar");
	const [copyButtonBackgroundColor, setCopyButtonBackgroundColor] =
		useState("");
	const [translateButtonText, setTranslateButtonText] = useState("Traduzir");
	const [translateButtonBackgroundColor, setTranslateButtonBackgroundColor] =
		useState("");
	const [translated, setTranslated] = useState(false);
	const [text, setText] = useState(editablePart);

	const handleCopyClick = () => {
		const fullText = nonEditablePart + text;
		navigator.clipboard.writeText(fullText);
		setCopyButtonText("Copiado");
		setCopyButtonBackgroundColor("#4CAF50");
		setTimeout(() => {
			setCopyButtonText("Copiar");
			setCopyButtonBackgroundColor("");
		}, 2000);
	};

	const handleTranslateClick = async () => {
		if (!translated) {
			const translatedText = await translateText(text, "pt-BR");
			setText(translatedText);
			setTranslateButtonText("Desfazer tradução");
			setTranslateButtonBackgroundColor("#e74c3c");
			setTranslated(true);
		} else {
			const translatedText = await translateText(text, "en");
			setText(translatedText);
			setTranslateButtonText("Traduzir");
			setTranslateButtonBackgroundColor("");
			setTranslated(false);
		}
	};

	const handleResetTextClick = () => {
		setText(editablePart);
		setTranslateButtonText("Traduzir");
		setTranslateButtonBackgroundColor("");
		setTranslated(false);
	};

	const handleViewImageClick = () => {
		onViewImageClick(image_url, image_alt);
	};

	const translateText = async (text, targetLanguage) => {
		const maxChunkSize = 200;
		const textChunks = [];

		for (let i = 0; i < text.length; i += maxChunkSize) {
			textChunks.push(text.slice(i, i + maxChunkSize));
		}

		const translatedChunks = await Promise.all(
			textChunks.map(async (chunk) => {
				const response = await fetch(
					`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
						chunk
					)}`
				);
				const data = await response.json();
				return data[0][0][0];
			})
		);

		return translatedChunks.join("");
	};

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
					text={copyButtonText}
				/>
				<ResetTextButton onClick={handleResetTextClick} />
				<TranslateButton
					onClick={handleTranslateClick}
					backgroundColor={translateButtonBackgroundColor}
					text={translateButtonText}
				/>
			</ButtonsWrapper>
			<TextAreaWrapper>
				<NonEditableText>{nonEditablePart}</NonEditableText>
				<EditableText value={text} onChange={handleTextChange} title="Clique aqui para editar o texto" />
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
