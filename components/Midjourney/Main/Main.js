import React, { useEffect, useState } from "react";
import {
	MainContainer,
	SideMenu,
	PromptsContainer,
	PromptsList,
	Subcategory,
	NoResultsContainer,
} from "./MainStyles";
import Prompt from "@/components/Midjourney/Prompt/Prompt";
import ImageModal from "@/components/Midjourney/ImageModal/ImageModal";
import { useSearch } from "@/SearchContext";

export default function Main({ data, filteredPrompts, setFilteredPrompts }) {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState({ url: "", alt: "" });
	const { searchTerm } = useSearch();

	useEffect(() => {
		if (searchTerm) {
			const promptsToFilter = data.midjourney.categories.flatMap(
				(category) => category.prompts
			);
			const filtered = filterPrompts(searchTerm, promptsToFilter);
			setFilteredPrompts(filtered);
		} else {
			if (activeCategory) {
				setFilteredPrompts(activeCategory.prompts);
			} else {
				setActiveCategory(data.midjourney.categories[0]);
			}
		}
	}, [searchTerm, activeCategory]);

	useEffect(() => {
		if (data && data.midjourney.categories) {
			setCategories(data.midjourney.categories);
			setActiveCategory(data.midjourney.categories[0]);
		}
	}, [data]);

	const filterPrompts = (term, promptsToFilter) => {
		const searchType = document.getElementById("searchType").value;

		if (searchType === "advanced") {
			promptsToFilter = data.midjourney.categories.flatMap(
				(category) => category.prompts
			);
		} else {
			promptsToFilter = activeCategory.prompts;
		}

		const filtered = promptsToFilter.filter((prompt) =>
			prompt.prompt_text.toLowerCase().includes(term.toLowerCase())
		);
		return filtered;
	};

	const handleCategoryClick = (category) => {
		setActiveCategory(category);
	};

	const handleViewImageClick = (imageUrl, imageAlt) => {
		setModalImage({ url: imageUrl, alt: imageAlt });
		setIsModalOpen(true);
	};

	if (!activeCategory) {
		return <div>Carregando...</div>;
	}

	const getSubcategories = () => {
		const subcategories = {};
		const prompts = filteredPrompts;

		prompts.forEach((prompt) => {
			if (!subcategories[prompt.prompt_subcategories]) {
				subcategories[prompt.prompt_subcategories] = [];
			}
			subcategories[prompt.prompt_subcategories].push(prompt);
		});

		return subcategories;
	};

	const subcategories = getSubcategories();

	return (
		<MainContainer>
			<SideMenu>
				<h2>Categorias</h2>
				<ul>
					{categories.map((category) => (
						<li
							key={category.name}
							onClick={() => handleCategoryClick(category)}
							className={category === activeCategory ? "active" : ""}
						>
							{category.name}
						</li>
					))}
				</ul>
			</SideMenu>

			<PromptsContainer>
				{filteredPrompts.length === 0 ? (
					<NoResultsContainer>
						<h2>Nenhum Prompt foi encontrado</h2>
					</NoResultsContainer>
				) : (
					Object.keys(subcategories).map((subcategory) => (
						<Subcategory key={subcategory}>
							<h3>{subcategory}</h3>
							<PromptsList>
								{subcategories[subcategory].map((prompt) => (
									<Prompt
										key={`${prompt.id}-${prompt.prompt_text}`}
										prompt={prompt}
										onViewImageClick={handleViewImageClick}
									/>
								))}
							</PromptsList>
						</Subcategory>
					))
				)}
			</PromptsContainer>

			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				imageUrl={modalImage.url}
				imageAlt={modalImage.alt}
			/>
		</MainContainer>
	);
}
