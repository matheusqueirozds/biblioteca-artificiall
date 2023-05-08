import React, { useEffect, useState } from "react";
import {
	MainContainer,
	SideMenu,
	PromptsContainer,
	NoResultsContainer,
	ChevronButton,
	CategoriesList,
} from "./MainStyles";
import ImageModal from "@/components/Midjourney/Prompt/ImageModal/ImageModal";
import { useSearch } from "@/SearchContext";
import Image from "next/image";
import CategoryItem from "./CategoryItem";
import SubcategoryItem from "./SubcategoryItem";
import { NO_RESULTS_MESSAGE } from "./constants";
import { sortMidjourneyData } from "../../../utils/sort_midjourney";

export default function Main({ data, filteredPrompts, setFilteredPrompts }) {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState({ url: "", alt: "" });
	const { searchTerm } = useSearch();
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		if (data && data.midjourney.categories) {
			setCategories(data.midjourney.categories);
			setActiveCategory(data.midjourney.categories[0]);
		}
	}, [data]);

	// Atualiza os prompts filtrados com base no termo de pesquisa ou na categoria ativa
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

	// Filtra os prompts com base no termo de pesquisa
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

	// Alterna a categoria ativa
	const handleCategoryClick = (category) => {
		setActiveCategory(category);
	};

	// Abre o modal da imagem
	const handleViewImageClick = (imageUrl, imageAlt) => {
		setModalImage({ url: imageUrl, alt: imageAlt });
		setIsModalOpen(true);
	};

	// Alterna o estado do menu lateral
	const toggleSideMenu = () => {
		setCollapsed(!collapsed);
	};

	if (!activeCategory) {
		return <div>Carregando...</div>;
	}

	// Obtém as subcategorias dos prompts filtrados
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
			<SideMenu collapsed={collapsed}>
				<ChevronButton
					onClick={toggleSideMenu}
					title="Alterar visibilidade do menu lateral"
				>
					<Image
						src="/chevron-right.svg"
						alt="Ver menu lateral"
						title="Ver menu lateral"
						width={24}
						height={24}
						style={{ display: collapsed ? "block" : "none" }}
					/>
					<Image
						src="/chevron-left.svg"
						alt="Ocultar menu lateral"
						title="Ocultar menu lateral"
						width={24}
						height={24}
						style={{ display: collapsed ? "none" : "block" }}
					/>
				</ChevronButton>
				{!collapsed && (
					<>
						<h2>Categorias</h2>
						<CategoriesList>
							{categories.map((category) => (
								<CategoryItem
									category={category}
									active={category === activeCategory}
									onClick={() => handleCategoryClick(category)}
								/>
							))}
						</CategoriesList>
					</>
				)}
			</SideMenu>

			<PromptsContainer collapsed={collapsed}>
				{filteredPrompts.length === 0 ? (
					<NoResultsContainer>
						<h2>{NO_RESULTS_MESSAGE}</h2>
					</NoResultsContainer>
				) : (
					Object.keys(subcategories).map((subcategory) => (
						<SubcategoryItem
							subcategory={subcategory}
							subcategories={subcategories}
							handleViewImageClick={handleViewImageClick}
							collapsed={collapsed}
						/>
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

sortMidjourneyData();
