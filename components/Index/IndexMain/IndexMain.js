import React from "react";
import {
	IndexButton,
	IndexButtonsContainer,
	IndexContainer,
} from "./IndexMainStyles";
import Image from "next/image";
import Link from "next/link";
import {
	AdvancedSearch,
	SearchBar,
	SearchInput,
} from "../IndexSearchBar/IndexSearchBarStyles";
import IndexSearchBar from "../IndexSearchBar/IndexSearchBar";

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
			<IndexSearchBar
				handleSearchInput={handleSearchInput}
				handleKeyPress={handleKeyPress}
				advancedSearchSelectRef={advancedSearchSelectRef}
			/>

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
