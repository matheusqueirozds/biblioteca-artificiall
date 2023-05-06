import styled from "styled-components";

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

export const SearchIcon = styled.img`
	position: absolute;
	left: 7.5rem;
	width: 18px;
	height: 18px;
`;
