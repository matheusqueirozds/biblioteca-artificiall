import GlobalFooter from "@/components/Global/GlobalFooter/GlobalFooter";
import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import AdditionalInfo, {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/GlobalMain/AdditionalInfo";

export default function sobre({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<GlobalHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<AdditionalInfo
					titulo="Sobre"
					paragrafo={
						<>
							A Biblioteca Artificiall é uma plataforma inovadora que visa
							facilitar e otimizar o uso de ferramentas de inteligência
							artificial, como ChatGPT e Midjourney. Reunimos uma extensa
							coleção de prompts para diversos propósitos, permitindo que nossos
							usuários encontrem rapidamente o que precisam para impulsionar
							seus projetos de IA. Nossa missão é fomentar a criatividade e
							apoiar o avanço das tecnologias de inteligência artificial,
							conectando pessoas e ideias em uma comunidade colaborativa e
							dinâmica.
						</>
					}
				/>
				<BackToHome />
			</AdditionalInfoContainer>

			<GlobalFooter />
		</>
	);
}

sobre.noLayout = true;
