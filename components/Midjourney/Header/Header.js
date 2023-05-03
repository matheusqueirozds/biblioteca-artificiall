import React from "react";
import {
	HeaderContainer,
	Logo,
	SearchBar,
	SearchInput,
	AdvancedSearch,
	NavMenu,
	NavItem,
	DarkModeToggle,
	HamburgerMenu,
	HamburgerCheckbox,
	HamburgerSpan,
} from "./HeaderStyles";
import { useSearch } from "@/SearchContext";

export default function Header({ toggleTheme, onSearch, onResetCategory }) {
	const { searchTerm, handleSearch } = useSearch();

	const handleInputChange = (e) => {
		handleSearch(e.target.value);
		if (e.target.value === "") {
			onResetCategory();
		} else {
			onSearch(e.target.value);
		}
	};

	return (
		<HeaderContainer>
			<Logo>Biblioteca Artificiall</Logo>
			<SearchBar>
				<SearchInput
					type="text"
					placeholder="Escreva alguma palavra (em inglês)..."
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
			</SearchBar>

			<NavMenu>
				<NavItem href="/midjourney">Midjourney</NavItem>
				<NavItem href="/chatgpt">ChatGPT</NavItem>
			</NavMenu>
			<DarkModeToggle onClick={toggleTheme}>Modo Escuro</DarkModeToggle>
		</HeaderContainer>
	);
}
