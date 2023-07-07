import React, { useState } from "react";
import {
	IndexButton,
	IndexButtonsContainer,
	IndexContainer,
} from "./IndexMainStyles";
import Image from "next/image";
import Link from "next/link";
import IndexSearchBar from "../IndexSearchBar/IndexSearchBar";
import DailyPrompt from "../../Global/DailyPrompt/DailyPrompt";
import data from "@/data/midjourney.json";
import ImageModal from "@/components/Midjourney/Prompt/ImageModal/ImageModal";

export default function IndexMain({
	handleSearchInput,
	handleKeyPress,
	advancedSearchSelectRef,
	handleButtonClick,
}) {
	// Função para lidar com a ação de visualizar a imagem
	const handleViewImageClick = (imageUrl, imageAlt) => {
		setModalImage({ url: imageUrl, alt: imageAlt });
		setIsModalOpen(true);
	};

	const [showDailyPrompt, setShowDailyPrompt] = useState(true);

	const toggleDailyPrompt = () => {
		setShowDailyPrompt(!showDailyPrompt);
	};

	const dailyPrompt = data.midjourney.daily_prompt;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState({ url: "", alt: "" });

	return (
		<IndexContainer>
			<Image
				src="/logo.webp"
				alt="Biblioteca Artificiall"
				width={200}
				height={200}
			/>
			<IndexSearchBar
				handleSearchInput={handleSearchInput}
				handleKeyPress={handleKeyPress}
				advancedSearchSelectRef={advancedSearchSelectRef}
			/>
			<IndexButtonsContainer>
				<div>
					<IndexButton
						onClick={handleButtonClick}
						aria-label="Pesquisar prompt"
					>
						Pesquisar prompt
					</IndexButton>

					<Link href="/midjourney">
						<IndexButton aria-label="Acessar biblioteca de prompts">
							Acessar biblioteca de prompts
						</IndexButton>
					</Link>

					<Link href="/criar-prompt" style={{ opacity: "1" }}>
						<IndexButton aria-label="Criar prompt">Criar prompt</IndexButton>
					</Link>

					<Link href="/ferramentas-uteis" style={{ opacity: "1" }}>
						<IndexButton aria-label="Ferramentas úteis">
							Ferramentas úteis
						</IndexButton>
					</Link>
				</div>

				<IndexButton
					onClick={toggleDailyPrompt}
					aria-label={
						showDailyPrompt ? "Fechar prompt do dia" : "Mostrar prompt do dia"
					}
					className="dailyPrompt"
					showDailyPrompt={showDailyPrompt}
				>
					{showDailyPrompt ? "Fechar prompt do dia" : "Mostrar prompt do dia"}
				</IndexButton>
			</IndexButtonsContainer>

			{showDailyPrompt && (
				<DailyPrompt
					prompt={dailyPrompt}
					onViewImageClick={handleViewImageClick}
				/>
			)}

			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				imageUrl={modalImage.url}
				imageAlt={modalImage.alt}
			/>
		</IndexContainer>
	);
}
