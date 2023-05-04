import Footer from "@/components/Global/Main/Footer/Footer";
import IndexHeader from "@/components/Home/Header/IndexHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import AdditionalInfo, {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/Main/AdditionalInfo";

export default function privacidade({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<AdditionalInfo titulo="Política de Privacidade" />
				<AdditionalInfo
					subtitulo="1. Introdução"
					paragrafo={
						<>
							A Biblioteca Artificiall preza pela privacidade e proteção dos
							dados pessoais dos usuários. Esta Política de Privacidade descreve
							quais informações coletamos, como as utilizamos e quais são seus
							direitos em relação a elas. Ao utilizar nossa plataforma, você
							concorda com a coleta e uso de informações conforme descrito nesta
							política.
						</>
					}
				/>
				<AdditionalInfo
					subtitulo="2. Coleta de informações"
					paragrafo={
						<ul>
							Coletamos as seguintes informações dos usuários:
							<li>- Informações de contato, como nome e endereço de e-mail;</li>
							<li>
								- Dados de navegação, como páginas visitadas, tempo gasto no
								site e informações do dispositivo;
							</li>
							<li>
								- Conteúdo que você envia à plataforma, como prompts e
								comentários.
							</li>
						</ul>
					}
				/>

				<AdditionalInfo
					subtitulo="3. Uso de informações"
					paragrafo={
						<ul>
							Utilizamos as informações coletadas para:
							<li>
								- Fornecer e melhorar a funcionalidade e a experiência do
								usuário na plataforma;
							</li>
							<li>
								- Comunicar-se com você sobre atualizações, novidades e suporte;
							</li>
							<li>
								- Analisar e monitorar o uso da plataforma e identificar
								tendências;
							</li>
							<li>- Cumprir com obrigações legais e regulatórias.</li>
						</ul>
					}
				/>

				<AdditionalInfo
					subtitulo="4. Compartilhamento de informações"
					paragrafo={
						<ul>
							Não compartilhamos suas informações pessoais com terceiros, exceto
							nos seguintes casos:
							<li>
								- Quando necessário para cumprir uma obrigação legal ou
								regulatória;
							</li>
							<li>- Com sua permissão expressa.</li>
						</ul>
					}
				/>

				<AdditionalInfo
					subtitulo="5. Segurança"
					paragrafo={
						<>
							Tomamos medidas de segurança adequadas para proteger suas
							informações contra acesso, uso ou divulgação não autorizados. No
							entanto, nenhuma plataforma é completamente segura e não podemos
							garantir a segurança absoluta das informações.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="6. Cookies"
					paragrafo={
						<>
							Utilizamos cookies para melhorar a funcionalidade do site e
							fornecer uma experiência personalizada. Você pode desativar os
							cookies em seu navegador, mas isso pode afetar a funcionalidade do
							site.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="7. Seus direitos"
					paragrafo={
						<>
							Você tem o direito de acessar, retificar ou excluir suas
							informações pessoais. Para exercer seus direitos, entre em contato
							conosco através do e-mail fornecido no site.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="8. Alterações nesta política
					"
					paragrafo={
						<>
							Podemos atualizar nossa Política de Privacidade periodicamente. As
							alterações entrarão em vigor assim que publicadas no site.
						</>
					}
				/>

				<BackToHome />
			</AdditionalInfoContainer>

			<Footer />
		</>
	);
}

privacidade.noLayout = true;
