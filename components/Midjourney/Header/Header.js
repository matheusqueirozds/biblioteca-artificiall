import React from "react";
import {
	HeaderContainer,
	SearchBar,
	SearchInput,
	AdvancedSearch,
	NavMenu,
	DarkModeToggle,
	RightContainer,
	LeftContainer,
	SearchIcon,
	HeaderWrapper,
} from "./HeaderStyles";
import { useSearch } from "@/SearchContext";
import Link from "next/link";
import Image from "next/image";

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
			<HeaderWrapper>
				<LeftContainer>
					<Link href="/" style={{ textDecoration: "none", opacity: "1" }}>
						<Image
							src="/logo.webp"
							alt="Biblioteca Artificiall"
							width={64}
							height={64}
						/>
					</Link>
					<SearchBar>
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
					</SearchBar>
				</LeftContainer>

				<RightContainer>
					<NavMenu>
						<Link href="/">Início</Link>
						<Link href="/midjourney">Midjourney</Link>
						<Link href="/chatgpt">ChatGPT</Link>
						<DarkModeToggle
							onClick={toggleTheme}
							aria-label="Alternar modo escuro"
						>
							<Image
								src="/modo-escuro.svg"
								width={20}
								height={20}
								alt="Ativar o modo escuro"
								title="Ativar o modo escuro"
							/>
						</DarkModeToggle>
					</NavMenu>
				</RightContainer>
			</HeaderWrapper>
		</HeaderContainer>
	);
}
