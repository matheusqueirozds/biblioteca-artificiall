import React from "react";
import {
	FooterContainer,
	FooterCopy,
	FooterList,
	FooterWrapper,
	LeftLinks,
	RightLinks,
} from "./FooterStyles";
import Link from "next/link";

// Componente do rodapé
const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<LeftLinks>
					{/* Links à esquerda no rodapé */}
					<FooterList>
						<li>
							<Link href="/sobre">
								<span>Sobre</span>
							</Link>
						</li>
						<li>
							<Link href="/como-funciona">
								<span>Como funciona a plataforma</span>
							</Link>
						</li>
					</FooterList>
				</LeftLinks>
				<RightLinks>
					{/* Links à direita no rodapé */}
					<FooterList>
						<li>
							<Link href="/privacidade">
								<span>Privacidade</span>
							</Link>
						</li>
						<li>
							<Link href="/termos">
								<span>Termos</span>
							</Link>
						</li>
						<li>
							<Link href="/configuracoes">
								<span>Configurações</span>
							</Link>
						</li>
					</FooterList>
				</RightLinks>
			</FooterContainer>

			<FooterContainer>
				<FooterCopy>
					© 2023 <Link href="/">Biblioteca Artificiall</Link>. Todos os direitos
					reservados. Desenvolvido por{" "}
					<Link
						href="https://matheusqueirozds.dev"
						target="_blank"
						rel="noopener noreferrer"
						passHref
					>
						Matheus Queiroz.
					</Link>
				</FooterCopy>
			</FooterContainer>
		</FooterWrapper>
	);
};

export default Footer;
