// index.js
import React from "react";
import Head from "next/head";
import {
	Button,
	ButtonsContainer,
	HomeContainer,
	Logo,
	RadioOptions,
} from "../styles/HomeStyles";
import IndexHeader from "@/components/Header/IndexHeader";
import IndexFooter from "@/components/Footer/IndexFooter";
import {
	AdvancedSearch,
	SearchBar,
	SearchIcon,
	SearchInput,
} from "@/components/Header/HeaderStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

export default function Home({ theme, toggleTheme }) {
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
						placeholder="Pesquisar prompt..."
						style={{ paddingLeft: "calc(101px + 1rem)" }}
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
					<Button>Pesquisar prompt</Button>
					<Button>Ferramentas úteis</Button>
				</ButtonsContainer>
			</HomeContainer>
			<IndexFooter />
		</>
	);
}

Home.noLayout = true;
