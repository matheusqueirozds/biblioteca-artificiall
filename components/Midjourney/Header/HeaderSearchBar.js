import React from "react";
import Image from "next/image";
import {
	AdvancedSearch,
	SearchBarWrapper,
	SearchInput,
} from "@/components/Midjourney/Header/HeaderStyles";

export default function HeaderSearchBar({ searchTerm, handleInputChange }) {
	return (
		<SearchBarWrapper>
			<SearchInput
				type="text"
				placeholder="Pesquisar prompt"
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<AdvancedSearch>
				<select id="searchType" name="searchType">
					<option value="advanced" selected>
						Todas as categorias
					</option>
					<option value="simple">Categoria atual</option>
				</select>
			</AdvancedSearch>

			<Image
				src="/search.svg"
				alt="Ícone de pesquisa"
				width={18}
				height={18}
				style={{ position: "absolute", left: "11rem" }}
			/>
		</SearchBarWrapper>
	);
}
