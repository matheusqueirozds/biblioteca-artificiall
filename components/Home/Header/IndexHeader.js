import React from "react";
import {
	IndexHeaderContainer,
	Nav,
	NavLink,
	Icon,
	DarkModeToggle,
} from "./IndexHeaderStyles";

const IndexHeader = ({ toggleTheme }) => {
	return (
		<IndexHeaderContainer>
			<Nav>
				<NavLink
					href="https://www.instagram.com/artificiall.ai"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon src="./instagram-icon.svg" alt="Ícone do Instagram" />
					Instagram
				</NavLink>
				<NavLink
					href="https://discord.gg/84AfKn4a"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon src="./discord-icon.svg" alt="Ícone do Discord" />
					Discord
				</NavLink>
			</Nav>
			<DarkModeToggle onClick={toggleTheme}>Modo Escuro</DarkModeToggle>
		</IndexHeaderContainer>
	);
};

export default IndexHeader;
