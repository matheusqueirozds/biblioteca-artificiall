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
							<Link href="/sobre">Sobre</Link>
						</li>
						<li>
							<Link href="/como-funciona">Como funciona a plataforma</Link>
						</li>
					</FooterList>
				</LeftLinks>
				<RightLinks>
					{/* Links à direita no rodapé */}
					<FooterList>
						<li>
							<Link href="/privacidade">Privacidade</Link>
						</li>
						<li>
							<Link href="/termos">Termos</Link>
						</li>
						<li>
							<Link href="/configuracoes">Configurações</Link>
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
