import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
	AdvancedSearch,
	SearchBarWrapper,
	SearchInput,
} from "@/components/Midjourney/Header/HeaderStyles";

export default function HeaderSearchBar({
	searchTerm,
	handleInputChange,
}) {
	// Criar uma referência para o campo de pesquisa
	const searchInputRef = useRef();

	// Função para focar no campo de pesquisa quando a tecla "/" for pressionada
	const handleKeyDown = (e) => {
		if (e.key === "/") {
			e.preventDefault();
			searchInputRef.current.focus();
		}
	};

	useEffect(() => {
		// Adicionar o event listener ao montar o componente
		window.addEventListener("keydown", handleKeyDown);

		// Remover o event listener ao desmontar o componente
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<SearchBarWrapper>
			{/* Campo de pesquisa */}
			<SearchInput
				ref={searchInputRef}
				type="text"
				title="Pesquisar"
				aria-label="Campo de pesquisa"
				placeholder="Pesquisar prompt"
				value={searchTerm}
				onChange={handleInputChange}
			/>

			{/* Seletor de opções de categorias */}
			<AdvancedSearch>
				<select id="searchType" name="searchType">
					<option value="advanced" selected>
						Todas as categorias
					</option>
					<option value="simple">Categoria atual</option>
				</select>
			</AdvancedSearch>

			{/* Ícone de pesquisa */}
			<Image src="/search.svg" alt="Ícone de pesquisa" width={18} height={18} />

			<span title="Aperte a tecla / para pesquisar">/</span>
		</SearchBarWrapper>
	);
}
