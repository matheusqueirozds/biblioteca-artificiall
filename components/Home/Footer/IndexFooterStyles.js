import styled from "styled-components";

export const IndexFooterContainer = styled.footer`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.headerBackground};
`;

export const FooterLinkList = styled.ul`
	display: flex;
	list-style-type: none;
`;

export const FooterLink = styled.a`
	color: ${({ theme }) => theme.headerText};
	margin-left: 1.5rem;
	text-decoration: none;
	transition: color 0.2s;

	&:hover {
		text-decoration: underline;
	}
`;

export const LeftLinks = styled.div``;

export const RightLinks = styled.div``;
