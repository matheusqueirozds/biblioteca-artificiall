import React from "react";
import Image from "next/image";
import {
	IndexHeaderContainer,
	Nav,
	NavLink,
	DarkModeToggle,
} from "./IndexHeaderStyles";

// Componente para o cabeçalho da página inicial
const IndexHeader = ({ toggleTheme }) => {
	return (
		<IndexHeaderContainer>
			<Nav>
				{/* Link para o Instagram */}
				<NavLink
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
				</NavLink>
				{/* Link para o Discord */}
				<NavLink
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
				</NavLink>
			</Nav>
			{/* Botão para alternar o tema entre claro e escuro */}
			<DarkModeToggle onClick={toggleTheme}>Modo Escuro</DarkModeToggle>
		</IndexHeaderContainer>
	);
};

export default IndexHeader;
