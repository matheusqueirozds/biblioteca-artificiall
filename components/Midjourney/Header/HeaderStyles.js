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
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		gap: 0;
	}

	@media screen and (max-width: 375px) {
		flex-direction: column-reverse;
	}
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media screen and (max-width: 1024px) {
		padding: 1rem 1rem 0 1rem;
	}

	@media screen and (max-width: 480px) {
		flex-direction: column;
		gap: 0;
		padding: 0;
	}

	@media screen and (max-width: 375px) {
		padding-bottom: 1rem;
	}
`;

export const Logo = styled.img`
	width: 64px;
	border-radius: 50%;
`;

export const SearchBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	border: 1px solid #dfe1e5;
	background-color: #fff;
	transition: all 0.3s;
	border-radius: 24px;

	&:hover,
	&:focus {
		box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
		border-color: rgba(223, 225, 229, 0);
	}

	@media screen and (max-width: 768px) {
		max-width: 560px;
	}

	@media screen and (max-width: 375px) {
		width: calc(375px - 2rem);
		max-width: 100%;
		border-radius: 12px;
	}
`;

export const SearchInput = styled.input`
	font-size: inherit;
	border: none;
	border-radius: 5px;
	padding-left: calc(165px + 2.5rem);
	height: 40px;
	width: 100%;
	outline: none;
	background-color: none;
	border-radius: 24px;
	width: 600px;

	@media screen and (max-width: 480px) {
		width: auto;
	}

	@media screen and (max-width: 375px) {
		height: 80px;
		padding-left: 1rem;
		padding-bottom: 2rem;

		::placeholder {
			position: absolute;
			top: 1rem;
		}
	}
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

	@media screen and (max-width: 375px) {
		top: 40px;
		width: 100%;

		select {
			width: 100%;
			border-radius: 0 0 12px 12px;
		}

		::after {
			right: 16px;
		}
	}
`;

export const RightContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;

	@media screen and (max-width: 1024px) {
		padding: 0.25rem 1rem 1rem;
	}

	@media screen and (max-width: 480px) {
		padding: 1rem;
	}

	@media screen and (max-width: 375px) {
		gap: 0;
		padding-top: 1rem;
		padding-bottom: 0;
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	align-items: center;
	gap: 30px;
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

	@media screen and (max-width: 375px) {
		top: 0.8rem;
		margin-left: 135px;
	}
`;
