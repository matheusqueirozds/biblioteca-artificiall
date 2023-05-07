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

	img {
		margin-right: 5px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavLink = styled.a`
	font-size: 13px;
	color: #000000;
	margin-left: 1.5rem;
	text-decoration: none;
	display: flex;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		transform: translateY(-3px);
	}
`;

export const DarkModeToggle = styled.button`
	background-color: transparent;
	border: none;
	color: #e21;
	cursor: pointer;
`;
