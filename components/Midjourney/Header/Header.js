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
import { useRouter } from "next/router";

export default function Header({ toggleTheme, onSearch, onResetCategory }) {
	const { searchTerm, handleSearch } = useSearch();
	const router = useRouter();

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
							title="Página inicial"
						/>
					</Link>
					{router.pathname !== "/criar-prompt" && (
						<SearchBar
							searchTerm={searchTerm}
							handleInputChange={handleInputChange}
						/>
					)}
				</LeftContainer>

				<RightContainer>
					<NavMenu>
						<Link href="/">Início</Link>
						<Link
							href="/criar-prompt"
							className={router.pathname === "/criar-prompt" ? "active" : ""}
						>
							Criar prompt
						</Link>
						<Link
							href="/midjourney"
							className={router.pathname === "/midjourney" ? "active" : ""}
						>
							Midjourney
						</Link>
						<Link
							href="/chatgpt"
							className={router.pathname === "/chatgpt" ? "active" : ""}
						>
							ChatGPT
						</Link>
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
