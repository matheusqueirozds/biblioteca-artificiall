import React from "react";
import {
	HeaderContainer,
	NavMenu,
	DarkModeToggle,
	RightContainer,
	LeftContainer,
	HeaderWrapper,
} from "./HeaderStyles";
import { useSearch } from "@/SearchContext";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./HeaderSearchBar";

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
					<SearchBar
						searchTerm={searchTerm}
						handleInputChange={handleInputChange}
					/>
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
								title="Ativar o modo escuro (em breve)"
							/>
						</DarkModeToggle>
					</NavMenu>
				</RightContainer>
			</HeaderWrapper>
		</HeaderContainer>
	);
}
