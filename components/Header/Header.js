import React, { useState } from "react";
import {
	HeaderContainer,
	Logo,
	SearchBar,
	SearchInput,
	AdvancedSearch,
	NavMenu,
	NavItem,
	DarkModeToggle,
} from "./HeaderStyles";

export default function Header({ toggleTheme, onSearch, onResetCategory }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		if (event.target.value === "") {
			onResetCategory();
		} else {
			onSearch(event.target.value);
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
					onChange={handleSearch}
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
				<NavItem href="/sobre-chatgpt">ChatGPT</NavItem>
			</NavMenu>
			<DarkModeToggle onClick={toggleTheme}>Modo Escuro</DarkModeToggle>
		</HeaderContainer>
	);
}
