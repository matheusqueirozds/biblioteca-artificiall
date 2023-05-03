import styled, { css } from "styled-components";

const widthHeader = "74px";

export const MainContainer = styled.main`
	display: flex;
	background-color: ${({ theme }) => theme.bodyBackground};
	color: ${({ theme }) => theme.bodyText};
`;

export const SideMenu = styled.aside`
	position: fixed;
	top: ${widthHeader};
	left: 0;
	z-index: 998;
	width: 250px;
	height: 100vh;
	padding: 1rem 0;
	background-color: ${({ theme }) => theme.asideBackground};
	color: ${({ theme }) => theme.primaryColor};
	box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);
	overflow-y: auto;

	h2 {
		padding: 0 2rem;
		margin-bottom: 1.125rem;
	}

	ul {
		list-style: none;

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
	}
`;

export const PromptsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: calc(${widthHeader} + 1rem);
	margin-left: calc(250px + 1rem);
	width: 100%;
`;

export const PromptsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	background-color: #ddd;
	max-width: 84.5vw;
	border-radius: 20px;
	padding: 30px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Subcategory = styled.div`
	margin-bottom: 2rem;

	h3 {
		text-transform: uppercase;
	}
`;
