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
		border-bottom: 1px solid #dadce0;
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
	gap: 30px;

	@media screen and (max-width: 480px) {
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
