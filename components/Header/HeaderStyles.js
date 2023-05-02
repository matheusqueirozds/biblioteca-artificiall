import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${({ theme }) => theme.headerBackground};
	color: ${({ theme }) => theme.headerText};
`;

export const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.headerText};
`;

export const SearchBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	border: 1px solid #dfe1e5;
	background-color: #fff;
	transition: all 0.3s;
	border-radius: 24px;

	&:hover,
	&:focus {
		box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
		border-color: rgba(223, 225, 229, 0);
	}
`;

export const SearchInput = styled.input`
	font-size: inherit;
	border: none;
	border-radius: 5px;
	padding-left: calc(157px + 1rem);
	height: 40px;
	width: 100%;
	outline: none;
	background-color: none;
	border-radius: 24px;
`;

export const AdvancedSearch = styled.div`
	position: absolute;

	select {
		appearance: none;
		cursor: pointer;
		font-size: 14px;
		border: none;
		background-color: #f3f3f3;
		padding: 0.5rem 1rem;
		padding-right: 1.5rem;
		height: 40px;
		border-radius: 24px 0 0 24px;
		outline: none;
	}

	::after {
		position: absolute;
		display: inline-block;
		content: "";
		background-image: url("/bxs-down-arrow.svg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		width: 10px;
		height: 10px;
		top: 15.5px;
		right: 8px;
		cursor: pointer;
		pointer-events: none;
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavItem = styled.a`
	margin-right: 1rem;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.headerText};
	cursor: pointer;
`;

export const DarkModeToggle = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.headerText};
	cursor: pointer;
`;

export const SearchIcon = styled.img`
	position: absolute;
	right: 1rem;
	width: 20px;
	height: 20px;
	cursor: pointer;
`;
