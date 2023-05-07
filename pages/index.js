import React, { useRef, useCallback } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useSearch } from "@/SearchContext";
import { useRouter } from "next/router";
import IndexHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import Footer from "@/components/Global/GlobalFooter/GlobalFooter";
import data from "@/data/midjourney.json";
import IndexMain from "@/components/Index/IndexMain/IndexMain";

export default function Home({ theme, toggleTheme }) {
	// Utilizando o contexto de pesquisa
	const { searchTerm, handleSearch } = useSearch();

	// Utilizando o hook de roteamento
	const router = useRouter();

	// Utilizando useRef para acessar o elemento select
	const advancedSearchSelectRef = useRef();

	// Função para lidar com a entrada de pesquisa
	const handleSearchInput = useCallback(
		({ target: { value } }) => {
			handleSearch(value);
		},
		[handleSearch]
	);

	// Função para filtrar os prompts com base na palavra-chave
	const filterPrompts = useCallback((keyword) => {
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
	}, []);

	// Função para lidar com o clique do botão de pesquisa
	const handleButtonClick = useCallback(() => {
		if (searchTerm) {
			filterPrompts(searchTerm);
			const selectedOption = advancedSearchSelectRef.current.value;

			if (selectedOption === "midjourney") {
				router.push("/midjourney");
			} else if (selectedOption === "chatgpt") {
				router.push("/chatgpt");
			}
		}
	}, [searchTerm, router, filterPrompts]);

	// Função para lidar com a tecla Enter na entrada de pesquisa
	const handleKeyPress = useCallback(
		(e) => {
			if (e.key === "Enter") {
				handleButtonClick();
			}
		},
		[handleButtonClick]
	);

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>
					Biblioteca Artificiall | Central de ideias para o Midjourney
				</title>

				{/* SEO meta tags  */}
				<meta
					name="description"
					content="Encontre prompts criativos e inspiradores para o Midjourney."
				/>
				<meta
					name="keywords"
					content="prompts, escrita, Midjourney, criativo, inspiração"
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://biblioteca-artificiall.vercel.app/"
				/>
				<meta property="og:title" content="Biblioteca Artificiall" />
				<meta
					property="og:description"
					content="Encontre prompts criativos e inspiradores para o Midjourney."
				/>
				<meta property="og:image" content="/logo-head.webp" />
				<meta
					property="og:url"
					content="https://biblioteca-artificiall.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="pt_BR" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Biblioteca Artificiall" />
				<meta
					name="twitter:description"
					content="Encontre prompts criativos e inspiradores para o Midjourney."
				/>
				<meta name="twitter:image" content="/logo-head.webp" />
				{/* Fim das SEO meta tags */}
				<link rel="icon" href="./favicon.ico" type="image/x-icon" />
			</Head>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>
			<IndexMain
				handleSearchInput={handleSearchInput}
				handleKeyPress={handleKeyPress}
				advancedSearchSelectRef={advancedSearchSelectRef}
				handleButtonClick={handleButtonClick}
			/>
			<Footer />
		</>
	);
}
Home.noLayout = true;
