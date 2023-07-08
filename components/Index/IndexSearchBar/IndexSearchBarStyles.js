import styled from "styled-components";

export const IndexSearchBarWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	border: 1px solid #dfe1e5;
	background-color: #fff;
	transition: all 0.3s;
	border-radius: 24px;
	margin-bottom: 1rem;

	&:hover,
	&:focus {
		box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
		border-color: rgba(223, 225, 229, 0);
	}

	span {
		font-family: monospace;
		background-color: inherit;
		color: #ccc;
		padding: 0.125rem 0.625rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: default;
		margin-right: 5px;

		@media screen and (max-width: 480px) {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const IndexSearchInput = styled.input`
	font-size: inherit;
	border: none;
	padding-left: calc(101px + 1.3rem);
	outline: none;
	background-color: none;
	border-radius: 24px 0 0 24px;
	width: 474px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	::placeholder {
		opacity: 0.6;
	}
`;

export const IndexAdvancedSearch = styled.div`
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
