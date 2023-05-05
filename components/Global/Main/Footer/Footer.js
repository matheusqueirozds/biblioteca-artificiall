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

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<LeftLinks>
					<FooterList>
						<Link href="/sobre">
							<li>Sobre</li>
						</Link>
						<Link href="/como-funciona">
							<li>Como funciona a plataforma</li>
						</Link>
					</FooterList>
				</LeftLinks>
				<RightLinks>
					<FooterList>
						<Link href="/privacidade">
							<li>Privacidade</li>
						</Link>
						<Link href="/termos">
							<li>Termos</li>
						</Link>
						<Link href="/configuracoes">
							<li>Configurações</li>
						</Link>
					</FooterList>
				</RightLinks>
			</FooterContainer>

			<FooterContainer>
				<FooterCopy>
					© 2023 <Link href="/">Biblioteca Artificiall</Link>. Todos os direitos
					reservados. Desenvolvido por{" "}
					<Link href="https://matheusqueirozds.dev" target="_blank">
						Matheus Queiroz.
					</Link>
				</FooterCopy>
			</FooterContainer>
		</FooterWrapper>
	);
};

export default Footer;
