import styled, { css } from "styled-components";

const widthHeader = "64px";
const widthFooter = "109px";

export const MainContainer = styled.main`
	display: flex;
	background-color: #fff;
	color: ${({ theme }) => theme.bodyText};
	padding-bottom: ${widthFooter};
`;

export const SideMenu = styled.aside`
	position: fixed;
	top: ${widthHeader};
	left: 0;
	z-index: 998;
	height: calc(93vh - ${widthFooter});
	padding: 1rem 0;
	background-color: #f2f2f2;
	color: ${({ theme }) => theme.primaryColor};
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
`;

export const ChevronButton = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const CategoriesList = styled.ul`
	list-style: none;
	max-height: calc(93vh - ${widthHeader} - ${widthFooter} - 2rem);
	overflow-y: auto;

	li {
		cursor: pointer;
		padding: 1rem 2rem;

		&.active {
			background-color: ${({ theme }) => theme.buttonColor};
			color: ${({ theme }) => theme.asideColor};
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
`;

export const PromptsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: calc(${widthHeader} + 1rem);
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
`;

export const NoResultsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - ${widthHeader} - ${widthFooter});
	width: 100%;
`;

export const PromptsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	background-color: #f2f2f2;
	max-width: 100%;
	border-radius: 20px;
	padding: 20px;
	overflow-y: auto;
	margin-right: 1.5rem;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Subcategory = styled.div`
	margin-bottom: 3rem;

	h3 {
		text-transform: uppercase;
	}
`;
