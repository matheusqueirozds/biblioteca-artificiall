import styled from "styled-components";

export const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100%;
	z-index: 999;
	background-color: #f2f2f2;
	color: #70757a;
	font-size: 14px;
	border-top: 1px solid #d0d7de;

	@media screen and (max-width: 1024px) {
		position: relative;
		font-size: 14px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 10px 40px;

	&:first-child {
		border-bottom: 1px solid #d0d7de;
	}

	&:last-child {
		padding-bottom: 0;
	}

	@media screen and (max-width: 480px) {
		justify-content: center;
		padding: 10px 20px;
	}
`;

export const FooterList = styled.ul`
	display: flex;

	a {
		padding: 15px;
		opacity: 1;
	}
`;

export const LeftLinks = styled.div``;

export const RightLinks = styled.div``;

export const FooterCopy = styled.p`
	width: 100%;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;
