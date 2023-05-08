import styled, { css } from "styled-components";

const widthHeader = "58px";
const widthHeaderLarge = "122px";
const widthHeaderMedium = "120px";
const widthHeaderSmall = "167px";
const widthHeaderSmaller = "182px";
const widthFooter = "109px";

export const MainContainer = styled.main`
	display: flex;
	background-color: #fafafa;
	color: #666;
	padding-bottom: ${widthFooter};
	height: 100%;
	@media screen and (max-width: 1024px) {
		padding-bottom: 0;
	}
`;

export const SideMenu = styled.aside`
	position: fixed;
	top: ${widthHeader};
	left: 0;
	z-index: 998;
	height: 100%;
	padding: 1rem 0;
	background-color: #f2f2f2;
	color: #666;
	box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);

	${({ collapsed }) =>
		collapsed
			? css`
					width: 2%;
			  `
			: css`
					width: 250px;
			  `}

	h2 {
		padding: 0 2rem;
		margin-bottom: 1.125rem;
	}

	@media screen and (max-width: 1024px) {
		display: flex;
		align-items: center;
		top: ${widthHeaderLarge};
		height: auto;
		padding: 0;
		width: 100%;

		h2 {
			margin-bottom: 0;
		}

		${({ collapsed }) =>
			collapsed
				? css`
						width: 100%;
				  `
				: css`
						width: 100%;
				  `}
	}

	@media screen and (max-width: 768px) {
		top: ${widthHeaderMedium};
	}

	@media screen and (max-width: 480px) {
		top: ${widthHeaderSmall};
	}

	@media screen and (max-width: 375px) {
		top: ${widthHeaderSmaller};
	}
`;

export const ChevronButton = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const CategoriesList = styled.ul`
	list-style: none;
	max-height: calc(93vh - ${widthHeader} - ${widthFooter} - 2rem);
	overflow-y: auto;

	li {
		cursor: pointer;
		padding: 1rem 2rem;

		&.active {
			background-color: #3498db;
			color: #fff;
		}

		&:hover,
		&:focus {
			text-decoration: underline;

			&.active {
				text-decoration: none;
			}
		}
	}

	::-webkit-scrollbar {
		display: none;
		width: 6px;
		background-color: transparent;
		transition: all 0.3s;
	}

	&:hover::-webkit-scrollbar {
		display: block;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #dadce0;
	}

	@media screen and (max-width: 1024px) {
		flex-direction: row;
		max-height: auto;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;

		li {
			display: inline-block;
			padding: 1rem 2rem;
		}

		&:hover::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const PromptsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: calc(${widthHeader} + 1.9rem);
	width: 100%;

	${({ collapsed }) =>
		collapsed
			? css`
					margin-left: calc(40px + 1.5rem);
					transition: all 0.3s ease;
			  `
			: css`
					margin-left: calc(250px + 1.5rem);
					transition: all 0.3s ease;
			  `}

	@media screen and (max-width: 1024px) {
		margin-top: calc(${widthHeaderLarge} + 6rem);
		margin-left: 0;
	}

	@media screen and (max-width: 480px) {
		margin-top: calc(178px + 5rem);
	}

	@media screen and (max-width: 480px) {
		margin-top: calc(218px + 5rem);
	}
`;

export const NoResultsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - ${widthHeader} - ${widthFooter});
	width: 100%;
	overflow: hidden;

	@media screen and (max-width: 1024px) {
		align-items: normal;
		height: calc(100vh - 182px - 91px);
	}
`;

export const PromptsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	max-width: 100%;
	border-radius: 20px;
	padding: 20px;
	overflow-y: auto;
	margin-right: 1.5rem;

	${({ collapsed }) =>
		collapsed
			? css`
					grid-template-columns: repeat(4, 1fr);
			  `
			: css`
					grid-template-columns: repeat(3, 1fr);
			  `}

	&::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		display: flex;
		margin-right: 0;
	}
`;

export const Subcategory = styled.div`
	margin-bottom: 3rem;

	h3 {
		font-family: "Valorant", sans-serif;
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 0;
	}

	@media screen and (max-width: 1024px) {
		h3 {
			font-size: 1.5rem;
		}
	}
`;
