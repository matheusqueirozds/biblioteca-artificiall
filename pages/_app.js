import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalStyles from "../styles/GlobalStyles.js";
import IndexHeader from "@/components/Header/IndexHeader";

export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState("light");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	const resetCategory = () => {
		setSearchTerm("");
	};

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			{!Component.noLayout ? (
				<Header
					toggleTheme={toggleTheme}
					onSearch={handleSearch}
					onResetCategory={resetCategory}
				/>
			) : (
				<IndexHeader toggleTheme={toggleTheme} />
			)}
			<Component
				{...pageProps}
				searchTerm={searchTerm}
				theme={theme}
				toggleTheme={toggleTheme}
			/>
			{!Component.noLayout && <Footer />}
		</ThemeProvider>
	);
}
