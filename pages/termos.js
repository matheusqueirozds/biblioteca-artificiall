import Footer from "@/components/Global/GlobalFooter/GlobalFooter";
import IndexHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import { darkTheme, lightTheme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import AdditionalInfo, {
	AdditionalInfoContainer,
	BackToHome,
} from "@/components/Global/GlobalMain/AdditionalInfo";

export default function termos({ theme, toggleTheme }) {
	return (
		<>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<IndexHeader toggleTheme={toggleTheme} />
			</ThemeProvider>

			<AdditionalInfoContainer>
				<AdditionalInfo titulo="Termos e Condições de Uso" />
				<AdditionalInfo
					subtitulo="1. Aceitação dos termos"
					paragrafo={
						<>
							Ao utilizar a Biblioteca Artificiall, você concorda em cumprir
							estes Termos e Condições de Uso. Caso não concorde, não utilize a
							plataforma.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="2. Uso da plataforma"
					paragrafo={
						<>
							Você concorda em usar a plataforma apenas para fins legais e não
							violar os direitos de propriedade intelectual ou de privacidade de
							terceiros. Você não pode utilizar a plataforma para fins
							comerciais sem nossa autorização expressa.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="3. Conteúdo do usuário"
					paragrafo={
						<>
							Você é responsável pelo conteúdo que envia à plataforma,
							garantindo que possui os direitos necessários para compartilhá-lo.
							Ao enviar conteúdo, você nos concede uma licença não exclusiva,
							gratuita e mundial para usar, copiar, distribuir e exibir esse
							conteúdo na plataforma.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="4. Conduta do usuário"
					paragrafo={
						<>
							Os usuários devem se comportar de maneira respeitosa e ética, não
							praticando atividades como assédio, discriminação ou difamação.
							Reservamo-nos o direito de suspender ou encerrar o acesso de
							qualquer usuário que viole estes termos.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="5. Limitação de responsabilidade"
					paragrafo={
						<>
							Não nos responsabilizamos por qualquer dano ou prejuízo resultante
							do uso ou incapacidade de usar a plataforma, incluindo, mas não se
							limitando a, danos diretos, indiretos, incidentais ou
							consequentes. A "Biblioteca Artificiall" é fornecida "como está",
							sem garantias de qualquer tipo, expressas ou implícitas.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="6. Direitos de propriedade intelectual"
					paragrafo={
						<>
							Os direitos autorais, marcas registradas e outros direitos de
							propriedade intelectual presentes na plataforma são de propriedade
							da "Biblioteca Artificiall" ou de terceiros que nos concederam
							autorização para usá-los. Qualquer uso não autorizado desses
							direitos é proibido.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="7. Indenização"
					paragrafo={
						<>
							Você concorda em indenizar e isentar a "Biblioteca Artificiall" e
							seus diretores, funcionários e parceiros de qualquer reclamação,
							dano, responsabilidade, perda ou despesa (incluindo honorários
							advocatícios) decorrente do seu uso da plataforma, violação destes
							termos ou violação dos direitos de terceiros.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="8. Alterações nos termos"
					paragrafo={
						<>
							Reservamo-nos o direito de alterar estes Termos e Condições de Uso
							a qualquer momento. As alterações entrarão em vigor assim que
							publicadas no site. Ao continuar a usar a plataforma após a
							publicação das alterações, você aceita os termos atualizados.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="9. Legislação aplicável e jurisdição"
					paragrafo={
						<>
							Estes Termos e Condições de Uso são regidos pelas leis do Brasil.
							Qualquer disputa ou controvérsia decorrente do uso da plataforma
							será resolvida pelos tribunais competentes no Brasil.
						</>
					}
				/>

				<AdditionalInfo
					subtitulo="10. Contato"
					paragrafo={
						<>
							Se você tiver dúvidas ou preocupações sobre estes Termos e
							Condições de Uso, entre em contato conosco através do e-mail
							fornecido no site.
						</>
					}
				/>

				<AdditionalInfo
					paragrafo={
						<>
							Ao utilizar a Biblioteca Artificiall, você concorda em cumprir
							estes Termos e Condições de Uso. Por favor, leia-os cuidadosamente
							antes de usar a plataforma.
						</>
					}
				/>

				<BackToHome />
			</AdditionalInfoContainer>

			<Footer />
		</>
	);
}

termos.noLayout = true;
