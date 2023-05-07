import styled from "styled-components";

export const GlobalHeaderContainer = styled.header`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #fff;

	a {
		font-size: 13px;
		color: #5f6368;
		text-decoration: none;
		display: flex;
		align-items: center;
		transition: all 0.3s;
		padding: 15px;

		&:hover {
			transform: translateY(-3px);
		}
	}

	img {
		margin-right: 5px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const DarkModeToggle = styled.button`
	background-color: transparent;
	border: none;
	color: #5f6368;
	cursor: pointer;
`;
