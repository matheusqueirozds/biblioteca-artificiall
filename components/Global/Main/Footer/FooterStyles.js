import styled from "styled-components";

export const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100%;
	z-index: 999;
	background-color: #f2f2f2;
	color: #70757a;
	font-size: 15px;
`;

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;

	&:first-child {
		border-bottom: 1px solid #dadce0;
	}
`;

export const FooterList = styled.ul`
	display: flex;

	li {
		padding: 15px;
	}
`;

export const LeftLinks = styled.div``;

export const RightLinks = styled.div``;
