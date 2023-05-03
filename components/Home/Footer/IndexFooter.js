import React from "react";
import Link from "next/link";
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
					<Link href="/sobre">
						<FooterLink>Sobre</FooterLink>
					</Link>
					<Link href="/como-funciona">
						<FooterLink>Como funciona a pesquisa</FooterLink>
					</Link>
				</FooterLinkList>
			</LeftLinks>
			<RightLinks>
				<FooterLinkList>
					<Link href="/privacidade">
						<FooterLink>Privacidade</FooterLink>
					</Link>
					<Link href="/termos">
						<FooterLink>Termos</FooterLink>
					</Link>
					<Link href="/configuracoes">
						<FooterLink>Configurações</FooterLink>
					</Link>
				</FooterLinkList>
			</RightLinks>
		</IndexFooterContainer>
	);
};

export default IndexFooter;
