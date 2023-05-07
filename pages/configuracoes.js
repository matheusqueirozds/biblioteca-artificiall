import { Container } from "@/components/Global/GlobalMain/AdditionalInfo";
import {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/GlobalMain/AdditionalInfo";
import GlobalFooter from "@/components/Global/GlobalFooter/GlobalFooter";
import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function sobre({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<GlobalHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<Container />
				<BackToHome />
			</AdditionalInfoContainer>

			<GlobalFooter />
		</>
	);
}

sobre.noLayout = true;
