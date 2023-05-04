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
	RightContainer,
	LeftContainer,
	SearchIcon,
} from "./HeaderStyles";
import { useSearch } from "@/SearchContext";
import Link from "next/link";

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
			<div>
				<LeftContainer>
					<Link href="/" style={{ textDecoration: "none", opacity: "1" }}>
						<Logo src="./logo-head.webp" alt="Biblioteca Artificiall" />
					</Link>
					<SearchBar>
						<SearchInput
							type="text"
							placeholder="Pesquisar prompt"
							value={searchTerm}
							onChange={handleInputChange}
							style={{ paddingLeft: "calc(165px + 2.5rem)" }}
						/>
						<AdvancedSearch>
							<select id="searchType" name="searchType">
								<option value="advanced" selected>
									Todas as categorias
								</option>
								<option value="simple">Categoria atual</option>
							</select>
						</AdvancedSearch>

						<SearchIcon
							src="./search.svg"
							alt="Ícone de pesquisa"
							style={{ left: "11rem" }}
						/>
					</SearchBar>
				</LeftContainer>

				<RightContainer>
					<NavMenu>
						<Link href="/">
							<NavItem>Página inicial</NavItem>
						</Link>
						<NavItem href="/midjourney">Midjourney</NavItem>
						<NavItem href="/chatgpt">ChatGPT</NavItem>
					</NavMenu>
					<DarkModeToggle onClick={toggleTheme}>Modo Escuro</DarkModeToggle>
				</RightContainer>
			</div>
		</HeaderContainer>
	);
}
