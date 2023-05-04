import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useSearch } from "@/SearchContext";
import { useRouter } from "next/router";
import {
	AdvancedSearch,
	SearchBar,
	SearchIcon,
	SearchInput,
} from "@/components/Midjourney/Header/HeaderStyles";
import {
	Button,
	ButtonsContainer,
	HomeContainer,
	Logo,
} from "@/styles/HomeStyles";
import IndexHeader from "@/components/Home/Header/IndexHeader";
import data from "@/components/Midjourney/midjourney.json";
import Link from "next/link";
import Footer from "@/components/Global/Main/Footer/Footer";

export default function Home({ theme, toggleTheme }) {
	const { searchTerm, handleSearch } = useSearch();
	const router = useRouter();

	const handleSearchInput = (e) => {
		handleSearch(e.target.value);
	};

	const filterPrompts = (keyword) => {
		if (!keyword) return;

		const prompts = [];

		data.midjourney.categories.forEach((category) => {
			prompts.push(...category.prompts);
		});

		const filtered = prompts.filter((prompt) => {
			const promptText = prompt.prompt_text || "";
			const imageAlt = prompt.image_alt || "";

			return (
				promptText.toLowerCase().includes(keyword.toLowerCase()) ||
				imageAlt.toLowerCase().includes(keyword.toLowerCase())
			);
		});
	};

	const handleButtonClick = () => {
		if (searchTerm) {
			filterPrompts(searchTerm);
			const advancedSearchSelect = document.getElementById(
				"advanced-search-select"
			);
			const selectedOption = advancedSearchSelect.value;

			if (selectedOption === "midjourney") {
				router.push("/midjourney");
			} else if (selectedOption === "chatgpt") {
				router.push("/chatgpt");
			}
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleButtonClick();
		}
	};

	return (
		<>
			<Head>
				<title>Biblioteca Artificiall</title>
				<meta name="description" content="Página inicial do site" />
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>
			<HomeContainer>
				<Logo src="./logo.webp" alt="Biblioteca Artificiall" />
				<SearchBar style={{ marginBottom: "30px" }}>
					<SearchInput
						type="text"
						title="Pesquisar"
						style={{ paddingLeft: "calc(101px + 3.3rem)" }}
						onChange={handleSearchInput}
						onKeyPress={handleKeyPress}
					/>

					<AdvancedSearch htmlFor="advanced-search-select">
						<select id="advanced-search-select" name="advanced-search-select">
							<option value="midjourney" selected>
								Midjourney
							</option>
							<option value="chatgpt">ChatGPT</option>
						</select>
					</AdvancedSearch>

					<SearchIcon src="./search.svg" alt="Ícone de pesquisa" />
				</SearchBar>

				<ButtonsContainer>
					<Button onClick={handleButtonClick}>Pesquisar prompt</Button>
					<Link href="/ferramentas-uteis">
						<Button>Ferramentas úteis</Button>
					</Link>
				</ButtonsContainer>
			</HomeContainer>
			<Footer />
		</>
	);
}

Home.noLayout = true;
