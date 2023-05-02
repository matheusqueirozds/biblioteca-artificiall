import React from "react";
import {
	IndexFooterContainer,
	FooterLinkList,
	FooterLink,
	LeftLinks,
	RightLinks,
} from "./IndexFooterStyles";

const IndexFooter = () => {
	return (
		<IndexFooterContainer>
			<LeftLinks>
				<FooterLinkList>
					<FooterLink href="/sobre">Sobre</FooterLink>
					<FooterLink href="/como-funciona">
						Como funciona a pesquisa
					</FooterLink>
				</FooterLinkList>
			</LeftLinks>
			<RightLinks>
				<FooterLinkList>
					<FooterLink href="/privacidade">Privacidade</FooterLink>
					<FooterLink href="/termos">Termos</FooterLink>
					<FooterLink href="/configuracoes">Configurações</FooterLink>
				</FooterLinkList>
			</RightLinks>
		</IndexFooterContainer>
	);
};

export default IndexFooter;
