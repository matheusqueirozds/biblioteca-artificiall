import React, { useEffect, useState } from "react";
import {
	MainContainer,
	SideMenu,
	PromptsContainer,
	PromptsList,
	Subcategory,
} from "./MainStyles";
import Prompt from "../Prompt/Prompt";
import ImageModal from "../ImageModal/ImageModal";

export default function Main({ data, searchTerm }) {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState({ url: "", alt: "" });

	const [filteredPrompts, setFilteredPrompts] = useState([]);

	useEffect(() => {
		if (searchTerm) {
			filterPrompts(searchTerm);
		} else {
			if (activeCategory) {
				setFilteredPrompts(activeCategory.prompts);
			} else {
				setActiveCategory(data.categories[0]);
			}
		}
	}, [searchTerm, activeCategory]);

	const filterPrompts = (term) => {
		const searchType = document.getElementById("searchType").value;
		let promptsToFilter;

		if (searchType === "advanced") {
			promptsToFilter = data.categories.flatMap((category) => category.prompts);
		} else {
			promptsToFilter = activeCategory.prompts;
		}

		const filtered = promptsToFilter.filter((prompt) =>
			prompt.prompt_text.toLowerCase().includes(term.toLowerCase())
		);
		setFilteredPrompts(filtered);
	};

	useEffect(() => {
		if (data && data.categories) {
			setCategories(data.categories);
			setActiveCategory(data.categories[0]);
		}
	}, [data]);

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
					<h2>Nenhum Prompt foi encontrado</h2>
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
