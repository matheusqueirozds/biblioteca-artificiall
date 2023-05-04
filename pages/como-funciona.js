import Footer from "@/components/Global/Main/Footer/Footer";
import IndexHeader from "@/components/Home/Header/IndexHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import AdditionalInfo, {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/Main/AdditionalInfo";

export default function comoFunciona({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<AdditionalInfo
					titulo="Como funciona a plataforma"
					paragrafo={
						<>
							A Biblioteca Artificiall oferece uma experiência
							intuitiva e fácil de usar para seus usuários. Basta acessar o site
							para começar a explorar nossa vasta coleção de prompts. Você pode
							pesquisar por categorias, palavras-chave ou até mesmo utilizar
							nossa ferramenta de busca inteligente para encontrar o prompt
							perfeito para suas necessidades. Além disso, você pode contribuir
							com seus próprios prompts e interagir com outros membros da
							comunidade, compartilhando ideias, sugestões e conhecimentos.
						</>
					}
				/>
				<BackToHome />
			</AdditionalInfoContainer>

			<Footer />
		</>
	);
}

comoFunciona.noLayout = true;
