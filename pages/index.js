// index.js
import React from "react";
import Head from "next/head";
import { HomeContainer, Logo, RadioOptions } from "../styles/HomeStyles";
import IndexHeader from "@/components/Header/IndexHeader";
import IndexFooter from "@/components/Footer/IndexFooter";
import {
	AdvancedSearch,
	SearchBar,
	SearchIcon,
	SearchInput,
} from "@/components/Header/HeaderStyles";
import data from "../data.json";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

export default function Home({ theme, toggleTheme }) {
	const categories = data.categories.map((category) => (
		<option key={category.name} value={category.name}>
			{category.name}
		</option>
	));

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
				<SearchBar>
					<SearchInput type="text" placeholder="Pesquisar prompt..." />
					<AdvancedSearch>
						<select id="" name="">
							<option value="" selected>
								Selecione uma categoria
							</option>
							{categories}
						</select>
					</AdvancedSearch>

					<SearchIcon src="./search.svg" alt="Ícone de pesquisa" />
				</SearchBar>

				<RadioOptions>
					<label>
						<input
							type="radio"
							name="promptType"
							value="midjourney"
							defaultChecked
						/>
						Prompts do Midjourney
					</label>
					<label>
						<input type="radio" name="promptType" value="chatgpt" />
						Prompts do ChatGPT
					</label>
				</RadioOptions>
			</HomeContainer>
			<IndexFooter />
		</>
	);
}

Home.noLayout = true;
