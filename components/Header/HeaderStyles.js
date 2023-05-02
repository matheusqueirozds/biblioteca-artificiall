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
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	padding: 1rem;
`;

export const SearchInput = styled.input`
	position: relative;
	font-size: inherit;
	border: 1px solid #dfe1e5;
	border-radius: 5px;
	background-color: #fff;
	padding-left: calc(142px + 56px);
	height: 40px;
	width: 100%;
`;

export const AdvancedSearch = styled.div`
	position: absolute;

	select {
		appearance: none;
		cursor: pointer;
		font-size: 14px;
		border: 1px solid #dfe1e5;
		border-radius: 3px 0 0 3px;
		background-color: #f3f3f3;
		padding: 0.5rem;
		padding-right: 1.5rem;
		height: 40px;
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
		top: 13px;
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
	position: relative;
	right: 30px;
	width: 20px;
	height: 20px;
	cursor: pointer;
`;
