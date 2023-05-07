import React from "react";
import {
	IndexButton,
	IndexButtonsContainer,
	IndexContainer,
} from "./IndexMainStyles";
import Image from "next/image";
import Link from "next/link";
import { AdvancedSearch, SearchBar, SearchInput } from "../IndexSearchBar/IndexSearchBarStyles";

export default function IndexMain({
	handleSearchInput,
	handleKeyPress,
	advancedSearchSelectRef,
	handleButtonClick,
}) {
	return (
		<IndexContainer>
			<Image
				src="/logo.webp"
				alt="Biblioteca Artificiall"
				width={200}
				height={200}
			/>
			<SearchBar style={{ marginBottom: "30px" }}>
				<SearchInput
					type="text"
					title="Pesquisar"
					aria-label="Campo de pesquisa"
					style={{ paddingLeft: "calc(101px + 3.3rem)" }}
					onChange={handleSearchInput}
					onKeyPress={handleKeyPress}
				/>
				<AdvancedSearch htmlFor="advanced-search-select">
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
				</AdvancedSearch>

				<Image
					src="/search.svg"
					alt="Ícone de pesquisa"
					width={18}
					height={18}
					style={{ position: "absolute", left: "7.5rem" }}
				/>
			</SearchBar>

			<IndexButtonsContainer>
				<IndexButton onClick={handleButtonClick} aria-label="Pesquisar prompt">
					Pesquisar prompt
				</IndexButton>
				<Link href="/ferramentas-uteis">
					<IndexButton aria-label="Ferramentas úteis">
						Ferramentas úteis
					</IndexButton>
				</Link>
			</IndexButtonsContainer>
		</IndexContainer>
	);
}
