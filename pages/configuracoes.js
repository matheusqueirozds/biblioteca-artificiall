import { Container } from "@/components/Global/GlobalMain/AdditionalInfo";
import {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/GlobalMain/AdditionalInfo";
import Footer from "@/components/Global/GlobalFooter/GlobalFooter";
import IndexHeader from "@/components/Global/GlobalHeader/GlobalHeader";
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
