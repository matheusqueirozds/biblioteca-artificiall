import {
	AdditionalInfoContainer,
	BackToHome,
	Container,
	ContainerWrapper,
} from "@/components/Global/Main/AdditionalInfo";
import Footer from "@/components/Global/Main/Footer/Footer";
import IndexHeader from "@/components/Home/Header/IndexHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function sobre({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<Container />
				<BackToHome />
			</AdditionalInfoContainer>

			<Footer />
		</>
	);
}

sobre.noLayout = true;
