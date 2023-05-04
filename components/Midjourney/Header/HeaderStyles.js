import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	background-color: #fafafa;
	color: #000;
	border-bottom: 1px solid #dadce0;

	div {
		display: flex;
	}
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
`;

export const Logo = styled.img`
	width: 64px;
	border-radius: 50%;
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
	left: 0;

	select {
		appearance: none;
		cursor: pointer;
		font-size: 14px;
		border: none;
		background-color: #f2f2f2;
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

export const RightContainer = styled(LeftContainer)`
	color: #000;
`;

export const NavMenu = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavItem = styled.a`
	margin-right: 1rem;
	background-color: transparent;
	border: none;
	color: #000;
	cursor: pointer;
`;

export const DarkModeToggle = styled.button`
	background-color: transparent;
	border: none;
	color: #000;
	cursor: pointer;
`;

export const SearchIcon = styled.img`
	position: absolute;
	left: 7.5rem;
	width: 18px;
	height: 18px;
`;
