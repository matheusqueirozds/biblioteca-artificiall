// components/Header/IndexHeaderStyles.js
import styled from "styled-components";

export const IndexHeaderContainer = styled.header`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #fff;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavLink = styled.a`
	color: ${({ theme }) => theme.headerBackground};
	margin-left: 1.5rem;
	text-decoration: none;
	display: flex;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		text-decoration: underline;
		transform: translateY(-3px);
	}
`;

export const Icon = styled.img`
	width: 24px;
	height: 24px;
	margin-right: 5px;
	fill: ${({ theme }) => theme.headerBackground};
`;

export const DarkModeToggle = styled.button`
	background-color: transparent;
	border: none;
	color: #e21;
	cursor: pointer;
`;