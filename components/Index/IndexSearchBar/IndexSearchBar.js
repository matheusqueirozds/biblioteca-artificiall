import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
	IndexAdvancedSearch,
	IndexSearchBarWrapper,
	IndexSearchInput,
} from "./IndexSearchBarStyles";

export default function IndexSearchBar({
	handleSearchInput,
	handleKeyPress,
	advancedSearchSelectRef,
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
		<IndexSearchBarWrapper>
			{/* Campo de pesquisa */}
			<IndexSearchInput
				ref={searchInputRef}
				type="text"
				title="Pesquisar"
				aria-label="Campo de pesquisa"
				onChange={handleSearchInput}
				onKeyPress={handleKeyPress}
			/>

			{/* Seletor de tipo de pesquisa */}
			<IndexAdvancedSearch htmlFor="advanced-search-select">
				<select
					ref={advancedSearchSelectRef}
					id="advanced-search-select"
					name="advanced-search-select"
					aria-label="Selecione o tipo de pesquisa"
					defaultValue="midjourney"
				>
					<option value="midjourney">Midjourney</option>
					<option value="chatgpt">ChatGPT</option>
				</select>
			</IndexAdvancedSearch>

			{/* Ícone de pesquisa */}
			<Image src="/search.svg" alt="Ícone de pesquisa" width={18} height={18} />

			<span title="Aperte a tecla / para pesquisar">/</span>
		</IndexSearchBarWrapper>
	);
}
