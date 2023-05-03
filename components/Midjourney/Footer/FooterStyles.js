import styled from "styled-components";

export const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 250px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	background-color: ${({ theme }) => theme.headerBackground};
	color: ${({ theme }) => theme.headerText};
`;
