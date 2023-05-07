import React from "react";
import Image from "next/image";
import {
	IndexHeaderContainer,
	Nav,
	DarkModeToggle,
} from "./GlobalHeaderStyles";
import Link from "next/link";

// Componente do cabeçalho da página inicial
export default function GlobalHeader({ toggleTheme }) {
	return (
		<IndexHeaderContainer>
			<Nav>
				{/* Link para o Instagram */}
				<Link
					href="https://www.instagram.com/artificiall.ai"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visite nosso Instagram"
				>
					<Image
						src="/instagram-icon.svg"
						alt="Ícone do Instagram"
						width={20}
						height={20}
					/>
					Instagram
				</Link>
				{/* Link para o Discord */}
				<Link
					href="https://discord.gg/84AfKn4a"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Participe do nosso Discord"
				>
					<Image
						src="/discord-icon.svg"
						alt="Ícone do Discord"
						width={20}
						height={20}
					/>
					Discord
				</Link>
			</Nav>
			{/* Botão para alternar o tema entre claro e escuro */}
			<DarkModeToggle onClick={toggleTheme} aria-label="Alternar modo escuro">
				<Image
					src="/modo-escuro.svg"
					width={18}
					height={18}
					alt="Ativar o modo escuro"
					title="Ativar o modo escuro"
				/>
			</DarkModeToggle>
		</IndexHeaderContainer>
	);
}
