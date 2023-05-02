import styled from "styled-components";

export const HomeContainer = styled.div`
	background-color: #ffffff;
	color: ${({ theme }) => theme.bodyText};
	min-height: calc(100vh - 3rem);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	text-align: center;
`;

export const Logo = styled.img`
	width: 200px;
	margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 12px;
`;

export const Button = styled.button`
	padding: 11px 16px;
	color: #3c4043;
	background-color: #f8f9fa;
	font-size: 14px;
	border-radius: 4px;
`;
